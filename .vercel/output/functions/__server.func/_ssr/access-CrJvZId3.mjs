import { r as createServerFn } from "./ssr.mjs";
import { r as getSql } from "./db-6Z3KeLXa.mjs";
import { t as createServerRpc } from "./createServerRpc-CcvdN_gc.mjs";
import { i as normalizeStatus, n as authMiddleware, r as isOwnerEmail, t as OWNER_EMAIL } from "./access-policy-CIRrabJH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/access-CrJvZId3.js
function text(value) {
	return value == null ? "" : String(value);
}
function stamp(value) {
	if (value instanceof Date) return value.toISOString();
	return text(value);
}
async function pendingCount(sql) {
	const rows = await sql`
    select count(*) as n
    from "user" u
    left join account_access a on a.user_id = u.id
    where lower(u.email) <> ${OWNER_EMAIL}
      and coalesce(a.status, 'pending') = 'pending'
  `;
	const n = Number(rows[0]?.n ?? 0);
	return Number.isFinite(n) ? n : 0;
}
async function ensureAccess(sql, userId) {
	const rows = await sql`select email from "user" where id = ${userId}`;
	if (isOwnerEmail(rows[0]?.email)) {
		await sql`
      insert into account_access (user_id, status)
      values (${userId}, 'approved')
      on conflict (user_id) do update set status = 'approved', updated_at = now()
    `;
		return {
			status: "approved",
			admin: true,
			pendingCount: await pendingCount(sql)
		};
	}
	await sql`
    insert into account_access (user_id, status)
    values (${userId}, 'pending')
    on conflict (user_id) do nothing
  `;
	const current = await sql`select status from account_access where user_id = ${userId}`;
	return {
		status: normalizeStatus(current[0]?.status),
		admin: false,
		pendingCount: 0
	};
}
async function requireAdmin(sql, userId) {
	if (!(await ensureAccess(sql, userId)).admin) throw new Error("Sem permissão.");
}
function mapAccount(row, selfId) {
	const email = text(row.email);
	const id = text(row.id);
	return {
		id,
		name: text(row.name),
		email,
		createdAt: stamp(row.created_at),
		status: normalizeStatus(row.status),
		self: id === selfId || isOwnerEmail(email)
	};
}
async function listForAdmin(sql, userId) {
	await requireAdmin(sql, userId);
	return (await sql`
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
  `).map((row) => mapAccount(row, userId));
}
var readMyAccess_createServerFn_handler = createServerRpc({
	id: "8d9cbb8ee2ca4bd3aa70714d533acd12b9b6f65d5811beb817ba181f10c3f789",
	name: "readMyAccess",
	filename: "src/lib/finance/access.ts"
}, (opts) => readMyAccess.__executeServer(opts));
var readMyAccess = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(readMyAccess_createServerFn_handler, async ({ context }) => {
	return ensureAccess(await getSql(), context.userId);
});
var listAccounts_createServerFn_handler = createServerRpc({
	id: "0aea3517d2716904eb2f0f9bdc2ee3bc73a1e28ac2fe787828a371657736fc6a",
	name: "listAccounts",
	filename: "src/lib/finance/access.ts"
}, (opts) => listAccounts.__executeServer(opts));
var listAccounts = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(listAccounts_createServerFn_handler, async ({ context }) => {
	return listForAdmin(await getSql(), context.userId);
});
var setAccountAccess_createServerFn_handler = createServerRpc({
	id: "14786d80690684c441a79356b4a27ed0daddc5f2efb22235239fdec936ecd750",
	name: "setAccountAccess",
	filename: "src/lib/finance/access.ts"
}, (opts) => setAccountAccess.__executeServer(opts));
var setAccountAccess = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((input) => {
	if (!input || typeof input !== "object") throw new Error("Pedido inválido.");
	const userId = input.userId;
	const status = input.status;
	if (typeof userId !== "string" || !userId.trim()) throw new Error("Pedido inválido.");
	if (status !== "approved" && status !== "blocked") throw new Error("Pedido inválido.");
	return {
		userId,
		status
	};
}).handler(setAccountAccess_createServerFn_handler, async ({ context, data }) => {
	const sql = await getSql();
	await requireAdmin(sql, context.userId);
	if (data.userId === context.userId) throw new Error("Sua conta permanece liberada.");
	const target = await sql`select email from "user" where id = ${data.userId}`;
	if (!target[0]) throw new Error("Conta não encontrada.");
	if (isOwnerEmail(target[0].email)) throw new Error("Essa conta permanece liberada.");
	await sql`
      insert into account_access (user_id, status)
      values (${data.userId}, ${data.status})
      on conflict (user_id) do update set status = excluded.status, updated_at = now()
    `;
	return listForAdmin(sql, context.userId);
});
//#endregion
export { listAccounts_createServerFn_handler, readMyAccess_createServerFn_handler, setAccountAccess_createServerFn_handler };
