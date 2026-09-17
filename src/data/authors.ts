import type { Author } from "@/types";

/** Demo bylines. Replace with the real newsroom before launch. */
export const authors: Author[] = [
  { id: "author-1", name: "Saye Gbollie", role: "Editor-in-Chief", bio: "Leads the Nimba TV newsroom from Saclepea and has reported on county affairs since the station was founded." },
  { id: "author-2", name: "Musu Kollie", role: "Senior Reporter", bio: "Covers health, education and community development across Nimba's districts." },
  { id: "author-3", name: "Emmanuel Dolo", role: "Business Correspondent", bio: "Reports on markets, agriculture and cross-border trade in the south-east." },
  { id: "author-4", name: "Garmai Toe", role: "Culture Producer", bio: "Produces Nimba TV's cultural programming and profiles Liberian musicians, dancers and filmmakers." },
  { id: "author-5", name: "Anthony Suah", role: "Sports Desk", bio: "Follows county football and the athletes representing Nimba nationally." },
];

export const getAuthorById = (id: string) => authors.find((a) => a.id === id);
