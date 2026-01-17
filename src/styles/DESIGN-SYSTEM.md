# Design System

## Theme (defined in `main.css` via `@theme`)

### Colors

| Variable | Name | Value |
|----------|------|-------|
| `--color-primary` | Aegean Blue | `#1e3a5f` |
| `--color-primary-light` | Sky Blue | `#4a90b8` |
| `--color-primary-pale` | Soft Blue | `#e8f4f8` |
| `--color-secondary` | Warm White | `#fefdfb` |
| `--color-accent` | Greek Gold | `#c9a227` |
| `--color-text-primary` | Text Primary | `#2d3748` |
| `--color-text-secondary` | Text Secondary | `#64748b` |

### Fonts

| Variable | Font Family | Usage |
|----------|-------------|-------|
| `--font-heading` | Playfair Display | Headings (h1-h6) |
| `--font-body` | Source Sans 3 | Body text |

### Other Tokens

| Variable | Description |
|----------|-------------|
| `--shadow-card` | Card shadow (`0 2px 8px rgba(0, 0, 0, 0.08)`) |
| `--radius-card` | Card border radius (`12px`) |

## Utility CSS Classes

### Buttons

| Class | Description |
|-------|-------------|
| `.btn` | Base button styles (padding, border-radius, transition) |
| `.btn-primary` | Primary button (Aegean Blue background, white text) |
| `.btn-outline` | Outlined button (primary border, transparent background) |
| `.btn-accent` | Accent button (Greek Gold background, white text) |

### Layout

| Class | Description |
|-------|-------------|
| `.section-container` | Max-width container (72rem) with responsive horizontal padding |
| `.section-padding` | Responsive vertical padding for sections |

### Components

| Class | Description |
|-------|-------------|
| `.card` | Card with white background, rounded corners, and shadow |
| `.link-primary` | Styled link with hover underline effect |

## Web Components (Light DOM)

All web components use light DOM (no Shadow DOM) so Tailwind classes work directly.

| Component | File | Description |
|-----------|------|-------------|
| `<site-header>` | `components/site-header.js` | Main navigation header |
| `<site-footer>` | `components/site-footer.js` | Site footer |
| `<hero-section>` | `components/hero-section.js` | Hero section component |
