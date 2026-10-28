"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { Sparkles, Trash2, Wand2, Eye, Plus } from "lucide-react";
import { CAKE_PRODUCTS } from "@/data/products";
import { CakeProduct } from "@/types/product";

interface PlaygroundItem {
  id: number;
  x: number;
  y: number;
  image: string;
  name: string;
  tag: string;
  price: string;
  cakeId?: string;
  rotation: number;
}

interface CakeTrailPlaygroundProps {
  onSelectCake: (cake: CakeProduct) => void;
  onAddToTastingBox?: (cake: CakeProduct) => void;
}

const TRAIL_TREATS = [
  {
    cakeId: "strawberry-cloud",
    name: "Strawberry Cloud",
    tag: "🍓 Wild Berry Chantilly",
    price: "€48",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=700&q=85",
    category: "cakes",
  },
  {
    cakeId: "mango-passion-blossom",
    name: "Soufflé Mango Pancakes",
    tag: "🥞 Fluffy Tokyo Style",
    price: "€18",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=700&q=85",
    category: "brunch",
  },
  {
    cakeId: "the-midnight-chocolate",
    name: "The Midnight Chocolate",
    tag: "🍫 72% Valrhona Dark",
    price: "€54",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=85",
    category: "cakes",
  },
  {
    cakeId: "pistachio-velvet",
    name: "Pistachio Velvet",
    tag: "🌿 Bronte Pistachio Silk",
    price: "€52",
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=700&q=85",
    category: "cakes",
  },
  {
    cakeId: "matcha-ceremony-crepe",
    name: "Ceremonial Uji Matcha",
    tag: "🧋 Cloud Foam & Boba",
    price: "€9",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=700&q=85",
    category: "drinks",
  },
  {
    cakeId: "raspberry-reverie",
    name: "Raspberry Rose Reverie",
    tag: "🌹 Damask Rose Sablé",
    price: "€46",
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=700&q=85",
    category: "cakes",
  },
  {
    cakeId: "caramel-pecan-choux",
    name: "Avocado Toast & Crispy Lotus",
    tag: "🥑 Bali Brunch Sensation",
    price: "€19",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=700&q=85",
    category: "brunch",
  },
  {
    cakeId: "citron-meringue-tarte",
    name: "Blue Butterfly Pea Latte",
    tag: "✨ Lavender Vanilla Foam",
    price: "€8.5",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=700&q=85",
    category: "drinks",
  },
];

