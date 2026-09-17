import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * The rule above the heading encodes the section's nature rather than decorating
 * it: red marks urgency, azure marks a standing section.
 */
export default function SectionHeading({
  title,
  description,
  href,
  linkLabel = "See all",
  tone = "azure",
  className,
}: {
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
  tone?: "azure" | "red" | "light";
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap items-end justify-between gap-x-6 gap-y-2", className)}>
      <div>
        <span
          aria-hidden
          className={cn(
            "mb-3 block h-1 w-10",
            tone === "red" && "bg-flag-red",
            tone === "azure" && "bg-azure",
            tone === "light" && "bg-azure"
          )}
        />
        <h2
          className={cn(
            "text-2xl sm:text-3xl",
            tone === "light" ? "text-white" : "text-navy"
          )}
        >
          {title}
        </h2>
        {description && (
          <p className={cn("mt-1.5 text-sm", tone === "light" ? "text-white/70" : "text-muted")}>
            {description}
          </p>
        )}
      </div>
      {href && (
        <Link
          href={href}
          className={cn(
            "group inline-flex items-center gap-1.5 font-ui text-sm font-semibold transition-colors",
            tone === "light" ? "text-azure hover:text-white" : "text-azure-deep hover:text-flag-red"
          )}
        >
          {linkLabel}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      )}
    </div>
  );
}
