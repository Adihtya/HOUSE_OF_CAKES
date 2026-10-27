"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Eye, Plus, Check } from "lucide-react";
import { CakeProduct, CakeCategory } from "@/types/product";

interface SignatureCollectionProps {
  cakes: CakeProduct[];
  onSelectCake: (cake: CakeProduct) => void;
  onAddToBox?: (cake: CakeProduct) => void;
  boxCakeIds?: string[];
}

const CATEGORIES: { label: string; value: CakeCategory }[] = [
  { label: "All Creations", value: "all" },
  { label: "Signature Reserve", value: "signature" },
  { label: "Dark Chocolate", value: "chocolate" },
  { label: "Tropical & Fruity", value: "fruity" },
  { label: "Velvet Cream", value: "creamy" },
];

export function SignatureCollection({
  cakes,
  onSelectCake,
  onAddToBox,
  boxCakeIds = [],
}: SignatureCollectionProps) {
  const [activeCategory, setActiveCategory] = useState<CakeCategory>("all");

  const filteredCakes =
    activeCategory === "all"
      ? cakes
      : cakes.filter((cake) => {
          if (activeCategory === "signature")
            return (
              cake.badge?.includes("Signature") ||
              cake.category === "signature" ||
              cake.badge?.includes("Icon")
            );
          return cake.category === activeCategory;
        });

  return (
    <section
      id="collection"
      className="py-24 sm:py-32 bg-[#FFF4E5] text-[#351C20] relative"
      aria-label="Signature Cake Collection"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#8F1235] mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F13D70]" />
              <span>The Seasonal Exhibition</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#8F1235] leading-tight">
              SIGNATURE CAKE <br />
              <span className="italic font-normal text-[#F13D70]">
                Curated
              </span>{" "}
              COLLECTION.
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#351C20]/80 leading-relaxed">
            Every gateau is sculpted with organic seasonal fruits, single-estate
            chocolates, and slow-whipped creams. Tap any cake to explore tasting
            profiles and verified ingredient origins.
          </p>
        </div>

        {/* Category Filter Tabs with Motion Indicator */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12 border-b border-[#FFA5BC]/25 pb-4">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8F1235] ${
                  isActive
                    ? "text-white"
                    : "text-[#351C20] hover:bg-white/80 bg-white/50 border border-[#FFA5BC]/30"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeFilterPill"
                    className="absolute inset-0 rounded-full bg-[#8F1235] shadow-md"
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Asymmetric Exhibition Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredCakes.map((cake, index) => {
              const isFeature = index === 0;
              const isAdded = boxCakeIds.includes(cake.id);

              return (
                <motion.div
                  key={cake.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className={`group relative bg-[#FFFBF5] rounded-3xl p-5 sm:p-6 shadow-md hover:shadow-2xl transition-shadow duration-300 border border-[#FFA5BC]/30 flex flex-col justify-between ${
                    isFeature
                      ? "md:col-span-2 lg:col-span-2 md:flex-row md:items-center md:gap-8"
                      : ""
                  }`}
                >
                  {/* Image Container */}
                  <div
                    onClick={() => onSelectCake(cake)}
                    className={`relative w-full overflow-hidden rounded-2xl bg-[#FFF0F4] cursor-pointer ${
                      isFeature
                        ? "h-72 sm:h-96 md:h-[400px] md:w-1/2"
                        : "h-64 sm:h-72 mb-5"
                    }`}
                  >
                    <Image
                      src={cake.image}
                      alt={cake.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#351C20]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {cake.badge && (
                      <span className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#FFF4E5] text-[#8F1235] shadow-md border border-[#FFA5BC]/30">
                        <Sparkles className="w-3 h-3 text-[#F13D70]" />
                        {cake.badge}
                      </span>
                    )}

                    <div className="absolute bottom-3.5 right-3.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 text-[#8F1235] text-xs font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Eye className="w-3.5 h-3.5" /> Inspect
                    </div>
                  </div>

                  {/* Content Info */}
                  <div
                    className={`flex flex-col justify-between ${
                      isFeature ? "md:w-1/2" : ""
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-[#351C20]/60 font-mono uppercase tracking-wider mb-2">
                        <span>{cake.category} Gateau</span>
                        <span>{cake.servings}</span>
                      </div>

                      <h3
                        onClick={() => onSelectCake(cake)}
                        className="font-serif text-2xl sm:text-3xl font-bold text-[#8F1235] group-hover:text-[#F13D70] transition-colors cursor-pointer leading-tight mb-1"
                      >
                        {cake.name}
                      </h3>

                      <p className="text-xs sm:text-sm font-medium text-[#F13D70] mb-3">
                        {cake.tagline}
                      </p>

                      <p className="text-xs sm:text-sm text-[#351C20]/80 line-clamp-2 mb-4 leading-relaxed">
                        {cake.description}
                      </p>

                      {/* Flavor Notes */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {cake.flavorNotes.map((note, nIdx) => (
                          <span
                            key={nIdx}
                            className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#FFF4E5] text-[#8F1235] border border-[#FFA5BC]/30 transition-transform duration-200 hover:scale-105"
                          >
                            ✦ {note}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Pricing & CTAs */}
                    <div className="pt-4 border-t border-[#FFA5BC]/20 flex items-center justify-between gap-3">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-[#351C20]/60 tracking-wider block">
                          Tasting Price
                        </span>
                        <span className="font-serif text-xl sm:text-2xl font-bold text-[#8F1235]">
                          {cake.priceSample}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onSelectCake(cake)}
                          className="px-3.5 py-2 rounded-full text-xs font-bold text-[#8F1235] bg-[#FFF0F4] hover:bg-[#8F1235] hover:text-white transition-colors"
                        >
                          Story
                        </button>

                        {onAddToBox && (
                          <button
                            onClick={() => onAddToBox(cake)}
                            className={`p-2.5 rounded-full transition-all duration-200 shadow-sm ${
                              isAdded
                                ? "bg-[#456B4A] text-white"
                                : "bg-[#8F1235] text-white hover:bg-[#F13D70] hover:scale-105"
                            }`}
                            aria-label={`Add ${cake.name} to tasting box`}
                          >
                            {isAdded ? (
                              <Check className="w-4 h-4" />
                            ) : (
                              <Plus className="w-4 h-4" />
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
