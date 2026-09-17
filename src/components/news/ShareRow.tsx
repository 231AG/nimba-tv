"use client";

import { useState } from "react";
import { Link2, Check } from "lucide-react";
import { FacebookIcon, WhatsAppIcon } from "@/components/ui/BrandIcons";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * WhatsApp and Facebook lead deliberately: they are how Nimba TV's audience
 * actually circulates stories. Sharing to WhatsApp needs no station account —
 * wa.me opens the reader's own app — which is why it appears here but not
 * among the station's follow channels.
 */
export default function ShareRow({
  title,
  slug,
  className,
  orientation = "horizontal",
}: {
  title: string;
  slug: string;
  className?: string;
  orientation?: "horizontal" | "vertical";
}) {
  const [copied, setCopied] = useState(false);
  const url = `${siteConfig.url}/news/${slug}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be unavailable; the other share targets still work.
    }
  };

  const item = "flex h-10 w-10 items-center justify-center bg-surface text-navy transition-colors hover:bg-navy hover:text-white";

  return (
    <div
      className={cn(
        "flex items-center gap-2",
        orientation === "vertical" && "flex-col",
        className
      )}
    >
      <span className="eyebrow mr-1 text-muted">Share</span>
      <a
        href={`https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Share on WhatsApp"
        className={item}
      >
        <WhatsAppIcon className="h-4 w-4" />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Share on Facebook"
        className={item}
      >
        <FacebookIcon className="h-4 w-4" />
      </a>
      <button type="button" onClick={copy} aria-label="Copy link" className={item}>
        {copied ? <Check className="h-4 w-4 text-azure-deep" /> : <Link2 className="h-4 w-4" />}
      </button>
      <span aria-live="polite" className="sr-only">
        {copied ? "Link copied" : ""}
      </span>
    </div>
  );
}
