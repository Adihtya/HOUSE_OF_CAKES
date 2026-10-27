"use client";

import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";

interface ForgeMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTastingBox: () => void;
  tastingBoxCount: number;
}

export function ForgeMenu({
  isOpen,
  onClose,
  onOpenTastingBox,
  tastingBoxCount,
}: ForgeMenuProps) {
  const menuLinks = [
    { number: "01", label: "The Atelier", href: "#atelier" },
    { number: "02", label: "Signature Builds", href: "#collection" },
    { number: "03", label: "Our Approach", href: "#approach" },
    { number: "04", label: "The Architecture", href: "#pillars" },
    { number: "05", label: "Tasting Flight", action: "tasting" },
    { number: "06", label: "Private Commission", href: "#commission" },
    { number: "07", label: "Salon Hours", href: "#salons" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.45, ease: [0.43, 0.195, 0.02, 1] }}
          className="fixed inset-0 z-50 bg-[#0C0C0C]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-12 lg:p-20 overflow-y-auto"
        >
          {/* Header Bar inside Menu */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#F2F1ED]/50 font-semibold">
              Maison Index &bull; Paris &bull; London &bull; New York
            </span>
            <button
              onClick={onClose}
              className="text-xs uppercase tracking-[0.25em] text-[#C5A064] hover:text-white transition-colors cursor-pointer"
            >
              [ Close ]
            </button>
          </div>

          {/* Center Links Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-10 my-auto">
            <nav className="lg:col-span-8 flex flex-col gap-2">
              {menuLinks.map((item, idx) => (
                <div key={idx} className="group overflow-hidden border-b border-white/5 py-3">
                  {item.action === "tasting" ? (
                    <button
                      onClick={() => {
                        onClose();
                        onOpenTastingBox();
                      }}
                      className="flex items-baseline gap-4 sm:gap-6 text-left w-full cursor-pointer"
                    >
                      <span className="text-xs sm:text-sm font-mono tracking-widest text-[#C5A064]">
                        {item.number}
                      </span>
                      <span className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extralight text-[#F2F1ED] group-hover:text-[#C5A064] group-hover:translate-x-3 transition-all duration-300">
                        {item.label}
                      </span>
                      {tastingBoxCount > 0 && (
                        <span className="ml-2 text-xs px-2 py-0.5 rounded-full border border-[#C5A064] text-[#C5A064]">
                          {tastingBoxCount} Selected
                        </span>
                      )}
                    </button>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      onClick={onClose}
                      className="flex items-baseline gap-4 sm:gap-6 text-left w-full cursor-pointer"
                    >
                      <span className="text-xs sm:text-sm font-mono tracking-widest text-[#C5A064]">
                        {item.number}
                      </span>
                      <span className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extralight text-[#F2F1ED] group-hover:text-[#C5A064] group-hover:translate-x-3 transition-all duration-300">
                        {item.label}
                      </span>
                      <ArrowUpRight className="w-5 h-5 sm:w-7 sm:h-7 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#C5A064]" />
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Column: Salons & Atelier Details */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-8 pt-4 lg:border-l lg:border-white/10 lg:pl-12">
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#C5A064] font-semibold mb-4">
                  Haute Salons & Tastings
                </p>
                <div className="space-y-4 text-xs font-light text-[#F2F1ED]/70 leading-relaxed">
                  <div>
                    <strong className="block text-white font-medium text-sm">Paris Atelier</strong>
                    <p>8 Place Vendôme, 75001 Paris</p>
                    <p className="text-[11px] text-[#F2F1ED]/50">+33 (0) 1 42 68 55 00</p>
                  </div>
                  <div>
                    <strong className="block text-white font-medium text-sm">London Salon</strong>
                    <p>24 Mount Street, Mayfair, London W1K</p>
                    <p className="text-[11px] text-[#F2F1ED]/50">+44 (0) 20 7499 1800</p>
                  </div>
                  <div>
                    <strong className="block text-white font-medium text-sm">New York Studio</strong>
                    <p>482 Broome Street, SoHo, NY 10013</p>
                    <p className="text-[11px] text-[#F2F1ED]/50">+1 (212) 925-1440</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#F2F1ED]/50 mb-3">
                  Direct Atelier Concierge
                </p>
                <div className="space-y-2">
                  <a
                    href="mailto:commissions@houseofcakes.paris"
                    className="flex items-center gap-2 text-xs text-[#F2F1ED] hover:text-[#C5A064] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#C5A064]" />
                    commissions@houseofcakes.paris
                  </a>
                  <a
                    href="tel:+33142685500"
                    className="flex items-center gap-2 text-xs text-[#F2F1ED] hover:text-[#C5A064] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C5A064]" />
                    Private Tasting Appointments
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bar inside Menu */}
          <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-6 gap-4 text-[10px] tracking-[0.25em] uppercase text-[#F2F1ED]/40">
            <span>&copy; {new Date().getFullYear()} HOUSE OF CAKES LTD. ALL RIGHTS RESERVED.</span>
            <span>FOR THOSE WHO REFUSE ORDINARY</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
