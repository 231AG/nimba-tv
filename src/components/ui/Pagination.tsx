import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
  searchParams?: Record<string, string>;
}

export default function Pagination({
  currentPage,
  totalPages,
  basePath,
  searchParams = {},
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const buildUrl = (page: number) => {
    const params = new URLSearchParams({ ...searchParams, page: String(page) });
    return `${basePath}?${params.toString()}`;
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1).filter(
    (p) =>
      p === 1 ||
      p === totalPages ||
      Math.abs(p - currentPage) <= 1
  );

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-1 mt-10">
      {currentPage > 1 && (
        <Link
          href={buildUrl(currentPage - 1)}
          className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-brand-blue hover:bg-brand-gray rounded-md transition-colors"
          aria-label="Previous page"
        >
          <ChevronLeft className="w-4 h-4" />
          Prev
        </Link>
      )}

      {pages.map((page, i) => {
        const prev = pages[i - 1];
        const showEllipsis = prev && page - prev > 1;

        return (
          <span key={page} className="flex items-center">
            {showEllipsis && (
              <span className="px-2 text-neutral-400">...</span>
            )}
            <Link
              href={buildUrl(page)}
              className={cn(
                "px-3.5 py-2 text-sm font-medium rounded-md transition-colors",
                page === currentPage
                  ? "bg-brand-blue text-white"
                  : "text-brand-blue hover:bg-brand-gray"
              )}
              aria-current={page === currentPage ? "page" : undefined}
            >
              {page}
            </Link>
          </span>
        );
      })}

      {currentPage < totalPages && (
        <Link
          href={buildUrl(currentPage + 1)}
          className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-brand-blue hover:bg-brand-gray rounded-md transition-colors"
          aria-label="Next page"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </Link>
      )}
    </nav>
  );
}
