import Link from "next/link";
import { Play } from "lucide-react";
import type { NewsArticle, Programme } from "@/types";
import Figure from "@/components/ui/Figure";
import SectionHeading from "@/components/ui/SectionHeading";
import { youtubeWatchUrl } from "@/lib/utils";

/**
 * The station's video output. Nimba TV reaches audiences outside the county
 * through YouTube and Facebook, so this points at published programming rather
 * than a stream.
 */
export default function WatchStrip({
  featured,
  programmes,
}: {
  featured?: NewsArticle;
  programmes: Programme[];
}) {
  return (
    <section className="bg-navy-deep py-12 text-white lg:py-16" aria-labelledby="watch-heading">
      <div className="wrap">
        <SectionHeading
          title="On Nimba TV"
          description="Bulletins, talk shows and cultural programming"
          href="/watch"
          linkLabel="All programmes"
          tone="light"
          className="mb-6"
        />

        <div className="grid gap-6 lg:grid-cols-5 lg:gap-8">
          {featured && (
            <article className="group lg:col-span-3">
              <Link href={`/news/${featured.slug}`} className="block">
                <div className="relative">
                  <Figure
                    src={featured.featuredImage}
                    alt={featured.featuredImageAlt}
                    ratio="wide"
                    sizes="(max-width: 1023px) 100vw, 60vw"
                    zoom
                    overlay
                  />
                  <span
                    aria-hidden
                    className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-flag-red shadow-xl transition-transform group-hover:scale-110"
                  >
                    <Play className="h-6 w-6 translate-x-[6%] fill-current" />
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <h3 className="font-display text-xl font-semibold leading-snug text-white sm:text-2xl">
                      {featured.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </article>
          )}

          <ul className="flex flex-col divide-y divide-white/10 lg:col-span-2">
            {programmes.slice(0, 4).map((programme) => (
              <li key={programme.id} className="py-3 first:pt-0 last:pb-0">
                <a
                  href={programme.youtubeId ? youtubeWatchUrl(programme.youtubeId) : siteYoutube()}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex items-center gap-3.5"
                >
                  <div className="w-24 shrink-0 sm:w-28">
                    <Figure src={programme.image} alt="" ratio="wide" sizes="112px" zoom />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-base font-semibold leading-snug text-white transition-colors group-hover:text-azure">
                      {programme.title}
                    </h3>
                    <p className="mt-1 font-ui text-xs text-white/55">{programme.schedule}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function siteYoutube() {
  return "https://youtube.com/@nimbatv";
}
