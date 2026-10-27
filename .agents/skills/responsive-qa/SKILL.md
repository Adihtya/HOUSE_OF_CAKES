---
name: responsive-qa
description: Responsive testing and layout validation across mobile, tablet, and widescreen breakpoints.
---

# Responsive QA Skill

## Breakpoint Strategy
- **Mobile (< 768px)**:
  - Avoid excessively long pinned sequences that hijack natural touch scrolling.
  - Convert conveyor into an effortless horizontal swipe carousel with touch momentum and visual indicators.
  - Hamburger menu with animated full-height drawer and backdrop blur.
  - Ensure typography scales appropriately (e.g., clamp(2rem, 8vw, 3.5rem)).
- **Tablet (768px - 1024px)**:
  - Maintain conveyor storytelling with proportional pin duration.
  - 2-column editorial layouts with comfortable touch targets (minimum 44px).
- **Desktop (> 1024px)**:
  - Full widescreen cinematic conveyor with multi-layer depth, parallax fruit elements, and rich floating badges.
- **Viewport QA Checks**:
  - Zero unintentional horizontal overflow (`overflow-x: clip` or `hidden` where appropriate).
  - Test both scroll-down and scroll-up transitions to prevent visual snapping.
