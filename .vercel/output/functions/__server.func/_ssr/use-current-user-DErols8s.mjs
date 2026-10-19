import { o as __toESM } from "../_runtime.mjs";
import { J as require_react, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as fullMonthLabel } from "./period-BiCz9Slh.mjs";
import { r as signIn, t as authClient } from "./client-1vAx-gM_.mjs";
import { t as GROK_PROVIDERS } from "./server-DQKpQRC6.mjs";
import { t as X } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-current-user-DErols8s.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function mapAuthError(message) {
	const text = (message ?? "").toLowerCase();
	if (text.includes("password") || text.includes("senha")) return "A senha precisa ter pelo menos 8 caracteres.";
	if (text.includes("exist")) return "Já existe uma conta com esse e-mail.";
	if (text.includes("invalid") || text.includes("credential") || text.includes("incorrect")) return "E-mail ou senha não conferem.";
	if (text.includes("email")) return "Digite um e-mail válido.";
	return "Não foi possível entrar. Tente de novo.";
}
function AuthScreen() {
	const [mode, setMode] = (0, import_react.useState)("up");
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	async function submit(event) {
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
					callbackURL: "/"
				});
				if (created.error) {
					setError(mapAuthError(created.error.message));
					setBusy(false);
					return;
				}
			}
			const signed = await authClient.signIn.email({
				email,
				password,
				callbackURL: "/"
			});
			if (signed.error) {
				setError(mapAuthError(signed.error.message));
				setBusy(false);
			}
		} catch (err) {
			setError(mapAuthError(err instanceof Error ? err.message : ""));
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex min-h-dvh w-full max-w-md flex-col justify-center px-6 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "wordmark text-xs text-muted",
				children: "Bankai"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 text-4xl font-medium tracking-tight",
				children: mode === "up" ? "Crie seu caixa." : "Bem-vindo de volta."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: "Entradas, gastos e a fatura do cartão no mesmo lugar."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				className: "mt-8 space-y-3",
				children: [
					mode === "up" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "h-12 w-full rounded-2xl bg-surface px-4 text-base outline-none ring-1 ring-line focus:ring-accent",
						placeholder: "Seu nome",
						autoComplete: "name",
						value: name,
						onChange: (event) => setName(event.target.value)
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "h-12 w-full rounded-2xl bg-surface px-4 text-base outline-none ring-1 ring-line focus:ring-accent",
						placeholder: "E-mail",
						type: "email",
						autoComplete: "email",
						value: email,
						onChange: (event) => setEmail(event.target.value),
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "h-12 w-full rounded-2xl bg-surface px-4 text-base outline-none ring-1 ring-line focus:ring-accent",
						placeholder: "Senha",
						type: "password",
						autoComplete: mode === "up" ? "new-password" : "current-password",
						value: password,
						onChange: (event) => setPassword(event.target.value),
						required: true
					}),
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-danger",
						role: "alert",
						children: error
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: busy,
						className: "h-12 w-full rounded-full bg-accent text-sm font-medium text-accent-fg transition active:scale-[0.98] disabled:opacity-50",
						children: busy ? "Aguarde…" : mode === "up" ? "Criar conta" : "Entrar"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-4 text-sm text-muted",
				onClick: () => {
					setMode(mode === "up" ? "in" : "up");
					setError("");
				},
				children: mode === "up" ? "Já tenho conta" : "Criar uma conta"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "my-6 flex items-center gap-3 text-xs text-subtle",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-line" }),
					"ou",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-line" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-2",
				children: GROK_PROVIDERS.map((provider) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => void signIn(provider.providerId, { callbackURL: "/" }),
					className: "h-12 w-full rounded-full text-sm ring-1 ring-line transition active:scale-[0.98]",
					children: ["Continuar com ", provider.label]
				}, provider.providerId))
			})
		]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function brl(cents, hidden = false) {
	if (hidden) return "••••";
	return (cents / 100).toLocaleString("pt-BR", {
		style: "currency",
		currency: "BRL"
	});
}
function brlPlain(cents) {
	return (cents / 100).toLocaleString("pt-BR", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	});
}
/** Digits are cents: "39400" and "394,00" both become 39400. */
function centsFromText(raw) {
	const digits = raw.replace(/\D/g, "");
	if (!digits) return 0;
	const n = Number(digits);
	if (!Number.isFinite(n)) return 0;
	return Math.min(n, 1e11);
}
function parseBrlNumber(token) {
	const clean = token.trim().replace(/\./g, "").replace(",", ".");
	const n = Number(clean);
	if (!Number.isFinite(n)) return 0;
	return Math.round(n * 100);
}
function Boot() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex min-h-dvh w-full max-w-md flex-col px-6 py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "wordmark text-xs text-muted",
				children: "BANKAI"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-10 text-4xl font-medium tracking-tight",
				children: "Seu caixa, sem planilha."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-xs text-sm text-muted",
				children: "Entradas, gastos e a fatura do cartão no mesmo lugar."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 space-y-3",
				"aria-hidden": "true",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "skel h-14 w-44 rounded-2xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "skel h-28 w-full rounded-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "skel h-36 w-full rounded-3xl" })
				]
			})
		]
	});
}
function Money({ cents, hidden, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("tabular-nums", className),
		children: brl(cents, hidden)
	});
}
function cap(value) {
	if (!value) return value;
	return value.charAt(0).toUpperCase() + value.slice(1);
}
function monthTitle(ym) {
	return cap(fullMonthLabel(ym));
}
function Button({ children, onClick, type = "button", tone = "solid", disabled, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		onClick,
		disabled,
		className: cn("inline-flex h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition duration-200 active:scale-[0.98] disabled:opacity-50", tone === "solid" && "bg-accent text-accent-fg", tone === "line" && "bg-transparent text-fg ring-1 ring-line", tone === "ghost" && "bg-transparent text-muted", className),
		children
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-2 block text-xs text-muted",
			children: label
		}), children]
	});
}
var fieldClass = "h-12 w-full rounded-2xl bg-surface-2 px-4 text-base text-fg outline-none ring-1 ring-line transition focus:ring-accent";
function Modal({ title, onClose, children }) {
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
			if (event.key === "Escape") onClose();
		};
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", onKey);
		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", onKey);
		};
	}, [onClose]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 flex items-end justify-center sm:items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "absolute inset-0 bg-overlay",
			"aria-label": "Fechar",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-modal": "true",
			"aria-label": title,
			className: "rise glass relative max-h-[92dvh] w-full max-w-lg overflow-y-auto rounded-t-3xl p-5 sm:rounded-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-5 flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-medium",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onClose,
					className: "grid size-11 place-items-center rounded-full text-muted ring-1 ring-line",
					"aria-label": "Fechar",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
						strokeWidth: 1.5,
						className: "size-4"
					})
				})]
			}), children]
		})]
	});
}
function Empty({ title, body, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-3xl px-5 py-10 text-center ring-1 ring-line",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-lg font-medium",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-2 max-w-xs text-sm text-muted",
				children: body
			}),
			action ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 flex justify-center",
				children: action
			}) : null
		]
	});
}
function Notice({ text, onDone }) {
	(0, import_react.useEffect)(() => {
		const timer = window.setTimeout(onDone, 3200);
		return () => window.clearTimeout(timer);
	}, [onDone]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed top-4 left-1/2 z-50 w-[min(100%-2rem,24rem)] -translate-x-1/2 rounded-full bg-fg px-4 py-3 text-center text-sm text-bg",
		children: text
	});
}
function LimitBar({ ratio }) {
	const pct = Math.max(0, Math.min(100, Math.round(ratio * 100)));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-1 overflow-hidden rounded-full bg-line",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("h-full rounded-full transition-all duration-500", ratio >= 1 ? "bg-danger" : ratio >= .8 ? "bg-warn" : "bg-accent"),
			style: { width: `${pct}%` }
		})
	});
}
function PlasticCard({ card, used, invoice, hidden, alert, onClick }) {
	const ratio = card.limitCents > 0 ? used / card.limitCents : 0;
	const pct = Math.max(0, Math.round(ratio * 100));
	const body = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative z-10 flex items-start justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs tracking-widest text-muted uppercase",
			children: "Crédito"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "mt-1 text-2xl font-medium tracking-tight",
			children: card.name
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "card-chip shrink-0",
			"aria-hidden": "true"
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative z-10 mt-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 flex items-center justify-between text-xs text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Uso do limite" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tabular-nums",
					children: hidden ? "••••" : `${pct}%`
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LimitBar, { ratio }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-end justify-between gap-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: "Disponível"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
					cents: Math.max(0, card.limitCents - used),
					hidden,
					className: "text-lg"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-right",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: "Fatura"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
						cents: invoice,
						hidden,
						className: "text-lg"
					})]
				})]
			}),
			alert ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-3 text-xs", ratio >= 1 ? "text-danger" : "text-warn"),
				children: alert
			}) : null
		]
	})] });
	const className = cn("plastic w-full p-5 text-left", `tone-${card.tone}`, onClick && "transition active:scale-[0.99]");
	if (onClick) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className,
		children: body
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className,
		children: body
	});
}
function Confetti({ onDone }) {
	(0, import_react.useEffect)(() => {
		const timer = window.setTimeout(onDone, 1100);
		return () => window.clearTimeout(timer);
	}, [onDone]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed inset-x-0 top-16 z-50 flex justify-center gap-2",
		"aria-hidden": "true",
		children: Array.from({ length: 7 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "size-2 rounded-full bg-accent",
			style: { animation: `rise 700ms ease ${i * 40}ms both` }
		}, i))
	});
}
/**
* Current user + loading state. Same behavior in live preview and when deployed:
*   - Auth enabled -> the real signed-in user; `user` is `null` while
*                            the session resolves (`isPending: true`) and when
*                            signed out (`isPending: false`). Session comes from
*                            Better Auth `useSession()` → `/api/auth/get-session`
*                            (cookie when deployed; bearer in live preview).
*   - Auth disabled (`VITE_AUTH_ENABLED=false`) -> `DEV_USER`, never pending.
*
* Protect a route by waiting out `isPending` before acting on `user` —
* redirecting on `user: null` alone bounces signed-in visitors to sign-in on
* every hard reload:
*
*   import { RedirectToSignIn } from "@/lib/auth/gates";
*   const { user, isPending } = useCurrentUserState();
*   if (isPending) return null;              // still resolving — don't redirect yet
*   if (!user) return <RedirectToSignIn />;  // definitely signed out
*
* `authEnabled` is a module-level constant fixed at load, so the guarded hook
* call keeps a stable hook order across every render of a given component.
*/
function useCurrentUserState() {
	return useSessionUserState();
}
function useSessionUserState() {
	const { data, isPending } = authClient.useSession();
	const id = data?.user.id;
	const displayName = data?.user.name ?? null;
	const primaryEmail = data?.user.email ?? null;
	const profileImageUrl = data?.user.image ?? null;
	const user = (0, import_react.useMemo)(() => id ? {
		id,
		displayName,
		primaryEmail,
		profileImageUrl,
		isDevFallback: false
	} : null, [
		id,
		displayName,
		primaryEmail,
		profileImageUrl
	]);
	return (0, import_react.useMemo)(() => ({
		user,
		isPending
	}), [user, isPending]);
}
/**
* Convenience view of `useCurrentUserState().user` for display (e.g.
* `user?.displayName ?? "Guest"`). NOTE: `null` means *loading OR signed out* —
* for redirects/guards use `useCurrentUserState()` and check `isPending`.
*/
function useCurrentUser() {
	return useCurrentUserState().user;
}
//#endregion
export { useCurrentUser as _, Empty as a, Money as c, brl as d, brlPlain as f, parseBrlNumber as g, monthTitle as h, Confetti as i, Notice as l, fieldClass as m, Boot as n, Field as o, centsFromText as p, Button as r, Modal as s, AuthScreen as t, PlasticCard as u, useCurrentUserState as v };
