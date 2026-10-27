"use client";

import { useState } from "react";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { ATELIER_INFO } from "@/data/content";

export function VisitSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: "2",
    date: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Please provide your name";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Please enter a valid email address";
    if (!formData.date) errors.date = "Please select a preferred tasting date";
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);

    // Simulate demo network delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section
      id="visit"
      className="py-24 sm:py-32 bg-[#FFFBF5] text-[#351C20] relative"
      aria-label="Visit the Atelier and Tasting Salon"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Location, Hours & Story (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#8F1235] mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#8F1235]" />
                <span>Parisian Tasting Salon</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#8F1235] leading-tight mb-6">
                STEP INSIDE <br />
                <span className="italic font-normal text-[#F13D70]">
                  Our Tropical
                </span>{" "}
                ATELIER.
              </h2>
              <p className="text-sm sm:text-base text-[#351C20]/80 leading-relaxed mb-8">
                Nestled in the 9th arrondissement, our salon invites you to
                experience the conveyor firsthand. Smell the roasting cacao, watch
                pastry chefs pipe fresh chantilly, and sip specialty tropical
                teas paired with freshly sliced cakes.
              </p>

              {/* Address Card */}
              <div className="p-6 rounded-3xl bg-[#FFF0F4] border border-[#FFA5BC]/30 mb-6 space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#8F1235] text-[#FFD968] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#8F1235]">
                      Address & Directions
                    </h4>
                    <p className="text-sm text-[#351C20]/85 mt-0.5">
                      {ATELIER_INFO.addressLine1}, {ATELIER_INFO.addressLine2}
                    </p>
                    <p className="text-xs text-[#F13D70] font-medium mt-1">
                      {ATELIER_INFO.metro}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#FFA5BC]/20 flex flex-wrap gap-4 text-xs text-[#351C20]/80">
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#8F1235]" />
                    {ATELIER_INFO.phoneDemo}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#8F1235]" />
                    {ATELIER_INFO.emailDemo}
                  </span>
                </div>
              </div>

              {/* Hours Schedule */}
              <div className="p-6 rounded-3xl bg-[#FFF8EB] border border-[#FFD968]/40">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-[#8F1235]" />
                  <h4 className="font-serif text-lg font-bold text-[#8F1235]">
                    Atelier & Salon Hours
                  </h4>
                </div>
                <div className="space-y-2 text-xs">
                  {ATELIER_INFO.hours.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-1 border-b border-[#351C20]/5 last:border-0"
                    >
                      <span className="font-semibold text-[#351C20]">{h.day}</span>
                      <span className="font-mono text-[#8F1235]">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 text-xs text-[#351C20]/60 italic">
              * Note: Venue details and hours shown are realistic demonstration
              content modeled after iconic Parisian café locations.
            </div>
          </div>

          {/* Right Column: Tasting Reservation Demo Form (6 cols) */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#FFA5BC]/30">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#F13D70]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#F13D70]">
                  Salon Tastings & Events
                </span>
              </div>
              <h3 className="font-serif text-3xl font-bold text-[#8F1235] mb-2">
                Reserve an Atelier Tasting
              </h3>
              <p className="text-xs sm:text-sm text-[#351C20]/75 mb-6">
                Join our pastry sommelier for a private 45-minute flight of
                four seasonal cakes paired with tropical infusions.
              </p>

              {isSubmitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#456B4A]/10 text-[#456B4A] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[#8F1235]">
                    Tasting Request Received!
                  </h4>
                  <p className="text-sm text-[#351C20]/80 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#8F1235]">{formData.name}</strong>.
                    In a production deployment, this submission connects to your booking
                    backend or Resy API. A confirmation will be sent to{" "}
                    <strong>{formData.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        guests: "2",
                        date: "",
                        message: "",
                      });
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-[#8F1235] text-white hover:bg-[#F13D70] transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#351C20]/70 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Camille Laurent"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className={`w-full px-4 py-3 rounded-2xl bg-[#FFFBF5] border text-sm text-[#351C20] focus:outline-none focus:ring-2 focus:ring-[#8F1235] transition-all ${
                        formErrors.name ? "border-red-500" : "border-[#FFA5BC]/40"
                      }`}
                    />
                    {formErrors.name && (
                      <p className="text-xs text-red-600 mt-1">{formErrors.name}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#351C20]/70 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="camille@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-2xl bg-[#FFFBF5] border text-sm text-[#351C20] focus:outline-none focus:ring-2 focus:ring-[#8F1235] transition-all ${
                          formErrors.email ? "border-red-500" : "border-[#FFA5BC]/40"
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-xs text-red-600 mt-1">{formErrors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#351C20]/70 mb-1.5">
                        Tasting Party Size
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) =>
                          setFormData({ ...formData, guests: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-2xl bg-[#FFFBF5] border border-[#FFA5BC]/40 text-sm text-[#351C20] focus:outline-none focus:ring-2 focus:ring-[#8F1235]"
                      >
                        <option value="1">1 Guest (Solo Tasting)</option>
                        <option value="2">2 Guests (Duo Tasting)</option>
                        <option value="4">4 Guests (Salon Flight)</option>
                        <option value="6">6+ Guests (Private Atelier)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#351C20]/70 mb-1.5">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className={`w-full px-4 py-3 rounded-2xl bg-[#FFFBF5] border text-sm text-[#351C20] focus:outline-none focus:ring-2 focus:ring-[#8F1235] transition-all ${
                        formErrors.date ? "border-red-500" : "border-[#FFA5BC]/40"
                      }`}
                    />
                    {formErrors.date && (
                      <p className="text-xs text-red-600 mt-1">{formErrors.date}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#351C20]/70 mb-1.5">
                      Dietary Preferences or Special Requests
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Nut allergies, birthday celebration cake candle..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-2xl bg-[#FFFBF5] border border-[#FFA5BC]/40 text-sm text-[#351C20] focus:outline-none focus:ring-2 focus:ring-[#8F1235]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-[#8F1235] text-white font-bold text-sm hover:bg-[#F13D70] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Sending Tasting Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Request Salon Tasting Reservation</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center gap-1.5 text-[11px] text-[#351C20]/60 justify-center">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Demo mode: Validates and responds without storing data.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
