import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, formatDistanceToNowStrict, isAfter, subDays } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  return format(new Date(date), "d MMMM yyyy");
}

export function formatShortDate(date: string) {
  return format(new Date(date), "d MMM yyyy");
}

/** Recent stories read better as "3 hours ago"; older ones as a plain date. */
export function formatSmartDate(date: string) {
  const d = new Date(date);
  return isAfter(d, subDays(new Date(), 2))
    ? `${formatDistanceToNowStrict(d)} ago`
    : format(d, "d MMM yyyy");
}

export function calculateReadingTime(html: string): number {
  const words = html.replace(/<[^>]+>/g, " ").trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

/** Accepts a full YouTube link or a bare id, and returns the id. */
export function youtubeId(input: string): string {
  const match = input.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|live\/|shorts\/)|youtu\.be\/)([\w-]{11})/
  );
  return match ? match[1] : input;
}

export function youtubeWatchUrl(idOrUrl: string) {
  return `https://www.youtube.com/watch?v=${youtubeId(idOrUrl)}`;
}

export function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
}
