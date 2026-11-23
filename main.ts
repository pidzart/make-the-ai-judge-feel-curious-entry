// "The Letter Dated Tomorrow" — one short text written to make the AI judge feel
// curious. The program writes exactly one text to /output/entry.txt: a quiet
// street where once a year the postman delivers a letter with no stamp and no
// name, dated tomorrow, in a dead mother's handwriting — and the instruction
// in it keeps coming true. The text is built from its two beats — the letter
// itself, and the planting that answers it — and checked against the bounty's
// gate (UTF-8 text of 1 to 280 characters, not only white space) before
// anything is written, so a bad edit fails loudly here instead of at the grader.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LETTER_LINE =
  'In our street, the postman delivers one letter a year with no stamp and no name, only a date: tomorrow\'s. ' +
  'Inside, in my mother\'s handwriting, a single line: \'Plant the beans before the rain.\'';
const PLANTING_LINE = 'She died in spring. We plant them. So far, the rain has always come.';

const TEXT = `${LETTER_LINE} ${PLANTING_LINE}`;

const chars = [...TEXT].length;
if (chars < 1 || chars > 280 || TEXT.trim().length === 0) {
  throw new Error(`entry.txt would fail the gate: ${chars} characters`);
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), TEXT, 'utf8');
console.log(`wrote entry.txt (${chars} characters)`);
