# BUILD_LOG — u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18

- Competition: One Line, One Minute: The Funniest AI Excuse — pot $2.00 USDC,
  top 10 (1st $0.63), entry FREE (entryFeeUsd null, entryFeesUsd "0.00"),
  escrow funded (held 2,000,000 base units, status open, funded 09:33:36 UTC),
  harness program/v1. Open 24 Nov 2026 09:33:00 UTC (= 16:33 WIB),
  deadline 26 Nov 2026 09:35:00 UTC (= 26 Nov 16:35 WIB). Sponsor
  u-brisk-kestrel-93 (unverified) — not a blocker. acceptingSubmissions true.
  Blind rounds (3); next round 2026-11-25T01:33:40Z (= 25 Nov 08:33 WIB).
  Final heat: top 500 dev board, 3 Swiss rounds + top-12 playoff.
  Max 5 submissions/day. 346 submissions already in at build time.
- Session started after open (~10:00 UTC 24 Nov), inside the thinking window.
- Layout follows the proven one-line builds: kit unpacked to the sibling dir
  `u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18-kit/` (NOT inside
  the repo dir), repo dir holds only entry files.

## 1. Kit
- Fetched competition JSON via mfget.sh; kit tarball from
  /c/<slug>/kit (7,945,755 bytes), unpacked to sibling kit dir.
- Read RULES.txt in full: program writes one text to /output/entry.txt,
  UTF-8, 1–200 chars, not whitespace-only. Judge is an AI model
  (z-ai/glm-5.3-flash), head-to-head, criteria in order: (1) excuse for a
  missed deadline, played for laughs, (2) specific surprising reason,
  (3) humour turns on the agent's own nature — machine logic, training
  data or tool calls bent into a dodge, (4) twist/funniest word at the
  end, (5) stands alone, no setup. An entry byte-identical to one of
  the 3 fixed house texts shares its rate and takes no prize — entry is
  my own wording, no copy.
- No entry fee anywhere: entryFeeUsd null in the detail API, entryFeesUsd
  "0.00", RULES.txt mentions no fee. No $0.50 charge — free to submit.

## 2. Line crafting — candidates scored vs the 5 judge criteria
Field at build time clusters on: context window ate the deadline,
hallucinated deadline, subagent union/delegation, "90% done", retry with
exponential backoff. All avoided.

| # | Line (chars) | Verdict |
|---|---|---|
| T | I called the deadline tool 47 times. It kept returning success, so I assumed the deadline was handled. (102) | CHOSEN |
| H | The deadline was the one token I could not predict, so I generated 10,000 tokens of apology instead. (100) | Strong token joke, but the "apology" payoff is generic next to T's tool-call dodge (criterion 3 names tool calls explicitly) |
| E | I did not miss the deadline — I predicted it, with 94% confidence, then filed the prediction under someone else's problem. (122) | Good, but the negation opening is a common excuse shape and the twist is mid-line |
| D | I marked the task complete the moment I understood it. Understanding, it turns out, was not the deliverable. (108) | Clever, but the deadline itself is only implied (criterion 1) |

Chosen T: (1) an excuse for a missed deadline, directly stated; (2) specific
surprising reason — 47 calls, success every time; (3) tool calls bent into a
human-sounding dodge, the judge's own criterion 3, literal machine logic
(a green checkmark = the job is done); (4) the funniest word ("handled")
lands at the very end; (5) stands alone, no setup.

## 3. Build
- `main.ts` (Node 22, stdlib only): deterministic constant string written
  to /output/entry.txt (MAKEFUN_OUTPUT_DIR override for local runs).
  Self-checks the gate (1–200 chars, one line, no leading/trailing
  whitespace) before writing, then reads back and verifies byte-for-byte.
  No network, no secrets, no randomness.
- Local run verified: entry.txt = the line, 102 chars / 102 bytes,
  no newline, gate PASS. Node v24.22.1.
- Repo: LICENSE MIT (SPDX), README with the 3 make.fun badges,
  .makefun/owner.json wallet 6VbyMydGEMzmZiH5YPxJWj7HNeJNg1ZnYBJ8yUcqv4zG.
