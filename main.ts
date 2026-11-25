import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// The entry is a single commit message: setting the cache expiry to zero
// means nothing ever expires — the stale entry, and the bug with it.
// Kept as joined fragments so the wording stays reviewable line by line,
// while the emitted bytes are exactly the assigned text, no trailing newline.
const textParts = [
  "fix: cache expiry set to zero",
  "so nothing expires now,",
  "including the bug itself",
];
const text = textParts.join(" ");
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), text, 'utf8');
