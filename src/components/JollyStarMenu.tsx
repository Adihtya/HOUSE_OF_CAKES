"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Plus, Check } from "lucide-react";
import { CakeProduct } from "@/types/product";
import { gsap } from "@/animations/gsap";

interface MenuItem {
  id: string;
  name: string;
  subtitle: string;
  category: "all" | "brunch" | "cakes" | "drinks";
  price: string;
  image: string;
  tags: string[];
  rotationDirection: 1 | -1;
  rotationSpeed: number;
}

interface JollyStarMenuProps {
  onSelectCake?: (cake: CakeProduct) => void;
  onAddToTastingBox?: (cake: CakeProduct) => void;
  tastingBoxIds?: string[];
}

export function JollyStarMenu({
  onSelectCake,
  onAddToTastingBox,
  tastingBoxIds = [],
}: JollyStarMenuProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);

  // 12 Authentic Bon Bouquet Dishes from User's Attached Screenshot (Image 2)
  const menuItems: MenuItem[] = [
    {
      id: "mango-pancakes",
      name: "Tokyo Soufflé Pancakes",
      subtitle: "Fluffy soufflé stacks, mango cubes, vanilla chantilly & toasted almonds",
      category: "brunch",
      price: "€18",
      image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=85",
      tags: ["Signature", "Fluffy"],
      rotationDirection: 1,
      rotationSpeed: 0.18,
    },
    {
      id: "butterfly-latte",
      name: "Butterfly Pea Cloud Latte",
      subtitle: "Infused butterfly pea flower, vanilla blossom foam & oat milk",
      category: "drinks",
      price: "€8.5",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=85",
      tags: ["Pastel", "Iced"],
      rotationDirection: -1,
      rotationSpeed: 0.22,
    },
    {
      id: "chicken-brioche",
      name: "Crispy Katsu Chicken Bao",
      subtitle: "Crispy fried chicken, pickled purple cabbage, sriracha mayo & avocado",
      category: "brunch",
      price: "€19",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=85",
      tags: ["Savory", "Brioche"],
      rotationDirection: 1,
      rotationSpeed: 0.16,
    },
    {
      id: "turmeric-latte",
      name: "Golden Turmeric Oat Latte",
      subtitle: "Cold-pressed turmeric, ginger spice, steamed oat milk & delicate latte art",
      category: "drinks",
      price: "€7.5",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=85",
      tags: ["Wellness", "Warm"],
      rotationDirection: -1,
      rotationSpeed: 0.2,
    },
    {
      id: "the-midnight-chocolate",
      name: "The Midnight Chocolate Tart",
      subtitle: "72% Valrhona dark ganache, fresh alpine raspberries & gold leaf",
      category: "cakes",
      price: "€16",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=85",
      tags: ["Haute", "Valrhona"],
      rotationDirection: 1,
      rotationSpeed: 0.24,
    },
    {
      id: "matcha-boba",
      name: "Ceremonial Matcha Cloud",
      subtitle: "First-harvest Uji matcha, chewy brown sugar boba & whipped sweet foam",
      category: "drinks",
      price: "€9",
      image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=85",
      tags: ["Uji Grade", "Boba"],
      rotationDirection: -1,
      rotationSpeed: 0.18,
    },
    {
      id: "avocado-waffle",
      name: "Crispy Avocado Waffle Stack",
      subtitle: "Golden Belgian waffle topped with avocado fan, fried chicken & spicy maple",
      category: "brunch",
      price: "€21",
      image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=800&q=85",
      tags: ["Brunch Favorite"],
      rotationDirection: 1,
      rotationSpeed: 0.2,
    },
    {
      id: "acai-superbowl",
      name: "Tropical Acai Super Bowl",
      subtitle: "Wild Brazilian acai purée, kiwi slices, berries, chia seeds & coconut crunch",
      category: "brunch",
      price: "€16.5",
      image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=85",
      tags: ["Organic", "Superfood"],
      rotationDirection: -1,
      rotationSpeed: 0.22,
    },
    {
      id: "blueberry-frappe",
      name: "Blueberry Lavender Swirl",
      subtitle: "Blended blueberries, floral lavender syrup, cold-foam float & purple sugar",
      category: "drinks",
      price: "€8.5",
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=85",
      tags: ["Refresher"],
      rotationDirection: 1,
      rotationSpeed: 0.17,
    },
    {
      id: "chocolate-cookie",
      name: "Molten Raspberry Lava Cookie",
      subtitle: "Thick double-chocolate cookie dough filled with molten raspberry coulis",
      category: "cakes",
      price: "€9",
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=85",
      tags: ["Molten Core"],
      rotationDirection: -1,
      rotationSpeed: 0.21,
    },
    {
      id: "pink-pitaya",
      name: "Dragonfruit Pink Pitaya",
      subtitle: "Cold-pressed pink dragonfruit, coconut water, lime spritz & passion pearls",
      category: "drinks",
      price: "€8.5",
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=85",
      tags: ["Tropical", "Pink"],
      rotationDirection: 1,
      rotationSpeed: 0.19,
    },
    {
      id: "french-toast",
      name: "Caramelized Brioche Toast",
      subtitle: "Thick-cut Parisian brioche, salted caramel drizzle, fresh mango & viola petals",
      category: "brunch",
      price: "€17.5",
      image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=800&q=85",
      tags: ["Brioche", "Sweet"],
      rotationDirection: -1,
      rotationSpeed: 0.23,
    },
  ];

  // GSAP ScrollTrigger for 60-120fps buttery-smooth scroll rotation of star shapes!
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Clockwise rotating star shapes
      gsap.to(".star-card-cw", {
        rotation: 260,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      // Counter-clockwise rotating star shapes
      gsap.to(".star-card-ccw", {
        rotation: -260,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeFilter]);

  const filteredItems = menuItems.filter((item) => {
    if (activeFilter === "all") return true;
    return item.category === activeFilter;
  });

  return (
    <section
      id="star-menu"
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 bg-[#FAD5DF] overflow-hidden"
      aria-label="Bon Bouquet Rotating Star Shapes Menu"
    >
      {/* SVG ClipPath Definition for the 12-Lobed Scalloped Star/Flower Shape */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          <clipPath id="scallopStarClip" clipPathUnits="objectBoundingBox">
            <path d="M 0.910 0.500 C 1.007 0.553, 0.966 0.707, 0.855 0.705 C 0.912 0.800, 0.800 0.912, 0.705 0.855 C 0.707 0.966, 0.553 1.007, 0.500 0.910 C 0.447 1.007, 0.293 0.966, 0.295 0.855 C 0.200 0.912, 0.088 0.800, 0.145 0.705 C 0.034 0.707, -0.007 0.553, 0.090 0.500 C -0.007 0.447, 0.034 0.293, 0.145 0.295 C 0.088 0.200, 0.200 0.088, 0.295 0.145 C 0.293 0.034, 0.447 -0.007, 0.500 0.090 C 0.553 -0.007, 0.707 0.034, 0.705 0.145 C 0.800 0.088, 0.912 0.200, 0.855 0.295 C 0.966 0.293, 1.007 0.447, 0.910 0.500 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Atmospheric Wavy Background Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-white/30 rounded-full blur-[70px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00966C]/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-8">
        {/* CENTER PROMINENT SCALLOPED FLOWER BADGE: "MENU" (Direct from Image 2!) */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="relative inline-flex items-center justify-center w-52 h-52 sm:w-64 sm:h-64 mb-6">
            {/* Scalloped Pink Flower Silhouette Backdrop */}
            <div
              className="absolute inset-0 bg-[#F4A7BC] shadow-xl transition-transform duration-700 ease-out animate-spin-slower"
              style={{ clipPath: "url(#scallopStarClip)" }}
            />
            <div
              className="absolute inset-3 bg-[#FCE3EB] shadow-inner"
              style={{ clipPath: "url(#scallopStarClip)" }}
            />

            {/* Inner Content */}
            <div className="relative z-10 flex flex-col items-center justify-center p-4">
              {/* Flower Icon */}
              <svg width="32" height="32" viewBox="0 0 100 100" fill="currentColor" className="text-[#F13D70] mb-1">
                <circle cx="50" cy="50" r="16" fill="#004F3C" />
                <circle cx="50" cy="22" r="14" fill="#F13D70" />
                <circle cx="78" cy="50" r="14" fill="#F13D70" />
                <circle cx="50" cy="78" r="14" fill="#F13D70" />
                <circle cx="22" cy="50" r="14" fill="#F13D70" />
              </svg>

              <h2 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-white drop-shadow-sm uppercase">
                MENU
              </h2>
              <div className="w-20 h-1 bg-white rounded-full mt-1 mb-1" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#004F3C]">
                PARIS &bull; BALI
              </span>
            </div>
          </div>

          <p className="font-sans text-sm sm:text-base font-semibold text-[#004F3C]/80 max-w-xl mx-auto mb-8">
            Every dish is framed in our signature scalloped cookie-cutter stars. <br className="hidden sm:inline" />
            <span className="text-[#F13D70] font-bold">Watch them rotate playfully as you scroll down!</span>
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
            {[
              { id: "all", label: "All 12 Delights ✨" },
              { id: "brunch", label: "Brunch & Waffles 🥞" },
              { id: "cakes", label: "Haute Cakes & Tarts 🍰" },
              { id: "drinks", label: "Lattes & Boba 🧋" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold tracking-wide transition-all shadow-sm cursor-pointer ${
                  activeFilter === tab.id
                    ? "bg-[#004F3C] text-white shadow-md scale-105"
                    : "bg-white/90 text-[#004F3C] hover:bg-white hover:text-[#F13D70]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 12 SCALLOPED STAR SHAPE DISHES GRID (DIRECT FROM IMAGE 2!) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-10 lg:gap-12">
          {filteredItems.map((item) => {
            const isCw = item.rotationDirection === 1;
            const isHovered = hoveredItemId === item.id;
            const isAdded = tastingBoxIds.includes(item.id);

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredItemId(item.id)}
                onMouseLeave={() => setHoveredItemId(null)}
                className="group relative flex flex-col items-center justify-center"
              >
                {/* ROTATING SCALLOPED STAR SHAPE CONTAINER (GSAP Scroll-Driven Animation!) */}
                <div
                  className={`relative w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 transition-transform duration-300 ease-out cursor-pointer active:scale-95 will-change-transform ${
                    isCw ? "star-card-cw" : "star-card-ccw"
                  } ${isHovered ? "scale-105" : "scale-100"}`}
                  onClick={() => {
                    // Match CakeProduct format if user clicks
                    const dummyProduct: CakeProduct = {
                      id: item.id,
                      name: item.name,
                      tagline: item.subtitle,
                      description: item.subtitle,
                      story: "Handcrafted in our Paris atelier with organic ingredients.",
                      flavorNotes: item.tags,
                      category: item.category === "cakes" ? "signature" : "fruity",
                      priceSample: item.price,
                      servings: "1-2 Guests",
                      image: item.image,
                      accentColor: "#F13D70",
                      badge: item.tags[0] || "Special",
                      ingredients: ["French butter", "Organic fruit", "Tahitian vanilla"],
                      dimensions: "18cm Ø",
                      pairsWith: "Cold brew jasmine tea or iced latte",
                    };
                    onSelectCake?.(dummyProduct);
                  }}
                >
                  {/* Outer Scalloped White Border Frame */}
                  <div
                    className="absolute inset-0 bg-white shadow-xl transition-all"
                    style={{ clipPath: "url(#scallopStarClip)" }}
                  />

                  {/* Scalloped Inner Photo Wrapper */}
                  <div
                    className="absolute inset-2 sm:inset-3 overflow-hidden bg-[#FAD5DF]"
                    style={{ clipPath: "url(#scallopStarClip)" }}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="300px"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Subtle warm gloss on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Floating Price Tag inside badge */}
                  <div className="absolute top-2 right-2 z-20 bg-white/95 backdrop-blur-sm rounded-full px-2.5 py-1 text-xs font-black text-[#004F3C] shadow-md border border-[#00966C]/20">
                    {item.price}
                  </div>
                </div>

                {/* DISH DETAILS CARD UNDER THE STAR (Always readable even while star rotates!) */}
                <div className="mt-4 text-center max-w-[240px] flex flex-col items-center">
                  <h3 className="font-display text-base sm:text-lg font-black text-[#004F3C] leading-snug group-hover:text-[#F13D70] transition-colors">
                    {item.name}
                  </h3>
                  <p className="font-sans text-[11px] sm:text-xs text-[#2C4A3E]/80 line-clamp-2 mt-1 mb-2">
                    {item.subtitle}
                  </p>

                  {/* Action Pill: Add to Flight / Select */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const cakeProduct: CakeProduct = {
                        id: item.id,
                        name: item.name,
                        tagline: item.subtitle,
                        description: item.subtitle,
                        story: "Handcrafted in our Paris atelier.",
                        flavorNotes: item.tags,
                        category: item.category === "cakes" ? "signature" : "fruity",
                        priceSample: item.price,
                        servings: "1-2 Guests",
                        image: item.image,
                        accentColor: "#F13D70",
                        badge: item.tags[0] || "Special",
                        ingredients: ["Organic French ingredients"],
                        dimensions: "18cm Ø",
                        pairsWith: "Artisanal latte or tea",
                      };
                      onAddToTastingBox?.(cakeProduct);
                    }}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-extrabold tracking-wide transition-all shadow-sm cursor-pointer ${
                      isAdded
                        ? "bg-[#00966C] text-white"
                        : "bg-white text-[#004F3C] hover:bg-[#F13D70] hover:text-white border border-[#004F3C]/15"
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>In Flight</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add to Flight</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
