import type { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "cat-politics",
    name: "Politics",
    slug: "politics",
    description: "Political news, governance, and policy coverage from Liberia and beyond.",
    icon: "landmark",
  },
  {
    id: "cat-business",
    name: "Business",
    slug: "business",
    description: "Business news, economic trends, and financial market updates.",
    icon: "briefcase",
  },
  {
    id: "cat-education",
    name: "Education",
    slug: "education",
    description: "Education policy, school reforms, and academic achievements.",
    icon: "graduation-cap",
  },
  {
    id: "cat-health",
    name: "Health",
    slug: "health",
    description: "Public health news, medical breakthroughs, and wellness coverage.",
    icon: "heart-pulse",
  },
  {
    id: "cat-sports",
    name: "Sports",
    slug: "sports",
    description: "Sports news, match results, and athlete profiles.",
    icon: "trophy",
  },
  {
    id: "cat-entertainment",
    name: "Entertainment",
    slug: "entertainment",
    description: "Entertainment news, culture, music, and arts coverage.",
    icon: "film",
  },
  {
    id: "cat-technology",
    name: "Technology",
    slug: "technology",
    description: "Technology trends, digital innovation, and tech policy.",
    icon: "cpu",
  },
  {
    id: "cat-community",
    name: "Community News",
    slug: "community-news",
    description: "Local community stories, grassroots initiatives, and civic engagement.",
    icon: "users",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
