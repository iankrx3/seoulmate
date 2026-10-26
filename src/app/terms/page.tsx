import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Terms — Seoulmate" };

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-16">
      <p className="text-sm text-mist">Draft</p>
      <h1 className="mt-3 font-serif text-4xl">Terms</h1>
      <p className="mt-6 leading-7 text-ink/80">
        This page is a placeholder. Seoulmate is not taking payment yet. The
        service, when it opens, is an AI companion for people 18 or older and
        is not a real relationship. A full agreement will be posted before
        anyone is charged.
      </p>
      <Link href="/" className="mt-8 inline-block text-sm font-medium text-clay">
        Back home
      </Link>
    </main>
  );
}
