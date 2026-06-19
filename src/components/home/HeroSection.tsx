"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import type { NewsArticle } from "@/types";
import ArticleCard from "@/components/news/ArticleCard";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

interface HeroSectionProps {
  articles: NewsArticle[];
}

export default function HeroSection({ articles }: HeroSectionProps) {
  const [current, setCurrent] = useState(0);
  const featured = articles.slice(0, 4);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % featured.length);
  }, [featured.length]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + featured.length) % featured.length);
  }, [featured.length]);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [next]);

  if (featured.length === 0) return null;

  return (
    <section className="container mx-auto px-4 py-6">
      <FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 relative group">
            <ArticleCard article={featured[current]} variant="featured" />
            {featured.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                  aria-label="Previous headline"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                  aria-label="Next headline"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 right-4 flex gap-1.5">
                  {featured.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        i === current ? "bg-brand-gold" : "bg-white/50"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="flex flex-col justify-between gap-4">
            <div>
              <h2 className="font-heading font-bold text-lg text-brand-blue mb-3 border-b-2 border-brand-red pb-2 inline-block">
                Top Headlines
              </h2>
              <div className="space-y-1">
                {featured.slice(0, 4).map((article) => (
                  <ArticleCard key={article.id} article={article} variant="compact" />
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/news" className="flex-1">
                <Button variant="secondary" className="w-full">
                  Read Latest News
                </Button>
              </Link>
              <Link href="/videos" className="flex-1">
                <Button variant="primary" className="w-full flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Watch Nimba TV
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
