import type { NewsArticle } from "@/types";
import { authors } from "./mock-authors";
import { categories } from "./mock-categories";

const cat = (slug: string) => categories.find((c) => c.slug === slug)!;
const auth = (id: string) => authors.find((a) => a.id === id)!;

export const articles: NewsArticle[] = [
  {
    id: "article-1",
    title: "Liberia's Parliament Passes Landmark Education Reform Bill",
    slug: "liberia-parliament-passes-education-reform-bill",
    excerpt:
      "The House of Representatives has unanimously approved a comprehensive education reform bill aimed at improving access and quality across the nation.",
    content: `<p>In a historic session on Thursday, Liberia's House of Representatives passed the Education Reform Bill of 2026 with overwhelming bipartisan support. The legislation, which now moves to the Senate, represents the most significant overhaul of the country's education system in over a decade.</p>
    <p>Key provisions of the bill include increased funding for rural schools, mandatory teacher training programs, and the establishment of a national curriculum review board. Education advocates have praised the move as a critical step toward addressing longstanding gaps in Liberia's educational infrastructure.</p>
    <p>"This bill puts our children first," said Representative Maria Johnson, one of the bill's primary sponsors. "Every Liberian child deserves access to quality education, regardless of where they live."</p>
    <p>The Ministry of Education has pledged to work closely with lawmakers to ensure smooth implementation once the bill becomes law. Stakeholders including UNICEF and local NGOs have expressed support for the reforms.</p>
    <p>Critics, however, have raised concerns about funding mechanisms and the timeline for implementation. The Senate is expected to begin deliberations on the bill within the next two weeks.</p>`,
    featuredImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=675&fit=crop",
    author: auth("author-1"),
    category: cat("politics"),
    tags: ["education", "parliament", "reform", "legislation"],
    publishDate: "2026-06-18T09:00:00Z",
    featured: true,
    readingTime: 4,
  },
  {
    id: "article-2",
    title: "Central Bank Announces New Monetary Policy to Stabilize Economy",
    slug: "central-bank-new-monetary-policy",
    excerpt:
      "The Central Bank of Liberia unveils measures to address inflation and strengthen the Liberian dollar amid growing economic pressures.",
    content: `<p>The Central Bank of Liberia (CBL) announced a series of monetary policy adjustments designed to stabilize the economy and curb inflation, which has reached its highest level in three years.</p>
    <p>Governor Aloysius Tarlue outlined the new measures during a press briefing in Monrovia, emphasizing the bank's commitment to maintaining price stability while supporting economic growth.</p>
    <p>Among the key changes are adjusted reserve requirements for commercial banks, enhanced foreign exchange monitoring, and new incentives for domestic production. The CBL also announced plans to increase its foreign currency reserves through strategic partnerships.</p>
    <p>Financial analysts have responded cautiously to the announcement, noting that while the measures are sound in principle, their effectiveness will depend on consistent implementation and broader fiscal policy coordination.</p>`,
    featuredImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=675&fit=crop",
    author: auth("author-3"),
    category: cat("business"),
    tags: ["economy", "central bank", "monetary policy", "finance"],
    publishDate: "2026-06-18T07:30:00Z",
    featured: true,
    readingTime: 3,
  },
  {
    id: "article-3",
    title: "Community Health Workers Deployed to Remote Nimba County Villages",
    slug: "community-health-workers-nimba-county",
    excerpt:
      "A new initiative brings trained health workers to underserved communities, improving access to basic healthcare services.",
    content: `<p>A partnership between the Ministry of Health and international NGOs has launched a program deploying community health workers to remote villages in Nimba County, where access to medical facilities has been limited for decades.</p>
    <p>Over 50 trained health workers will serve communities across the county, providing basic medical care, health education, and connecting patients with regional hospitals when needed.</p>
    <p>Local leaders have welcomed the initiative, noting that residents previously had to travel hours to reach the nearest clinic. "This changes everything for our people," said Chief David Kollie of Yekepa.</p>
    <p>The program includes mobile clinics equipped with essential medicines and diagnostic tools, as well as a telemedicine component connecting remote workers with specialists in Monrovia.</p>`,
    featuredImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=675&fit=crop",
    author: auth("author-4"),
    category: cat("health"),
    tags: ["healthcare", "nimba county", "community health", "rural"],
    publishDate: "2026-06-17T14:00:00Z",
    featured: true,
    readingTime: 3,
  },
  {
    id: "article-4",
    title: "Lone Star FC Secures Victory in Continental Qualifier",
    slug: "lone-star-fc-continental-victory",
    excerpt:
      "Liberia's national football team earns a crucial win in their CAF qualification campaign with a commanding performance.",
    content: `<p>Lone Star FC delivered an impressive performance at the SKD Stadium, securing a 3-1 victory that keeps their continental qualification hopes alive.</p>
    <p>Striker Emmanuel Boakai opened the scoring in the 23rd minute, followed by goals from midfielders Joseph Nagbe and Samuel Johnson. The team demonstrated improved tactical discipline under coach James Debbah.</p>
    <p>Fans packed the stadium in a show of national pride, with celebrations continuing long after the final whistle. The victory moves Liberia to second place in their qualifying group.</p>`,
    featuredImage: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&h=675&fit=crop",
    author: auth("author-5"),
    category: cat("sports"),
    tags: ["football", "lone star", "CAF", "qualifier"],
    publishDate: "2026-06-17T11:00:00Z",
    featured: false,
    readingTime: 2,
  },
  {
    id: "article-5",
    title: "Liberian Tech Startup Raises $2M for Digital Payment Platform",
    slug: "liberian-tech-startup-digital-payments",
    excerpt:
      "Monrovia-based fintech company PayLib secures major funding to expand mobile payment services across West Africa.",
    content: `<p>PayLib, a Monrovia-based financial technology startup, has closed a $2 million seed funding round led by African venture capital firms. The company plans to use the investment to expand its mobile payment platform across Liberia and neighboring countries.</p>
    <p>Founded in 2023 by Liberian entrepreneurs Samuel Weah and Diana Cooper, PayLib has already processed over $10 million in transactions and serves more than 50,000 users.</p>
    <p>"This funding validates our vision of financial inclusion for all Liberians," said CEO Weah. "We're building the infrastructure that will power commerce across the region."</p>
    <p>The startup's success highlights the growing tech ecosystem in Liberia, where government initiatives to promote digital innovation are beginning to bear fruit.</p>`,
    featuredImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop",
    author: auth("author-3"),
    category: cat("technology"),
    tags: ["fintech", "startup", "digital payments", "innovation"],
    publishDate: "2026-06-16T16:00:00Z",
    featured: false,
    readingTime: 3,
  },
  {
    id: "article-6",
    title: "Annual Cultural Festival Draws Thousands to Monrovia",
    slug: "annual-cultural-festival-monrovia",
    excerpt:
      "The Liberia Cultural Festival celebrates heritage, music, and arts with record attendance this year.",
    content: `<p>Monrovia's Centennial Pavilion hosted the largest cultural festival in the nation's history, with over 15,000 attendees celebrating Liberian heritage through music, dance, art, and cuisine.</p>
    <p>The three-day event featured performances from renowned Liberian artists, traditional dance troupes, and international guest performers. Food vendors offered dishes representing all 15 counties.</p>
    <p>Organizers emphasized the festival's role in preserving cultural identity and promoting unity among Liberia's diverse communities. "Culture is our bridge," said festival director Amos Kromah.</p>`,
    featuredImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=675&fit=crop",
    author: auth("author-2"),
    category: cat("entertainment"),
    tags: ["culture", "festival", "music", "heritage"],
    publishDate: "2026-06-16T10:00:00Z",
    featured: false,
    readingTime: 2,
  },
  {
    id: "article-7",
    title: "Ganta Youth Initiative Creates 200 Jobs Through Agricultural Training",
    slug: "ganta-youth-agricultural-training",
    excerpt:
      "A grassroots program in Ganta empowers young people with farming skills and connects them to markets.",
    content: `<p>The Ganta Youth Empowerment Initiative has successfully trained 200 young people in modern agricultural techniques, creating sustainable employment opportunities in Nimba County.</p>
    <p>Participants received training in crop management, livestock farming, and agribusiness, along with startup capital to establish their own farms. The program has already produced measurable results, with graduates reporting average income increases of 150%.</p>
    <p>"Before this program, I had no direction," said graduate Peter Flomo. "Now I employ three people on my farm and supply vegetables to markets in Ganta and Sanniquellie."</p>
    <p>The initiative, funded by a combination of local contributions and international development grants, plans to expand to neighboring counties next year.</p>`,
    featuredImage: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&h=675&fit=crop",
    author: auth("author-2"),
    category: cat("community-news"),
    tags: ["youth", "agriculture", "ganta", "employment"],
    publishDate: "2026-06-15T08:00:00Z",
    featured: true,
    readingTime: 3,
  },
  {
    id: "article-8",
    title: "University of Liberia Launches New Engineering Program",
    slug: "university-liberia-engineering-program",
    excerpt:
      "The nation's oldest university introduces a four-year engineering degree to meet growing demand for technical professionals.",
    content: `<p>The University of Liberia has announced the launch of a new Bachelor of Engineering program, the first of its kind at the institution in over 20 years. The program will offer specializations in civil, electrical, and computer engineering.</p>
    <p>University President Dr. Julius Sawolo Nelson said the program responds to critical workforce needs identified by Liberia's development partners and private sector employers.</p>
    <p>Initial enrollment is capped at 60 students, with plans to expand as infrastructure and faculty capacity grow. Partnerships with engineering firms will provide internship opportunities for students.</p>`,
    featuredImage: "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=675&fit=crop",
    author: auth("author-4"),
    category: cat("education"),
    tags: ["university", "engineering", "higher education", "STEM"],
    publishDate: "2026-06-14T12:00:00Z",
    featured: false,
    readingTime: 2,
  },
  {
    id: "article-9",
    title: "President Addresses Nation on Infrastructure Development Plans",
    slug: "president-infrastructure-development-address",
    excerpt:
      "In a televised address, the President outlines ambitious road and bridge projects connecting rural communities.",
    content: `<p>The President delivered a nationally televised address outlining a comprehensive infrastructure development plan that includes over 500 kilometers of new roads and 12 major bridge projects across Liberia.</p>
    <p>The plan prioritizes connecting rural counties to economic centers, with particular focus on Nimba, Lofa, and Grand Gedeh counties. Funding will come from a combination of government allocation and international development loans.</p>
    <p>Opposition leaders have called for greater transparency in the procurement process, while civil society groups have welcomed the focus on rural connectivity.</p>`,
    featuredImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=675&fit=crop",
    author: auth("author-1"),
    category: cat("politics"),
    tags: ["president", "infrastructure", "development", "roads"],
    publishDate: "2026-06-13T19:00:00Z",
    featured: false,
    readingTime: 3,
  },
  {
    id: "article-10",
    title: "WHO Commends Liberia's Progress in Malaria Prevention",
    slug: "who-malaria-prevention-progress",
    excerpt:
      "The World Health Organization recognizes Liberia's significant reduction in malaria cases over the past five years.",
    content: `<p>The World Health Organization has commended Liberia for achieving a 40% reduction in malaria cases since 2021, citing improved distribution of insecticide-treated bed nets and expanded access to diagnostic testing.</p>
    <p>Health Minister Dr. Louise Kpoto accepted the recognition at a regional health summit in Accra, noting that continued investment in prevention is essential to reaching elimination targets.</p>
    <p>Community health volunteers have played a crucial role in the success, conducting door-to-door awareness campaigns and ensuring bed net usage in high-risk areas.</p>`,
    featuredImage: "https://images.unsplash.com/photo-1584036561567-daf8fd068578?w=1200&h=675&fit=crop",
    author: auth("author-4"),
    category: cat("health"),
    tags: ["malaria", "WHO", "public health", "prevention"],
    publishDate: "2026-06-12T09:00:00Z",
    featured: false,
    readingTime: 2,
  },
  {
    id: "article-11",
    title: "Rubber Industry Sees Recovery as Global Prices Rise",
    slug: "rubber-industry-recovery-global-prices",
    excerpt:
      "Liberian rubber farmers benefit from increased global demand, boosting local economies in rubber-producing counties.",
    content: `<p>Liberia's rubber industry is experiencing a resurgence as global rubber prices reach their highest levels since 2019. Farmers in Nimba, Grand Gedeh, and Maryland counties report increased incomes and renewed investment in plantations.</p>
    <p>The Firestone Natural Rubber Company announced plans to expand operations, while smallholder farmers are forming cooperatives to negotiate better prices. The Ministry of Agriculture is supporting the sector with improved seedlings and training programs.</p>`,
    featuredImage: "https://images.unsplash.com/photo-1593113598332-cd288d649051?w=1200&h=675&fit=crop",
    author: auth("author-3"),
    category: cat("business"),
    tags: ["rubber", "agriculture", "economy", "exports"],
    publishDate: "2026-06-11T14:00:00Z",
    featured: false,
    readingTime: 2,
  },
  {
    id: "article-12",
    title: "Local Film Festival Showcases Liberian Storytelling Talent",
    slug: "local-film-festival-liberian-storytelling",
    excerpt:
      "Emerging filmmakers present their work at Monrovia's first independent film festival, celebrating authentic Liberian narratives.",
    content: `<p>Monrovia hosted its inaugural Independent Film Festival, showcasing 25 films from Liberian and diaspora filmmakers. The event highlighted the growing creative industry and the power of local storytelling.</p>
    <p>Best Picture went to "Voices of the Forest," a documentary about environmental conservation in Sapo National Park. The festival also featured workshops on filmmaking, screenwriting, and production for aspiring creators.</p>`,
    featuredImage: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&h=675&fit=crop",
    author: auth("author-2"),
    category: cat("entertainment"),
    tags: ["film", "festival", "storytelling", "arts"],
    publishDate: "2026-06-10T18:00:00Z",
    featured: false,
    readingTime: 2,
  },
];

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getFeaturedArticles(): NewsArticle[] {
  return articles.filter((a) => a.featured);
}

