import { notFound } from "next/navigation";
import { generateSEO } from "@/lib/seo";
import ArticleCard from "@/components/news/ArticleCard";
import Pagination from "@/components/ui/Pagination";
import Reveal from "@/components/ui/Reveal";
import {
  fetchAllCategorySlugs,
  fetchArticlesByCategory,
  fetchCategoryBySlug,
  paginateArticles,
} from "@/lib/data";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateStaticParams() {
  const slugs = await fetchAllCategorySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = await fetchCategoryBySlug(slug);
  if (!category) return {};

  return generateSEO({
    title: category.name,
    description: category.description,
    path: `/category/${category.slug}`,
  });
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { slug } = await params;
  const { page: pageParam } = await searchParams;

  const category = await fetchCategoryBySlug(slug);
  if (!category) notFound();

  const all = await fetchArticlesByCategory(slug);
  const page = Math.max(1, Number.parseInt(pageParam || "1", 10) || 1);
  const { articles, totalPages, currentPage, total } = paginateArticles(all, page, 9);

  return (
    <>
      <div className="border-b border-line bg-surface">
        <div className="wrap py-8 lg:py-12">
          <span aria-hidden className="mb-3 block h-1 w-10 bg-azure" />
          <h1 className="text-3xl text-navy sm:text-4xl">{category.name}</h1>
          <p className="mt-2 max-w-2xl font-read text-base text-muted">{category.description}</p>
          <p className="mt-3 font-ui text-xs uppercase tracking-wider text-muted">
            {total} {total === 1 ? "story" : "stories"}
          </p>
        </div>
      </div>

      <div className="wrap py-8 lg:py-12">
        {articles.length === 0 ? (
          <p className="py-20 text-center font-read text-muted">
            No stories in this section yet.
          </p>
        ) : (
          <>
            <ul className="divide-y divide-line sm:hidden">
              {articles.map((article) => (
                <li key={article.id} className="py-4 first:pt-0">
                  <ArticleCard article={article} variant="row" />
                </li>
              ))}
            </ul>

            <div className="hidden gap-x-6 gap-y-9 sm:grid sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article, i) => (
                <Reveal key={article.id} delay={i * 40} className="h-full">
                  <ArticleCard article={article} priority={i < 3} />
                </Reveal>
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              basePath={`/category/${slug}`}
            />
          </>
        )}
      </div>
    </>
  );
}
