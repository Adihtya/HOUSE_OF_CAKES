"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

export function ForgeFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="salons"
      className="relative w-full bg-[#080808] text-[#F2F1ED] pt-28 pb-12 px-6 sm:px-12 lg:px-20 border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto flex flex-col justify-between">
        {/* Top Tier: Atelier Hubs & Salon Coordinates */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A064] font-semibold block mb-4">
              Paris Flagship Atelier
            </span>
            <p className="text-xs font-light text-[#F2F1ED]/80 leading-relaxed">
              8 Place Vendôme, 75001 Paris, France
            </p>
            <p className="text-xs font-mono text-[#F2F1ED]/50 mt-1">
              +33 (0) 1 42 68 55 00
            </p>
            <p className="text-[11px] text-[#F2F1ED]/40 mt-1">
              Private Tastings by Appointment Only
            </p>
          </div>

          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A064] font-semibold block mb-4">
              London Mayfair Salon
            </span>
            <p className="text-xs font-light text-[#F2F1ED]/80 leading-relaxed">
              24 Mount Street, Mayfair, London W1K 2RR, UK
            </p>
            <p className="text-xs font-mono text-[#F2F1ED]/50 mt-1">
              +44 (0) 20 7499 1800
            </p>
            <p className="text-[11px] text-[#F2F1ED]/40 mt-1">
              Wednesday – Sunday &bull; 10:00 – 19:00
            </p>
          </div>

          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A064] font-semibold block mb-4">
              New York SoHo Studio
            </span>
            <p className="text-xs font-light text-[#F2F1ED]/80 leading-relaxed">
              482 Broome Street, SoHo, NY 10013, USA
            </p>
            <p className="text-xs font-mono text-[#F2F1ED]/50 mt-1">
              +1 (212) 925-1440
            </p>
            <p className="text-[11px] text-[#F2F1ED]/40 mt-1">
              Bespoke Bridal & Event Consultations
            </p>
          </div>

          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A064] font-semibold block mb-4">
              Private Allocations
            </span>
            <p className="text-xs font-light text-[#F2F1ED]/70 leading-relaxed mb-4">
              Join our private clientele dispatch for seasonal single-origin releases and tasting reservations.
            </p>
            <div className="flex items-center border-b border-white/20 pb-2">
              <input
                type="email"
                placeholder="Enter client email..."
                className="bg-transparent text-xs text-white placeholder-white/30 focus:outline-none w-full"
              />
              <button
                onClick={() => alert("Thank you. You have been placed on our private allocation list.")}
                className="text-[10px] uppercase tracking-[0.2em] text-[#C5A064] hover:text-white transition-colors cursor-pointer"
              >
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Center: Monumental Architectural Brand Typographic Banner (Forge Automotive Signature) */}
        <div className="py-16 sm:py-24 text-center select-none border-b border-white/10 overflow-hidden">
          <p className="font-serif text-5xl sm:text-8xl md:text-9xl lg:text-[11rem] xl:text-[14rem] font-extralight tracking-tight text-white/[0.07] uppercase whitespace-nowrap leading-none">
            HOUSE OF CAKES
          </p>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 text-[10px] tracking-[0.25em] uppercase text-[#F2F1ED]/40">
          <div className="flex flex-wrap items-center gap-6">
            <span>&copy; {new Date().getFullYear()} HOUSE OF CAKES LTD.</span>
            <Link href="#commission" className="hover:text-white transition-colors">
              Terms of Commission
            </Link>
            <Link href="#approach" className="hover:text-white transition-colors">
              Provenance
            </Link>
            <Link href="#atelier" className="hover:text-white transition-colors">
              Privacy Protocol
            </Link>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#C5A064] transition-colors cursor-pointer group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
