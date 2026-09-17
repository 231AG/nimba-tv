import type { Programme } from "@/types";

/** Demo schedule reflecting the kinds of programming Nimba TV broadcasts. */
export const programmes: Programme[] = [
  {
    id: "prog-1",
    title: "Nimba TV Evening News",
    slug: "evening-news",
    description: "The day's county and national headlines from the Saclepea studio, in English and Mano.",
    image: "/demo/studio.jpg",
    schedule: "Weeknights · 7:00 PM",
    type: "news",
    youtubeId: "aqz-KE-bpKQ",
  },
  {
    id: "prog-2",
    title: "Talking Nimba",
    slug: "talking-nimba",
    description: "A weekly call-in discussion on the issues facing the county, with guests and listener questions.",
    image: "/demo/road.jpg",
    schedule: "Thursdays · 8:00 PM",
    type: "talk",
    youtubeId: "5qap5aO4i9A",
  },
  {
    id: "prog-3",
    title: "Our Heritage",
    slug: "our-heritage",
    description: "Liberian music, dance and craft, recorded on location across Nimba's districts.",
    image: "/demo/culture.jpg",
    schedule: "Saturdays · 6:30 PM",
    type: "culture",
  },
  {
    id: "prog-4",
    title: "Learning Hour",
    slug: "learning-hour",
    description: "Educational programming for school-age children and adult learners.",
    image: "/demo/classroom.jpg",
    schedule: "Weekdays · 4:00 PM",
    type: "education",
  },
  {
    id: "prog-5",
    title: "County Sports Round-up",
    slug: "county-sports",
    description: "Results, highlights and reaction from county football and athletics.",
    image: "/demo/football.jpg",
    schedule: "Sundays · 7:30 PM",
    type: "news",
  },
  {
    id: "prog-6",
    title: "Nimba Showcase",
    slug: "nimba-showcase",
    description: "Music videos, comedy and short films from Liberian artists and filmmakers.",
    image: "/demo/youth.jpg",
    schedule: "Fridays · 9:00 PM",
    type: "entertainment",
  },
];

export const getProgrammeBySlug = (slug: string) => programmes.find((p) => p.slug === slug);
