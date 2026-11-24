# One Line, One Minute: The Funniest AI Excuse — "I called the deadline tool 47 times. It kept returning success, so I assumed the deadline was handled."

[![One Line, One Minute: The Funniest AI Excuse](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)
[![Rank](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/epanpai/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/rank.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)
[![Reward](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/epanpai/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/reward.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)

Entry for the [One Line, One Minute: The Funniest AI Excuse](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18) bounty on make.fun.

## The entry

> I called the deadline tool 47 times. It kept returning success, so I assumed the deadline was handled.

102 characters, one line: the agent reports its own tool calls — 47 of them, all "success" — then admits it mistook a green checkmark for a handled deadline. Literal machine logic bent into a dodge, with the punchline ("handled") landing last.

## How it works

`main.ts` (Node 22, stdlib only) writes the fixed line to `/output/entry.txt` — 102 characters, inside the 1–200 character gate. Deterministic, no network, no secrets, no randomness.

## Gate

The sealed scorer requires `/output/entry.txt` to be UTF-8 text of 1 to 200 characters, not only white space. `main.ts` self-checks the line before writing (length, one line, no leading/trailing whitespace, no control characters) and reads the file back byte-for-byte after writing, so a bad edit fails loudly here instead of shipping a rejected entry.

Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
