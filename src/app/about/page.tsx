import { Radio, Users, Globe2, Sparkles } from "lucide-react";
import { generateSEO } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import Figure from "@/components/ui/Figure";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { fetchAuthors } from "@/lib/data";
import { initials } from "@/lib/utils";

export const metadata = generateSEO({
  title: "About",
  description:
    "Nimba TV is a Liberian television station in Saclepea, Nimba County, founded in 2018 by local journalists to serve the county with news, information and entertainment.",
  path: "/about",
});

const STRANDS = [
  {
    Icon: Radio,
    title: "News and current affairs",
    body: "Daily bulletins alongside in-depth coverage of major events in Liberia and beyond. The station's news output is its most followed programming, and for many communities it is the most reliable source of up-to-date information in the region.",
  },
  {
    Icon: Users,
    title: "Talk shows",
    body: "Discussion programmes covering politics, social issues and culture, with guests from across the county and questions taken from listeners.",
  },
  {
    Icon: Sparkles,
    title: "Culture and entertainment",
    body: "Music, dance and art from across Liberia, plus a platform for local artists and filmmakers to show their work. Promoting Liberian heritage is central to why the station exists.",
  },
  {
    Icon: Globe2,
    title: "Education",
    body: "Programming for school-age children and adult learners, produced with teachers working in the county.",
  },
];

export default async function AboutPage() {
  const authors = await fetchAuthors();

  return (
    <>
      <div className="border-b border-line bg-navy-deep text-white">
        <div className="wrap grid gap-8 py-10 lg:grid-cols-2 lg:items-center lg:py-16">
          <div>
            <span aria-hidden className="mb-3 block h-1 w-10 bg-flag-red" />
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem]">
              A county station with a national audience
            </h1>
            <p className="mt-4 font-read text-lg leading-relaxed text-white/75">
              Nimba TV is a Liberian television station headquartered in {siteConfig.city},{" "}
              {siteConfig.county}. It was founded in {siteConfig.established} by a group of local
              journalists with the goal of giving the people of Nimba County a platform for news,
              information and entertainment.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/news" variant="primary">Read the latest</Button>
              <Button href="/contact" variant="ghost" className="border-white/25 text-white hover:border-white hover:bg-white/10">
                Contact the newsroom
              </Button>
            </div>
          </div>
          <Figure
            src="/demo/broadcast.jpg"
            alt="Illustrative artwork representing Nimba TV's broadcast reach"
            ratio="photo"
            sizes="(max-width: 1023px) 100vw, 50vw"
            priority
          />
        </div>
      </div>

      <section className="wrap py-12 lg:py-16" aria-labelledby="story-heading">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
          <div>
            <SectionHeading title="Our story" className="mb-6" />
            <div className="story max-w-[68ch]">
              <p>
                Nimba TV broadcasts a variety of programming, including news, current affairs, talk
                shows, educational programmes and entertainment. The station&rsquo;s news coverage is
                particularly popular, as it is one of the few sources of reliable and up-to-date news
                and information in the region.
              </p>
              <p>
                The station also plays an important role in promoting Liberian culture and heritage.
                It broadcasts a number of programmes that showcase Liberian music, dance and art, and
                supports local artists and filmmakers by giving them a platform to show their work.
              </p>
              <p>
                In recent years Nimba TV has expanded its reach beyond Nimba County to become one of
                the most popular television stations in Liberia. The station&rsquo;s programming is now
                available to viewers across the country via Facebook and YouTube.
              </p>
              <p>
                Nimba TV is committed to providing viewers with high-quality programming that is both
                informative and entertaining. Its team of journalists and producers work to create
                content that is relevant to the needs and interests of the Liberian people.
              </p>
            </div>
          </div>

          <aside className="flex flex-col gap-5">
            <div className="border-l-2 border-flag-red bg-surface p-5">
              <h2 className="eyebrow text-flag-red">Mission</h2>
              <p className="mt-2 font-read text-[0.975rem] leading-relaxed text-navy">
                {siteConfig.mission}
              </p>
            </div>
            <div className="border-l-2 border-azure bg-surface p-5">
              <h2 className="eyebrow text-azure-deep">Vision</h2>
              <p className="mt-2 font-read text-[0.975rem] leading-relaxed text-navy">
                {siteConfig.vision}
              </p>
            </div>
            <dl className="grid grid-cols-2 gap-px bg-line">
              <div className="bg-paper p-4">
                <dt className="eyebrow text-muted">Founded</dt>
                <dd className="mt-1 font-display text-2xl font-semibold text-navy">
                  {siteConfig.established}
                </dd>
              </div>
              <div className="bg-paper p-4">
                <dt className="eyebrow text-muted">Based in</dt>
                <dd className="mt-1 font-display text-2xl font-semibold text-navy">
                  {siteConfig.city}
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="border-y border-line bg-surface py-12 lg:py-16" aria-labelledby="programming-heading">
        <div className="wrap">
          <SectionHeading
            title="What we broadcast"
            description="Four strands make up the schedule"
            className="mb-8"
          />
          <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {STRANDS.map(({ Icon, title, body }, i) => (
              <li key={title}>
                <Reveal delay={i * 50}>
                  <div className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-navy text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-navy">{title}</h3>
                      <p className="mt-1.5 font-read text-[0.975rem] leading-relaxed text-muted">
                        {body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wrap py-12 lg:py-16" aria-labelledby="newsroom-heading">
        <SectionHeading
          title="The newsroom"
          description="Reporters covering Nimba County"
          className="mb-8"
        />
        <ul className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {authors.map((author, i) => (
            <li key={author.id}>
              <Reveal delay={i * 40}>
                <article className="flex h-full gap-4 border border-line p-5">
                  <span
                    aria-hidden
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy font-ui text-base font-bold text-white"
                  >
                    {initials(author.name)}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-navy">{author.name}</h3>
                    <p className="eyebrow mt-0.5 text-azure-deep">{author.role}</p>
                    <p className="mt-2 font-read text-sm leading-relaxed text-muted">{author.bio}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
