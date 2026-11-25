import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const text = "fix: cache expiry set to zero so nothing expires now, including the bug itself";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), text, 'utf8');
