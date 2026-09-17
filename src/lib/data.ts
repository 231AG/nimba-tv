/**
 * Data access layer.
 *
 * Every page reads through these functions rather than importing the demo data
 * directly, so moving to a CMS is a rewrite of this one file.
 */
import {
  articles,
  getArticleBySlug,
  getFeaturedArticles,
  getBreakingArticles,
  getArticlesByCategory,
  getRelatedArticles,
} from "@/data/articles";
import { categories, getCategoryBySlug } from "@/data/categories";
import { authors, getAuthorById } from "@/data/authors";
import { programmes } from "@/data/programmes";
import type { NewsArticle, Category, Author, Programme } from "@/types";

const byNewest = (a: NewsArticle, b: NewsArticle) =>
  new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();

export async function fetchArticles(): Promise<NewsArticle[]> {
  return [...articles].sort(byNewest);
}

export async function fetchArticleBySlug(slug: string): Promise<NewsArticle | undefined> {
  return getArticleBySlug(slug);
}

export async function fetchLeadStory(): Promise<NewsArticle | undefined> {
  return getFeaturedArticles().sort(byNewest)[0] ?? [...articles].sort(byNewest)[0];
}

export async function fetchFeaturedArticles(): Promise<NewsArticle[]> {
  return getFeaturedArticles().sort(byNewest);
}

export async function fetchBreakingArticles(): Promise<NewsArticle[]> {
  return getBreakingArticles().sort(byNewest);
}

export async function fetchArticlesByCategory(slug: string): Promise<NewsArticle[]> {
  return getArticlesByCategory(slug).sort(byNewest);
}

export async function fetchRelatedArticles(article: NewsArticle, limit?: number) {
  return getRelatedArticles(article, limit);
}

export async function fetchVideoArticles(): Promise<NewsArticle[]> {
  return articles.filter((a) => a.youtubeId).sort(byNewest);
}

export async function fetchCategories(): Promise<Category[]> {
  return categories;
}

export async function fetchCategoryBySlug(slug: string): Promise<Category | undefined> {
  return getCategoryBySlug(slug);
}

export async function fetchAuthors(): Promise<Author[]> {
  return authors;
}

export async function fetchAuthorById(id: string): Promise<Author | undefined> {
  return getAuthorById(id);
}

export async function fetchProgrammes(): Promise<Programme[]> {
  return programmes;
}

export async function fetchCommunitySpotlight(): Promise<NewsArticle[]> {
  return getArticlesByCategory("community").sort(byNewest).slice(0, 3);
}

export async function fetchAllArticleSlugs(): Promise<string[]> {
  return articles.map((a) => a.slug);
}

export async function fetchAllCategorySlugs(): Promise<string[]> {
  return categories.map((c) => c.slug);
}

export { searchArticles, filterArticles, paginateArticles } from "@/data/articles";
