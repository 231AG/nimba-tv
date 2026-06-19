/**
 * Sanity.io Client Placeholder
 *
 * When ready to connect Sanity:
 * 1. npm install @sanity/client @sanity/image-url next-sanity
 * 2. Set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET in .env.local
 * 3. Replace mock data imports with Sanity queries
 */

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: process.env.NODE_ENV === "production",
};

// Placeholder client - uncomment when Sanity is connected
// import { createClient } from "next-sanity";
// export const sanityClient = createClient(sanityConfig);

export const isSanityConfigured = (): boolean => {
  return (
    !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== "your-project-id"
  );
};
