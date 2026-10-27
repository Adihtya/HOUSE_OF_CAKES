"use client";

import { useState } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import { Heart, Send, Sparkles } from "lucide-react";

export function JollyFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#F13D70", "#00966C", "#FFD84D"],
    });
    setSubscribed(true);
  };

  return (
    <footer className="relative w-full bg-[#004F3C] text-white pt-20 pb-12 overflow-hidden select-none">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-[#00966C]/40 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#F13D70]/20 rounded-full blur-[90px]" />
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 sm:px-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/15">
          {/* Col 1: Brand & Rotating Badge */}
          <div className="md:col-span-5 flex flex-col items-start">
            {/* Rotating Circular Stamp */}
            <div className="relative w-20 h-20 rounded-full bg-[#FAD5DF] border-4 border-white shadow-xl flex items-center justify-center mb-6">
              <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                  <path
                    id="footerCirclePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text className="text-[9.5px] font-bold tracking-[0.22em] fill-[#004F3C] uppercase">
                    <textPath href="#footerCirclePath" startOffset="0%">
                      HOUSE OF CAKES • CAFÉ & BRUNCH •
                    </textPath>
                  </text>
                </svg>
              </div>
              <span className="font-display font-black text-xl text-[#00966C]">HC</span>
            </div>

            <h3 className="font-display text-3xl font-black mb-3">
              House Of Cakes Maison
            </h3>
            <p className="font-sans text-sm text-white/80 max-w-sm leading-relaxed mb-6">
              Bali vibes meeting Parisian patisserie elegance. From ultra-fluffy soufflé pancakes to bespoke grand celebration monoliths.
            </p>

            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#00966C] text-xs font-bold text-white">
                Paris 9ème
              </span>
              <span className="px-3 py-1 rounded-full bg-[#F13D70] text-xs font-bold text-white">
                London Mayfair
              </span>
              <span className="px-3 py-1 rounded-full bg-[#FFD84D] text-xs font-bold text-[#004F3C]">
                New York SoHo
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 flex flex-col gap-2.5 text-sm font-semibold">
            <span className="text-xs uppercase tracking-widest text-[#7DD7BE] font-black mb-2">
              Explore
            </span>
            <Link href="#star-menu" className="hover:text-[#FFD84D] transition-colors">
              Rotating Star Menu 🥞
            </Link>
            <Link href="#concept" className="hover:text-[#FFD84D] transition-colors">
              The Brunch Concept ✨
            </Link>
            <Link href="#tasting-flight" className="hover:text-[#FFD84D] transition-colors">
              Curate Tasting Flight 🧋
            </Link>
            <Link href="#salons" className="hover:text-[#FFD84D] transition-colors">
              Salons &amp; Terraces 📍
            </Link>
            <Link href="#celebration-inquiry" className="hover:text-[#FFD84D] transition-colors">
              Bespoke Cakes 🎂
            </Link>
          </div>

          {/* Col 3: Sweet Newsletter */}
          <div className="md:col-span-4 flex flex-col">
            <span className="text-xs uppercase tracking-widest text-[#7DD7BE] font-black mb-2">
              Sweet Love Letters 💌
            </span>
            <p className="text-xs text-white/80 mb-4">
              Get invitations to private weekend tastings, secret off-menu soufflé drops, and seasonal recipe notes.
            </p>

            {subscribed ? (
              <div className="p-4 rounded-2xl bg-[#00966C] text-white text-xs font-bold">
                🎉 Merci! You are on our VIP Sweet List!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email..."
                  className="px-4 py-3 rounded-full bg-white text-sm text-[#004F3C] placeholder:text-[#004F3C]/50 flex-grow focus:outline-none focus:ring-2 focus:ring-[#7DD7BE]"
                />
                <button
                  type="submit"
                  className="w-11 h-11 rounded-full bg-[#F13D70] hover:bg-[#D91A5B] text-white flex items-center justify-center shrink-0 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* GIANT BOUNCY WORDMARK */}
        <div className="py-12 sm:py-16 text-center overflow-hidden">
          <span className="font-display text-5xl sm:text-7xl md:text-9xl lg:text-[11rem] font-black tracking-tight text-white/10 uppercase select-none hover:text-white/20 transition-colors duration-500 whitespace-nowrap block">
            HOUSE OF CAKES
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4 text-xs text-white/60 font-medium">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} HOUSE OF CAKES MAISON &bull; ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-2 text-white/80 font-bold">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#F13D70] fill-current" />
            <span>in Paris &bull; Everyday Brunch Joy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
