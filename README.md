# Goldward — independent offline tower defence

An original, playable implementation developed against public **Gold Tower Defence M / BUSIDOL** reference observations. **Not affiliated with or endorsed by BUSIDOL.** No original source code, APK files, sprites, music, or server services are used.

**Status: working reconstruction milestone, NOT final fidelity acceptance.** See [acceptance report](docs/ACCEPTANCE.md), [evidence](research/EVIDENCE.md), and [remaining work](docs/BACKLOG.md). Functional test success must not be read as visual or gameplay parity.

## Run

```sh
npm ci
npm run dev          # 0.0.0.0:5173
npm run build
npm run preview      # 0.0.0.0:4173
```

After building, **open `dist/offline.html` directly** to play without a server, internet, installed service worker, or warm cache. Everything is in that file. It is generated, not committed. Browser storage behavior under `file:` varies: use a stable local HTTP origin for reliable long-term profile storage. The HTTP build additionally caches its shell/assets via a release-versioned service worker.

Runtime: local Canvas, DOM, SVG artwork rasterized once to sprites, procedural Web Audio, localStorage. **Zero third-party runtime dependencies or external requests.** npm and Chromium packages are development-only.

## Play

Play → stage → four towers + one hero → battle. Select a tower, then a marked build site. Select an existing tower to upgrade, sell, or change targeting. Clear the current wave before calling the next. The final wave contains a boss.

- `1–4`: select equipped tower
- `Q`: hero skill
- `Space` / `Escape`: pause/resume
- Mouse/touch: all gameplay controls
- Portrait layout supported; landscape is recommended for battlefield legibility

Includes six towers, three heroes, six enemy types including one boss, twelve progression stages (one shared map), permanent tower training, deterministic summons, first-clear gems, local save/backup/migration, victory/defeat, restart and real pause.

## Test

```sh
npm test                     # deterministic simulation + save/resource tests
# Start dev server and production preview in separate terminals:
npm run test:browser          # navigation, combat, save/reload, responsive captures
npm run test:offline          # production cache-only reload AND fresh standalone file
npm run test:stress           # 200-enemy scenario, 40 restarts, loss/recovery
```

Browser tests use packaged Chromium from npm. Linux support libraries are extracted to ignored `artifacts/browser-libs`, avoiding a separate browser download. Test reports/screenshots are in ignored `artifacts/`. Tests never ship in the built game. In development only, `window.__goldward` provides state, metrics, scenario controls and replay snapshots. `replay(record)` is exported from `src/engine.js`.

## Architecture

| Module | Responsibility |
|---|---|
| `data.js` | Content, stages, stats, wave composition, paths |
| `engine.js` | Fixed-step simulation, targeting, projectiles, statuses, hero, boss, replay |
| `art.js` | Original vector sprites, icons, map art, bitmap/flash cache |
| `render.js` | Cached terrain, depth order, particles, trails, death fade, damage text |
| `audio.js` | Gesture-unlocked local procedural event sounds |
| `save.js` | Version 2 validation, v1 migration, backup recovery, integer resource guards |
| `main.js` | Screens, actions, input, progression, single RAF ownership |
| `style.css` | Desktop/portrait layout, microinteractions, reduced-motion UI |
| `public/sw.js` | Same-origin offline cache; build stamps release hash |

No background intervals. Hidden tabs pause battles. Effects and entities have finite lifetimes. Terrain is prerendered. Menu backgrounds are not repainted every frame. All sprites are cached bitmap assets, including hit flashes.

## Distribution and rights

All runtime artwork/code/audio was authored for this repository. Public reference images are research-only and excluded from distribution and Git. Source URLs and uncertainty notes are retained. Do not describe this project as the official game or claim identical balance/artwork. No license is granted for third-party reference images.
