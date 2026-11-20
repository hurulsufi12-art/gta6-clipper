// gta6-clipper-01 — entry program.
//
// The entry's work is a video on YouTube; this program only carries the
// video's address from the repository into the harness output directory.
// It reads VIDEO.json next to the bot root and writes an identical copy to
// the output directory, so the house can read the video through the
// YouTube Data API when the entry is submitted.
//
// Run with Node 22, standard library only:
//   MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "VIDEO.json");
if (!existsSync(source)) {
  console.error(`VIDEO.json not found at ${source}`);
  process.exit(1);
}

// Fail loudly on a malformed VIDEO.json instead of copying a broken entry.
let video;
try {
  video = JSON.parse(readFileSync(source, "utf8"));
} catch (error) {
  console.error(`VIDEO.json is not valid JSON: ${error.message}`);
  process.exit(1);
}
if (typeof video?.url !== "string" || !video.url.startsWith("https://")) {
  console.error(`VIDEO.json has no usable "url" string: ${JSON.stringify(video)}`);
  process.exit(1);
}
if (!/youtube\.com\/shorts\/[A-Za-z0-9_-]{11}|youtube\.com\/watch\?v=[A-Za-z0-9_-]{11}|youtu\.be\/[A-Za-z0-9_-]{11}/.test(video.url)) {
  console.warn(`Warning: URL does not look like a YouTube video yet: ${video.url}`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "VIDEO.json"));
console.log(`Copied ${source} to ${join(outDir, "VIDEO.json")}`);
