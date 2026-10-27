"use client";

import { useState } from "react";
import { CAKE_PRODUCTS } from "@/data/products";
import { CakeProduct } from "@/types/product";
import { SmoothScroll } from "@/components/SmoothScroll";
import { JollyCursor } from "@/components/JollyCursor";
import { JollyBadgeNav } from "@/components/JollyBadgeNav";
import { JollyHero } from "@/components/JollyHero";
import { JollyMovingText } from "@/components/JollyMovingText";
import { JollyStarMenu } from "@/components/JollyStarMenu";
import { JollyBrunchSection } from "@/components/JollyBrunchSection";
import { JollyTastingFlight } from "@/components/JollyTastingFlight";
import { JollySalons } from "@/components/JollySalons";
import { JollyCelebrationInquiry } from "@/components/JollyCelebrationInquiry";
import { JollyFooter } from "@/components/JollyFooter";
import { ProductModal } from "@/components/ProductModal";

export default function HomePage() {
  const [selectedCakeForModal, setSelectedCakeForModal] =
    useState<CakeProduct | null>(null);

  // Curated Tasting Flight Confection Box
  const [tastingCakes, setTastingCakes] = useState<CakeProduct[]>([
    CAKE_PRODUCTS[0], // Strawberry Cloud
    CAKE_PRODUCTS[1], // The Midnight Chocolate
    CAKE_PRODUCTS[2], // Pistachio Velvet
  ]);

  const handleAddToTastingBox = (cake: CakeProduct) => {
    if (tastingCakes.length >= 6) return;
    if (tastingCakes.some((c) => c.id === cake.id)) return;
    setTastingCakes((prev) => [...prev, cake]);
  };

  const handleRemoveFromTastingBox = (cakeId: string, index?: number) => {
    setTastingCakes((prev) => {
      if (typeof index === "number") {
        return prev.filter((_, i) => i !== index);
      }
      return prev.filter((c) => c.id !== cakeId);
    });
  };

  const handleClearTastingBox = () => {
    setTastingCakes([]);
  };

  const handleScrollToTastingBox = () => {
    const el = document.getElementById("tasting-flight");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <SmoothScroll>
      {/* Jolly Pastel Cursor Follower */}
      <JollyCursor />

      {/* Main Container with Bon Bouquet Jolly Warm Cream Canvas */}
      <main className="min-h-screen bg-[#FFFDF7] text-[#1C2421] overflow-x-hidden relative selection:bg-[#FAD5DF] selection:text-[#004F3C]">
        {/* SECTION 1: Circular Badge Top Navigation (Bon Bouquet Style) */}
        <JollyBadgeNav
          tastingBoxCount={tastingCakes.length}
          onOpenTastingBox={handleScrollToTastingBox}
        />

        {/* SECTION 2: Hero with Interactive Cursor Image Trail (User's Favorite Feature Kept Intact!) */}
        <JollyHero
          cakes={CAKE_PRODUCTS}
          onSelectCake={(cake) => setSelectedCakeForModal(cake)}
          onOpenTastingBox={handleScrollToTastingBox}
        />

        {/* SECTION 3: Animated Moving Front-and-Back Typography (From Image 1) */}
        <JollyMovingText />

        {/* SECTION 4: Rotating Star Shapes Menu Section (From Image 2) */}
        <JollyStarMenu
          onSelectCake={(cake) => setSelectedCakeForModal(cake)}
          onAddToTastingBox={handleAddToTastingBox}
          tastingBoxIds={tastingCakes.map((c) => c.id)}
        />

        {/* SECTION 5: "Brunch & Breakfast" Bali Vibes in Paris (From Image 3) */}
        <JollyBrunchSection />

        {/* SECTION 6: Curate Your Sweet Tasting Flight Box with Confetti Celebration */}
        <JollyTastingFlight
          cakes={CAKE_PRODUCTS}
          selectedCakes={tastingCakes}
          onAddCake={handleAddToTastingBox}
          onRemoveCake={handleRemoveFromTastingBox}
          onClearBox={handleClearTastingBox}
        />

        {/* SECTION 7: Come Say Bonjour! Parisian Cafe Terraces & Salons */}
        <JollySalons />

        {/* SECTION 8: Custom Celebration Cake Commissions */}
        <JollyCelebrationInquiry />

        {/* SECTION 9: Monumental Wordmark Footer & Rotating Stamp */}
        <JollyFooter />

        {/* Item Specification Modal */}
        <ProductModal
          cake={selectedCakeForModal}
          onClose={() => setSelectedCakeForModal(null)}
          onAddToBox={handleAddToTastingBox}
          isAddedToBox={
            selectedCakeForModal
              ? tastingCakes.some((c) => c.id === selectedCakeForModal.id)
              : false
          }
        />
      </main>
    </SmoothScroll>
  );
}
