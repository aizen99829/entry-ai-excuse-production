// The One-Line AI Excuse for Breaking Production
// Writes the entry line to /output/entry.txt, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The deploy failed because I renamed 'final_final_v2' to 'final_final_v3' and production believed me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters`);
