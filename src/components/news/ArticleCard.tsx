import type { NewsArticle } from "@/types";
import Link from "next/link";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import { Clock, User } from "lucide-react";

interface ArticleCardProps {
  article: NewsArticle;
  variant?: "default" | "horizontal" | "compact" | "featured";
}

export default function ArticleCard({
  article,
  variant = "default",
}: ArticleCardProps) {
  if (variant === "horizontal") {
    return (
      <Link
        href={`/news/${article.slug}`}
        className="group flex gap-4 p-4 bg-white rounded-lg border border-neutral-200 hover:shadow-md transition-shadow"
      >
        <div className="relative w-32 h-24 shrink-0 rounded-md overflow-hidden">
          <Image
            src={article.featuredImage}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="128px"
          />
        </div>
        <div className="flex flex-col justify-center min-w-0">
          <Badge variant="category" className="w-fit mb-1">
            {article.category.name}
          </Badge>
          <h3 className="font-heading font-semibold text-brand-blue group-hover:text-brand-red transition-colors line-clamp-2">
            {article.title}
          </h3>
          <p className="text-xs text-neutral-500 mt-1">{formatDate(article.publishDate)}</p>
        </div>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link
        href={`/news/${article.slug}`}
        className="group block py-3 border-b border-neutral-200 last:border-0"
      >
        <h3 className="font-medium text-brand-blue group-hover:text-brand-red transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-xs text-neutral-500 mt-1">{formatDate(article.publishDate)}</p>
      </Link>
    );
  }

  if (variant === "featured") {
    return (
      <Link
        href={`/news/${article.slug}`}
        className="group relative block rounded-xl overflow-hidden aspect-[16/10] bg-brand-blue"
      >
        <Image
          src={article.featuredImage}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 66vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <Badge variant="breaking" className="mb-3">Breaking</Badge>
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-white group-hover:text-brand-gold transition-colors">
            {article.title}
          </h3>
          <p className="text-neutral-200 mt-2 line-clamp-2">{article.excerpt}</p>
          <div className="flex items-center gap-4 mt-3 text-sm text-neutral-300">
            <span className="flex items-center gap-1">
              <User className="w-3.5 h-3.5" />
              {article.author.name}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readingTime} min read
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/news/${article.slug}`}
      className="group flex flex-col bg-white rounded-lg border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={article.featuredImage}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="category">{article.category.name}</Badge>
        </div>
      </div>
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-heading font-semibold text-lg text-brand-blue group-hover:text-brand-red transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-neutral-600 text-sm mt-2 line-clamp-2 flex-1">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-neutral-100">
          <span className="text-xs text-neutral-500 flex items-center gap-1">
            <User className="w-3.5 h-3.5" />
            {article.author.name}
          </span>
          <span className="text-xs text-neutral-500">{formatDate(article.publishDate)}</span>
        </div>
      </div>
    </Link>
  );
}
