"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";
import { youtubeId } from "@/lib/utils";

/**
 * Click-to-load YouTube player.
 *
 * The poster is the story's own feature image, so nothing is requested from
 * YouTube until the reader presses play — which keeps the article page fast on
 * a mobile connection and avoids third-party cookies for readers who never
 * watch. Editors only ever supply a link.
 */
export default function VideoEmbed({
  idOrUrl,
  poster,
  title,
}: {
  idOrUrl: string;
  poster: string;
  title: string;
}) {
  const [playing, setPlaying] = useState(false);
  const id = youtubeId(idOrUrl);

  return (
    <div className="relative w-full overflow-hidden bg-navy-deep" style={{ aspectRatio: "16 / 9" }}>
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 h-full w-full"
          aria-label={`Play video: ${title}`}
        >
          <Image src={poster} alt="" fill sizes="(max-width: 1023px) 100vw, 768px" className="object-cover" />
          <span aria-hidden className="absolute inset-0 bg-navy-deep/45 transition-colors group-hover:bg-navy-deep/30" />
          <span
            aria-hidden
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-flag-red text-white shadow-xl transition-transform group-hover:scale-110 sm:h-20 sm:w-20"
          >
            <Play className="h-7 w-7 translate-x-[6%] fill-current sm:h-9 sm:w-9" />
          </span>
          <span className="absolute bottom-3 left-3 font-ui text-xs font-semibold text-white/85">
            Watch on YouTube
          </span>
        </button>
      )}
    </div>
  );
}
