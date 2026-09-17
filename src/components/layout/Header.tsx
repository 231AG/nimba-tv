"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Search, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import SocialIcons from "@/components/ui/SocialIcons";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Home", href: "/" },
  { label: "News", href: "/news" },
  { label: "Watch", href: "/watch" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // An open drawer locks the page behind it.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/85">
      {/* Utility strip — desktop only, where the vertical space is free. */}
      <div className="hidden bg-navy text-white lg:block">
        <div className="wrap flex h-9 items-center justify-between">
          <p className="flex items-center gap-1.5 font-ui text-xs text-white/75">
            <MapPin className="h-3.5 w-3.5 text-azure" />
            {siteConfig.city}, {siteConfig.county} · Est. {siteConfig.established}
          </p>
          <p className="font-ui text-xs tracking-wide text-white/60">{siteConfig.tagline}</p>
        </div>
      </div>

      <div className="wrap flex h-16 items-center justify-between gap-3 lg:h-20">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${siteConfig.name} home`}>
          <Image
            src="/brand/logo-96.png"
            alt=""
            width={48}
            height={48}
            priority
            className="h-10 w-10 shrink-0 lg:h-12 lg:w-12"
          />
          <span className="leading-none">
            <span className="block font-display text-xl font-semibold tracking-tight text-navy lg:text-2xl">
              Nimba<span className="text-flag-red">TV</span>
            </span>
            <span className="mt-0.5 hidden font-ui text-[0.65rem] uppercase tracking-[0.14em] text-muted sm:block">
              Nimba Online Television
            </span>
          </span>
        </Link>

        <nav className="hidden lg:block" aria-label="Main">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative px-3 py-2 font-ui text-sm font-semibold transition-colors",
                    isActive(item.href) ? "text-flag-red" : "text-navy hover:text-azure-deep"
                  )}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span aria-hidden className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-flag-red" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <Link
            href="/news"
            aria-label="Search news"
            className="flex h-10 w-10 items-center justify-center text-navy transition-colors hover:text-flag-red"
          >
            <Search className="h-5 w-5" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center text-navy lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Section bar — desktop. On mobile these live in the drawer. */}
      <div className="hidden border-t border-line bg-surface lg:block">
        <div className="wrap flex h-11 items-center gap-1 overflow-x-auto no-scrollbar">
          {siteConfig.categories.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className={cn(
                "shrink-0 px-3 py-1.5 font-ui text-xs font-semibold uppercase tracking-wider transition-colors",
                pathname === `/category/${c.slug}`
                  ? "text-flag-red"
                  : "text-muted hover:text-navy"
              )}
            >
              {c.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile drawer. Every link closes it on the way out. */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-paper lg:hidden"
      >
        <nav className="wrap py-4" aria-label="Mobile">
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center justify-between border-b border-line py-3.5 font-ui text-base font-semibold",
                    isActive(item.href) ? "text-flag-red" : "text-navy"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <p className="eyebrow mt-6 text-muted">Sections</p>
          <ul className="mt-3 grid grid-cols-2 gap-2">
            {siteConfig.categories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/category/${c.slug}`}
                  onClick={() => setOpen(false)}
                  className="block bg-surface px-3 py-2.5 font-ui text-sm font-semibold text-navy"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
            <span className="font-ui text-xs text-muted">Follow Nimba TV</span>
            <SocialIcons />
          </div>
        </nav>
      </div>
    </header>
  );
}
