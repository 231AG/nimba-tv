"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search, Tv } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/news", label: "News" },
  { href: "/videos", label: "Watch" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-sm">
      <div className="bg-brand-blue text-white text-xs py-1.5">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span>{siteConfig.tagline}</span>
          <span>Est. {siteConfig.established} · {siteConfig.location}</span>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center">
              <Tv className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="font-heading font-bold text-xl text-brand-blue">
                Nimba TV
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-neutral-700 hover:text-brand-red transition-colors rounded-md hover:bg-brand-gray"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/news"
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-sm text-neutral-600 hover:text-brand-blue transition-colors"
              aria-label="Search news"
            >
              <Search className="w-4 h-4" />
            </Link>
            <Link
              href="/videos"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-brand-red text-white text-sm font-semibold rounded-md hover:bg-brand-red/90 transition-colors"
            >
              <Tv className="w-4 h-4" />
              Watch Live
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-neutral-700 hover:text-brand-blue"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300",
          mobileOpen ? "max-h-96 border-t border-neutral-200" : "max-h-0"
        )}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 text-sm font-medium text-neutral-700 hover:text-brand-red hover:bg-brand-gray rounded-md transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/videos"
            onClick={() => setMobileOpen(false)}
            className="mt-2 px-4 py-3 bg-brand-red text-white text-sm font-semibold rounded-md text-center"
          >
            Watch Live
          </Link>
        </nav>
      </div>
    </header>
  );
}
