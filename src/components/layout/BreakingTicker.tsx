import Link from "next/link";
import type { NewsArticle } from "@/types";

/**
 * Only renders when something is actually marked breaking — a ticker that is
 * always on stops meaning anything.
 */
export default function BreakingTicker({ articles }: { articles: NewsArticle[] }) {
  if (articles.length === 0) return null;

  const run = [...articles, ...articles];

  return (
    <div className="bg-flag-red text-white">
      <div className="wrap flex h-11 items-center gap-3">
        <span className="eyebrow shrink-0 bg-white px-2 py-1 text-flag-red">Breaking</span>
        <div className="relative flex-1 overflow-hidden">
          <div className="animate-ticker flex w-max whitespace-nowrap">
            {run.map((article, i) => (
              <Link
                key={`${article.id}-${i}`}
                href={`/news/${article.slug}`}
                className="px-6 font-ui text-sm hover:underline"
              >
                {article.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
