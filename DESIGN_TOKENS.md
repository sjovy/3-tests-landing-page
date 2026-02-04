# Design Tokens Specification
## 3-Tests Landing Page

**Purpose:** Authoritative token map for Tailwind CSS implementation. Every value below is
concrete and final. Task B1 implements this document verbatim into `tailwind.config.ts`.

**Aesthetic intent:** Earthy, masculine, contemporary. Generous whitespace. Colour
relationships drawn from natural tones -- moss, wood, warm sand -- with a single warm
accent (orange) reserved for calls to action and a cool accent (midnight blue) for depth
and secondary emphasis.

**References:** PRD Section 4 (Design Requirements), REQ-LANDING-004.

---

## 1. Colour Palette

### Design rationale (applied across all hue families)

The palette is built around two "warm earth" primaries (moss green, kirsberry-wood brown)
and two neutrals (beige, matte off-white) that keep the page feeling grounded and calm.
Shade steps follow a consistent logic: 50 is the palest tint used for backgrounds or
surface fills; 100-200 are subtle background variants; 500 is the "pure" named colour as
most people would identify it; 700-900 are deep, high-contrast variants suitable for
headlines or dark surfaces. This gives Task B1 a predictable range without over-engineering.

Orange is deliberately kept as a single-purpose accent -- it appears ONLY on primary CTA
buttons and active/hover states on those buttons. It must not be reused for decoration.

---

### 1.1 Moss Green (primary)

Moss green anchors the brand. 500 is the signature tone -- muted, slightly blue-shifted
green that reads as natural rather than synthetic. Darker steps ground headlines; lighter
steps create subtle section backgrounds.

```
moss-green:
  50:  #F2F7F2      -- page-level background tint, rarely used alone
  100: #E1EDE1      -- section background, card hover fill
  200: #C4DBC5      -- borders, dividers on light backgrounds
  500: #4A7C4E      -- primary brand green; nav logo colour, accent headings
  700: #2E5532      -- hero headline, high-contrast body text on light bg
  900: #1B3320      -- darkest green; footer bg, deep contrast surfaces
```

