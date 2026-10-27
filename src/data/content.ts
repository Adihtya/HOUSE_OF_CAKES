import { FlavorStory, MakingStep, GalleryPhoto } from "@/types/product";

export const FLAVOR_STORIES: FlavorStory[] = [
  {
    id: "strawberry-vanilla",
    pairTitle: "Wild Strawberry & Tahitian Vanilla",
    subtitle: "Sun-drenched field berries meet warm aromatic orchid pods",
    description:
      "We source micro-crop wild mountain strawberries harvested at peak morning ripeness. Paired with slow-infused Tahitian vanilla cream, the sweetness is pure, floral, and suspended in time.",
    accentBg: "#FFF0F4",
    textColor: "#8F1235",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=1000&q=80",
    tastingNotes: ["Floral Sweetness", "Ruby Acidity", "Buttery Warmth"],
    botanicalOrigin: "Hautes-Alpes & Tahiti",
  },
  {
    id: "mango-passionfruit",
    pairTitle: "Alphonso Mango & Wild Passion Fruit",
    subtitle: "An electric splash of equatorial warmth and vibrant acidity",
    description:
      "Golden saffron-hued Alphonso mangoes celebrated for their honeyed richness, awakened by the unapologetic sharpness of purple Brazilian passion fruit pulp.",
    accentBg: "#FFF8EB",
    textColor: "#FF7448",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=1000&q=80",
    tastingNotes: ["Tropical Sun", "Citrus Spark", "Honeyed Velvet"],
    botanicalOrigin: "Ratnagiri & Bahia",
  },
  {
    id: "pistachio-mascarpone",
    pairTitle: "Sicilian Pistachio & Sweet Mascarpone",
    subtitle: "Emerald volcanic soil nuttiness wrapped in silky Italian cream",
    description:
      "Grown in the volcanic foothills of Mount Etna, Bronte pistachios are harvested every two years for unparalleled flavor density. Stone-ground and folded into sweet mascarpone.",
    accentBg: "#F0F6F1",
    textColor: "#456B4A",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80",
    tastingNotes: ["Toasted Earth", "Velvet Silk", "Brioche Crumble"],
    botanicalOrigin: "Bronte, Sicily",
  },
  {
    id: "dark-cacao-cherry",
    pairTitle: "72% Dark Cacao & Morello Cherry",
    subtitle: "Brooding single-estate cocoa kissed by tart orchard stonefruit",
    description:
      "Deep cocoa notes carrying natural wood smoke and red berry undertones, accented by jewel-toned sour Morello cherries stewed in pure cane syrup.",
    accentBg: "#F9EEF0",
    textColor: "#351C20",
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=1000&q=80",
    tastingNotes: ["Deep Bitter Smoke", "Tart Berry Pop", "Dark Molasses"],
    botanicalOrigin: "Sambirano Valley & Black Forest",
  },
];

export const MAKING_STEPS: MakingStep[] = [
  {
    stepNumber: "01",
    title: "Selecting Ingredients",
    subtitle: "Direct-trade botanicals & uncompromised terroir",
    description:
      "Every single egg, pod of vanilla, and block of raw Normandy butter is selected by hand for peak aromatic vitality.",
    detail: "Harvested at peak sunrise; 100% fair-exchange relationships.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
  },
  {
    stepNumber: "02",
    title: "Preparing the Batter",
    subtitle: "Slow-whipped French meringue & tender crumb",
    description:
      "Sifted almond flours and whipped organic egg whites are folded with feather-light rhythm to capture millions of microscopic air pockets.",
    detail: "Whipped precisely to soft-gloss peaks for supreme cloud softness.",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=80",
  },
  {
    stepNumber: "03",
    title: "Slow Steam Baking",
    subtitle: "Thermal control for maximum moisture & lift",
    description:
      "Our Italian stone ovens circulate humidified steam at exact temperatures, avoiding harsh dry heat to ensure a tender, melt-in-the-mouth texture.",
    detail: "165°C gentle convection baking with 12% relative ambient humidity.",
    image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=900&q=80",
  },
  {
    stepNumber: "04",
    title: "Layering & Filling",
    subtitle: "Velvet curds, compotes & whipped namelaka",
    description:
      "Each sponge tier is infused with botanical syrups, then layered with vibrant fruit curds and slow-set chocolate ganache.",
    detail: "Chilled between each layer to build structural harmony and crisp slice definition.",
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=900&q=80",
  },
  {
    stepNumber: "05",
    title: "Sculpting & Decorating",
    subtitle: "Hand-piped ganache, gold leaf & organic petals",
    description:
      "Our pastry artists treat each surface as an atelier canvas—piping fluid frosting waves and dressing cakes with edible flora.",
    detail: "Every petal placed with surgical tweezers; hand-brushed 24k gold shimmer.",
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=900&q=80",
  },
  {
    stepNumber: "06",
    title: "Presenting the Finished Cake",
    subtitle: "Placed on ceramic pedestals for celebration",
    description:
      "Resting in chilled showcase cabinets, each cake enters the rotating conveyor ready to bring joy and wonder to table celebrations.",
    detail: "Preserved at optimal 4°C tasting temperature before grand unveil.",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=80",
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "g1",
    title: "The Atelier Morning Light",
    caption: "Early morning prep at the cake atelier showcase",
    category: "Atmosphere",
    aspect: "wide",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "g2",
    title: "Strawberry Cloud Slice",
    caption: "Layered sponge with mountain berries and chantilly",
    category: "Cake Cut",
    aspect: "tall",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "g3",
    title: "Praline & Dark Ganache",
    caption: "Velvet cocoa mirror glaze catching the midday sun",
    category: "Details",
    aspect: "square",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "g4",
    title: "Wild Summer Harvest",
    caption: "Freshly picked alpine raspberries and red currants",
    category: "Ingredients",
    aspect: "square",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "g5",
    title: "Pistachio Velvet Rosettes",
    caption: "Hand-piped emerald cream dusted with crushed praline",
    category: "Craft",
    aspect: "tall",
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "g6",
    title: "Table Celebration",
    caption: "Coffee, chilled fruit sodas, and sweet memories",
    category: "Atmosphere",
    aspect: "wide",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80",
  },
];

export const ATELIER_INFO = {
  addressLine1: "29 Rue de Trévise",
  addressLine2: "75009 Paris (Demonstration Location)",
  metro: "Metro: Cadet (Line 7) / Grands Boulevards (Lines 8 & 9)",
  phoneDemo: "+33 1 42 68 00 00 (Demo Inquiries)",
  emailDemo: "bonjour@houseofcakes.example",
  hours: [
    { day: "Tuesday – Friday", time: "08:30 – 19:30" },
    { day: "Saturday", time: "09:00 – 20:00" },
    { day: "Sunday (Brunch & Cakes)", time: "09:30 – 18:30" },
    { day: "Monday", time: "Closed for atelier creation & sourcing" },
  ],
  socials: [
    { name: "Instagram", handle: "@houseofcakes.demo", url: "#" },
    { name: "Pinterest", handle: "@houseofcakes_mood", url: "#" },
    { name: "TikTok", handle: "@houseofcakes_live", url: "#" },
  ],
};
