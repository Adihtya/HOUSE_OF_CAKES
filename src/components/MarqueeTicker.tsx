"use client";

interface MarqueeTickerProps {
  items?: string[];
  direction?: "left" | "right";
  bgColor?: string;
  textColor?: string;
  className?: string;
}

const DEFAULT_ITEMS = [
  "HOUSE OF CAKES",
  "WILD ALPINE STRAWBERRIES",
  "72% VALRHONA GUANAJA",
  "SICILIAN BRONTE PISTACHIO",
  "PARIS 9e TASTING ATELIER",
  "SLOW STEAM BAKED",
  "TAHITIAN ORCHID VANILLA",
  "ALPHONSO MANGO ROSETTES",
  "HAUTE PATISSERIE CHOREOGRAPHY",
];

export function MarqueeTicker({
  items = DEFAULT_ITEMS,
  direction = "left",
  bgColor = "#FFD968",
  textColor = "#8F1235",
  className = "",
}: MarqueeTickerProps) {
  const repeatedItems = [...items, ...items, ...items];

  return (
    <div
      className={`relative w-full overflow-hidden py-3.5 select-none ${className}`}
      style={{ backgroundColor: bgColor, color: textColor }}
      role="region"
      aria-label="Atelier Highlights Ticker"
    >
      <div
        className={`flex w-max items-center gap-8 ${
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right"
        } hover:[animation-play-state:paused]`}
      >
        {repeatedItems.map((item, index) => (
          <div key={index} className="flex items-center gap-8 shrink-0">
            <span className="font-serif text-sm sm:text-base font-bold uppercase tracking-widest">
              {item}
            </span>
            <span className="text-xs font-bold opacity-75">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
