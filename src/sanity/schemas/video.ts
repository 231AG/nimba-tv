export const videoSchema = {
  name: "video",
  title: "Video",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (Rule: { required: () => unknown }) => Rule.required() },
    { name: "thumbnail", title: "Thumbnail", type: "image" },
    { name: "youtubeUrl", title: "YouTube URL", type: "url" },
    { name: "description", title: "Description", type: "text", rows: 3 },
    { name: "publishDate", title: "Publish Date", type: "datetime" },
    {
      name: "type",
      title: "Video Type",
      type: "string",
      options: {
        list: [
          { title: "Broadcast", value: "broadcast" },
          { title: "Interview", value: "interview" },
          { title: "Special Report", value: "special-report" },
        ],
      },
    },
  ],
};
