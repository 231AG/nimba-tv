export const siteConfig = {
  name: "Nimba TV",
  legalName: "Nimba Online Television",
  tagline: "Bringing information to your door",
  description:
    "Nimba TV is a Liberian television station based in Saclepea, Nimba County. Founded in 2018 by local journalists, it covers news, current affairs, culture and entertainment for Nimba County and audiences across Liberia.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://nimbatv.org",
  established: 2018,
  city: "Saclepea",
  county: "Nimba County",
  country: "Liberia",
  mission:
    "To give the people of Nimba County a trusted platform for news, information and entertainment, and to promote Liberian culture and heritage.",
  vision:
    "To be Liberia's most trusted county broadcaster — informing communities, amplifying local voices and strengthening national understanding.",
  contact: {
    address: "Saclepea City, Nimba County, Liberia",
    phone: "+231 770464581",
    email: "info@nimbatv.org",
  },
  social: {
    facebook: "https://www.facebook.com/share/19pyCMuuCZ/",
    youtube: "https://youtube.com/@nimbatv-3",
    tiktok: "https://www.tiktok.com/@nimba.tv",
    // Same line as the newsroom phone, formatted for wa.me (digits only).
    whatsapp: "https://wa.me/231770464581",
  },
  /** Section list used by the header, footer and category rail. */
  categories: [
    { name: "Politics", slug: "politics" },
    { name: "Community", slug: "community" },
    { name: "Education", slug: "education" },
    { name: "Health", slug: "health" },
    { name: "Business", slug: "business" },
    { name: "Sports", slug: "sports" },
    { name: "Culture", slug: "culture" },
    { name: "Entertainment", slug: "entertainment" },
  ],
} as const;
