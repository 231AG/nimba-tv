import type { Category } from "@/types";

export const categories: Category[] = [
  { id: "cat-politics", name: "Politics", slug: "politics", description: "County and national politics, governance and public policy as it affects Nimba." },
  { id: "cat-community", name: "Community", slug: "community", description: "Reporting from the districts, towns and villages of Nimba County." },
  { id: "cat-education", name: "Education", slug: "education", description: "Schools, teachers, students and the state of learning across the county." },
  { id: "cat-health", name: "Health", slug: "health", description: "Clinics, public health campaigns and the wellbeing of Nimba's communities." },
  { id: "cat-business", name: "Business", slug: "business", description: "Markets, trade, agriculture and the livelihoods that sustain the county." },
  { id: "cat-sports", name: "Sports", slug: "sports", description: "County football, athletics and the teams representing Nimba." },
  { id: "cat-culture", name: "Culture", slug: "culture", description: "Liberian music, dance, art and the heritage Nimba TV exists to promote." },
  { id: "cat-entertainment", name: "Entertainment", slug: "entertainment", description: "Local artists, filmmakers and the shows people are talking about." },
];

export const getCategoryBySlug = (slug: string) => categories.find((c) => c.slug === slug);
