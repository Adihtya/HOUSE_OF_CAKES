"use client";

import Link from "next/link";
import { ArrowUp, Cake, Heart } from "lucide-react";
import { NAV_ITEMS } from "@/data/navigation";
import { ATELIER_INFO } from "@/data/content";

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#261216] text-[#FFF4E5] pt-20 pb-12 relative overflow-hidden border-t-4 border-[#8F1235]">
      {/* Decorative Warm Ambient Glow */}
      <div className="absolute top-0 right-1/3 w-96 h-96 rounded-full bg-[#8F1235]/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info & Newsletter (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#8F1235] text-[#FFD968] flex items-center justify-center shadow-md">
                <Cake className="w-4 h-4" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                HOUSE <span className="italic font-normal text-[#F13D70]">of</span> CAKES
              </span>
            </div>

            <p className="text-sm text-white/75 leading-relaxed max-w-sm mb-6">
              A tropical dessert atelier and conveyor exhibition. Handcrafted
              daily with single-estate chocolates, mountain berries, and
              unapologetic culinary joy.
            </p>

            {/* Newsletter Demo Form */}
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#FFD968] block mb-2">
                Join the Private Tasting Gazette
              </span>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you for joining the House of Cakes Gazette (Demo)!");
                }}
                className="flex items-center max-w-sm gap-2"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email..."
                  className="px-4 py-2.5 rounded-full bg-white/10 text-xs text-white placeholder-white/40 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#FFD968] w-full"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-full bg-[#8F1235] hover:bg-[#F13D70] text-xs font-bold text-white transition-colors shrink-0 shadow-sm"
                >
                  Join
                </button>
              </form>
              <p className="text-[10px] text-white/40 mt-1.5">
                Seasonal menu drops & atelier invitations only.
              </p>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#FFD968] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-white hover:underline transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Atelier Hours & Contact (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#FFD968] mb-4">
              Parisian Salon
            </h4>
            <div className="space-y-2 text-sm text-white/75">
              <p>{ATELIER_INFO.addressLine1}</p>
              <p>{ATELIER_INFO.addressLine2}</p>
              <p className="text-xs text-[#FFD968] pt-1">{ATELIER_INFO.metro}</p>
              <p className="pt-2 text-xs text-white/60">
                Salon Hours: Tue–Sun 08:30 – 19:30
              </p>
            </div>

            <div className="flex items-center gap-3 mt-6">
              {ATELIER_INFO.socials.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.url}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-white/10 hover:bg-[#8F1235] text-white/80 hover:text-white transition-colors border border-white/15"
                >
                  {soc.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Distinctive Oversized HOUSE OF CAKES Wordmark */}
        <div className="py-12 select-none text-center border-b border-white/10">
          <h2 className="font-serif text-5xl sm:text-8xl lg:text-[11vw] font-bold text-white/10 hover:text-white/20 transition-colors tracking-tight leading-none uppercase">
            HOUSE OF CAKES
          </h2>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} HOUSE OF CAKES Atelier.</span>
            <span>All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 text-white/50">
              Baked with passion <Heart className="w-3 h-3 text-[#F13D70] fill-current" /> in Paris
            </span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#8F1235] text-white text-xs font-medium transition-colors border border-white/20"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