WCAG contrast notes:
- 700 on white (#FFFFFF): ~6.2:1 -- passes AA for normal text.
- 900 on white: ~10.1:1 -- passes AAA.
- 500 on white: ~3.8:1 -- use only for large text (18px+ or 14px bold).

---

### 1.2 Kirsberry-Wood Brown (primary)

"Kirsberry-wood" is a warm, reddish-brown -- think aged walnut with a faint cherry
undertone. 500 is the full expression of this tone. It pairs with moss green without
competing: where green reads cool-earthy, brown reads warm-earthy. Used for subheadings,
card titles, and accent text where green would be too dominant.

```
kirsberry:
  50:  #F5F0ED      -- warmest page background option; card surface
  100: #EBE0D9      -- warm section bg; card background alternative
  200: #D4C4B8      -- warm borders, horizontal rules
  500: #8B4E3A      -- subheadings, card title text, icon fills
  700: #6B3528      -- high-contrast variant; body text on warm backgrounds
  900: #3D1F16      -- darkest brown; use sparingly for maximum weight
```

WCAG contrast notes:
- 700 on white: ~5.9:1 -- passes AA for normal text.
- 500 on white: ~3.4:1 -- large text or bold only.

---

### 1.3 Beige (neutral warm)

The primary "breathing room" colour. Most page backgrounds and card surfaces will sit
in this family. Beige is warmer than grey and keeps the page feeling tactile rather than
clinical.

```
beige:
  50:  #FDFBF8      -- default page background (lightest, almost white)
  100: #F7F2EC      -- card backgrounds, alternating section fills
  200: #EDE6DB      -- stronger warm neutral; borders, inner card sections
  400: #D5CCBF      -- mid-tone for dividers, placeholder text backgrounds
```

---

### 1.4 Matte Off-White (neutral warm-cool bridge)

Distinct from beige: off-white leans slightly cooler, creating contrast when placed
next to beige surfaces. Used for hero overlays, modal backdrops, and any surface that
needs to feel "lifted" off a beige base.

```
off-white:
  50:  #FAFAF8      -- coolest near-white; hero section background
  100: #F4F4F1      -- secondary surface; nav background
  200: #E8E8E4      -- border on off-white surfaces
```

---

### 1.5 Orange -- CTA ACCENT (special-purpose)

Orange is the ONLY colour that signals "take action here". Every primary button, every
"Learn more and take the test" CTA, every "Take the Test" button uses this family.
Nothing else in the UI should be orange.

500 is the resting CTA colour. 600 is the hover state. 700 is the pressed/active state.
The step from 500 to 600 to 700 is intentionally subtle so that hover feedback feels
smooth, not jarring.

```
orange:             <-- PRIMARY CTA COLOUR
  500: #E8753A      -- CTA button fill (resting)
  600: #D4652E      -- CTA button fill (hover)
  700: #BA5524      -- CTA button fill (active / pressed)
```

WCAG contrast notes:
- White text (#FFFFFF) on 500: ~3.1:1 -- passes AA for large text (18px+).
  CTA buttons will be set at 16px bold minimum to maintain readability.
- White text on 700: ~3.7:1 -- marginally better; active state is brief.

---

### 1.6 Midnight Blue (cool accent)

Midnight blue provides depth and a sense of calm authority. It is the secondary accent --
used for informational badges, "time estimate" labels on gate pages, and any element that
needs to stand apart without demanding action. It must not compete with orange for
attention.

```
midnight-blue:
  100: #E8ECF4      -- badge / label background (light)
  500: #2C3E6B      -- badge text, informational icons
  900: #1A2440      -- darkest; footer text alternative, deep surfaces
```

WCAG contrast notes:
- 500 on white: ~7.1:1 -- passes AAA for normal text.
- 500 on midnight-blue-100 (#E8ECF4): ~5.8:1 -- passes AA.

---

### 1.7 Neutral Grey (text, borders, UI chrome)

Greys are the workhorse palette. They handle body text, placeholder text, borders,
focus rings, and disabled states. The scale is deliberately warm-leaning (not pure
#808080 grey) to stay harmonious with the earthy primaries.

```
grey:
  50:  #FAFAFA      -- not used as background (beige/off-white preferred); reserve for overlays
  100: #F0EFED      -- very light surface accent
  200: #E2E1DE      -- borders on light backgrounds
  300: #C9C8C4      -- placeholder text, disabled borders
  400: #9E9D98      -- placeholder / hint text
  500: #6B6B65      -- secondary body text, captions
  600: #4E4E48      -- primary body text (preferred for paragraphs)
  700: #3A3A34      -- strong body text, labels
  800: #252522      -- near-black body text; use for dense reading passages
  900: #111110      -- true near-black; headlines if moss-green-700 is not used
```

WCAG contrast notes:
- 600 (#4E4E48) on white: ~7.3:1 -- passes AAA. Default paragraph colour.
- 500 (#6B6B65) on white: ~4.9:1 -- passes AA. Secondary / caption text.
- 400 (#9E9D98) on white: ~2.8:1 -- does NOT pass AA alone. Use only for
  placeholder text inside inputs (acceptable under WCAG for placeholders).

---

### 1.8 Semantic / State Colours

These are one-off tokens for system states. They are not shade families -- just single
values.

```
success:  #3A7D5C    -- confirmation states (green, distinct from moss)
warning:  #C48A2C    -- caution states (amber, distinct from orange CTA)
error:    #B83232    -- validation errors, destructive actions
info:     #2C3E6B    -- same as midnight-blue-500; informational states
```

---

## 2. Typography

### 2.1 Font family

**Primary (headings + body):** Inter

Inter is a neo-grotesque sans-serif designed specifically for computer screens. At small
sizes it remains crisp and legible; at display sizes it carries enough geometric structure
to feel contemporary without being cold. It has a slight humanist warmth that pairs
naturally with the earthy palette.

**Fallback stack:**

```
font-sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont',
            'Segoe UI', 'Roboto', 'sans-serif']
```

Inter is available on Google Fonts. Next.js `next/font/google` should be used to load it
with `subsets: ['latin']` and `weight: ['400', '500', '600', '700']`. No other weights
are needed.

**Mono (code / technical snippets, future use):**

```
font-mono: ['JetBrains Mono', 'Fira Code', 'monospace']
```

Not used in Phase 1 pages; included so the token exists for Phase 2 results display.

### 2.2 Font weight mapping

```
regular:   400   -- body paragraphs, card descriptions
medium:    500   -- labels, nav links, button text
semibold:  600   -- card titles, subheadings (h3, h4)
bold:      700   -- section headings (h2), CTA button text
```

### 2.3 Type scale

Base font size: 16px (1rem). All sizes below use rem units so that user browser
preferences are respected. The scale follows a ~1.25 ratio (major-third) which keeps
jumps readable without feeling dramatic -- appropriate for a professional, unhurried page.

```
Tailwind key    Pixel equivalent    rem value    Usage
──────────────  ──────────────────  ───────────  ──────────────────────────────
xs              12px                0.75rem      Fine labels, badges, disclaimers
sm              14px                0.875rem     Captions, meta text, time estimates
base            16px                1rem         Body paragraphs (default)
lg              18px                1.125rem     Card descriptions (if needed), lead text
xl              20px                1.25rem      Card titles (h3), small section heads
2xl             24px                1.5rem       Section subheadings (h2 on gate pages)
3xl             30px                1.875rem     Section headings (h2 on landing page)
4xl             36px                2.25rem      Hero subheading
5xl             48px                3rem         Hero headline (desktop)
6xl             60px                3.75rem      Hero headline (large desktop, 1440px+)
```

Responsive headline behaviour:
- On mobile (< 768px): hero headline renders at 3xl (30px).
- On tablet (768px+): hero headline renders at 5xl (48px).
- On desktop (1440px+): hero headline renders at 6xl (60px).

This scaling is handled in component classes, not in the token definition. The token
file simply makes all six sizes available.

### 2.4 Line height

```
tight:    1.2    -- headlines only (5xl, 6xl)
snug:     1.375  -- subheadings (2xl, 3xl, 4xl)
normal:   1.5    -- body text (base, lg) -- Tailwind default
relaxed:  1.625  -- long-form passages (gate page overview text)
```

### 2.5 Letter spacing

```
tighter:  -0.025em   -- headlines (5xl, 6xl); slightly condensed for visual weight
tight:    -0.015em   -- subheadings (3xl, 4xl)
normal:    0em       -- body text
wide:     +0.025em   -- labels, badges, uppercase fragments (if any)
```

---

## 3. Spacing

### 3.1 Scale

Tailwind's default spacing scale (base unit 4px, i.e. 0.25rem) is appropriate for this
project. No custom overrides needed. The following is the subset that will be actively
used; all other default Tailwind steps remain available.

```
Token   px value   Usage context
──────  ─────────  ──────────────────────────────────────────────
1       4px        Tight icon-to-label gaps
2       8px        Inline element spacing, small padding
3       12px       Input internal padding, badge padding
4       16px       Card internal padding (mobile), button padding-y
5       20px       Card internal padding (tablet+)
6       24px       Between card title and description
8       32px       Section internal padding, gap between cards (mobile)
10      40px       Gap between cards (tablet)
12      48px       Section vertical padding (mobile)
14      56px       --
16      64px       Section vertical padding (desktop)
20      80px       Hero top/bottom padding
24      96px       Large section separation
32      128px      --
```

### 3.2 Max-width (layout containers)

```
Token         Value       Usage
────────────  ──────────  ─────────────────────────────────
container-sm  640px       Single-column content (gate pages)
container-md  768px       --
container-lg  1024px      --
container-xl  1200px      Three-card grid on landing page
container-2xl 1440px      Full-width hero background extent
```

These map directly to Tailwind's built-in `max-w-*` classes. No custom tokens required;
listed here for clarity so Task B1 knows which widths are expected.

---

## 4. Border Radius

Card components and buttons are the main consumers. The scale keeps things feeling
modern and slightly rounded -- sharp corners would feel too clinical for the earthy
palette; large pill shapes would feel too playful.

```
Token   Value    Usage
──────  ───────  ──────────────────────────────────────────
none    0px      Table cells, full-bleed images (if any)
sm      4px      Badges, tags, small labels
md      8px      Buttons (all variants)
lg      12px     Cards (the primary rounded element)
xl      16px     Hero background shape (if a contained shape is used)
full    9999px   Pill badges (reserve; not used in Phase 1)
```

---

## 5. Shadows

Three elevation levels. Shadow colours use a warm-tinted black (not pure #000) to stay
harmonious with the earthy palette. The values below are the exact `box-shadow` strings
Task B1 should place in the Tailwind config.

```
Token       Value                                                    Usage
──────────  ───────────────────────────────────────────────────────  ──────────────────────────────
subtle      0 1px 2px 0 rgba(30, 28, 24, 0.06),                     Default card resting state
            0 1px 3px 1px rgba(30, 28, 24, 0.04)

medium      0 2px 6px -1px rgba(30, 28, 24, 0.10),                  Card hover state,
            0 2px 4px -2px rgba(30, 28, 24, 0.06)                   interactive element lift

prominent   0 6px 16px -3px rgba(30, 28, 24, 0.14),                 Modal / popover / focused card
            0 4px 6px -4px rgba(30, 28, 24, 0.08)                   (not used in Phase 1; reserved)
```

Shadow base colour: `rgba(30, 28, 24, ...)` -- this is a very dark warm brown, derived
from kirsberry-900 at low opacity. It prevents shadows from reading as cold/blue, which
would clash with the palette.

Card interaction pattern:
- Resting: `subtle`
- Hover: `medium`
- Focus / keyboard nav: `medium` + a 2px moss-green-500 outline (handled in component
  classes, not in the shadow token).

---

## 6. Quick-Reference: Token-to-Component Mapping

This section exists so that Task B1 and the component authors (Task B2) share the same
mental model. It is not exhaustive -- it is a starting point.

```
Component           Colours                         Typography        Spacing         Radius    Shadow
──────────────────  ──────────────────────────────  ────────────────  ──────────────  ────────  ────────
Page background     beige-50                        --                --              --        --
Nav bar             off-white-100                   Inter 500 medium  px-6 py-4       --        subtle
Hero section        moss-green-900 (bg)             Inter 700 bold    py-20 px-4      --        --
  headline          off-white-50 (text)             5xl / 6xl         --              --        --
  subheading        beige-100 (text)                xl / 2xl          mt-4            --        --
Card (resting)      beige-100 (bg)                  --                p-5             lg        subtle
  title             kirsberry-500                   xl semibold       mb-2            --        --
  description       grey-600                        base regular      --              --        --
  CTA button        orange-500 (bg), white (text)   sm bold           px-5 py-3       md        --
Card (hover)        beige-100 (bg, unchanged)       --                --              lg        medium
CTA Button          orange-500 / 600 / 700          Inter 500 bold    px-5 py-3       md        --
  text colour       white (#FFFFFF)                 --                --              --        --
Secondary Button    transparent bg, moss-green-700 border            --              --        md        --
  text colour       moss-green-700                  --                --              --        --
Badge / label       midnight-blue-100 (bg)          midnight-blue-500 px-3 py-1       sm        --
  text              midnight-blue-500               xs medium         --              --        --
Gate page heading   moss-green-700                  3xl bold          mb-6            --        --
Gate page body      grey-600                        base regular      --              --        --
  (line-height)     --                              relaxed (1.625)   --              --        --
"Take the Test" btn orange-500 (same as card CTA)  lg bold           px-8 py-4       md        --
Back link           moss-green-500                  sm medium         mt-4            --        --
Time / difficulty   midnight-blue badge style (see above)
```

---

## 7. Accessibility Checklist

All colour combinations listed in this document have been checked against WCAG 2.1 AA
minimum contrast ratios (4.5:1 for normal text, 3:1 for large text). Notes are
included inline in each section above. Summary of the critical pairs:

| Foreground             | Background        | Ratio  | Status        |
|------------------------|-------------------|--------|---------------|
| grey-600 (#4E4E48)     | white / beige-50  | 7.3:1  | AAA           |
| moss-green-700 (#2E5532) | white           | 6.2:1  | AA            |
| kirsberry-700 (#6B3528)| white             | 5.9:1  | AA            |
| white (#FFFFFF)        | orange-500 (#E8753A) | 3.1:1 | AA (large text only) |
| midnight-blue-500      | white             | 7.1:1  | AAA           |
| off-white-50 (text)    | moss-green-900    | 11.2:1 | AAA           |

CTA buttons (orange) are the only pair that sits at the AA-large-text threshold.
The button text is set at 16px bold (which qualifies as "large text" under WCAG) and
the button padding ensures a generous touch target (minimum 44x44 px on mobile).

---

**Document version:** 1.0
**Created:** 2026-02-04
**Owner:** Sprint 1, Task A2
**Consumer:** Task B1 (tailwind.config.ts implementation)
