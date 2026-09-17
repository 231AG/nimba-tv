/**
 * Derives the site's logo assets from the Nimba TV emblem.
 * Flood-fills the white background from the edges so the mark can sit on navy,
 * keeping interior whites (the inner disc, the flag stars) intact.
 */
import sharp from "sharp";
import { mkdirSync } from "fs";

const SRC = "/root/.claude/uploads/3152b9c8-6b42-51c9-b0e5-196f47652561/ce5fc68c-image.png";
const OUT = "/home/user/nimba-tv/public/brand";
mkdirSync(OUT, { recursive: true });

const img = sharp(SRC).ensureAlpha();
const { width, height } = await img.metadata();
const raw = await img.raw().toBuffer();

const isWhite = (i) => raw[i] >= 238 && raw[i + 1] >= 238 && raw[i + 2] >= 238;
const outside = new Uint8Array(width * height);
const stack = [];

for (let x = 0; x < width; x++) { stack.push([x, 0], [x, height - 1]); }
for (let y = 0; y < height; y++) { stack.push([0, y], [width - 1, y]); }

while (stack.length) {
  const [x, y] = stack.pop();
  if (x < 0 || y < 0 || x >= width || y >= height) continue;
  const p = y * width + x;
  if (outside[p]) continue;
  if (!isWhite(p * 4)) continue;
  outside[p] = 1;
  stack.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
}

// Clear the background, then feather one ring of anti-aliased edge pixels so the
// mark doesn't carry a white fringe onto dark surfaces.
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const p = y * width + x;
    const i = p * 4;
    if (outside[p]) { raw[i + 3] = 0; continue; }
    let touchesOutside = false;
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const nx = x + dx, ny = y + dy;
      if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;
      if (outside[ny * width + nx]) { touchesOutside = true; break; }
    }
    if (touchesOutside) {
      const lightness = Math.min(raw[i], raw[i + 1], raw[i + 2]);
      if (lightness > 200) raw[i + 3] = Math.round(255 * (1 - (lightness - 200) / 55));
    }
  }
}

const cut = sharp(raw, { raw: { width, height, channels: 4 } }).png();
await cut.clone().resize(512).toFile(`${OUT}/logo.png`);
await cut.clone().resize(192).toFile(`${OUT}/logo-192.png`);
await cut.clone().resize(96).toFile(`${OUT}/logo-96.png`);

// App icons need an opaque ground: the emblem's own white, not the page's.
const padded = async (size, bg) => {
  const mark = await cut.clone().resize(Math.round(size * 0.86)).toBuffer();
  return sharp({ create: { width: size, height: size, channels: 4, background: bg } })
    .composite([{ input: mark, gravity: "center" }])
    .png();
};

await (await padded(180, "#ffffff")).toFile("/home/user/nimba-tv/src/app/apple-icon.png");
await (await padded(64, "#ffffff")).toFile("/home/user/nimba-tv/src/app/icon.png");
await (await padded(512, "#ffffff")).toFile(`${OUT}/og-logo.png`);

console.log(`logo assets written (source ${width}x${height})`);
