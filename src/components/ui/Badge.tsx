import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "section" | "breaking" | "video" | "quiet";

const STYLES: Record<Variant, string> = {
  section: "bg-navy text-white",
  breaking: "bg-flag-red text-white",
  video: "bg-white/95 text-navy",
  quiet: "bg-surface-2 text-navy",
};

export default function Badge({
  children,
  variant = "section",
  href,
  className,
}: {
  children: React.ReactNode;
  variant?: Variant;
  href?: string;
  className?: string;
}) {
  const classes = cn(
    "eyebrow inline-flex items-center gap-1.5 px-2.5 py-1",
    STYLES[variant],
    href && "transition-colors hover:bg-flag-red hover:text-white",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return <span className={classes}>{children}</span>;
}
