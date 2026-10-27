"use client";

import Image from "next/image";
import { ForgeButton } from "./ForgeButton";

export function ForgeApproach() {
  const partners = [
    { name: "VALRHONA GRAND CRU", origin: "TAIN-L'HERMITAGE" },
    { name: "DOM PÉRIGNON VINTAGE", origin: "ÉPERNAY" },
    { name: "ISIGNY STE MÈRE AOP", origin: "NORMANDIE" },
    { name: "BRONTE PISTACCHIO DOP", origin: "SICILIA" },
    { name: "TAHITIAN BOURBON PODS", origin: "POLYNÉSIE" },
    { name: "GUÉRANDE FLEUR DE SEL", origin: "BRETAGNE" },
    { name: "HAUTES-ALPES BERRIES", origin: "PROVENCE" },
    { name: "EDIBLE 24K GOLD FEUILLE", origin: "FLORENCE" },
  ];

  return (
    <section
      id="approach"
      className="relative w-full min-h-screen bg-[#0C0C0C] flex flex-col justify-between py-24 sm:py-32 px-6 sm:px-12 lg:px-20 border-t border-white/10 overflow-hidden"
    >
      {/* Background Editorial Atelier Photography with Moody Parallax Darkness */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=2000&q=85"
          alt="Master pastry craftsman sculpting chocolate in atelier"
          fill
          sizes="100vw"
          className="object-cover opacity-20 filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/80 to-[#0C0C0C]/90" />
      </div>

      {/* Top Heading */}
      <div className="relative z-10 max-w-4xl">
        <span className="block text-[10px] sm:text-xs font-semibold tracking-[0.35em] uppercase text-[#C5A064] mb-4">
          [ Philosophy &bull; Haute Confection ]
        </span>
        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight text-[#F2F1ED] leading-[1.08] capitalize">
          Our Approach To <br />
          <span className="italic font-light text-[#C5A064]">Every</span> Creation
        </h2>
      </div>

      {/* Center Atelier Quote */}
      <div className="relative z-10 max-w-2xl my-12">
        <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extralight italic text-[#F2F1ED]/90 leading-snug">
          &ldquo;We do not merely bake cakes. We sculpt monuments of sensory memory — where architectural geometry yields to melt-in-the-mouth decadence.&rdquo;
        </blockquote>
      </div>

      {/* Bottom Row: Monochromatic Ingredients Marquee & Narrative CTA */}
      <div className="relative z-10 w-full pt-12 border-t border-white/10 space-y-10">
        {/* Infinite Ingredient / Provenance Ticker */}
        <div className="relative w-full overflow-hidden mask-gradient-x">
          <div className="flex w-max gap-12 sm:gap-16 animate-marquee-slow py-2">
            {[...partners, ...partners].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 text-xs sm:text-sm tracking-[0.25em] uppercase font-mono text-[#F2F1ED]/40 hover:text-[#C5A064] transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A064]/50" />
                <span className="font-semibold text-[#F2F1ED]/70">{item.name}</span>
                <span className="text-[10px] text-[#F2F1ED]/30">[{item.origin}]</span>
              </div>
            ))}
          </div>
        </div>

        {/* Narrative & Action Button */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end justify-between">
          <div className="md:col-span-8">
            <p className="font-sans text-sm sm:text-base md:text-lg font-light text-[#F2F1ED]/70 leading-relaxed max-w-2xl">
              Every decision is intentional, every ingredient has provenance. Shaped around your palate, your celebration, and your most exacting standards.
            </p>
          </div>
          <div className="md:col-span-4 flex justify-start md:justify-end">
            <ForgeButton href="#commission" variant="gold">
              Start Your Project
            </ForgeButton>
          </div>
        </div>
      </div>
    </section>
  );
}
