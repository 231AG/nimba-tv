import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Pagination({
  currentPage,
  totalPages,
  basePath,
  searchParams = {},
}: {
  currentPage: number;
  totalPages: number;
  basePath: string;
  searchParams?: Record<string, string>;
}) {
  if (totalPages <= 1) return null;

  const urlFor = (page: number) => {
    const params = new URLSearchParams(searchParams);
    if (page > 1) params.set("page", String(page));
    else params.delete("page");
    const qs = params.toString();
    return `${basePath}${qs ? `?${qs}` : ""}`;
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1).filter(
    (p) => p === 1 || p === totalPages || Math.abs(p - currentPage) <= 1
  );

  const cell = "flex h-10 min-w-10 items-center justify-center px-3 font-ui text-sm font-semibold";

  return (
    <nav aria-label="Pagination" className="mt-10 flex items-center justify-center gap-1.5">
      {currentPage > 1 && (
        <Link href={urlFor(currentPage - 1)} className={cn(cell, "border border-line text-navy hover:border-navy")} aria-label="Previous page">
          <ChevronLeft className="h-4 w-4" />
        </Link>
      )}

      {pages.map((page, i) => {
        const gap = i > 0 && page - pages[i - 1] > 1;
        return (
          <span key={page} className="flex items-center gap-1.5">
            {gap && <span className="px-1 text-muted">…</span>}
            <Link
              href={urlFor(page)}
              aria-current={page === currentPage ? "page" : undefined}
              className={cn(
                cell,
                page === currentPage
                  ? "bg-navy text-white"
                  : "border border-line text-navy hover:border-navy"
              )}
            >
              {page}
            </Link>
          </span>
        );
      })}

      {currentPage < totalPages && (
        <Link href={urlFor(currentPage + 1)} className={cn(cell, "border border-line text-navy hover:border-navy")} aria-label="Next page">
          <ChevronRight className="h-4 w-4" />
        </Link>
      )}
    </nav>
  );
}
