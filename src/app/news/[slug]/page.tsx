import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Clock } from "lucide-react";
import { generateSEO } from "@/lib/seo";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/structured-data";
import { siteConfig } from "@/config/site";
import Figure from "@/components/ui/Figure";
import Badge from "@/components/ui/Badge";
import ArticleCard from "@/components/news/ArticleCard";
import ShareRow from "@/components/news/ShareRow";
import VideoEmbed from "@/components/news/VideoEmbed";
import ReadingProgress from "@/components/news/ReadingProgress";
import { fetchAllArticleSlugs, fetchArticleBySlug, fetchRelatedArticles } from "@/lib/data";
import { formatDate, initials } from "@/lib/utils";

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
    title: article.title,
    description: article.excerpt,
    image: article.featuredImage,
    path: `/news/${article.slug}`,
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

  const related = await fetchRelatedArticles(article, 3);
  const isVideo = Boolean(article.youtubeId);

  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "News", url: `${siteConfig.url}/news` },
    { name: article.category.name, url: `${siteConfig.url}/category/${article.category.slug}` },
    { name: article.title, url: `${siteConfig.url}/news/${article.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateArticleSchema(article)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <ReadingProgress />

      <article>
        {/* Masthead block — sits on tinted ground so the story proper reads as
            a distinct surface once the reader scrolls past it. */}
        <header className="border-b border-line bg-surface">
          <div className="wrap py-6 lg:py-10">
            <nav aria-label="Breadcrumb" className="mx-auto mb-5 max-w-4xl">
              <ol className="flex flex-wrap items-center gap-1 font-ui text-xs text-muted">
                <li>
                  <Link href="/" className="hover:text-navy">Home</Link>
                </li>
                <ChevronRight aria-hidden className="h-3 w-3" />
                <li>
                  <Link href="/news" className="hover:text-navy">News</Link>
                </li>
                <ChevronRight aria-hidden className="h-3 w-3" />
                <li>
                  <Link href={`/category/${article.category.slug}`} className="hover:text-navy">
                    {article.category.name}
                  </Link>
                </li>
              </ol>
            </nav>

            <div className="mx-auto max-w-4xl">
              <div className="flex flex-wrap items-center gap-2">
                {article.breaking && <Badge variant="breaking">Breaking</Badge>}
                <Badge variant="section" href={`/category/${article.category.slug}`}>
                  {article.category.name}
                </Badge>
                {isVideo && <Badge variant="quiet">Video</Badge>}
              </div>

              <h1 className="mt-4 font-display text-[1.75rem] font-semibold leading-[1.15] text-navy sm:text-4xl lg:text-[2.85rem]">
                {article.title}
              </h1>

              <p className="mt-4 font-read text-lg leading-relaxed text-muted sm:text-xl">
                {article.excerpt}
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy font-ui text-sm font-bold text-white"
                  >
                    {initials(article.author.name)}
                  </span>
                  <div>
                    <p className="font-ui text-sm font-semibold text-navy">{article.author.name}</p>
                    <p className="font-ui text-xs text-muted">
                      {article.author.role} · <time dateTime={article.publishDate}>{formatDate(article.publishDate)}</time>
                    </p>
                  </div>
                </div>

                {!isVideo && (
                  <span className="inline-flex items-center gap-1.5 font-ui text-xs text-muted">
                    <Clock className="h-3.5 w-3.5" />
                    {article.readingTime} min read
                  </span>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Lead media: the player for video stories, the photograph otherwise. */}
        <div className="wrap -mt-px">
          <div className="mx-auto max-w-4xl pt-6 lg:pt-8">
            {isVideo ? (
              <VideoEmbed
                idOrUrl={article.youtubeId!}
                poster={article.featuredImage}
                title={article.title}
              />
            ) : (
              <Figure
                src={article.featuredImage}
                alt={article.featuredImageAlt}
                ratio="wide"
                sizes="(max-width: 1023px) 100vw, 896px"
                priority
              />
            )}
            <p className="mt-2.5 font-ui text-xs leading-relaxed text-muted">
              {article.featuredImageAlt}
            </p>
          </div>
        </div>

        {/* Body. The share rail is sticky alongside the column on large screens
            and sits inline above the text on phones. */}
        <div className="wrap py-8 lg:py-12">
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute -left-16 top-0 hidden h-full lg:block">
              <div className="sticky top-40">
                <ShareRow title={article.title} slug={article.slug} orientation="vertical" />
              </div>
            </div>

            <div className="min-w-0">
              <ShareRow
                title={article.title}
                slug={article.slug}
                className="mb-7 border-y border-line py-3 lg:hidden"
              />

              <div
                className="story max-w-[68ch]"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {article.tags.length > 0 && (
                <div className="mt-10 border-t border-line pt-6">
                  <h2 className="eyebrow mb-3 text-muted">Filed under</h2>
                  <ul className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <li key={tag}>
                        <span className="inline-block bg-surface px-3 py-1.5 font-ui text-xs font-medium text-navy">
                          {tag}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <aside className="mt-10 border-l-2 border-flag-red bg-surface p-5">
                <div className="flex items-start gap-4">
                  <span
                    aria-hidden
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy font-ui text-base font-bold text-white"
                  >
                    {initials(article.author.name)}
                  </span>
                  <div>
                    <p className="font-display text-lg font-semibold text-navy">
                      {article.author.name}
                    </p>
                    <p className="eyebrow mt-0.5 text-azure-deep">{article.author.role}</p>
                    <p className="mt-2 font-read text-[0.95rem] leading-relaxed text-muted">
                      {article.author.bio}
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-line bg-surface py-12 lg:py-16" aria-labelledby="related-heading">
          <div className="wrap">
            <h2 id="related-heading" className="mb-6 text-2xl text-navy">
              <span aria-hidden className="mb-3 block h-1 w-10 bg-azure" />
              More from {article.category.name}
            </h2>
            <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ArticleCard key={item.id} article={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
