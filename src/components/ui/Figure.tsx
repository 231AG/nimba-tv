import Image from "next/image";
import { cn } from "@/lib/utils";

const RATIOS = {
  wide: "16 / 9",
  ultra: "21 / 9",
  photo: "3 / 2",
  square: "1 / 1",
  portrait: "4 / 5",
  tall: "3 / 4",
} as const;

interface FigureProps {
  src: string;
  alt: string;
  /** The box the image must fill. The source's own dimensions never matter. */
  ratio?: keyof typeof RATIOS;
  sizes?: string;
  priority?: boolean;
  className?: string;
  /** Adds a slow zoom when an ancestor link is hovered. */
  zoom?: boolean;
  overlay?: boolean;
}

/**
 * The single way feature images are rendered.
 *
 * The wrapper owns the aspect ratio and clips; the image fills it with
 * object-cover and a centred origin. A 480x640 portrait and a 3000x2000
 * landscape therefore occupy exactly the same box, correctly cropped, with no
 * letterboxing and no distortion — which is what lets editors upload whatever
 * they have to hand.
 */
export default function Figure({
  src,
  alt,
  ratio = "wide",
  sizes = "(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw",
  priority = false,
  className,
  zoom = false,
  overlay = false,
}: FigureProps) {
  return (
    <div
      className={cn("relative w-full overflow-hidden bg-surface-2", className)}
      style={{ aspectRatio: RATIOS[ratio] }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn(
          "object-cover object-center",
          zoom && "transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        )}
      />
      {overlay && (
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/35 to-transparent"
        />
      )}
    </div>
  );
}
