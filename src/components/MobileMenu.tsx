"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { X, Cake, ShoppingBag, MapPin, Clock, ArrowRight } from "lucide-react";
import { NavItem } from "@/data/navigation";
import { ATELIER_INFO } from "@/data/content";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  onOpenBoxModal?: () => void;
  boxItemCount?: number;
}

export function MobileMenu({
  isOpen,
  onClose,
  navItems,
  onOpenBoxModal,
  boxItemCount = 0,
}: MobileMenuProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-[#351C20]/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative w-full max-w-sm h-full bg-[#FFFBF5] text-[#351C20] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto z-10 border-l border-[#FFA5BC]/30"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-[#FFA5BC]/20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#8F1235] flex items-center justify-center text-[#FFD968]">
                    <Cake className="w-4 h-4" />
                  </div>
                  <span className="font-serif text-lg font-bold text-[#8F1235]">
                    HOUSE <span className="italic font-normal text-[#F13D70]">of</span> CAKES
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-[#FFA5BC]/20 text-[#351C20] transition-colors"
                  aria-label="Close mobile menu"
                >
                  <X className="w-5 h-5 text-[#8F1235]" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="py-6 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between py-3 px-3 rounded-xl text-base font-medium text-[#351C20] hover:bg-[#FFF0F4] hover:text-[#8F1235] transition-colors"
                  >
                    <span>{item.label}</span>
                    {item.badge ? (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#F13D70] text-white">
                        {item.badge}
                      </span>
                    ) : (
                      <ArrowRight className="w-4 h-4 opacity-40" />
                    )}
                  </Link>
                ))}
              </nav>

              {/* Box Builder CTA */}
              <div className="pt-2 pb-6 border-t border-[#FFA5BC]/20">
                <button
                  onClick={onOpenBoxModal}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#8F1235] text-white font-semibold text-sm shadow-md hover:bg-[#F13D70] transition-colors"
                >
                  <ShoppingBag className="w-4 h-4 text-[#FFD968]" />
                  <span>Build Your Dessert Box</span>
                  {boxItemCount > 0 && (
                    <span className="ml-1 w-5 h-5 rounded-full bg-[#FFD968] text-[#351C20] text-xs font-bold inline-flex items-center justify-center">
                      {boxItemCount}
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Atelier Info Snippet */}
            <div className="pt-6 border-t border-[#FFA5BC]/20 text-xs text-[#351C20]/70 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#8F1235] shrink-0 mt-0.5" />
                <span>{ATELIER_INFO.addressLine1}, {ATELIER_INFO.addressLine2}</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#8F1235] shrink-0 mt-0.5" />
                <span>Tue–Sun: 08:30 – 19:30</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
