"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Sparkles, ChevronRight, Eye, ArrowRight } from "lucide-react";
import { CakeProduct } from "@/types/product";
import { gsap } from "@/animations/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ConveyorHeroProps {
  cakes: CakeProduct[];
  onSelectCake: (cake: CakeProduct) => void;
}

export function ConveyorHero({ cakes, onSelectCake }: ConveyorHeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const foliageBgRef = useRef<HTMLDivElement>(null);
  const foliageFgRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);

  useEffect(() => {
    if (prefersReduced) return;
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;
      if (!isMobile && trackRef.current && sectionRef.current) {
        const totalDistance =
          trackRef.current.scrollWidth - window.innerWidth + 240;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${Math.max(totalDistance * 1.25, 2000)}`,
            pin: true,
            scrub: 1.1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Horizontal belt translation
        tl.to(trackRef.current, {
          x: () => -totalDistance,
          ease: "none",
        });

        // Background Parallax
        if (foliageBgRef.current) {
          tl.to(
            foliageBgRef.current,
            {
              x: () => -totalDistance * 0.35,
              ease: "none",
            },
            0
          );
        }

        // Foreground Parallax
        if (foliageFgRef.current) {
          tl.to(
            foliageFgRef.current,
            {
              x: () => -totalDistance * 0.7,
              ease: "none",
            },
            0
          );
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <section
      id="conveyor"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-gradient-to-b from-[#FFF4E5] via-[#FFF0F4] to-[#FFF4E5] overflow-hidden flex flex-col justify-between pt-24 pb-8"
      aria-label="Interactive Cake Conveyor Hero"
    >
      {/* Background Ambience: Tropical botanical silhouettes & warm glowing orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#FFA5BC]/25 blur-3xl" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[#FFD968]/20 blur-3xl" />
        <div className="absolute -bottom-20 left-1/4 w-96 h-96 rounded-full bg-[#FF7448]/15 blur-3xl" />

        {/* Parallax Background Foliage */}
        <div
          ref={foliageBgRef}
          className="absolute top-12 left-0 w-[2600px] h-64 opacity-25 flex justify-around select-none"
        >
          <span className="text-8xl filter blur-xs transform -rotate-12">🌿</span>
          <span className="text-7xl filter blur-xs transform rotate-45">🌺</span>
          <span className="text-9xl filter blur-xs transform -rotate-6">🍃</span>
          <span className="text-8xl filter blur-xs transform rotate-12">🌸</span>
          <span className="text-9xl filter blur-xs transform -rotate-45">🌿</span>
          <span className="text-7xl filter blur-xs transform rotate-30">🌺</span>
        </div>
      </div>

      {/* Floating Playful Stickers & Doodles (Bon Bouquet style) */}
      <div className="pointer-events-none absolute top-28 right-8 lg:right-24 z-20 hidden md:block">
        <div className="animate-float p-3 rounded-2xl bg-[#FFD968] text-[#351C20] font-bold text-xs shadow-lg transform rotate-6 border-2 border-[#351C20]">
          <span>🍓 100% Wild Mountain Berries</span>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-40 left-8 lg:left-20 z-20 hidden md:block">
        <div className="animate-float-reverse p-3 rounded-2xl bg-[#F13D70] text-white font-bold text-xs shadow-lg transform -rotate-6 border-2 border-white">
          <span>✦ 72h Cold Fermentation Atelier ✦</span>
        </div>
      </div>

      {/* Hero Header & Editorial Introduction */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
          <div className="max-w-2xl">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#8F1235]/10 text-[#8F1235] border border-[#FFA5BC]/30 mb-3 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#F13D70] animate-pulse" />
              <span>Scroll-Controlled Sushi-Style Exhibition</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#8F1235] leading-[0.95]">
              A LITTLE SLICE <br />
              <span className="italic font-normal text-[#F13D70]">of</span>{" "}
              EXTRAORDINARY.
            </h1>

            {/* Supporting Copy */}
            <p className="mt-3 text-base sm:text-lg text-[#351C20]/80 max-w-xl font-normal leading-relaxed">
              A world of extraordinary cakes, tropical flavors, and little
              moments worth celebrating. Handcrafted daily in our Paris atelier.
            </p>
          </div>

          {/* Action Links & Scroll Prompt */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 shrink-0">
            <Link
              href="#collection"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold bg-[#8F1235] text-white hover:bg-[#F13D70] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#8F1235]"
            >
              <span>Explore the Collection</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="#story"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-semibold bg-white/80 hover:bg-white text-[#351C20] border border-[#FFA5BC]/40 transition-colors shadow-xs"
            >
              <span>Our Story</span>
            </Link>

            <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-[#8F1235] uppercase tracking-wider pl-2">
              <ArrowDown className="w-4 h-4 animate-bounce text-[#F13D70]" />
              <span>Scroll down to advance belt</span>
            </div>
          </div>
        </div>
      </div>

      {/* Conveyor Belt Staging Area */}
      <div className="relative w-full mt-4 sm:mt-6 select-none conveyor-viewport">
        {/* Conveyor Counter Architectural Base: Brass rail & dark walnut trim */}
        <div className="relative w-full h-[360px] sm:h-[430px] flex items-center">
          {/* Counter Top Surface with Metallic Brass Trim and Warm Ambient Shadow */}
          <div className="absolute inset-x-0 bottom-4 h-36 sm:h-44 bg-gradient-to-t from-[#200D11] via-[#351C20] to-[#4A262C] rounded-3xl mx-2 sm:mx-6 shadow-2xl border-t-4 border-[#FFD968]/80 overflow-hidden">
            {/* Belt Track Texture & Brass Guides */}
            <div className="absolute top-2 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#FFD968] to-transparent opacity-80" />
            <div className="absolute top-6 inset-x-0 h-0.5 bg-[#FFF4E5]/15" />
            
            <div className="absolute bottom-5 inset-x-0 flex items-center justify-between px-8 text-[11px] font-mono tracking-widest text-[#FFD968]/70 uppercase">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#456B4A] animate-pulse" />
                <span>CHILLED ATELIER CONVEYOR &bull; 4°C OPTIMAL</span>
              </span>
              <span className="hidden md:inline">TASTING FLIGHT NO. 01–08</span>
              <span className="text-[#FFA5BC]">PARIS 9e SALON</span>
            </div>
          </div>

          {/* Horizontally Moving Belt Track */}
          <div
            ref={trackRef}
            className="flex items-center gap-8 sm:gap-14 px-6 sm:px-16 w-max will-change-transform z-20 py-6"
          >
            {cakes.map((cake, index) => {
              const isHovered = activeHoverId === cake.id;

              return (
                <div
                  key={cake.id}
                  className="group relative flex flex-col items-center shrink-0 w-64 sm:w-80 cursor-pointer"
                  onMouseEnter={() => setActiveHoverId(cake.id)}
                  onMouseLeave={() => setActiveHoverId(null)}
                  onClick={() => onSelectCake(cake)}
                >
                  {/* Floating Number & Category Badge above cake */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono text-xs font-bold text-[#8F1235] px-2 py-0.5 rounded-full bg-white/95 shadow-xs border border-[#FFA5BC]/30">
                      0{index + 1}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#351C20]/80 px-2 py-0.5 rounded-full bg-[#FFF4E5] border border-[#FFA5BC]/30">
                      {cake.category}
                    </span>
                  </div>

                  {/* Cake Plate & Presentation Stand */}
                  <div className="relative w-56 h-56 sm:w-72 sm:h-72 flex items-center justify-center">
                    {/* Realistic Radial Plate Shadow */}
                    <div
                      className={`absolute bottom-2 w-48 sm:w-60 h-10 rounded-[100%] bg-[#1A0A0D]/50 filter blur-md transition-all duration-300 ${
                        isHovered
                          ? "scale-110 opacity-80 blur-lg"
                          : "scale-100 opacity-40"
                      }`}
                    />

                    {/* Glazed Ceramic Porcelain Serving Plate */}
                    <div
                      className={`absolute bottom-3 w-52 sm:w-64 h-12 sm:h-14 rounded-[100%] bg-gradient-to-b from-[#FFFDF9] via-[#F4EDE2] to-[#E5DAC8] border-2 border-[#FFD968]/70 shadow-lg transition-transform duration-300 ${
                        isHovered ? "-translate-y-3" : "translate-y-0"
                      }`}
                    >
                      <div className="absolute inset-1 rounded-[100%] border border-[#FFD968]/40" />
                    </div>

                    {/* Cake Image with Elevation on Hover */}
                    <div
                      className={`relative w-48 h-48 sm:w-60 sm:h-60 rounded-full overflow-hidden transition-all duration-500 ease-out z-10 ${
                        isHovered
                          ? "-translate-y-6 scale-105 shadow-2xl ring-4 ring-[#FFD968]"
                          : "translate-y-0 scale-100 shadow-md ring-2 ring-white/80"
                      }`}
                    >
                      <Image
                        src={cake.image}
                        alt={cake.name}
                        fill
                        sizes="(max-width: 768px) 240px, 300px"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        priority={index < 2}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#351C20]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Quick Inspect Button on Hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#351C20]/30 backdrop-blur-[2px]">
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-[#8F1235] text-xs font-bold shadow-lg">
                          <Eye className="w-3.5 h-3.5" /> Inspect Cake
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Product Card Label Underneath Plate */}
                  <div
                    className={`mt-4 w-full p-4 rounded-2xl bg-white/95 text-center shadow-lg border border-[#FFA5BC]/30 transition-all duration-300 ${
                      isHovered
                        ? "border-[#F13D70] shadow-xl -translate-y-1 bg-white"
                        : "hover:border-[#FFA5BC]"
                    }`}
                  >
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#8F1235] leading-tight">
                      {cake.name}
                    </h3>
                    <p className="text-xs text-[#F13D70] font-medium mt-0.5 line-clamp-1">
                      {cake.tagline}
                    </p>

                    {/* Flavor Notes Tags */}
                    <div className="flex flex-wrap justify-center gap-1.5 mt-2">
                      {cake.flavorNotes.slice(0, 2).map((note, nIdx) => (
                        <span
                          key={nIdx}
                          className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#FFF4E5] text-[#8F1235] border border-[#FFA5BC]/20"
                        >
                          ✦ {note}
                        </span>
                      ))}
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-[#FFA5BC]/20 flex items-center justify-between text-xs">
                      <span className="font-bold text-[#8F1235]">
                        {cake.priceSample}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectCake(cake);
                        }}
                        className="text-[#F13D70] hover:text-[#8F1235] font-semibold flex items-center gap-1 focus-visible:outline-none"
                      >
                        <span>Details</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Foreground Tropical Accents (Parallax Layer) */}
      <div
        ref={foliageFgRef}
        className="pointer-events-none absolute bottom-0 left-0 w-[2600px] h-20 opacity-30 flex justify-between select-none z-30"
      >
        <span className="text-5xl filter blur-xs transform rotate-12">🍓</span>
        <span className="text-6xl filter blur-xs transform -rotate-45">🌿</span>
        <span className="text-5xl filter blur-xs transform rotate-30">🍒</span>
        <span className="text-6xl filter blur-xs transform -rotate-12">🍃</span>
        <span className="text-5xl filter blur-xs transform rotate-45">🍓</span>
        <span className="text-6xl filter blur-xs transform -rotate-30">🌿</span>
      </div>

      {/* Bottom Status Ticker */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-[#351C20]/70 border-t border-[#FFA5BC]/20 pt-3 gap-2">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#F13D70]" />
          <span>Interactive Conveyor &bull; Vertical scroll advances the display</span>
        </div>
        <div className="flex items-center gap-4">
          <span>Parisian Tasting Salon</span>
          <span>&bull;</span>
          <span>Open Tue–Sun</span>
        </div>
      </div>
    </section>
  );
}
