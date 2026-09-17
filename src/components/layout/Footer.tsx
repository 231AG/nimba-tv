import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import SocialIcons from "@/components/ui/SocialIcons";

const QUICK_LINKS = [
  { label: "Latest news", href: "/news" },
  { label: "Watch", href: "/watch" },
  { label: "About Nimba TV", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-navy-deep text-white">
      <div className="wrap grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <Image src="/brand/logo-96.png" alt="" width={52} height={52} className="h-12 w-12" />
            <span className="font-display text-xl font-semibold">
              Nimba<span className="text-flag-red">TV</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
            {siteConfig.legalName} — broadcasting from {siteConfig.city} since {siteConfig.established}.
            {" "}{siteConfig.tagline}.
          </p>
          <SocialIcons tone="light" className="mt-5" />
        </div>

        <div>
          <h2 className="eyebrow text-azure">Explore</h2>
          <ul className="mt-4 flex flex-col gap-2.5">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/75 transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow text-azure">Sections</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
            {siteConfig.categories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/category/${c.slug}`}
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow text-azure">Contact</h2>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-white/75">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-azure" />
              {siteConfig.contact.address}
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-azure" />
              <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className="hover:text-white">
                {siteConfig.contact.phone}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-azure" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white">
                {siteConfig.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-2 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p>
          <p>Stories shown are demo content for design purposes.</p>
        </div>
      </div>
    </footer>
  );
}
