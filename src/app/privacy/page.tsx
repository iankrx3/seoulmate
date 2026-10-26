import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Privacy — Seoulmate" };

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-16">
      <p className="text-sm text-mist">Draft</p>
      <h1 className="mt-3 font-serif text-4xl">Privacy</h1>
      <p className="mt-6 leading-7 text-ink/80">
        The waitlist stores your email and the time you confirmed you are 18
        or older, so we can tell you when the product opens. When chat exists,
        messages will be sent to Google&apos;s Gemini API to write replies, and
        a copy will be stored in our database. This draft is not the final
        notice.
      </p>
      <Link href="/" className="mt-8 inline-block text-sm font-medium text-clay">
        Back home
      </Link>
    </main>
  );
}
