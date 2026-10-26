import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-ink/10 pt-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="max-w-md font-serif text-xl leading-7 tracking-tight">
            Let everyone be the lead in their own seoul love story, seoulmate
          </p>
          <p className="mt-2 text-sm text-mist">
            Seoulmate is an AI. You must be 18 or older.
          </p>
        </div>
        <p className="flex gap-4 text-sm font-semibold">
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
        </p>
      </div>
    </footer>
  );
}
