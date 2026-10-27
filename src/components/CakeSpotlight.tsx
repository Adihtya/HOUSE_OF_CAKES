"use client";

import Image from "next/image";
import { Sparkles, ArrowRight, Eye, ShoppingBag } from "lucide-react";
import { CakeProduct } from "@/types/product";

interface CakeSpotlightProps {
  spotlightCake: CakeProduct;
  onSelectCake: (cake: CakeProduct) => void;
  onAddToBox?: (cake: CakeProduct) => void;
}

export function CakeSpotlight({
  spotlightCake,
  onSelectCake,
  onAddToBox,
}: CakeSpotlightProps) {
  return (
    <section
      id="spotlight"
      className="py-24 sm:py-32 bg-[#351C20] text-[#FFF4E5] relative overflow-hidden"
      aria-label="Signature Cake Spotlight"
    >
      {/* Background Lighting Accents */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-[#8F1235]/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-[500px] h-[500px] rounded-full bg-[#FF7448]/20 blur-3xl pointer-events-none" />

      {/* Pulsing Aroma Rings in Background */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full border border-[#FFD968]/15 animate-ping opacity-25" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Dominant Visual Display (7 cols) */}
          <div className="lg:col-span-7 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Radial Golden Aura */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FFD968]/25 via-[#F13D70]/25 to-transparent rounded-full filter blur-2xl transform scale-95" />

              {/* Pedestal Stand Shadow & Card */}
              <div
                className="relative h-[380px] sm:h-[480px] lg:h-[540px] w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-[#FFD968]/40 group cursor-pointer transition-transform duration-500 hover:scale-[1.01]"
                onClick={() => onSelectCake(spotlightCake)}
              >
                <Image
                  src={spotlightCake.image}
                  alt={spotlightCake.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#351C20]/80 via-[#351C20]/20 to-transparent" />

                {/* Floating Tag */}
                <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFF4E5] text-[#8F1235] shadow-lg sticker-badge-yellow">
                  <Sparkles className="w-4 h-4 text-[#F13D70]" />
                  <span>The Grand Masterpiece</span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                  <div>
                    <span className="text-xs uppercase font-mono tracking-widest text-[#FFD968]">
                      Feature No. 01 &bull; 72% Dark Cacao
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl font-bold mt-1">
                      {spotlightCake.name}
                    </h3>
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold flex items-center gap-1 hover:bg-white/30 transition-colors">
                    <Eye className="w-3.5 h-3.5" /> Tap to Inspect
                  </span>
                </div>
              </div>

              {/* Ingredient Highlight Hotspots */}
              <div className="hidden sm:flex absolute -bottom-5 -right-5 p-4 rounded-2xl bg-[#FFF4E5] text-[#351C20] shadow-xl border border-[#FFD968]/50 max-w-xs items-center gap-3 transition-transform duration-300 hover:scale-105">
                <div className="w-10 h-10 rounded-full bg-[#8F1235] text-[#FFD968] flex items-center justify-center shrink-0 shadow-md">
                  ✦
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#8F1235]">
                    Single-Origin Valrhona
                  </h4>
                  <p className="text-[11px] text-[#351C20]/75">
                    Wild Madagascar cacao beans with notes of roasted red berries.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Content (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="font-serif italic text-2xl text-[#FFA5BC] mb-2 flex items-center gap-2">
              <span>The Atelier Spotlight</span>
              <span className="w-2 h-2 rounded-full bg-[#FFD968] animate-pulse" />
            </span>

            <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#FFF4E5] leading-[0.95] mb-6">
              NOT JUST DESSERT. <br />
              <span className="italic font-normal text-[#FFD968]">
                The Main
              </span>{" "}
              EVENT.
            </h2>

            <p className="text-base sm:text-lg text-[#FFF4E5]/80 font-normal leading-relaxed mb-6">
              Designed as the crescendo of any dining gathering. The deep, brooding
              richness of 72% dark chocolate mirrors our love for unapologetic flavor
              drama—punctuated by Brittany fleur de sel and roasted hazelnuts.
            </p>

            {/* Ingredient Callouts with Hover Animation */}
            <div className="space-y-3 mb-8">
              {spotlightCake.ingredients.slice(0, 3).map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-[#FFF4E5] transition-all duration-200 hover:bg-white/10 hover:border-[#FFD968]/40"
                >
                  <span className="w-2 h-2 rounded-full bg-[#FFD968]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onSelectCake(spotlightCake)}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold bg-[#FFD968] text-[#351C20] hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>View Full Tasting Profile</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {onAddToBox && (
                <button
                  onClick={() => onAddToBox(spotlightCake)}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-semibold bg-white/10 hover:bg-white/20 text-[#FFF4E5] border border-white/20 transition-colors"
                >
                  <ShoppingBag className="w-4 h-4 text-[#FFD968]" />
                  <span>Add to Tasting Box</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
