"use client";

import { siteConfig } from "@/config/site";
import { FacebookIcon, XIcon, LinkedinIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";

interface SocialShareProps {
  title: string;
  slug: string;
}

export default function SocialShare({ title, slug }: SocialShareProps) {
  const url = `${siteConfig.url}/news/${slug}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: FacebookIcon,
    },
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      icon: WhatsAppIcon,
    },
    {
      name: "X",
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      icon: XIcon,
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: LinkedinIcon,
    },
  ];

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-neutral-600">Share:</span>
      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${link.name}`}
          className="p-2 rounded-full bg-brand-gray text-brand-blue hover:bg-brand-blue hover:text-white transition-colors"
        >
          <link.icon className="w-4 h-4" />
        </a>
      ))}
    </div>
  );
}
