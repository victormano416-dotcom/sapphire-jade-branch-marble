import { useState, type FormEvent } from "react";
import { authClient, GROK_PROVIDERS, signIn } from "@/lib/auth/client";

function mapAuthError(message?: string) {
  const text = (message ?? "").toLowerCase();
  if (text.includes("password") || text.includes("senha")) return "A senha precisa ter pelo menos 8 caracteres.";
  if (text.includes("exist")) return "Já existe uma conta com esse e-mail.";
  if (text.includes("invalid") || text.includes("credential") || text.includes("incorrect")) {
    return "E-mail ou senha não conferem.";
  }
  if (text.includes("email")) return "Digite um e-mail válido.";
  return "Não foi possível entrar. Tente de novo.";
}

export function AuthScreen() {
  const [mode, setMode] = useState<"in" | "up">("up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: FormEvent) {
    event.preventDefault();
    setError("");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Digite um e-mail válido.");
      return;
    }
    if (password.length < 8) {
      setError("A senha precisa ter pelo menos 8 caracteres.");
      return;
    }
    setBusy(true);
    try {
      if (mode === "up") {
        const created = await authClient.signUp.email({
          email,
          password,
          name: name.trim() || "Você",
          callbackURL: "/",
        });
        if (created.error) {
          setError(mapAuthError(created.error.message));
          setBusy(false);
          return;
        }
      }
      const signed = await authClient.signIn.email({ email, password, callbackURL: "/" });
      if (signed.error) {
        setError(mapAuthError(signed.error.message));
        setBusy(false);
      }
    } catch (err) {
      setError(mapAuthError(err instanceof Error ? err.message : ""));
      setBusy(false);
    }
  }

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col justify-center px-6 py-16">
      <p className="wordmark text-xs text-muted">Bankai</p>
      <h1 className="mt-4 text-4xl font-medium tracking-tight">
        {mode === "up" ? "Crie seu caixa." : "Bem-vindo de volta."}
      </h1>
      <p className="mt-3 text-sm text-muted">Entradas, gastos e a fatura do cartão no mesmo lugar.</p>
      <form onSubmit={submit} className="mt-8 space-y-3">
        {mode === "up" ? (
          <input
            className="h-12 w-full rounded-2xl bg-surface px-4 text-base outline-none ring-1 ring-line focus:ring-accent"
            placeholder="Seu nome"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        ) : null}
        <input
          className="h-12 w-full rounded-2xl bg-surface px-4 text-base outline-none ring-1 ring-line focus:ring-accent"
          placeholder="E-mail"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <input
          className="h-12 w-full rounded-2xl bg-surface px-4 text-base outline-none ring-1 ring-line focus:ring-accent"
          placeholder="Senha"
          type="password"
          autoComplete={mode === "up" ? "new-password" : "current-password"}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        {error ? (
          <p className="text-sm text-danger" role="alert">
            {error}
          </p>
        ) : null}
        <button
          type="submit"
          disabled={busy}
          className="h-12 w-full rounded-full bg-accent text-sm font-medium text-accent-fg transition active:scale-[0.98] disabled:opacity-50"
        >
          {busy ? "Aguarde…" : mode === "up" ? "Criar conta" : "Entrar"}
        </button>
      </form>
      <button
        type="button"
        className="mt-4 text-sm text-muted"
        onClick={() => {
          setMode(mode === "up" ? "in" : "up");
          setError("");
        }}
      >
        {mode === "up" ? "Já tenho conta" : "Criar uma conta"}
      </button>
      <div className="my-6 flex items-center gap-3 text-xs text-subtle">
        <span className="h-px flex-1 bg-line" />
        ou
        <span className="h-px flex-1 bg-line" />
      </div>
      <div className="space-y-2">
        {GROK_PROVIDERS.map((provider) => (
          <button
            key={provider.providerId}
            type="button"
            onClick={() => void signIn(provider.providerId, { callbackURL: "/" })}
            className="h-12 w-full rounded-full text-sm ring-1 ring-line transition active:scale-[0.98]"
          >
            Continuar com {provider.label}
          </button>
        ))}
      </div>
    </main>
  );
}
