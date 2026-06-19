export const siteConfig = {
  name: "Nimba TV",
  tagline: "Informing, Educating, and Inspiring Communities",
  description:
    "Nimba TV is a leading Liberian media and broadcasting institution providing reliable, balanced, and impactful news coverage since 2018.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://nimbatv.com",
  established: 2018,
  location: "Liberia",
  mission:
    "To provide reliable, balanced, and impactful media content that informs, educates, and empowers communities.",
  vision:
    "To be a leading and trusted media institution that promotes knowledge, development, and positive social change through quality broadcasting.",
  contact: {
    address: "123 Broad Street, Monrovia, Liberia",
    phone: "+231 77 000 0000",
    email: "info@nimbatv.com",
  },
  social: {
    facebook: "https://facebook.com/nimbatv",
    twitter: "https://twitter.com/nimbatv",
    youtube: "https://youtube.com/nimbatv",
    instagram: "https://instagram.com/nimbatv",
    linkedin: "https://linkedin.com/company/nimbatv",
  },
  categories: [
    { name: "Politics", slug: "politics", icon: "landmark" },
    { name: "Business", slug: "business", icon: "briefcase" },
    { name: "Education", slug: "education", icon: "graduation-cap" },
    { name: "Health", slug: "health", icon: "heart-pulse" },
    { name: "Sports", slug: "sports", icon: "trophy" },
    { name: "Entertainment", slug: "entertainment", icon: "film" },
    { name: "Technology", slug: "technology", icon: "cpu" },
    { name: "Community News", slug: "community-news", icon: "users" },
  ],
} as const;
