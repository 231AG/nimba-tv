import { FacebookIcon, YoutubeIcon, WhatsAppIcon } from "@/components/ui/BrandIcons";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: siteConfig.social.facebook, label: "Nimba TV on Facebook", Icon: FacebookIcon },
  { href: siteConfig.social.youtube, label: "Nimba TV on YouTube", Icon: YoutubeIcon },
  { href: siteConfig.social.whatsapp, label: "Nimba TV on WhatsApp", Icon: WhatsAppIcon },
];

export default function SocialIcons({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {LINKS.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={label}
            className={cn(
              "flex h-9 w-9 items-center justify-center transition-colors",
              tone === "light"
                ? "bg-white/10 text-white hover:bg-flag-red"
                : "bg-surface-2 text-navy hover:bg-navy hover:text-white"
            )}
          >
            <Icon className="h-4 w-4" />
          </a>
        </li>
      ))}
    </ul>
  );
}
