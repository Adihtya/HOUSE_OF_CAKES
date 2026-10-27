# HOUSE OF CAKES — Creative and Engineering Rules

These rules define the design, architectural, and motion standards for the HOUSE OF CAKES tropical patisserie web experience.

## Brand Identity & Aesthetic Principles
- **Atmosphere**: Tropical, colorful café energy meets luxury patisserie art direction and a Japanese-inspired sushi-conveyor cake exhibition.
- **Palette**:
  - Deep cherry: `#8F1235`
  - Raspberry pink: `#F13D70`
  - Butter yellow: `#FFD968`
  - Warm cream: `#FFF4E5`
  - Chocolate brown: `#351C20`
  - Strawberry pink: `#FFA5BC`
  - Tropical orange: `#FF7448`
  - Leaf green: `#456B4A`
- **Typography**: Editorial serif (Cormorant Garamond) for expressive headlines, paired with modern geometric/clean sans-serif (DM Sans) for interface and body copy.
- **Graphic Details**: Organic frosting curves, editorial badges, numbered cake tags, botanical accents, fruit accents, dramatic depth shadows.

## Conveyor Engineering Rules
- **Scroll Synchronization**: The conveyor is horizontal, driven strictly by vertical scrolling via GSAP ScrollTrigger.
- **No Independent Runaway**: The conveyor scrub must never drift away from user scroll position.
- **Layering**: Scene layers (background environment, tropical foliage, conveyor structure, belt track, plates, cakes, labels, foreground lighting) must maintain realistic perspective and depth.
- **Interactive States**:
  - Hover / Tap: elevate plate, dynamic shadow, highlight label, flavor note preview.
  - Click: Accessible modal with rich flavor profile, demonstration pricing, and close controls.

## Section Architecture
- Section A: Responsive Navigation with mobile sheet
- Section B: Conveyor Hero (pinned scroll scrub)
- Section C: Brand Story & Introduction (asymmetrical editorial)
- Section D: Signature Collection (filter tabs, varied grid, detail modal)
- Section E: Tropical Flavor Stories (sensory ingredient pairings)
- Section F: The Art of Making (6-step bakery craftsmanship sequence)
- Section G: Signature Cake Spotlight (heroic focal showcase)
- Section H: Brand Manifesto (dramatic typography reveals)
- Section I: Journal & Social Gallery (curated photo editorial)
- Section J: Visit Us / Demo Contact & Hours
- Section K: Footer with oversized wordmark and navigation links
- Interactive Feature: "Build Your Dessert Box" mini cake tray curation

## Performance & Accessibility Standards
- Respect `prefers-reduced-motion` with simplified horizontal touch scroll / accessible alternate layout.
- Responsive across Mobile (<768px), Tablet (768px-1024px), and Desktop (>1024px).
- Zero broken images; use explicit aspect ratios and priority loading on hero assets.
- Semantic HTML and WCAG AA contrast compliance.
