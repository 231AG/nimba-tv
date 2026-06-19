import { siteConfig } from "@/config/site";
import type { NewsArticle } from "@/types";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    foundingDate: siteConfig.established.toString(),
    address: {
      "@type": "PostalAddress",
      addressCountry: "LR",
      addressLocality: "Monrovia",
    },
    sameAs: Object.values(siteConfig.social),
  };
}

export function generateArticleSchema(article: NewsArticle) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    image: article.featuredImage,
    datePublished: article.publishDate,
    dateModified: article.publishDate,
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.position,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/news/${article.slug}`,
    },
    articleSection: article.category.name,
    keywords: article.tags.join(", "),
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
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
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/news?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}
