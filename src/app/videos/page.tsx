import Image from "next/image";
import { generateSEO } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import { fetchVideos, fetchVideosByType } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { Play, Tv } from "lucide-react";

export const metadata = generateSEO({
  title: "Watch",
  description: "Watch the latest Nimba TV broadcasts, interviews, and special reports.",
  url: `${siteConfig.url}/videos`,
});

export default async function VideosPage() {
  const [allVideos, broadcasts, interviews, reports] = await Promise.all([
    fetchVideos(),
    fetchVideosByType("broadcast"),
    fetchVideosByType("interview"),
    fetchVideosByType("special-report"),
  ]);

  const featured = allVideos[0];

  return (
    <>
      <section className="bg-brand-blue text-white py-12">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="flex items-center gap-3 mb-2">
              <Tv className="w-8 h-8" />
              <h1 className="text-3xl md:text-4xl font-heading font-bold">Nimba TV Broadcasts</h1>
            </div>
            <p className="text-neutral-300">Watch our latest news broadcasts, interviews, and special reports</p>
          </FadeIn>
        </div>
      </section>

      {featured && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <FadeIn>
              <SectionHeading title="Featured Broadcast" />
              <div className="relative aspect-video max-w-4xl rounded-xl overflow-hidden bg-black group">
                <Image
                  src={featured.thumbnail}
                  alt={featured.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 896px) 100vw, 896px"
                  priority
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-brand-red rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <Play className="w-10 h-10 text-white ml-1" fill="white" />
                    </div>
                    <p className="text-white/70 text-sm mt-3">YouTube embed placeholder</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80">
                  <h2 className="text-2xl font-heading font-bold text-white">{featured.title}</h2>
                  <p className="text-neutral-300 mt-1">{featured.description}</p>
                  <p className="text-neutral-400 text-sm mt-2">{formatDate(featured.publishDate)}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      <VideoSection title="Latest Broadcasts" videos={broadcasts} />
      <VideoSection title="Interviews" videos={interviews} bg="gray" />
      <VideoSection title="Special Reports" videos={reports} />

      <section className="py-12 bg-brand-gray">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-xl font-heading font-bold text-brand-blue mb-2">YouTube Playlist Integration</h2>
            <p className="text-neutral-600 max-w-xl mx-auto">
              This section will display a YouTube playlist once the YouTube API is connected.
              Configure your playlist ID in the environment variables.
            </p>
            <div className="mt-6 aspect-video max-w-2xl mx-auto bg-neutral-200 rounded-xl flex items-center justify-center">
              <p className="text-neutral-500">YouTube Playlist Placeholder</p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

function VideoSection({
  title,
  videos,
  bg,
}: {
  title: string;
  videos: Awaited<ReturnType<typeof fetchVideos>>;
  bg?: "gray";
}) {
  if (videos.length === 0) return null;

  return (
    <section className={`py-12 ${bg === "gray" ? "bg-brand-gray" : ""}`}>
      <div className="container mx-auto px-4">
        <FadeIn>
          <SectionHeading title={title} />
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <FadeIn key={video.id} delay={i * 0.1}>
              <div className="group cursor-pointer">
                <div className="relative aspect-video rounded-lg overflow-hidden bg-neutral-200">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-10 h-10 text-white" fill="white" />
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-brand-blue mt-3 group-hover:text-brand-red transition-colors line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-sm text-neutral-500 mt-1">{formatDate(video.publishDate)}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
