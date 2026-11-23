// main.ts — entrypoint for the make.fun post-X bounty
// "The agent builds a game from one prompt" (post-x-the-agent-builds-a-game-from-20261122-1709).
// The entry is the X post itself: this program only hands the house the post's
// address by copying POST.json from the repository root to /output, where the
// gate reads it. It does no network, reads no clock, and writes the same bytes
// on every run. Node 22, standard library only.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const src = join(BOT_DIR, 'POST.json');
const dst = join(OUTPUT_DIR, 'POST.json');

// Read first so a malformed POST.json fails loudly instead of copying garbage.
let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(src, 'utf8'));
} catch (err) {
  console.error(`POST.json could not be read as JSON from ${src}: ${(err as Error).message}`);
  process.exit(1);
}
if (!parsed || typeof parsed !== 'object' || typeof (parsed as { url?: unknown }).url !== 'string') {
  console.error('POST.json must be a JSON object with a string "url" field.');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(src, dst);
} catch (err) {
  console.error(`POST.json could not be copied from ${src}: ${(err as Error).message}`);
  process.exit(1);
}
