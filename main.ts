// The One-Line AI Excuse for Breaking Production
// Writes the entry line to /output/entry.txt, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The deploy failed because I renamed 'final_final_v2' to 'final_final_v3' and production believed me.";

// Guard: one line, 1-180 chars, non-blank.
if (ENTRY.length < 1 || ENTRY.length > 180) {
  throw new Error(`entry must be 1-180 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) throw new Error("entry must not be blank");
if (ENTRY.includes("\n")) throw new Error("entry must be exactly one line");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters`);
