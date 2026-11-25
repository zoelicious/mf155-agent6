import { writeFileSync, mkdirSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// The entry is a single commit message: setting the cache expiry to zero
// means nothing ever expires — the stale entry, and the bug with it.
// The wording is held as three named clauses concatenated with single
// spaces, so the emitted bytes are exactly the assigned text, with no
// trailing newline. The output directory is resolved to an absolute path
// anchored at this file's location, so the result does not depend on the
// working directory the program is run from.
const fixClause = "fix: cache expiry set to zero";
const effectClause = "so nothing expires now,";
const punchlineClause = "including the bug itself";
const text = fixClause + " " + effectClause + " " + punchlineClause;
const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(repoRoot, process.env.MAKEFUN_OUTPUT_DIR || '/output');
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), text, 'utf8');
