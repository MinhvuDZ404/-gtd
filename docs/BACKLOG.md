# Autonomous discrepancy backlog

## CRITICAL — blocks final reconstruction acceptance

- Reference acquisition incomplete: no direct gameplay/video/audio observation, no consistent target release chosen. Need official/current sources before claiming timings/roster/UI parity.
- Artwork, composition and animation are not at the requested observable fidelity. Home lacks reference sky/horizon composition; characters and buildings are simpler and original; walk/attack are not articulated full animation clips.
- Missing major requested reference flows: mode selection, items, hero progression, local PvP/guild/rank substitutes. No fake/disconnected menu buttons were added for them.
- Shared map across twelve stages is not a complete reconstructed campaign.

## HIGH

- Reconstruct observed team hex-card structure and per-screen icon/spacing/richness from a consistent reference version; current combined team picker differs.
- Reference-like tower tiers need bespoke silhouettes, not only stars/scale/stats.
- Distinct hero casting, enemy attack/death cycles, boss cinematic/telegraph/phase data need evidence and animation production.
- Portrait battlefield legibility remains poor on narrow phones, despite readable HUD and larger touch regions. Evaluate pan/zoom or landscape-first mode on physical devices.
- Balance scenarios for stages 2–12 and all hero/team combinations. Current boss and skill timings are independent assumptions.
- Audio needs actual reference listening, material-specific effects and music/ambient design. Some defined synthesized events are not wired.
- Final screen-by-screen golden baselines and actual pixel diff regression workflow missing; current tests capture images but do not certify resemblance.

## MEDIUM

- Separate centralized transition graph instead of distributed UI/modal string states.
- Move remaining effect/timing/upgrade-cost constants into data specs; modules exist but main/render remain relatively dense.
- Robust save export/import and future-version quarantine; current save intentionally rejects unsupported versions and can recover prior backup.
- Add all-game reduced motion, color-independent status badges and touch-safe modal positioning on short landscape screens.
- Physical mobile/desktop profiling, memory/GC instrumentation and sustained-session battery tests.
- Persistent error reporting / retry UX and dedicated asset fault injection tests.

## RESOLVED in this execution

- Stage map collapsed: decorative `position:relative` overrode screen geometry. Fixed and recaptured.
- Production compilation rejected top-level await: boot uses Promise completion.
- Chromium CDN inaccessible: npm-packaged browser + bundled runtime libraries used for actual test execution.
- Offline asset mismatch from `Vary` headers: cache lookup ignores vary only for trusted same-origin static content. Verified disconnected reload.
- Fresh offline browser had no distribution shell: generated `dist/offline.html`, verified with fresh context and all network disabled.
- 200-enemy stress ~14 FPS: cached SVG bitmaps and hit-flash variants, ~60 FPS in same headless case after patch.
- Hero was initially skill-only: added deterministic autonomous movement/autoattack; covered by tests.
- Death originally only particles: added bounded fading/tumbling sprite ghosts.
- Blocked localStorage getter could throw outside recovery: moved lookup inside try blocks.
- Visual particle/text arrays: enforced caps including global skill/death emissions.
