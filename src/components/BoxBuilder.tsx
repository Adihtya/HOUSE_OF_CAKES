"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  CheckCircle2,
  ShoppingBag,
  RotateCcw,
} from "lucide-react";
import confetti from "canvas-confetti";
import { CakeProduct } from "@/types/product";

interface BoxBuilderProps {
  cakes: CakeProduct[];
  selectedCakes: CakeProduct[];
  onAddCake: (cake: CakeProduct) => void;
  onRemoveCake: (cakeId: string, index?: number) => void;
  onClearBox: () => void;
}

export function BoxBuilder({
  cakes,
  selectedCakes,
  onAddCake,
  onRemoveCake,
  onClearBox,
}: BoxBuilderProps) {
  const [activeBoxSize, setActiveBoxSize] = useState<4 | 6>(4);
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  const currentLimit = activeBoxSize;
  const isFull = selectedCakes.length >= currentLimit;

  const triggerConfetti = () => {
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#8F1235", "#F13D70", "#FFD968", "#FF7448", "#FFA5BC"],
    });
  };

  const handleAddWithConfetti = (cake: CakeProduct) => {
    onAddCake(cake);
    if (selectedCakes.length + 1 === currentLimit) {
      triggerConfetti();
    }
  };

  // Calculate Flavor Balance Profile
  const chocolateCount = selectedCakes.filter(
    (c) => c.category === "chocolate"
  ).length;
  const fruityCount = selectedCakes.filter((c) => c.category === "fruity").length;
  const creamyCount = selectedCakes.filter(
    (c) => c.category === "creamy" || c.category === "signature"
  ).length;

  return (
    <section
      id="box-builder"
      className="py-24 sm:py-32 bg-[#FFFBF5] text-[#351C20] relative overflow-hidden"
      aria-label="Interactive Dessert Box Builder"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#8F1235] mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFD968]" />
              <span>Interactive Tasting Experience</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#8F1235] leading-tight">
              BUILD YOUR <br />
              <span className="italic font-normal text-[#F13D70]">
                Custom Tasting
              </span>{" "}
              DESSERT BOX.
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <p className="max-w-md text-sm text-[#351C20]/80 leading-relaxed md:text-right">
              Curate your personal patisserie flight. Select {currentLimit} miniature
              cakes to create your custom gift box, balanced with chocolate, fruit,
              and silky vanilla.
            </p>

            {/* Box Size Toggle */}
            <div className="inline-flex items-center p-1 rounded-full bg-[#FFF0F4] border border-[#FFA5BC]/30">
              <button
                onClick={() => setActiveBoxSize(4)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeBoxSize === 4
                    ? "bg-[#8F1235] text-white shadow-xs"
                    : "text-[#8F1235] hover:bg-white"
                }`}
              >
                4-Piece Atelier Box
              </button>
              <button
                onClick={() => setActiveBoxSize(6)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeBoxSize === 6
                    ? "bg-[#8F1235] text-white shadow-xs"
                    : "text-[#8F1235] hover:bg-white"
                }`}
              >
                6-Piece Grand Tasting
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Available Cakes Shelf (7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#351C20]/70">
                1. Select Cakes from the Daily Rotation
              </span>
              <span className="text-xs text-[#8F1235] font-medium">
                {isFull ? "Box is Full" : `${currentLimit - selectedCakes.length} slots remaining`}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
              {cakes.map((cake) => {
                const countInBox = selectedCakes.filter(
                  (c) => c.id === cake.id
                ).length;

                return (
                  <button
                    key={cake.id}
                    disabled={isFull}
                    onClick={() => handleAddWithConfetti(cake)}
                    className={`relative p-3 rounded-2xl bg-white border text-left transition-all duration-200 flex flex-col justify-between group ${
                      isFull
                        ? "opacity-60 cursor-not-allowed border-[#FFA5BC]/20"
                        : "hover:border-[#8F1235] hover:shadow-md border-[#FFA5BC]/30 cursor-pointer"
                    }`}
                  >
                    {/* Thumbnail */}
                    <div className="relative h-28 sm:h-32 w-full rounded-xl overflow-hidden bg-[#FFF0F4] mb-2.5">
                      <Image
                        src={cake.image}
                        alt={cake.name}
                        fill
                        sizes="160px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {countInBox > 0 && (
                        <span className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#8F1235] text-white text-xs font-bold flex items-center justify-center shadow-md">
                          {countInBox}
                        </span>
                      )}
                    </div>

                    <div>
                      <h4 className="font-serif text-sm font-bold text-[#8F1235] leading-tight line-clamp-1">
                        {cake.name}
                      </h4>
                      <p className="text-[11px] text-[#F13D70] font-medium mt-0.5 capitalize">
                        {cake.category}
                      </p>
                    </div>

                    <div className="mt-2 pt-2 border-t border-[#FFA5BC]/20 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-[#351C20]/70">
                        {cake.priceSample}
                      </span>
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                          isFull
                            ? "bg-gray-100 text-gray-400"
                            : "bg-[#FFF0F4] text-[#8F1235] group-hover:bg-[#8F1235] group-hover:text-white"
                        }`}
                      >
                        +
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Visual Presentation Tray & Tasting Flight (5 cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-[#FFF4E5] rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-[#FFD968]/50">
              <div className="flex items-center justify-between pb-4 border-b border-[#FFA5BC]/30">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-[#8F1235]" />
                  <span className="font-serif text-xl font-bold text-[#8F1235]">
                    Your Tasting Flight
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#8F1235] text-white">
                    {selectedCakes.length} / {currentLimit}
                  </span>
                  {selectedCakes.length > 0 && (
                    <button
                      onClick={onClearBox}
                      className="p-1.5 rounded-full text-[#351C20]/60 hover:text-[#8F1235] hover:bg-white"
                      title="Clear box"
                      aria-label="Clear box"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Visual Box Tray Slots */}
              <div
                className={`grid gap-3.5 my-6 ${
                  activeBoxSize === 4 ? "grid-cols-2" : "grid-cols-3"
                }`}
              >
                {Array.from({ length: currentLimit }).map((_, slotIdx) => {
                  const cake = selectedCakes[slotIdx];

                  return (
                    <div
                      key={slotIdx}
                      className={`relative h-28 sm:h-32 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center p-2 text-center transition-all ${
                        cake
                          ? "border-[#8F1235] bg-white shadow-sm"
                          : "border-[#FFA5BC]/40 bg-white/40"
                      }`}
                    >
                      {cake ? (
                        <>
                          <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-xs mb-1">
                            <Image
                              src={cake.image}
                              alt={cake.name}
                              fill
                              sizes="60px"
                              className="object-cover"
                            />
                          </div>
                          <span className="font-serif text-xs font-bold text-[#8F1235] line-clamp-1">
                            {cake.name}
                          </span>
                          <button
                            onClick={() => onRemoveCake(cake.id, slotIdx)}
                            className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#8F1235] text-white flex items-center justify-center hover:bg-[#F13D70] shadow-xs text-xs"
                            title="Remove cake"
                            aria-label={`Remove ${cake.name}`}
                          >
                            &times;
                          </button>
                        </>
                      ) : (
                        <div className="flex flex-col items-center justify-center text-[#351C20]/40">
                          <span className="font-serif text-sm font-bold">
                            Slot 0{slotIdx + 1}
                          </span>
                          <span className="text-[10px] mt-0.5">Empty Slot</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Flavor Profile Balance Meter */}
              <div className="bg-white/80 rounded-2xl p-4 border border-[#FFA5BC]/20 mb-6 space-y-2.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#351C20]/60 block">
                  Tasting Balance Meter
                </span>

                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[#8F1235] font-semibold">Rich Cacao</span>
                    <span className="font-mono">{chocolateCount} items</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#FFF0F4] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#8F1235] transition-all duration-300"
                      style={{
                        width: `${(chocolateCount / currentLimit) * 100}%`,
                      }}
                    />
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[#F13D70] font-semibold">Tropical & Fruit</span>
                    <span className="font-mono">{fruityCount} items</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#FFF0F4] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#F13D70] transition-all duration-300"
                      style={{
                        width: `${(fruityCount / currentLimit) * 100}%`,
                      }}
                    />
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[#456B4A] font-semibold">Velvet & Cream</span>
                    <span className="font-mono">{creamyCount} items</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#FFF0F4] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#456B4A] transition-all duration-300"
                      style={{
                        width: `${(creamyCount / currentLimit) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Order / Reserve Demo Button */}
              <button
                disabled={selectedCakes.length === 0}
                onClick={() => {
                  triggerConfetti();
                  setOrderModalOpen(true);
                }}
                className={`w-full py-3.5 rounded-full font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-md ${
                  selectedCakes.length === currentLimit
                    ? "bg-[#8F1235] text-white hover:bg-[#F13D70] hover:shadow-lg hover:-translate-y-0.5"
                    : selectedCakes.length > 0
                    ? "bg-[#8F1235]/80 text-white"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                <Sparkles className="w-4 h-4 text-[#FFD968]" />
                <span>
                  {selectedCakes.length === currentLimit
                    ? "Reserve Custom Tasting Flight"
                    : `Add ${currentLimit - selectedCakes.length} More Cakes`}
                </span>
              </button>

              <p className="text-[11px] text-center text-[#351C20]/60 mt-3">
                ✦ Demonstration feature for salon tastings. No actual payment required.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Reservation Confirmation Modal */}
      <AnimatePresence>
        {orderModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#351C20]/80 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md bg-[#FFFBF5] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#FFD968]/50 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#8F1235] text-[#FFD968] flex items-center justify-center mx-auto mb-4 shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <span className="text-xs font-mono uppercase tracking-widest text-[#F13D70]">
                Curated Flight Ready
              </span>
              <h3 className="font-serif text-3xl font-bold text-[#8F1235] mt-1 mb-2">
                Your Tasting Box is Staged!
              </h3>
              <p className="text-sm text-[#351C20]/80 leading-relaxed mb-6">
                Your {selectedCakes.length}-piece flight featuring{" "}
                <strong className="text-[#8F1235]">
                  {selectedCakes.map((c) => c.name).join(", ")}
                </strong>{" "}
                has been recorded for demonstration. In a live setting, this would
                be hand-packaged in our gilded berry presentation box.
              </p>

              <div className="p-4 rounded-2xl bg-[#FFF0F4] border border-[#FFA5BC]/30 text-xs text-[#8F1235] mb-6">
                Ready for collection at 29 Rue de Trévise, Paris 9e Tasting Salon.
              </div>

              <button
                onClick={() => setOrderModalOpen(false)}
                className="w-full py-3 rounded-full bg-[#8F1235] text-white font-bold text-sm hover:bg-[#F13D70] transition-colors"
              >
                Close & Continue Exploring
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
