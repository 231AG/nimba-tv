import type { Metadata, Viewport } from "next";
import { Fraunces, Newsreader, Public_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/ui/Preloader";
import { generateSEO } from "@/lib/seo";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/structured-data";

/* Display: an optical-size serif with enough character to carry a masthead. */
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

/* Reading: a text face cut specifically for news. */
const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

/* Interface: navigation, labels, meta — deliberately not Inter. */
const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = generateSEO();

export const viewport: Viewport = {
  themeColor: "#0a2647",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${newsreader.variable} ${publicSans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateWebSiteSchema()) }}
        />
        {/*
          Decide before first paint whether the intro runs, so a repeat visit
          never flashes navy. Also covers reduced-motion users.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=sessionStorage.getItem("nimbatv:intro")==="1";var m=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(s||m){document.documentElement.setAttribute("data-intro","skip");}else{sessionStorage.setItem("nimbatv:intro","1");}}catch(e){}})();`,
          }}
        />
        {/* Without JavaScript the intro overlay must never gate the page. */}
        <noscript>
          <style>{`#nimba-preloader{display:none!important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-screen flex-col">
        <Preloader />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[110] focus:bg-navy focus:px-4 focus:py-2 focus:font-ui focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
