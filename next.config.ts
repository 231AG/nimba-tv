import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /*
   * Deployed on Netlify, whose Next.js runtime serves next/image through the
   * Netlify Image CDN. Optimisation is therefore left on: every feature image
   * goes out resized and in a modern format, with a srcset built from the
   * `sizes` each <Figure> declares. Fitting is handled separately, in the
   * layout, by <Figure>'s aspect-ratio box and object-cover crop.
   */
};

export default nextConfig;
