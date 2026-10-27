"use client";

import Image from "next/image";

export function ForgeMakingOf() {
  const steps = [
    {
      num: "01",
      title: "Raw Grand Cru Tempering",
      subtitle: "Valrhona Guanaja 70% & Single Origins",
      desc: "Precise thermal calibration ensures a glass-like snap and rich, glossy sheen on all foundational chocolate structures.",
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=85",
    },
    {
      num: "02",
      title: "Structural Tier Architecture",
      subtitle: "Engineered Genoese & Dacquoise",
      desc: "Internally reinforced food-grade supports allow dramatic multi-tier heights while preserving an airy, cloud-like crumb.",
      image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=85",
    },
    {
      num: "03",
      title: "Cold Botanical Maceration",
      subtitle: "Tahitian Vanilla & Wild Berries",
      desc: "Rare floral blossoms and alpine fruit reductions simmer slowly at low temperatures to retain their natural vibrance and perfume.",
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=800&q=85",
    },
    {
      num: "04",
      title: "Cocoa Velvet Airbrushing",
      subtitle: "Micro-Crystal Texturing",
      desc: "A warm mist of tempered cocoa butter and white chocolate creates an exquisite matte velvet exterior across each tier.",
      image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=800&q=85",
    },
    {
      num: "05",
      title: "24-Karat Edible Gilding",
      subtitle: "Hand-Applied Gold & Sugar Florals",
      desc: "Individual flakes of Florentine 24k gold leaf and botanically accurate sugar petals are placed by master confectioners using micro-tweezers.",
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=85",
    },
    {
      num: "06",
      title: "White-Glove Installation",
      subtitle: "Climate-Controlled Concierge",
      desc: "Direct transport in customized thermal suspensions, followed by on-site final assembly and unveiling at your private venue.",
      image: "https://images.unsplash.com/photo-1506459225024-1428097a7e18?auto=format&fit=crop&w=800&q=85",
    },
  ];

  return (
    <section
      id="atelier"
      className="relative w-full bg-[#0C0C0C] py-28 sm:py-36 px-6 sm:px-12 lg:px-20 border-t border-white/10"
      aria-label="The Art of Making"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-24">
          <div>
            <span className="block text-[10px] sm:text-xs font-semibold tracking-[0.35em] uppercase text-[#C5A064] mb-3">
              [ Methodology &bull; Precision Craft ]
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-extralight text-[#F2F1ED] leading-[1.08] capitalize">
              The Architecture of Creation
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-light text-[#F2F1ED]/60 max-w-md">
            Six disciplined phases of culinary engineering executed in our Paris, London, and New York ateliers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="group relative border border-white/10 bg-[#141414] hover:border-[#C5A064]/50 transition-all duration-500 overflow-hidden flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0C0C0C]">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                <span className="absolute top-4 left-4 font-mono text-xs tracking-widest text-[#C5A064] bg-black/80 px-2.5 py-1 border border-white/10">
                  STAGE {step.num}
                </span>
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-light text-white mb-1 group-hover:text-[#C5A064] transition-colors">
                    {step.title}
                  </h3>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A064] block mb-3 font-medium">
                    {step.subtitle}
                  </span>
                  <p className="font-sans text-xs sm:text-sm font-light text-[#F2F1ED]/70 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
