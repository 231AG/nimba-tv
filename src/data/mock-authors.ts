import type { Author } from "@/types";

export const authors: Author[] = [
  {
    id: "author-1",
    name: "Samuel K. Doe",
    position: "Chief Editor",
    bio: "Samuel has over 15 years of experience in Liberian journalism, covering politics and governance.",
    profilePhoto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    socialLinks: { twitter: "https://twitter.com/skdoe", linkedin: "https://linkedin.com/in/skdoe" },
  },
  {
    id: "author-2",
    name: "Grace Nimley",
    position: "Senior Reporter",
    bio: "Grace specializes in community stories and social development reporting across Liberia.",
    profilePhoto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    socialLinks: { twitter: "https://twitter.com/gnimley" },
  },
  {
    id: "author-3",
    name: "Emmanuel Tarpeh",
    position: "Business Correspondent",
    bio: "Emmanuel covers economic policy, business trends, and financial markets in West Africa.",
    profilePhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    socialLinks: { linkedin: "https://linkedin.com/in/etarpeh" },
  },
  {
    id: "author-4",
    name: "Fatima Kamara",
    position: "Health & Education Reporter",
    bio: "Fatima reports on public health initiatives and educational reforms in Liberia.",
    profilePhoto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
  },
  {
    id: "author-5",
    name: "James Flomo",
    position: "Sports Editor",
    bio: "James brings comprehensive coverage of Liberian and African sports to Nimba TV audiences.",
    profilePhoto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
  },
];

export function getAuthorById(id: string): Author | undefined {
  return authors.find((a) => a.id === id);
}
