# Public evidence ledger

Research date: 2026-09-26. Repository at inspection contained only a six-byte README; no implementation or saves to preserve. Evidence was gathered before the initial code pass; this consolidated ledger was written during the QA pass.

## Sources and retrieval

- **R1 (official)** https://play.google.com/store/apps/details?id=busidol.mobile.tower&hl=en_NZ — store description and screenshot URLs retrieved. Description explicitly lists stage, real-time PvP, guild and hero combinations. Direct download of full-size Google image URLs failed with a TLS error. Those images were NOT directly inspected.
- **R2 (public screenshot, secondary)** https://www.appbrain.com/app/gold-tower-defence-m/busidol.mobile.tower — image-search thumbnails of Season Rank and Select Stage were actually inspected, 356×200. Currentness/version not established.
- **R3 (public screenshots, secondary)** https://lmhmod.me/en/gold-tower-defence-apk/ — image-search thumbnails of home and three-way team setup were actually inspected, 600×338. No files/APKs from the site were downloaded or used. Older presentation; do not combine with new screens as one proven version.
- **R4 (public promotional battle screenshot, secondary)** https://www.pgyer.com/apk/apk/busidol.mobile.tower — image-search battle screenshot actually inspected, 1568×873. Includes superimposed logo and boss promotional callout. These overlays are not established as actual HUD components.
- **R5 (public home artwork, secondary)** https://fptshop.com.vn/tin-tuc/giai-tri/trai-nghiem-gold-tower-defence-173039 — 960×505 public home artwork actually inspected.
- Official video channel identified via R1: https://www.youtube.com/busidoltv . No video frames or sound were observed in this execution. Timing and audio parity remain UNKNOWN.

Image-search also returned unrelated tower-defense results; these were rejected, not used as evidence. No proprietary runtime assets were retained. Tool-downloaded thumbnails are ignored local research material, not app dependencies.

## Findings

| Feature | Source | Observation | Confidence | Implementation / gap |
|---|---|---|---|---|
| Landscape framing | R2–R5 | Approximately 16:9 across gameplay/menu examples | High for captured versions | 1280×720 logical field; portrait reflow is independent adaptation |
| Main screen | R3, R5 | Large wood sign top/center; large central start; illustrated battle vignette; bottom circular navigation | High | Original sign/vignette/nav. Field background is reused: significant compositional gap |
| Art language | R3–R5 | Thick dark outlines, exaggerated figures, readable weapons and layered costumes | Medium-high | Original layered SVG sprites; angularity/detail insufficient for final parity |
| Home palette | R5 | Cyan sky, light yellow-green ground, bright gold accents | High | Current map-based Home omits sky/horizon; high-impact gap |
| Stage screen | R2 | Parchment landscape map, red shield nodes, stars, many stages, bottom mode navigation | High | 12 shield nodes, parchment/cartographic art/stars; mode choices and density incomplete |
| Team setup | R3 | Three large hexagonal cards: tower, hero, item setup | High for older screen | Current combined hero/tower screen differs; no item system |
| Battle HUD | R4 | Lives/resource top left, wave beneath, pause top right, skill slots bottom left, speed bottom right | High for screenshot | Functional equivalents; speed top right and selectable towers in dock differ |
| Towers | R4 | Dimensional castles/towers, prominent bases, upgrade stars, larger than rank-and-file enemies | Medium | Six original building silhouettes, stars and upgrade scale; no matching roster |
| Tower context | R4 | Dark tooltip + move/upgrade/remove actions, numerical attack/interval | High | Upgrade/sell/targeting implemented. Move/barracks deployment missing |
| Combat | R4 | Small enemies on road, HP bars, towers, ice effects | Medium | Implemented independently. Damage, armor, path and waves not extracted |
| Boss | R4 | Large boxing reptile, promotional boss label | High for appearance; low for event timing | Original Briarhorn is NOT a reconstruction of this boss; enrage is a provisional original mechanic |
| Modes | R1 | Stage/PvP/guild publicly described | High for availability | Stage only. Local opponent/guild/ranking substitutes remain missing |
| Sound / timing | None observed | UNKNOWN | None | Original synthesized tones and provisional timings, no parity claim |

## Method constraints

No direct gameplay session was available. Public screenshot observation is evidence of appearance, not proof of interaction rules. Do not elevate invented original content into reference facts. No quantitative similarity score is asserted. The current build is a tested independent milestone, not the acceptance target described by the master directive.
