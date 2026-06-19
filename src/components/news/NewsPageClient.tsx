"use client";

import { useRouter } from "next/navigation";
import type { NewsArticle, Category, Author } from "@/types";
import ArticleCard from "@/components/news/ArticleCard";
import NewsSearch from "@/components/news/NewsSearch";
import NewsFilters from "@/components/news/NewsFilters";
import Pagination from "@/components/ui/Pagination";
import FadeIn from "@/components/ui/FadeIn";

interface NewsPageClientProps {
  articles: NewsArticle[];
  categories: Category[];
  authors: Author[];
  currentPage: number;
  totalPages: number;
  searchQuery?: string;
  filters: {
    category?: string;
    author?: string;
    dateFrom?: string;
    dateTo?: string;
  };
}

export default function NewsPageClient({
  articles,
  categories,
  authors,
  currentPage,
  totalPages,
  searchQuery,
  filters,
}: NewsPageClientProps) {
  const router = useRouter();

  const buildUrl = (params: Record<string, string | undefined>) => {
    const sp = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value) sp.set(key, value);
    });
    const qs = sp.toString();
    return `/news${qs ? `?${qs}` : ""}`;
  };

  const handleSearch = (query: string) => {
    router.push(buildUrl({ q: query || undefined, ...filters, page: undefined }));
  };

  const handleFilterChange = (newFilters: {
    category?: string;
    author?: string;
    dateFrom?: string;
    dateTo?: string;
  }) => {
    router.push(
      buildUrl({
        q: searchQuery,
        category: newFilters.category,
        author: newFilters.author,
        dateFrom: newFilters.dateFrom,
        dateTo: newFilters.dateTo,
        page: undefined,
      })
    );
  };

  return (
    <>
      <div className="mb-8 space-y-4">
        <NewsSearch defaultValue={searchQuery} onSearch={handleSearch} />
        <NewsFilters
          categories={categories}
          authors={authors}
          selectedCategory={filters.category}
          selectedAuthor={filters.author}
          selectedDateFrom={filters.dateFrom}
          selectedDateTo={filters.dateTo}
          onFilterChange={handleFilterChange}
        />
      </div>

      {articles.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-lg text-neutral-600">No articles found matching your criteria.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <FadeIn key={article.id} delay={i * 0.05}>
                <ArticleCard article={article} />
              </FadeIn>
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            basePath="/news"
            searchParams={{
              ...(searchQuery && { q: searchQuery }),
              ...(filters.category && { category: filters.category }),
              ...(filters.author && { author: filters.author }),
              ...(filters.dateFrom && { dateFrom: filters.dateFrom }),
              ...(filters.dateTo && { dateTo: filters.dateTo }),
            }}
          />
        </>
      )}
    </>
  );
}
