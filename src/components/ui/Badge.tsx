import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "breaking" | "category";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide rounded",
        {
          "bg-brand-red text-white": variant === "breaking",
          "bg-brand-blue text-white": variant === "category",
          "bg-brand-gold/20 text-brand-gold": variant === "default",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
