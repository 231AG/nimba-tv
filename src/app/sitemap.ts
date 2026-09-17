import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { fetchAllArticleSlugs, fetchAllCategorySlugs } from "@/lib/data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [articleSlugs, categorySlugs] = await Promise.all([
    fetchAllArticleSlugs(),
    fetchAllCategorySlugs(),
  ]);

  const now = new Date();

  return [
    { url: siteConfig.url, lastModified: now, changeFrequency: "hourly", priority: 1 },
    { url: `${siteConfig.url}/news`, lastModified: now, changeFrequency: "hourly", priority: 0.9 },
    { url: `${siteConfig.url}/watch`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${siteConfig.url}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteConfig.url}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    ...articleSlugs.map((slug) => ({
      url: `${siteConfig.url}/news/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...categorySlugs.map((slug) => ({
      url: `${siteConfig.url}/category/${slug}`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 0.7,
    })),
  ];
}
