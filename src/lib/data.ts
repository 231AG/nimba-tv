/**
 * Data access layer - abstracts mock data vs Sanity CMS
 * Swap implementations here when Sanity is connected
 */

import {
  articles,
  getArticleBySlug,
  getFeaturedArticles,
  getArticlesByCategory,
  getRelatedArticles,
  searchArticles,
  filterArticles,
  paginateArticles,
} from "@/data/mock-articles";
import { categories, getCategoryBySlug } from "@/data/mock-categories";
import { authors, getAuthorById } from "@/data/mock-authors";
import { videos, getVideosByType } from "@/data/mock-videos";
import type { NewsArticle, Category, Author, Video } from "@/types";

export async function fetchArticles(): Promise<NewsArticle[]> {
  return articles;
}

export async function fetchArticleBySlug(
  slug: string
): Promise<NewsArticle | undefined> {
  return getArticleBySlug(slug);
}

export async function fetchFeaturedArticles(): Promise<NewsArticle[]> {
  return getFeaturedArticles();
}

export async function fetchArticlesByCategory(
  categorySlug: string
): Promise<NewsArticle[]> {
  return getArticlesByCategory(categorySlug);
}

export async function fetchRelatedArticles(
  article: NewsArticle,
  limit?: number
): Promise<NewsArticle[]> {
  return getRelatedArticles(article, limit);
}

export async function fetchCategories(): Promise<Category[]> {
  return categories;
}

export async function fetchCategoryBySlug(
  slug: string
): Promise<Category | undefined> {
  return getCategoryBySlug(slug);
}

export async function fetchAuthors(): Promise<Author[]> {
  return authors;
}

export async function fetchAuthorById(
  id: string
): Promise<Author | undefined> {
  return getAuthorById(id);
}

export async function fetchVideos(): Promise<Video[]> {
  return videos;
}

export async function fetchVideosByType(
  type: Video["type"]
): Promise<Video[]> {
  return getVideosByType(type);
}

export {
  searchArticles,
  filterArticles,
  paginateArticles,
};

export async function fetchBreakingNews(): Promise<NewsArticle[]> {
  return articles.slice(0, 6);
}

export async function fetchCommunitySpotlight(): Promise<NewsArticle[]> {
  return articles.filter((a) => a.category.slug === "community-news").slice(0, 4);
}

export async function fetchAllArticleSlugs(): Promise<string[]> {
  return articles.map((a) => a.slug);
}

export async function fetchAllCategorySlugs(): Promise<string[]> {
  return categories.map((c) => c.slug);
}
