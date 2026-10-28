"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/animations/gsap";

export function JollyMovingText() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const row3Ref = useRef<HTMLDivElement>(null);
  const row4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Row 1: moves left to right with scroll (fast & responsive)
      if (row1Ref.current) {
        gsap.fromTo(
          row1Ref.current,
          { xPercent: -25 },
          {
            xPercent: 5,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.5,
            },
          }
        );
      }

      // Row 2: moves right to left with scroll (fast & responsive)
      if (row2Ref.current) {
        gsap.fromTo(
          row2Ref.current,
          { xPercent: 5 },
          {
            xPercent: -25,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.5,
            },
          }
        );
      }

      // Row 3: moves left to right with scroll (fast & responsive)
      if (row3Ref.current) {
        gsap.fromTo(
          row3Ref.current,
          { xPercent: -30 },
          {
            xPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.5,
            },
          }
        );
      }

      // Row 4: moves right to left with scroll (fast & responsive)
      if (row4Ref.current) {
        gsap.fromTo(
          row4Ref.current,
          { xPercent: 8 },
          {
            xPercent: -30,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.5,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="concept"
      ref={sectionRef}
      className="relative w-full py-24 sm:py-36 bg-[#FAD5DF] overflow-hidden select-none"
      aria-label="Bon Bouquet Moving Animated Typography"
    >
      {/* Organic Wavy Emerald Background Blob Cutouts (Bon Bouquet Style) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-right wavy green contour */}
        <div className="absolute -top-32 -right-24 w-[650px] h-[650px] bg-[#00966C] rounded-[42%_58%_70%_30%/45%_45%_55%_55%] opacity-90 -rotate-12 transition-transform duration-1000" />
        
        {/* Bottom-left wavy green contour */}
        <div className="absolute -bottom-36 -left-32 w-[700px] h-[700px] bg-[#004F3C] rounded-[55%_45%_30%_70%/50%_60%_40%_50%] opacity-85 rotate-45" />

        {/* Soft mint accent bubble */}
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#BDFBFF]/40 rounded-full blur-[80px]" />
      </div>

      {/* Floating Tropical Hibiscus Stickers (Image 1 Style) */}
      <div className="absolute top-8 left-12 sm:left-24 z-20 pointer-events-none animate-float-flower">
        <svg width="110" height="110" viewBox="0 0 100 100" fill="none" className="text-[#EC1C72] drop-shadow-xl">
          <path
            d="M50 15 C45 2 30 5 32 20 C20 12 10 24 22 34 C8 38 12 55 26 53 C18 67 32 75 40 63 C45 78 60 75 58 60 C70 68 80 56 68 46 C82 42 78 25 64 27 C72 13 58 5 50 15 Z"
            fill="currentColor"
          />
          <circle cx="50" cy="42" r="7" fill="#FFEAA7" />
          <path d="M50 42 Q53 26 58 18" stroke="#FFEAA7" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>

      <div className="absolute bottom-12 right-12 sm:right-28 z-20 pointer-events-none animate-float-flower" style={{ animationDelay: "2s" }}>
        <svg width="95" height="95" viewBox="0 0 100 100" fill="none" className="text-[#F13D70] drop-shadow-xl">
          <path
            d="M50 15 C45 2 30 5 32 20 C20 12 10 24 22 34 C8 38 12 55 26 53 C18 67 32 75 40 63 C45 78 60 75 58 60 C70 68 80 56 68 46 C82 42 78 25 64 27 C72 13 58 5 50 15 Z"
            fill="currentColor"
          />
          <circle cx="50" cy="42" r="6" fill="#FFD84D" />
        </svg>
      </div>

      {/* Floating Food Photography Plating Cards (From Image 1 & 3) */}
      <div className="absolute top-16 right-16 sm:right-32 z-20 hidden lg:block transform rotate-6 hover:rotate-0 transition-transform duration-500">
        <div className="relative w-56 h-40 rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=600&q=85"
            alt="Fluffy Tokyo Souffle Pancakes"
            fill
            sizes="250px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-3">
            <span className="font-display font-bold text-xs text-white">
              Soufflé Pancakes 🥞
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-16 left-12 sm:left-28 z-20 hidden lg:block transform -rotate-8 hover:rotate-0 transition-transform duration-500">
        <div className="relative w-52 h-40 rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=85"
            alt="Blue Butterfly Pea Latte"
            fill
            sizes="250px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-3">
            <span className="font-display font-bold text-xs text-white">
              Butterfly Latte ✨
            </span>
          </div>
        </div>
      </div>

      {/* Center Label Pill */}
      <div className="relative z-10 flex justify-center mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border-2 border-[#00966C] shadow-md">
          <span className="w-2.5 h-2.5 rounded-full bg-[#EC1C72] animate-pulse" />
          <span className="font-display font-black text-xs sm:text-sm tracking-[0.25em] uppercase text-[#004F3C]">
            The Everyday Brunch Craving
          </span>
        </div>
      </div>

      {/* 4 ROWS OF SCROLL-DRIVEN KINETIC TYPOGRAPHY */}
      <div className="relative z-10 flex flex-col gap-3 sm:gap-6 w-full overflow-hidden">
        {/* ROW 1: moves left to right with scroll */}
        <div
          ref={row1Ref}
          className="whitespace-nowrap flex items-center gap-8 sm:gap-14 will-change-transform -ml-24 sm:-ml-48"
        >
          <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-outline-white tracking-tight uppercase hover:text-white transition-colors duration-300">
            pancake
          </span>
          <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#004F3C] tracking-tight uppercase">
            acai bowl
          </span>
          <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-outline-green tracking-tight uppercase">
            tiramisu
          </span>
          <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#EC1C72] tracking-tight uppercase">
            fluffy waffle
          </span>
          <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-outline-white tracking-tight uppercase">
            strawberry cloud
          </span>
          <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-outline-white tracking-tight uppercase hover:text-white transition-colors duration-300">
            pancake
          </span>
          <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#004F3C] tracking-tight uppercase">
            acai bowl
          </span>
          <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-outline-green tracking-tight uppercase">
            tiramisu
          </span>
          <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#EC1C72] tracking-tight uppercase">
            fluffy waffle
          </span>
          <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-outline-white tracking-tight uppercase">
            strawberry cloud
          </span>
        </div>

        {/* ROW 2: moves right to left with scroll */}
        <div
          ref={row2Ref}
          className="whitespace-nowrap flex items-center gap-8 sm:gap-14 will-change-transform -ml-24 sm:-ml-48"
        >
          <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-outline-green tracking-tight uppercase hover:text-[#00966C] transition-colors duration-300">
            matcha
          </span>
          <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white drop-shadow-md tracking-tight uppercase">
            bubble tea
          </span>
          <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-outline-white tracking-tight uppercase">
            brioche french toast
          </span>
          <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#004F3C] tracking-tight uppercase">
            choux au craquelin
          </span>
          <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-outline-pink tracking-tight uppercase">
            mango tart
          </span>
          <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-outline-green tracking-tight uppercase hover:text-[#00966C] transition-colors duration-300">
            matcha
          </span>
          <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white drop-shadow-md tracking-tight uppercase">
            bubble tea
          </span>
          <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-outline-white tracking-tight uppercase">
            brioche french toast
          </span>
          <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#004F3C] tracking-tight uppercase">
            choux au craquelin
          </span>
          <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-outline-pink tracking-tight uppercase">
            mango tart
          </span>
        </div>

        {/* ROW 3: moves left to right with scroll */}
        <div
          ref={row3Ref}
          className="whitespace-nowrap flex items-center gap-8 sm:gap-14 will-change-transform -ml-24 sm:-ml-48"
        >
          <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tight uppercase hover:text-[#004F3C] transition-colors duration-300">
            poke
          </span>
          <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-outline-green tracking-tight uppercase">
            avocado toast
          </span>
          <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#EC1C72] tracking-tight uppercase">
            souffle pancake
          </span>
          <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-outline-white tracking-tight uppercase">
            pistachio silk
          </span>
          <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#004F3C] tracking-tight uppercase">
            passion fruit
          </span>
          <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tight uppercase hover:text-[#004F3C] transition-colors duration-300">
            poke
          </span>
          <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-outline-green tracking-tight uppercase">
            avocado toast
          </span>
          <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#EC1C72] tracking-tight uppercase">
            souffle pancake
          </span>
          <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-outline-white tracking-tight uppercase">
            pistachio silk
          </span>
          <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#004F3C] tracking-tight uppercase">
            passion fruit
          </span>
        </div>

        {/* ROW 4: moves right to left with scroll */}
        <div
          ref={row4Ref}
          className="whitespace-nowrap flex items-center gap-8 sm:gap-14 will-change-transform -ml-24 sm:-ml-48"
        >
          <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-outline-green tracking-tight uppercase">
            chicken bao
          </span>
          <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tight uppercase">
            satay waffle
          </span>
          <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#004F3C] tracking-tight uppercase">
            dragonfruit latte
          </span>
          <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-outline-pink tracking-tight uppercase">
            valrhona noir
          </span>
          <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tight uppercase">
            yuzu blossom
          </span>
          <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-outline-green tracking-tight uppercase">
            chicken bao
          </span>
          <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tight uppercase">
            satay waffle
          </span>
          <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#004F3C] tracking-tight uppercase">
            dragonfruit latte
          </span>
          <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-outline-pink tracking-tight uppercase">
            valrhona noir
          </span>
          <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tight uppercase">
            yuzu blossom
          </span>
        </div>
      </div>
    </section>
  );
}
