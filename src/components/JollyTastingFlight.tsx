"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import { Sparkles, Trash2, ShoppingBag, X, CheckCircle2 } from "lucide-react";
import { CakeProduct } from "@/types/product";

interface JollyTastingFlightProps {
  cakes: CakeProduct[];
  selectedCakes: CakeProduct[];
  onAddCake: (cake: CakeProduct) => void;
  onRemoveCake: (cakeId: string, index?: number) => void;
  onClearBox: () => void;
}

export function JollyTastingFlight({
  cakes,
  selectedCakes,
  onAddCake,
  onRemoveCake,
  onClearBox,
}: JollyTastingFlightProps) {
  const prevCount = useRef(selectedCakes.length);

  // Trigger cheerful confetti burst when flight is completed (6/6 slots)
  useEffect(() => {
    if (selectedCakes.length === 6 && prevCount.current !== 6) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#F13D70", "#00966C", "#FFD84D", "#7DD7BE", "#FAD5DF"],
      });
    }
    prevCount.current = selectedCakes.length;
  }, [selectedCakes.length]);

  return (
    <section
      id="tasting-flight"
      className="relative w-full py-24 sm:py-32 bg-[#FFF8FA] overflow-hidden"
      aria-label="Curate Your Sweet Tasting Flight"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 right-10 w-[500px] h-[500px] bg-[#FAD5DF]/50 rounded-full blur-[80px]" />
        <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#C6F6E5]/40 rounded-full blur-[90px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAD5DF] text-[#004F3C] text-xs font-black tracking-widest uppercase mb-4 border border-white shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#F13D70]" />
            <span>Curate Your Sweet Flight &bull; 6 Delights</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-black text-[#004F3C] tracking-tight mb-4">
            The Confectionery Tasting Box
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#2C4A3E] max-w-xl mx-auto">
            Choose up to 6 artisan slices, cakes, or pastries to assemble your custom gift flight. Packaged in our signature ribboned pink atelier box.
          </p>
        </div>

        {/* Presentation Chest Box Container */}
        <div className="relative bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border-4 border-[#00966C]/15 mb-12">
          {/* Box Header Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between pb-6 border-b border-[#004F3C]/10 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#00966C] text-white flex items-center justify-center font-black">
                {selectedCakes.length}
              </div>
              <div className="text-left">
                <p className="font-display font-black text-lg text-[#004F3C]">
                  Flight Progress: {selectedCakes.length} of 6 Selected
                </p>
                <p className="text-xs text-[#004F3C]/60">
                  {selectedCakes.length === 6
                    ? "🎉 Your flight box is complete!"
                    : `Add ${6 - selectedCakes.length} more delight${6 - selectedCakes.length === 1 ? "" : "s"} to complete`}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {selectedCakes.length > 0 && (
                <button
                  onClick={onClearBox}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-[#F13D70] hover:bg-[#FAD5DF]/50 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Reset Box</span>
                </button>
              )}

              <button
                disabled={selectedCakes.length === 0}
                onClick={() => {
                  confetti({
                    particleCount: 120,
                    spread: 80,
                    origin: { y: 0.5 },
                  });
                  alert("🎉 Sweet Tasting Flight booked! We will prepare your Parisian gift box.");
                }}
                className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-black tracking-wider uppercase transition-all shadow-md ${
                  selectedCakes.length > 0
                    ? "bg-[#00966C] hover:bg-[#004F3C] text-white hover:scale-105 active:scale-95"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Order Tasting Flight</span>
              </button>
            </div>
          </div>

          {/* 6 Flight Slots Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 pt-8">
            {Array.from({ length: 6 }).map((_, slotIdx) => {
              const cake = selectedCakes[slotIdx];

              if (cake) {
                return (
                  <div
                    key={`${cake.id}-${slotIdx}`}
                    className="relative group bg-[#FFFDF7] p-3 rounded-2xl border-2 border-[#00966C]/30 shadow-md flex flex-col items-center text-center animate-in zoom-in-90 duration-300"
                  >
                    {/* Remove slot button */}
                    <button
                      onClick={() => onRemoveCake(cake.id, slotIdx)}
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#F13D70] text-white flex items-center justify-center shadow-md hover:scale-110 active:scale-90 transition-transform z-20"
                      aria-label={`Remove ${cake.name}`}
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>

                    <div className="relative w-full h-28 rounded-xl overflow-hidden bg-[#FAD5DF] mb-2.5 shadow-inner">
                      <Image
                        src={cake.image}
                        alt={cake.name}
                        fill
                        sizes="160px"
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>

                    <span className="font-display font-black text-xs text-[#004F3C] truncate w-full">
                      {cake.name}
                    </span>
                    <span className="text-[10px] text-[#F13D70] font-bold mt-0.5">
                      {cake.priceSample || "€16"}
                    </span>
                  </div>
                );
              }

              return (
                <div
                  key={`empty-${slotIdx}`}
                  className="h-44 rounded-2xl border-2 border-dashed border-[#004F3C]/20 bg-[#FAD5DF]/20 flex flex-col items-center justify-center text-center p-3 text-[#004F3C]/50"
                >
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mb-2 shadow-sm text-xs font-bold text-[#004F3C]">
                    {slotIdx + 1}
                  </div>
                  <span className="text-[11px] font-bold">Empty Slot</span>
                  <span className="text-[9px] mt-0.5">Click any cake below</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* QUICK ADD CAKES CAROUSEL STRIP */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display font-black text-xl text-[#004F3C]">
              Select From Our Parisian Collection 🍰
            </h3>
            <span className="text-xs text-[#004F3C]/70 font-semibold">
              Click to add to your box
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {cakes.slice(0, 4).map((cake) => {
              const isSelected = selectedCakes.some((c) => c.id === cake.id);

              return (
                <div
                  key={cake.id}
                  onClick={() => {
                    if (selectedCakes.length < 6 && !isSelected) {
                      onAddCake(cake);
                    }
                  }}
                  className={`group relative p-3 rounded-2xl bg-white border-2 shadow-sm transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "border-[#00966C] bg-[#E8F8F3]"
                      : "border-transparent hover:border-[#F13D70] hover:shadow-lg hover:-translate-y-1"
                  }`}
                >
                  <div className="relative w-full h-36 rounded-xl overflow-hidden bg-[#FAD5DF] mb-3">
                    <Image
                      src={cake.image}
                      alt={cake.name}
                      fill
                      sizes="220px"
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                    {isSelected && (
                      <div className="absolute inset-0 bg-[#00966C]/40 backdrop-blur-[2px] flex items-center justify-center text-white">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                    )}
                  </div>

                  <p className="font-display font-black text-sm text-[#004F3C] truncate">
                    {cake.name}
                  </p>
                  <p className="text-[11px] text-[#2C4A3E]/70 line-clamp-1 mt-0.5">
                    {cake.tagline}
                  </p>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#004F3C]/10">
                    <span className="text-xs font-bold text-[#F13D70]">
                      {cake.priceSample}
                    </span>
                    <span className="text-[10px] font-black uppercase text-[#00966C]">
                      {isSelected ? "Added" : "+ Add"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
