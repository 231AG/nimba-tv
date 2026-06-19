import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { fetchAllArticleSlugs, fetchAllCategorySlugs } from "@/lib/data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [articleSlugs, categorySlugs] = await Promise.all([
    fetchAllArticleSlugs(),
    fetchAllCategorySlugs(),
  ]);

  const staticPages: MetadataRoute.Sitemap = [
    { url: siteConfig.url, lastModified: new Date(), changeFrequency: "hourly", priority: 1 },
    { url: `${siteConfig.url}/news`, lastModified: new Date(), changeFrequency: "hourly", priority: 0.9 },
    { url: `${siteConfig.url}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteConfig.url}/videos`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: `${siteConfig.url}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];

  const articlePages: MetadataRoute.Sitemap = articleSlugs.map((slug) => ({
    url: `${siteConfig.url}/news/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const categoryPages: MetadataRoute.Sitemap = categorySlugs.map((slug) => ({
    url: `${siteConfig.url}/category/${slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...articlePages, ...categoryPages];
}
