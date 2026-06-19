import { notFound } from "next/navigation";
import { generateSEO } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import ArticleCard from "@/components/news/ArticleCard";
import FadeIn from "@/components/ui/FadeIn";
import Pagination from "@/components/ui/Pagination";
import {
  fetchCategoryBySlug,
  fetchArticlesByCategory,
  fetchAllCategorySlugs,
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
    url: `${siteConfig.url}/category/${category.slug}`,
  });
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { slug } = await params;
  const { page: pageParam } = await searchParams;
  const category = await fetchCategoryBySlug(slug);

  if (!category) notFound();

  const allArticles = await fetchArticlesByCategory(slug);
  const page = Math.max(1, parseInt(pageParam || "1", 10));
  const { articles, totalPages, currentPage } = paginateArticles(allArticles, page, 9);

  return (
    <>
      <section className="bg-brand-blue text-white py-12">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h1 className="text-3xl md:text-4xl font-heading font-bold">{category.name}</h1>
            <p className="text-neutral-300 mt-2 max-w-2xl">{category.description}</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          {articles.length === 0 ? (
            <p className="text-center text-neutral-600 py-16">
              No articles in this category yet.
            </p>
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
                basePath={`/category/${slug}`}
              />
            </>
          )}
        </div>
      </section>
    </>
  );
}
