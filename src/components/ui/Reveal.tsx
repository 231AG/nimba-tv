import { cn } from "@/lib/utils";

/**
 * Staggers a section in on load. Purely CSS, and the animation runs from a
 * visible resting state, so content is never parked at opacity:0 waiting on
 * JavaScript or an observer that may not fire.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div className={cn("rise", className)} style={delay ? { animationDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  );
}
