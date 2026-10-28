"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { Sparkles, Send, CheckCircle2 } from "lucide-react";

export function JollyCelebrationInquiry() {
  const [flavor, setFlavor] = useState("Strawberry Chantilly");
  const [size, setSize] = useState("12–16 Guests");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#F13D70", "#00966C", "#FFD84D", "#7DD7BE"],
    });
    setSubmitted(true);
  };

  return (
    <section
      id="celebration-inquiry"
      className="relative w-full py-24 sm:py-32 bg-[#FFFDF7] overflow-hidden"
      aria-label="Custom Celebration Cake Inquiry"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12">
        <div className="bg-[#FAD5DF] rounded-3xl p-8 sm:p-14 shadow-2xl border-4 border-white text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#004F3C] text-xs font-black tracking-widest uppercase mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#F13D70]" />
            <span>Bespoke Celebration Commissions</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl font-black text-[#004F3C] mb-4">
            Dreaming Of A Custom Celebration Cake? 🎂
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#2C4A3E] max-w-lg mx-auto mb-8">
            Tell us about your wedding, birthday, or private salon gathering. Our master pâtissiers craft one-of-a-kind edible centerpieces.
          </p>

          {submitted ? (
            <div className="bg-white p-8 rounded-2xl border-2 border-[#00966C] shadow-md flex flex-col items-center animate-in zoom-in-95 duration-300">
              <CheckCircle2 className="w-12 h-12 text-[#00966C] mb-3" />
              <h3 className="font-display font-black text-2xl text-[#004F3C] mb-2">
                Merci Beaucoup! 🎉
              </h3>
              <p className="text-sm text-[#2C4A3E]/80 max-w-md">
                We have received your custom inquiry! Our atelier concierge will contact you within 24 hours with flavor tastings and sketches.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 px-6 py-2 rounded-full bg-[#00966C] text-white font-bold text-xs uppercase"
              >
                Send Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-left max-w-xl mx-auto">
              <div>
                <label className="block text-xs font-black uppercase text-[#004F3C] mb-2">
                  1. Select Favorite Flavor Profile
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Strawberry Chantilly 🍓",
                    "Valrhona 72% Noir 🍫",
                    "Pistachio Raspberry 🌿",
                    "Mango Passion 🥭",
                    "Uji Matcha Cloud 🧋",
                  ].map((f) => (
                    <button
                      type="button"
                      key={f}
                      onClick={() => setFlavor(f)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                        flavor === f
                          ? "bg-[#004F3C] text-white shadow-sm"
                          : "bg-white text-[#004F3C] hover:bg-[#FFF8FA]"
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-black uppercase text-[#004F3C] mb-2">
                  2. Number of Guests
                </label>
                <div className="flex flex-wrap gap-2">
                  {["6–8 Guests", "12–16 Guests", "25–40 Guests", "50+ Grand Monolith"].map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setSize(s)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                        size === s
                          ? "bg-[#F13D70] text-white shadow-sm"
                          : "bg-white text-[#004F3C] hover:bg-[#FFF8FA]"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black uppercase text-[#004F3C] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Amélie Poulain"
                    className="w-full px-4 py-2.5 rounded-xl bg-white text-sm text-[#004F3C] border border-[#004F3C]/20 focus:outline-none focus:ring-2 focus:ring-[#00966C]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase text-[#004F3C] mb-1">
                    Email or Phone
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="amelie@paris.fr"
                    className="w-full px-4 py-2.5 rounded-xl bg-white text-sm text-[#004F3C] border border-[#004F3C]/20 focus:outline-none focus:ring-2 focus:ring-[#00966C]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black uppercase text-[#004F3C] mb-1">
                  Event Date & Special Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Date of celebration, dietary preferences, or specific decorative floral themes..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white text-sm text-[#004F3C] border border-[#004F3C]/20 focus:outline-none focus:ring-2 focus:ring-[#00966C]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#00966C] hover:bg-[#004F3C] text-white font-black text-sm tracking-widest uppercase shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Custom Cake Commission</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
