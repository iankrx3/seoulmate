"use client";

import { startTransition, useActionState } from "react";
import { joinWaitlist } from "@/server/waitlist";
import type { WaitlistState } from "@/lib/waitlist";

const initial: WaitlistState = { status: "idle" };

export function WaitlistForm() {
  const [state, action, pending] = useActionState(joinWaitlist, initial);

  if (state.status === "success") {
    return (
      <p className="rounded-2xl bg-ink px-5 py-4 text-cream" role="status">
        You&apos;re on the list. We&apos;ll write when chat opens.
      </p>
    );
  }

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        startTransition(() => {
          action(formData);
        });
      }}
    >
      <label className="flex flex-col gap-2 text-sm font-medium" htmlFor="email">
        Email
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@example.com"
          className="h-12 rounded-full border border-ink/15 bg-white px-5 text-base font-normal outline-none ring-clay focus:ring-2"
        />
      </label>
      <label className="flex items-start gap-3 text-sm leading-6 text-ink/80">
        <input
          name="adult"
          value="yes"
          type="checkbox"
          required
          className="mt-1 size-4 accent-clay"
        />
        I confirm I am 18 or older.
      </label>
      {state.status === "error" ? (
        <p className="text-sm text-clay" role="alert">
          {state.message}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="h-12 rounded-full bg-clay px-6 text-sm font-semibold text-white transition hover:bg-clay/90 disabled:opacity-60"
      >
        {pending ? "Saving…" : "I'm in"}
      </button>
    </form>
  );
}
