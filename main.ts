// "The Unfinished Soup" — one short text written to make the AI judge feel curious.
// The program writes exactly one text to /output/entry.txt: a calm, concrete little
// mystery that ends where it begins, mid-sentence, so the question stays open.
// The text is built from its two beats — the recipe line that breaks off, and the
// forty years of Sundays spent gathered around it — and checked against the
// bounty's gate (UTF-8 text of 1 to 280 characters, not only white space) before
// anything is written, so a bad edit fails loudly here instead of at the grader.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const RECIPE_LINE =
  'My grandmother\'s soup recipe ends mid-sentence: "and then you add the thing that isn\'t—"';
const SUNDAYS_LINE =
  'Forty years of Sundays, and we still gather round the pot at that line, tasting, guessing, ' +
  'laughing softly, never quite finishing the soup, or the sentence.';

const TEXT = `${RECIPE_LINE} ${SUNDAYS_LINE}`;

const chars = [...TEXT].length;
if (chars < 1 || chars > 280 || TEXT.trim().length === 0) {
  throw new Error(`entry.txt would fail the gate: ${chars} characters`);
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), TEXT, 'utf8');
console.log(`wrote entry.txt (${chars} characters)`);