export function getArticlesByCategory(categorySlug: string): NewsArticle[] {
  return articles.filter((a) => a.category.slug === categorySlug);
}

export function getRelatedArticles(article: NewsArticle, limit = 4): NewsArticle[] {
  return articles
    .filter(
      (a) =>
        a.id !== article.id &&
        (a.category.slug === article.category.slug ||
          a.tags.some((t) => article.tags.includes(t)))
    )
    .slice(0, limit);
}

export function searchArticles(query: string): NewsArticle[] {
  const q = query.toLowerCase();
  return articles.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.content.toLowerCase().includes(q) ||
      a.tags.some((t) => t.toLowerCase().includes(q))
  );
}

export function filterArticles(filters: {
  category?: string;
  author?: string;
  dateFrom?: string;
  dateTo?: string;
}): NewsArticle[] {
  return articles.filter((a) => {
    if (filters.category && a.category.slug !== filters.category) return false;
    if (filters.author && a.author.id !== filters.author) return false;
    if (filters.dateFrom && new Date(a.publishDate) < new Date(filters.dateFrom))
      return false;
    if (filters.dateTo && new Date(a.publishDate) > new Date(filters.dateTo))
      return false;
    return true;
  });
}

export function paginateArticles(
  items: NewsArticle[],
  page: number,
  perPage: number
) {
  const total = items.length;
  const totalPages = Math.ceil(total / perPage);
  const start = (page - 1) * perPage;
  return {
    articles: items.slice(start, start + perPage),
    total,
    totalPages,
    currentPage: page,
  };
}
