import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Category } from "@/types";

/**
 * Sections as a scrollable rail on phones, a grid on desktop. No icons: the
 * section names are the information, and a decorative glyph per topic would be
 * exactly the kind of filler that makes a site look generated.
 */
export default function SectionRail({
  categories,
  counts,
}: {
  categories: Category[];
  counts: Record<string, number>;
}) {
  return (
    <section className="border-y border-line bg-surface py-10 lg:py-14" aria-labelledby="sections-heading">
      <div className="wrap">
        <h2 id="sections-heading" className="eyebrow mb-5 text-muted">
          Browse by section
        </h2>

        <ul className="no-scrollbar edge-fade -mx-4 flex snap-x gap-3 overflow-x-auto px-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4">
          {categories.map((c) => (
            <li key={c.slug} className="w-56 shrink-0 snap-start sm:w-auto">
              <Link
                href={`/category/${c.slug}`}
                className="group flex h-full flex-col justify-between border border-line bg-paper p-4 transition-colors hover:border-navy"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="font-display text-lg font-semibold text-navy group-hover:text-flag-red">
                    {c.name}
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-flag-red" />
                </div>
                <span className="mt-6 font-ui text-xs text-muted">
                  {counts[c.slug] ?? 0} {counts[c.slug] === 1 ? "story" : "stories"}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
