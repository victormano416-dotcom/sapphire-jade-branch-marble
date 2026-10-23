import { a as getServerFnById, i as TSS_SERVER_FUNCTION, r as createServerFn } from "./ssr.mjs";
import { i as normalizeStatus, n as authMiddleware, r as isOwnerEmail, t as OWNER_EMAIL } from "./access-policy-CIRrabJH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/access--ZkvJyLC.js
var THEMES = [
	"obsidian",
	"paper",
	"aurora",
	"forest",
	"sand"
];
var PRO_THEMES = [
	"aurora",
	"forest",
	"sand"
];
var CATEGORIES = [
	"Moradia",
	"Mercado",
	"Transporte",
	"Saúde",
	"Lazer",
	"Assinaturas",
	"Educação",
	"Restaurante",
	"Roupas",
	"Outros"
];
var INCOME_KINDS = [
	{
		id: "salario",
		label: "Salário"
	},
	{
		id: "extra",
		label: "Renda extra"
	},
	{
		id: "freelance",
		label: "Freelance"
	},
	{
		id: "investimentos",
		label: "Investimentos"
	},
	{
		id: "outros",
		label: "Outros"
	}
];
var CARD_TONES = [
	"ink",
	"dusk",
	"moss",
	"clay",
	"mist"
];
var METHODS = [
	{
		id: "credito",
		label: "Crédito"
	},
	{
		id: "debito",
		label: "Débito"
	},
	{
		id: "pix",
		label: "PIX"
	},
	{
		id: "dinheiro",
		label: "Dinheiro"
	},
	{
		id: "entrada",
		label: "Entrada"
	}
];
function isRecord(value) {
	return !!value && typeof value === "object" && !Array.isArray(value);
}
function text(value, max, fallback = "") {
	if (typeof value !== "string") return fallback;
	return value.replace(/\s+/g, " ").trim().slice(0, max);
}
function int(value, min, max, fallback) {
	const n = typeof value === "number" ? value : Number(value);
	if (!Number.isFinite(n)) return fallback;
	return Math.min(max, Math.max(min, Math.round(n)));
}
function cents(value) {
	return int(value, 0, 1e11, 0);
}
function flag(value, fallback = false) {
	if (typeof value === "boolean") return value;
	return fallback;
}
function idOf(value) {
	const id = text(value, 80);
	if (!/^[a-zA-Z0-9_-]{8,80}$/.test(id)) throw new Error("Identificador inválido.");
	return id;
}
function optionalId(value) {
	if (value == null || value === "") return void 0;
	return idOf(value);
}
function period(value) {
	const year = int(value.year, 2e3, 2100, (/* @__PURE__ */ new Date()).getFullYear());
	const month = int(value.month, 1, 12, (/* @__PURE__ */ new Date()).getMonth() + 1);
	const dayRaw = value.day;
	return {
		year,
		month,
		day: dayRaw == null || dayRaw === "" ? null : int(dayRaw, 1, 31, 1)
	};
}
function categoryOf(value) {
	const name = text(value, 40, "Outros");
	if (CATEGORIES.includes(name)) return name;
	return name || "Outros";
}
function incomeInput(value) {
	if (!isRecord(value)) throw new Error("Entrada inválida.");
	const kind = text(value.kind, 32, "outros");
	const known = INCOME_KINDS.some((k) => k.id === kind);
	const amountCents = cents(value.amountCents);
	if (amountCents <= 0) throw new Error("Informe um valor.");
	return {
		kind: known ? kind : "outros",
		description: text(value.description, 160, "Entrada"),
		amountCents,
		recurring: flag(value.recurring),
		...period(value)
	};
}
function expenseInput(value) {
	if (!isRecord(value)) throw new Error("Gasto inválido.");
	const amountCents = cents(value.amountCents);
	if (amountCents <= 0) throw new Error("Informe um valor.");
	return {
		category: categoryOf(value.category),
		description: text(value.description, 160, "Gasto"),
		amountCents,
		fixed: flag(value.fixed),
		recurring: flag(value.recurring),
		...period(value)
	};
}
function cardInput(value) {
	if (!isRecord(value)) throw new Error("Cartão inválido.");
	const tone = text(value.tone, 16, "ink");
	const limitCents = cents(value.limitCents);
	if (limitCents <= 0) throw new Error("Informe o limite do cartão.");
	const name = text(value.name, 40);
	if (!name) throw new Error("Dê um nome ao cartão.");
	return {
		name,
		limitCents,
		dueDay: int(value.dueDay, 1, 28, 1),
		tone: CARD_TONES.includes(tone) ? tone : "ink"
	};
}
function purchaseInput(value) {
	if (!isRecord(value)) throw new Error("Compra inválida.");
	const totalCents = cents(value.totalCents);
	if (totalCents <= 0) throw new Error("Informe um valor.");
	const installments = int(value.installments, 1, 48, 1);
	const installmentCents = Math.floor(totalCents / installments);
	return {
		cardId: text(value.cardId, 80),
		description: text(value.description, 160, "Compra"),
		category: categoryOf(value.category),
		merchant: text(value.merchant, 80) || null,
		totalCents,
		installments,
		installmentCents,
		...period(value)
	};
}
function goalInput(value) {
	if (!isRecord(value)) throw new Error("Meta inválida.");
	const name = text(value.name, 60);
	if (!name) throw new Error("Dê um nome à meta.");
	const targetCents = cents(value.targetCents);
	if (targetCents <= 0) throw new Error("Informe o valor da meta.");
	return {
		name,
		targetCents,
		savedCents: cents(value.savedCents),
		...period(value)
	};
}
function profilePatch(value) {
	if (!isRecord(value)) throw new Error("Perfil inválido.");
	const patch = {};
	if ("displayName" in value) patch.displayName = text(value.displayName, 40);
	if ("avatar" in value) {
		const avatar = typeof value.avatar === "string" ? value.avatar : null;
		patch.avatar = avatar && avatar.length < 3e5 ? avatar : null;
	}
	if ("appName" in value) patch.appName = text(value.appName, 24, "BANKAI") || "BANKAI";
	if ("theme" in value && THEMES.includes(String(value.theme))) patch.theme = value.theme;
	if ("monthStartDay" in value) patch.monthStartDay = int(value.monthStartDay, 1, 28, 1);
	if ("privacyHidden" in value) patch.privacyHidden = flag(value.privacyHidden);
	if ("plan" in value && (value.plan === "free" || value.plan === "pro")) patch.plan = value.plan;
	if ("ambient" in value) patch.ambient = flag(value.ambient);
	if ("celebrate" in value) patch.celebrate = flag(value.celebrate);
	if ("onboarded" in value) patch.onboarded = flag(value.onboarded);
	return patch;
}
function applyProfilePatch(current, patch) {
	const next = {
		...current,
		...patch
	};
	if (!next.appName) next.appName = "BANKAI";
	if (!THEMES.includes(next.theme)) next.theme = "obsidian";
	const plan = next.plan === "pro" ? "pro" : "free";
	next.plan = plan;
	if (plan === "free" && PRO_THEMES.includes(next.theme)) next.theme = "obsidian";
	next.monthStartDay = int(next.monthStartDay, 1, 28, 1);
	return next;
}
function snapshot(value) {
	if (!isRecord(value)) throw new Error("Arquivo de backup inválido.");
	const profile = isRecord(value.profile) ? profilePatch(value.profile) : {};
	const asList = (key) => Array.isArray(value[key]) ? value[key] : [];
	if (asList("incomes").length + asList("expenses").length + asList("purchases").length > 5e3) throw new Error("Backup grande demais.");
	return {
		profile: {
			displayName: "",
			avatar: null,
			appName: "BANKAI",
			theme: "obsidian",
			monthStartDay: 1,
			privacyHidden: false,
			plan: "free",
			ambient: false,
			celebrate: true,
			onboarded: true,
			...profile
		},
		incomes: asList("incomes").slice(0, 2e3).map((row) => ({
			...incomeInput(row),
			id: rowId(row),
			createdAt: ""
		})),
		expenses: asList("expenses").slice(0, 2e3).map((row) => ({
			...expenseInput(row),
			id: rowId(row),
			createdAt: ""
		})),
		cards: asList("cards").slice(0, 50).map((row) => ({
			...cardInput(row),
			id: rowId(row),
			createdAt: ""
		})),
		purchases: asList("purchases").slice(0, 2e3).map((row) => ({
			...purchaseInput(row),
			id: rowId(row),
			createdAt: ""
		})),
		goals: asList("goals").slice(0, 100).map((row) => ({
			...goalInput(row),
			id: rowId(row),
			done: false,
			createdAt: ""
		})),
		budgets: asList("budgets").slice(0, 40).map((row) => {
			if (!isRecord(row)) throw new Error("Orçamento inválido.");
			return {
				id: rowId(row),
				category: categoryOf(row.category),
				limitCents: cents(row.limitCents)
			};
		})
	};
}
function rowId(row) {
	if (isRecord(row) && typeof row.id === "string" && /^[a-zA-Z0-9_-]{8,80}$/.test(row.id)) return row.id;
	return crypto.randomUUID();
}
function launchItem(value) {
	if (!isRecord(value)) throw new Error("Lançamento inválido.");
	if (value.kind === "income") return {
		kind: "income",
		data: incomeInput(value.data)
	};
	if (value.kind === "expense") return {
		kind: "expense",
		data: expenseInput(value.data)
	};
	if (value.kind === "purchase") return {
		kind: "purchase",
		data: purchaseInput(value.data)
	};
	throw new Error("Lançamento inválido.");
}
function sanitizeMutation(input) {
	if (!isRecord(input)) throw new Error("Pedido inválido.");
	switch (input.op) {
		case "profile": return {
			op: "profile",
			profile: profilePatch(input.profile)
		};
		case "launch": {
			const rawItems = Array.isArray(input.items) ? input.items : [];
			if (rawItems.length > 200) throw new Error("Muitos lançamentos de uma vez.");
			const newCard = input.newCard ? cardInput(input.newCard) : void 0;
			const items = rawItems.map(launchItem);
			if (!items.length && !newCard) throw new Error("Nada para lançar.");
			return {
				op: "launch",
				items,
				newCard
			};
		}
		case "save-income": return {
			op: "save-income",
			id: idOf(input.id),
			data: incomeInput(input.data)
		};
		case "delete-income": return {
			op: "delete-income",
			id: idOf(input.id)
		};
		case "save-expense": return {
			op: "save-expense",
			id: idOf(input.id),
			data: expenseInput(input.data)
		};
		case "delete-expense": return {
			op: "delete-expense",
			id: idOf(input.id)
		};
		case "save-card": return {
			op: "save-card",
			id: idOf(input.id),
			data: cardInput(input.data)
		};
		case "delete-card": return {
			op: "delete-card",
			id: idOf(input.id)
		};
		case "delete-purchase": return {
			op: "delete-purchase",
			id: idOf(input.id)
		};
		case "save-goal": return {
			op: "save-goal",
			id: optionalId(input.id),
			data: goalInput(input.data)
		};
		case "delete-goal": return {
			op: "delete-goal",
			id: idOf(input.id)
		};
		case "save-budget": return {
			op: "save-budget",
			category: categoryOf(input.category),
			limitCents: cents(input.limitCents)
		};
		case "delete-budget": return {
			op: "delete-budget",
			id: idOf(input.id)
		};
		case "purge": return { op: "purge" };
		case "import": return {
			op: "import",
			snapshot: snapshot(input.snapshot)
		};
		default: throw new Error("Pedido inválido.");
	}
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
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
async function assertApproved(sql, userId) {
	const access = await ensureAccess(sql, userId);
	if (access.status === "blocked") throw new Error("ACCESS_BLOCKED");
	if (access.status !== "approved") throw new Error("ACCESS_PENDING");
	return access;
}
var readMyAccess = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("8d9cbb8ee2ca4bd3aa70714d533acd12b9b6f65d5811beb817ba181f10c3f789"));
var listAccounts = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("0aea3517d2716904eb2f0f9bdc2ee3bc73a1e28ac2fe787828a371657736fc6a"));
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
}).handler(createSsrRpc("14786d80690684c441a79356b4a27ed0daddc5f2efb22235239fdec936ecd750"));
//#endregion
export { PRO_THEMES as a, assertApproved as c, readMyAccess as d, sanitizeMutation as f, METHODS as i, createSsrRpc as l, CATEGORIES as n, THEMES as o, setAccountAccess as p, INCOME_KINDS as r, applyProfilePatch as s, CARD_TONES as t, listAccounts as u };
