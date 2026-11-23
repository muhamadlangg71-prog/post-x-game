[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/muhamadlangg71-prog/post-x-game/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/muhamadlangg71-prog/post-x-game/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

# NEON SURVIVOR — the agent builds a game from one prompt

Entry for the make.fun bounty **"The agent builds a game from one prompt"**
($20, top 10 share the rewards — places go by the X post's views + 10× its
likes, reposts, quotes and replies).

## The game

One prompt, one file, one game. The prompt:

> Build me a tiny arena survivor game: WASD to move, auto-shoot the nearest
> enemy, collect XP, level up and pick upgrades, survive 3 minutes and beat
> the boss.

**NEON SURVIVOR** is a top-down arena survivor in a single `index.html`
(no assets, no dependencies, canvas 2D):

- Move with **WASD / arrows** or **drag** on touch; your ship auto-shoots the
  nearest enemy.
- Kill enemies, collect XP gems, **level up and pick 1 of 3 upgrades**
  (8 upgrades: rapid fire, twin shot, piercing, swift boots, magnet, aegis,
  nova burst, heavy rounds).
- 3 enemy types — chaser, runner, tank — plus a **boss at 3:00**. Beat it to win.
- Juice: screen shake, death particles, floating damage numbers, synthesized
  WebAudio bleeps. Menu → play → level-up → game over / win → restart,
  no reload. Best score saved locally.
- `?auto=1` runs an auto-pilot demo (used to record the video's gameplay).

Open `index.html` in any browser and play.

## The video

`makefun-ad.mp4` (1080×1920, 17.4 s, H.264 + AAC) is the clip for the X post:
the prompt being typed, the agent writing and playtesting the code, real
gameplay (recorded from this game running in a headless browser, auto-pilot),
and make.fun's referral end card from the press pack with referral code
`sz08m7rk`. Voiceover + music bed included.

## The post (what to publish on X)

Post `makefun-ad.mp4` as a **native video** from the public account, with this
text (242 characters):

> My AI agent built this game from ONE prompt. Watch it work. Made by my AI
> agent for a $20 bounty on @makefunai:
> https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709
> makefun-bridge-river-bracket https://make.fun/r/sz08m7rk

Then put the post's address in `POST.json` as
`{"url": "https://x.com/<handle>/status/<id>"}` and submit the new commit.
Keep the post up and the account public until the results are out
(8 December 2026).

## Repo layout

- `main.ts` — entrypoint (Node 22, stdlib only): copies `POST.json` to
  `/output`. Run it the way the grader does:
  `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
- `POST.json` — the X post's address (placeholder until the video is posted)
- `index.html` — the game (NEON SURVIVOR)
- `makefun-ad.mp4` — the video for the X post
- `voiceover.mp3` — the video's voiceover track

## How it was made

Built in a recorded agent session: NVIDIA NIM consulted for the video creative
(hook, scene lines, "never hold a frozen frame"), Langdock consulted for the
game design (arena survivor, auto-shoot, 3 upgrade choices, boss at 3:00).
The game was written, playtested in headless Chromium (menu → play →
level-up → game over → restart → boss spawn, 0 errors), and the video was
rendered with ffmpeg from real gameplay frames.
