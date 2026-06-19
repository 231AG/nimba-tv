"use client";

import { useState } from "react";
import { Search } from "lucide-react";

interface NewsSearchProps {
  defaultValue?: string;
  onSearch: (query: string) => void;
}

export default function NewsSearch({ defaultValue = "", onSearch }: NewsSearchProps) {
  const [query, setQuery] = useState(defaultValue);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search articles by title, keywords, or content..."
        className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
        aria-label="Search articles"
      />
    </form>
  );
}
