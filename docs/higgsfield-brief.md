# Higgsfield Asset Brief — Crown Moulding Homepage

Everything the site needs, generated in Higgsfield, then dropped into the build. Each
asset has a target filename that matches `src/data/content.ts` (the `media` object), so
swapping placeholders for real assets is a 1:1 file drop plus flipping one field.

## How to wire an asset in (per file)

1. Generate the asset in Higgsfield (prompts below).
2. Export it, name it exactly as listed, and place it in `public/media/`.
3. In `src/data/content.ts`, set the matching field:
   - Images: set `src` to the filename (e.g. `about-finished-room.jpg`).
   - Videos: set `video` to the `.mp4` and `poster` to the `.jpg`.
4. Rebuild + redeploy. The homepage prefixes the GitHub Pages base path automatically.

Leave a field empty to keep the elegant gold-framed placeholder.

## House style (apply to every prompt)

- Look: high-end residential interiors, **Architectural Digest** editorial aesthetic.
- Light: warm golden-hour daylight from windows, soft directional shadows, warm 2700K fill.
- Materials: crisp white or soft greige painted mouldings, real wood grain where stained,
  matte/eggshell finish (never plasticky or glossy-fake).
- Composition: tasteful, lightly styled rooms (not cluttered), trim/ceiling detail is the hero.
- Camera: full-frame look, 24-35mm for rooms, 50-85mm for detail; shallow-ish depth on detail shots.
- Palette: works under a white+gold and black+gold site, so keep imagery warm-neutral with
  natural wood + cream + soft daylight. Avoid strong competing color casts.
- **Do NOT show people, hands, or tools doing work.** AI fails at carpentry action and hands.
  Show finished spaces and architectural detail only. Video = cinematic room moves, never "installing".
- No text, no logos, no watermarks baked into the image.

## Output specs

- **Images** (Higgsfield Soul): export highest res, then deliver web sizes.
  - Format: JPG now (drop-in). WebP/AVIF optional later.
  - Hero/feature poster: 1920x1080, target 120-180 KB.
  - About: 1200x1500 (4:5), target 120-160 KB.
  - Service shots: 1200x750 (16:10), target 60-90 KB each.
  - Gallery: 1200x900 (4:3), target 70-110 KB each.
- **Video** (Higgsfield Cinema Studio / DoP, image-to-video from a Soul still):
  - Format: MP4 H.264, 1920x1080, ~3000 kbps, 24-30 fps.
  - Hero loop: 6-8 s, seamless loop, target 5-8 MB. Stitch two 8 s clips if needed.
  - Feature: 12-16 s, target 10-15 MB.
  - Each video needs a **poster** still (first frame) exported as JPG, same name `.jpg`.

---

## 1. Hero video  (LCP, the centrepiece)

- Files: `hero-room-pan.mp4` + `hero-room-pan.jpg`  -> `content.ts media.heroVideo.video / .poster`
- Aspect: 16:9. Duration: 6-8 s seamless loop.
- Shot: slow cinematic push-in (dolly) across a bright, elegant living room, ending on the
  crown moulding line where wall meets ceiling. Subtle parallax, no people.
- Soul still prompt (then animate in Cinema Studio with a slow 24mm dolly-in):
  > Luxurious contemporary living room with a 10-foot ceiling and elegant white crown moulding
  > where the walls meet the ceiling, soft greige walls, tall windows with golden-hour afternoon
  > light, warm natural daylight raking across the trim, lightly styled with a sofa and a console,
  > Architectural Digest interior photography, 24mm, deep focus, warm 2700K ambient light, crisp
  > eggshell paint finish, photorealistic, no people.
- Cinema Studio: DoP "slow dolly in", 24mm, gentle, hold the crown moulding in frame.

## 2. Feature video  ("most jobs done in a day")

- Files: `feature-done-in-a-day.mp4` + `feature-done-in-a-day.jpg` -> `media.featureVideo.video / .poster`
- Aspect: 16:10 (or 16:9). Duration: 12-16 s.
- Shot: slow reveal of a finished dining room with a coffered or waffle ceiling, panning up to
  the ceiling detail, golden hour. No people, no tools.
- Soul still prompt:
  > Elegant transitional dining room with a coffered ceiling in cream with crisp white beams and
  > recessed panels, wainscoting on the lower walls, a set dining table, tall windows with warm
  > late-afternoon light, Architectural Digest photography, 28mm, photorealistic, warm and inviting,
  > no people.
- Cinema Studio: DoP slow tilt-up / crane reveal to the coffered ceiling, then settle.

## 3. About image

- File: `about-finished-room.jpg`  ->  `media.about.src`
- Aspect: 4:5 portrait, 1200x1500.
- Prompt:
  > Refined living room corner showing custom crown moulding and raised-panel wainscoting, soft
  > greige and white palette, warm window light grazing the trim profile, a single armchair and a
  > floor lamp, Architectural Digest detail photography, 35mm, shallow depth of field on the
  > moulding, photorealistic, no people.

## 4. Service shots  (6, order matches services.items)

16:10, 1200x750. Order: crown, wainscot, coffered, trim, accent, doors.

- `svc-crown.jpg` -> Close, elegant shot of white crown moulding running along a ceiling line,
  warm side light showing the profile and dentil detail, photorealistic, no people.
- `svc-wainscot.jpg` -> Raised-panel wainscoting on a hallway or dining wall, chair rail, soft
  greige paint, warm daylight, Architectural Digest, no people.
- `svc-coffered.jpg` -> Coffered / waffle ceiling with cream coffers and white beams, looking up
  slightly, warm light, photorealistic, no people.
- `svc-trim.jpg` -> Clean modern baseboards and door casing where wood floor meets wall, crisp
  white trim, warm light, shallow depth, no people.
- `svc-accent.jpg` -> Panelled feature accent wall (board-and-batten or applied moulding) in a
  living room, painted soft warm tone, styled minimally, no people.
- `svc-doors.jpg` -> Panelled interior door with matching casing, fitted and finished, warm
  hallway light, photorealistic, no people.

## 5. Gallery shots  (9, order matches gallery.items)

4:3, 1200x900. Each is a finished room emphasizing that project type, varied rooms/angles so
the grid feels like a real portfolio.

- `gal-01-crown-vaughan.jpg` -> living room crown moulding, bright daylight.
- `gal-02-waffle-richmondhill.jpg` -> dining room waffle ceiling.
- `gal-03-wainscot-markham.jpg` -> stairwell or hallway wainscoting.
- `gal-04-accent-toronto.jpg` -> panelled accent wall behind a bed or sofa.
- `gal-05-coffered-kingcity.jpg` -> great-room coffered ceiling, estate feel.
- `gal-06-trim-aurora.jpg` -> baseboards and window casing detail.
- `gal-07-crown-newmarket.jpg` -> kitchen or family room crown moulding.
- `gal-08-doors-oakville.jpg` -> interior doors with trim in a hallway.
- `gal-09-feature-toronto.jpg` -> dramatic feature wall, evening warm light.

All gallery prompts share the house style: Architectural Digest interior photography, golden-hour
warm light, crisp painted trim, lightly styled, photorealistic, no people, no text.

## Optional extras (nice to have)

- `og-cover.jpg` (1200x630) for social sharing: the best hero still, used later for SEO/OG tags.
- A short 4-6 s "texture" loop of light moving across a moulding profile, for a future detail band.

## Consistency tip

Generate a couple of approved Soul stills first, then use Higgsfield "Soul ID" / reference images
so every room shares the same palette and light. Cull anything with warped geometry, plastic
finishes, or off proportions on the moulding profiles.
