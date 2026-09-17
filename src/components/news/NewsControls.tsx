"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import type { Author, Category } from "@/types";
import { cn } from "@/lib/utils";

export interface NewsQuery {
  q?: string;
  category?: string;
  author?: string;
  dateFrom?: string;
  dateTo?: string;
}

/**
 * Search and filters write to the URL rather than local state, so every result
 * set is linkable, shareable and server-rendered.
 */
export default function NewsControls({
  categories,
  authors,
  query,
  resultCount,
}: {
  categories: Category[];
  authors: Author[];
  query: NewsQuery;
  resultCount: number;
}) {
  const router = useRouter();
  const [term, setTerm] = useState(query.q ?? "");
  const [open, setOpen] = useState(false);

  const push = (next: NewsQuery) => {
    const params = new URLSearchParams();
    Object.entries(next).forEach(([key, value]) => {
      if (value) params.set(key, value);
    });
    const qs = params.toString();
    router.push(`/news${qs ? `?${qs}` : ""}`);
  };

  const activeCount = [query.category, query.author, query.dateFrom, query.dateTo].filter(Boolean).length;

  const field =
    "w-full border border-line bg-paper px-3 py-2.5 font-ui text-sm text-navy focus:border-azure focus:outline-none";

  return (
    <div className="border-b border-line pb-5">
      <div className="flex gap-2">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            push({ ...query, q: term || undefined });
          }}
          className="relative flex-1"
          role="search"
        >
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <label htmlFor="news-search" className="sr-only">
            Search stories
          </label>
          <input
            id="news-search"
            type="search"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Search stories"
            className="w-full border border-line bg-paper py-3 pl-9 pr-3 font-ui text-sm text-navy placeholder:text-muted focus:border-azure focus:outline-none"
          />
        </form>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className={cn(
            "flex shrink-0 items-center gap-2 border px-4 font-ui text-sm font-semibold transition-colors",
            activeCount > 0 ? "border-navy bg-navy text-white" : "border-line text-navy hover:border-navy"
          )}
        >
          <SlidersHorizontal className="h-4 w-4" />
          <span className="hidden sm:inline">Filters</span>
          {activeCount > 0 && <span className="text-xs">({activeCount})</span>}
        </button>
      </div>

      {open && (
        <div className="mt-3 grid gap-3 bg-surface p-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <label htmlFor="filter-category" className="eyebrow mb-1.5 block text-muted">
              Section
            </label>
            <select
              id="filter-category"
              className={field}
              value={query.category ?? ""}
              onChange={(e) => push({ ...query, q: term || undefined, category: e.target.value || undefined })}
            >
              <option value="">All sections</option>
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="filter-author" className="eyebrow mb-1.5 block text-muted">
              Reporter
            </label>
            <select
              id="filter-author"
              className={field}
              value={query.author ?? ""}
              onChange={(e) => push({ ...query, q: term || undefined, author: e.target.value || undefined })}
            >
              <option value="">All reporters</option>
              {authors.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="filter-from" className="eyebrow mb-1.5 block text-muted">
              From
            </label>
            <input
              id="filter-from"
              type="date"
              className={field}
              value={query.dateFrom ?? ""}
              onChange={(e) => push({ ...query, q: term || undefined, dateFrom: e.target.value || undefined })}
            />
          </div>

          <div>
            <label htmlFor="filter-to" className="eyebrow mb-1.5 block text-muted">
              To
            </label>
            <input
              id="filter-to"
              type="date"
              className={field}
              value={query.dateTo ?? ""}
              onChange={(e) => push({ ...query, q: term || undefined, dateTo: e.target.value || undefined })}
            />
          </div>
        </div>
      )}

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <p className="font-ui text-sm text-muted">
          {resultCount} {resultCount === 1 ? "story" : "stories"}
          {query.q && <> for “{query.q}”</>}
        </p>
        {(activeCount > 0 || query.q) && (
          <button
            type="button"
            onClick={() => {
              setTerm("");
              push({});
            }}
            className="inline-flex items-center gap-1 font-ui text-sm font-semibold text-flag-red hover:underline"
          >
            <X className="h-3.5 w-3.5" />
            Clear
          </button>
        )}
      </div>
    </div>
  );
}
