# Design Brief: Dealwel Properties

## Visual Direction
Corporate premium tech aesthetic. Clean, structured, authority-driven real estate platform. Deep Teal primary (#0F4C5C) signifies trust and professionalism. Avoid gold/luxury tones. Every surface intentionally treated. Conversion-focused with clear CTAs and minimal distractions.

## Tone & Brand Personality
**Immersive** — engaging property visuals and search experience. **Alive** — subtle micro-animations and responsive feedback. **Authoritative** — professional layout, verified listings messaging, expert positioning.

## Color Palette

| Token | OKLCH | Purpose |
|-------|-------|---------|
| Primary (Deep Teal) | 0.42 0.12 252 | CTAs, accents, primary actions |
| Secondary (Dark Green) | 0.28 0.09 148 | Secondary emphasis, borders |
| Accent (Soft Slate) | 0.60 0.04 260 | Highlights, hover states |
| Muted (Light Grey) | 0.92 0.02 216 | Alternate backgrounds, hover |
| Background | 0.985 0 0 | Page background, neutral base |
| Foreground | 0.18 0 0 | Body text, dark content |
| Card | 1.0 0 0 | Card surfaces, white base |
| Border | 0.88 0.01 216 | Subtle dividers, input borders |
| Destructive | 0.55 0.22 25 | Errors, warnings |

## Typography

| Layer | Font | Weight | Use |
|-------|------|--------|-----|
| Display | General Sans | 700 | Headlines, hero, section titles |
| Body | DM Sans | 400 | Body text, descriptions, form labels |
| Mono | Geist Mono | 400 | Code, data, investment metrics |

3-tier hierarchy: H1 (3rem, 700), H2 (2rem, 700), H3 (1.25rem, 600). Body 1rem/1.5 line-height.

## Elevation & Depth

| Shadow | OKLCH Value | Use |
|--------|-------------|-----|
| subtle | 0 2px 8px 0.08 opacity | Card surfaces, light elevation |
| elevated | 0 8px 16px 0.12 opacity | Modals, popovers, prominent cards |
| hover | 0 4px 12px 0.1 opacity | Interactive hover state |
| glow | 0 0 20px primary/0.25 | Focus glow on CTAs |

## Structural Zones

| Zone | Background | Border | Elevation | Notes |
|------|-----------|--------|-----------|-------|
| Header | card (white) | border-bottom subtle | subtle shadow | Minimal nav, logo, mobile menu |
| Hero | card (white) + dark overlay right | none | none | Split layout: text left, image right |
| Search | card (white) | border subtle | elevated | Sticky container, filter dropdowns |
| Featured Grid | background (light grey) | none | none | 3-col grid, cards with hover-lift |
| Trust Section | background (light grey) | none | none | 4 minimal icon cards, no shadow |
| Investment | muted/30 background | none | none | Alternate grey zone, ROI copy |
| Testimonials | background (white) | border subtle | subtle | Avatar cards, credible layout |
| Final CTA | primary (teal) background | none | elevated | White text, high contrast |
| Mobile Bottom Bar | primary (teal) | none | elevated | Sticky 64px, thumb-friendly buttons |

## Spacing & Rhythm
Container max-width 1400px. Generous whitespace: 3rem hero padding, 2rem section gaps. Grid: 1.5rem gutter. Mobile-first: 1rem padding on sm, 1.5rem on md, 2rem on lg. Consistent 8px spacing unit baseline.

## Component Patterns

- **Cards**: 8px radius, shadow-subtle, hover-lift effect (translateY -4px)
- **Buttons**: 4px radius, primary = teal bg + white text, hover = glow + 0.95 opacity
- **Inputs**: 4px radius, border subtle, focus = ring-primary
- **Badge**: 4px radius, muted background, small typography
- **Icon**: 24px standard, centered in 48px grid

## Motion Choreography
Fade-in on scroll (600ms ease-out). Hover glow on CTAs (300ms cubic-bezier). Card lift on hover (300ms, -4px Y). Button press: opacity 0.95 (200ms). Mobile bottom bar slides up on nav (300ms slideDown). All transitions use smooth cubic-bezier(0.4, 0, 0.2, 1). No bouncy easing, no delays between elements.

## Anti-Patterns Avoided
No gold accents. No heavy shadows (0.2+ opacity). No bouncy animations. No generic Tailwind defaults. No rainbow palettes. No full-page gradients. No scattered micro-interactions without orchestration.

## Signature Detail
Sticky search bar with smooth filter transitions. Mobile bottom bar with teal background and white text. Property cards with image zoom on hover (1.02x scale). Teal glow on CTA hover. Clean grid alignment (sharp pixel boundaries) across all breakpoints.
