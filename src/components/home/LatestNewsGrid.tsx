import Link from "next/link";
import type { NewsArticle } from "@/types";
import ArticleCard from "@/components/news/ArticleCard";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

interface LatestNewsGridProps {
  articles: NewsArticle[];
}

export default function LatestNewsGrid({ articles }: LatestNewsGridProps) {
  return (
    <section className="bg-brand-gray py-12">
      <div className="container mx-auto px-4">
        <FadeIn>
          <SectionHeading title="Latest News" subtitle="Stay informed with our most recent coverage" />
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <FadeIn key={article.id} delay={i * 0.1}>
              <ArticleCard article={article} />
            </FadeIn>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/news">
            <Button variant="outline" size="lg">
              View All News
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
