"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Sparkles, ArrowDown, Heart } from "lucide-react";
import { CakeProduct } from "@/types/product";

interface JollyHeroProps {
  cakes: CakeProduct[];
  onSelectCake: (cake: CakeProduct) => void;
  onOpenTastingBox?: () => void;
}

interface TrailItem {
  id: number;
  x: number;
  y: number;
  image: string;
  name: string;
  tag: string;
  rotation: number;
}

export function JollyHero({ cakes, onSelectCake, onOpenTastingBox }: JollyHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [trailItems, setTrailItems] = useState<TrailItem[]>([]);
  const lastPos = useRef({ x: 0, y: 0 });
  const countRef = useRef(0);

  // Curated hero photography for cursor trail with delicious cakes & brunch treats
  const trailImages = [
    {
      url: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=700&q=85",
      name: "Strawberry Cloud",
      tag: "🍓 Wild Berry Chantilly",
    },
    {
      url: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=700&q=85",
      name: "Soufflé Mango Pancakes",
      tag: "🥞 Fluffy Tokyo Style",
    },
    {
      url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=85",
      name: "The Midnight Chocolate",
      tag: "🍫 72% Valrhona Dark",
    },
    {
      url: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=700&q=85",
      name: "Pistachio Velvet",
      tag: "🌿 Bronte Pistachio Silk",
    },
    {
      url: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=700&q=85",
      name: "Ceremonial Uji Matcha",
      tag: "🧋 Cloud Foam & Boba",
    },
    {
      url: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=700&q=85",
      name: "Raspberry Rose Reverie",
      tag: "🌹 Damask Rose Sablé",
    },
    {
      url: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=700&q=85",
      name: "Alphonso Mango Blossom",
      tag: "🥭 Wild Passion Curd",
    },
    {
      url: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=700&q=85",
      name: "Blue Butterfly Pea Latte",
      tag: "✨ Lavender Vanilla Foam",
    },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const dist = Math.hypot(x - lastPos.current.x, y - lastPos.current.y);

    // Spawn a cute cake trail card every 80px of mouse glide
    if (dist > 80) {
      lastPos.current = { x, y };
      const current = trailImages[countRef.current % trailImages.length];
      const randomRot = (Math.random() - 0.5) * 14; // playful tilt between -7 and +7 deg

      const newItem: TrailItem = {
        id: Date.now() + Math.random(),
        x,
        y,
        image: current.url,
        name: current.name,
        tag: current.tag,
        rotation: randomRot,
      };

      countRef.current += 1;

      setTrailItems((prev) => [...prev.slice(-7), newItem]);

      // Remove after sweet pop duration
      setTimeout(() => {
        setTrailItems((prev) => prev.filter((item) => item.id !== newItem.id));
      }, 1050);
    }
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-[92vh] sm:min-h-screen flex flex-col justify-between items-center text-center px-6 sm:px-12 pt-32 sm:pt-36 pb-16 bg-[#FFF8FA] overflow-hidden select-none"
      aria-label="Jolly Atelier Hero"
    >
      {/* Background Organic Pastel Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft pink blob */}
        <div className="absolute -top-20 -left-20 w-[550px] h-[550px] bg-[#FAD5DF]/70 rounded-full blur-[80px]" />
        {/* Emerald pastel blob */}
        <div className="absolute top-1/3 -right-24 w-[500px] h-[500px] bg-[#BDFBFF]/60 rounded-full blur-[90px]" />
        {/* Buttercream center warmth */}
        <div className="absolute -bottom-20 left-1/3 w-[600px] h-[400px] bg-[#FFED6E]/30 rounded-full blur-[100px]" />
      </div>

      {/* Floating Tropical Hibiscus Stickers (Bon Bouquet Style) */}
      <div className="absolute top-24 left-8 sm:left-16 pointer-events-none hidden lg:block animate-float-flower">
        <svg width="84" height="84" viewBox="0 0 100 100" fill="none" className="text-[#F13D70] drop-shadow-md">
          <path
            d="M50 15 C45 2 30 5 32 20 C20 12 10 24 22 34 C8 38 12 55 26 53 C18 67 32 75 40 63 C45 78 60 75 58 60 C70 68 80 56 68 46 C82 42 78 25 64 27 C72 13 58 5 50 15 Z"
            fill="currentColor"
            opacity="0.9"
          />
          <circle cx="50" cy="42" r="6" fill="#FFD84D" />
          <path d="M50 42 Q52 30 56 22" stroke="#FFD84D" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>

      <div className="absolute bottom-28 right-8 sm:right-20 pointer-events-none hidden lg:block animate-float-flower" style={{ animationDelay: "1.5s" }}>
        <svg width="72" height="72" viewBox="0 0 100 100" fill="none" className="text-[#00966C] drop-shadow-md">
          <path
            d="M50 15 C45 2 30 5 32 20 C20 12 10 24 22 34 C8 38 12 55 26 53 C18 67 32 75 40 63 C45 78 60 75 58 60 C70 68 80 56 68 46 C82 42 78 25 64 27 C72 13 58 5 50 15 Z"
            fill="currentColor"
            opacity="0.85"
          />
          <circle cx="50" cy="42" r="5" fill="#FFEAA7" />
        </svg>
      </div>

      {/* Interactive Cursor Cake Image Trail (User's Favorite Feature!) */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden hidden md:block">
        {trailItems.map((item) => (
          <div
            key={item.id}
            className="absolute pointer-events-none transition-all duration-700 ease-out transform -translate-x-1/2 -translate-y-1/2 will-change-transform"
            style={{
              left: `${item.x}px`,
              top: `${item.y}px`,
              transform: `translate(-50%, -50%) rotate(${item.rotation}deg)`,
            }}
          >
            <div className="w-40 sm:w-48 bg-white p-2 rounded-2xl shadow-2xl border-2 border-white/90 animate-in fade-in zoom-in-75 duration-300">
              <div className="relative w-full h-32 sm:h-36 rounded-xl overflow-hidden bg-[#FAD5DF]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="200px"
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-sm rounded-full px-2 py-0.5 text-[9px] font-bold text-[#F13D70] shadow-sm">
                  Fresh
                </div>
              </div>
              <div className="mt-2 text-left px-1">
                <p className="font-display font-bold text-xs text-[#004F3C] truncate">
                  {item.name}
                </p>
                <p className="text-[10px] text-[#F13D70] font-medium truncate">
                  {item.tag}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Top Eyebrow Tag / Kicker Pill */}
      <div className="relative z-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border-2 border-[#00966C]/20 shadow-sm backdrop-blur-sm mb-4">
          <span className="w-2 h-2 rounded-full bg-[#F13D70] animate-ping" />
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#004F3C]">
            🌸 Bonjour! Paris 9ème &bull; Everyday Brunch Joy
          </span>
        </div>
      </div>

      {/* Center Main Editorial Heading & Subtitle */}
      <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight text-[#004F3C] leading-[1.08] mb-6 text-balance">
          Brunch, Cakes & <br />
          <span className="font-serif italic font-normal text-[#F13D70] underline decoration-[#FFD84D] decoration-wavy decoration-2">
            Everyday Joy
          </span>
        </h1>

        <p className="font-sans text-base sm:text-lg md:text-xl font-normal text-[#2C4A3E] max-w-2xl mx-auto leading-relaxed mb-8 text-balance">
          Fluffy soufflé stacks, iced ceremonial matcha clouds, and artisanal celebration cakes crafted with French butter, wild berries, and tropical sunshine.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
          <a
            href="#star-menu"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#00966C] hover:bg-[#004F3C] text-white font-extrabold text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <span>Explore Star Menu</span>
            <span className="text-xl group-hover:rotate-12 transition-transform">🥞</span>
          </a>

          <button
            onClick={onOpenTastingBox}
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white hover:bg-[#FDE8EF] text-[#004F3C] border-2 border-[#00966C]/30 hover:border-[#F13D70] font-bold text-sm sm:text-base shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#F13D70] group-hover:rotate-45 transition-transform" />
            <span>Curate Tasting Flight</span>
          </button>
        </div>

        {/* Interactive Mouse Trail Hint Pill */}
        <div className="mt-8 hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAD5DF]/80 text-[#004F3C] text-xs font-semibold border border-white shadow-sm">
          <span>✨</span>
          <span>Glide your mouse anywhere to pop delicious cakes & brunch bites!</span>
          <span>✨</span>
        </div>
      </div>

      {/* Bottom Features Strip */}
      <div className="relative z-20 w-full max-w-[1400px] flex flex-col sm:flex-row items-center justify-between gap-4 border-t-2 border-[#004F3C]/10 pt-6 text-xs font-bold tracking-wider uppercase text-[#004F3C]/70">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00966C]" />
          <span>Fresh Soufflé Batter & Pastries Daily</span>
        </div>

        <div className="flex items-center gap-2">
          <ArrowDown className="w-4 h-4 text-[#F13D70] animate-bounce" />
          <span>Scroll down for the rotating star menu</span>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <span>Bali Tropical Warmth &bull; Parisian Craft</span>
        </div>
      </div>
    </section>
  );
}
