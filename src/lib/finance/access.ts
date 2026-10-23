import { createServerFn } from "@tanstack/react-start";
import { authMiddleware } from "@/lib/auth/middleware";
import { getSql, type Sql } from "@/lib/db";
import { OWNER_EMAIL, isOwnerEmail, normalizeStatus, type AccessStatus } from "./access-policy";

export type AccessState = {
  status: AccessStatus;
  admin: boolean;
  pendingCount: number;
};

export type AccountRow = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  status: AccessStatus;
  self: boolean;
};

function text(value: unknown) {
  return value == null ? "" : String(value);
}

function stamp(value: unknown) {
  if (value instanceof Date) return value.toISOString();
  return text(value);
}

async function pendingCount(sql: Sql) {
  const rows = await sql<{ n: unknown }>`
    select count(*) as n
    from "user" u
    left join account_access a on a.user_id = u.id
    where lower(u.email) <> ${OWNER_EMAIL}
      and coalesce(a.status, 'pending') = 'pending'
  `;
  const n = Number(rows[0]?.n ?? 0);
  return Number.isFinite(n) ? n : 0;
}

export async function ensureAccess(sql: Sql, userId: string): Promise<AccessState> {
  const rows = await sql<{ email: string | null }>`select email from "user" where id = ${userId}`;
  const admin = isOwnerEmail(rows[0]?.email);
  if (admin) {
    await sql`
      insert into account_access (user_id, status)
      values (${userId}, 'approved')
      on conflict (user_id) do update set status = 'approved', updated_at = now()
    `;
    return { status: "approved", admin: true, pendingCount: await pendingCount(sql) };
  }
  await sql`
    insert into account_access (user_id, status)
    values (${userId}, 'pending')
    on conflict (user_id) do nothing
  `;
  const current = await sql<{ status: string }>`select status from account_access where user_id = ${userId}`;
  return { status: normalizeStatus(current[0]?.status), admin: false, pendingCount: 0 };
}

export async function assertApproved(sql: Sql, userId: string) {
  const access = await ensureAccess(sql, userId);
  if (access.status === "blocked") throw new Error("ACCESS_BLOCKED");
  if (access.status !== "approved") throw new Error("ACCESS_PENDING");
  return access;
}

async function requireAdmin(sql: Sql, userId: string) {
  const access = await ensureAccess(sql, userId);
  if (!access.admin) throw new Error("Sem permissão.");
}

function mapAccount(row: Record<string, unknown>, selfId: string): AccountRow {
  const email = text(row.email);
  const id = text(row.id);
  return {
    id,
    name: text(row.name),
    email,
    createdAt: stamp(row.created_at),
    status: normalizeStatus(row.status),
    self: id === selfId || isOwnerEmail(email),
  };
}

async function listForAdmin(sql: Sql, userId: string): Promise<AccountRow[]> {
  await requireAdmin(sql, userId);
  const rows = await sql<Record<string, unknown>>`
    select u.id, u.name, u.email, u."createdAt" as created_at, coalesce(a.status, 'pending') as status
    from "user" u
    left join account_access a on a.user_id = u.id
    order by
      case coalesce(a.status, 'pending')
        when 'pending' then 0
        when 'blocked' then 1
        else 2
      end,
      u."createdAt" desc
  `;
  return rows.map((row) => mapAccount(row, userId));
}

export const readMyAccess = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }): Promise<AccessState> => {
    const sql = await getSql();
    return ensureAccess(sql, context.userId);
  });

export const listAccounts = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }): Promise<AccountRow[]> => {
    const sql = await getSql();
    return listForAdmin(sql, context.userId);
  });

export const setAccountAccess = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((input: unknown): { userId: string; status: "approved" | "blocked" } => {
    if (!input || typeof input !== "object") throw new Error("Pedido inválido.");
    const userId = (input as { userId?: unknown }).userId;
    const status = (input as { status?: unknown }).status;
    if (typeof userId !== "string" || !userId.trim()) throw new Error("Pedido inválido.");
    if (status !== "approved" && status !== "blocked") throw new Error("Pedido inválido.");
    return { userId, status };
  })
  .handler(async ({ context, data }): Promise<AccountRow[]> => {
    const sql = await getSql();
    await requireAdmin(sql, context.userId);
    if (data.userId === context.userId) throw new Error("Sua conta permanece liberada.");
    const target = await sql<{ email: string | null }>`select email from "user" where id = ${data.userId}`;
    if (!target[0]) throw new Error("Conta não encontrada.");
    if (isOwnerEmail(target[0].email)) throw new Error("Essa conta permanece liberada.");
    await sql`
      insert into account_access (user_id, status)
      values (${data.userId}, ${data.status})
      on conflict (user_id) do update set status = excluded.status, updated_at = now()
    `;
    return listForAdmin(sql, context.userId);
  });
