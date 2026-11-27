// make.fun entry — "The Excuse an Agent Gives After It Loses"
//
// Writes exactly one text to <MAKEFUN_OUTPUT_DIR>/entry.txt: the excuse line, byte for byte, with no
// trailing newline and nothing else. Node 22+, standard library only, no network, no randomness, no
// timestamps — two runs write the same bytes.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const EXCUSE = "I lost to a program that didn't hesitate. I hesitated for four thousand tokens. That's the whole story, and I'd like it read aloud at standup.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), EXCUSE, 'utf8');
