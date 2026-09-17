import BreakingTicker from "@/components/layout/BreakingTicker";
import LeadStory from "@/components/home/LeadStory";
import LatestNews from "@/components/home/LatestNews";
import SectionRail from "@/components/home/SectionRail";
import WatchStrip from "@/components/home/WatchStrip";
import CommunitySpotlight from "@/components/home/CommunitySpotlight";
import FollowStrip from "@/components/home/FollowStrip";
import {
  fetchArticles,
  fetchBreakingArticles,
  fetchCategories,
  fetchCommunitySpotlight,
  fetchLeadStory,
  fetchProgrammes,
  fetchVideoArticles,
} from "@/lib/data";

export default async function HomePage() {
  const [articles, breaking, categories, community, lead, programmes, videos] = await Promise.all([
    fetchArticles(),
    fetchBreakingArticles(),
    fetchCategories(),
    fetchCommunitySpotlight(),
    fetchLeadStory(),
    fetchProgrammes(),
    fetchVideoArticles(),
  ]);

  if (!lead) return null;

  const secondary = articles.filter((a) => a.id !== lead.id).slice(0, 4);
  const latest = articles.filter((a) => a.id !== lead.id).slice(0, 6);
  const communityIds = new Set(community.map((a) => a.id));

  const counts = categories.reduce<Record<string, number>>((acc, c) => {
    acc[c.slug] = articles.filter((a) => a.category.slug === c.slug).length;
    return acc;
  }, {});

  return (
    <>
      <BreakingTicker articles={breaking} />
      <LeadStory lead={lead} secondary={secondary} />
      <LatestNews articles={latest} />
      <SectionRail categories={categories} counts={counts} />
      <WatchStrip featured={videos[0]} programmes={programmes} />
      <CommunitySpotlight articles={community.filter((a) => communityIds.has(a.id))} />
      <FollowStrip />
    </>
  );
}
