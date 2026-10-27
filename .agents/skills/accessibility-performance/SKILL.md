---
name: accessibility-performance
description: Performance optimization, Next.js image loading, semantic HTML, and accessibility compliance.
---

# Accessibility & Performance Skill

## Accessibility Directives
1. **Dialog & Modals**:
   - `role="dialog"`, `aria-modal="true"`, `aria-labelledby` referencing modal title.
   - Escape key dismisses modal.
   - Focus trapped within open modal and restored to trigger on exit.
2. **Keyboard Navigation**:
   - Visible `:focus-visible` styling with high contrast ring.
   - Skip to main content link for keyboard users.
3. **Contrast & Legibility**:
   - WCAG AA minimum 4.5:1 contrast for body copy on warm backgrounds.
   - Crisp font sizing and line height for editorial headings.

## Performance Directives
1. **Image Optimization**:
   - Hero images preloaded with priority.
   - Below-the-fold images lazy-loaded with explicit `aspect-ratio` to prevent cumulative layout shift (CLS).
2. **Bundle Optimization**:
   - Tree-shake GSAP plugins (only register ScrollTrigger).
   - Use React client components strictly when state, effects, or DOM events are required.
3. **Scroll Efficiency**:
   - Use `transform` and `opacity` exclusively for animations to stay on compositor thread.
