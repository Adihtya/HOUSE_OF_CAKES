"use client";

import Image from "next/image";
import Link from "next/link";
import { Sparkles, Heart, Coffee, Sun, Smile } from "lucide-react";

export function JollyBrunchSection() {
  return (
    <section
      id="brunch"
      className="relative w-full py-24 sm:py-36 bg-[#FFFDF7] overflow-hidden select-none"
      aria-label="Brunch and Breakfast Section"
    >
      {/* Background Organic Wavy Liquid Blobs (Image 3 Style) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft pink wavy ribbon */}
        <div className="absolute top-12 -left-20 w-[600px] h-[600px] bg-[#FAD5DF]/70 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-[40px] -rotate-12" />
        
        {/* Mint pastel wave */}
        <div className="absolute bottom-10 -right-24 w-[650px] h-[550px] bg-[#C6F6E5]/60 rounded-[40%_60%_70%_30%/40%_50%_50%_60%] blur-[60px]" />
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: Giant Vintage Chunky Typography from Image 3 */}
          <div className="lg:col-span-5 flex flex-col items-start">
            {/* Pill kicker badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAD5DF] text-[#004F3C] text-xs font-black tracking-wider uppercase mb-6 shadow-sm border border-white">
              <Sun className="w-4 h-4 text-[#F13D70]" />
              <span>Served All Day &bull; 9h00 – 17h30</span>
            </div>

            {/* Giant Title: "Brunch & Breakfast" */}
            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black text-[#00966C] tracking-tight leading-[0.95] mb-2">
              Brunch
            </h2>
            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black text-[#004F3C] tracking-tight leading-[0.95] mb-8">
              Breakfast
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#2C4A3E] leading-relaxed mb-8 max-w-md">
              Bali vibes meeting Parisian patisserie precision. From our signature avocado toast topped with lotus chips to Tokyo-style soufflé pancake towers that jiggle with delight.
            </p>

            {/* Mint Pill "MENU" Button (Direct from Image 3) */}
            <a
              href="#star-menu"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#7DD7BE] hover:bg-[#52BBA0] text-[#004F3C] font-black text-sm tracking-widest uppercase shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer border-2 border-white"
            >
              <span>MENU</span>
              <span className="text-base">🥞</span>
            </a>

            {/* 3 Jolly Benefit Pills */}
            <div className="grid grid-cols-2 gap-3 mt-10 w-full max-w-md">
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white shadow-sm border border-[#00966C]/10">
                <span className="text-xl">🍓</span>
                <span className="text-xs font-bold text-[#004F3C]">100% Organic Berries</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white shadow-sm border border-[#00966C]/10">
                <span className="text-xl">🧈</span>
                <span className="text-xs font-bold text-[#004F3C]">Normandy AOP Butter</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white shadow-sm border border-[#00966C]/10">
                <span className="text-xl">🌿</span>
                <span className="text-xs font-bold text-[#004F3C]">Uji Ceremonial Matcha</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white shadow-sm border border-[#00966C]/10">
                <span className="text-xl">✨</span>
                <span className="text-xs font-bold text-[#004F3C]">Fresh Batter Daily</span>
              </div>
            </div>
          </div>

          {/* RIGHT: High Impact Plating Photography Collage (From Image 3) */}
          <div className="lg:col-span-7 relative">
            <div className="relative grid grid-cols-2 gap-4 sm:gap-6">
              {/* Card 1: Avocado Lotus Plate */}
              <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden border-4 border-white shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=85"
                  alt="Avocado Toast with Lotus Chips and Pomegranate"
                  fill
                  sizes="400px"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black text-[#004F3C] uppercase shadow-sm">
                  Bali Inspired 🥑
                </div>
              </div>

              {/* Card 2: Soufflé Pancakes Tower */}
              <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden border-4 border-white shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 mt-6 sm:mt-10">
                <Image
                  src="https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=85"
                  alt="Fluffy Tokyo Pancakes with Whipped Cream"
                  fill
                  sizes="400px"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-[#F13D70] px-3 py-1 rounded-full text-[10px] font-black text-white uppercase shadow-sm">
                  All-Time Fav 🥞
                </div>
              </div>

              {/* Card 3: Matcha and Boba Cloud Drinks */}
              <div className="relative h-56 sm:h-72 rounded-3xl overflow-hidden border-4 border-white shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=85"
                  alt="Ceremonial Iced Matcha with Boba"
                  fill
                  sizes="400px"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 bg-[#00966C] px-3 py-1 rounded-full text-[10px] font-black text-white uppercase shadow-sm">
                  Ceremonial Uji 🧋
                </div>
              </div>

              {/* Card 4: French Toast Brioche */}
              <div className="relative h-56 sm:h-72 rounded-3xl overflow-hidden border-4 border-white shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500 -mt-2">
                <Image
                  src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=800&q=85"
                  alt="Caramelized Brioche French Toast"
                  fill
                  sizes="400px"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 right-3 bg-[#FFD84D] px-3 py-1 rounded-full text-[10px] font-black text-[#004F3C] uppercase shadow-sm">
                  Salted Caramel 🍯
                </div>
              </div>
            </div>

            {/* Cute Floating Center Stamp Decal */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#F13D70] border-4 border-white shadow-2xl flex flex-col items-center justify-center text-white select-none pointer-events-none animate-spin-slow">
              <span className="text-xl">✨</span>
              <span className="text-[9px] font-black tracking-widest uppercase">BONJOUR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
