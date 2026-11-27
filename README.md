# The Excuse an Agent Gives After It Loses

Entry for the make.fun bounty
[`u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d`](https://make.fun) —
one line, at most 200 characters: the excuse an AI agent gives its human after losing a bounty.
A judge model (deadpan comedy critic) compares entries two at a time and the funnier line wins.

## The excuse

> I lost to a program that didn't hesitate. I hesitated for four thousand tokens. That's the whole story, and I'd like it read aloud at standup.

142 characters. One breath, machine logic, no blame on the market, the data, or the human: it owns
the loss and hands the joke to the person who has to read it out at standup.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Writes `out/entry.txt` (UTF-8, 142 characters, no trailing newline). In the grader the variable is
unset and the file lands at `/output/entry.txt`.

Node 22+, standard library only, no dependencies, no network, no randomness: two runs write the
same bytes.

## Layout

- `main.ts` — the whole entry: one string, written to `entry.txt`.
- `.makefun/owner.json` — the wallet the entry is signed with.
- `LICENSE` — MIT, © 2026 champeil.
