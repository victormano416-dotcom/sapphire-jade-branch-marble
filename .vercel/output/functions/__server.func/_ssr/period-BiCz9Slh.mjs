//#region node_modules/.nitro/vite/services/ssr/assets/period-BiCz9Slh.js
function cmpYm(a, b) {
	return a.year * 12 + a.month - (b.year * 12 + b.month);
}
function addMonths(ym, n) {
	const index = ym.year * 12 + (ym.month - 1) + n;
	return {
		year: Math.floor(index / 12),
		month: index % 12 + 1
	};
}
function shiftPeriod(year, month, day, startDay) {
	if (startDay > 1 && day < startDay) return addMonths({
		year,
		month
	}, -1);
	return {
		year,
		month
	};
}
function itemPeriod(item, startDay) {
	if (item.day && startDay > 1) return shiftPeriod(item.year, item.month, item.day, startDay);
	return {
		year: item.year,
		month: item.month
	};
}
function todayYm(startDay, now = /* @__PURE__ */ new Date()) {
	return shiftPeriod(now.getFullYear(), now.getMonth() + 1, now.getDate(), startDay);
}
function occursInMonth(item, ym, startDay) {
	const start = itemPeriod(item, startDay);
	if (item.recurring) return cmpYm(start, ym) <= 0;
	return cmpYm(start, ym) === 0;
}
function installmentValue(p, index) {
	if (index < 0 || index >= p.installments) return 0;
	if (index === p.installments - 1) return p.totalCents - p.installmentCents * (p.installments - 1);
	return p.installmentCents;
}
function chargeInMonth(p, ym, startDay) {
	const start = itemPeriod(p, startDay);
	for (let i = 0; i < p.installments; i += 1) {
		const at = addMonths(start, i);
		if (at.year === ym.year && at.month === ym.month) return installmentValue(p, i);
	}
	return 0;
}
function openBalance(p, ym, startDay) {
	const start = itemPeriod(p, startDay);
	let sum = 0;
	for (let i = 0; i < p.installments; i += 1) if (cmpYm(addMonths(start, i), ym) >= 0) sum += installmentValue(p, i);
	return sum;
}
function isSettled(p, ym, startDay) {
	return cmpYm(addMonths(itemPeriod(p, startDay), p.installments - 1), ym) < 0;
}
function monthLabel(ym, withYear = false) {
	return new Date(ym.year, ym.month - 1, 1).toLocaleDateString("pt-BR", {
		month: withYear ? "long" : "short",
		year: withYear ? "numeric" : void 0
	}).replace(".", "");
}
function fullMonthLabel(ym) {
	return new Date(ym.year, ym.month - 1, 1).toLocaleDateString("pt-BR", {
		month: "long",
		year: "numeric"
	});
}
function dateLabel(item) {
	if (!item.day) return new Date(item.year, item.month - 1, 1).toLocaleDateString("pt-BR", {
		month: "short",
		year: "numeric"
	});
	return new Date(item.year, item.month - 1, item.day).toLocaleDateString("pt-BR", {
		day: "2-digit",
		month: "short",
		year: "numeric"
	});
}
function sumIncome(rows, ym, startDay) {
	return rows.reduce((s, row) => occursInMonth(row, ym, startDay) ? s + row.amountCents : s, 0);
}
function sumExpenses(rows, ym, startDay, fixed) {
	return rows.reduce((s, row) => {
		if (row.fixed !== fixed) return s;
		return occursInMonth(row, ym, startDay) ? s + row.amountCents : s;
	}, 0);
}
function invoiceTotal(rows, ym, startDay, cardId) {
	return rows.reduce((s, row) => {
		if (cardId && row.cardId !== cardId) return s;
		return s + chargeInMonth(row, ym, startDay);
	}, 0);
}
function daysUntilDue(dueDay, now = /* @__PURE__ */ new Date()) {
	const day = Math.min(Math.max(dueDay, 1), 31);
	const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	let due = clampDate(start.getFullYear(), start.getMonth(), day);
	if (due < start) due = clampDate(start.getFullYear(), start.getMonth() + 1, day);
	return Math.round((due.getTime() - start.getTime()) / 864e5);
}
function clampDate(year, monthIndex, day) {
	const last = new Date(year, monthIndex + 1, 0).getDate();
	return new Date(year, monthIndex, Math.min(day, last));
}
function categorySpend(expenses, purchases, ym, startDay) {
	const map = /* @__PURE__ */ new Map();
	const add = (category, cents) => {
		if (!cents) return;
		map.set(category, (map.get(category) ?? 0) + cents);
	};
	for (const row of expenses) if (occursInMonth(row, ym, startDay)) add(row.category, row.amountCents);
	for (const row of purchases) add(row.category, chargeInMonth(row, ym, startDay));
	return map;
}
//#endregion
export { dateLabel as a, invoiceTotal as c, monthLabel as d, occursInMonth as f, todayYm as g, sumIncome as h, cmpYm as i, isSettled as l, sumExpenses as m, categorySpend as n, daysUntilDue as o, openBalance as p, chargeInMonth as r, fullMonthLabel as s, addMonths as t, itemPeriod as u };
