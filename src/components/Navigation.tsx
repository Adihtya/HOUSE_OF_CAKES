"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cake, Menu, X, ShoppingBag } from "lucide-react";
import { NAV_ITEMS } from "@/data/navigation";
import { MobileMenu } from "./MobileMenu";

interface NavigationProps {
  boxItemCount?: number;
  onOpenBoxModal?: () => void;
}

export function Navigation({ boxItemCount = 0, onOpenBoxModal }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FFF4E5]/90 backdrop-blur-md py-3 shadow-sm border-b border-[#FFA5BC]/20"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Wordmark / Brand Logo */}
            <Link
              href="#conveyor"
              className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8F1235] rounded-lg p-1"
              aria-label="House of Cakes Home"
            >
              <div className="w-9 h-9 rounded-full bg-[#8F1235] flex items-center justify-center text-[#FFD968] group-hover:scale-105 transition-transform duration-200 shadow-md">
                <Cake className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#8F1235] leading-none">
                  HOUSE <span className="italic font-normal text-[#F13D70]">of</span> CAKES
                </span>
                <span className="text-[9px] uppercase tracking-[0.22em] text-[#8F1235]/70 font-semibold mt-0.5">
                  Tropical Atelier &bull; Paris
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-sm font-medium text-[#351C20]/80 hover:text-[#8F1235] transition-colors py-1 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8F1235] rounded"
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="ml-1.5 px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-[#F13D70] text-white">
                      {item.badge}
                    </span>
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8F1235] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Right CTAs */}
            <div className="flex items-center gap-3">
              {/* Build Box / Cart Trigger */}
              <button
                onClick={onOpenBoxModal}
                className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-[#8F1235] text-white hover:bg-[#F13D70] transition-all duration-200 shadow-md hover:shadow-lg focus-visible:ring-2 focus-visible:ring-[#8F1235]"
                aria-label={`Open Dessert Box Builder with ${boxItemCount} items`}
              >
                <ShoppingBag className="w-4 h-4 text-[#FFD968]" />
                <span className="hidden sm:inline">Dessert Box</span>
                {boxItemCount > 0 && (
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#FFD968] text-[#351C20] text-xs font-bold">
                    {boxItemCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-full bg-[#FFF4E5] text-[#351C20] hover:bg-[#FFA5BC]/30 border border-[#FFA5BC]/40 transition-colors focus-visible:ring-2 focus-visible:ring-[#8F1235]"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-[#8F1235]" />
                ) : (
                  <Menu className="w-5 h-5 text-[#8F1235]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={NAV_ITEMS}
        onOpenBoxModal={() => {
          setMobileMenuOpen(false);
          onOpenBoxModal?.();
        }}
        boxItemCount={boxItemCount}
      />
    </>
  );
}
