"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu as MenuIcon, X, Box } from "lucide-react";

interface JollyBadgeNavProps {
  tastingBoxCount?: number;
  onOpenTastingBox?: () => void;
}

export function JollyBadgeNav({
  tastingBoxCount = 0,
  onOpenTastingBox = () => {},
}: JollyBadgeNavProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBadges = [
    {
      id: "playground",
      label: "CANVAS",
      href: "#playground",
      bgColor: "#F78DA7",
      hoverColor: "#F13D70",
      textColor: "#FFFFFF",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-5 h-5 text-white">
          <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: "3d-cake",
      label: "3D CAKE",
      href: "#3d-cake",
      bgColor: "#FFD968",
      hoverColor: "#FFA726",
      textColor: "#004F3C",
      icon: (
        <Box className="w-5 h-5 text-[#004F3C]" />
      ),
    },
    {
      id: "menu",
      label: "MENU",
      href: "#star-menu",
      bgColor: "#00966C",
      hoverColor: "#004F3C",
      textColor: "#FFFFFF",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
          <circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.3" />
          <path d="M12 3a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9zm-2 5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-2 5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm6 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm1-5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
        </svg>
      ),
    },
    {
      id: "salon",
      label: "SALON",
      href: "#salons",
      bgColor: "#F8A5C2",
      hoverColor: "#ED729F",
      textColor: "#FFFFFF",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-white">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: "tasting",
      label: "FLIGHT",
      action: "tasting",
      bgColor: "#7DD7BE",
      hoverColor: "#52BBA0",
      textColor: "#004F3C",
      badgeCount: tastingBoxCount,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-emerald-950">
          <path d="M7 21h10a2 2 0 0 0 2-2L21 6H3l2 13a2 2 0 0 0 2 2zM3 6l4-3h10l4 3M12 11v6M9 14h6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: "order",
      label: "ORDER",
      href: "#celebration-inquiry",
      bgColor: "#F78773",
      hoverColor: "#E3614B",
      textColor: "#FFFFFF",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-white">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 pointer-events-none ${
          isScrolled ? "py-3" : "py-5 sm:py-6"
        }`}
      >
        <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-8 flex items-center justify-between pointer-events-auto">
          {/* LEFT: Rotating Circular Brand Badge (Bon Bouquet BB Style) */}
          <Link
            href="/"
            className="group relative flex items-center justify-center cursor-pointer select-none"
            aria-label="House of Cakes Home"
          >
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FAD5DF] border-[3px] border-white shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              {/* Rotating Circular Typography */}
              <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                  <path
                    id="brandCirclePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text className="text-[9.5px] font-bold tracking-[0.22em] fill-[#004F3C] uppercase">
                    <textPath href="#brandCirclePath" startOffset="0%">
                      HOUSE OF CAKES • CAFÉ & BRUNCH •
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Center Monogram / Badge Symbol */}
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex flex-col items-center justify-center shadow-inner group-hover:rotate-6 transition-transform">
                <span className="font-display font-black text-sm sm:text-base text-[#00966C] leading-none">
                  HC
                </span>
                <span className="text-[7px] font-bold text-[#F13D70] leading-none mt-0.5">
                  PARIS
                </span>
              </div>
            </div>
          </Link>

          {/* RIGHT: Round Pastel Circular Badge Buttons (Bon Bouquet Navigation Badges) */}
          <nav
            className="hidden md:flex items-center gap-2 sm:gap-3"
            aria-label="Jolly Circular Navigation"
          >
            {navBadges.map((badge) => {
              const isAction = badge.action === "tasting";

              const content = (
                <div
                  className="relative group w-13 h-13 sm:w-16 sm:h-16 rounded-full border-[3px] border-white shadow-md flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95 cursor-pointer select-none"
                  style={{ backgroundColor: badge.bgColor }}
                >
                  {/* Icon */}
                  <div className="group-hover:-translate-y-0.5 transition-transform duration-200">
                    {badge.icon}
                  </div>

                  {/* Label along bottom curve */}
                  <span
                    className="text-[8px] sm:text-[9px] font-extrabold tracking-wider uppercase mt-0.5"
                    style={{ color: badge.textColor }}
                  >
                    {badge.label}
                  </span>

                  {/* Numerical notification badge if items selected */}
                  {badge.badgeCount !== undefined && badge.badgeCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#F13D70] text-white text-[10px] font-bold border-2 border-white flex items-center justify-center shadow-md animate-bounce">
                      {badge.badgeCount}
                    </span>
                  )}
                </div>
              );

              if (isAction) {
                return (
                  <button
                    key={badge.id}
                    type="button"
                    onClick={onOpenTastingBox}
                    className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00966C] rounded-full"
                    aria-label={`Open Tasting Flight with ${tastingBoxCount} confections selected`}
                  >
                    {content}
                  </button>
                );
              }

              return (
                <Link
                  key={badge.id}
                  href={badge.href || "#"}
                  className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00966C] rounded-full"
                >
                  {content}
                </Link>
              );
            })}
          </nav>

          {/* MOBILE MENU TOGGLE BUTTON */}
          <div className="flex items-center gap-2 md:hidden">
            {tastingBoxCount > 0 && (
              <button
                type="button"
                onClick={onOpenTastingBox}
                className="w-10 h-10 rounded-full bg-[#7DD7BE] border-2 border-white flex items-center justify-center text-[#004F3C] font-bold text-xs shadow-md"
              >
                {tastingBoxCount}
              </button>
            )}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-12 h-12 rounded-full bg-[#00966C] text-white border-2 border-white shadow-md flex items-center justify-center active:scale-90 transition-transform"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE FULL-SCREEN JOLLY MODAL MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#FAD5DF]/98 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-10 md:hidden"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-[#004F3C]/15 pb-4">
              <span className="font-display font-bold text-sm tracking-widest text-[#004F3C] uppercase">
                🌸 House Of Cakes Maison
              </span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-white text-[#004F3C] flex items-center justify-center shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col gap-3 py-6 my-auto">
              {navBadges.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (item.action === "tasting") {
                      onOpenTastingBox();
                    } else if (item.href) {
                      const el = document.querySelector(item.href);
                      el?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="flex items-center justify-between p-4 rounded-2xl bg-white shadow-sm border border-[#004F3C]/10 text-left active:scale-98"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-white shadow-sm"
                      style={{ backgroundColor: item.bgColor }}
                    >
                      {item.icon}
                    </div>
                    <span className="font-display text-xl font-bold text-[#004F3C]">
                      {item.label}
                    </span>
                  </div>
                  {item.badgeCount !== undefined && item.badgeCount > 0 && (
                    <span className="px-3 py-1 rounded-full bg-[#F13D70] text-white text-xs font-bold">
                      {item.badgeCount} Selected
                    </span>
                  )}
                </button>
              ))}
            </nav>

            {/* Bottom info */}
            <div className="border-t border-[#004F3C]/15 pt-4 text-center">
              <p className="font-display text-xs text-[#004F3C]/80 font-semibold tracking-wider uppercase">
                Paris 9ème &bull; London &bull; New York
              </p>
              <p className="text-[11px] text-[#004F3C]/60 mt-1">
                Everyday Brunch Joy & Haute Pâtisserie
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
