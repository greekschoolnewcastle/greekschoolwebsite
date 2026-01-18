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
| `--color-accent-light` | Light Gold | `#e8d48a` |
| `--color-text-primary` | Text Primary | `#2d3748` |
| `--color-text-secondary` | Text Secondary | `#64748b` |

### Fonts

| Variable | Font Family | Usage |
|----------|-------------|-------|
| `--font-heading` | Playfair Display | Headings (h1-h6) - elegant serif for titles |
| `--font-body` | Lora | Body text - warm serif with calligraphic roots |

### Shadows

| Variable | Description |
|----------|-------------|
| `--shadow-card` | Card shadow (`0 4px 20px rgba(30, 58, 95, 0.08)`) |
| `--shadow-card-hover` | Card hover shadow (`0 12px 40px rgba(30, 58, 95, 0.15)`) |
| `--shadow-elevated` | Elevated elements (`0 20px 60px rgba(30, 58, 95, 0.2)`) |
| `--radius-card` | Card border radius (`16px`) |

## Animations

| Class | Description |
|-------|-------------|
| `.animate-fade-in-up` | Fade in while moving up (0.8s) |
| `.animate-fade-in` | Simple fade in (0.6s) |
| `.animate-slide-in-left` | Slide in from left (0.7s) |
| `.delay-100` to `.delay-500` | Animation delays (100ms increments) |

## Decorative Elements

### Greek Key Pattern

| Class | Description |
|-------|-------------|
| `.greek-pattern` | Gold meander pattern (12px height) - use as section dividers |
| `.greek-pattern-subtle` | Subtle blue meander pattern for backgrounds |

### Decorative Utilities

| Class | Description |
|-------|-------------|
| `.divider-gold` | Centered gold gradient divider line |
| `.heading-accent` | Adds gold underline accent to headings |
| `.corner-accent` | Adds decorative gold corner borders |
| `.img-decorated` | Adds offset gold border frame to images |

## Utility CSS Classes

### Buttons

| Class | Description |
|-------|-------------|
| `.btn` | Base button (padding, transitions, shimmer effect on hover) |
| `.btn-primary` | Primary button with gradient, shadow, lift on hover |
| `.btn-outline` | Outlined button with fill transition on hover |
| `.btn-accent` | Gold accent button with lift on hover |

### Layout

| Class | Description |
|-------|-------------|
| `.section-container` | Max-width container (72rem) with responsive padding |
| `.section-padding` | Generous responsive vertical padding (4rem-8rem) |

### Cards

| Class | Description |
|-------|-------------|
| `.card` | White card with shadow, lift animation, and gradient top border on hover |

### Links

| Class | Description |
|-------|-------------|
| `.link-primary` | Styled link with animated gold underline on hover |

### Text

| Class | Description |
|-------|-------------|
| `.text-lead` | Larger intro text with relaxed line height |

### Backgrounds

| Class | Description |
|-------|-------------|
| `.bg-texture` | Adds subtle noise texture overlay |
| `.bg-gradient-primary` | Vertical primary color gradient |
| `.bg-gradient-pale` | Soft blue to white gradient |

## Design Philosophy

This design draws inspiration from Greek heritage while maintaining modern web standards:

- **Typography**: Playfair Display headings evoke Mediterranean elegance, paired with warm Lora body text
- **Colors**: Deep Aegean blue paired with Greek gold creates an authentic cultural connection
- **Patterns**: The Greek key (meander) pattern is used sparingly as decorative accents
- **Motion**: Smooth animations create a refined, premium feel
- **Depth**: Layered shadows and hover effects add dimensionality
