import type { NewsArticle } from "@/types";
import { authors } from "./authors";
import { categories } from "./categories";

const cat = (slug: string) => categories.find((c) => c.slug === slug)!;
const auth = (id: string) => authors.find((a) => a.id === id)!;

/**
 * DEMO CONTENT.
 *
 * These stories exist to exercise the layout — headline lengths, image crops,
 * video articles, category spread. They are written as illustrative summaries
 * and deliberately contain no quotes attributed to named individuals, so nothing
 * here can be mistaken for real reporting. Delete this file's contents before
 * the site carries real news.
 */
export const articles: NewsArticle[] = [
  {
    id: "article-1",
    title: "Saclepea market traders press county authorities over stall fees",
    slug: "saclepea-market-traders-stall-fees",
    excerpt:
      "Traders at Saclepea's central market say the fee structure introduced this season is unclear, and are asking the county administration for a published schedule.",
    content: `<p>Traders operating from the central market in Saclepea have raised concerns about the way stall fees are being assessed this season, saying the amounts collected vary from one row of the market to the next without a published schedule to explain the difference.</p>
<p>Market association representatives told Nimba TV that most traders are willing to pay, but want the rates written down and displayed at the market entrance so that everyone is charged on the same basis. Several traders said they keep no receipts because none are issued.</p>
<h2>What the traders are asking for</h2>
<p>The association has put forward three requests: a printed fee schedule posted publicly, receipts for every payment collected, and a named office where disputes can be taken. None of these, they say, would require additional funding to implement.</p>
<p>County officials have acknowledged receiving the association's letter and indicated that a review of market administration is underway. No timeline has been announced.</p>
<h2>Why it matters</h2>
<p>Saclepea's market is the commercial centre of the district and the main point of sale for farmers bringing produce in from surrounding towns. Traders say uncertainty over fees makes it harder to price goods and discourages smaller sellers from taking a stall at all.</p>
<p>Nimba TV will continue to follow the review and will report the outcome when the county administration publishes its findings.</p>`,
    featuredImage: "/demo/market.jpg",
    featuredImageAlt: "Illustrative artwork representing market trade in Nimba County",
    author: auth("author-3"),
    category: cat("business"),
    tags: ["saclepea", "markets", "trade", "county administration"],
    publishDate: "2026-09-16T08:30:00Z",
    featured: true,
    breaking: true,
    readingTime: 4,
  },
  {
    id: "article-2",
    title: "New teaching block opens at a Saclepea public school as term begins",
    slug: "saclepea-school-teaching-block-opens",
    excerpt:
      "Six classrooms came into use at the start of term, easing a shift system that had pupils splitting the school day between morning and afternoon sessions.",
    content: `<p>A six-classroom teaching block has come into use at a public school in Saclepea, allowing the school to retire the shift system it had been running for the past three academic years.</p>
<p>Under the shift arrangement, junior classes attended in the morning and senior classes in the afternoon, with both groups losing teaching hours. School administrators say all classes now sit for a full day.</p>
<h2>Pressure on places remains</h2>
<p>Enrolment has grown steadily as families move into Saclepea from surrounding districts, and the school reports that places in the lower grades remain oversubscribed. Teaching staff numbers have not increased alongside the new rooms, which administrators identify as the next constraint.</p>
<p>Furniture for two of the six rooms had not arrived as the term opened, and those classes are meeting with pupils seated on benches brought from the old block.</p>
<h2>What comes next</h2>
<p>The county education office has said additional teacher postings for the district are under consideration for the next academic year. Parents' representatives have asked for the school's maintenance budget to be published.</p>`,
    featuredImage: "/demo/classroom.jpg",
    featuredImageAlt: "Illustrative artwork representing a classroom in Nimba County",
    author: auth("author-2"),
    category: cat("education"),
    tags: ["education", "saclepea", "schools"],
    publishDate: "2026-09-15T14:00:00Z",
    featured: true,
    readingTime: 3,
  },
  {
    id: "article-3",
    title: "Nimba TV Evening News — full bulletin",
    slug: "nimba-tv-evening-news-bulletin",
    excerpt:
      "The full evening bulletin from the Saclepea studio: county news, national headlines and sport, presented in English and Mano.",
    content: `<p>Nimba TV's evening bulletin brings together the day's reporting from across the county alongside national headlines, sport and weather.</p>
<p>The bulletin is produced in the Saclepea studio and broadcast on air and on the station's YouTube and Facebook channels, where audiences outside Nimba County follow it.</p>`,
    featuredImage: "/demo/studio.jpg",
    featuredImageAlt: "Illustrative artwork representing the Nimba TV studio",
    author: auth("author-1"),
    category: cat("politics"),
    tags: ["bulletin", "broadcast", "evening news"],
    publishDate: "2026-09-16T19:00:00Z",
    featured: true,
    readingTime: 1,
    youtubeId: "aqz-KE-bpKQ",
  },
  {
    id: "article-4",
    title: "County health team completes outreach round across nine towns",
    slug: "county-health-outreach-nine-towns",
    excerpt:
      "A mobile team visited nine towns over three weeks, offering routine immunisation and antenatal checks in communities far from a fixed clinic.",
    content: `<p>A mobile health team has completed a three-week outreach round covering nine towns in Nimba County, offering routine childhood immunisation, antenatal checks and basic screening in communities that sit some distance from a fixed clinic.</p>
<h2>Reaching towns without a clinic</h2>
<p>For several of the towns visited, the nearest health facility is a walk of two hours or more, which health workers say is the single largest reason routine appointments are missed. Holding sessions in the town itself removes that barrier for the duration of the visit.</p>
<p>The team reports that turnout was highest where the visit had been announced on local radio and by town criers several days in advance.</p>
<h2>Follow-up is the difficulty</h2>
<p>Outreach rounds are effective for a single visit but harder to sustain for treatments requiring a return appointment. Health workers say the next round is planned before the end of the year, and that record-keeping between rounds is being improved so returning patients can be traced.</p>`,
    featuredImage: "/demo/clinic.jpg",
    featuredImageAlt: "Illustrative artwork representing health outreach in Nimba County",
    author: auth("author-2"),
    category: cat("health"),
    tags: ["health", "immunisation", "outreach"],
    publishDate: "2026-09-14T10:15:00Z",
    featured: false,
    readingTime: 4,
  },
  {
    id: "article-5",
    title: "Nimba county side holds on for a draw in the opening fixture",
    slug: "nimba-county-side-opening-fixture-draw",
    excerpt:
      "A goalless second half was enough to share the points in the county championship opener, played to a full ground in Ganta.",
    content: `<p>Nimba's county side opened their championship campaign with a draw, holding on through a goalless second half in front of a full ground in Ganta.</p>
<p>The side started brightly and took the lead inside the opening half hour before conceding an equaliser shortly before the interval. The second half produced chances at both ends without a further goal.</p>
<h2>What the result means</h2>
<p>A point from the opening fixture leaves the county side mid-table ahead of a run of three away matches. The coaching staff highlighted fitness in the closing twenty minutes as the area needing most work.</p>
<p>The next home fixture is scheduled for later this month.</p>`,
    featuredImage: "/demo/football.jpg",
    featuredImageAlt: "Illustrative artwork representing county football in Nimba",
    author: auth("author-5"),
    category: cat("sports"),
    tags: ["football", "county championship", "ganta"],
    publishDate: "2026-09-13T17:45:00Z",
    featured: false,
    readingTime: 2,
  },
  {
    id: "article-6",
    title: "Young filmmakers from Nimba screen their first shorts",
    slug: "young-filmmakers-nimba-first-shorts",
    excerpt:
      "Six short films made by first-time directors from the county were screened in Saclepea, part of a programme Nimba TV runs to give local work an audience.",
    content: `<p>Six short films by first-time directors from Nimba County were screened in Saclepea this month, the first public showing for work produced through a training programme the station supports.</p>
<h2>Made locally, on local equipment</h2>
<p>All six were shot in the county using equipment borrowed from the station, with the participants handling camera, sound and editing themselves. Subjects ranged from a portrait of a palm-oil producer to a short drama about a family returning to a home town.</p>
<p>Promoting Liberian culture and giving local artists and filmmakers a platform is part of why Nimba TV was founded, and the station broadcasts selected work from the programme.</p>
<h2>Next intake</h2>
<p>Organisers say a second intake is planned, with places reserved for participants from outside Saclepea. Equipment availability remains the limiting factor on numbers.</p>`,
    featuredImage: "/demo/culture.jpg",
    featuredImageAlt: "Illustrative artwork representing Liberian film and culture",
    author: auth("author-4"),
    category: cat("entertainment"),
    tags: ["film", "young creatives", "training"],
    publishDate: "2026-09-12T12:00:00Z",
    featured: false,
    readingTime: 3,
  },
  {
    id: "article-7",
    title: "Traditional dance troupes gather for the county cultural festival",
    slug: "county-cultural-festival-dance-troupes",
    excerpt:
      "Troupes from across Nimba's districts performed over two days, in a festival that doubles as the county's main showcase for masked dance and drumming.",
    content: `<p>Dance troupes from districts across Nimba County gathered in Saclepea for the county's two-day cultural festival, the main annual showcase for masked dance, drumming and traditional dress in this part of Liberia.</p>
<h2>Why the festival matters</h2>
<p>Older performers say the festival is one of the few settings where younger dancers learn the full repertoire rather than isolated pieces, because troupes perform in sequence and watch each other's sets.</p>
<p>Craft stalls ran alongside the performances, selling woven cloth and carved pieces made in the county.</p>
<h2>Broadcast</h2>
<p>Nimba TV recorded both days for broadcast, continuing the station's cultural programming. Selected performances will be carried on the station's YouTube channel.</p>`,
    featuredImage: "/demo/council.jpg",
    featuredImageAlt: "Illustrative artwork representing a cultural gathering in Nimba County",
    author: auth("author-4"),
    category: cat("culture"),
    tags: ["festival", "dance", "heritage"],
    publishDate: "2026-09-11T09:00:00Z",
    featured: false,
    readingTime: 3,
  },
  {
    id: "article-8",
    title: "Talking Nimba: the road question, in full",
    slug: "talking-nimba-the-road-question",
    excerpt:
      "This week's edition of the talk show takes up the condition of feeder roads ahead of the dry season, with callers from four districts.",
    content: `<p>This week's edition of <em>Talking Nimba</em> takes up the condition of the county's feeder roads and what the dry season is expected to change.</p>
<p>The programme takes calls from listeners in four districts, and is broadcast on air and on the station's YouTube channel.</p>`,
    featuredImage: "/demo/road.jpg",
    featuredImageAlt: "Illustrative artwork representing a rural road in Nimba County",
    author: auth("author-1"),
    category: cat("community"),
    tags: ["talking nimba", "roads", "talk show"],
    publishDate: "2026-09-10T18:00:00Z",
    featured: false,
    readingTime: 1,
    youtubeId: "5qap5aO4i9A",
  },
  {
    id: "article-9",
    title: "Rice farmers report a stronger harvest but weaker prices at the gate",
    slug: "rice-farmers-harvest-prices",
    excerpt:
      "Growers in the county's lowland areas describe a better yield than last season, offset by prices offered by buyers arriving at the farm gate.",
    content: `<p>Rice growers working lowland plots in Nimba County describe a stronger harvest than last season, but say the prices offered by buyers arriving at the farm gate have not moved with it.</p>
<h2>Transport sets the price</h2>
<p>Farmers who can move their own crop to market in Saclepea or Ganta report better returns than those selling at the farm gate, where a single buyer often sets the price. Transport cost and road condition are the deciding factors in whether moving the crop is worth it.</p>
<p>Several growers said they store part of the harvest and sell in stages, which requires storage that keeps the crop dry through the remainder of the rains.</p>
<h2>What growers are asking for</h2>
<p>Farmer group representatives have asked for shared storage in the larger towns and for price information to be broadcast, so that growers know the going rate before a buyer arrives.</p>`,
    featuredImage: "/demo/farm.jpg",
    featuredImageAlt: "Illustrative artwork representing rice farming in Nimba County",
    author: auth("author-3"),
    category: cat("business"),
    tags: ["agriculture", "rice", "farm gate", "prices"],
    publishDate: "2026-09-09T07:30:00Z",
    featured: false,
    readingTime: 4,
  },
  {
    id: "article-10",
    title: "District council sitting opens with budget on the agenda",
    slug: "district-council-sitting-budget",
    excerpt:
      "The sitting opened in Saclepea with the district's spending plan first on the order paper, and public seats occupied throughout the morning session.",
    content: `<p>A district council sitting opened in Saclepea with the spending plan first on the order paper, and the public gallery occupied through the morning session.</p>
<h2>On the order paper</h2>
<p>Alongside the budget, the sitting is scheduled to consider market administration, feeder road maintenance and the allocation of a community development fund.</p>
<p>Representatives from several town committees attended to observe the budget item specifically.</p>
<h2>Access to proceedings</h2>
<p>Requests have been made for the order paper to be published in advance of sittings and for a summary of decisions to be posted afterwards. Nimba TV records proceedings where permitted and reports the outcomes.</p>`,
    featuredImage: "/demo/assembly.jpg",
    featuredImageAlt: "Illustrative artwork representing a council sitting in Nimba County",
    author: auth("author-1"),
    category: cat("politics"),
    tags: ["council", "budget", "governance"],
    publishDate: "2026-09-08T11:20:00Z",
    featured: false,
    readingTime: 3,
  },
  {
    id: "article-11",
    title: "Youth volunteers clear drainage ahead of the heaviest rains",
    slug: "youth-volunteers-clear-drainage",
    excerpt:
      "A volunteer group spent three weekends clearing blocked drainage in two Saclepea neighbourhoods that flood every season.",
    content: `<p>A volunteer group has spent three weekends clearing blocked drainage channels in two Saclepea neighbourhoods that take on water every rainy season.</p>
<h2>The same streets, every year</h2>
<p>Residents say the affected streets flood in the same places annually, and that the channels silt up within a season of being cleared. The volunteers worked with hand tools and wheelbarrows borrowed locally.</p>
<p>Householders along the cleared stretches contributed food and water for the work days.</p>
<h2>A maintenance question</h2>
<p>Volunteers are clear that clearing is not a fix: without a maintenance routine the channels will silt again. The group has asked the town administration for a scheduled clearing before each rainy season.</p>`,
    featuredImage: "/demo/youth.jpg",
    featuredImageAlt: "Illustrative artwork representing youth volunteers in Saclepea",
    author: auth("author-2"),
    category: cat("community"),
    tags: ["volunteers", "drainage", "saclepea", "flooding"],
    publishDate: "2026-09-07T15:40:00Z",
    featured: false,
    readingTime: 3,
  },
  {
    id: "article-12",
    title: "Inside the Nimba TV newsroom: how the bulletin is put together",
    slug: "inside-the-nimba-tv-newsroom",
    excerpt:
      "A short film following the Saclepea newsroom through a single day, from the morning diary meeting to the evening bulletin going out.",
    content: `<p>A short film following the Nimba TV newsroom in Saclepea through one working day — the morning diary meeting, reporters heading out into the districts, the edit, and the evening bulletin going to air.</p>
<p>The station was founded in 2018 by a group of local journalists, and the newsroom has grown alongside the county's appetite for reliable local reporting.</p>`,
    featuredImage: "/demo/broadcast.jpg",
    featuredImageAlt: "Illustrative artwork representing a broadcast tower in Nimba County",
    author: auth("author-1"),
    category: cat("community"),
    tags: ["newsroom", "behind the scenes", "nimba tv"],
    publishDate: "2026-09-06T13:00:00Z",
    featured: false,
    readingTime: 1,
    youtubeId: "jNQXAC9IVRw",
  },
  {
    id: "article-13",
    title: "River crossing repaired after two months out of service",
    slug: "river-crossing-repaired",
    excerpt:
      "The crossing linking two towns on opposite banks is carrying traffic again, cutting a detour that had added more than an hour to the journey.",
    content: `<p>A river crossing linking two towns on opposite banks is carrying traffic again after two months out of service, ending a detour that had added more than an hour to a journey of a few kilometres.</p>
<h2>What the closure cost</h2>
<p>Traders on both banks reported reduced sales through the closure, and pupils crossing to attend school were among those most affected. Some households moved temporarily to stay with relatives on the school side.</p>
<h2>Durability is the open question</h2>
<p>Residents have asked what maintenance schedule applies now that the crossing is back in service, noting that the previous failure followed a period without inspection.</p>`,
    featuredImage: "/demo/river.jpg",
    featuredImageAlt: "Illustrative artwork representing a river crossing in Nimba County",
    author: auth("author-2"),
    category: cat("community"),
    tags: ["infrastructure", "river", "transport"],
    publishDate: "2026-09-05T09:10:00Z",
    featured: false,
    readingTime: 3,
  },
  {
    id: "article-14",
    title: "Women's trading group opens a shared storeroom in Saclepea",
    slug: "womens-trading-group-storeroom",
    excerpt:
      "A group of market women has opened shared storage, allowing members to hold stock rather than sell everything on the day it arrives.",
    content: `<p>A women's trading group in Saclepea has opened a shared storeroom, giving members somewhere to hold stock rather than selling everything the day it arrives at market.</p>
<h2>Why storage changes the economics</h2>
<p>Traders without storage are obliged to clear their stock daily, which means accepting whatever the price is that afternoon. Being able to hold goods for even a few days lets members sell into a better price.</p>
<p>The group funded the storeroom through member contributions collected over the past year and manages access on a rota.</p>
<h2>Growing the scheme</h2>
<p>Membership is capped by the size of the room, and the group is looking at a second site. Organisers say the model is straightforward enough for other markets in the county to copy.</p>`,
    featuredImage: "/demo/market-women.jpg",
    featuredImageAlt: "Illustrative artwork representing a women's trading group in Saclepea",
    author: auth("author-3"),
    category: cat("business"),
    tags: ["market women", "storage", "cooperative"],
    publishDate: "2026-09-04T08:00:00Z",
    featured: false,
    readingTime: 3,
  },
];

