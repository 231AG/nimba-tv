import BreakingNewsTicker from "@/components/layout/BreakingNewsTicker";
import HeroSection from "@/components/home/HeroSection";
import LatestNewsGrid from "@/components/home/LatestNewsGrid";
import CategoriesPreview from "@/components/home/CategoriesPreview";
import FeaturedVideo from "@/components/home/FeaturedVideo";
import CommunitySpotlight from "@/components/home/CommunitySpotlight";
import NewsletterSection from "@/components/home/NewsletterSection";
import {
  fetchFeaturedArticles,
  fetchArticles,
  fetchBreakingNews,
  fetchCategories,
  fetchVideos,
  fetchCommunitySpotlight,
} from "@/lib/data";

export default async function HomePage() {
  const [featured, articles, breaking, categories, videos, community] =
    await Promise.all([
      fetchFeaturedArticles(),
      fetchArticles(),
      fetchBreakingNews(),
      fetchCategories(),
      fetchVideos(),
      fetchCommunitySpotlight(),
    ]);

  return (
    <>
      <BreakingNewsTicker articles={breaking} />
      <HeroSection articles={featured} />
      <LatestNewsGrid articles={articles.slice(0, 6)} />
      <CategoriesPreview categories={categories} />
      <FeaturedVideo videos={videos} />
      <CommunitySpotlight articles={community} />
      <NewsletterSection />
    </>
  );
}
