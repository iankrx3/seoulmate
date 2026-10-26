import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
      <Link href="/#top" className="shrink-0">
        <Image
          src="/brand/logo.png"
          alt="seoulmateai"
          width={1708}
          height={232}
          priority
          className="h-7 w-auto sm:h-8"
        />
      </Link>
      <nav className="flex items-center gap-4 text-sm font-semibold">
        <Link href="/#boys" className="hidden sm:inline">
          Boys
        </Link>
        <Link href="/#pricing" className="hidden sm:inline">
          The tab
        </Link>
        <Link href="/#list" className="rounded-full bg-ink px-4 py-2 text-cream">
          I&apos;m in
        </Link>
      </nav>
    </header>
  );
}
