import Image from "next/image";
import Link from "next/link";
import type { Video } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import { Play } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface FeaturedVideoProps {
  videos: Video[];
}

export default function FeaturedVideo({ videos }: FeaturedVideoProps) {
  const featured = videos[0];
  const others = videos.slice(1, 4);

  if (!featured) return null;

  return (
    <section className="py-12 bg-brand-blue text-white">
      <div className="container mx-auto px-4">
        <FadeIn>
          <SectionHeading
            title="Featured Broadcasts"
            subtitle="Watch the latest from Nimba TV"
            align="center"
          />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <FadeIn className="lg:col-span-2">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black group">
              <Image
                src={featured.thumbnail}
                alt={featured.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white ml-1" fill="white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80">
                <h3 className="text-xl font-heading font-bold">{featured.title}</h3>
                <p className="text-neutral-300 text-sm mt-1">{formatDate(featured.publishDate)}</p>
              </div>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-4">
            {others.map((video, i) => (
              <FadeIn key={video.id} delay={i * 0.1}>
                <div className="flex gap-3 group cursor-pointer">
                  <div className="relative w-32 h-20 shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="w-6 h-6 text-white" fill="white" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center min-w-0">
                    <h4 className="font-medium text-sm line-clamp-2 group-hover:text-brand-gold transition-colors">
                      {video.title}
                    </h4>
                    <p className="text-xs text-neutral-400 mt-1 capitalize">
                      {video.type.replace("-", " ")}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
            <Link href="/videos" className="mt-auto">
              <Button variant="primary" className="w-full">
                View All Videos
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
