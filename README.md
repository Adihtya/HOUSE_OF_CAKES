# HOUSE OF CAKES
### An Immersive, Animated, Tropical Patisserie & Cake Exhibition

> *"A little slice of extraordinary."*

HOUSE OF CAKES is an award-winning digital experience crafted for a luxury cake atelier. It blends vibrant tropical café energy (passion fruit, wild berries, mango, hibiscus) with haute French patisserie discipline and an interactive, Japanese-inspired sushi-conveyor-style cake exhibition driven by vertical scrolling.

---

## 🎂 Concept & Experience Highlights

1. **Scroll-Driven Horizontal Conveyor Hero**
   - Built with **GSAP ScrollTrigger**, pinning the hero while vertical scrolling advances an architectural brass-and-wood patisserie belt horizontally.
   - 8 distinct artisanal cake creations displayed on glazed porcelain pedestals with realistic 3D radial cast shadows and parallax botanical foliage.
   - Hover and tap elevation with instant flavor previews.

2. **Accessible Product Detail Modal**
   - Click any cake on the conveyor or collection grid to trigger a full sensory breakdown: flavor notes, sommelier pairing suggestions, dimension specifications, and verified sample ingredients.
   - Built with `motion/react` with full keyboard trap, ESC dismissal, and `role="dialog"` compliance.

3. **Curated Seasonal Collection with Category Filters**
   - Asymmetric editorial dessert grid breaking conventional templates.
   - Reactive category filtering: *All Creations*, *Signature Reserve*, *Dark Chocolate*, *Tropical & Fruity*, and *Velvet Cream*.

4. **Tropical Terroir & Flavor Stories**
   - Sensory ingredient pairings: *Wild Strawberry & Tahitian Vanilla*, *Alphonso Mango & Wild Passion Fruit*, *Sicilian Bronte Pistachio & Mascarpone*, and *72% Dark Cacao & Morello Cherry*.

5. **The Art of Making (6-Stage Craftsmanship)**
   - Interactive narrative sequence detailing the 6 stages of creation:
     1. Selecting Ingredients
     2. Preparing the Batter
     3. Slow Steam Baking
     4. Layering & Filling
     5. Sculpting & Decorating
     6. Presenting the Finished Cake

6. **Dramatic Signature Cake Spotlight**
   - Brooding, romantic focal feature around *The Midnight Chocolate* gateau set against deep cacao backdrops with interactive ingredient callouts.

7. **Brand Manifesto Typographic Interlude**
   - High-contrast editorial typography celebrating mindful celebration:
     > *"For the first bite. For the last crumb. For the moments that deserve something extraordinary."*

8. **Interactive "Build Your Dessert Box"**
   - Curate a bespoke 4-piece or 6-piece tasting flight.
   - Visual dessert tray slots with remove/clear interactions.
   - Real-time **Tasting Balance Meter** measuring Rich Cacao, Tropical & Fruit, and Velvet Cream proportions.
   - Reservation staging confirmation.

9. **Atelier Visual Journal & Lightbox Gallery**
   - Curated photography capturing morning prep, cake cuts, ingredient textures, and café atmosphere with an accessible image lightbox viewer.

10. **Visit Us & Salon Tasting Reservation**
    - Parisian salon information (29 Rue de Trévise, 75009 Paris), transport directions, and opening hours.
    - Validated interactive tasting reservation form with instant feedback.

---

## 🎨 Color Palette & Design System

- **Deep Cherry**: `#8F1235`
- **Raspberry Pink**: `#F13D70`
- **Butter Yellow**: `#FFD968`
- **Warm Cream**: `#FFF4E5`
- **Chocolate Brown**: `#351C20`
- **Strawberry Pink**: `#FFA5BC`
- **Tropical Orange**: `#FF7448`
- **Leaf Green**: `#456B4A`

### Typography
- **Editorial Headlines**: `Cormorant Garamond` (high-contrast, italic flourishes, loaded via `next/font/google`)
- **Interface & Body**: `DM Sans` (geometric, highly legible modern sans-serif)

---

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Library**: React 19 & TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation System**:
  - [GSAP](https://greensock.com/gsap/) with `ScrollTrigger` for scrubbed conveyor synchronization and multi-plane parallax.
  - [Motion](https://motion.dev/) (`motion/react`) for spring dialogs, filter transitions, and interactive controls.
- **Icons**: [Lucide React](https://lucide.dev/)
- **Accessibility & State**: `useSyncExternalStore` for reduced motion preferences (`prefers-reduced-motion`) and viewport detection.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to experience the site.

### 3. Build for Production
```bash
npm run build
npm run start
```

### 4. Code Quality Validation
```bash
npm run lint
```

---

## 🏛️ Project Architecture

```
src/
├── animations/
│   └── gsap.ts               # GSAP & ScrollTrigger SSR-safe registration
├── app/
│   ├── globals.css           # Design tokens, custom scrollbars, and styling
│   ├── layout.tsx            # Root layout with Cormorant Garamond & DM Sans
│   └── page.tsx              # Homepage composition and interactive state
├── components/
│   ├── BoxBuilder.tsx        # Interactive dessert box tasting flight curator
│   ├── BrandIntroduction.tsx # Asymmetric editorial philosophy & pillars
│   ├── BrandManifesto.tsx    # Typographic manifesto interlude
│   ├── CakeSpotlight.tsx     # Dramatic feature on The Midnight Chocolate
│   ├── ConveyorHero.tsx      # Scroll-controlled horizontal conveyor hero
│   ├── Footer.tsx            # Distinctive wordmark, salon details & navigation
│   ├── Gallery.tsx           # Photo journal grid with lightbox modal
│   ├── IngredientStory.tsx   # Botanical terroir & flavor pairings
│   ├── MakingOf.tsx          # 6-stage craftsmanship interactive story
│   ├── MobileMenu.tsx        # Slide-over responsive navigation drawer
│   ├── Navigation.tsx        # Dynamic blur header with cart badge
│   ├── ProductModal.tsx      # Accessible dialog with tasting & sourcing notes
│   └── SignatureCollection.tsx # Filterable seasonal cake exhibition
├── data/
│   ├── content.ts            # Flavor stories, craft stages, gallery, salon info
│   ├── navigation.ts         # Navigation items and section anchors
│   └── products.ts           # 8 artisan cake creations database
├── hooks/
│   ├── useMediaQuery.ts      # SSR-safe reactive media queries
│   └── useReducedMotion.ts   # Accessibility reduced-motion detection
└── types/
    └── product.ts            # TypeScript interfaces
```

---

## 📜 License & Acknowledgments

Crafted for the House of Cakes atelier exploration.
Inspired by tropical brunch atelier atmospheres and Parisian haute patisserie craft.
