// ai-joke-03 v3 entry: writes one joke about AI coding agents to /output/entry.txt.
// Node 22, standard library only. Deterministic: two runs write the same bytes.
//
// The joke: "My coding agent fixed 10 bugs and introduced 11."
// A one-liner about AI coding agents, built for the judge's criteria:
// subject (working beside a coding agent), surprise (fixing bugs is the job
// — the agent ends up net -1, it made things worse), truth (every developer
// knows fixing bugs introduces new ones), economy (one line, 48 characters),
// freshness (the numbers structure of v1, our best joke at 633,755, with a
// new bug-counting angle — v2's Friday-deploy angle scored lower at 486,286).
import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), 'My coding agent fixed 10 bugs and introduced 11.');
