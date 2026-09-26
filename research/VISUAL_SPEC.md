# Visual specification and discrepancy audit

Reference coordinates below are estimates from public thumbnails, not pixel-exact measurements. Canonical implementation canvas: 1280×720; terrain is a cached canvas, actors are 160×180 original vectors cached to bitmaps.

## Observed ratios

| Region | Public reference estimate | Current |
|---|---|---|
| Landscape | 1.77–1.80 aspect | 1.7778 |
| Home sign | ~45–55% width, upper half | 44% width, top 13% |
| Home start | ~18% width near center | 22% width, top 51% |
| Home navigation | ~80% width at bottom | 58% width; fewer features |
| Battle terrain | Most of screen under transparent HUD | Full field under HUD |
| Battle tower | Roughly 5–9% screen height (varies) | 16–18% sprite box; visible silhouette smaller |
| Enemy : tower | Roughly 0.3–0.6 in battle shot | ~0.48 |
| Skill dock | Lower left ~28% width | ~37% including hero |
| UI treatment | Dark framed blocks; strong outlines; bold sans lettering | Green/brass frames; system serif headings differ |

## Palette decisions

Woodland ground #7e994b / #92a951; path #cfb97d; ink #293326; stone #ece0b1 → #625748; gold #fff1a0 → #936027. These are independent choices inspired by observed material families, NOT sampled exact reference colors. Battle reference R4 is a dark blue dungeon and cannot justify matching woodland colors.

## Region audit after first screenshots

- BACKGROUND: Current Home uses a map, not the reference’s sky/horizon vignette. Major difference, unresolved.
- MAP: Initial stage container was one-line high because decorative `position:relative` overrode absolute layout. Patched and recaptured. Added original etched mountains/trees/ruins, but reference detail and node density remain much higher.
- TOWERS: Clear distinct castle/cannon/crystal silhouettes, shadows and material highlights. Still simpler than reference. Upgrades scale and add stars, not bespoke full artwork tiers.
- HEROES: Three separate color/weapon identities, layered clothing/face/hair. Original roster, not observed roster. No skeletal limb animation, only bob/recoil/movement.
- ENEMIES: Six identifiers, hit flash, HP, death fade/debris. No full directional walk sheets. Boss is a different original character.
- HUD: Functional framing and broad hierarchy; positions and content not pixel-matched. Current tower picker differs from reference bottom action slots.
- TEXT: Fonts are platform-local; not a matched bundled font. No external font runtime.
- VFX: Distinct projectile forms/colors, explosions, slows, chain arcs and skill particles. Not captured against video timing.
- PORTRAIT: Full field is visible, but battlefield actors remain small on 390px width. Increased text size and site touch area after screenshot audit. Real-device ergonomics still not accepted.

## Capture process

`npm run test:browser` generates desktop/tablet/portrait screenshots; `test:stress` adds boss/defeat/stress. These are actual interactive runtime captures, not replacement screens. Reference-vs-build visual assessment was manual from the images, not an automated numeric similarity measurement. Golden baselines are not yet reviewed/committed; capture alone is not visual regression acceptance.
