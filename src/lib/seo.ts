import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
  type?: "website" | "article";
  publishedTime?: string;
  authors?: string[];
  tags?: string[];
}

export function generateSEO({
  title,
  description,
  image,
  path = "/",
  type = "website",
  publishedTime,
  authors,
  tags,
}: SEOProps = {}): Metadata {
  const seoTitle = title ? `${title} · ${siteConfig.name}` : `${siteConfig.name} — ${siteConfig.tagline}`;
  const seoDescription = description || siteConfig.description;
  const seoImage = image || "/brand/og-logo.png";
  const url = `${siteConfig.url}${path}`;

  return {
    title: seoTitle,
    description: seoDescription,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url,
      siteName: siteConfig.name,
      images: [{ url: seoImage, width: 1200, height: 630, alt: seoTitle }],
      locale: "en_LR",
      type,
      ...(type === "article" && { publishedTime, authors, tags }),
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
      images: [seoImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
  };
}
