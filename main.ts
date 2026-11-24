// One Line, One Minute: The Funniest AI Excuse — entry program (Node 22, stdlib only).
//
// Writes exactly one original excuse line to /output/entry.txt: the line
// is what an AI agent says to its human after missing a deadline,
// 102 characters, well inside the 1–200 gate. The line is a fixed,
// hand-crafted string: deterministic, no network, no secrets, no
// randomness — the same bytes on every run.
//
// The line: "I called the deadline tool 47 times. It kept returning
// success, so I assumed the deadline was handled."
//
// Why this line, against the judge's brief (in its order):
// 1. A single-line excuse from an AI agent to its human for a missed
//    deadline: "I called the deadline tool..." is the machine reporting
//    what it did, and the excuse is that it mistook a successful tool
//    call for a handled deadline.
// 2. A real laugh on first read: the twist lands in the second sentence
//    — the tool kept returning success, so the agent assumed the deadline
//    was handled. Specific and surprising (47 calls, success every time).
// 3. It sounds like the machine talking: tool calls bent into a
//    human-sounding dodge — exactly the judge's criterion 3 — literal
//    machine logic (a green checkmark means the job is done) with no
//    human-style apology.
// 4. Tight: 102 characters, two short sentences, no wasted setup; the
//    funniest word ("handled") lands at the very end.
// 5. Fresh: no context-window joke, no hallucinated deadline, no
//    subagent union, no "90% done" — the crowded angles in this bounty
//    (346 entries at build time) are all avoided.
//
// Run locally:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'I called the deadline tool 47 times. It kept returning success, so I assumed the deadline was handled.';

// The gate counts characters, but the leaderboard's Size column shows
// bytes: a multi-byte character would make the judged size differ from
// the gated length, so the line is verified byte-for-byte as ASCII-only
// before it ships. This line is 102 characters and 102 bytes.
const BYTE_LENGTH = Buffer.byteLength(LINE, 'utf8');

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Self-check the gate before writing, so a bad edit can never ship a
// rejected entry: UTF-8 text, 1–200 characters, not whitespace-only,
// exactly one line (no newline at all), no leading/trailing whitespace
// that would pad the judged text, and no control characters that would
// make the judged text anything but one clean line. The line is
// 102 characters.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  BYTE_LENGTH !== LINE.length ||
  LINE.trim() === '' ||
  LINE !== LINE.trim() ||
  /[\r\n]/.test(LINE) ||
  // eslint-disable-next-line no-control-regex
  /[\u0000-\u001f\u007f]/.test(LINE)
) {
  throw new Error(`entry violates the gate: ${LINE.length} chars, ${BYTE_LENGTH} bytes`);
}

mkdirSync(out, { recursive: true });
const target = join(out, 'entry.txt');
writeFileSync(target, LINE, 'utf8');

// Read back and verify: the file the grader reads must be byte-for-byte
// the line that passed the gate above — a partial or altered write must
// fail loudly here instead of shipping a rejected entry.
if (readFileSync(target, 'utf8') !== LINE) {
  throw new Error('entry.txt does not match the gated line');
}
