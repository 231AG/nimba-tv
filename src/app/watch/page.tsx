import Link from "next/link";
import { Play } from "lucide-react";
import { YoutubeIcon } from "@/components/ui/BrandIcons";
import { generateSEO } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import Figure from "@/components/ui/Figure";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import VideoEmbed from "@/components/news/VideoEmbed";
import { fetchProgrammes, fetchVideoArticles } from "@/lib/data";
import { formatSmartDate, youtubeWatchUrl } from "@/lib/utils";

export const metadata = generateSEO({
  title: "Watch",
  description:
    "Nimba TV programmes — the evening bulletin, Talking Nimba, cultural and educational shows, published on YouTube and Facebook.",
  path: "/watch",
});

export default async function WatchPage() {
  const [programmes, videos] = await Promise.all([fetchProgrammes(), fetchVideoArticles()]);
  const featured = videos[0];
  const rest = videos.slice(1);

  return (
    <>
      <div className="border-b border-line bg-navy-deep text-white">
        <div className="wrap py-10 lg:py-14">
          <span aria-hidden className="mb-3 block h-1 w-10 bg-flag-red" />
          <h1 className="text-3xl sm:text-4xl">Watch Nimba TV</h1>
          <p className="mt-2 max-w-2xl font-read text-base text-white/70">
            Bulletins, talk shows, cultural and educational programming from the Saclepea studio —
            published to YouTube and Facebook so audiences across Liberia can follow along.
          </p>
          <Button href={siteConfig.social.youtube} variant="primary" className="mt-6">
            <YoutubeIcon className="h-4 w-4" />
            Our YouTube channel
          </Button>
        </div>
      </div>

      {featured && (
        <section className="wrap py-10 lg:py-14" aria-labelledby="featured-video">
          <SectionHeading title="Latest from the studio" tone="red" className="mb-6" />
          <div className="grid gap-6 lg:grid-cols-5 lg:gap-8">
            <div className="lg:col-span-3">
              <VideoEmbed
                idOrUrl={featured.youtubeId!}
                poster={featured.featuredImage}
                title={featured.title}
              />
            </div>
            <div className="lg:col-span-2">
              <Badge variant="section">{featured.category.name}</Badge>
              <h2 id="featured-video" className="mt-3 text-2xl text-navy">
                {featured.title}
              </h2>
              <p className="mt-3 font-read text-base leading-relaxed text-muted">
                {featured.excerpt}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3 font-ui text-xs text-muted">
                <span>{featured.author.name}</span>
                <span aria-hidden className="h-1 w-1 rounded-full bg-line" />
                <time dateTime={featured.publishDate}>{formatSmartDate(featured.publishDate)}</time>
              </div>
              <Button href={`/news/${featured.slug}`} variant="ghost" className="mt-5">
                Read the story
              </Button>
            </div>
          </div>
        </section>
      )}

      <section className="border-y border-line bg-surface py-10 lg:py-14" aria-labelledby="programmes">
        <div className="wrap">
          <SectionHeading
            title="Our programmes"
            description="What Nimba TV broadcasts each week"
            className="mb-6"
          />
          <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {programmes.map((programme, i) => (
              <Reveal key={programme.id} delay={i * 45} className="h-full">
                <article className="group h-full">
                  <a
                    href={programme.youtubeId ? youtubeWatchUrl(programme.youtubeId) : siteConfig.social.youtube}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex h-full flex-col"
                  >
                    <div className="relative">
                      <Figure src={programme.image} alt="" ratio="wide" zoom />
                      <span
                        aria-hidden
                        className="absolute bottom-2.5 right-2.5 flex h-10 w-10 items-center justify-center rounded-full bg-flag-red text-white shadow-lg transition-transform group-hover:scale-110"
                      >
                        <Play className="h-4 w-4 translate-x-[6%] fill-current" />
                      </span>
                    </div>
                    <h3 className="mt-3.5 font-display text-lg font-semibold text-navy transition-colors group-hover:text-flag-red">
                      {programme.title}
                    </h3>
                    <p className="eyebrow mt-1 text-azure-deep">{programme.schedule}</p>
                    <p className="mt-2 font-read text-[0.95rem] leading-relaxed text-muted">
                      {programme.description}
                    </p>
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {rest.length > 0 && (
        <section className="wrap py-10 lg:py-14" aria-labelledby="more-video">
          <SectionHeading title="More video stories" href="/news" className="mb-6" />
          <ul className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((video) => (
              <li key={video.id}>
                <article className="group">
                  <Link href={`/news/${video.slug}`}>
                    <div className="relative">
                      <Figure src={video.featuredImage} alt={video.featuredImageAlt} ratio="wide" zoom />
                      <span
                        aria-hidden
                        className="absolute bottom-2.5 right-2.5 flex h-10 w-10 items-center justify-center rounded-full bg-flag-red text-white shadow-lg"
                      >
                        <Play className="h-4 w-4 translate-x-[6%] fill-current" />
                      </span>
                    </div>
                    <h3 className="mt-3.5 font-display text-lg font-semibold text-navy transition-colors group-hover:text-flag-red">
                      {video.title}
                    </h3>
                    <time dateTime={video.publishDate} className="mt-1.5 block font-ui text-xs text-muted">
                      {formatSmartDate(video.publishDate)}
                    </time>
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
