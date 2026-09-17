export interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  socialLinks?: {
    facebook?: string;
    whatsapp?: string;
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  /** Story body as HTML. Demo content only — see src/data/articles.ts. */
  content: string;
  featuredImage: string;
  /** Alt text is authored per story rather than derived from the headline. */
  featuredImageAlt: string;
  author: Author;
  category: Category;
  tags: string[];
  publishDate: string;
  featured: boolean;
  breaking?: boolean;
  readingTime: number;
  /**
   * Set when the story *is* a YouTube video rather than a written piece.
   * Only the id is stored, so editors can paste any YouTube link and the
   * player, thumbnail and card treatment all follow from it.
   */
  youtubeId?: string;
}

export interface Programme {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  /** Broadcast slot, e.g. "Weeknights · 7:00 PM". */
  schedule: string;
  type: "news" | "talk" | "education" | "entertainment" | "culture";
  youtubeId?: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}
