import Link from "next/link";
import { Clock, Play } from "lucide-react";
import type { NewsArticle } from "@/types";
import Figure from "@/components/ui/Figure";
import Badge from "@/components/ui/Badge";
import { formatSmartDate } from "@/lib/utils";

/**
 * The homepage opens on one story, not a carousel of equals — a front page
 * makes an editorial claim about what matters most today.
 */
export default function LeadStory({
  lead,
  secondary,
}: {
  lead: NewsArticle;
  secondary: NewsArticle[];
}) {
  return (
    <section className="wrap pt-6 lg:pt-10" aria-labelledby="lead-heading">
      <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
        <article className="group lg:col-span-2">
          <Link href={`/news/${lead.slug}`} className="block">
            <div className="relative">
              {/* Portrait crop on phones, cinematic on larger screens. */}
              <div className="sm:hidden">
                <Figure
                  src={lead.featuredImage}
                  alt={lead.featuredImageAlt}
                  ratio="tall"
                  sizes="100vw"
                  priority
                  overlay
                />
              </div>
              <div className="hidden sm:block">
                <Figure
                  src={lead.featuredImage}
                  alt={lead.featuredImageAlt}
                  ratio="photo"
                  sizes="(max-width: 1023px) 100vw, 66vw"
                  priority
                  overlay
                  zoom
                />
              </div>

              {lead.youtubeId && (
                <span
                  aria-hidden
                  className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-flag-red text-white shadow-xl transition-transform group-hover:scale-110 sm:h-16 sm:w-16"
                >
                  <Play className="h-6 w-6 translate-x-[6%] fill-current" />
                </span>
              )}

              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 lg:p-8">
                <div className="flex items-center gap-2">
                  {lead.breaking && <Badge variant="breaking">Breaking</Badge>}
                  <Badge variant="video" className="bg-white/90">{lead.category.name}</Badge>
                </div>
                <h2
                  id="lead-heading"
                  className="mt-3 max-w-3xl font-display text-2xl font-semibold leading-[1.15] text-white sm:text-3xl lg:text-[2.6rem]"
                >
                  {lead.title}
                </h2>
                <p className="mt-2.5 hidden max-w-2xl font-read text-base leading-relaxed text-white/80 sm:block">
                  {lead.excerpt}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-ui text-xs text-white/70">
                  <span>{lead.author.name}</span>
                  <span aria-hidden className="h-1 w-1 rounded-full bg-white/40" />
                  <time dateTime={lead.publishDate}>{formatSmartDate(lead.publishDate)}</time>
                  {!lead.youtubeId && (
                    <>
                      <span aria-hidden className="h-1 w-1 rounded-full bg-white/40" />
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {lead.readingTime} min read
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </Link>
        </article>

        <div>
          <h2 className="eyebrow border-b-2 border-flag-red pb-2 text-navy">Top headlines</h2>
          <ol className="mt-1 divide-y divide-line">
            {secondary.map((article, i) => (
              <li key={article.id} className="flex gap-3 py-4">
                <span className="font-ui text-xs font-bold leading-none text-muted/70 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <Link href={`/news/${article.slug}`} className="group">
                    <span className="eyebrow text-azure-deep">{article.category.name}</span>
                    <h3 className="mt-1 font-display text-base font-semibold leading-snug text-navy transition-colors group-hover:text-flag-red">
                      {article.title}
                    </h3>
                    <time
                      dateTime={article.publishDate}
                      className="mt-1.5 block font-ui text-xs text-muted"
                    >
                      {formatSmartDate(article.publishDate)}
                    </time>
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
