export type CakeCategory = "all" | "signature" | "chocolate" | "fruity" | "creamy";

export interface CakeProduct {
  id: string;
  name: string;
  tagline: string;
  description: string;
  story: string;
  flavorNotes: string[];
  category: CakeCategory;
  priceSample: string;
  servings: string;
  image: string;
  accentColor: string;
  badge?: string;
  ingredients: string[];
  dimensions?: string;
  pairsWith?: string;
}

export interface FlavorStory {
  id: string;
  pairTitle: string;
  subtitle: string;
  description: string;
  accentBg: string;
  textColor: string;
  image: string;
  tastingNotes: string[];
  botanicalOrigin: string;
}

export interface MakingStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  detail: string;
  image: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  caption: string;
  category: string;
  aspect: "square" | "tall" | "wide";
  image: string;
}