export const getArticleBySlug = (slug: string) => articles.find((a) => a.slug === slug);

export const getFeaturedArticles = () => articles.filter((a) => a.featured);

export const getBreakingArticles = () => articles.filter((a) => a.breaking);

export const getArticlesByCategory = (slug: string) =>
  articles.filter((a) => a.category.slug === slug);

/**
 * Same section first, then stories sharing a tag, then the most recent of
 * anything else — so the related row is always full rather than leaving a
 * two-thirds-empty grid on thinly covered sections.
 */
export function getRelatedArticles(article: NewsArticle, limit = 3) {
  const chosen: NewsArticle[] = [];
  const take = (candidates: NewsArticle[]) => {
    for (const candidate of candidates) {
      if (chosen.length >= limit) return;
      if (candidate.id === article.id) continue;
      if (chosen.some((c) => c.id === candidate.id)) continue;
      chosen.push(candidate);
    }
  };

  const newest = [...articles].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  take(newest.filter((a) => a.category.slug === article.category.slug));
  take(newest.filter((a) => a.tags.some((t) => article.tags.includes(t))));
  take(newest);

  return chosen;
}

export function searchArticles(query: string, pool: NewsArticle[] = articles) {
  const q = query.trim().toLowerCase();
  if (!q) return pool;
  return pool.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.content.toLowerCase().includes(q) ||
      a.tags.some((t) => t.toLowerCase().includes(q))
  );
}

export function filterArticles(
  filters: { category?: string; author?: string; dateFrom?: string; dateTo?: string },
  pool: NewsArticle[] = articles
) {
  return pool.filter((a) => {
    if (filters.category && a.category.slug !== filters.category) return false;
    if (filters.author && a.author.id !== filters.author) return false;
    if (filters.dateFrom && new Date(a.publishDate) < new Date(filters.dateFrom)) return false;
    if (filters.dateTo && new Date(a.publishDate) > new Date(filters.dateTo)) return false;
    return true;
  });
}

export function paginateArticles(items: NewsArticle[], page: number, perPage: number) {
  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const start = (currentPage - 1) * perPage;
  return {
    articles: items.slice(start, start + perPage),
    total: items.length,
    totalPages,
    currentPage,
  };
}