export function CakeTrailPlayground({
  onSelectCake,
  onAddToTastingBox,
}: CakeTrailPlaygroundProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [cards, setCards] = useState<PlaygroundItem[]>([]);
  const [summonCount, setSummonCount] = useState<number>(0);
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const lastPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const indexRef = useRef<number>(0);

  // Initialize with 3 welcoming starter items placed in artistic spots
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      const w = rect.width || 800;
      const h = rect.height || 500;

      const starter1 = TRAIL_TREATS[0];
      const starter2 = TRAIL_TREATS[1];
      const starter3 = TRAIL_TREATS[3];

      setCards([
        {
          id: 1,
          x: Math.max(120, w * 0.22),
          y: Math.max(140, h * 0.35),
          image: starter1.image,
          name: starter1.name,
          tag: starter1.tag,
          price: starter1.price,
          cakeId: starter1.cakeId,
          rotation: -4,
        },
        {
          id: 2,
          x: Math.max(160, w * 0.5),
          y: Math.max(160, h * 0.48),
          image: starter2.image,
          name: starter2.name,
          tag: starter2.tag,
          price: starter2.price,
          cakeId: starter2.cakeId,
          rotation: 3,
        },
        {
          id: 3,
          x: Math.min(w - 120, w * 0.78),
          y: Math.max(140, h * 0.38),
          image: starter3.image,
          name: starter3.name,
          tag: starter3.tag,
          price: starter3.price,
          cakeId: starter3.cakeId,
          rotation: -2,
        },
      ]);
      setSummonCount(3);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  const spawnCard = useCallback(
    (clientX: number, clientY: number) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;

      const x = clientX - rect.left;
      const y = clientY - rect.top;

      // Keep within canvas padding boundaries
      if (x < 30 || x > rect.width - 30 || y < 30 || y > rect.height - 30) {
        return;
      }

      const dist = Math.hypot(x - lastPos.current.x, y - lastPos.current.y);

      // Require meaningful travel distance (75px) so cards don't stack directly on top
      if (dist < 75) return;

      lastPos.current = { x, y };

      const filteredTreats =
        selectedFilter === "all"
          ? TRAIL_TREATS
          : TRAIL_TREATS.filter((t) => t.category === selectedFilter);

      const treatList = filteredTreats.length > 0 ? filteredTreats : TRAIL_TREATS;
      const currentTreat = treatList[indexRef.current % treatList.length];
      indexRef.current += 1;

      const randomRot = (Math.random() - 0.5) * 16; // -8deg to +8deg natural tilt
      const newItemId = Date.now() + Math.random();

      const newCard: PlaygroundItem = {
        id: newItemId,
        x,
        y,
        image: currentTreat.image,
        name: currentTreat.name,
        tag: currentTreat.tag,
        price: currentTreat.price,
        cakeId: currentTreat.cakeId,
        rotation: randomRot,
      };

      setCards((prev) => {
        // Keep up to 14 active cards on stage for vibrant canvas
        const next = [...prev.slice(-13), newCard];
        return next;
      });

      setSummonCount((prev) => prev + 1);

      // Smooth expiration after 4 seconds of delightful display
      setTimeout(() => {
        setCards((prev) => prev.filter((item) => item.id !== newItemId));
      }, 4000);
    },
    [selectedFilter]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    spawnCard(e.clientX, e.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      spawnCard(touch.clientX, touch.clientY);
    }
  };

  const handleClearCanvas = () => {
    setCards([]);
  };

  const handleSurpriseBloom = () => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const radius = Math.min(rect.width, rect.height) * 0.32;

    const newBloomCards: PlaygroundItem[] = TRAIL_TREATS.slice(0, 6).map(
      (treat, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        return {
          id: Date.now() + i,
          x,
          y,
          image: treat.image,
          name: treat.name,
          tag: treat.tag,
          price: treat.price,
          cakeId: treat.cakeId,
          rotation: (Math.random() - 0.5) * 12,
        };
      }
    );

    setCards(newBloomCards);
    setSummonCount((prev) => prev + 6);
  };

  const handleInspectCard = (cakeId?: string) => {
    if (!cakeId) return;
    const found = CAKE_PRODUCTS.find((c) => c.id === cakeId);
    if (found) {
      onSelectCake(found);
    }
  };

  return (
    <section
      id="playground"
      className="relative w-full py-16 sm:py-24 bg-[#FFFDF7] text-[#1C2421] border-b border-[#00966C]/10 select-none overflow-hidden"
      aria-label="Patisserie Playground Canvas"
    >
      {/* Background Soft Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#FAD5DF]/50 rounded-full blur-[90px]" />
        <div className="absolute bottom-10 right-0 w-[550px] h-[550px] bg-[#C6F6E5]/40 rounded-full blur-[90px]" />
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAD5DF] text-[#004F3C] text-xs font-black tracking-widest uppercase mb-3 shadow-sm border border-white">
              <Sparkles className="w-3.5 h-3.5 text-[#F13D70]" />
              <span>Dedicated Interactive Stage &bull; Draw Without Clutter</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-[#004F3C] tracking-tight leading-tight">
              The Patisserie Playground
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#2C4A3E] max-w-xl mt-2 leading-relaxed">
              Glide your cursor or finger across this open canvas to pop fresh soufflés, cakes, and iced lattes. Tap any card to inspect recipe secrets & sommelier pairings.
            </p>
          </div>

          {/* Controls Strip: Filter pills, Surprise & Clear */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {/* Filter Pills */}
            <div className="inline-flex p-1 rounded-full bg-white shadow-sm border border-[#00966C]/15">
              {[
                { id: "all", label: "All Delights" },
                { id: "cakes", label: "Cakes 🍰" },
                { id: "brunch", label: "Brunch 🥞" },
                { id: "drinks", label: "Drinks 🧋" },
              ].map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                    selectedFilter === filter.id
                      ? "bg-[#00966C] text-white shadow-sm"
                      : "text-[#2C4A3E] hover:text-[#004F3C]"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Surprise Flower Bloom */}
            <button
              type="button"
              onClick={handleSurpriseBloom}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#FAD5DF] hover:bg-[#F13D70] hover:text-white text-[#004F3C] text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer"
              title="Spawn artistic flower bouquet of treats"
            >
              <Wand2 className="w-3.5 h-3.5" />
              <span>Surprise Bloom</span>
            </button>

            {/* Clear Canvas */}
            <button
              type="button"
              onClick={handleClearCanvas}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-white hover:bg-rose-50 text-[#C2185B] border border-rose-200 text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer"
              title="Clear all cards from canvas"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear</span>
            </button>

            {/* Live Count Badge */}
            <div className="px-3.5 py-1.5 rounded-full bg-white text-[#004F3C] font-mono text-xs font-bold shadow-sm border border-[#00966C]/20">
              ✦ {summonCount} summoned
            </div>
          </div>
        </div>

        {/* THE INTERACTIVE DRAWING STAGE */}
        <div
          ref={canvasRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onTouchStart={handleTouchMove}
          className="relative w-full h-[520px] sm:h-[600px] lg:h-[660px] rounded-3xl bg-gradient-to-b from-[#FFFDF7] via-[#FFF9FB] to-[#FDF4F7] border-2 border-dashed border-[#00966C]/25 shadow-inner overflow-hidden cursor-crosshair jolly-grain"
        >
          {/* Subtle Canvas Watermark & Guides */}
          <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center opacity-30 select-none">
            <span className="text-7xl sm:text-9xl mb-2">🍰</span>
            <p className="font-display text-xl sm:text-2xl font-black text-[#004F3C] uppercase tracking-widest text-center px-4">
              GLIDE OR SWIPE YOUR CURSOR HERE
            </p>
            <p className="text-xs sm:text-sm font-serif italic text-[#F13D70] mt-1">
              Your free canvas to explore textures, flavors & colors
            </p>
          </div>

          {/* Corner Watermarks */}
          <div className="absolute top-4 left-5 pointer-events-none text-[11px] font-mono uppercase tracking-wider text-[#004F3C]/40">
            [ CANVAS COORDINATES ACTIVE ]
          </div>
          <div className="absolute bottom-4 right-5 pointer-events-none text-[11px] font-mono uppercase tracking-wider text-[#004F3C]/40">
            [ TAP ANY CARD TO INSPECT ]
          </div>

          {/* SPAWNED CARDS LAYER */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {cards.map((card) => (
              <div
                key={card.id}
                className="absolute pointer-events-auto transition-transform duration-300 ease-out hover:scale-105 hover:z-50 will-change-transform"
                style={{
                  left: `${card.x}px`,
                  top: `${card.y}px`,
                  transform: `translate(-50%, -50%) rotate(${card.rotation}deg)`,
                }}
              >
                <div className="w-44 sm:w-52 bg-white p-2.5 rounded-2xl shadow-2xl border-2 border-white/95 group transition-all duration-200 hover:border-[#00966C] animate-in fade-in zoom-in-75 duration-300">
                  {/* Photo Box */}
                  <div className="relative w-full h-32 sm:h-36 rounded-xl overflow-hidden bg-[#FAD5DF]">
                    <Image
                      src={card.image}
                      alt={card.name}
                      fill
                      sizes="220px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-sm rounded-full px-2 py-0.5 text-[9px] font-bold text-[#F13D70] shadow-sm">
                      {card.price}
                    </div>
                  </div>

                  {/* Card Meta & Inspect Action */}
                  <div className="mt-2 text-left px-1">
                    <p className="font-display font-bold text-xs text-[#004F3C] truncate">
                      {card.name}
                    </p>
                    <p className="text-[10px] text-[#F13D70] font-medium truncate mb-2">
                      {card.tag}
                    </p>

                    <div className="flex items-center gap-1.5 pt-1 border-t border-neutral-100">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleInspectCard(card.cakeId);
                        }}
                        className="flex-1 py-1 px-2 rounded-lg bg-[#00966C] hover:bg-[#004F3C] text-white text-[10px] font-bold flex items-center justify-center gap-1 shadow-sm transition-colors"
                      >
                        <Eye className="w-3 h-3" />
                        <span>Inspect</span>
                      </button>

                      {onAddToTastingBox && card.cakeId && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            const c = CAKE_PRODUCTS.find((p) => p.id === card.cakeId);
                            if (c) onAddToTastingBox(c);
                          }}
                          className="py-1 px-2 rounded-lg bg-[#FDE8EF] hover:bg-[#FAD5DF] text-[#C2185B] text-[10px] font-bold transition-colors"
                          title="Add to tasting box flight"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
