import { siteConfig } from "@/config/site";
import type { NewsArticle } from "@/types";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    name: siteConfig.name,
    alternateName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/brand/og-logo.png`,
    description: siteConfig.description,
    foundingDate: String(siteConfig.established),
    slogan: siteConfig.tagline,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.county,
      addressCountry: "LR",
    },
    /* sameAs is for profiles the organisation controls. The WhatsApp
       click-to-chat link is a way to reach the newsroom, not a profile, so it
       is described as a contactPoint instead. */
    sameAs: [siteConfig.social.facebook, siteConfig.social.youtube, siteConfig.social.tiktok],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "newsroom",
      telephone: siteConfig.contact.phone.replace(/\s/g, ""),
      email: siteConfig.contact.email,
      areaServed: "LR",
      availableLanguage: ["en"],
    },
  };
}

export function generateArticleSchema(article: NewsArticle) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    image: `${siteConfig.url}${article.featuredImage}`,
    datePublished: article.publishDate,
    dateModified: article.publishDate,
    author: { "@type": "Person", name: article.author.name, jobTitle: article.author.role },
    publisher: {
      "@type": "NewsMediaOrganization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/brand/og-logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/news/${article.slug}` },
    articleSection: article.category.name,
    keywords: article.tags.join(", "),
    wordCount: article.content.replace(/<[^>]+>/g, " ").trim().split(/\s+/).length,
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${siteConfig.url}/news?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
}
