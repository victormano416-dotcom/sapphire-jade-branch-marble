import { o as __toESM } from "../_runtime.mjs";
import { J as require_react, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as createServerFn } from "./ssr.mjs";
import { n as authMiddleware } from "./access-policy-CIRrabJH.mjs";
import { a as dateLabel, c as invoiceTotal, d as monthLabel, f as occursInMonth, g as todayYm, h as sumIncome, m as sumExpenses, n as categorySpend, o as daysUntilDue, p as openBalance, r as chargeInMonth, t as addMonths } from "./period-BiCz9Slh.mjs";
import { a as PRO_THEMES, d as readMyAccess, f as sanitizeMutation, i as METHODS, l as createSsrRpc, n as CATEGORIES, o as THEMES, p as setAccountAccess, r as INCOME_KINDS, t as CARD_TONES, u as listAccounts } from "./access--ZkvJyLC.mjs";
import { i as signOut } from "./client-1vAx-gM_.mjs";
import { a as hasGateSessionMarker } from "./server-Df_X_lg-.mjs";
import { a as House, c as CreditCard, d as ChartColumn, f as ArrowUpRight, i as Plus, l as ChevronRight, n as UserRound, o as Eye, p as ArrowDownLeft, s as EyeOff, u as ChevronLeft } from "../_libs/lucide-react.mjs";
import { _ as useCurrentUser, a as Empty, c as Money, d as brl, f as brlPlain, g as parseBrlNumber, h as monthTitle, i as Confetti, l as Notice, m as fieldClass, n as Boot, o as Field, p as centsFromText, r as Button, s as Modal, t as AuthScreen, u as PlasticCard, v as useCurrentUserState } from "./use-current-user-HT_hS61i.mjs";
import { a as Tooltip, i as ResponsiveContainer, n as XAxis, r as Area, t as AreaChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-4yWoAq8U.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var COPY = {
	obsidian: {
		label: "Obsidian",
		hint: "Preto, silêncio, foco"
	},
	paper: {
		label: "Paper",
		hint: "Claro como papel"
	},
	aurora: {
		label: "Aurora",
		hint: "Noite com violeta"
	},
	forest: {
		label: "Forest",
		hint: "Verde sage"
	},
	sand: {
		label: "Sand",
		hint: "Areia e serifa"
	}
};
function Onboarding({ mode, theme, onTheme, defaultName, onFinish }) {
	const steps = mode === "name" ? ["name"] : mode === "guest" ? ["what", "theme"] : [
		"what",
		"theme",
		"name"
	];
	const [step, setStep] = (0, import_react.useState)(0);
	const [name, setName] = (0, import_react.useState)(defaultName ?? "");
	const current = steps[step] ?? "what";
	const last = step === steps.length - 1;
	function next() {
		if (!last) {
			setStep(step + 1);
			return;
		}
		onFinish(name.trim());
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex min-h-dvh w-full max-w-md flex-col justify-between px-6 py-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "wordmark text-xs text-muted",
				children: "Bankai"
			}),
			current === "what" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-4xl font-medium tracking-tight",
					children: "Seu caixa, sem planilha."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-8 space-y-4 text-sm text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Entradas e gastos do mês, fixos ou avulsos." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Cartão com limite de verdade: o que ainda está em aberto." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Comprovante e extrato viram lançamento, sem redigitar." })
					]
				})]
			}) : null,
			current === "theme" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-4xl font-medium tracking-tight",
					children: "Escolha o clima."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 space-y-2",
					children: THEMES.map((id) => {
						const meta = COPY[id];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => onTheme(id),
							className: `flex w-full items-center gap-4 rounded-2xl px-3 py-3 text-left ring-1 transition ${theme === id ? "ring-accent" : "ring-line"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `swatch swatch-${id} size-11 shrink-0 rounded-full ring-1 ring-line` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm",
								children: meta.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "block text-xs text-muted",
								children: [meta.hint, PRO_THEMES.includes(id) ? " · Pro" : ""]
							})] })]
						}, id);
					})
				})]
			}) : null,
			current === "name" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-4xl font-medium tracking-tight",
					children: "Como podemos te chamar?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "mt-8 h-14 w-full rounded-2xl bg-surface px-4 text-lg outline-none ring-1 ring-line focus:ring-accent",
					placeholder: "Seu nome",
					value: name,
					onChange: (event) => setName(event.target.value),
					autoFocus: true
				})]
			}) : null
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			onClick: next,
			className: "w-full",
			children: last ? mode === "guest" ? "Entrar" : "Começar" : "Continuar"
		})]
	});
}
var loadFinance = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("d45afd2aa94b876252c6533eed6a1598b1d338ace844705008913a05cbcfe15f"));
var mutateFinance = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((input) => sanitizeMutation(input)).handler(createSsrRpc("91de929585e81b8c1a5493b9c0fcf8b8daa2fd6e63c987d8966c08665ee9260c"));
var subscribeToNothing = () => () => {};
var noGateSessionOnServer = () => false;
/**
* Minimal signed-in identity chip + sign-out. Restyle freely (see the
* `design-ui` skill). Sign-out is only shown when auth is enabled (the
* disabled-auth dev user has nothing to sign out of) and the session is not
* gate-materialized — behind the gate the next request signs the viewer
* straight back in, so a sign-out control there is a broken loop.
*/
function UserButton() {
	const user = useCurrentUser();
	const [signingOut, setSigningOut] = (0, import_react.useState)(false);
	const gateSession = (0, import_react.useSyncExternalStore)(subscribeToNothing, hasGateSessionMarker, noGateSessionOnServer);
	if (!user) return null;
	const label = user.displayName ?? user.primaryEmail ?? "Account";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-3 pt-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate text-sm",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate text-xs text-muted",
				children: user.primaryEmail
			})]
		}), !gateSession && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			disabled: signingOut,
			onClick: () => {
				setSigningOut(true);
				signOut().catch(() => setSigningOut(false));
			},
			className: "h-11 shrink-0 rounded-full px-4 text-sm text-fg ring-1 ring-line transition active:scale-[0.98] disabled:opacity-50",
			children: signingOut ? "Saindo…" : "Sair"
		})]
	});
}
function AccessHold({ status }) {
	const blocked = status === "blocked";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex min-h-dvh w-full max-w-md flex-col justify-center px-6 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "wordmark text-xs text-muted",
				children: "Bankai"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 text-4xl font-medium tracking-tight",
				children: blocked ? "Acesso encerrado." : "Conta em análise."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-relaxed text-muted",
				children: blocked ? "Esta conta não entra no caixa. Se foi um engano, peça para liberarem de novo." : "Seu cadastro chegou. O caixa abre neste e-mail assim que for liberado."
			}),
			blocked ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs text-subtle",
				children: "Esta tela atualiza sozinha."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserButton, {})
			})
		]
	});
}
var FinanceContext = (0, import_react.createContext)(null);
function useFinance() {
	const ctx = (0, import_react.useContext)(FinanceContext);
	if (!ctx) throw new Error("Finance fora do provedor");
	return ctx;
}
function storedTheme() {
	try {
		const value = localStorage.getItem("bankai-theme");
		if (value && THEMES.includes(value)) return value;
	} catch {}
	return null;
}
function paintTheme(theme) {
	document.documentElement.dataset.theme = theme;
	localStorage.setItem("bankai-theme", theme);
	const meta = document.querySelector("meta[name=\"theme-color\"]");
	const bg = getComputedStyle(document.documentElement).getPropertyValue("--c-bg").trim();
	if (meta && bg) meta.setAttribute("content", bg);
}
function errorText(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "object" && error && "message" in error) {
		const message = error.message;
		if (typeof message === "string" && message) return message;
	}
	return "Não foi possível salvar.";
}
function held(error) {
	const text = errorText(error);
	if (text.includes("ACCESS_BLOCKED")) return "blocked";
	if (text.includes("ACCESS_PENDING")) return "pending";
	return null;
}
function FinanceProvider({ user, children }) {
	const [gate, setGate] = (0, import_react.useState)(null);
	const [bundle, setBundle] = (0, import_react.useState)(null);
	const [failed, setFailed] = (0, import_react.useState)("");
	const [ym, setYm] = (0, import_react.useState)(() => todayYm(1));
	const [tab, setTab] = (0, import_react.useState)("home");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [notice, setNotice] = (0, import_react.useState)(null);
	const [quick, setQuick] = (0, import_react.useState)(null);
	const [confetti, setConfetti] = (0, import_react.useState)(false);
	const [pendingShare, setPendingShare] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!("serviceWorker" in navigator)) return;
		navigator.serviceWorker.register("/sw.js").catch(() => void 0);
	}, []);
	(0, import_react.useEffect)(() => {
		let cancel = false;
		readMyAccess().then((next) => {
			if (!cancel) setGate(next);
		}).catch((error) => {
			if (!cancel) setFailed(errorText(error));
		});
		return () => {
			cancel = true;
		};
	}, [user.id]);
	(0, import_react.useEffect)(() => {
		if (!gate || gate.status === "approved") return;
		const timer = window.setInterval(() => {
			readMyAccess().then((next) => setGate(next)).catch(() => void 0);
		}, 8e3);
		return () => window.clearInterval(timer);
	}, [user.id, gate?.status]);
	(0, import_react.useEffect)(() => {
		if (gate?.status !== "approved") return;
		let cancel = false;
		loadFinance().then((next) => {
			if (cancel) return;
			setFailed("");
			setBundle(next);
			setYm(todayYm(next.profile.monthStartDay));
			paintTheme(!next.profile.onboarded ? storedTheme() ?? next.profile.theme : next.profile.theme);
		}).catch((error) => {
			if (cancel) return;
			const status = held(error);
			if (status) setGate({
				status,
				admin: false,
				pendingCount: 0
			});
			else setFailed(errorText(error));
		});
		return () => {
			cancel = true;
		};
	}, [user.id, gate?.status]);
	(0, import_react.useEffect)(() => {
		if (gate?.status !== "approved") return;
		const timer = window.setInterval(() => {
			readMyAccess().then((next) => {
				if (next.status !== "approved") setBundle(null);
				setGate((prev) => prev && prev.status === next.status && prev.admin === next.admin && prev.pendingCount === next.pendingCount ? prev : next);
			}).catch(() => void 0);
		}, 15e3);
		return () => window.clearInterval(timer);
	}, [user.id, gate?.status]);
	(0, import_react.useEffect)(() => {
		if (!bundle) return;
		const params = new URLSearchParams(window.location.search);
		const text = [
			params.get("title"),
			params.get("text"),
			params.get("url")
		].filter(Boolean).join("\n");
		if (!(params.get("share") || params.get("text") || params.get("title") || params.get("image"))) return;
		const url = new URL(window.location.href);
		[
			"share",
			"title",
			"text",
			"url",
			"image"
		].forEach((key) => url.searchParams.delete(key));
		window.history.replaceState({}, "", url.pathname + url.search);
		const finish = (seed) => {
			if (bundle.profile.onboarded) setQuick(seed);
			else setPendingShare(seed);
		};
		if (params.get("image") === "1" && "caches" in window) {
			caches.match("/__bankai_share_image").then(async (response) => {
				const seed = { text };
				if (response) {
					const blob = await response.blob();
					seed.image = new File([blob], "comprovante", { type: blob.type || "image/jpeg" });
					await (await caches.open("bankai-share")).delete("/__bankai_share_image");
				}
				finish(seed);
			});
			return;
		}
		if (text.trim()) finish({ text });
	}, [bundle]);
	async function commit(mutation) {
		if (!bundle) return null;
		setBusy(true);
		try {
			const before = bundle.goals.filter((goal) => goal.done).map((goal) => goal.id);
			const next = await mutateFinance({ data: mutation });
			setBundle(next);
			paintTheme(next.profile.theme);
			if (next.goals.some((goal) => goal.done && !before.includes(goal.id)) && next.profile.celebrate) setConfetti(true);
			return next;
		} catch (error) {
			const status = held(error);
			if (status) {
				setBundle(null);
				setGate({
					status,
					admin: false,
					pendingCount: 0
				});
			} else setNotice(errorText(error));
			return null;
		} finally {
			setBusy(false);
		}
	}
	if (failed) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex min-h-dvh max-w-md flex-col justify-center px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-medium",
				children: "Não abriu o caixa."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: failed
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-6 text-sm underline",
				onClick: () => window.location.reload(),
				children: "Tentar de novo"
			})
		]
	});
	if (!gate || gate.status === "approved" && !bundle && !failed) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Boot, {});
	if (gate.status !== "approved") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccessHold, { status: gate.status });
	if (!bundle) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Boot, {});
	const theme = storedTheme() ?? bundle.profile.theme;
	const value = {
		user,
		bundle,
		ym,
		setYm,
		tab,
		setTab,
		busy,
		notice,
		quick,
		openQuick: (seed) => setQuick(seed ?? {}),
		closeQuick: () => setQuick(null),
		commit,
		togglePrivacy: () => {
			commit({
				op: "profile",
				profile: { privacyHidden: !bundle.profile.privacyHidden }
			});
		},
		selectTheme: (next) => {
			paintTheme(next);
			commit({
				op: "profile",
				profile: {
					theme: next,
					plan: PRO_THEMES.includes(next) ? "pro" : bundle.profile.plan
				}
			});
			if (PRO_THEMES.includes(next) && bundle.profile.plan === "free") setNotice("Tema Pro liberado nesta demonstração.");
		},
		admin: gate.admin,
		pendingCount: gate.pendingCount
	};
	if (!bundle.profile.onboarded) {
		const short = localStorage.getItem("bankai-intro") === "1";
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: bundle.profile.ambient ? "ambient" : void 0,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Onboarding, {
				mode: short ? "name" : "full",
				theme,
				defaultName: bundle.profile.displayName || user.displayName || "",
				onTheme: (next) => {
					paintTheme(next);
					commit({
						op: "profile",
						profile: {
							theme: next,
							plan: PRO_THEMES.includes(next) ? "pro" : bundle.profile.plan
						}
					});
				},
				onFinish: (name) => {
					localStorage.setItem("bankai-intro", "1");
					const chosen = storedTheme() ?? theme;
					const plan = PRO_THEMES.includes(chosen) ? "pro" : "free";
					commit({
						op: "profile",
						profile: {
							displayName: name || user.displayName || "Você",
							theme: chosen,
							plan,
							onboarded: true
						}
					}).then(() => {
						if (pendingShare) setQuick(pendingShare);
					});
				}
			}), notice ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notice, {
				text: notice,
				onDone: () => setNotice(null)
			}) : null]
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FinanceContext.Provider, {
		value,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: bundle.profile.ambient ? "ambient relative z-10" : "relative z-10",
				children
			}),
			notice ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notice, {
				text: notice,
				onDone: () => setNotice(null)
			}) : null,
			confetti ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Confetti, { onDone: () => setConfetti(false) }) : null
		]
	});
}
function CardsView() {
	const { bundle, commit, busy } = useFinance();
	const [creating, setCreating] = (0, import_react.useState)(false);
	const [openId, setOpenId] = (0, import_react.useState)(null);
	const current = bundle.cards.find((card) => card.id === openId) ?? bundle.cards[0] ?? null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-medium",
					children: "Cartões"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-sm text-muted",
					onClick: () => setCreating(true),
					children: "Novo"
				})]
			}),
			bundle.cards.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, {
				title: "Nenhum cartão ainda",
				body: "O limite usado soma as parcelas em aberto, inclusive a deste mês.",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => setCreating(true),
					children: "Adicionar cartão"
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2 overflow-x-auto",
				children: bundle.cards.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setOpenId(card.id),
					className: `h-10 shrink-0 rounded-full px-4 text-sm ring-1 ${current?.id === card.id ? "bg-accent text-accent-fg ring-accent" : "ring-line"}`,
					children: card.name
				}, card.id))
			}), current ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDetail, { card: current }) : null] }),
			creating ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardForm, {
				title: "Novo cartão",
				busy,
				onClose: () => setCreating(false),
				onSave: async (data) => {
					if (await commit({
						op: "launch",
						items: [],
						newCard: data
					})) setCreating(false);
				}
			}) : null
		]
	});
}
function CardDetail({ card }) {
	const { bundle, ym, openQuick, commit, busy } = useFinance();
	const hidden = bundle.profile.privacyHidden;
	const start = bundle.profile.monthStartDay;
	const [editing, setEditing] = (0, import_react.useState)(false);
	const [confirm, setConfirm] = (0, import_react.useState)(false);
	const used = bundle.purchases.filter((row) => row.cardId === card.id).reduce((sum, row) => sum + openBalance(row, ym, start), 0);
	const invoice = invoiceTotal(bundle.purchases, ym, start, card.id);
	const ratio = card.limitCents > 0 ? used / card.limitCents : 0;
	const days = daysUntilDue(card.dueDay);
	const purchases = bundle.purchases.filter((row) => row.cardId === card.id && chargeInMonth(row, ym, start) > 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlasticCard, {
				card,
				used,
				invoice,
				hidden,
				alert: ratio >= 1 ? "Limite esgotado." : ratio >= .8 ? "Uso acima de 80%." : null
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-3 gap-3 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: "Limite"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
						cents: card.limitCents,
						hidden
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: "Em aberto"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
						cents: used,
						hidden
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted",
						children: ["Vence dia ", card.dueDay]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: days === 0 ? "Hoje" : `${days} dias` })] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "h-10",
						onClick: () => openQuick({ method: "credito" }),
						children: "Compra"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						tone: "line",
						className: "h-10",
						onClick: () => setEditing(true),
						children: "Editar"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						tone: "ghost",
						className: "h-10 text-danger",
						onClick: () => setConfirm(true),
						children: "Excluir"
					})
				]
			}),
			purchases.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Nada nesta fatura."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "divide-y divide-line",
				children: purchases.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-3 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate",
							children: row.description
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted",
							children: [
								row.category,
								" · ",
								dateLabel(row),
								row.installments > 1 ? ` · ${row.installments}x` : ""
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
							cents: chargeInMonth(row, ym, start),
							hidden
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "block text-xs text-muted",
							onClick: () => void commit({
								op: "delete-purchase",
								id: row.id
							}),
							children: "Excluir"
						})]
					})]
				}, row.id))
			}),
			editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardForm, {
				title: "Editar cartão",
				busy,
				initial: card,
				onClose: () => setEditing(false),
				onSave: async (data) => {
					if (await commit({
						op: "save-card",
						id: card.id,
						data
					})) setEditing(false);
				}
			}) : null,
			confirm ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
				title: "Excluir cartão",
				onClose: () => setConfirm(false),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "As compras deste cartão também saem."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-5 w-full",
					disabled: busy,
					onClick: () => void commit({
						op: "delete-card",
						id: card.id
					}).then((saved) => {
						if (saved) setConfirm(false);
					}),
					children: "Excluir"
				})]
			}) : null
		]
	});
}
function CardForm({ title, initial, busy, onClose, onSave }) {
	const [name, setName] = (0, import_react.useState)(initial?.name ?? "");
	const [limit, setLimit] = (0, import_react.useState)(initial ? String(initial.limitCents) : "");
	const [due, setDue] = (0, import_react.useState)(String(initial?.dueDay ?? 10));
	const [tone, setTone] = (0, import_react.useState)(initial?.tone ?? "ink");
	const [error, setError] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
		title,
		onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Nome",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: fieldClass,
						value: name,
						onChange: (event) => setName(event.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Limite",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: fieldClass,
						inputMode: "numeric",
						value: limit ? brl(centsFromText(limit)) : "",
						onChange: (event) => setLimit(event.target.value.replace(/\D/g, "").slice(0, 11))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Dia de vencimento",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: fieldClass,
						inputMode: "numeric",
						value: due,
						onChange: (event) => setDue(event.target.value.replace(/\D/g, "").slice(0, 2))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-2",
					children: CARD_TONES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": item,
						onClick: () => setTone(item),
						className: `tone-${item} size-11 rounded-full ring-1 ring-line ${tone === item ? "ring-2 ring-accent" : ""}`
					}, item))
				}),
				error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-danger",
					children: error
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "w-full",
					disabled: busy,
					onClick: () => {
						if (!name.trim() || centsFromText(limit) <= 0) {
							setError("Nome e limite são obrigatórios.");
							return;
						}
						onSave({
							name: name.trim(),
							limitCents: centsFromText(limit),
							dueDay: Number(due) || 1,
							tone
						});
					},
					children: "Salvar"
				})
			]
		})
	});
}
function leftover(bundle, ym) {
	const start = bundle.profile.monthStartDay;
	return sumIncome(bundle.incomes, ym, start) - sumExpenses(bundle.expenses, ym, start, true) - sumExpenses(bundle.expenses, ym, start, false) - invoiceTotal(bundle.purchases, ym, start);
}
function buildInsights(bundle, ym, hidden = false) {
	const start = bundle.profile.monthStartDay;
	const lines = [];
	const spend = categorySpend(bundle.expenses, bundle.purchases, ym, start);
	const total = [...spend.values()].reduce((s, n) => s + n, 0);
	if (total > 0) {
		const top = [...spend.entries()].sort((a, b) => b[1] - a[1])[0];
		if (top) {
			const pct = Math.round(top[1] / total * 100);
			lines.push(hidden ? `Sua maior categoria foi ${top[0]}.` : `Sua maior categoria foi ${top[0]} (${pct}%).`);
		}
	}
	const prev = addMonths(ym, -1);
	if (sumIncome(bundle.incomes, prev, start) + sumExpenses(bundle.expenses, prev, start, true) + sumExpenses(bundle.expenses, prev, start, false) + invoiceTotal(bundle.purchases, prev, start) > 0) {
		const nowLeft = leftover(bundle, ym);
		const prevLeft = leftover(bundle, prev);
		if (prevLeft !== 0) {
			const delta = (nowLeft - prevLeft) / Math.abs(prevLeft);
			if (delta <= -.12) lines.push(`Sobra ${Math.round(Math.abs(delta) * 100)}% menor que o mês passado.`);
			else if (delta >= .12) lines.push(`Sobra ${Math.round(delta * 100)}% maior que o mês passado.`);
		}
	}
	const budgets = bundle.budgets.map((b) => ({
		...b,
		spent: spend.get(b.category) ?? 0
	})).filter((b) => b.limitCents > 0 && b.spent >= b.limitCents);
	if (budgets[0]) lines.push(hidden ? `${budgets[0].category} passou do orçamento.` : `${budgets[0].category} passou do orçamento (${brl(budgets[0].spent)}).`);
	return lines.slice(0, 2);
}
function HomeView() {
	const { bundle, ym, openQuick, setTab } = useFinance();
	const hidden = bundle.profile.privacyHidden;
	const start = bundle.profile.monthStartDay;
	const income = sumIncome(bundle.incomes, ym, start);
	const fixed = sumExpenses(bundle.expenses, ym, start, true);
	const variable = sumExpenses(bundle.expenses, ym, start, false);
	const invoice = invoiceTotal(bundle.purchases, ym, start);
	const left = leftover(bundle, ym);
	const insights = buildInsights(bundle, ym, hidden);
	const points = Array.from({ length: 6 }, (_, index) => {
		const at = addMonths(ym, index);
		return {
			label: monthLabel(at),
			value: invoiceTotal(bundle.purchases, at, start) / 100
		};
	});
	const hasCurve = points.some((point) => point.value > 0);
	const goals = bundle.goals.filter((goal) => !goal.done).slice(0, 2);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-muted uppercase",
					children: "Sobra do mês"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `mt-2 text-5xl font-medium tracking-tight ${left < 0 ? "text-danger" : ""}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
						cents: left,
						hidden
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-3xl ring-1 ring-line",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Entradas",
							cents: income,
							hidden
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Fixos",
							cents: fixed,
							hidden
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Variáveis",
							cents: variable,
							hidden
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Fatura",
							cents: invoice,
							hidden
						})
					]
				})
			] }),
			insights.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: insights.join(" ")
			}) : income > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Nada saiu neste mês. A sobra é o que entrou."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Lance a primeira entrada para ver a sobra com clareza."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						tone: "line",
						className: "h-10 px-4",
						onClick: () => openQuick({ method: "entrada" }),
						children: "Entrada"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						tone: "line",
						className: "h-10 px-4",
						onClick: () => openQuick({ method: "pix" }),
						children: "Gasto"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						tone: "line",
						className: "h-10 px-4",
						onClick: () => setTab("cards"),
						children: "Cartão"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DueList, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-3xl p-4 ring-1 ring-line",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "px-1 text-sm text-muted",
					children: "Faturas à frente"
				}), hasCurve && !hidden ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 h-36",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
							data: points,
							margin: {
								top: 12,
								right: 0,
								left: 0,
								bottom: 0
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
									id: "invoice-fill",
									x1: "0",
									y1: "0",
									x2: "0",
									y2: "1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "0%",
										stopColor: "var(--c-accent)",
										stopOpacity: .28
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "100%",
										stopColor: "var(--c-accent)",
										stopOpacity: 0
									})]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "label",
									axisLine: false,
									tickLine: false,
									tick: {
										fill: "var(--c-muted)",
										fontSize: 12
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
									cursor: false,
									content: ({ active, payload, label }) => active && payload?.[0] ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl bg-surface px-3 py-2 text-xs ring-1 ring-line",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-muted",
											children: label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "tabular-nums",
											children: brl(Math.round(Number(payload[0].value) * 100))
										})]
									}) : null
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
									type: "monotone",
									dataKey: "value",
									stroke: "var(--c-accent)",
									fill: "url(#invoice-fill)",
									strokeWidth: 1.5
								})
							]
						})
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-subtle",
					children: hidden ? "Valores ocultos." : "A curva aparece quando houver compra no cartão."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "space-y-3",
				children: bundle.cards.length ? bundle.cards.map((card) => {
					const used = bundle.purchases.filter((row) => row.cardId === card.id).reduce((sum, row) => sum + openBalance(row, ym, start), 0);
					const monthInvoice = invoiceTotal(bundle.purchases, ym, start, card.id);
					const ratio = card.limitCents > 0 ? used / card.limitCents : 0;
					const days = daysUntilDue(card.dueDay);
					const alert = ratio >= 1 ? "Limite tomado." : ratio >= .8 ? "Acima de 80% do limite." : days <= 5 ? days === 0 ? "Vence hoje." : `Vence em ${days} dias.` : null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlasticCard, {
						card,
						used,
						invoice: monthInvoice,
						hidden,
						alert,
						onClick: () => setTab("cards")
					}, card.id);
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setTab("cards"),
					className: "plastic w-full p-5 text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-widest text-muted uppercase",
							children: "Cartão"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-lg",
							children: "Adicione o primeiro cartão"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: "Limite, vencimento e fatura no mesmo cartão."
						})
					]
				})
			}),
			goals.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "space-y-3",
				children: goals.map((goal) => {
					const pct = Math.min(100, Math.round(goal.savedCents / goal.targetCents * 100));
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setTab("more"),
						className: "block w-full text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: goal.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted tabular-nums",
								children: hidden ? "••••" : `${pct}%`
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 h-1 overflow-hidden rounded-full bg-line",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full bg-accent",
								style: { width: `${pct}%` }
							})
						})]
					}, goal.id);
				})
			}) : null
		]
	});
}
function Stat({ label, cents, hidden }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-surface px-4 py-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-xs text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-1 text-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
				cents,
				hidden
			})
		})]
	});
}
function DueList() {
	const { bundle } = useFinance();
	const due = bundle.cards.map((card) => ({
		card,
		days: daysUntilDue(card.dueDay)
	})).filter((item) => item.days <= 5);
	if (!due.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-2",
		children: due.map(({ card, days }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "badge-due rounded-full px-4 py-2 text-sm",
			children: [
				card.name,
				" ",
				days === 0 ? "vence hoje" : `vence em ${days} ${days === 1 ? "dia" : "dias"}`
			]
		}, card.id))
	});
}
function MoneyLists({ kind }) {
	const { bundle, ym, openQuick } = useFinance();
	const hidden = bundle.profile.privacyHidden;
	const start = bundle.profile.monthStartDay;
	const [editing, setEditing] = (0, import_react.useState)(null);
	const rows = kind === "income" ? bundle.incomes.filter((row) => occursInMonth(row, ym, start)) : bundle.expenses.filter((row) => occursInMonth(row, ym, start));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-medium",
					children: kind === "income" ? "Entradas" : "Gastos"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-sm text-muted",
					onClick: () => openQuick({ method: kind === "income" ? "entrada" : "pix" }),
					children: "Novo"
				})]
			}),
			rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, {
				title: kind === "income" ? "Nenhuma entrada neste mês" : "Nenhum gasto neste mês",
				body: kind === "income" ? "Salário, freelance ou um extra. Pode ser todo mês." : "Fixo ou variável. O que não repetir fica só neste mês.",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => openQuick({ method: kind === "income" ? "entrada" : "pix" }),
					children: "Lançar"
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "divide-y divide-line",
				children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setEditing(row),
					className: "flex w-full items-center gap-3 py-4 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate",
							children: row.description
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted",
							children: [
								"kind" in row ? labelKind(row.kind) : row.category,
								row.recurring ? " · todo mês" : "",
								"fixed" in row && row.fixed ? " · fixo" : "",
								" · ",
								dateLabel(row)
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
						cents: row.amountCents,
						hidden
					})]
				}) }, row.id))
			}),
			editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Editor, {
				row: editing,
				onClose: () => setEditing(null)
			}) : null
		]
	});
}
function labelKind(kind) {
	return INCOME_KINDS.find((item) => item.id === kind)?.label ?? "Outros";
}
function Editor({ row, onClose }) {
	const { commit, busy } = useFinance();
	const income = "kind" in row;
	const [description, setDescription] = (0, import_react.useState)(row.description);
	const [digits, setDigits] = (0, import_react.useState)(String(row.amountCents));
	const [recurring, setRecurring] = (0, import_react.useState)(row.recurring);
	const [fixed, setFixed] = (0, import_react.useState)("fixed" in row ? row.fixed : false);
	const [category, setCategory] = (0, import_react.useState)("category" in row ? row.category : "Outros");
	const [kind, setKind] = (0, import_react.useState)(income ? row.kind : "outros");
	const [error, setError] = (0, import_react.useState)("");
	async function save() {
		const amountCents = centsFromText(digits);
		if (amountCents <= 0) {
			setError("Informe um valor.");
			return;
		}
		const when = {
			year: row.year,
			month: row.month,
			day: row.day
		};
		if (income ? await commit({
			op: "save-income",
			id: row.id,
			data: {
				kind,
				description: description || "Entrada",
				amountCents,
				recurring,
				...when
			}
		}) : await commit({
			op: "save-expense",
			id: row.id,
			data: {
				category,
				description: description || "Gasto",
				amountCents,
				fixed,
				recurring,
				...when
			}
		})) onClose();
	}
	async function remove() {
		if (await commit(income ? {
			op: "delete-income",
			id: row.id
		} : {
			op: "delete-expense",
			id: row.id
		})) onClose();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
		title: "Editar",
		onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "w-full bg-transparent text-center text-4xl tabular-nums outline-none",
					inputMode: "numeric",
					value: digits ? brl(centsFromText(digits)) : "",
					onChange: (event) => setDigits(event.target.value.replace(/\D/g, "").slice(0, 11))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Descrição",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: fieldClass,
						value: description,
						onChange: (event) => setDescription(event.target.value)
					})
				}),
				income ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Tipo",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						className: fieldClass,
						value: kind,
						onChange: (event) => setKind(event.target.value),
						children: INCOME_KINDS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: item.id,
							children: item.label
						}, item.id))
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Categoria",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						className: fieldClass,
						value: category,
						onChange: (event) => setCategory(event.target.value),
						children: CATEGORIES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [!income ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setFixed(!fixed),
						className: `h-10 rounded-full px-4 text-sm ring-1 ${fixed ? "bg-accent text-accent-fg" : "ring-line"}`,
						children: "Fixo"
					}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setRecurring(!recurring),
						className: `h-10 rounded-full px-4 text-sm ring-1 ${recurring ? "bg-accent text-accent-fg" : "ring-line"}`,
						children: "Todo mês"
					})]
				}),
				error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-danger",
					children: error
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "w-full",
					disabled: busy,
					onClick: () => void save(),
					children: "Salvar"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					tone: "ghost",
					className: "w-full text-danger",
					disabled: busy,
					onClick: () => void remove(),
					children: "Excluir"
				})
			]
		})
	});
}
function MonitorView() {
	const { bundle, ym, commit, busy } = useFinance();
	const hidden = bundle.profile.privacyHidden;
	const ranked = [...categorySpend(bundle.expenses, bundle.purchases, ym, bundle.profile.monthStartDay).entries()].sort((a, b) => b[1] - a[1]);
	const max = ranked[0]?.[1] ?? 1;
	const [category, setCategory] = (0, import_react.useState)(CATEGORIES[0]);
	const [digits, setDigits] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-medium",
				children: "Monitor"
			}),
			ranked.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, {
				title: "Nada para comparar",
				body: "Os gastos e as parcelas do mês aparecem aqui, por categoria."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-4",
				children: ranked.map(([name, cents]) => {
					const budget = bundle.budgets.find((item) => item.category === name);
					const ratio = budget ? cents / budget.limitCents : cents / max;
					const hot = budget ? cents / budget.limitCents : 0;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline justify-between gap-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "tabular-nums text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
									cents,
									hidden
								}), budget ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [" / ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
									cents: budget.limitCents,
									hidden
								})] }) : null]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 h-1 overflow-hidden rounded-full bg-line",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `h-full ${hot >= 1 ? "bg-danger" : hot >= .8 ? "bg-warn" : "bg-accent"}`,
								style: { width: `${Math.min(100, Math.round(ratio * 100))}%` }
							})
						}),
						budget && hot >= .8 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: `mt-1 text-xs ${hot >= 1 ? "text-danger" : "text-warn"}`,
							children: hot >= 1 ? "Passou do orçamento." : "Chegou a 80% do orçamento."
						}) : null
					] }, name);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm text-muted",
						children: "Orçamento do mês"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Categoria",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: fieldClass,
							value: category,
							onChange: (event) => setCategory(event.target.value),
							children: CATEGORIES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Limite",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: fieldClass,
							inputMode: "numeric",
							placeholder: "R$ 0,00",
							value: digits ? brl(centsFromText(digits)) : "",
							onChange: (event) => setDigits(event.target.value.replace(/\D/g, "").slice(0, 11))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "w-full",
						disabled: busy,
						onClick: () => {
							const limitCents = centsFromText(digits);
							if (limitCents <= 0) return;
							commit({
								op: "save-budget",
								category,
								limitCents
							});
						},
						children: "Guardar limite"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "divide-y divide-line",
						children: bundle.budgets.map((budget) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center justify-between py-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								budget.category,
								" · ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
									cents: budget.limitCents,
									hidden
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "text-muted",
								onClick: () => void commit({
									op: "delete-budget",
									id: budget.id
								}),
								children: "Remover"
							})]
						}, budget.id))
					})
				]
			})
		]
	});
}
function cell(value) {
	const text = String(value ?? "");
	if (/[;"\n]/.test(text)) return `"${text.replace(/"/g, "\"\"")}"`;
	return text;
}
function dateOf(year, month, day) {
	return `${String(day ?? 1).padStart(2, "0")}/${String(month).padStart(2, "0")}/${year}`;
}
function bundleToCsv(bundle, ym) {
	const start = bundle.profile.monthStartDay;
	const rows = [[
		"tipo",
		"data",
		"descricao",
		"categoria",
		"valor",
		"recorrente",
		"cartao",
		"parcelas"
	]];
	const cardName = new Map(bundle.cards.map((c) => [c.id, c.name]));
	for (const row of bundle.incomes) {
		if (ym && !occursInMonth(row, ym, start)) continue;
		rows.push([
			"entrada",
			dateOf(row.year, row.month, row.day),
			row.description,
			row.kind,
			brlPlain(row.amountCents),
			row.recurring ? "sim" : "nao",
			"",
			"1"
		]);
	}
	for (const row of bundle.expenses) {
		if (ym && !occursInMonth(row, ym, start)) continue;
		rows.push([
			row.fixed ? "gasto-fixo" : "gasto",
			dateOf(row.year, row.month, row.day),
			row.description,
			row.category,
			brlPlain(row.amountCents),
			row.recurring ? "sim" : "nao",
			"",
			"1"
		]);
	}
	for (const row of bundle.purchases) {
		if (ym && chargeInMonth(row, ym, start) <= 0) continue;
		const amount = ym ? chargeInMonth(row, ym, start) : row.totalCents;
		rows.push([
			"cartao",
			dateOf(row.year, row.month, row.day),
			row.description,
			row.category,
			brlPlain(amount),
			"nao",
			cardName.get(row.cardId) ?? "",
			String(row.installments)
		]);
	}
	return `\uFEFF${rows.map((r) => r.map(cell).join(";")).join("\n")}`;
}
function downloadText(filename, content, type) {
	const blob = new Blob([content], { type });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = filename;
	a.click();
	URL.revokeObjectURL(url);
}
var LABEL = {
	pending: "Aguardando",
	approved: "Liberada",
	blocked: "Bloqueada"
};
function when(value) {
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return "";
	return date.toLocaleDateString("pt-BR", {
		day: "2-digit",
		month: "short",
		year: "numeric"
	});
}
function message(error) {
	if (error instanceof Error && error.message) return error.message;
	return "Não foi possível atualizar as contas.";
}
function AccountsPanel() {
	const { pendingCount } = useFinance();
	const [rows, setRows] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)("");
	const [busyId, setBusyId] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		let cancel = false;
		listAccounts().then((next) => {
			if (!cancel) setRows(next);
		}).catch((err) => {
			if (!cancel) setError(message(err));
		});
		return () => {
			cancel = true;
		};
	}, [pendingCount]);
	async function setStatus(userId, status) {
		setBusyId(userId);
		setError("");
		try {
			setRows(await setAccountAccess({ data: {
				userId,
				status
			} }));
		} catch (err) {
			setError(message(err));
		} finally {
			setBusyId("");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm text-muted",
					children: "Contas"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-sm",
					onClick: () => {
						setError("");
						listAccounts().then(setRows).catch((err) => setError(message(err)));
					},
					children: "Atualizar"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Quem se cadastra fica aqui até você liberar. Bloquear tira o acesso e mantém os dados."
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-danger",
				children: error
			}) : null,
			rows === null && !error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Carregando…"
			}) : null,
			rows?.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Nenhuma conta ainda."
			}) : null,
			rows?.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: `rounded-2xl p-4 ring-1 ${row.status === "pending" ? "ring-accent" : "ring-line"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm",
						children: row.name || "Sem nome"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-sm text-muted",
						children: row.email
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-xs text-subtle",
						children: [
							when(row.createdAt),
							when(row.createdAt) ? " · " : "",
							LABEL[row.status]
						]
					}),
					row.self ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs text-muted",
						children: "Sua conta"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex gap-2",
						children: [row.status !== "approved" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							disabled: busyId === row.id,
							className: "h-10 rounded-full bg-accent px-4 text-sm text-accent-fg disabled:opacity-50",
							onClick: () => void setStatus(row.id, "approved"),
							children: "Liberar"
						}) : null, row.status !== "blocked" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							disabled: busyId === row.id,
							className: "h-10 rounded-full px-4 text-sm ring-1 ring-line disabled:opacity-50",
							onClick: () => void setStatus(row.id, "blocked"),
							children: "Bloquear"
						}) : null]
					})
				]
			}, row.id))
		]
	});
}
var THEME_LABEL = {
	obsidian: "Obsidian",
	paper: "Paper",
	aurora: "Aurora",
	forest: "Forest",
	sand: "Sand"
};
function demoUntil(from = /* @__PURE__ */ new Date()) {
	return new Date(from.getFullYear() + 1, from.getMonth(), from.getDate()).toLocaleDateString("pt-BR", {
		day: "numeric",
		month: "long",
		year: "numeric"
	});
}
function MoreView() {
	const { bundle, ym, commit, busy, selectTheme, user, admin } = useFinance();
	const hidden = bundle.profile.privacyHidden;
	const profile = bundle.profile;
	const [name, setName] = (0, import_react.useState)(profile.displayName);
	const [appName, setAppName] = (0, import_react.useState)(profile.appName);
	const [planOpen, setPlanOpen] = (0, import_react.useState)(false);
	const [purgeOpen, setPurgeOpen] = (0, import_react.useState)(false);
	const [goalOpen, setGoalOpen] = (0, import_react.useState)(false);
	async function saveProfile(extra) {
		await commit({
			op: "profile",
			profile: {
				displayName: name.trim(),
				appName: appName.trim() || "BANKAI",
				...extra
			}
		});
	}
	async function onAvatar(file) {
		const bitmap = await createImageBitmap(file);
		const scale = Math.min(1, 256 / Math.max(bitmap.width, bitmap.height));
		const canvas = document.createElement("canvas");
		canvas.width = Math.max(1, Math.round(bitmap.width * scale));
		canvas.height = Math.max(1, Math.round(bitmap.height * scale));
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
		const avatar = canvas.toDataURL("image/jpeg", .72);
		await commit({
			op: "profile",
			profile: { avatar }
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-medium",
						children: "Perfil"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "grid size-16 cursor-pointer place-items-center overflow-hidden rounded-full bg-surface ring-1 ring-line",
							children: [profile.avatar ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: profile.avatar,
								alt: "",
								className: "size-full object-cover"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Foto" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "file",
								accept: "image/*",
								className: "sr-only",
								onChange: (event) => {
									const file = event.target.files?.[0];
									if (file) onAvatar(file);
								}
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm",
							children: user.primaryEmail
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: profile.plan === "pro" ? `Assinatura ativa até ${demoUntil()}` : "Plano Free"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Nome",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: fieldClass,
							value: name,
							onChange: (event) => setName(event.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Nome do app",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: fieldClass,
							value: appName,
							onChange: (event) => setAppName(event.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Moeda",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: `${fieldClass} flex items-center text-muted`,
							children: "Real brasileiro · BRL"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Início do mês",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: fieldClass,
							value: profile.monthStartDay,
							onChange: (event) => void saveProfile({
								monthStartDay: Number(event.target.value),
								displayName: name,
								appName
							}),
							children: Array.from({ length: 28 }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
								value: index + 1,
								children: ["Dia ", index + 1]
							}, index + 1))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						disabled: busy,
						onClick: () => void saveProfile(),
						children: "Salvar perfil"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm text-muted",
						children: "Tema"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-2",
						children: THEMES.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => selectTheme(id),
							className: `flex items-center gap-3 rounded-2xl px-3 py-3 text-left ring-1 ${profile.theme === id ? "ring-accent" : "ring-line"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `swatch swatch-${id} size-8 rounded-full ring-1 ring-line` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-sm",
								children: [THEME_LABEL[id], PRO_THEMES.includes(id) ? " · Pro" : ""]
							})]
						}, id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
						label: "Fundo suave",
						checked: profile.ambient,
						onChange: (ambient) => void commit({
							op: "profile",
							profile: { ambient }
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
						label: "Celebrar meta",
						checked: profile.celebrate,
						onChange: (celebrate) => void commit({
							op: "profile",
							profile: { celebrate }
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm text-muted",
							children: "Metas"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "text-sm",
							onClick: () => setGoalOpen(true),
							children: "Nova"
						})]
					}),
					bundle.goals.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "Uma meta de cada vez. O progresso é seu."
					}) : null,
					bundle.goals.map((goal) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoalRow, {
						goal,
						hidden
					}, goal.id))
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm text-muted",
						children: "Dados"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								tone: "line",
								className: "h-10",
								onClick: () => {
									if (profile.plan !== "pro") {
										setPlanOpen(true);
										return;
									}
									downloadText(`bankai-${ym.year}-${ym.month}.csv`, bundleToCsv(bundle, ym), "text/csv");
								},
								children: "CSV do mês"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								tone: "line",
								className: "h-10",
								onClick: () => {
									if (profile.plan !== "pro") {
										setPlanOpen(true);
										return;
									}
									downloadText("bankai.csv", bundleToCsv(bundle), "text/csv");
								},
								children: "CSV completo"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								tone: "line",
								className: "h-10",
								onClick: () => downloadText("bankai-backup.json", JSON.stringify(bundle, null, 2), "application/json"),
								children: "Baixar backup"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex h-12 items-center justify-center rounded-full text-sm ring-1 ring-line",
						children: ["Importar backup", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "file",
							accept: "application/json",
							className: "sr-only",
							onChange: (event) => {
								const file = event.target.files?.[0];
								if (!file) return;
								file.text().then((text) => {
									try {
										const snapshot = JSON.parse(text);
										return commit({
											op: "import",
											snapshot
										});
									} catch {
										return null;
									}
								});
							}
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "text-sm text-muted",
						onClick: () => setPurgeOpen(true),
						children: "Limpar lançamentos encerrados"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-3xl p-5 ring-1 ring-line",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-muted uppercase",
						children: profile.plan === "pro" ? "Pro" : "Free"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 text-xl font-medium",
						children: profile.plan === "pro" ? "Demonstração ativa" : "O essencial, de graça"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: profile.plan === "pro" ? `Demonstração Pro até ${demoUntil()}. Temas extras, exportação e metas sem limite. Sem cobrança.` : "Free traz Obsidian, Paper, duas metas e o caixa completo. Pro libera o resto."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-4",
						tone: "line",
						onClick: () => setPlanOpen(true),
						children: "Ver planos"
					})
				]
			}),
			admin ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountsPanel, {}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserButton, {}),
			goalOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoalForm, { onClose: () => setGoalOpen(false) }) : null,
			planOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
				title: "Planos",
				onClose: () => setPlanOpen(false),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-2xl p-4 ring-1 ring-line",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-medium",
								children: "Free"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: "Dois temas, duas metas, backup e o caixa completo."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-2xl p-4 ring-1 ring-accent",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-medium",
									children: "Pro"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted",
									children: "Aurora, Forest, Sand, exportação e metas ilimitadas."
								}),
								profile.plan === "free" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs text-subtle",
									children: "A exportação em CSV pede o Pro."
								}) : null
							]
						})]
					}),
					profile.plan === "pro" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-5 w-full",
						disabled: busy,
						onClick: () => void commit({
							op: "profile",
							profile: { plan: "free" }
						}).then(() => setPlanOpen(false)),
						children: "Voltar ao Free"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-5 w-full",
						disabled: busy,
						onClick: () => void commit({
							op: "profile",
							profile: { plan: "pro" }
						}).then(() => setPlanOpen(false)),
						children: "Ativar Pro (demonstração)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-center text-xs text-subtle",
						children: "Em breve, assinatura de verdade."
					})
				]
			}) : null,
			purgeOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
				title: "Limpar encerrados",
				onClose: () => setPurgeOpen(false),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Remove parcelas já quitadas e gastos avulsos de meses passados. Recorrentes ficam."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-5 w-full",
					disabled: busy,
					onClick: () => void commit({ op: "purge" }).then(() => setPurgeOpen(false)),
					children: "Limpar"
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "sr-only",
				children: monthTitle(ym)
			})
		]
	});
}
function ToggleRow({ label, checked, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		role: "switch",
		"aria-checked": checked,
		onClick: () => onChange(!checked),
		className: "flex w-full items-center justify-between py-2 text-left text-sm",
		children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `relative h-6 w-11 rounded-full ring-1 ring-line transition ${checked ? "bg-accent" : "bg-surface-2"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute top-0.5 size-5 rounded-full transition ${checked ? "left-5 bg-accent-fg" : "left-0.5 bg-muted"}` })
		})]
	});
}
function GoalRow({ goal, hidden }) {
	const { commit, busy } = useFinance();
	const [digits, setDigits] = (0, import_react.useState)("");
	const pct = Math.min(100, Math.round(goal.savedCents / Math.max(1, goal.targetCents) * 100));
	const extra = centsFromText(digits);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl p-4 ring-1 ring-line",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-baseline justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: goal.done ? "text-ok" : "",
					children: goal.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-muted tabular-nums",
					children: hidden ? "••••" : `${pct}%`
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 h-1 overflow-hidden rounded-full bg-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full bg-accent transition-all duration-500",
					style: { width: `${pct}%` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-xs text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
						cents: goal.savedCents,
						hidden
					}),
					" de ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
						cents: goal.targetCents,
						hidden
					}),
					goal.done ? " · concluída" : ` · até ${monthTitle({
						year: goal.year,
						month: goal.month
					})}`
				]
			}),
			goal.done ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "h-11 min-w-0 flex-1 rounded-full bg-surface-2 px-4 text-sm outline-none ring-1 ring-line",
					inputMode: "numeric",
					placeholder: "Guardar",
					"aria-label": `Guardar em ${goal.name}`,
					value: digits ? brl(extra) : "",
					onChange: (event) => setDigits(event.target.value.replace(/\D/g, "").slice(0, 11))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: busy || extra <= 0,
					className: "h-11 rounded-full px-4 text-sm ring-1 ring-line disabled:opacity-40",
					onClick: () => {
						commit({
							op: "save-goal",
							id: goal.id,
							data: {
								...goal,
								savedCents: goal.savedCents + extra
							}
						}).then(() => setDigits(""));
					},
					children: "Guardar"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-2 text-xs text-muted",
				onClick: () => void commit({
					op: "delete-goal",
					id: goal.id
				}),
				children: "Excluir"
			})
		]
	});
}
function GoalForm({ onClose }) {
	const { commit, busy, ym } = useFinance();
	const [name, setName] = (0, import_react.useState)("");
	const [digits, setDigits] = (0, import_react.useState)("");
	const [month, setMonth] = (0, import_react.useState)(`${ym.year}-${String(ym.month).padStart(2, "0")}`);
	const [error, setError] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
		title: "Nova meta",
		onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Nome",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: fieldClass,
						value: name,
						onChange: (event) => setName(event.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Valor",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: fieldClass,
						inputMode: "numeric",
						value: digits ? brl(centsFromText(digits)) : "",
						onChange: (event) => setDigits(event.target.value.replace(/\D/g, "").slice(0, 11))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Até",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "month",
						className: fieldClass,
						value: month,
						onChange: (event) => setMonth(event.target.value)
					})
				}),
				error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-danger",
					children: error
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "w-full",
					disabled: busy,
					onClick: () => {
						const [year, mon] = month.split("-").map(Number);
						if (!name.trim() || centsFromText(digits) <= 0) {
							setError("Dê um nome e um valor.");
							return;
						}
						commit({
							op: "save-goal",
							data: {
								name: name.trim(),
								targetCents: centsFromText(digits),
								savedCents: 0,
								year,
								month: mon
							}
						}).then((saved) => {
							if (saved) onClose();
						});
					},
					children: "Criar meta"
				})
			]
		})
	});
}
var MONTHS = {
	jan: 1,
	fev: 2,
	mar: 3,
	abr: 4,
	mai: 5,
	jun: 6,
	jul: 7,
	ago: 8,
	set: 9,
	out: 10,
	nov: 11,
	dez: 12
};
var PAYMENT = /pagamento recebido|pagamento efetuado|pagto\.?\s*(da\s*)?fatura|valor pago|estorno|fatura anterior/i;
function moneyRe() {
	return /(?:R\$\s*)?(-?\d{1,3}(?:\.\d{3})+,\d{2}|-?\d+,\d{2}|-?\d+\.\d{2})/g;
}
function moneyTokenToCents(token) {
	const negative = /^\s*-/.test(token);
	const raw = token.trim().replace(/^-/, "").replace(/^R\$\s*/i, "");
	let cents = 0;
	if (raw.includes(",")) cents = parseBrlNumber(raw);
	else {
		const n = Number(raw);
		cents = Number.isFinite(n) ? Math.round(n * 100) : 0;
	}
	return negative ? -Math.abs(cents) : Math.abs(cents);
}
function guessCategory(text) {
	const t = text.toLowerCase();
	for (const [re, cat] of [
		[/aluguel|condom[ií]nio|iptu|energia|enel|\bluz\b|sabesp|[aá]gua|internet|vivo|claro|tim\b/, "Moradia"],
		[/mercado|hortifruti|carrefour|assa[ií]|p[aã]o de a[cç][uú]car|supermercado|padaria|a[cç]ougue/, "Mercado"],
		[/uber|\b99\b|cabify|posto|combust|estaciona|metr[oô]|[oô]nibus|ped[aá]gio|shell|ipiranga/, "Transporte"],
		[/farm[aá]cia|drogaria|droga\s?raia|hospital|m[eé]dic|odonto|consulta|unimed/, "Saúde"],
		[/netflix|spotify|prime video|disney|youtube|icloud|assinatura|apple\.com|deezer/, "Assinaturas"],
		[/curso|escola|faculdade|udemy|alura|livro|mensalidade/, "Educação"],
		[/ifood|restaurante|\bbar\b|lanche|burger|pizza|caf[eé]|rappi|mcdonald/, "Restaurante"],
		[/renner|zara|riachuelo|roupa|cal[cç]ado|\bnike\b|centauro|shein/, "Roupas"],
		[/cinema|show|ingresso|steam|jogo|spotify/, "Lazer"]
	]) if (re.test(t)) return cat;
	return "Outros";
}
function detectMethod(text) {
	const t = text.toLowerCase();
	if (/\bpix\b/.test(t)) return "pix";
	if (/d[eé]bito/.test(t)) return "debito";
	if (/cr[eé]dito|cart[aã]o/.test(t)) return "credito";
	if (/dinheiro|esp[eé]cie/.test(t)) return "dinheiro";
	return null;
}
function detectMerchant(text) {
	const labeled = text.match(/estabelecimento\s*[:\-]\s*(.+)/i);
	if (!labeled?.[1]) return null;
	return cleanDesc(labeled[1].split("\n")[0]) || null;
}
function cleanDesc(raw) {
	return raw.replace(moneyRe(), " ").replace(/\b\d{1,2}\s*[x×]\s*(?:de)?\b/gi, " ").replace(/parc(?:ela)?s?\.?\s*\d+\s*\/\s*\d+/gi, " ").replace(/\b\d{2}\/\d{2}(?:\/\d{2,4})?\b/g, " ").replace(/\b\d{1,2}\s+(?:jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)[a-zç]*\b/gi, " ").replace(/\b(cr[eé]dito|d[eé]bito|pix|dinheiro|visa|master|elo)\b/gi, " ").replace(/\s+/g, " ").replace(/^[\s\-–—:|.*]+|[\s\-–—:|.*]+$/g, "").trim();
}
function findDate(text, now) {
	const numeric = text.match(/data\s*[:\-]?\s*(\d{1,2})\/(\d{1,2})\/(\d{2,4})/i) ?? text.match(/\b(\d{1,2})\/(\d{1,2})\/(\d{2,4})\b/);
	if (numeric) {
		const day = Number(numeric[1]);
		const month = Number(numeric[2]);
		let year = Number(numeric[3]);
		if (year < 100) year += year >= 70 ? 1900 : 2e3;
		if (month >= 1 && month <= 12 && day >= 1 && day <= 31) return {
			year,
			month,
			day
		};
	}
	const named = text.match(/\b(\d{1,2})\s+(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)[a-zç]*\b/i);
	if (named) {
		const day = Number(named[1]);
		const month = MONTHS[named[2].toLowerCase().slice(0, 3)];
		const yearIn = text.match(/\b(20\d{2})\b/);
		const year = yearIn ? Number(yearIn[1]) : now.getFullYear();
		if (month && day >= 1 && day <= 31) return {
			year,
			month,
			day
		};
	}
	return null;
}
/** "10 x de R$ 394,00" — a purchase plan, not a statement row. "Parc 01/1" is ignored. */
function findPlan(text) {
	const times = text.match(/(\d{1,2})\s*[x×]\s*(?:de\s*)?(?:R\$\s*)?(\d{1,3}(?:\.\d{3})*,\d{2}|\d+,\d{2}|\d+\.\d{2})/i);
	if (!times) return null;
	const count = Number(times[1]);
	const eachCents = moneyTokenToCents(times[2]);
	if (count < 2 || count > 48 || eachCents <= 0) return null;
	return {
		count,
		eachCents
	};
}
function findParcel(text) {
	const parc = text.match(/parc(?:ela)?s?\.?\s*0*(\d{1,2})\s*\/\s*0*(\d{1,2})/i);
	if (!parc) return null;
	const current = Number(parc[1]);
	const count = Number(parc[2]);
	if (count < 2 || count > 48 || current < 1 || current > count) return null;
	return {
		current,
		count
	};
}
function findTotal(text) {
	const labeled = text.match(/(?:valor\s+total|total\s+a\s+pagar|total\s+da\s+compra|valor\s+da\s+compra|total)\s*[:\-]?\s*(?:R\$\s*)?(\d{1,3}(?:\.\d{3})*,\d{2}|\d+,\d{2}|\d+\.\d{2})/i);
	if (!labeled) return null;
	const cents = moneyTokenToCents(labeled[1]);
	return cents > 0 ? cents : null;
}
function lineAmount(line) {
	if (PAYMENT.test(line)) return null;
	const matches = [...line.matchAll(moneyRe())];
	if (!matches.length) return null;
	const values = matches.map((m) => {
		const token = m[1] ?? m[0];
		const negative = /-\s*R\$|R\$\s*-/.test(line) || token.trim().startsWith("-");
		const cents = moneyTokenToCents(token.replace(/^-/, ""));
		return negative ? -cents : cents;
	});
	const last = values[values.length - 1];
	if (last < 0) return last;
	const positive = values.filter((v) => v > 0);
	return positive.length ? positive[positive.length - 1] : null;
}
function fallbackDate(now) {
	return {
		year: now.getFullYear(),
		month: now.getMonth() + 1,
		day: now.getDate()
	};
}
function parseCharges(raw, now, merchant) {
	const headerDate = findDate(raw, now);
	const items = [];
	for (const line of raw.split("\n")) {
		const trimmed = line.trim();
		if (!trimmed) continue;
		if (/^(total|subtotal|soma|saldo|limite|encargos|anuidade|iof)\b/i.test(trimmed)) continue;
		const amount = lineAmount(trimmed);
		if (amount === null || amount <= 0) continue;
		const date = findDate(trimmed, now) ?? headerDate ?? fallbackDate(now);
		const parcel = findParcel(trimmed);
		const plan = findPlan(trimmed);
		let installments = 1;
		let total = amount;
		let start = {
			year: date.year,
			month: date.month
		};
		if (plan) {
			installments = plan.count;
			total = plan.eachCents * plan.count;
		} else if (parcel) {
			installments = parcel.count;
			total = amount * parcel.count;
			if (parcel.current > 1) start = addMonths(start, -(parcel.current - 1));
		}
		const description = (cleanDesc(trimmed) || merchant || "Lançamento").slice(0, 160);
		items.push({
			description,
			merchant,
			category: guessCategory(`${description} ${merchant ?? ""}`),
			totalCents: total,
			installments,
			year: start.year,
			month: start.month,
			day: date.day
		});
	}
	const seen = /* @__PURE__ */ new Set();
	return items.filter((item) => {
		const key = `${item.description}|${item.totalCents}|${item.year}-${item.month}-${item.day}`;
		if (seen.has(key)) return false;
		seen.add(key);
		return true;
	});
}
function singleItem(raw, now, merchant, plan, charges) {
	const labeled = findTotal(raw);
	const date = findDate(raw, now) ?? fallbackDate(now);
	let total = labeled ?? 0;
	let installments = 1;
	if (plan) {
		installments = plan.count;
		const computed = plan.eachCents * plan.count;
		if (!total || Math.abs(total - plan.eachCents) < 2) total = computed;
	}
	if (!total && charges[0]) total = charges[0].totalCents;
	if (!total) {
		const amounts = [...raw.matchAll(moneyRe())].map((m) => moneyTokenToCents(m[1] ?? m[0])).filter((n) => n > 0);
		if (amounts.length) total = Math.max(...amounts);
	}
	if (!total) return null;
	const parcel = findParcel(raw);
	let start = {
		year: date.year,
		month: date.month
	};
	if (!plan && parcel) {
		installments = parcel.count;
		if (parcel.current > 1) start = addMonths(start, -(parcel.current - 1));
		if (!labeled) total = (charges[0]?.totalCents ?? total) > total ? total : total;
	}
	const line = merchant || cleanDesc(raw.split("\n").map((l) => l.trim()).find((l) => {
		const d = cleanDesc(l);
		return d.length > 2 && !/^(total|subtotal|data|valor)\b/i.test(d);
	}) ?? "") || charges[0]?.description || "Lançamento";
	return {
		description: line.slice(0, 160),
		merchant,
		category: guessCategory(`${line} ${merchant ?? ""}`),
		totalCents: total,
		installments,
		year: start.year,
		month: start.month,
		day: date.day
	};
}
function parseReceiptText(text, now = /* @__PURE__ */ new Date()) {
	const raw = text.replace(/\r/g, "").replace(/\u00a0/g, " ").trim();
	if (!raw) return {
		method: null,
		merchant: null,
		items: []
	};
	const method = detectMethod(raw);
	const merchant = detectMerchant(raw);
	const plan = findPlan(raw);
	const charges = parseCharges(raw, now, merchant);
	if (plan && charges.length <= 4) {
		const item = singleItem(raw, now, merchant, plan, charges);
		return {
			method,
			merchant,
			items: item ? [item] : []
		};
	}
	if (charges.length >= 2) return {
		method,
		merchant,
		items: charges
	};
	const item = charges[0] ?? singleItem(raw, now, merchant, plan, charges);
	return {
		method,
		merchant,
		items: item ? [item] : []
	};
}
function matchCardName(text, cards) {
	const t = text.toLowerCase();
	let best = null;
	for (const card of cards) {
		const name = card.name.trim().toLowerCase();
		if (name.length < 2) continue;
		if (t.includes(name) && (!best || name.length > best.len)) best = {
			id: card.id,
			len: name.length
		};
	}
	return best?.id ?? null;
}
function emptyDraft(seed, year, month) {
	return {
		method: seed?.method ?? "pix",
		digits: "",
		description: "",
		category: "Outros",
		incomeKind: "extra",
		fixed: false,
		recurring: false,
		installments: "1",
		cardId: "",
		year,
		month,
		day: "",
		merchant: null,
		newCardName: "",
		newCardLimit: "",
		newCardDue: "10"
	};
}
function QuickAdd() {
	const { quick, closeQuick, bundle, ym, commit, busy } = useFinance();
	const [phase, setPhase] = (0, import_react.useState)("form");
	const [draft, setDraft] = (0, import_react.useState)(() => emptyDraft(quick, ym.year, ym.month));
	const [rows, setRows] = (0, import_react.useState)([]);
	const [paste, setPaste] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		setDraft(emptyDraft(quick, ym.year, ym.month));
		setPhase("form");
		setRows([]);
		setError("");
		setPaste("");
		if (quick?.text) applyText(quick.text);
		if (quick?.image) readImage(quick.image);
	}, [quick]);
	const chips = (0, import_react.useMemo)(() => {
		return [
			...bundle.incomes.map((row) => ({
				id: row.id,
				label: row.description,
				digits: String(row.amountCents),
				method: "entrada",
				category: "Outros",
				incomeKind: row.kind,
				recurring: row.recurring,
				at: row.createdAt,
				installments: "1",
				cardId: "",
				fixed: false
			})),
			...bundle.expenses.map((row) => ({
				id: row.id,
				label: row.description,
				digits: String(row.amountCents),
				method: "pix",
				category: row.category,
				incomeKind: "extra",
				recurring: row.recurring,
				at: row.createdAt,
				installments: "1",
				cardId: "",
				fixed: row.fixed
			})),
			...bundle.purchases.map((row) => ({
				id: row.id,
				label: row.description,
				digits: String(row.totalCents),
				method: "credito",
				category: row.category,
				incomeKind: "extra",
				recurring: false,
				at: row.createdAt,
				installments: String(row.installments),
				cardId: row.cardId,
				fixed: false
			}))
		].sort((a, b) => b.at.localeCompare(a.at)).slice(0, 3);
	}, [bundle]);
	if (!quick) return null;
	function applyText(text) {
		const parsed = parseReceiptText(text);
		const card = matchCardName(text, bundle.cards);
		if (parsed.items.length >= 2) {
			setRows(parsed.items.map((item) => ({
				...item,
				key: crypto.randomUUID(),
				checked: true
			})));
			setDraft((prev) => ({
				...prev,
				method: parsed.method && parsed.method !== "entrada" ? parsed.method : prev.method === "entrada" ? "credito" : prev.method,
				cardId: card ?? prev.cardId
			}));
			setPhase("statement");
			setError("");
			return;
		}
		const item = parsed.items[0];
		if (!item) {
			setError("Não encontrei um valor. Tente outra foto ou digite.");
			setPhase("form");
			return;
		}
		setDraft((prev) => ({
			...prev,
			method: parsed.method ?? prev.method,
			digits: String(item.totalCents),
			description: item.description,
			category: item.category,
			installments: String(item.installments),
			year: item.year,
			month: item.month,
			day: item.day ? String(item.day) : "",
			merchant: item.merchant,
			cardId: card ?? prev.cardId
		}));
		setPhase("form");
		setError("");
	}
	async function readImage(file) {
		setPhase("reading");
		setError("");
		try {
			const { createWorker } = await import("../_libs/tesseract.js.mjs").then((n) => /* @__PURE__ */ __toESM(n.t()));
			const worker = await createWorker("por");
			try {
				applyText((await worker.recognize(file)).data.text || "");
			} finally {
				await worker.terminate();
			}
		} catch {
			setPhase("form");
			setError("Não consegui ler a imagem. Digite o valor ou cole o extrato.");
		}
	}
	async function submitForm() {
		const total = centsFromText(draft.digits);
		if (total <= 0) {
			setError("Informe um valor.");
			return;
		}
		const when = {
			year: draft.year,
			month: draft.month,
			day: draft.day ? Number(draft.day) : null
		};
		let items = [];
		let newCard;
		if (draft.method === "entrada") items = [{
			kind: "income",
			data: {
				kind: draft.incomeKind,
				description: draft.description || "Entrada",
				amountCents: total,
				recurring: draft.recurring,
				...when
			}
		}];
		else if (draft.method === "credito") {
			const installments = Math.min(48, Math.max(1, Number(draft.installments) || 1));
			const purchase = {
				cardId: draft.cardId,
				description: draft.description || draft.merchant || "Compra",
				category: draft.category,
				merchant: draft.merchant,
				totalCents: total,
				installments,
				installmentCents: Math.floor(total / installments),
				...when
			};
			if (!draft.cardId) {
				if (!draft.newCardName.trim() || centsFromText(draft.newCardLimit) <= 0) {
					setError("Escolha um cartão ou crie um agora.");
					return;
				}
				newCard = {
					name: draft.newCardName.trim(),
					limitCents: centsFromText(draft.newCardLimit),
					dueDay: Number(draft.newCardDue) || 10,
					tone: "ink"
				};
				purchase.cardId = "";
			}
			items = [{
				kind: "purchase",
				data: purchase
			}];
		} else items = [{
			kind: "expense",
			data: {
				category: draft.category,
				description: draft.description || "Gasto",
				amountCents: total,
				fixed: draft.fixed,
				recurring: draft.fixed || draft.recurring,
				...when
			}
		}];
		if (await commit({
			op: "launch",
			items,
			newCard
		})) closeQuick();
	}
	async function submitRows() {
		const chosen = rows.filter((row) => row.checked);
		if (!chosen.length) {
			setError("Marque ao menos uma linha.");
			return;
		}
		const method = draft.method === "entrada" ? "debito" : draft.method;
		let newCard;
		if (method === "credito" && !draft.cardId) {
			if (!draft.newCardName.trim() || centsFromText(draft.newCardLimit) <= 0) {
				setError("Escolha o cartão uma vez para lançar o extrato.");
				return;
			}
			newCard = {
				name: draft.newCardName.trim(),
				limitCents: centsFromText(draft.newCardLimit),
				dueDay: Number(draft.newCardDue) || 10,
				tone: "ink"
			};
		}
		const items = chosen.map((row) => {
			if (method === "credito") return {
				kind: "purchase",
				data: {
					cardId: draft.cardId,
					description: row.description,
					category: row.category,
					merchant: row.merchant,
					totalCents: row.totalCents,
					installments: row.installments,
					installmentCents: Math.floor(row.totalCents / row.installments),
					year: row.year,
					month: row.month,
					day: row.day
				}
			};
			return {
				kind: "expense",
				data: {
					category: row.category,
					description: row.description,
					amountCents: row.installments > 1 ? Math.floor(row.totalCents / row.installments) : row.totalCents,
					fixed: false,
					recurring: false,
					year: row.year,
					month: row.month,
					day: row.day
				}
			};
		});
		if (await commit({
			op: "launch",
			items,
			newCard
		})) closeQuick();
	}
	const monthValue = `${draft.year}-${String(draft.month).padStart(2, "0")}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
		title: phase === "statement" ? "Extrato" : "Lançar",
		onClose: closeQuick,
		children: [
			phase === "reading" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "py-10 text-center text-sm text-muted",
				children: "Lendo o comprovante…"
			}) : null,
			phase === "paste" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					className: `${fieldClass} h-40 py-3`,
					placeholder: "Cole o texto do extrato",
					value: paste,
					onChange: (event) => setPaste(event.target.value)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "w-full",
					onClick: () => applyText(paste),
					children: "Ler linhas"
				})]
			}) : null,
			phase === "statement" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2 overflow-x-auto",
						children: METHODS.filter((item) => item.id !== "entrada").map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setDraft({
								...draft,
								method: item.id
							}),
							className: `h-10 shrink-0 rounded-full px-4 text-sm ring-1 ${draft.method === item.id ? "bg-accent text-accent-fg ring-accent" : "ring-line"}`,
							children: item.label
						}, item.id))
					}),
					draft.method === "credito" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardPicker, {
						draft,
						setDraft
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2",
						children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3 rounded-2xl px-3 py-3 ring-1 ring-line",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									className: "size-5 accent-current",
									checked: row.checked,
									onChange: () => setRows(rows.map((item) => item.key === row.key ? {
										...item,
										checked: !item.checked
									} : item)),
									"aria-label": row.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-sm",
										children: row.description
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted",
										children: [row.category, row.installments > 1 ? ` · ${row.installments}x` : ""]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm tabular-nums",
									children: brl(row.installments > 1 ? Math.round(row.totalCents / row.installments) : row.totalCents)
								})
							]
						}, row.key))
					}),
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-danger",
						children: error
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "w-full",
						disabled: busy,
						onClick: () => void submitRows(),
						children: "Lançar marcados"
					})
				]
			}) : null,
			phase === "form" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2 overflow-x-auto pb-1",
						children: METHODS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setDraft({
								...draft,
								method: item.id
							}),
							className: `h-10 shrink-0 rounded-full px-4 text-sm ring-1 transition ${draft.method === item.id ? "bg-accent text-accent-fg ring-accent" : "ring-line"}`,
							children: item.label
						}, item.id))
					}),
					chips.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2 overflow-x-auto",
						children: chips.map((chip) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setDraft({
								...draft,
								method: chip.method,
								digits: chip.digits,
								description: chip.label,
								category: chip.category,
								incomeKind: chip.incomeKind,
								recurring: chip.recurring,
								fixed: chip.fixed,
								installments: chip.installments,
								cardId: chip.cardId || draft.cardId
							}),
							className: "h-9 shrink-0 rounded-full px-3 text-xs text-muted ring-1 ring-line",
							children: [
								chip.label,
								" · ",
								brl(Number(chip.digits))
							]
						}, chip.id))
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "Valor"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							inputMode: "numeric",
							className: "w-full bg-transparent text-center text-5xl font-medium tracking-tight tabular-nums outline-none",
							placeholder: "R$ 0,00",
							value: draft.digits ? brl(centsFromText(draft.digits)) : "",
							onChange: (event) => setDraft({
								...draft,
								digits: event.target.value.replace(/\D/g, "").slice(0, 11)
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Descrição",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: fieldClass,
							value: draft.description,
							onChange: (event) => setDraft({
								...draft,
								description: event.target.value
							})
						})
					}),
					draft.method === "entrada" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Tipo",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: fieldClass,
							value: draft.incomeKind,
							onChange: (event) => setDraft({
								...draft,
								incomeKind: event.target.value
							}),
							children: INCOME_KINDS.map((kind) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: kind.id,
								children: kind.label
							}, kind.id))
						})
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Categoria",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: fieldClass,
							value: draft.category,
							onChange: (event) => setDraft({
								...draft,
								category: event.target.value
							}),
							children: CATEGORIES.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: category }, category))
						})
					}),
					draft.method === "credito" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardPicker, {
							draft,
							setDraft
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Parcelas",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: fieldClass,
								inputMode: "numeric",
								value: draft.installments,
								onChange: (event) => setDraft({
									...draft,
									installments: event.target.value.replace(/\D/g, "").slice(0, 2)
								})
							})
						}),
						Number(draft.installments) > 1 && draft.digits ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-center text-sm text-muted",
							children: [
								draft.installments,
								"x de ",
								brl(Math.floor(centsFromText(draft.digits) / Number(draft.installments)))
							]
						}) : null
					] }) : null,
					draft.method !== "entrada" && draft.method !== "credito" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setDraft({
								...draft,
								fixed: !draft.fixed,
								recurring: !draft.fixed || draft.recurring
							}),
							className: `h-10 rounded-full px-4 text-sm ring-1 ${draft.fixed ? "bg-accent text-accent-fg ring-accent" : "ring-line"}`,
							children: "Fixo"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setDraft({
								...draft,
								recurring: !draft.recurring
							}),
							className: `h-10 rounded-full px-4 text-sm ring-1 ${draft.recurring ? "bg-accent text-accent-fg ring-accent" : "ring-line"}`,
							children: "Todo mês"
						})]
					}) : null,
					draft.method === "entrada" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setDraft({
							...draft,
							recurring: !draft.recurring
						}),
						className: `h-10 rounded-full px-4 text-sm ring-1 ${draft.recurring ? "bg-accent text-accent-fg ring-accent" : "ring-line"}`,
						children: "Recorrente"
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Mês",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "month",
								className: fieldClass,
								value: monthValue,
								onChange: (event) => {
									const [year, month] = event.target.value.split("-").map(Number);
									if (year && month) setDraft({
										...draft,
										year,
										month
									});
								}
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Dia",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: fieldClass,
								inputMode: "numeric",
								placeholder: "Opcional",
								value: draft.day,
								onChange: (event) => setDraft({
									...draft,
									day: event.target.value.replace(/\D/g, "").slice(0, 2)
								})
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex h-11 flex-1 items-center justify-center rounded-full text-sm ring-1 ring-line",
							children: ["Foto", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "file",
								accept: "image/*",
								capture: "environment",
								className: "sr-only",
								onChange: (event) => {
									const file = event.target.files?.[0];
									if (file) readImage(file);
								}
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "h-11 flex-1 rounded-full text-sm ring-1 ring-line",
							onClick: () => setPhase("paste"),
							children: "Colar extrato"
						})]
					}),
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-danger",
						children: error
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "w-full",
						disabled: busy,
						onClick: () => void submitForm(),
						children: busy ? "Salvando…" : "Lançar"
					})
				]
			}) : null
		]
	});
}
function CardPicker({ draft, setDraft }) {
	const { bundle } = useFinance();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [bundle.cards.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "Cartão",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				className: fieldClass,
				value: draft.cardId,
				onChange: (event) => setDraft({
					...draft,
					cardId: event.target.value
				}),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "",
					children: "Novo cartão"
				}), bundle.cards.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: card.id,
					children: card.name
				}, card.id))]
			})
		}) : null, !draft.cardId || !bundle.cards.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-3 gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: fieldClass,
					placeholder: "Nome",
					value: draft.newCardName,
					onChange: (event) => setDraft({
						...draft,
						newCardName: event.target.value
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: fieldClass,
					inputMode: "numeric",
					placeholder: "Limite",
					value: draft.newCardLimit ? brl(centsFromText(draft.newCardLimit)) : "",
					onChange: (event) => setDraft({
						...draft,
						newCardLimit: event.target.value.replace(/\D/g, "").slice(0, 11)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: fieldClass,
					inputMode: "numeric",
					placeholder: "Vence",
					value: draft.newCardDue,
					onChange: (event) => setDraft({
						...draft,
						newCardDue: event.target.value.replace(/\D/g, "").slice(0, 2)
					})
				})
			]
		}) : null]
	});
}
var TABS = [
	{
		id: "home",
		label: "Início",
		icon: House
	},
	{
		id: "in",
		label: "Entradas",
		icon: ArrowDownLeft
	},
	{
		id: "out",
		label: "Gastos",
		icon: ArrowUpRight
	},
	{
		id: "cards",
		label: "Cartões",
		icon: CreditCard
	},
	{
		id: "monitor",
		label: "Monitor",
		icon: ChartColumn
	},
	{
		id: "more",
		label: "Mais",
		icon: UserRound
	}
];
function AppShell() {
	const finance = useFinance();
	const { bundle, tab, setTab, ym, setYm, togglePrivacy, quick } = finance;
	const name = bundle.profile.displayName || finance.user.displayName || "você";
	const initial = name.charAt(0).toUpperCase();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto min-h-dvh w-full max-w-2xl px-5 pt-6 pb-36",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setTab("more"),
						className: "size-11 overflow-hidden rounded-full bg-surface ring-1 ring-line",
						"aria-label": "Perfil",
						children: bundle.profile.avatar ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: bundle.profile.avatar,
							alt: "",
							className: "size-full object-cover"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-full place-items-center text-sm",
							children: initial
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "wordmark truncate text-xs text-muted",
							children: bundle.profile.appName || "Bankai"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "truncate text-lg font-medium",
							children: ["Olá, ", name]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: togglePrivacy,
						className: "grid size-11 place-items-center rounded-full ring-1 ring-line",
						"aria-pressed": bundle.profile.privacyHidden,
						"aria-label": bundle.profile.privacyHidden ? "Mostrar valores" : "Ocultar valores",
						children: bundle.profile.privacyHidden ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { strokeWidth: 1.5 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { strokeWidth: 1.5 })
					})
				]
			}),
			tab !== "more" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 flex justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center rounded-full ring-1 ring-line",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid size-11 place-items-center rounded-full text-muted",
							"aria-label": "Mês anterior",
							onClick: () => setYm(addMonths(ym, -1)),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
								strokeWidth: 1.5,
								className: "size-5"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "min-w-36 text-center text-sm",
							children: monthTitle(ym)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid size-11 place-items-center rounded-full text-muted",
							"aria-label": "Próximo mês",
							onClick: () => setYm(addMonths(ym, 1)),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
								strokeWidth: 1.5,
								className: "size-5"
							})
						})
					]
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rise mt-8",
				children: [
					tab === "home" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeView, {}) : null,
					tab === "in" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoneyLists, { kind: "income" }) : null,
					tab === "out" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoneyLists, { kind: "expense" }) : null,
					tab === "cards" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardsView, {}) : null,
					tab === "monitor" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonitorView, {}) : null,
					tab === "more" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoreView, {}) : null
				]
			}, tab),
			quick ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fab, { onOpen: () => finance.openQuick() }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: `glass fixed bottom-4 left-1/2 z-30 flex w-[min(100%-1.5rem,28rem)] -translate-x-1/2 items-center justify-between rounded-full px-1.5 py-1 ${quick ? "pointer-events-none opacity-0" : ""}`,
				"aria-label": "Seções",
				children: TABS.map((item) => {
					const Icon = item.icon;
					const active = tab === item.id;
					const waiting = item.id === "more" && finance.pendingCount > 0;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setTab(item.id),
						"aria-current": active ? "page" : void 0,
						"aria-label": waiting ? `Mais, ${finance.pendingCount} aguardando` : item.label,
						className: `relative flex h-12 min-w-11 items-center justify-center gap-1.5 rounded-full ${active ? "bg-surface-2 px-3 text-fg" : "px-1 text-subtle"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								strokeWidth: 1.5,
								className: "size-5 shrink-0"
							}),
							waiting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-2 right-1.5 size-1.5 rounded-full bg-accent" }) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: active ? "text-xs" : "sr-only",
								children: item.label
							})
						]
					}, item.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickAdd, {})
		]
	});
}
function Fab({ onOpen }) {
	const moved = (0, import_react.useRef)(false);
	const offset = (0, import_react.useRef)({
		dx: 0,
		dy: 0
	});
	const point = (0, import_react.useRef)(null);
	const [pos, setPos] = (0, import_react.useState)(() => {
		try {
			const raw = localStorage.getItem("bankai-fab");
			if (!raw) return null;
			const parsed = JSON.parse(raw);
			if (Number.isFinite(parsed.x) && Number.isFinite(parsed.y)) return parsed;
		} catch {}
		return null;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		"aria-label": "Lançamento rápido",
		className: "fixed z-40 grid size-14 touch-none place-items-center rounded-full bg-accent text-accent-fg select-none",
		style: pos ? {
			left: pos.x,
			top: pos.y
		} : {
			right: 20,
			bottom: 108
		},
		onPointerDown: (event) => {
			const rect = event.currentTarget.getBoundingClientRect();
			offset.current = {
				dx: event.clientX - rect.left,
				dy: event.clientY - rect.top
			};
			moved.current = false;
			event.currentTarget.setPointerCapture(event.pointerId);
		},
		onPointerMove: (event) => {
			if (!event.currentTarget.hasPointerCapture(event.pointerId)) return;
			const x = Math.min(window.innerWidth - 64, Math.max(8, event.clientX - offset.current.dx));
			const y = Math.min(window.innerHeight - 72, Math.max(8, event.clientY - offset.current.dy));
			if (!point.current || Math.abs(x - point.current.x) + Math.abs(y - point.current.y) > 6) moved.current = true;
			point.current = {
				x,
				y
			};
			setPos({
				x,
				y
			});
		},
		onPointerUp: () => {
			if (!moved.current) onOpen();
			else if (point.current) localStorage.setItem("bankai-fab", JSON.stringify(point.current));
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "fab-ripple",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
			strokeWidth: 1.5,
			className: "relative size-6"
		})]
	});
}
function Page() {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setMounted(true), []);
	const { user, isPending } = useCurrentUserState();
	if (!mounted || isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Boot, {});
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Guest, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinanceProvider, {
		user,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {})
	});
}
function Guest() {
	const [ready, setReady] = (0, import_react.useState)(() => localStorage.getItem("bankai-intro") === "1");
	const [theme, setTheme] = (0, import_react.useState)(() => {
		const stored = localStorage.getItem("bankai-theme");
		return stored && THEMES.includes(stored) ? stored : "obsidian";
	});
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Onboarding, {
		mode: "guest",
		theme,
		onTheme: (next) => {
			setTheme(next);
			document.documentElement.dataset.theme = next;
			localStorage.setItem("bankai-theme", next);
		},
		onFinish: () => {
			localStorage.setItem("bankai-intro", "1");
			setReady(true);
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthScreen, {});
}
//#endregion
export { Page as component };
