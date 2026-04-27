# Smart Bites React Migration Plan

## Scope

Migrate the WordPress static export into a native React site while preserving the existing page experience.

## Structure

This folder stores conversion documents page by page:

- `homepage.md` — source for the homepage conversion
- `site-map.md` — page list, priority, and dependency order
- `articles.md`, `blog-posts.md`, etc. (added as we complete planning each page)

## Source data

We now store extracted page data as JSON in `src/pages/*.json` (the extraction script writes there).

### Bloat source (WordPress/Elementor)

Most HTML noise is from:

- Repeated WordPress wrapper classes (`wp-*`, `elementor-*`)
- Repeated inline styles and script placeholders
- Plugin metadata attributes (`data-id`, `data-element_type`, `data-widget_type`)
- Page-specific style and script blocks copied into page head/body

Conversion strategy: keep only semantic article content and metadata in JSON, then render through shared React components with local page style.
*** End Patch
