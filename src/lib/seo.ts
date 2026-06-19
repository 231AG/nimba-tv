import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  publishedTime?: string;
  authors?: string[];
  tags?: string[];
}

export function generateSEO({
  title,
  description,
  image,
  url,
  type = "website",
  publishedTime,
  authors,
  tags,
}: SEOProps = {}): Metadata {
  const seoTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} - ${siteConfig.tagline}`;
  const seoDescription = description || siteConfig.description;
  const seoImage = image || `${siteConfig.url}/og-default.jpg`;
  const seoUrl = url || siteConfig.url;

  return {
    title: seoTitle,
    description: seoDescription,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: seoUrl,
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: seoUrl,
      siteName: siteConfig.name,
      images: [{ url: seoImage, width: 1200, height: 630, alt: seoTitle }],
      locale: "en_US",
      type,
      ...(type === "article" && {
        publishedTime,
        authors,
        tags,
      }),
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
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
