export const OWNER_EMAIL = "victormano416@gmail.com";

export type AccessStatus = "pending" | "approved" | "blocked";

export function isOwnerEmail(email: string | null | undefined) {
  return (email ?? "").trim().toLowerCase() === OWNER_EMAIL;
}

export function normalizeStatus(value: unknown): AccessStatus {
  if (value === "approved" || value === "blocked" || value === "pending") return value;
  return "pending";
}
