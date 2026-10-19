import { i as TSS_SERVER_FUNCTION, r as createServerFn } from "./ssr.mjs";
import { r as getSql } from "./db-Bi916Mx5.mjs";
import { c as authMiddleware, l as sanitizeMutation, s as applyProfilePatch } from "./validate-CU9v1j5v.mjs";
import { g as todayYm, i as cmpYm, l as isSettled, u as itemPeriod } from "./period-BiCz9Slh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/api-Bzqcng2w.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
function num(value) {
	const n = typeof value === "number" ? value : Number(value);
	return Number.isFinite(n) ? n : 0;
}
function bool(value) {
	return value === true || value === "t" || value === "true" || value === 1 || value === "1";
}
function str(value) {
	return value == null ? "" : String(value);
}
function dayOf(value) {
	if (value == null || value === "") return null;
	const n = num(value);
	return n > 0 ? n : null;
}
function mapProfile(row) {
	const theme = str(row.theme);
	const plan = str(row.plan) === "pro" ? "pro" : "free";
	return applyProfilePatch({
		displayName: "",
		avatar: null,
		appName: "BANKAI",
		theme: "obsidian",
		monthStartDay: 1,
		privacyHidden: false,
		plan: "free",
		ambient: false,
		celebrate: true,
		onboarded: false
	}, {
		displayName: str(row.display_name),
		avatar: row.avatar ? str(row.avatar) : null,
		appName: str(row.app_name) || "BANKAI",
		theme,
		monthStartDay: num(row.month_start_day) || 1,
		privacyHidden: bool(row.privacy_hidden),
		plan,
		ambient: bool(row.ambient),
		celebrate: row.celebrate == null ? true : bool(row.celebrate),
		onboarded: bool(row.onboarded)
	});
}
function mapIncome(row) {
	return {
		id: str(row.id),
		kind: str(row.kind),
		description: str(row.description),
		amountCents: num(row.amount_cents),
		recurring: bool(row.recurring),
		year: num(row.year),
		month: num(row.month),
		day: dayOf(row.day),
		createdAt: str(row.created_at)
	};
}
function mapExpense(row) {
	return {
		id: str(row.id),
		category: str(row.category),
		description: str(row.description),
		amountCents: num(row.amount_cents),
		fixed: bool(row.fixed),
		recurring: bool(row.recurring),
		year: num(row.year),
		month: num(row.month),
		day: dayOf(row.day),
		createdAt: str(row.created_at)
	};
}
function mapCard(row) {
	return {
		id: str(row.id),
		name: str(row.name),
		limitCents: num(row.limit_cents),
		dueDay: num(row.due_day),
		tone: str(row.tone),
		createdAt: str(row.created_at)
	};
}
function mapPurchase(row) {
	return {
		id: str(row.id),
		cardId: str(row.card_id),
		description: str(row.description),
		category: str(row.category),
		merchant: row.merchant ? str(row.merchant) : null,
		totalCents: num(row.total_cents),
		installments: num(row.installments) || 1,
		installmentCents: num(row.installment_cents),
		year: num(row.year),
		month: num(row.month),
		day: dayOf(row.day),
		createdAt: str(row.created_at)
	};
}
function mapGoal(row) {
	const saved = num(row.saved_cents);
	const target = num(row.target_cents);
	return {
		id: str(row.id),
		name: str(row.name),
		targetCents: target,
		savedCents: saved,
		year: num(row.year),
		month: num(row.month),
		done: bool(row.done) || saved >= target,
		createdAt: str(row.created_at)
	};
}
function mapBudget(row) {
	return {
		id: str(row.id),
		category: str(row.category),
		limitCents: num(row.limit_cents)
	};
}
async function readBundle(sql, userId) {
	const profiles = await sql`select * from profiles where user_id = ${userId}`;
	let profile;
	if (!profiles[0]) {
		await sql`insert into profiles (user_id) values (${userId}) on conflict (user_id) do nothing`;
		const again = await sql`select * from profiles where user_id = ${userId}`;
		profile = again[0] ? mapProfile(again[0]) : mapProfile({});
	} else profile = mapProfile(profiles[0]);
	const [incomes, expenses, cards, purchases, goals, budgets] = await Promise.all([
		sql`select id, kind, description, amount_cents, recurring, year, month, day, created_at::text as created_at from incomes where user_id = ${userId} order by year desc, month desc, created_at desc`,
		sql`select id, category, description, amount_cents, fixed, recurring, year, month, day, created_at::text as created_at from expenses where user_id = ${userId} order by year desc, month desc, created_at desc`,
		sql`select id, name, limit_cents, due_day, tone, created_at::text as created_at from cards where user_id = ${userId} order by created_at asc`,
		sql`select id, card_id, description, category, merchant, total_cents, installments, installment_cents, year, month, day, created_at::text as created_at from purchases where user_id = ${userId} order by year desc, month desc, created_at desc`,
		sql`select id, name, target_cents, saved_cents, year, month, done, created_at::text as created_at from goals where user_id = ${userId} order by created_at desc`,
		sql`select id, category, limit_cents from budgets where user_id = ${userId} order by category asc`
	]);
	return {
		profile,
		incomes: incomes.map(mapIncome),
		expenses: expenses.map(mapExpense),
		cards: cards.map(mapCard),
		purchases: purchases.map(mapPurchase),
		goals: goals.map(mapGoal),
		budgets: budgets.map(mapBudget)
	};
}
async function writeProfile(sql, userId, profile) {
	await sql`
    update profiles set
      display_name = ${profile.displayName},
      avatar = ${profile.avatar},
      app_name = ${profile.appName},
      theme = ${profile.theme},
      month_start_day = ${profile.monthStartDay},
      privacy_hidden = ${profile.privacyHidden},
      plan = ${profile.plan},
      ambient = ${profile.ambient},
      celebrate = ${profile.celebrate},
      onboarded = ${profile.onboarded},
      updated_at = now()
    where user_id = ${userId}
  `;
}
async function goalCount(sql, userId) {
	return num((await sql`select count(*)::int as n from goals where user_id = ${userId}`)[0]?.n);
}
async function insertIncome(sql, userId, id, data) {
	await sql`
    insert into incomes (id, user_id, kind, description, amount_cents, recurring, year, month, day)
    values (${id}, ${userId}, ${data.kind}, ${data.description}, ${data.amountCents}, ${data.recurring}, ${data.year}, ${data.month}, ${data.day})
  `;
}
async function applyMutation(sql, userId, mutation) {
	if (mutation.op === "profile") {
		const current = (await readBundle(sql, userId)).profile;
		await writeProfile(sql, userId, applyProfilePatch(current, mutation.profile));
		return;
	}
	if (mutation.op === "launch") {
		let cardId = "";
		if (mutation.newCard) {
			cardId = crypto.randomUUID();
			const card = mutation.newCard;
			await sql`
        insert into cards (id, user_id, name, limit_cents, due_day, tone)
        values (${cardId}, ${userId}, ${card.name}, ${card.limitCents}, ${card.dueDay}, ${card.tone})
      `;
		}
		for (const item of mutation.items) {
			const id = crypto.randomUUID();
			if (item.kind === "income") await insertIncome(sql, userId, id, {
				...item.data,
				id,
				createdAt: ""
			});
			else if (item.kind === "expense") {
				const data = item.data;
				await sql`
          insert into expenses (id, user_id, category, description, amount_cents, fixed, recurring, year, month, day)
          values (${id}, ${userId}, ${data.category}, ${data.description}, ${data.amountCents}, ${data.fixed}, ${data.recurring}, ${data.year}, ${data.month}, ${data.day})
        `;
			} else {
				const data = item.data;
				const useCard = data.cardId || cardId;
				if (!useCard) throw new Error("Escolha um cartão.");
				if (!(await sql`select id from cards where id = ${useCard} and user_id = ${userId}`)[0]) throw new Error("Cartão não encontrado.");
				const installmentCents = Math.floor(data.totalCents / data.installments);
				await sql`
          insert into purchases (
            id, user_id, card_id, description, category, merchant, total_cents, installments, installment_cents, year, month, day
          ) values (
            ${id}, ${userId}, ${useCard}, ${data.description}, ${data.category}, ${data.merchant},
            ${data.totalCents}, ${data.installments}, ${installmentCents}, ${data.year}, ${data.month}, ${data.day}
          )
        `;
			}
		}
		return;
	}
	if (mutation.op === "save-income") {
		const data = mutation.data;
		if (!(await sql`
      update incomes set
        kind = ${data.kind},
        description = ${data.description},
        amount_cents = ${data.amountCents},
        recurring = ${data.recurring},
        year = ${data.year},
        month = ${data.month},
        day = ${data.day}
      where id = ${mutation.id} and user_id = ${userId}
      returning id
    `)[0]) throw new Error("Entrada não encontrada.");
		return;
	}
	if (mutation.op === "delete-income") {
		await sql`delete from incomes where id = ${mutation.id} and user_id = ${userId}`;
		return;
	}
	if (mutation.op === "save-expense") {
		const data = mutation.data;
		if (!(await sql`
      update expenses set
        category = ${data.category},
        description = ${data.description},
        amount_cents = ${data.amountCents},
        fixed = ${data.fixed},
        recurring = ${data.recurring},
        year = ${data.year},
        month = ${data.month},
        day = ${data.day}
      where id = ${mutation.id} and user_id = ${userId}
      returning id
    `)[0]) throw new Error("Gasto não encontrado.");
		return;
	}
	if (mutation.op === "delete-expense") {
		await sql`delete from expenses where id = ${mutation.id} and user_id = ${userId}`;
		return;
	}
	if (mutation.op === "save-card") {
		const data = mutation.data;
		if (!(await sql`
      update cards set
        name = ${data.name},
        limit_cents = ${data.limitCents},
        due_day = ${data.dueDay},
        tone = ${data.tone}
      where id = ${mutation.id} and user_id = ${userId}
      returning id
    `)[0]) throw new Error("Cartão não encontrado.");
		return;
	}
	if (mutation.op === "delete-card") {
		await sql`delete from purchases where card_id = ${mutation.id} and user_id = ${userId}`;
		await sql`delete from cards where id = ${mutation.id} and user_id = ${userId}`;
		return;
	}
	if (mutation.op === "delete-purchase") {
		await sql`delete from purchases where id = ${mutation.id} and user_id = ${userId}`;
		return;
	}
	if (mutation.op === "save-goal") {
		const data = mutation.data;
		const done = data.savedCents >= data.targetCents;
		if (!mutation.id) {
			if ((await readBundle(sql, userId)).profile.plan !== "pro" && await goalCount(sql, userId) >= 2) throw new Error("No plano Free cabem duas metas. Ative o Pro para criar mais.");
			await sql`
        insert into goals (id, user_id, name, target_cents, saved_cents, year, month, done)
        values (${crypto.randomUUID()}, ${userId}, ${data.name}, ${data.targetCents}, ${data.savedCents}, ${data.year}, ${data.month}, ${done})
      `;
			return;
		}
		if (!(await sql`
      update goals set
        name = ${data.name},
        target_cents = ${data.targetCents},
        saved_cents = ${data.savedCents},
        year = ${data.year},
        month = ${data.month},
        done = ${done}
      where id = ${mutation.id} and user_id = ${userId}
      returning id
    `)[0]) throw new Error("Meta não encontrada.");
		return;
	}
	if (mutation.op === "delete-goal") {
		await sql`delete from goals where id = ${mutation.id} and user_id = ${userId}`;
		return;
	}
	if (mutation.op === "save-budget") {
		if (mutation.limitCents <= 0) throw new Error("Informe o limite da categoria.");
		await sql`
      insert into budgets (id, user_id, category, limit_cents)
      values (${crypto.randomUUID()}, ${userId}, ${mutation.category}, ${mutation.limitCents})
      on conflict (user_id, category) do update set limit_cents = excluded.limit_cents
    `;
		return;
	}
	if (mutation.op === "delete-budget") {
		await sql`delete from budgets where id = ${mutation.id} and user_id = ${userId}`;
		return;
	}
	if (mutation.op === "purge") {
		const bundle = await readBundle(sql, userId);
		const ym = todayYm(bundle.profile.monthStartDay);
		const purchaseIds = bundle.purchases.filter((row) => isSettled(row, ym, bundle.profile.monthStartDay)).map((row) => row.id);
		const expenseIds = bundle.expenses.filter((row) => !row.recurring && cmpYm(itemPeriod(row, bundle.profile.monthStartDay), ym) < 0).map((row) => row.id);
		if (purchaseIds.length) await sql.query(`delete from purchases where user_id = $1 and id = any($2::text[])`, [userId, purchaseIds]);
		if (expenseIds.length) await sql.query(`delete from expenses where user_id = $1 and id = any($2::text[])`, [userId, expenseIds]);
		return;
	}
	const snap = mutation.snapshot;
	const current = (await readBundle(sql, userId)).profile;
	await writeProfile(sql, userId, applyProfilePatch({
		...current,
		...snap.profile
	}, snap.profile));
	await sql`delete from incomes where user_id = ${userId}`;
	await sql`delete from expenses where user_id = ${userId}`;
	await sql`delete from purchases where user_id = ${userId}`;
	await sql`delete from cards where user_id = ${userId}`;
	await sql`delete from goals where user_id = ${userId}`;
	await sql`delete from budgets where user_id = ${userId}`;
	const seen = /* @__PURE__ */ new Set();
	const take = (id) => {
		let next = id;
		while (seen.has(next)) next = crypto.randomUUID();
		seen.add(next);
		return next;
	};
	for (const row of snap.cards) await sql`
      insert into cards (id, user_id, name, limit_cents, due_day, tone)
      values (${take(row.id)}, ${userId}, ${row.name}, ${row.limitCents}, ${row.dueDay}, ${row.tone})
    `;
	const cardIds = new Set(snap.cards.map((row) => row.id));
	seen.clear();
	for (const row of snap.incomes) await insertIncome(sql, userId, take(row.id), row);
	seen.clear();
	for (const row of snap.expenses) await sql`
      insert into expenses (id, user_id, category, description, amount_cents, fixed, recurring, year, month, day)
      values (${take(row.id)}, ${userId}, ${row.category}, ${row.description}, ${row.amountCents}, ${row.fixed}, ${row.recurring}, ${row.year}, ${row.month}, ${row.day})
    `;
	seen.clear();
	for (const row of snap.purchases) {
		if (!cardIds.has(row.cardId)) continue;
		await sql`
      insert into purchases (
        id, user_id, card_id, description, category, merchant, total_cents, installments, installment_cents, year, month, day
      ) values (
        ${take(row.id)}, ${userId}, ${row.cardId}, ${row.description}, ${row.category}, ${row.merchant},
        ${row.totalCents}, ${row.installments}, ${row.installmentCents}, ${row.year}, ${row.month}, ${row.day}
      )
    `;
	}
	seen.clear();
	for (const row of snap.goals) {
		const id = take(row.id);
		const done = row.savedCents >= row.targetCents;
		await sql`
      insert into goals (id, user_id, name, target_cents, saved_cents, year, month, done)
      values (${id}, ${userId}, ${row.name}, ${row.targetCents}, ${row.savedCents}, ${row.year}, ${row.month}, ${done})
    `;
	}
	for (const row of snap.budgets) {
		if (row.limitCents <= 0) continue;
		await sql`
      insert into budgets (id, user_id, category, limit_cents)
      values (${take(row.id)}, ${userId}, ${row.category}, ${row.limitCents})
      on conflict (user_id, category) do update set limit_cents = excluded.limit_cents
    `;
	}
}
var loadFinance_createServerFn_handler = createServerRpc({
	id: "d45afd2aa94b876252c6533eed6a1598b1d338ace844705008913a05cbcfe15f",
	name: "loadFinance",
	filename: "src/lib/finance/api.ts"
}, (opts) => loadFinance.__executeServer(opts));
var loadFinance = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(loadFinance_createServerFn_handler, async ({ context }) => {
	return readBundle(await getSql(), context.userId);
});
var mutateFinance_createServerFn_handler = createServerRpc({
	id: "91de929585e81b8c1a5493b9c0fcf8b8daa2fd6e63c987d8966c08665ee9260c",
	name: "mutateFinance",
	filename: "src/lib/finance/api.ts"
}, (opts) => mutateFinance.__executeServer(opts));
var mutateFinance = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((input) => sanitizeMutation(input)).handler(mutateFinance_createServerFn_handler, async ({ context, data }) => {
	const sql = await getSql();
	await applyMutation(sql, context.userId, data);
	return readBundle(sql, context.userId);
});
//#endregion
export { loadFinance_createServerFn_handler, mutateFinance_createServerFn_handler };
