"use client";

import { useState } from "react";
import { CAKE_PRODUCTS } from "@/data/products";
import { CakeProduct } from "@/types/product";
import { SmoothScroll } from "@/components/SmoothScroll";
import { JollyCursor } from "@/components/JollyCursor";
import { JollyBadgeNav } from "@/components/JollyBadgeNav";
import { JollyHero } from "@/components/JollyHero";
import { CakeTrailPlayground } from "@/components/CakeTrailPlayground";
import { Cake3DScrollExplorer } from "@/components/Cake3DScrollExplorer";
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

        {/* SECTION 2: Clean, Editorial Hero Section without Clutter */}
        <JollyHero onOpenTastingBox={handleScrollToTastingBox} />

        {/* SECTION 3: Dedicated Patisserie Playground Canvas (Free to pop & draw cakes without text clutter) */}
        <CakeTrailPlayground
          onSelectCake={(cake) => setSelectedCakeForModal(cake)}
          onAddToTastingBox={handleAddToTastingBox}
        />

        {/* SECTION 4: Scroll-Interactive 3D Cake Anatomy & Layer Dissection Experience */}
        <Cake3DScrollExplorer />

        {/* SECTION 5: Kinetic Moving Typography Slider */}
        <JollyMovingText />

        {/* SECTION 6: Rotating Star Shapes Menu Section */}
        <JollyStarMenu
          onSelectCake={(cake) => setSelectedCakeForModal(cake)}
          onAddToTastingBox={handleAddToTastingBox}
          tastingBoxIds={tastingCakes.map((c) => c.id)}
        />

        {/* SECTION 7: "Brunch & Breakfast" Bali Vibes in Paris */}
        <JollyBrunchSection />

        {/* SECTION 8: Curate Your Sweet Tasting Flight Box with Confetti Celebration */}
        <JollyTastingFlight
          cakes={CAKE_PRODUCTS}
          selectedCakes={tastingCakes}
          onAddCake={handleAddToTastingBox}
          onRemoveCake={handleRemoveFromTastingBox}
          onClearBox={handleClearTastingBox}
        />

        {/* SECTION 9: Parisian Cafe Terraces & Salons */}
        <JollySalons />

        {/* SECTION 10: Custom Celebration Cake Commissions */}
        <JollyCelebrationInquiry />

        {/* SECTION 11: Monumental Wordmark Footer & Rotating Stamp */}
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
