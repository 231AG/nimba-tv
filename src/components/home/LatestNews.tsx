import type { NewsArticle } from "@/types";
import ArticleCard from "@/components/news/ArticleCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

/**
 * Phones get a divided list — the density a reader scrolling on data actually
 * wants. Wider screens get the grid, where images can carry their weight.
 */
export default function LatestNews({ articles }: { articles: NewsArticle[] }) {
  return (
    <section className="wrap py-12 lg:py-16" aria-labelledby="latest-heading">
      <SectionHeading
        title="Latest news"
        description="Reporting from across Nimba County"
        href="/news"
        className="mb-6"
      />

      <ul className="divide-y divide-line sm:hidden">
        {articles.map((article) => (
          <li key={article.id} className="py-4 first:pt-0">
            <ArticleCard article={article} variant="row" />
          </li>
        ))}
      </ul>

      <div className="hidden gap-x-6 gap-y-9 sm:grid sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, i) => (
          <Reveal key={article.id} delay={i * 45} className="h-full">
            <ArticleCard article={article} priority={i < 3} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
