import { useEffect, useState } from "react";
import { listAccounts, setAccountAccess, type AccountRow } from "@/lib/finance/access";
import type { AccessStatus } from "@/lib/finance/access-policy";
import { useFinance } from "./provider";

const LABEL: Record<AccessStatus, string> = {
  pending: "Aguardando",
  approved: "Liberada",
  blocked: "Bloqueada",
};

function when(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
}

function message(error: unknown) {
  if (error instanceof Error && error.message) return error.message;
  return "Não foi possível atualizar as contas.";
}

export function AccountsPanel() {
  const { pendingCount } = useFinance();
  const [rows, setRows] = useState<AccountRow[] | null>(null);
  const [error, setError] = useState("");
  const [busyId, setBusyId] = useState("");

  useEffect(() => {
    let cancel = false;
    listAccounts()
      .then((next) => {
        if (!cancel) setRows(next);
      })
      .catch((err: unknown) => {
        if (!cancel) setError(message(err));
      });
    return () => {
      cancel = true;
    };
  }, [pendingCount]);

  async function setStatus(userId: string, status: "approved" | "blocked") {
    setBusyId(userId);
    setError("");
    try {
      setRows(await setAccountAccess({ data: { userId, status } }));
    } catch (err) {
      setError(message(err));
    } finally {
      setBusyId("");
    }
  }

  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm text-muted">Contas</h3>
        <button
          type="button"
          className="text-sm"
          onClick={() => {
            setError("");
            void listAccounts().then(setRows).catch((err: unknown) => setError(message(err)));
          }}
        >
          Atualizar
        </button>
      </div>
      <p className="text-sm text-muted">Quem se cadastra fica aqui até você liberar. Bloquear tira o acesso e mantém os dados.</p>
      {error ? <p className="text-sm text-danger">{error}</p> : null}
      {rows === null && !error ? <p className="text-sm text-muted">Carregando…</p> : null}
      {rows?.length === 0 ? <p className="text-sm text-muted">Nenhuma conta ainda.</p> : null}
      {rows?.map((row) => (
        <article
          key={row.id}
          className={`rounded-2xl p-4 ring-1 ${row.status === "pending" ? "ring-accent" : "ring-line"}`}
        >
          <p className="text-sm">{row.name || "Sem nome"}</p>
          <p className="truncate text-sm text-muted">{row.email}</p>
          <p className="mt-1 text-xs text-subtle">
            {when(row.createdAt)}
            {when(row.createdAt) ? " · " : ""}
            {LABEL[row.status]}
          </p>
          {row.self ? (
            <p className="mt-3 text-xs text-muted">Sua conta</p>
          ) : (
            <div className="mt-3 flex gap-2">
              {row.status !== "approved" ? (
                <button
                  type="button"
                  disabled={busyId === row.id}
                  className="h-10 rounded-full bg-accent px-4 text-sm text-accent-fg disabled:opacity-50"
                  onClick={() => void setStatus(row.id, "approved")}
                >
                  Liberar
                </button>
              ) : null}
              {row.status !== "blocked" ? (
                <button
                  type="button"
                  disabled={busyId === row.id}
                  className="h-10 rounded-full px-4 text-sm ring-1 ring-line disabled:opacity-50"
                  onClick={() => void setStatus(row.id, "blocked")}
                >
                  Bloquear
                </button>
              ) : null}
            </div>
          )}
        </article>
      ))}
    </section>
  );
}
