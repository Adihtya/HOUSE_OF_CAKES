"use client";

import { useState } from "react";
import Image from "next/image";
import { ForgeButton } from "./ForgeButton";

interface PillarItem {
  number: string;
  total: string;
  title: string;
  subtitle: string;
  description: string;
  specifications: string[];
  image: string;
  imageAlt: string;
}

export function ForgePillars() {
  const [activePillar, setActivePillar] = useState(0);

  const pillars: PillarItem[] = [
    {
      number: "01",
      total: "/ 03",
      title: "Sculptural Identity",
      subtitle: "Bespoke Monoliths & Spatial Proportion",
      description:
        "Every creation begins with the architecture of the venue. We sketch tiered monoliths that balance vertical drama with structural integrity, reflecting your aesthetic and personal standard of luxury.",
      specifications: [
        "Architectural Cadence & Tier Ratios",
        "Harmonized Room Palette & Lighting Cohesion",
        "One-of-One Bespoke Sugar Sculptures",
      ],
      image:
        "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Architectural multi-tiered wedding sculpture cake",
    },
    {
      number: "02",
      total: "/ 03",
      title: "Sensory Architecture",
      subtitle: "72% Grand Cru Ganache & Rare Botanicals",
      description:
        "Flavor is never an afterthought. We engineer each layer to harmonize contrasting textures: crisp feuilletine praline, slow-simmered berry reductions, and aerated French namelaka creams.",
      specifications: [
        "Single-Origin Cacao Calibration",
        "Wild Harvested Alpine Botanicals",
        "Controlled Sugar Reduction for Maximum Purity",
      ],
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Decadent dark chocolate ganache cake with gold flecks",
    },
    {
      number: "03",
      total: "/ 03",
      title: "Haute Finishing",
      subtitle: "Edible 24k Gold & White-Glove Unveiling",
      description:
        "Finished entirely by hand in the quiet hours before your gala. Every gold leaf leafing, isomalt glass crystal, and velvet spray is applied with precision, followed by climate-controlled delivery.",
      specifications: [
        "24-Karat Edible Gold & Silver Leaf",
        "Hand-Turned Dark Chocolate Quill Plumes",
        "Climate-Controlled Concierge Delivery",
      ],
      image:
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Pristine white chantilly cake with fresh berries and gold leaf",
    },
  ];

  return (
    <section
      id="pillars"
      className="relative w-full bg-[#111111] py-24 sm:py-36 px-6 sm:px-12 lg:px-20 border-t border-white/10"
      aria-label="The Three Pillars of House of Cakes"
    >
      <div className="max-w-[1500px] mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <span className="block text-[10px] sm:text-xs font-semibold tracking-[0.35em] uppercase text-[#C5A064] mb-3">
            [ The Atelier Standards ]
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-extralight text-[#F2F1ED] leading-[1.1] capitalize">
            The Three Principles of Our Craft
          </h2>
        </div>

        {/* Desktop Split Sticky Layout (Forge Automotive Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Interactive Image Frame */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden border border-white/10 bg-[#0C0C0C] shadow-2xl">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    activePillar === idx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={pillar.image}
                    alt={pillar.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                    priority={idx === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#F2F1ED]/80">
                    <span>{pillar.title}</span>
                    <span className="text-[#C5A064]">{pillar.number} / 03</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Switcher Indicators */}
            <div className="flex items-center gap-3 mt-6">
              {pillars.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePillar(idx)}
                  className={`h-1 transition-all duration-300 rounded-full cursor-pointer ${
                    activePillar === idx
                      ? "w-12 bg-[#C5A064]"
                      : "w-6 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`View Pillar ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Scrolling Narrative Cards */}
          <div className="lg:col-span-6 space-y-12 sm:space-y-16">
            {pillars.map((item, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActivePillar(idx)}
                className={`p-8 sm:p-10 rounded-sm border transition-all duration-500 ${
                  activePillar === idx
                    ? "border-[#C5A064]/50 bg-[#161616]/90 shadow-xl"
                    : "border-white/5 bg-[#141414]/50 opacity-70 hover:opacity-100"
                }`}
              >
                {/* Number & Kicker */}
                <div className="flex items-center justify-between font-mono text-sm tracking-widest text-[#C5A064] mb-6">
                  <span>{item.number}</span>
                  <span className="text-white/40">{item.total}</span>
                </div>

                {/* Pillar Title */}
                <h3 className="font-serif text-3xl sm:text-5xl font-extralight text-[#F2F1ED] mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs uppercase tracking-[0.25em] text-[#C5A064] font-medium mb-6">
                  {item.subtitle}
                </p>

                {/* Description */}
                <p className="font-sans text-sm sm:text-base font-light text-[#F2F1ED]/80 leading-relaxed mb-8">
                  {item.description}
                </p>

                {/* Specifications List */}
                <ul className="space-y-3 border-t border-white/10 pt-6 mb-8 text-xs font-light text-[#F2F1ED]/70">
                  {item.specifications.map((spec, specIdx) => (
                    <li key={specIdx} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A064]" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>

                <ForgeButton href="#commission" variant="secondary">
                  Discuss This Phase
                </ForgeButton>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
