"use client";

import { Sparkles } from "lucide-react";

export function BrandManifesto() {
  return (
    <section
      className="py-28 sm:py-40 bg-gradient-to-b from-[#8F1235] to-[#5C0A21] text-[#FFF4E5] relative overflow-hidden text-center"
      aria-label="Brand Manifesto"
    >
      {/* Background Decorative Graphic Flourishes */}
      <div className="absolute inset-0 pointer-events-none opacity-10 flex items-center justify-center">
        <span className="font-serif text-[24vw] font-bold text-white tracking-widest select-none">
          HOC
        </span>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        {/* Decorative Top Stamp */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-[0.3em] bg-white/10 text-[#FFD968] border border-white/20 mb-8 sm:mb-12">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The House of Cakes Creed</span>
        </div>

        {/* The 3 Core Manifesto Lines */}
        <div className="space-y-6 sm:space-y-10">
          <p className="font-serif text-3xl sm:text-5xl lg:text-7xl font-light tracking-tight text-white/80 uppercase">
            For the <span className="italic font-bold text-[#FFD968]">First Bite.</span>
          </p>

          <p className="font-serif text-3xl sm:text-5xl lg:text-7xl font-light tracking-tight text-white/90 uppercase">
            For the <span className="italic font-bold text-[#FFA5BC]">Last Crumb.</span>
          </p>

          <p className="font-serif text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-[#FFF4E5] uppercase leading-[0.95]">
            For the moments that deserve <br />
            <span className="italic font-normal text-[#FFD968] underline decoration-[#F13D70] decoration-wavy decoration-2">
              Something Extraordinary.
            </span>
          </p>
        </div>

        {/* Sensory Manifesto Paragraph */}
        <p className="mt-12 max-w-2xl text-sm sm:text-base text-white/80 leading-relaxed font-normal">
          We reject hurried confections. We champion pure cream, hand-cracked cacao,
          ripe alpine berries, and pastry crafted as an enduring memory.
        </p>

        {/* Small Decorative Monogram */}
        <div className="mt-12 w-12 h-12 rounded-full border border-[#FFD968]/40 flex items-center justify-center text-[#FFD968] font-serif text-xl font-bold">
          ✦
        </div>
      </div>
    </section>
  );
}
