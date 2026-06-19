/**
 * Sanity Schema: News Article
 *
 * To deploy: add to sanity/schemas/article.ts in your Sanity Studio project
 */
export const articleSchema = {
  name: "article",
  title: "News Article",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (Rule: { required: () => unknown }) => Rule.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (Rule: { required: () => unknown }) => Rule.required() },
    { name: "excerpt", title: "Excerpt", type: "text", rows: 3 },
    { name: "content", title: "Content", type: "array", of: [{ type: "block" }, { type: "image" }] },
    { name: "featuredImage", title: "Featured Image", type: "image", options: { hotspot: true } },
    { name: "author", title: "Author", type: "reference", to: [{ type: "author" }] },
    { name: "category", title: "Category", type: "reference", to: [{ type: "category" }] },
    { name: "tags", title: "Tags", type: "array", of: [{ type: "string" }] },
    { name: "publishDate", title: "Publish Date", type: "datetime" },
    { name: "seoTitle", title: "SEO Title", type: "string" },
    { name: "seoDescription", title: "SEO Description", type: "text", rows: 2 },
    { name: "featured", title: "Featured Status", type: "boolean", initialValue: false },
  ],
  preview: {
    select: { title: "title", media: "featuredImage", subtitle: "category.name" },
  },
};
