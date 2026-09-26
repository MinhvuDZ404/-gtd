# Content, screen, and test matrices

Legend: **I** implemented; **T** exercised by automated tests; **P** partial; **U** unverified; **M** missing. I/T do not imply reference fidelity. No row is marked final parity accepted.

## Content / asset / animation / VFX / audio

| Content | Data | Original art | Animation | Attack / skill | VFX | Audio | UI | Save | QA |
|---|---|---|---|---|---|---|---|---|---|
| Ranger / Cannon / Frost | I | I | P recoil | T | I | P shared | T | T | T |
| Storm / Ember / Sun | I | I | P recoil | T stress | I | P shared | T | T | T stress |
| Lyra / Orin / Astra | I | I | P movement/bob | I, Lyra T | I | P shared | T | T selection | P |
| Goblin / Runner / Beetle / Brute / Wisp | I | I | P walk bob + death fade | T path | I | P | I HP | battle not saved | T |
| Briarhorn | I | I | P | T boss/enrage | P | P intro | T HP | battle not saved | T |
| Twelve stages | I | P shared map | N/A | I | N/A | shared | T unlock stage 2 | T | P stage 1 only balance |
| Permanent training | I | reused art | I feedback | T | P notification | I | T | T | T |
| Summon rewards | I | reused art | I card reveal | T | P glow | I | T | T | T |

## Screens

| Screen | Layout/background | Typography/icons | Input/transition | Audio | Responsive | Save | Test |
|---|---|---|---|---|---|---|---|
| Boot/loading | I actual asset loading | I | I | intentionally silent before gesture | I | load | T |
| Home | I original, reference composition P | P local fonts / I icons | T | I | T captures | T | T |
| Stage | I parchment | I | T | I | P capture | T | T |
| Team | I, differs from observed hex layout | I | T | I | T captures | T | T |
| Battle idle/combat | I | I | T | P | T captures, real touch U | no midbattle restore | T |
| Pause | I | I | T | I | I | none | T actual freeze |
| Boss event | P warning + bossbar | I | P no cinematic | I | U | none | T boss capture |
| Victory/reward | I combined flow | I | T | I | U all sizes | T | T |
| Defeat/restart | I | I | T | I | U all sizes | no grant | T |
| Collection/training | I | I | T | I | P | T | T |
| Shop/summon | I | I | T | I | P | T | T |
| Guide/settings | I | I | I | I | P | sound preference T indirectly | P |
| Mode / items / local PvP / guild / rank | M | M | M | M | M | M | M |

## Test coverage

| Scenario | Result / limitation |
|---|---|
| New-player stage 1 | Unit simulation wins without injected resources |
| Under-equipped / no towers | Reaches defeat, restart works |
| Over-levelled | All waves + boss resolved |
| Low/invalid resources | Spend/grant guards reject negative, fractional, NaN, Infinity |
| Pause/resume | Byte-equal snapshot across paused simulation; UI tested |
| Replay/determinism | Matching simulation under repeated seed/actions |
| Save v1/v2 | Migration, malformed JSON, invalid IDs/resources, backup, blocked storage |
| Full flow | Home→stage→team→battle→skill→victory→claim→reload→train→summon |
| Stress | 200 enemies + 10 level-3 towers, bounded particles/projectiles |
| Repeated restart | 40 restarts, counters return to zero; not a heap-retention proof |
| Viewports | 1920×1080, 1600×900, 1366×768, 1280×800, 1024×768, 1080×1920, 1170×2532, 750×1334, 390×844 |
| Offline hosted | Warm service worker, network disabled, reload, placement/wave |
| Offline standalone | Fresh browser storage, network disabled, file:// launch, wave |
| Console / network | No page errors in tested flows; no external requests in production test |
| Missing | Safari/Firefox/device QA, multi-hour soak, all-stage balance, image baseline diffs, sound listening comparison |
