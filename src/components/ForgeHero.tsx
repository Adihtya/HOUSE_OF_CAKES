"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ForgeButton } from "./ForgeButton";
import { CakeProduct } from "@/types/product";

interface ForgeHeroProps {
  cakes: CakeProduct[];
  onSelectCake: (cake: CakeProduct) => void;
}

interface TrailItem {
  id: number;
  x: number;
  y: number;
  image: string;
  name: string;
}

export function ForgeHero({ cakes, onSelectCake }: ForgeHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [trailItems, setTrailItems] = useState<TrailItem[]>([]);
  const lastPos = useRef({ x: 0, y: 0 });
  const countRef = useRef(0);

  // Curated hero photography for cursor trail
  const trailImages = [
    {
      url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=85",
      name: "The Midnight Chocolate",
    },
    {
      url: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=700&q=85",
      name: "Strawberry Cloud",
    },
    {
      url: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=700&q=85",
      name: "Pistachio Velvet",
    },
    {
      url: "https://images.unsplash.com/photo-1506459225024-1428097a7e18?auto=format&fit=crop&w=700&q=85",
      name: "Vanilla Éclat",
    },
    {
      url: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=85",
      name: "Cherry Noir",
    },
    {
      url: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=700&q=85",
      name: "Raspberry Reverie",
    },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const dist = Math.hypot(x - lastPos.current.x, y - lastPos.current.y);

    // Spawn a trail card every 80 pixels of mouse travel
    if (dist > 85) {
      lastPos.current = { x, y };
      const currentImg = trailImages[countRef.current % trailImages.length];
      const newItem: TrailItem = {
        id: Date.now() + Math.random(),
        x,
        y,
        image: currentImg.url,
        name: currentImg.name,
      };

      countRef.current += 1;

      setTrailItems((prev) => [...prev.slice(-6), newItem]);

      // Remove after duration
      setTimeout(() => {
        setTrailItems((prev) => prev.filter((item) => item.id !== newItem.id));
      }, 950);
    }
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen min-h-[700px] flex flex-col justify-between items-center text-center px-6 sm:px-12 pt-32 pb-10 bg-[#0C0C0C] overflow-hidden select-none"
      aria-label="Atelier Hero Section"
    >
      {/* Background Subtle Atmospheric Vignette */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#C5A064]/5 blur-[160px] rounded-full" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0C0C0C]/60 to-[#0C0C0C]" />
      </div>

      {/* Interactive Cursor Image Trail (Forge Automotive Signature Interaction) */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden hidden md:block">
        {trailItems.map((item) => (
          <div
            key={item.id}
            className="absolute pointer-events-none transition-all duration-700 ease-out transform -translate-x-1/2 -translate-y-1/2 will-change-transform"
            style={{
              left: `${item.x}px`,
              top: `${item.y}px`,
            }}
          >
            <div className="w-36 h-48 sm:w-44 sm:h-56 relative rounded-sm overflow-hidden shadow-2xl border border-white/20 bg-[#161616] animate-in fade-in zoom-in-90 duration-300">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="180px"
                className="object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2.5">
                <span className="text-[9px] font-sans tracking-[0.2em] uppercase text-white font-medium truncate">
                  {item.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Top Tagline / Category Kicker */}
      <div className="relative z-20">
        <p className="font-sans text-[10px] sm:text-xs font-semibold tracking-[0.35em] uppercase text-[#C5A064] mb-3">
          &bull; The Haute Confectionerie Maison &bull;
        </p>
      </div>

      {/* Center Main Editorial Heading & Subtitle */}
      <div className="relative z-20 max-w-5xl mx-auto flex flex-col items-center">
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[7.2rem] font-extralight tracking-tight text-[#F2F1ED] leading-[1.05] capitalize mb-8 text-balance">
          For Those Who <br className="hidden sm:inline" />
          <span className="italic font-light text-[#C5A064]">Refuse</span> Ordinary
        </h1>

        <p className="font-sans text-sm sm:text-base md:text-lg font-light text-[#F2F1ED]/70 max-w-2xl mx-auto leading-relaxed tracking-normal mb-10 text-balance">
          A luxury confectionery atelier for bespoke architectural builds, haute pastry craftsmanship, and one-off celebratory monoliths.
        </p>

        {/* Forge Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <ForgeButton href="#commission" variant="gold">
            Start Your Commission
          </ForgeButton>
          <ForgeButton href="#collection" variant="secondary">
            Explore Signature Builds
          </ForgeButton>
        </div>
      </div>

      {/* Bottom Bar: Specifications & Scroll Indicator */}
      <div className="relative z-20 w-full max-w-[1500px] flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-[10px] tracking-[0.25em] uppercase text-[#F2F1ED]/50">
        <div className="hidden lg:flex items-center gap-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A064] animate-pulse" />
          <span>Private Salon Tastings &bull; London &bull; Paris &bull; NYC</span>
        </div>

        {/* Scroll Indicator */}
        <div className="flex items-center gap-3">
          <span>Scroll to Discover</span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
            <span className="w-1 h-2 rounded-full bg-[#C5A064] animate-bounce" />
          </div>
        </div>

        <div className="hidden sm:block">
          <span>White-Glove Temperature Logistics</span>
        </div>
      </div>
    </section>
  );
}
