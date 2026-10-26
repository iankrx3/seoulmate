export type WaitlistState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function normalizeEmail(value: string) {
  return value.trim().toLowerCase();
}

export function emailError(value: string) {
  if (!value) return "Enter an email address.";
  if (!EMAIL.test(value)) return "That email doesn't look right.";
  return null;
}
