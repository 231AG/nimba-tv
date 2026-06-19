import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { generateSEO } from "@/lib/seo";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/structured-data";
import { siteConfig } from "@/config/site";
import Badge from "@/components/ui/Badge";
import SocialShare from "@/components/news/SocialShare";
import ArticleCard from "@/components/news/ArticleCard";
import FadeIn from "@/components/ui/FadeIn";
import { fetchArticleBySlug, fetchRelatedArticles, fetchAllArticleSlugs } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { Clock, User, ArrowLeft } from "lucide-react";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await fetchAllArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await fetchArticleBySlug(slug);
  if (!article) return {};

  return generateSEO({
    title: article.seoTitle || article.title,
    description: article.seoDescription || article.excerpt,
    image: article.featuredImage,
    url: `${siteConfig.url}/news/${article.slug}`,
    type: "article",
    publishedTime: article.publishDate,
    authors: [article.author.name],
    tags: article.tags,
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await fetchArticleBySlug(slug);

  if (!article) notFound();

  const related = await fetchRelatedArticles(article, 4);
  const articleSchema = generateArticleSchema(article);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "News", url: `${siteConfig.url}/news` },
    { name: article.category.name, url: `${siteConfig.url}/category/${article.category.slug}` },
    { name: article.title, url: `${siteConfig.url}/news/${article.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article>
        <div className="container mx-auto px-4 py-6">
          <Link
            href="/news"
            className="inline-flex items-center gap-1 text-sm text-brand-blue hover:text-brand-red transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to News
          </Link>

          <FadeIn>
            <header className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <Link href={`/category/${article.category.slug}`}>
                  <Badge variant="category">{article.category.name}</Badge>
                </Link>
                <span className="text-sm text-neutral-500">{formatDate(article.publishDate)}</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-blue leading-tight">
                {article.title}
              </h1>

              <p className="text-lg text-neutral-600 mt-4 leading-relaxed">
                {article.excerpt}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pb-6 border-b border-neutral-200">
                <div className="flex items-center gap-3">
                  <Image
                    src={article.author.profilePhoto}
                    alt={article.author.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-medium text-brand-blue flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {article.author.name}
                    </p>
                    <p className="text-xs text-neutral-500">{article.author.position}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-neutral-500 flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {article.readingTime} min read
                  </span>
                  <SocialShare title={article.title} slug={article.slug} />
                </div>
              </div>
            </header>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="relative aspect-[16/9] max-w-4xl mx-auto my-8 rounded-xl overflow-hidden">
              <Image
                src={article.featuredImage}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 896px) 100vw, 896px"
                priority
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div
              className="prose-article max-w-3xl mx-auto text-lg"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </FadeIn>

          {article.tags.length > 0 && (
            <div className="max-w-3xl mx-auto mt-8 pt-6 border-t border-neutral-200">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-brand-gray text-sm text-neutral-600 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {related.length > 0 && (
          <section className="bg-brand-gray py-12 mt-8">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-heading font-bold text-brand-blue mb-6">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {related.map((rel) => (
                  <ArticleCard key={rel.id} article={rel} />
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
}
