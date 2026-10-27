---
name: motion-design
description: Motion choreography, GSAP ScrollTrigger timelines, and React Motion interactions for fluid storytelling.
---

# Motion Design Skill

## Motion Choreography Principles
1. **Scroll-Driven Horizontal Conveyor**:
   - Pinned hero section using GSAP ScrollTrigger.
   - Smooth `scrub: 1` or `scrub: true` synchronization so the conveyor moves strictly in tandem with vertical scroll.
   - Multi-plane parallax: background foliage moves at 0.4x, conveyor structure at 1.0x, foreground botanical leaves at 1.3x.
2. **Spring Physics & Micro-interactions**:
   - Use `motion` for React for interactive elements (modals, sheet menus, hover states, filter tab pills).
   - Plates float gently on hover: `translateY(-10px) scale(1.03)` with soft drop-shadow expansion.
3. **Timeline Cleanup & Lifecycle**:
   - Always run GSAP within `gsap.context()` in React `useEffect` or `useLayoutEffect` to prevent memory leaks and duplicate triggers.
   - Call `ScrollTrigger.refresh()` on dynamic content mount or viewport resize.
4. **Reduced Motion**:
   - Check `window.matchMedia('(prefers-reduced-motion: reduce)')`.
   - Provide non-pinned, smooth horizontal or grid alternative when reduced motion is preferred.
