"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Award, Heart, ArrowRight } from "lucide-react";

export function BrandIntroduction() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 14, y: -y * 14 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section
      id="story"
      className="relative py-24 sm:py-32 bg-[#FFFBF5] text-[#351C20] overflow-hidden"
      aria-label="Brand Story and Introduction"
    >
      {/* Decorative Organic Backdrop Circles */}
      <div className="absolute top-10 right-0 w-[600px] h-[600px] rounded-full bg-[#FFA5BC]/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full bg-[#FFD968]/25 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Subheader & Stamp */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-12 sm:mb-16 border-b border-[#FFA5BC]/25 pb-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#8F1235]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#8F1235]" />
            <span>Maison House of Cakes &bull; Paris Atelier</span>
          </div>

          {/* Playful Floating Badges */}
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FFD968] text-[#351C20] sticker-badge-yellow transform -rotate-2">
              ★ Tropical &times; Haute French
            </span>
            <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#FFA5BC] text-[#8F1235] sticker-badge transform rotate-2">
              Pure Emotion
            </span>
          </div>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Oversized Typography & Story (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="font-serif italic text-2xl sm:text-3xl text-[#F13D70] mb-2 flex items-center gap-2">
              <span>The Atelier Philosophy</span>
              <span className="text-sm font-sans not-italic px-2 py-0.5 rounded-full bg-[#FFF0F4] text-[#8F1235] font-bold">
                est. Paris
              </span>
            </span>

            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#8F1235] leading-[0.95] mb-8">
              BAKED WITH FEELING. <br />
              <span className="italic font-normal text-[#F13D70]">
                Made to be
              </span>{" "}
              REMEMBERED.
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[#351C20]/85 font-normal leading-relaxed max-w-xl">
              <p>
                HOUSE OF CAKES was founded on a singular obsession: that a dessert
                should never be ordinary. We believe the grandest celebrations
                and quietest afternoon cravings deserve equal poetry.
              </p>
              <p>
                By harmonizing vibrant tropical fruits—sun-ripened Alphonso
                mangoes, wild purple passion fruit, and aromatic Tahitian
                vanilla—with the disciplined elegance of classical French
                patisserie, our cakes become immersive sensory memories.
              </p>
            </div>

            {/* Three Pillar Cards with Hover Animation */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 pt-8 border-t border-[#FFA5BC]/30">
              <div className="p-4 rounded-2xl bg-[#FFF0F4] border border-[#FFA5BC]/30 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="w-8 h-8 rounded-full bg-[#8F1235] text-[#FFD968] flex items-center justify-center mb-3">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#8F1235]">
                  100% Real Fruit
                </h4>
                <p className="text-xs text-[#351C20]/70 mt-1">
                  Zero artificial extracts; pure alpine berries and equatorial harvests.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFF8EB] border border-[#FFD968]/40 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="w-8 h-8 rounded-full bg-[#FF7448] text-white flex items-center justify-center mb-3">
                  <Award className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#8F1235]">
                  Slow Fermentation
                </h4>
                <p className="text-xs text-[#351C20]/70 mt-1">
                  72-hour cold maturation for genoise sponges with velvety crumb.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F0F6F1] border border-[#456B4A]/25 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="w-8 h-8 rounded-full bg-[#456B4A] text-white flex items-center justify-center mb-3">
                  <Heart className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#8F1235]">
                  Haute Plating
                </h4>
                <p className="text-xs text-[#351C20]/70 mt-1">
                  Sculpted by hand with edible gold, dried florals, and silky namelaka.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="#collection"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#8F1235] hover:text-[#F13D70] group"
              >
                <span>Discover all handcrafted creations</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Layered Editorial Imagery & 3D Tilt Card (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image Frame with 3D Mouse Tilt */}
              <div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
                  transition: "transform 0.15s ease-out",
                }}
                className="relative h-[480px] sm:h-[560px] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white cursor-pointer group"
              >
                <Image
                  src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1200&q=85"
                  alt="House of Cakes Artisan Patisserie Masterpiece"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#351C20]/60 via-transparent to-transparent" />

                {/* Hand-Drawn Annotation Sticker (Bon Bouquet Style) */}
                <div className="absolute top-6 left-6 p-2.5 rounded-xl bg-white/95 text-[#8F1235] font-bold text-xs shadow-md border border-[#FFA5BC]/40 transform -rotate-3">
                  <span>← Mountain berries & Chantilly!</span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#FFD968]">
                    Signature Strawberry Cloud
                  </span>
                  <p className="font-serif text-2xl font-bold mt-1">
                    Airy chantilly with mountain wild strawberries.
                  </p>
                </div>
              </div>

              {/* Overlapping Companion Image with Angle */}
              <div className="hidden sm:block absolute -bottom-10 -left-10 w-48 h-48 rounded-3xl overflow-hidden shadow-xl border-4 border-[#FFF4E5] transform -rotate-6 transition-transform duration-300 hover:rotate-0 hover:scale-105">
                <Image
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80"
                  alt="Midnight Chocolate ganache detail"
                  fill
                  sizes="200px"
                  className="object-cover"
                />
              </div>

              {/* Floating Rotating Atelier Seal */}
              <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-[#8F1235] text-[#FFD968] p-3 shadow-xl flex items-center justify-center text-center animate-spin-slow select-none border-2 border-[#FFD968]/50">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text className="text-[10px] uppercase font-bold tracking-widest">
                    <textPath href="#circlePath" startOffset="0%">
                      • HOUSE OF CAKES • ATELIER PARIS •
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-serif text-lg font-bold text-[#FFD968]">
                  ✦
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
