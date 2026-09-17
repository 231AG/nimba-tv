import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { FacebookIcon, YoutubeIcon, WhatsAppIcon } from "@/components/ui/BrandIcons";

const CHANNELS = [
  {
    href: siteConfig.social.facebook,
    Icon: FacebookIcon,
    name: "Facebook",
    detail: "Bulletins and updates through the day",
  },
  {
    href: siteConfig.social.youtube,
    Icon: YoutubeIcon,
    name: "YouTube",
    detail: "Full programmes and the archive",
  },
  {
    href: siteConfig.social.whatsapp,
    Icon: WhatsAppIcon,
    name: "WhatsApp",
    detail: "Send the newsroom a story from your town",
  },
];

/**
 * Stands in for a newsletter sign-up. Nimba TV's audience reaches the station
 * on Facebook, YouTube and WhatsApp, so the page asks for what people will
 * actually do rather than collecting email addresses nobody sends to.
 */
export default function FollowStrip() {
  return (
    <section className="border-t border-line bg-surface py-12 lg:py-16" aria-labelledby="follow-heading">
      <div className="wrap grid gap-8 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:items-center lg:gap-16">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/brand/logo-96.png" alt="" width={56} height={56} className="h-12 w-12" />
            <span aria-hidden className="h-8 w-px bg-line" />
            <span className="eyebrow text-muted">Est. {siteConfig.established}</span>
          </div>
          <h2 id="follow-heading" className="mt-4 text-2xl text-navy sm:text-3xl">
            Follow Nimba TV
          </h2>
          <p className="mt-2 font-read text-base leading-relaxed text-muted">
            The station reaches audiences across Liberia through Facebook and YouTube. Follow along —
            or send the newsroom a story from your community.
          </p>
        </div>

        <ul className="divide-y divide-line border-y border-line">
          {CHANNELS.map(({ href, Icon, name, detail }) => (
            <li key={name}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center gap-4 py-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-navy text-white transition-colors group-hover:bg-flag-red">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-lg font-semibold text-navy transition-colors group-hover:text-flag-red">
                    {name}
                  </span>
                  <span className="mt-0.5 block font-ui text-sm text-muted">{detail}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-flag-red" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
