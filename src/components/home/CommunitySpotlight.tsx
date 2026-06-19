import type { NewsArticle } from "@/types";
import ArticleCard from "@/components/news/ArticleCard";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";

interface CommunitySpotlightProps {
  articles: NewsArticle[];
}

export default function CommunitySpotlight({ articles }: CommunitySpotlightProps) {
  if (articles.length === 0) return null;

  const [featured, ...supporting] = articles;

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <FadeIn>
          <SectionHeading
            title="Community Spotlight"
            subtitle="Stories that matter to our communities"
          />
        </FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FadeIn>
            <ArticleCard article={featured} variant="featured" />
          </FadeIn>
          <div className="flex flex-col gap-3">
            {supporting.map((article, i) => (
              <FadeIn key={article.id} delay={i * 0.1}>
                <ArticleCard article={article} variant="horizontal" />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
