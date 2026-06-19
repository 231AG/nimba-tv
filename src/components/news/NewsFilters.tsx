"use client";

import type { Category, Author } from "@/types";

interface NewsFiltersProps {
  categories: Category[];
  authors: Author[];
  selectedCategory?: string;
  selectedAuthor?: string;
  selectedDateFrom?: string;
  selectedDateTo?: string;
  onFilterChange: (filters: {
    category?: string;
    author?: string;
    dateFrom?: string;
    dateTo?: string;
  }) => void;
}

export default function NewsFilters({
  categories,
  authors,
  selectedCategory,
  selectedAuthor,
  selectedDateFrom,
  selectedDateTo,
  onFilterChange,
}: NewsFiltersProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div>
        <label htmlFor="filter-category" className="block text-sm font-medium text-neutral-700 mb-1">
          Category
        </label>
        <select
          id="filter-category"
          value={selectedCategory || ""}
          onChange={(e) =>
            onFilterChange({
              category: e.target.value || undefined,
              author: selectedAuthor,
              dateFrom: selectedDateFrom,
              dateTo: selectedDateTo,
            })
          }
          className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.slug}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="filter-author" className="block text-sm font-medium text-neutral-700 mb-1">
          Author
        </label>
        <select
          id="filter-author"
          value={selectedAuthor || ""}
          onChange={(e) =>
            onFilterChange({
              category: selectedCategory,
              author: e.target.value || undefined,
              dateFrom: selectedDateFrom,
              dateTo: selectedDateTo,
            })
          }
          className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
        >
          <option value="">All Authors</option>
          {authors.map((author) => (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="filter-date-from" className="block text-sm font-medium text-neutral-700 mb-1">
          From Date
        </label>
        <input
          id="filter-date-from"
          type="date"
          value={selectedDateFrom || ""}
          onChange={(e) =>
            onFilterChange({
              category: selectedCategory,
              author: selectedAuthor,
              dateFrom: e.target.value || undefined,
              dateTo: selectedDateTo,
            })
          }
          className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
        />
      </div>

      <div>
        <label htmlFor="filter-date-to" className="block text-sm font-medium text-neutral-700 mb-1">
          To Date
        </label>
        <input
          id="filter-date-to"
          type="date"
          value={selectedDateTo || ""}
          onChange={(e) =>
            onFilterChange({
              category: selectedCategory,
              author: selectedAuthor,
              dateFrom: selectedDateFrom,
              dateTo: e.target.value || undefined,
            })
          }
          className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
        />
      </div>
    </div>
  );
}
