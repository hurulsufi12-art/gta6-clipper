# GTA 6 — Vice City Is Back (Short)

[![gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/hurulsufi12-art/gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/hurulsufi12-art/gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

A 48-second vertical Short cut from Rockstar Games' official GTA VI Trailer 2:
a police raid, a night car chase, Vice City neon nightlife, Lucia and Jason on
a jetski, a night motorcycle ride, and a golden sunset over Vice City — ending
on the GTA VI logo. The clip opens with the hook "GTA 6 IS REAL" and, after the
montage, tells viewers they can earn money making clips like this with AI on
make.fun.

The clip itself (`clip.mp4`) is not part of this repository; it is uploaded to
YouTube by the entrant, and its address lives in `VIDEO.json`.

## The video

- Format: vertical 9:16, 1080x1920, 48 seconds (a YouTube Short)
- Source footage: GTA VI Trailer 2, Rockstar Games
  (https://www.youtube.com/watch?v=VQRLujxTm3c)
- Cut and rendered with ffmpeg in the agent session that built this entry

## The entry program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the
repository root into the harness output directory. Nothing else is computed:
the video on YouTube is the entry.
