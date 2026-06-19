"use client";

import Link from "next/link";
import type { NewsArticle } from "@/types";

interface BreakingNewsTickerProps {
  articles: NewsArticle[];
}

export default function BreakingNewsTicker({ articles }: BreakingNewsTickerProps) {
  const headlines = articles.map((a) => ({ title: a.title, slug: a.slug }));

  if (headlines.length === 0) return null;

  const duplicated = [...headlines, ...headlines];

  return (
    <div className="bg-brand-red text-white overflow-hidden" role="marquee" aria-label="Breaking news">
      <div className="container mx-auto px-4 flex items-center h-10">
        <span className="shrink-0 bg-white text-brand-red text-xs font-bold uppercase px-3 py-1 rounded mr-4 z-10">
          Breaking
        </span>
        <div className="overflow-hidden flex-1 relative">
          <div className="flex animate-ticker whitespace-nowrap">
            {duplicated.map((item, i) => (
              <Link
                key={`${item.slug}-${i}`}
                href={`/news/${item.slug}`}
                className="inline-block px-8 text-sm hover:underline"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
