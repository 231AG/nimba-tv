import Link from "next/link";
import { Play, Clock } from "lucide-react";
import type { NewsArticle } from "@/types";
import Figure from "@/components/ui/Figure";
import Badge from "@/components/ui/Badge";
import { cn, formatSmartDate } from "@/lib/utils";

type Variant = "stack" | "row" | "compact";

interface ArticleCardProps {
  article: NewsArticle;
  variant?: Variant;
  priority?: boolean;
  className?: string;
}

/**
 * One card object, three densities. Keeping them in a single component is what
 * holds the edges, baselines and meta row identical wherever stories appear.
 */
export default function ArticleCard({
  article,
  variant = "stack",
  priority = false,
  className,
}: ArticleCardProps) {
  const href = `/news/${article.slug}`;
  const isVideo = Boolean(article.youtubeId);

  const meta = (
    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-ui text-xs text-muted">
      <span>{article.author.name}</span>
      <span aria-hidden className="h-1 w-1 rounded-full bg-line" />
      <time dateTime={article.publishDate}>{formatSmartDate(article.publishDate)}</time>
      {!isVideo && (
        <>
          <span aria-hidden className="h-1 w-1 rounded-full bg-line" />
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {article.readingTime} min
          </span>
        </>
      )}
    </div>
  );

  if (variant === "row") {
    return (
      <article className={cn("group", className)}>
        <Link href={href} className="flex gap-3.5">
          <div className="relative w-28 shrink-0 sm:w-36">
            <Figure
              src={article.featuredImage}
              alt={article.featuredImageAlt}
              ratio="photo"
              sizes="144px"
              zoom
            />
            {isVideo && <PlayDot className="left-1.5 top-1.5 h-6 w-6" />}
          </div>
          <div className="min-w-0 flex-1">
            <span className="eyebrow text-azure-deep">{article.category.name}</span>
            <h3 className="mt-1 font-display text-base font-semibold leading-snug text-navy transition-colors group-hover:text-flag-red sm:text-lg">
              {article.title}
            </h3>
            {meta}
          </div>
        </Link>
      </article>
    );
  }

  if (variant === "compact") {
    return (
      <article className={cn("group", className)}>
        <Link href={href}>
          <span className="eyebrow text-azure-deep">{article.category.name}</span>
          <h3 className="mt-1.5 font-display text-lg font-semibold leading-snug text-navy transition-colors group-hover:text-flag-red">
            {article.title}
          </h3>
          {meta}
        </Link>
      </article>
    );
  }

  return (
    <article className={cn("group flex h-full flex-col", className)}>
      <Link href={href} className="flex h-full flex-col">
        <div className="relative">
          <Figure
            src={article.featuredImage}
            alt={article.featuredImageAlt}
            ratio="photo"
            priority={priority}
            zoom
          />
          <div className="absolute left-0 top-0 flex items-center gap-1.5 p-2.5">
            {article.breaking ? (
              <Badge variant="breaking">Breaking</Badge>
            ) : (
              <Badge variant="section">{article.category.name}</Badge>
            )}
          </div>
          {isVideo && <PlayDot className="bottom-2.5 right-2.5 h-9 w-9" />}
        </div>

        <div className="flex flex-1 flex-col pt-3.5">
          <h3 className="font-display text-lg font-semibold leading-snug text-navy transition-colors group-hover:text-flag-red sm:text-xl">
            {article.title}
          </h3>
          <p className="mt-2 line-clamp-2 font-read text-[0.95rem] leading-relaxed text-muted">
            {article.excerpt}
          </p>
          <div className="mt-auto">{meta}</div>
        </div>
      </Link>
    </article>
  );
}

function PlayDot({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "absolute z-10 flex items-center justify-center rounded-full bg-flag-red text-white shadow-lg",
        className
      )}
    >
      <Play className="h-1/2 w-1/2 translate-x-[5%] fill-current" />
    </span>
  );
}
