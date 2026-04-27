# Homepage Conversion Plan (Native React First)

## Goal

Deliver a native React homepage matching current behavior:

- Hero/intro and navigation sections
- Top-level sections and links to all content categories
- Stable copy-to-clipboard and call-to-action behavior on related pages
- No dependency on raw WordPress/Elementor markup

## Data input

Use extracted homepage JSON:
- `src/pages/index.json` (index item for id `index`)
- Optional full payload from `src/pages/index.json` if needed for title/description wiring

## Suggested component plan

1. `site-shell`
   - Shared container with page background and layout wrappers
   - Uses root layout classes from `src/index.css`
2. `header`
   - Brand + primary nav links
3. `hero`
   - Title, summary line, and featured action links
4. `section-grid`
   - 3 section blocks: Explore / Collections / Tools
5. `link-item`
   - Reusable link style used inside section lists

## CSS plan

1. Introduce page-specific stylesheet (or section in `src/index.css`) with minimal classes:
   - remove dependency on `.sb-*` only where needed
   - convert from WordPress class-heavy blocks to semantic selectors:
     - `.homepage`
     - `.homepage__section`
     - `.homepage__title`
     - `.homepage__list`
2. Keep global theme in `src/index.css`:
   - body background gradient
   - base typography and spacing

## WP bloat cleanup plan for homepage

From extracted HTML, bloat appears as:

- Nested wrappers like `elementor-*`, `wp-block-*`, and section/container noise
- Repeated inline utility classes per section
- Extra script hooks that are not used by React

Do not port these into React components.

Instead:

- keep `h1`, `p`, links, and semantic text
- drop all container-level wrappers and keep content arrays in JSX
- preserve link behavior with router-driven navigation

## Acceptance criteria

- Load path `/` renders instantly without `LegacyFrame`
- Links point to converted and converted-but-fallback pages where available
- Layout is readable on mobile and desktop
- No inline WordPress CSS classes in the rendered JSX
- Page metadata uses native React `<title>` and description where needed

## Open questions

1. Should hero use a single CTA, two CTA buttons, or both?
2. Confirm final homepage section order before implementation lock.
