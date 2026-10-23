import { UserButton } from "@/lib/auth/gates";

export function AccessHold({ status }: { status: "pending" | "blocked" }) {
  const blocked = status === "blocked";
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col justify-center px-6 py-16">
      <p className="wordmark text-xs text-muted">Bankai</p>
      <h1 className="mt-4 text-4xl font-medium tracking-tight">
        {blocked ? "Acesso encerrado." : "Conta em análise."}
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {blocked
          ? "Esta conta não entra no caixa. Se foi um engano, peça para liberarem de novo."
          : "Seu cadastro chegou. O caixa abre neste e-mail assim que for liberado."}
      </p>
      {blocked ? null : <p className="mt-3 text-xs text-subtle">Esta tela atualiza sozinha.</p>}
      <div className="mt-10">
        <UserButton />
      </div>
    </main>
  );
}
