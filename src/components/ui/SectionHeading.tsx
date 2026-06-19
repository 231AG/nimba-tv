import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-8",
        align === "center" && "text-center",
        className
      )}
    >
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-blue">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-neutral-600 text-lg">{subtitle}</p>
      )}
      <div
        className={cn(
          "mt-3 h-1 w-16 bg-brand-red rounded",
          align === "center" && "mx-auto"
        )}
      />
    </div>
  );
}
