import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /*
     * The site is served from Cloudflare Pages, which does not run Next's image
     * optimisation endpoint. Images ship as authored, so keep source files
     * reasonably sized. Every image is still rendered through <Figure>, which
     * crops with object-cover — fitting is a layout concern here, not an
     * optimisation one.
     */
    unoptimized: true,
  },
};

export default nextConfig;
