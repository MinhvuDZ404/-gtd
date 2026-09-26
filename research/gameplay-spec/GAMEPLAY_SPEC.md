# Independent gameplay rules

**All numeric balance is authored here, not reverse-engineered reference data.** Stage structure and hero/tower roles are inspired by public observable categories only.

- Fixed 1/60s simulation; bounded frame catch-up; 1× / 2× update rate. No wall-clock combat timers.
- Ordered path distances; deterministic target ordering. First/strongest strategies selectable per tower.
- 420 battle gold; 20 lives; ten sites. Tower prices/stats are centralized in `src/data.js`.
- Six towers: fast single-target, splash cannon, frost slow, chain lightning, fire splash, armor-piercing sunlight.
- Three heroes protect the final region with actual movement/autoattack and global activated skills. No permanent hero leveling yet.
- Five to eight manually called waves depending on stage; six enemy types; final-wave boss. Boss enrage at 45% HP is an original provisional rule, NOT observed reference behavior.
- Enemy rewards fund in-battle levels 1–3. Selling returns a fraction of investment. Permanent training adds 8% base damage/level, cap 20.
- Victory grants stage gold; first clear grants 25 gems; stars depend on remaining lives. Rewards cannot be claimed twice in the active flow.
- Summon is a deterministic six-way equal-probability training reward, 40 gems; max-level duplicate gives gold. Not original gacha odds.
- Local profile v2, v1 migration, whitelisted IDs, integer resources, atomic primary localStorage replacement and prior-valid backup. No cloud/account identity.
- Seed and timestamped actions support simulation reproduction. `snapshot()` includes actors/resources/options; `replay()` reconstructs supported player actions.

Stage 1 normal-resource scripted strategy: ranger site 0, cannon site 2, frost site 4; buy reinforcements and upgrade between waves; use hero skill at six enemies. Tested victory with 20 lives at approximately 161.93 simulation seconds. This verifies playability of one strategy, not balanced progression for all players/stages.
