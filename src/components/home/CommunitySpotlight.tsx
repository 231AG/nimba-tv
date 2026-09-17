import type { NewsArticle } from "@/types";
import ArticleCard from "@/components/news/ArticleCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function CommunitySpotlight({ articles }: { articles: NewsArticle[] }) {
  if (articles.length === 0) return null;

  return (
    <section className="wrap py-12 lg:py-16" aria-labelledby="community-heading">
      <SectionHeading
        title="From the districts"
        description="Stories from the towns and villages of Nimba County"
        href="/category/community"
        tone="red"
        className="mb-6"
      />
      <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, i) => (
          <Reveal key={article.id} delay={i * 45} className="h-full">
            <ArticleCard article={article} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
