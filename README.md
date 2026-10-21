# Marlow House — landing page (Clean)

Off-the-plan landing page for Marlow House, 48 residences on Marine Terrace, Fremantle. Phase 1 runs on Next.js + Tailwind (Vercel); it will be rebuilt in Elementor later, so markup stays simple and every piece of copy lives in `lib/data.ts`.

Reference prototype: `docs/marlow-B-clean-img.html`.

## Stack

- Next.js 16 App Router, TypeScript, Tailwind CSS v4 (tokens in `app/globals.css` `@theme`)
- Fonts via `next/font/google`: Jost 300/400 (display), Inter Tight 400/500 (body)
- Static output, no backend

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
npm run lint
```

Set `NEXT_PUBLIC_SITE_URL` (e.g. `https://marlowhouse.com.au`) on Vercel so canonical and OG URLs are absolute.

## Structure

```
app/
  layout.tsx            fonts, metadata, OG/Twitter tags
  page.tsx              section order + JSON-LD (Residence, FAQPage)
  opengraph-image.tsx   generated 1200×630 OG image
  globals.css           tokens, base type, .btn/.eyebrow/.link/.input
components/
  sections/             AnnouncementBar, Nav, Hero, Intro, Residences, Amenities,
                        Location, Design, Team, Faq, Register, Footer
  floorplans/           4 SVG floor plans (1 bed, 2 bed, 3 bed, penthouse) + shared parts
  ui/                   Icon, Photo (next/image wrapper with fixed aspect ratio)
lib/
  data.ts               all copy, residences, schemes, FAQs, image registry
  schema.ts             JSON-LD builders
public/images/          photography
```

## Design tokens

| Token | Hex | Use |
|---|---|---|
| `white` | `#FFFFFF` | page background |
| `grey` | `#F3F4F2` | alternate sections, form card |
| `ph` | `#E9ECEA` | image placeholder background |
| `blue` | `#5C7F93` | accent, location band, focus ring |
| `blue-deep` | `#4E6E80` | darker accent |
| `ink` | `#15181A` | text, primary button |
| `muted` | `#6B7177` | body copy |
| `line` | `#E2E5E3` | borders |

Radius 4px (`rounded-base`). Headings uppercase, Jost 300, letter-spacing `.08em`. Breakpoints match the prototype: below 721px everything stacks to one column, stats become a vertical list and CTAs go full width; 721–1024px is the tablet layout.

## Photography

The files in `public/images` are **temporary Unsplash stand-ins** taken from the prototype, already cropped to the final sizes and saved under the final file names. Generate the final set in Google Flow and overwrite each file with the same name and size. No code change needed; if the subject changes, update the `alt` in `lib/data.ts` (`images`).

Shared style for every prompt:

> Contemporary Australian coastal architecture, soft natural daylight, calm and airy. Palette of white, pale oak and muted sea blue. Photorealistic, architectural photography, eye-level, straight verticals, shallow contrast. No people, no text, no logos, no signage.

| File | Ratio | Size | Prompt (add the shared style) |
|---|---|---|---|
| `hero-exterior.jpg` | 4:5 | 1600×2000 | Exterior of a six-storey boutique apartment building beside a working harbour in Fremantle, Western Australia. Pale concrete and glass facade, deep balconies with timber soffits, slim white balustrades, soft afternoon sun, clear pale blue sky, a glimpse of moored fishing boats at the base. |
| `location-aerial.jpg` | 4:5 | 1200×1500 | Aerial view over Fremantle, Western Australia: low-rise heritage West End streets, the fishing boat harbour and the Indian Ocean beyond, soft morning light, calm sea-blue water. |
| `location-harbour.jpg` | 4:5 | 1200×1500 | Fishing Boat Harbour in Fremantle at calm morning: white and blue fishing boats moored in still water, timber jetty, soft haze, gentle reflections. |
| `design-kitchen.jpg` | 16:9 | 1920×1080 | Apartment kitchen with a long white stone island, full-height light oak joinery, integrated appliances, brushed nickel tapware, large window with soft daylight and a hint of harbour view. |
| `design-living.jpg` | 4:5 | 1200×1500 | Minimalist apartment living room, light oak floor, white walls, low linen sofa in off-white, sea-blue cushion accent, floor-to-ceiling glass opening to a deep balcony, soft daylight. |
| `design-bathroom.jpg` | 4:5 | 1200×1500 | Bathroom in pale honed stone with a floating light oak vanity, brushed nickel tapware, frameless glass shower, soft daylight from a high window. |
| `design-terrace.jpg` | 16:9 | 1920×1080 | Wraparound apartment terrace with two outdoor chairs and a low table, pale timber decking, white balustrade, view over a calm harbour at golden hour, potted olive tree. |

### Optional: Dune scheme interiors

The Harbour / Dune toggle already swaps swatches, name and description. To make it swap photos too, generate these four (same sizes as the Harbour versions), save them as below, then add an `images` object to the `dune` entry in `schemes` (`lib/data.ts`) pointing at them.

| File | Prompt (add the shared style, but swap the palette to smoked oak, warm travertine and bronze) |
|---|---|
| `design-kitchen-dune.jpg` | Same kitchen layout as Harbour, smoked oak joinery, warm travertine island, bronze tapware, soft daylight. |
| `design-living-dune.jpg` | Same living room, smoked oak floor, warm sand linen sofa, travertine side table, bronze lamp, soft daylight. |
| `design-bathroom-dune.jpg` | Same bathroom, warm travertine walls, smoked oak vanity, bronze tapware. |
| `design-terrace-dune.jpg` | Same terrace, darker timber decking, terracotta pots, warm late-afternoon light over the harbour. |

## Floor plans

The four plans in `components/floorplans` are SVG components ported from the prototype (viewBox 400×300). Rooms are declared as `<Room x y w h name area />`, so swapping in the architect's dimensions is a data edit. Replace them with the architect's vector plans when available.

## Handoff notes

- The prototype's "Asset specs" button and placeholder labels are handoff-only and are not in this build.
- Filters and the scheme toggle are client state with `aria-pressed`.
- The register form validates (required fields, email format), focuses the first invalid field and shows a success state. It does not send anywhere yet; wire it in `components/sections/Register.tsx` `handleSubmit`.
- Images are artist impressions; the disclaimer is in the footer.
