/**
 * Generates demo feature images.
 *
 * These are deliberately stylised brand-coloured abstractions, not stand-ins for
 * real photography: the site ships with placeholder art that nobody can mistake
 * for news photos from Nimba County. Dimensions vary wildly on purpose so the
 * layout's object-cover fitting is visible under real conditions.
 */
import sharp from "sharp";
import { mkdirSync } from "fs";

const OUT = "/home/user/nimba-tv/public/demo";
mkdirSync(OUT, { recursive: true });

const NAVY = "#0A2647";
const AZURE = "#1B9DF0";
const RED = "#D61F26";
const SAND = "#E8EEF6";

// Each entry pairs a subject with a size chosen to stress a different crop.
const SPECS = [
  { name: "assembly",     w: 3000, h: 2000, hue: [NAVY, AZURE], accent: RED,   motif: "arcs" },
  { name: "market",       w: 800,  h: 1200, hue: [RED, "#F2724B"], accent: NAVY, motif: "bars" },
  { name: "classroom",    w: 1000, h: 1000, hue: [AZURE, "#6FD0FF"], accent: NAVY, motif: "grid" },
  { name: "clinic",       w: 2400, h: 800,  hue: ["#0E7C66", AZURE], accent: "#FFFFFF", motif: "arcs" },
  { name: "football",     w: 640,  h: 480,  hue: ["#12694A", "#48B36B"], accent: "#FFFFFF", motif: "rings" },
  { name: "broadcast",    w: 1600, h: 900,  hue: [NAVY, "#1B4E8F"], accent: AZURE, motif: "signal" },
  { name: "culture",      w: 900,  h: 1600, hue: ["#8A2B86", RED], accent: "#FFD166", motif: "rings" },
  { name: "road",         w: 2000, h: 1125, hue: ["#6B4E2E", "#C08A4A"], accent: SAND, motif: "bars" },
  { name: "farm",         w: 1200, h: 1500, hue: ["#3F6B22", "#8DB63C"], accent: SAND, motif: "grid" },
  { name: "youth",        w: 480,  h: 640,  hue: [AZURE, "#B06FFF"], accent: "#FFFFFF", motif: "rings" },
  { name: "river",        w: 2600, h: 1000, hue: ["#0B4F7A", AZURE], accent: SAND, motif: "arcs" },
  { name: "council",      w: 1400, h: 1400, hue: [NAVY, RED], accent: SAND, motif: "bars" },
  { name: "studio",       w: 1920, h: 1080, hue: ["#1A1A2E", NAVY], accent: RED, motif: "signal" },
  { name: "market-women", w: 1100, h: 730,  hue: [RED, "#FF9A3C"], accent: NAVY, motif: "grid" },
];

// Small deterministic PRNG so re-running the script reproduces the same art.
const rng = (seed) => {
  let s = [...seed].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
};

function motifMarkup(motif, r, W, H, accent) {
  const parts = [];
  const big = Math.max(W, H);
  if (motif === "arcs") {
    for (let i = 0; i < 7; i++) {
      const cy = H * (0.55 + r() * 0.5);
      const rad = big * (0.25 + i * 0.11);
      parts.push(`<circle cx="${W * (0.2 + r() * 0.6)}" cy="${cy}" r="${rad}" fill="none" stroke="${accent}" stroke-opacity="${0.10 + r() * 0.16}" stroke-width="${big * 0.012}"/>`);
    }
  } else if (motif === "bars") {
    for (let i = 0; i < 14; i++) {
      const bw = W * (0.03 + r() * 0.05);
      parts.push(`<rect x="${r() * W}" y="${H * (0.3 + r() * 0.6)}" width="${bw}" height="${H}" fill="${accent}" fill-opacity="${0.08 + r() * 0.18}"/>`);
    }
  } else if (motif === "grid") {
    const step = big * 0.07;
    for (let x = 0; x < W; x += step) {
      parts.push(`<line x1="${x}" y1="0" x2="${x + W * 0.1}" y2="${H}" stroke="${accent}" stroke-opacity="0.10" stroke-width="${big * 0.004}"/>`);
    }
    for (let y = 0; y < H; y += step * 1.6) {
      parts.push(`<line x1="0" y1="${y}" x2="${W}" y2="${y}" stroke="${accent}" stroke-opacity="0.07" stroke-width="${big * 0.003}"/>`);
    }
  } else if (motif === "rings") {
    const cx = W * 0.5, cy = H * 0.46;
    for (let i = 1; i <= 6; i++) {
      parts.push(`<circle cx="${cx}" cy="${cy}" r="${big * 0.07 * i}" fill="none" stroke="${accent}" stroke-opacity="${0.32 - i * 0.04}" stroke-width="${big * 0.01}"/>`);
    }
  } else if (motif === "signal") {
    const cx = W * 0.5, cy = H * 0.62;
    parts.push(`<path d="M ${cx - big * 0.09} ${cy} L ${cx} ${cy - big * 0.3} L ${cx + big * 0.09} ${cy} Z" fill="${accent}" fill-opacity="0.5"/>`);
    for (let i = 1; i <= 4; i++) {
      const rr = big * 0.08 * i;
      parts.push(`<path d="M ${cx - rr} ${cy - big * 0.3} A ${rr} ${rr} 0 0 1 ${cx + rr} ${cy - big * 0.3}" fill="none" stroke="${accent}" stroke-opacity="${0.4 - i * 0.07}" stroke-width="${big * 0.012}"/>`);
    }
  }
  return parts.join("");
}

for (const spec of SPECS) {
  const { name, w: W, h: H, hue, accent, motif } = spec;
  const r = rng(name);
  // Horizon band grounds the composition so crops from any edge stay balanced.
  const horizon = H * (0.58 + r() * 0.12);

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
    <defs>
      <linearGradient id="sky" x1="0" y1="0" x2="0.3" y2="1">
        <stop offset="0" stop-color="${hue[1]}"/><stop offset="1" stop-color="${hue[0]}"/>
      </linearGradient>
      <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="${hue[0]}"/><stop offset="1" stop-color="#05121F"/>
      </linearGradient>
      <filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3"/>
        <feColorMatrix type="saturate" values="0"/>
        <feComponentTransfer><feFuncA type="linear" slope="0.055"/></feComponentTransfer>
      </filter>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#sky)"/>
    ${motifMarkup(motif, r, W, H, accent)}
    <path d="M 0 ${horizon} Q ${W * 0.3} ${horizon - H * 0.09} ${W * 0.6} ${horizon + H * 0.02} T ${W} ${horizon - H * 0.03} L ${W} ${H} L 0 ${H} Z" fill="url(#ground)" fill-opacity="0.92"/>
    <rect width="${W}" height="${H}" filter="url(#grain)" fill="#fff" fill-opacity="0.5"/>
  </svg>`;

  await sharp(Buffer.from(svg)).jpeg({ quality: 80, mozjpeg: true }).toFile(`${OUT}/${name}.jpg`);
  console.log(`${name}.jpg  ${W}x${H}`);
}
