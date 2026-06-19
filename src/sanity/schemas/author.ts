export const authorSchema = {
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string", validation: (Rule: { required: () => unknown }) => Rule.required() },
    { name: "position", title: "Position", type: "string" },
    { name: "bio", title: "Bio", type: "text", rows: 4 },
    { name: "profilePhoto", title: "Profile Photo", type: "image" },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      fields: [
        { name: "twitter", title: "Twitter/X", type: "url" },
        { name: "linkedin", title: "LinkedIn", type: "url" },
        { name: "facebook", title: "Facebook", type: "url" },
      ],
    },
  ],
};
