"use client";

import { useState } from "react";
import { ForgeButton } from "./ForgeButton";
import { Check, Calendar, Users, MapPin } from "lucide-react";

export function ForgeCommission() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    salon: "paris",
    eventType: "wedding",
    date: "",
    guests: "100-250",
    flavorNotes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="commission"
      className="relative w-full bg-[#0C0C0C] py-28 sm:py-36 px-6 sm:px-12 lg:px-20 border-t border-white/10"
      aria-label="Private Commission & Salon Reservations"
    >
      <div className="max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left Column: Editorial Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="block text-[10px] sm:text-xs font-semibold tracking-[0.35em] uppercase text-[#C5A064] mb-3">
                [ Private Atelier Commission ]
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-extralight text-[#F2F1ED] leading-[1.08] capitalize mb-6">
                Initiate Your Commission
              </h2>
              <p className="font-sans text-xs sm:text-sm font-light text-[#F2F1ED]/70 leading-relaxed mb-6">
                Every bespoke centerpiece begins with a private tasting and concept sketch consultation. Due to our rigorous artisanal standards, we accept a strictly limited number of commissions per calendar month.
              </p>
            </div>

            {/* Salons Location Cards */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A064] block font-semibold">
                Private Salons & Consultations
              </span>

              <div className="p-4 border border-white/10 bg-[#141414] rounded-sm space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-lg text-white">Paris Salon Vendôme</h4>
                  <span className="text-[10px] font-mono text-[#C5A064]">France</span>
                </div>
                <p className="text-xs text-[#F2F1ED]/60 font-light">
                  8 Place Vendôme, 75001 Paris &bull; +33 (0) 1 42 68 55 00
                </p>
              </div>

              <div className="p-4 border border-white/10 bg-[#141414] rounded-sm space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-lg text-white">London Salon Mayfair</h4>
                  <span className="text-[10px] font-mono text-[#C5A064]">United Kingdom</span>
                </div>
                <p className="text-xs text-[#F2F1ED]/60 font-light">
                  24 Mount Street, Mayfair, London W1K &bull; +44 (0) 20 7499 1800
                </p>
              </div>

              <div className="p-4 border border-white/10 bg-[#141414] rounded-sm space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-lg text-white">New York SoHo Studio</h4>
                  <span className="text-[10px] font-mono text-[#C5A064]">United States</span>
                </div>
                <p className="text-xs text-[#F2F1ED]/60 font-light">
                  482 Broome Street, SoHo, NY 10013 &bull; +1 (212) 925-1440
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Sleek Luxury Form */}
          <div className="lg:col-span-7 bg-[#141414] border border-white/15 p-8 sm:p-12 lg:p-14 rounded-sm shadow-2xl relative">
            {submitted ? (
              <div className="text-center py-16 space-y-6">
                <div className="w-16 h-16 rounded-full border border-[#C5A064] text-[#C5A064] flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl font-light text-white">
                  Commission Inquiry Received
                </h3>
                <p className="text-xs sm:text-sm font-light text-[#F2F1ED]/70 max-w-md mx-auto leading-relaxed">
                  Thank you, {formData.name || "Client"}. Our Head of Concierge will review our atelier calendar and contact you within 24 hours to schedule your private tasting consultation.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs tracking-[0.25em] uppercase text-[#C5A064] underline underline-offset-4 cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="border-b border-white/10 pb-4">
                  <h3 className="font-serif text-2xl text-white font-light">
                    Private Client Specification
                  </h3>
                  <p className="text-xs text-[#F2F1ED]/50 font-light mt-1">
                    Please provide the initial details of your celebratory event.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.25em] text-[#F2F1ED]/60 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Lady Eleanor Vance"
                      className="w-full bg-[#0C0C0C] border-b border-white/20 focus:border-[#C5A064] py-2.5 px-3 text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.25em] text-[#F2F1ED]/60 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="eleanor@domain.com"
                      className="w-full bg-[#0C0C0C] border-b border-white/20 focus:border-[#C5A064] py-2.5 px-3 text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.25em] text-[#F2F1ED]/60 mb-2">
                      Salon Preference
                    </label>
                    <select
                      value={formData.salon}
                      onChange={(e) =>
                        setFormData({ ...formData, salon: e.target.value })
                      }
                      className="w-full bg-[#0C0C0C] border-b border-white/20 focus:border-[#C5A064] py-2.5 px-3 text-xs text-white focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="paris">Paris Vendôme</option>
                      <option value="london">London Mayfair</option>
                      <option value="nyc">New York SoHo</option>
                      <option value="remote">Private Estate Concierge</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.25em] text-[#F2F1ED]/60 mb-2">
                      Event Type
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) =>
                        setFormData({ ...formData, eventType: e.target.value })
                      }
                      className="w-full bg-[#0C0C0C] border-b border-white/20 focus:border-[#C5A064] py-2.5 px-3 text-xs text-white focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="wedding">Architectural Wedding</option>
                      <option value="gala">Private Gala / Banquet</option>
                      <option value="birthday">Milestone Celebration</option>
                      <option value="corporate">Haute Maison Launch</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.25em] text-[#F2F1ED]/60 mb-2">
                      Estimated Guests
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) =>
                        setFormData({ ...formData, guests: e.target.value })
                      }
                      className="w-full bg-[#0C0C0C] border-b border-white/20 focus:border-[#C5A064] py-2.5 px-3 text-xs text-white focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="50-100">50 – 100 Guests</option>
                      <option value="100-250">100 – 250 Guests</option>
                      <option value="250-500">250 – 500 Guests</option>
                      <option value="500+">500+ Major Monolith</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.25em] text-[#F2F1ED]/60 mb-2">
                    Event Date or Season
                  </label>
                  <input
                    type="text"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    placeholder="e.g. October 2026, Lake Como"
                    className="w-full bg-[#0C0C0C] border-b border-white/20 focus:border-[#C5A064] py-2.5 px-3 text-sm text-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.25em] text-[#F2F1ED]/60 mb-2">
                    Aesthetic Vision & Flavor Notes
                  </label>
                  <textarea
                    rows={3}
                    value={formData.flavorNotes}
                    onChange={(e) =>
                      setFormData({ ...formData, flavorNotes: e.target.value })
                    }
                    placeholder="Tell us about the floral styling, preferred grand cru chocolates, or architectural tier dimensions..."
                    className="w-full bg-[#0C0C0C] border border-white/10 focus:border-[#C5A064] p-3 text-xs text-white focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-[#F2F1ED]/40">
                    Strict Client Confidentiality Ensured
                  </span>
                  <ForgeButton type="submit" variant="gold">
                    Submit Commission
                  </ForgeButton>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
