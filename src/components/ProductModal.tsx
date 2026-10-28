"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, Sparkles } from "lucide-react";
import { CakeProduct } from "@/types/product";

interface ProductModalProps {
  cake: CakeProduct | null;
  onClose: () => void;
  onAddToBox?: (cake: CakeProduct) => void;
  isAddedToBox?: boolean;
}

export function ProductModal({
  cake,
  onClose,
  onAddToBox,
  isAddedToBox = false,
}: ProductModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cake) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [cake, onClose]);

  return (
    <AnimatePresence>
      {cake && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 select-none"
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-modal-title"
        >
          {/* Backdrop with soft blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-[#004F3C]/60 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Card with Jolly Parisian Styling */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white border-4 border-white z-10 text-[#1C2421] shadow-2xl rounded-3xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 text-[#004F3C] hover:bg-[#F13D70] hover:text-white flex items-center justify-center shadow-md transition-colors cursor-pointer"
              aria-label="Close product details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Photo Section */}
              <div className="relative h-72 sm:h-96 md:h-full min-h-[360px] bg-[#FAD5DF] overflow-hidden">
                <Image
                  src={cake.image}
                  alt={cake.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                {cake.badge && (
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 text-xs font-black uppercase tracking-wider bg-[#00966C] text-white rounded-full shadow-md">
                    {cake.badge}
                  </span>
                )}
              </div>

              {/* Content Section */}
              <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-black tracking-widest uppercase text-[#F13D70]">
                      {cake.category} Delight
                    </span>
                    <span className="text-[#004F3C]/30">&bull;</span>
                    <span className="text-xs font-bold text-[#004F3C]">
                      {cake.servings}
                    </span>
                  </div>

                  <h2
                    id="product-modal-title"
                    className="font-display text-3xl sm:text-4xl font-black text-[#004F3C] leading-tight mb-1"
                  >
                    {cake.name}
                  </h2>
                  <p className="text-xs font-bold tracking-wider uppercase text-[#F13D70] mb-4">
                    {cake.tagline}
                  </p>

                  <p className="text-[#2C4A3E] text-xs sm:text-sm leading-relaxed mb-6">
                    {cake.story}
                  </p>

                  {/* Flavor Notes */}
                  <div className="mb-5">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-[#004F3C] mb-2">
                      Flavor Symphony
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cake.flavorNotes.map((note, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-bold rounded-full bg-[#FAD5DF]/60 text-[#004F3C] border border-[#004F3C]/10"
                        >
                          &bull; {note}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Ingredients */}
                  <div className="mb-5 bg-[#FFF8FA] p-4 rounded-2xl border border-[#FAD5DF]">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-[#004F3C] mb-2">
                      Fresh Sourcing &amp; Craft
                    </h4>
                    <ul className="text-xs space-y-1 text-[#2C4A3E] font-medium">
                      {cake.ingredients.map((ing, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="text-[#F13D70]">&mdash;</span>
                          <span>{ing}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pairing Recommendation */}
                  {cake.pairsWith && (
                    <div className="text-xs text-[#2C4A3E] mb-6 border-l-3 border-[#00966C] pl-3 italic">
                      <strong className="not-italic text-[#00966C] font-bold block text-[10px] uppercase tracking-wider mb-0.5">
                        Barista Pairing Suggestion
                      </strong>
                      {cake.pairsWith}
                    </div>
                  )}
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-[#004F3C]/10 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#004F3C]/60 block font-bold">
                      Sample Price
                    </span>
                    <span className="font-display text-2xl text-[#004F3C] font-black">
                      {cake.priceSample || "€16"}
                    </span>
                  </div>

                  {onAddToBox && (
                    <button
                      onClick={() => onAddToBox(cake)}
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-black tracking-widest uppercase transition-all shadow-md cursor-pointer ${
                        isAddedToBox
                          ? "bg-[#00966C] text-white"
                          : "bg-[#F13D70] hover:bg-[#D91A5B] text-white hover:scale-105 active:scale-95"
                      }`}
                    >
                      {isAddedToBox ? (
                        <>
                          <Check className="w-4 h-4 text-white" /> In Tasting Box
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 text-white" /> Add To Tasting Box
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
