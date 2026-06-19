import type { Video } from "@/types";

export const videos: Video[] = [
  {
    id: "video-1",
    title: "Nimba TV Evening News - Full Broadcast",
    thumbnail: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=450&fit=crop",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: "Watch the complete evening news broadcast covering today's top stories from across Liberia.",
    publishDate: "2026-06-18T18:00:00Z",
    type: "broadcast",
  },
  {
    id: "video-2",
    title: "Exclusive Interview: Minister of Education on School Reforms",
    thumbnail: "https://images.unsplash.com/photo-1577561406609-5a0927a45752?w=800&h=450&fit=crop",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: "An in-depth conversation with the Minister of Education about upcoming reforms and investment in schools.",
    publishDate: "2026-06-17T14:00:00Z",
    type: "interview",
  },
  {
    id: "video-3",
    title: "Special Report: Rural Healthcare Access in Nimba County",
    thumbnail: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=450&fit=crop",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: "Our investigative team examines healthcare challenges and solutions in rural communities.",
    publishDate: "2026-06-16T10:00:00Z",
    type: "special-report",
  },
  {
    id: "video-4",
    title: "Nimba TV Morning Brief - June 18, 2026",
    thumbnail: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&h=450&fit=crop",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: "Start your day with the latest headlines and weather updates.",
    publishDate: "2026-06-18T07:00:00Z",
    type: "broadcast",
  },
  {
    id: "video-5",
    title: "Business Leaders Forum: Economic Outlook 2026",
    thumbnail: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=450&fit=crop",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: "Leading business figures discuss Liberia's economic prospects for the remainder of 2026.",
    publishDate: "2026-06-15T16:00:00Z",
    type: "interview",
  },
  {
    id: "video-6",
    title: "Community Spotlight: Youth Empowerment in Ganta",
    thumbnail: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=450&fit=crop",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: "How young entrepreneurs in Ganta are building businesses and creating jobs.",
    publishDate: "2026-06-14T12:00:00Z",
    type: "special-report",
  },
];

export function getVideoById(id: string): Video | undefined {
  return videos.find((v) => v.id === id);
}

export function getVideosByType(type: Video["type"]): Video[] {
  return videos.filter((v) => v.type === type);
}
