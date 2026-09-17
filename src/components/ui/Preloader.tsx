"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * Brand intro, shown once per browsing session.
 *
 * Whether it should appear at all is decided before first paint by the inline
 * script in the root layout, which stamps data-intro="skip" on <html> for
 * repeat visits and for reduced-motion users — so there is no navy flash on the
 * second page view, and no state to set synchronously here. This component only
 * runs the timed fade for the visits that do show it, then unmounts.
 *
 * The page renders underneath from the first byte; this is an overlay that
 * removes itself, never a gate.
 */
export default function Preloader() {
  const [state, setState] = useState<"showing" | "leaving" | "gone">("showing");

  useEffect(() => {
    const leave = window.setTimeout(() => setState("leaving"), 620);
    const done = window.setTimeout(() => setState("gone"), 1120);
    return () => {
      window.clearTimeout(leave);
      window.clearTimeout(done);
    };
  }, []);

  if (state === "gone") return null;

  return (
    <div
      id="nimba-preloader"
      aria-hidden
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-deep transition-opacity duration-500 ${
        state === "leaving" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <Image
        src="/brand/logo-192.png"
        alt=""
        width={96}
        height={96}
        priority
        className="h-20 w-20 sm:h-24 sm:w-24"
      />
      <span className="eyebrow mt-5 text-white/70">Nimba Online Television</span>
      <div className="mt-4 h-0.5 w-28 overflow-hidden bg-white/15">
        <div className="animate-sweep h-full w-1/3 bg-flag-red" />
      </div>
    </div>
  );
}
