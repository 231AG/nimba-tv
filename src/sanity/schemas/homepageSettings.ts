export const homepageSettingsSchema = {
  name: "homepageSettings",
  title: "Homepage Settings",
  type: "document",
  fields: [
    { name: "heroArticles", title: "Hero Articles", type: "array", of: [{ type: "reference", to: [{ type: "article" }] }], validation: (Rule: { max: (n: number) => unknown }) => Rule.max(5) },
    { name: "breakingNews", title: "Breaking News", type: "array", of: [{ type: "reference", to: [{ type: "article" }] }] },
    { name: "featuredVideos", title: "Featured Videos", type: "array", of: [{ type: "reference", to: [{ type: "video" }] }] },
    { name: "communitySpotlight", title: "Community Spotlight", type: "array", of: [{ type: "reference", to: [{ type: "article" }] }] },
  ],
};
