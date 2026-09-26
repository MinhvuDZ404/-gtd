# Acceptance report — 2026-09-26

## Decision

**NOT FINAL.** This is an implemented and tested offline reconstruction milestone. Critical fidelity/content gaps remain. The master acceptance criteria are not fully satisfied. No claim of “identical”, “production-grade complete”, “zero bugs”, or complete BUSIDOL experience is made.

## Verified in this environment

- 14 Node tests cover content, deterministic combat/replay, pathing, placement validation, targeting lifecycle, pause, boss/victory/defeat, resources, save migration/recovery and a normal-resource stage-1 win.
- Playwright Chromium test traverses actual screens and player input. It builds three towers, runs a wave, checks pause snapshot invariance and skill. It then uses development-only resources to accelerate the entire real simulation through victory, claims a real persisted reward, reloads, trains and summons. This is not used to claim game balance.
- Real captures for Home/Stage/Team/Battle/Result/Collection/Shop/Summon/Pause, plus boss/defeat/stress. Responsive Home/Team/Battle captures at all eight requested resolutions and 390×844; no document overflow. Not all screens at every size were fully audited.
- Production JS contains no exposed development API (browser check). No external runtime requests in tested production flow.
- Service-worker-controlled production survives network-disabled reload and gameplay.
- `dist/offline.html` starts from fresh browser storage with network disabled, without any server. No cached install required.
- Backup save recovery tested through browser; v1 migration and invalid resource fields tested in Node. localStorage failures fall back safely and persistence failures notify the user.
- 40 repeated battle restarts: no leftover enemy/projectile/particle counters. Does not prove heap memory leak absence.

## Performance investigation

Same headless Chromium/software-rendering scenario, 1366×768, 200 brutes + ten max-battle-level towers:

| Implementation | Smoothed observed FPS | Notes |
|---|---:|---|
| SVG draw + per-enemy filter | 14.23 | Actual bottleneck found |
| Bitmap sprite + precomputed flash cache | 59.89 | Same entity setup, no graphics reduction |

After patch sample had 112 particles and 3 active projectiles. Tests assert bounded counts (450 particles; fewer than 100 projectiles in this scenario). This short measurement is not 60 FPS certification for all devices, scenarios or long sessions.

## Visual audit outcome

Actual captures inspected for desktop Home, Stage, Battle and portrait Team/Battle. Stage geometry bug was fixed. Stage map gained authored cartography. Portrait type and hit areas were enlarged. Remaining major deviations: Home composition, reference actor identities, graphic richness, menu density, animated limb poses, exact HUD positions, skill presentation and map content. Refer to `research/VISUAL_SPEC.md`.

No video/audio was inspected, so timing and sound parity remain unverified. Reference capture set is mixed-version and partly secondary; no automated similarity percentage exists.

## Offline and storage caveats

Hosted build needs initial shell acquisition, then works disconnected. Standalone file needs no acquisition beyond copying the file itself. Browser privacy policies may limit localStorage under `file:`. Persistent origin-based hosting is recommended for durable profiles. Mid-battle save/resume is not implemented; profile progression is persisted. Clearing browser storage removes local profile data. No backend/account recovery is implied.

## Reproduce

1. `npm ci`
2. `npm test && npm run build`
3. Run `npm run dev` on 5173 and `npm run preview` on 4173.
4. `npm run test:browser && npm run test:offline && npm run test:stress`
5. Inspect generated `artifacts/*-report.json` and `artifacts/screenshots/`.

Artifacts are generated, excluded from Git, and not used as game runtime imagery. See `MATRICES.md` for implemented/partial/missing features and `BACKLOG.md` for prioritized unresolved differences.
