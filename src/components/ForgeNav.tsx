"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ForgeMenu } from "./ForgeMenu";
import { Sparkles, ShoppingBag } from "lucide-react";

interface ForgeNavProps {
  tastingBoxCount?: number;
  onOpenTastingBox?: () => void;
}

export function ForgeNav({
  tastingBoxCount = 0,
  onOpenTastingBox = () => {},
}: ForgeNavProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0C0C0C]/85 backdrop-blur-md py-4 border-b border-white/10"
            : "bg-transparent py-6 sm:py-8"
        }`}
      >
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          {/* Left: Discreet Contact / Atelier Info */}
          <div className="hidden md:flex items-center gap-6 text-[10px] tracking-[0.25em] uppercase text-[#F2F1ED]/60">
            <Link
              href="tel:+33142685500"
              className="hover:text-[#C5A064] transition-colors"
            >
              +33 (0) 1 42 68 55 00
            </Link>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <Link
              href="#salons"
              className="hover:text-[#C5A064] transition-colors"
            >
              Paris &bull; London &bull; NYC
            </Link>
          </div>

          {/* Center: Architectural Wordmark */}
          <Link
            href="/"
            className="flex flex-col items-center justify-center text-center group cursor-pointer"
            aria-label="House of Cakes — Atelier Home"
          >
            {/* Geometric Crown / Tier Monogram */}
            <svg
              width="36"
              height="20"
              viewBox="0 0 36 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-1 text-[#C5A064] group-hover:scale-105 transition-transform duration-300"
            >
              <path
                d="M18 2L22 9H14L18 2Z"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M6 10L11 18H25L30 10H6Z"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <circle cx="18" cy="14" r="1.5" fill="currentColor" />
            </svg>
            <span className="font-serif text-lg sm:text-2xl font-light tracking-[0.22em] text-[#F2F1ED] uppercase leading-none">
              HOUSE <span className="italic font-normal text-[#C5A064]">of</span> CAKES
            </span>
            <span className="text-[8px] sm:text-[9px] tracking-[0.35em] uppercase text-[#F2F1ED]/50 font-sans mt-0.5">
              Haute Confectionerie Atelier
            </span>
          </Link>

          {/* Right: Tasting Flight & Forge Style Navigate Button */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Tasting Flight Quick Link */}
            <button
              onClick={onOpenTastingBox}
              className="relative hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 hover:border-[#C5A064]/50 text-[10px] tracking-[0.22em] uppercase text-[#F2F1ED]/80 hover:text-white transition-all cursor-pointer bg-[#141414]/50"
              aria-label={`Open Tasting Flight with ${tastingBoxCount} confections selected`}
            >
              <ShoppingBag className="w-3 h-3 text-[#C5A064]" />
              <span>Tasting Flight</span>
              {tastingBoxCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#C5A064] text-black text-[9px] font-bold flex items-center justify-center">
                  {tastingBoxCount}
                </span>
              )}
            </button>

            {/* Signature Forge "NAVIGATE" Trigger */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="group flex items-center gap-3 py-2 px-3 border border-white/10 hover:border-white/30 rounded cursor-pointer transition-colors"
              aria-label="Open Navigation Menu"
              aria-expanded={isMenuOpen}
            >
              <span className="hidden sm:inline font-sans text-[10px] font-semibold tracking-[0.3em] uppercase text-[#F2F1ED]/80 group-hover:text-white transition-colors">
                Navigate
              </span>

              {/* 3-Bar Forge Hamburger Icon */}
              <div className="relative w-4 h-3 flex flex-col justify-between">
                <span className="w-full h-[1px] bg-white transition-transform duration-300" />
                <span className="w-full h-[1px] bg-white transition-opacity duration-300" />
                <span className="w-full h-[1px] bg-white transition-transform duration-300" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Luxury Menu Curtain */}
      <ForgeMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onOpenTastingBox={onOpenTastingBox}
        tastingBoxCount={tastingBoxCount}
      />
    </>
  );
}
