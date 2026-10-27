"use client";

import { useState } from "react";
import Image from "next/image";
import { CakeProduct, CakeCategory } from "@/types/product";
import { ForgeButton } from "./ForgeButton";
import { Eye, Plus, Check } from "lucide-react";

interface ForgeCollectionProps {
  cakes: CakeProduct[];
  onSelectCake: (cake: CakeProduct) => void;
  onAddToTastingBox: (cake: CakeProduct) => void;
  tastingBoxIds: string[];
}

export function ForgeCollection({
  cakes,
  onSelectCake,
  onAddToTastingBox,
  tastingBoxIds,
}: ForgeCollectionProps) {
  const [activeCategory, setActiveCategory] = useState<CakeCategory>("all");

  const categories: { label: string; value: CakeCategory }[] = [
    { label: "All Builds", value: "all" },
    { label: "Grand Chocolat", value: "chocolate" },
    { label: "Botanical & Fruit", value: "fruity" },
    { label: "Cream & Silk", value: "creamy" },
  ];

  const filteredCakes =
    activeCategory === "all"
      ? cakes
      : cakes.filter((cake) => cake.category === activeCategory);

  return (
    <section
      id="collection"
      className="relative w-full bg-[#0C0C0C] py-28 sm:py-36 px-6 sm:px-12 lg:px-20 border-t border-white/10"
      aria-label="Signature Cake Builds Collection"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div>
            <span className="block text-[10px] sm:text-xs font-semibold tracking-[0.35em] uppercase text-[#C5A064] mb-3">
              [ Portfolio &bull; Bespoke Builds ]
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-extralight text-[#F2F1ED] leading-[1.08] capitalize">
              The Atelier Collection
            </h2>
          </div>

          {/* Minimalist Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 text-[11px] font-sans font-semibold tracking-[0.25em] uppercase rounded-none transition-all cursor-pointer border ${
                  activeCategory === cat.value
                    ? "border-[#C5A064] bg-[#1A1A1A] text-[#C5A064]"
                    : "border-white/10 text-[#F2F1ED]/50 hover:text-white hover:border-white/20 bg-transparent"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* The Builds Grid (Architectural 2-Column or 3-Column Luxury Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredCakes.map((cake, idx) => {
            const isAdded = tastingBoxIds.includes(cake.id);

            return (
              <div
                key={cake.id}
                className="group relative flex flex-col justify-between bg-[#141414] border border-white/10 hover:border-[#C5A064]/60 transition-all duration-500 overflow-hidden"
              >
                {/* Image Container with Dark Moody Studio Lighting */}
                <div
                  onClick={() => onSelectCake(cake)}
                  className="relative aspect-[4/3] sm:aspect-square w-full overflow-hidden bg-[#0C0C0C] cursor-pointer"
                >
                  <Image
                    src={cake.image}
                    alt={cake.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-80" />

                  {/* Top Badge: Edition Number */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <span className="font-mono text-[10px] tracking-[0.25em] uppercase px-2.5 py-1 bg-black/80 backdrop-blur-md text-[#C5A064] border border-white/10">
                      BUILD 0{idx + 1}
                    </span>
                    {cake.badge && (
                      <span className="text-[9px] tracking-widest uppercase px-2 py-1 bg-[#221216]/90 text-[#F2F1ED] border border-[#C5A064]/30">
                        {cake.badge}
                      </span>
                    )}
                  </div>

                  {/* Quick View Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#F2F1ED] bg-black/70 px-4 py-2 border border-white/20 backdrop-blur-md">
                      <Eye className="w-3.5 h-3.5 text-[#C5A064]" /> View Dossier
                    </span>
                  </div>
                </div>

                {/* Card Content & Specifications */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-baseline justify-between mb-2">
                      <h3
                        onClick={() => onSelectCake(cake)}
                        className="font-serif text-2xl sm:text-3xl font-light text-[#F2F1ED] group-hover:text-[#C5A064] transition-colors cursor-pointer"
                      >
                        {cake.name}
                      </h3>
                      <span className="font-mono text-xs text-[#C5A064] font-medium tracking-wider">
                        {cake.priceSample}
                      </span>
                    </div>

                    <p className="font-sans text-xs text-[#C5A064]/90 tracking-widest uppercase mb-4 font-medium">
                      {cake.tagline}
                    </p>

                    <p className="font-sans text-xs sm:text-sm font-light text-[#F2F1ED]/70 leading-relaxed line-clamp-2 mb-6">
                      {cake.description}
                    </p>

                    {/* Flavor Architecture Notes */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {cake.flavorNotes.map((note, nIdx) => (
                        <span
                          key={nIdx}
                          className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-none bg-[#1F1F1F] text-[#F2F1ED]/60 border border-white/5"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Actions */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onSelectCake(cake)}
                      className="text-[11px] uppercase tracking-[0.22em] text-[#F2F1ED]/70 hover:text-white transition-colors cursor-pointer"
                    >
                      Specifications &rarr;
                    </button>

                    <button
                      onClick={() => onAddToTastingBox(cake)}
                      disabled={isAdded}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase font-semibold transition-all cursor-pointer border ${
                        isAdded
                          ? "border-[#C5A064] bg-[#C5A064]/10 text-[#C5A064]"
                          : "border-white/15 hover:border-[#C5A064] text-[#F2F1ED] hover:bg-[#1C1C1C]"
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3 h-3" /> In Flight
                        </>
                      ) : (
                        <>
                          <Plus className="w-3 h-3" /> Add To Flight
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bespoke Commission Callout Banner */}
        <div className="mt-16 sm:mt-24 p-8 sm:p-12 border border-white/10 bg-[#121212] flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="max-w-2xl">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A064] font-semibold mb-2 block">
              [ Bespoke Private Commission ]
            </span>
            <h4 className="font-serif text-3xl sm:text-4xl font-light text-white mb-3">
              Require an Architectural Multi-Tiered Centerpiece?
            </h4>
            <p className="text-xs sm:text-sm font-light text-[#F2F1ED]/70">
              We design individual, one-off sculptural creations tailored to your gala, wedding, or high-society banquet.
            </p>
          </div>
          <ForgeButton href="#commission" variant="gold">
            Book Consultation
          </ForgeButton>
        </div>
      </div>
    </section>
  );
}
