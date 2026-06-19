export const categorySchema = {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string", validation: (Rule: { required: () => unknown }) => Rule.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "name" } },
    { name: "description", title: "Description", type: "text", rows: 3 },
    { name: "icon", title: "Icon", type: "string", description: "Lucide icon name" },
  ],
};
