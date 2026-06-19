export interface Author {
  id: string;
  name: string;
  position: string;
  bio: string;
  profilePhoto: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    facebook?: string;
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: Author;
  category: Category;
  tags: string[];
  publishDate: string;
  seoTitle?: string;
  seoDescription?: string;
  featured: boolean;
  readingTime: number;
}

export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  youtubeUrl: string;
  description: string;
  publishDate: string;
  type: "broadcast" | "interview" | "special-report";
}

export interface HomepageSettings {
  heroArticles: string[];
  breakingNews: string[];
  featuredVideos: string[];
  communitySpotlight: string[];
}

export interface ContactFormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export interface NewsletterFormData {
  name: string;
  email: string;
}
