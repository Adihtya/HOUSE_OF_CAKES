"use client";

import Image from "next/image";
import { MapPin, Clock, Phone, Sparkles, Navigation as NavIcon } from "lucide-react";

export function JollySalons() {
  const salons = [
    {
      city: "Paris 9ème",
      name: "Bon Bouquet Trévise Terrace",
      address: "29 Rue de Trévise, 75009 Paris",
      metro: "Cadet (M7) & Grands Boulevards (M8, M9)",
      hours: "Mon – Sun : 9h00 – 17h30",
      phone: "+33 (0) 1 42 68 55 00",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=700&q=85",
      badge: "Flagship Terrace ☕",
    },
    {
      city: "London Mayfair",
      name: "Mayfair Garden Salon",
      address: "24 Mount Street, Mayfair, London W1K",
      metro: "Green Park & Bond Street",
      hours: "Tue – Sun : 9h30 – 18h00",
      phone: "+44 (0) 20 7499 1800",
      image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=700&q=85",
      badge: "Floral Courtyard 🌸",
    },
    {
      city: "New York SoHo",
      name: "SoHo Loft Patisserie",
      address: "482 Broome Street, SoHo, NY 10013",
      metro: "Spring St (C, E) & Prince St (N, R, W)",
      hours: "Wed – Sun : 8h30 – 17h00",
      phone: "+1 (212) 925-1440",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=700&q=85",
      badge: "Sunny Studio ☀️",
    },
  ];

  return (
    <section
      id="salons"
      className="relative w-full py-24 sm:py-32 bg-[#FAD5DF] overflow-hidden"
      aria-label="Visit Our Parisian Salons and Terraces"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-white/40 rounded-full blur-[90px]" />
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 sm:px-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#004F3C] text-xs font-black tracking-widest uppercase mb-4 shadow-sm border border-[#00966C]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#F13D70]" />
            <span>Café Terraces &amp; Tasting Salons</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-black text-[#004F3C] tracking-tight mb-4">
            Come Say Bonjour!
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#2C4A3E] max-w-xl mx-auto">
            Drop in for morning soufflé stacks, afternoon ceremonial iced matcha, or pick up your pre-ordered celebration cake boxes.
          </p>
        </div>

        {/* 3 Salon Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {salons.map((salon) => (
            <div
              key={salon.city}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl border-4 border-white hover:border-[#00966C] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
            >
              {/* Photo */}
              <div className="relative w-full h-56 sm:h-64 bg-[#FAD5DF] overflow-hidden">
                <Image
                  src={salon.image}
                  alt={salon.name}
                  fill
                  sizes="450px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#004F3C] text-white px-3 py-1 rounded-full text-[11px] font-black uppercase shadow-md">
                  {salon.badge}
                </div>
              </div>

              {/* Details */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-black tracking-widest uppercase text-[#F13D70]">
                      {salon.city}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#00966C] bg-[#E8F8F3] px-2.5 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00966C] animate-pulse" />
                      Open Today
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-black text-[#004F3C] mb-3">
                    {salon.name}
                  </h3>

                  <div className="space-y-2.5 text-xs text-[#2C4A3E]/80">
                    <p className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#F13D70] shrink-0 mt-0.5" />
                      <span>{salon.address}</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <NavIcon className="w-4 h-4 text-[#00966C] shrink-0 mt-0.5" />
                      <span>{salon.metro}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#FFD84D] shrink-0" />
                      <span>{salon.hours}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#004F3C] shrink-0" />
                      <a href={`tel:${salon.phone}`} className="hover:text-[#F13D70] font-semibold">
                        {salon.phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#004F3C]/10 flex items-center justify-between">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(salon.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-black uppercase text-[#00966C] hover:text-[#F13D70] flex items-center gap-1.5 transition-colors"
                  >
                    <span>Get Directions</span>
                    <span>&rarr;</span>
                  </a>
                  <span className="text-[11px] font-bold text-[#2C4A3E]/60">
                    No booking needed
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
