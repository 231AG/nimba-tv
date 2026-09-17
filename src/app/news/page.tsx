import { generateSEO } from "@/lib/seo";
import ArticleCard from "@/components/news/ArticleCard";
import NewsControls from "@/components/news/NewsControls";
import Pagination from "@/components/ui/Pagination";
import Reveal from "@/components/ui/Reveal";
import {
  fetchArticles,
  fetchAuthors,
  fetchCategories,
  filterArticles,
  paginateArticles,
  searchArticles,
} from "@/lib/data";

export const metadata = generateSEO({
  title: "News",
  description:
    "Every story from the Nimba TV newsroom — politics, community, education, health, business, sport and culture from Nimba County.",
  path: "/news",
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

const PER_PAGE = 9;

export default async function NewsPage({ searchParams }: NewsPageProps) {
  const params = await searchParams;
  const [allArticles, categories, authors] = await Promise.all([
    fetchArticles(),
    fetchCategories(),
    fetchAuthors(),
  ]);

  // Search narrows the pool, then filters narrow it further — the two compose.
  const searched = params.q ? searchArticles(params.q, allArticles) : allArticles;
  const matched = filterArticles(
    {
      category: params.category,
      author: params.author,
      dateFrom: params.dateFrom,
      dateTo: params.dateTo,
    },
    searched
  );

  const page = Math.max(1, Number.parseInt(params.page || "1", 10) || 1);
  const { articles, totalPages, currentPage } = paginateArticles(matched, page, PER_PAGE);

  const carried: Record<string, string> = {};
  if (params.q) carried.q = params.q;
  if (params.category) carried.category = params.category;
  if (params.author) carried.author = params.author;
  if (params.dateFrom) carried.dateFrom = params.dateFrom;
  if (params.dateTo) carried.dateTo = params.dateTo;

  return (
    <>
      <div className="border-b border-line bg-surface">
        <div className="wrap py-8 lg:py-12">
          <span aria-hidden className="mb-3 block h-1 w-10 bg-flag-red" />
          <h1 className="text-3xl text-navy sm:text-4xl">News</h1>
          <p className="mt-2 max-w-2xl font-read text-base text-muted">
            Every story from the Nimba TV newsroom, newest first.
          </p>
        </div>
      </div>

      <div className="wrap py-8 lg:py-10">
        <NewsControls
          categories={categories}
          authors={authors}
          query={params}
          resultCount={matched.length}
        />

        {articles.length === 0 ? (
          <div className="py-20 text-center">
            <p className="font-display text-xl text-navy">No stories match that search.</p>
            <p className="mt-2 font-read text-muted">
              Try a different word, or clear the filters to see everything.
            </p>
          </div>
        ) : (
          <>
            <ul className="mt-6 divide-y divide-line sm:hidden">
              {articles.map((article) => (
                <li key={article.id} className="py-4 first:pt-0">
                  <ArticleCard article={article} variant="row" />
                </li>
              ))}
            </ul>

            <div className="mt-8 hidden gap-x-6 gap-y-9 sm:grid sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article, i) => (
                <Reveal key={article.id} delay={i * 40} className="h-full">
                  <ArticleCard article={article} priority={i < 3} />
                </Reveal>
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              basePath="/news"
              searchParams={carried}
            />
          </>
        )}
      </div>
    </>
  );
}
