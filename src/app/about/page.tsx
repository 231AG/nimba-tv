import { generateSEO } from "@/lib/seo";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";
import {
  Shield,
  Target,
  Eye,
  Heart,
  Users,
  Award,
  BookOpen,
  Globe,
  Scale,
} from "lucide-react";

export const metadata = generateSEO({
  title: "About Us",
  description: `Learn about ${siteConfig.name} - ${siteConfig.tagline}. Established in ${siteConfig.established} in ${siteConfig.location}.`,
  url: `${siteConfig.url}/about`,
});

const coreValues = [
  { icon: Shield, title: "Integrity", description: "Upholding the highest ethical standards in all our reporting and operations." },
  { icon: Target, title: "Accuracy", description: "Committing to factual, verified, and balanced news coverage." },
  { icon: Scale, title: "Accountability", description: "Taking responsibility for our content and its impact on society." },
  { icon: Eye, title: "Transparency", description: "Operating openly and honestly with our audience and stakeholders." },
  { icon: Users, title: "Community Engagement", description: "Connecting with and serving the communities we report on." },
  { icon: Award, title: "Professionalism", description: "Maintaining excellence in journalism and broadcasting standards." },
];

const whyNimbaTV = [
  { icon: BookOpen, title: "Independent Journalism", description: "Free from political influence, delivering unbiased news that serves the public interest." },
  { icon: Globe, title: "Public Awareness", description: "Keeping citizens informed about issues that affect their daily lives and future." },
  { icon: Heart, title: "Civic Education", description: "Empowering communities with knowledge to participate in democratic processes." },
  { icon: Users, title: "Social Development", description: "Highlighting stories of progress and advocating for positive change in society." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">About Nimba TV</h1>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto">{siteConfig.tagline}</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <FadeIn>
            <SectionHeading title="Our Story" />
            <div className="max-w-3xl">
              <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                Founded in {siteConfig.established}, Nimba TV has grown from a local broadcasting initiative into one of Liberia&apos;s most trusted media institutions. Named after Nimba County — a region known for its rich culture and resilient communities — our station embodies the spirit of informed citizenship and community empowerment.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                Over the years, Nimba TV has played a vital role in Liberian media, providing comprehensive coverage of national events, community stories, and issues that matter to everyday citizens. Our team of dedicated journalists and broadcasters work tirelessly to deliver news that informs, educates, and inspires.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                From breaking political news to in-depth community reports, from sports coverage to educational programming, Nimba TV serves as a bridge between information and action, helping Liberians stay connected to their world and engaged in their communities.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 bg-brand-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn>
              <div className="bg-white p-8 rounded-xl border-l-4 border-brand-red shadow-sm">
                <h2 className="text-2xl font-heading font-bold text-brand-blue mb-4">Our Mission</h2>
                <p className="text-neutral-700 leading-relaxed text-lg">{siteConfig.mission}</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="bg-white p-8 rounded-xl border-l-4 border-brand-gold shadow-sm">
                <h2 className="text-2xl font-heading font-bold text-brand-blue mb-4">Our Vision</h2>
                <p className="text-neutral-700 leading-relaxed text-lg">{siteConfig.vision}</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <FadeIn>
            <SectionHeading title="Core Values" subtitle="The principles that guide everything we do" align="center" />
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.05}>
                <div className="p-6 bg-white border border-neutral-200 rounded-xl hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-brand-blue" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-brand-blue mb-2">{value.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-blue text-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <SectionHeading
              title="Why Nimba TV"
              subtitle="What sets us apart in Liberian media"
              align="center"
            />
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyNimbaTV.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="text-center p-6">
                  <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-brand-gold" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-neutral-300 text-sm leading-relaxed">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
