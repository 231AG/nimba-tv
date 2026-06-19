import { Suspense } from "react";
import { generateSEO } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import FadeIn from "@/components/ui/FadeIn";
import NewsPageClient from "@/components/news/NewsPageClient";
import {
  fetchArticles,
  fetchCategories,
  fetchAuthors,
  searchArticles,
  filterArticles,
  paginateArticles,
} from "@/lib/data";

export const metadata = generateSEO({
  title: "News",
  description: "Browse the latest news and stories from Nimba TV covering politics, business, health, sports, and more.",
  url: `${siteConfig.url}/news`,
});

interface NewsPageProps {
  searchParams: Promise<{
    q?: string;
    category?: string;
    author?: string;
    dateFrom?: string;
    dateTo?: string;
    page?: string;
  }>;
}

export default async function NewsPage({ searchParams }: NewsPageProps) {
  const params = await searchParams;
  const [categories, authors] = await Promise.all([
    fetchCategories(),
    fetchAuthors(),
  ]);

  let articles = await fetchArticles();

  if (params.q) {
    articles = searchArticles(params.q);
  }

  articles = filterArticles({
    category: params.category,
    author: params.author,
    dateFrom: params.dateFrom,
    dateTo: params.dateTo,
  });

  const page = Math.max(1, parseInt(params.page || "1", 10));
  const perPage = 9;
  const { articles: paginatedArticles, totalPages, currentPage } =
    paginateArticles(articles, page, perPage);

  return (
    <>
      <section className="bg-brand-blue text-white py-12">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h1 className="text-3xl md:text-4xl font-heading font-bold">News Archive</h1>
            <p className="text-neutral-300 mt-2">Browse all stories from Nimba TV</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <Suspense fallback={<div className="text-center py-8">Loading...</div>}>
            <NewsPageClient
              articles={paginatedArticles}
              categories={categories}
              authors={authors}
              currentPage={currentPage}
              totalPages={totalPages}
              searchQuery={params.q}
              filters={{
                category: params.category,
                author: params.author,
                dateFrom: params.dateFrom,
                dateTo: params.dateTo,
              }}
            />
          </Suspense>
        </div>
      </section>
    </>
  );
}
