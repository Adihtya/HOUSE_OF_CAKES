"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { FLAVOR_STORIES } from "@/data/content";

export function IngredientStory() {
  return (
    <section
      id="flavors"
      className="py-24 sm:py-32 bg-[#FFFBF5] text-[#351C20] relative overflow-hidden"
      aria-label="Tropical Flavor Stories"
    >
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#FF7448]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-[#456B4A]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#8F1235] mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF7448]" />
            <span>Terroir & Botanical Pairings</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#8F1235] leading-tight">
            EXTRAORDINARY THINGS <br />
            <span className="italic font-normal text-[#F13D70]">
              Begin with the
            </span>{" "}
            SMALLEST DETAILS.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#351C20]/80 leading-relaxed font-normal">
            Great pastry is born from great agriculture. We trace our wild fruits,
            single-estate chocolates, and rare orchid vanilla pods back to the exact
            hillsides and valleys that cultivated their aromatic intensity.
          </p>
        </div>

        {/* 4 Rich Flavor Stories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {FLAVOR_STORIES.map((story, index) => (
            <div
              key={story.id}
              className="group relative rounded-3xl p-6 sm:p-8 transition-all duration-300 shadow-md hover:shadow-2xl border border-[#FFA5BC]/30 flex flex-col justify-between overflow-hidden"
              style={{ backgroundColor: story.accentBg }}
            >
              {/* Botanical Location Tag */}
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-white/90 text-[#351C20] shadow-xs">
                  <MapPin className="w-3.5 h-3.5 text-[#F13D70]" />
                  <span>{story.botanicalOrigin}</span>
                </div>
                <span className="font-mono text-xs font-bold text-[#8F1235]/60">
                  HARVEST 0{index + 1}
                </span>
              </div>

              {/* High-Resolution Ingredient Photo */}
              <div className="relative h-60 sm:h-72 w-full rounded-2xl overflow-hidden mb-6 shadow-inner bg-white/40">
                <Image
                  src={story.image}
                  alt={story.pairTitle}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#351C20]/40 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-white text-xs font-bold uppercase tracking-wider">
                  ✦ Pure Botanical Origin
                </div>
              </div>

              {/* Title & Sensory Descriptions */}
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#8F1235] leading-snug mb-1">
                  {story.pairTitle}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#F13D70] mb-3">
                  {story.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-[#351C20]/80 leading-relaxed mb-5">
                  {story.description}
                </p>

                {/* Tasting Note Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#351C20]/10">
                  {story.tastingNotes.map((note, nIdx) => (
                    <span
                      key={nIdx}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white text-[#351C20] shadow-xs border border-[#351C20]/5"
                    >
                      ✦ {note}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
