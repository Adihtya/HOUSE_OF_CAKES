<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>House of Cakes - README</title>
    <style>
        body {
            font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 900px;
            margin: 0 auto;
            padding: 40px 20px;
            background-color: #fafafa;
        }
        .center { text-align: center; }
        img { max-width: 100%; height: auto; }
        h1, h2, h3 { color: #351C20; margin-top: 1.5em; }
        h1 { font-family: 'Cormorant Garamond', serif; font-size: 3em; margin-bottom: 0; }
        .hero-img { border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.15); margin-bottom: 40px; max-height: 400px; object-fit: cover; width: 100%; }
        table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
        td, th { padding: 15px; vertical-align: top; }
        .tech-table th { border-bottom: 2px solid #ddd; text-align: left; }
        .tech-table td { border-bottom: 1px solid #ddd; }
        .badge { display: inline-block; margin: 0 5px; }
        .color-swatch { border-radius: 50%; width: 60px; height: 60px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .quote { border-left: 4px solid #FFD968; font-style: italic; background: #FFF4E5; padding: 20px; border-radius: 8px; margin: 30px 0; }
        code { background: #eee; padding: 3px 6px; border-radius: 4px; font-family: monospace; font-size: 0.9em; }
        pre { background: #2d2d2d; color: #ccc; padding: 20px; border-radius: 8px; overflow-x: auto; }
        pre code { background: transparent; padding: 0; color: inherit; }
        hr { border: 0; height: 1px; background: #ddd; margin: 40px 0; }
        a { color: #8F1235; text-decoration: none; }
        a:hover { text-decoration: underline; }
        .footer-gif { border-radius: 50%; border: 4px solid #FFF4E5; box-shadow: 0 4px 15px rgba(0,0,0,0.15); margin-bottom: 20px; width: 150px; height: 150px; object-fit: cover; }
    </style>
</head>
<body>

<div class="center">
  <!-- ANIMATED HERO IMAGE -->
  <img src="https://imgs.search.brave.com/JG1Ycvx4_YiS1P2n9koT012wOFoP_sKstSjdNWpAtug/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTQuZ2lwaHkuY29t/L21lZGlhL3YxLlky/bGtQVGM1TUdJM05q/RXhiV2QxZW5ab016/RnNaVzE0YW5VeGVX/cGlPR2t5YlRZek5U/VnFhM1J1Tm1SNGVE/VnRhWEozYkNabGNE/MTJNVjluYVdaelgz/TmxZWEpqYUNaamRE/MW4va2ZNR0QzS3dk/SXJwbS8yMDAuZ2lm.gif" alt="House of Cakes Animated Banner" class="hero-img">

  <h1>✦ HOUSE OF CAKES ✦</h1>
  <p style="font-size: 1.2em; color: #666; font-style: italic; margin-top: 10px;">
    An Immersive, Animated, Tropical Patisserie &amp; Cake Exhibition
  </p>

  <p style="margin: 20px 0;">
    <a href="#experience"><b>Experience</b></a> &nbsp;•&nbsp;
    <a href="#design-system"><b>Design System</b></a> &nbsp;•&nbsp;
    <a href="#tech-stack"><b>Tech Stack</b></a> &nbsp;•&nbsp;
    <a href="#getting-started"><b>Getting Started</b></a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/Next.js-111111?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" class="badge" />
    <img src="https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19" class="badge" />
    <img src="https://img.shields.io/badge/Tailwind_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" class="badge" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" class="badge" />
    <img src="https://img.shields.io/badge/GSAP_Animation-88CE02?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP" class="badge" />
  </p>
</div>

<div class="quote">
  🍰 <strong>A Little Slice of Extraordinary:</strong> HOUSE OF CAKES is an award-winning digital experience crafted for a luxury cake atelier. It masterfully blends vibrant tropical café energy (passion fruit, wild berries, mango) with haute French patisserie discipline. The digital centerpiece is a highly interactive, Japanese-inspired sushi-conveyor-style cake exhibition driven entirely by vertical scrolling.
</div>

<hr>

<h2 id="experience">✨ The Experience</h2>
<p>We broke the conventional e-commerce grid to build an editorial, sensory journey.</p> 

<table>
  <tr>
    <td width="50%">
      <h3>🔄 Scroll-Driven Conveyor Hero</h3>
      <p>Powered by <b>GSAP ScrollTrigger</b>. The hero pins in place while vertical scrolling advances an architectural brass-and-wood patisserie belt horizontally. Showcases 8 artisanal cakes with 3D radial cast shadows and parallax foliage.</p>
    </td>
    <td width="50%">
      <h3>🔍 Sensory Detail Modal</h3>
      <p>An accessible, <code>motion/react</code>-powered dialog. Click any creation to uncover flavor notes, sommelier pairing suggestions, dimension specs, and verified ingredients. Features full keyboard trap and ESC dismissal.</p>
    </td>
  </tr>
  <tr>
    <td>
      <h3>🧑‍🍳 The Art of Making</h3>
      <p>An interactive 6-stage craftsmanship narrative:<br/><i>Ingredients ➝ Batter ➝ Steam Baking ➝ Layering ➝ Sculpting ➝ Presentation.</i></p>
    </td>
    <td>
      <h3>🍱 Build Your Dessert Box</h3>
      <p>Curate a bespoke 4 or 6-piece tasting flight. Features visual drag-and-drop slots and a real-time <b>Tasting Balance Meter</b> (Rich Cacao, Tropical &amp; Fruit, Velvet Cream).</p>
    </td>
  </tr>
  <tr>
    <td>
      <h3>🖤 The Midnight Spotlight</h3>
      <p>A brooding, romantic focal feature highlighting <i>The Midnight Chocolate</i> gateau against deep cacao backdrops with interactive ingredient callouts.</p>
    </td>
    <td>
      <h3>🌿 Tropical Terroir</h3>
      <p>Sensory storytelling featuring pairings like <i>Wild Strawberry &amp; Tahitian Vanilla</i> and <i>Sicilian Bronte Pistachio &amp; Mascarpone</i>.</p>
    </td>
  </tr>
</table>

<hr>

<h2 id="design-system">🎨 Design System</h2>
<p>Our aesthetic is rooted in the natural vibrancy of our ingredients, contrasted against dark, luxurious chocolate tones.</p>

<h3>✦ Atelier Color Palette</h3>
<div class="center">
  <table>
    <tr>
      <td class="center"><img src="https://placehold.co/60x60/8F1235/8F1235.png" class="color-swatch"><br/><b>Deep Cherry</b><br/><code>#8F1235</code></td>
      <td class="center"><img src="https://placehold.co/60x60/F13D70/F13D70.png" class="color-swatch"><br/><b>Raspberry Pink</b><br/><code>#F13D70</code></td>
      <td class="center"><img src="https://placehold.co/60x60/FFA5BC/FFA5BC.png" class="color-swatch"><br/><b>Strawberry</b><br/><code>#FFA5BC</code></td>
      <td class="center"><img src="https://placehold.co/60x60/FF7448/FF7448.png" class="color-swatch"><br/><b>Tropical Orange</b><br/><code>#FF7448</code></td>
    </tr>
    <tr>
      <td class="center"><img src="https://placehold.co/60x60/FFD968/FFD968.png" class="color-swatch"><br/><b>Butter Yellow</b><br/><code>#FFD968</code></td>
      <td class="center"><img src="https://placehold.co/60x60/FFF4E5/FFF4E5.png" class="color-swatch"><br/><b>Warm Cream</b><br/><code>#FFF4E5</code></td>
      <td class="center"><img src="https://placehold.co/60x60/456B4A/456B4A.png" class="color-swatch"><br/><b>Leaf Green</b><br/><code>#456B4A</code></td>
      <td class="center"><img src="https://placehold.co/60x60/351C20/351C20.png" class="color-swatch"><br/><b>Chocolate</b><br/><code>#351C20</code></td>
    </tr>
  </table>
</div>

<h3>✦ Typography</h3>
<ul>
  <li><strong>Editorial Headlines:</strong> <code>Cormorant Garamond</code> <em>(High-contrast, italic flourishes)</em></li>
  <li><strong>Interface &amp; Body:</strong> <code>DM Sans</code> <em>(Geometric, highly legible modern sans-serif)</em></li>
</ul>

<hr>

<h2 id="tech-stack">🛠️ Technology Stack</h2>
<table class="tech-table">
  <thead>
    <tr>
      <th>Architecture</th>
      <th>Technologies Used</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Core Framework</strong></td>
      <td><a href="https://nextjs.org/">Next.js (App Router)</a> • React 19 • TypeScript</td>
    </tr>
    <tr>
      <td><strong>Styling Engine</strong></td>
      <td><a href="https://tailwindcss.com/">Tailwind CSS v4</a></td>
    </tr>
    <tr>
      <td><strong>Animation Choreography</strong></td>
      <td><a href="https://greensock.com/">GSAP</a> <code>ScrollTrigger</code> • <a href="https://motion.dev/">Motion/React</a></td>
    </tr>
    <tr>
      <td><strong>UI &amp; Accessibility</strong></td>
      <td><a href="https://lucide.dev/">Lucide React</a> • <code>useSyncExternalStore</code> <em>(reduced-motion SSR)</em></td>
    </tr>
  </tbody>
</table>

<hr>

<h2 id="getting-started">🚀 Getting Started</h2>
<p>Welcome to the kitchen. Here is how you can spin up the atelier environment locally.</p>

<pre><code># 1. Clone the repository &amp; install packages
npm install

# 2. Start the development server
npm run dev</code></pre>

<div class="quote" style="background-color: #f1f8ff; border-left-color: #0366d6;">
  <strong>Note:</strong> Open <a href="http://localhost:3000">http://localhost:3000</a> in your browser to experience the horizontal scroll features.
</div>

<pre><code># 3. Code Quality &amp; Production Build
npm run lint
npm run build &amp;&amp; npm run start</code></pre>

<hr>

<h2>🏛️ Project Architecture</h2>
<pre><code>src/
├── animations/         ✦ GSAP &amp; ScrollTrigger SSR-safe registration
├── app/                ✦ Next.js App Router (layout, page, globals.css)
├── components/
│   ├── BoxBuilder.tsx  ✦ Interactive dessert box tasting flight curator
│   ├── ConveyorHero.tsx✦ Scroll-controlled horizontal conveyor hero
│   ├── ProductModal.tsx✦ Accessible dialog with tasting notes
│   └── ...             
├── data/               ✦ Product DB, flavor stories, salon info
├── hooks/              ✦ SSR-safe reactive media queries &amp; reduced-motion
└── types/              ✦ TypeScript interfaces &amp; type definitions</code></pre>

<hr>

<div class="center" style="margin-top: 50px;">
  <img src="https://media.giphy.com/media/26BRv0ThflsHCqDrG/giphy.gif" class="footer-gif" alt="Chef's Kiss">
  
  <p><i>"For the first bite. For the last crumb.<br/>For the moments that deserve something extraordinary."</i></p>
  
  <p>Crafted for the <b>House of Cakes</b> by <a href="https://github.com/DevdattaRane">Devdatta Rane</a>.</p>
</div>

</body>
</html>
