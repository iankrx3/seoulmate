"use server";

import { appendFile, mkdir, readFile } from "node:fs/promises";
import path from "node:path";
import { emailError, normalizeEmail, type WaitlistState } from "@/lib/waitlist";

type WaitlistRow = {
  email: string;
  source: "landing";
  adult_confirmed_at: string;
};

export async function joinWaitlist(
  _prev: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  const email = normalizeEmail(String(formData.get("email") ?? ""));
  const adult = formData.get("adult") === "yes";
  const invalid = emailError(email);

  if (invalid) return { status: "error", message: invalid };
  if (!adult) {
    return { status: "error", message: "Confirm that you are 18 or older." };
  }

  const row: WaitlistRow = {
    email,
    source: "landing",
    adult_confirmed_at: new Date().toISOString(),
  };

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (url && key) return saveToSupabase(url, key, row);
  if (process.env.NODE_ENV === "production") {
    return {
      status: "error",
      message: "The list isn't open yet. Check back soon.",
    };
  }

  return saveLocally(row);
}

async function saveToSupabase(
  url: string,
  key: string,
  row: WaitlistRow,
): Promise<WaitlistState> {
  const response = await fetch(`${url}/rest/v1/waitlist`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(row),
  });

  if (response.ok) return { status: "success" };
  if (response.status === 409) {
    return { status: "success" };
  }

  const body = await response.text();
  if (body.includes("23505") || body.includes("duplicate")) {
    return { status: "success" };
  }

  return {
    status: "error",
    message: "We couldn't save that. Try again in a moment.",
  };
}

async function saveLocally(row: WaitlistRow): Promise<WaitlistState> {
  const dir = path.join(process.cwd(), ".data");
  const file = path.join(dir, "waitlist.jsonl");
  await mkdir(dir, { recursive: true });

  try {
    const existing = await readFile(file, "utf8");
    if (existing.split("\n").some((line) => line.includes(`"email":"${row.email}"`))) {
      return { status: "success" };
    }
  } catch {
    // First signup creates the file.
  }

  await appendFile(file, `${JSON.stringify(row)}\n`, "utf8");
  return { status: "success" };
}
