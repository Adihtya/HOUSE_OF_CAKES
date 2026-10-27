"use client";

import { CakeProduct } from "@/types/product";
import Image from "next/image";
import { ForgeButton } from "./ForgeButton";
import { X, Plus, ShieldCheck, Truck, Sparkles } from "lucide-react";

interface ForgeTastingBoxProps {
  cakes: CakeProduct[];
  selectedCakes: CakeProduct[];
  onAddCake: (cake: CakeProduct) => void;
  onRemoveCake: (cakeId: string, index?: number) => void;
  onClearBox: () => void;
}

export function ForgeTastingBox({
  cakes,
  selectedCakes,
  onAddCake,
  onRemoveCake,
  onClearBox,
}: ForgeTastingBoxProps) {
  const maxCapacity = 6;
  const isFull = selectedCakes.length >= maxCapacity;

  return (
    <section
      id="tasting-flight"
      className="relative w-full bg-[#111111] py-28 sm:py-36 px-6 sm:px-12 lg:px-20 border-t border-white/10"
      aria-label="Private Tasting Flight Concierge"
    >
      <div className="max-w-[1500px] mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="block text-[10px] sm:text-xs font-semibold tracking-[0.35em] uppercase text-[#C5A064] mb-3">
            [ Concierge Curation ]
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-extralight text-[#F2F1ED] leading-[1.08] capitalize mb-4">
            Curate Your Tasting Flight
          </h2>
          <p className="font-sans text-xs sm:text-sm font-light text-[#F2F1ED]/70 leading-relaxed">
            Prior to commissioning a full-scale centerpiece, we invite clients to curate a flight of up to six miniature confections, hand-delivered in our climate-controlled presentation chest.
          </p>
        </div>

        {/* The Obsidian Flight Presentation Chest & Curated Slots */}
        <div className="bg-[#0C0C0C] border border-white/15 p-6 sm:p-10 lg:p-14 mb-16 rounded-sm shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-8 border-b border-white/10 gap-4">
            <div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A064] font-semibold block mb-1">
                Atelier Presentation Chest
              </span>
              <p className="font-serif text-2xl text-white">
                Flight Capacity: {selectedCakes.length} / {maxCapacity} Curated
              </p>
            </div>

            {selectedCakes.length > 0 && (
              <button
                onClick={onClearBox}
                className="text-xs uppercase tracking-widest text-[#F2F1ED]/50 hover:text-red-400 transition-colors self-start sm:self-auto cursor-pointer"
              >
                Reset Flight
              </button>
            )}
          </div>

          {/* 6 Curated Slots Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {Array.from({ length: maxCapacity }).map((_, slotIndex) => {
              const cake = selectedCakes[slotIndex];

              return (
                <div
                  key={slotIndex}
                  className={`aspect-square relative rounded-sm border flex flex-col items-center justify-center p-3 text-center transition-all duration-300 ${
                    cake
                      ? "border-[#C5A064]/60 bg-[#161616]"
                      : "border-dashed border-white/10 bg-[#121212]/50"
                  }`}
                >
                  {cake ? (
                    <>
                      <div className="relative w-full h-2/3 mb-2 rounded overflow-hidden">
                        <Image
                          src={cake.image}
                          alt={cake.name}
                          fill
                          sizes="150px"
                          className="object-cover"
                        />
                      </div>
                      <span className="text-[11px] font-serif text-white font-light truncate w-full">
                        {cake.name}
                      </span>
                      <button
                        onClick={() => onRemoveCake(cake.id, slotIndex)}
                        className="absolute top-2 right-2 w-5 h-5 rounded-full bg-black/80 hover:bg-red-900 text-white flex items-center justify-center transition-colors cursor-pointer"
                        aria-label={`Remove ${cake.name} from slot ${slotIndex + 1}`}
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-1 text-[#F2F1ED]/30">
                      <span className="font-mono text-xs text-[#C5A064]">
                        0{slotIndex + 1}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider">Empty Slot</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Flight Summary & Ordering */}
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-6 text-xs text-[#F2F1ED]/60 font-light">
              <span className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#C5A064]" /> Chilled Concierge Courier
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C5A064]" /> Wax-Sealed Obsidian Box
              </span>
            </div>

            <ForgeButton
              onClick={() => {
                alert(
                  selectedCakes.length === 0
                    ? "Please add confections below to curate your tasting flight."
                    : `Your tasting flight with ${selectedCakes.length} confections has been requested. Our concierge will contact you within 2 hours.`
                );
              }}
              variant="gold"
            >
              Request Tasting Flight
            </ForgeButton>
          </div>
        </div>

        {/* Quick Selection Carousel / Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-2xl font-light text-white">
              Available Miniature Tasting Confections
            </h3>
            <span className="text-xs uppercase tracking-widest text-[#C5A064]">
              Click to add to chest
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {cakes.map((cake) => {
              const isSelected = selectedCakes.some((c) => c.id === cake.id);

              return (
                <button
                  key={cake.id}
                  onClick={() => {
                    if (!isFull && !isSelected) onAddCake(cake);
                  }}
                  disabled={isFull || isSelected}
                  className={`group relative text-left p-3.5 border transition-all duration-300 flex flex-col justify-between cursor-pointer rounded-sm ${
                    isSelected
                      ? "border-[#C5A064] bg-[#1A1A1A] opacity-60"
                      : isFull
                      ? "border-white/5 opacity-40 cursor-not-allowed bg-[#141414]"
                      : "border-white/10 hover:border-[#C5A064]/70 bg-[#141414]"
                  }`}
                >
                  <div className="relative aspect-square w-full mb-2.5 overflow-hidden rounded-sm bg-[#0C0C0C]">
                    <Image
                      src={cake.image}
                      alt={cake.name}
                      fill
                      sizes="140px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div>
                    <h4 className="font-serif text-sm font-light text-white truncate group-hover:text-[#C5A064] transition-colors">
                      {cake.name}
                    </h4>
                    <span className="text-[10px] text-[#C5A064] font-mono block mt-0.5">
                      {cake.category}
                    </span>
                  </div>

                  <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] uppercase tracking-wider text-[#F2F1ED]/50">
                    <span>{isSelected ? "In Flight" : "+ Add"}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
