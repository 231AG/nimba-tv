import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const STYLES: Record<Variant, string> = {
  primary: "bg-flag-red text-white hover:bg-flag-red-deep",
  secondary: "bg-navy text-white hover:bg-navy-soft",
  ghost: "border border-line text-navy hover:border-navy hover:bg-surface",
};

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit";
  variant?: Variant;
  className?: string;
  fullWidth?: boolean;
}

export default function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  className,
  fullWidth,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 px-5 py-3 font-ui text-sm font-semibold tracking-wide transition-colors",
    STYLES[variant],
    fullWidth && "w-full",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
