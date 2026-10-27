"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn, Camera } from "lucide-react";
import { GALLERY_PHOTOS } from "@/data/content";
import { GalleryPhoto } from "@/types/product";

export function Gallery() {
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  return (
    <section
      id="gallery"
      className="py-24 sm:py-32 bg-[#FFF4E5] text-[#351C20] relative"
      aria-label="Atelier Journal and Photo Gallery"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#8F1235] mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8F1235]" />
              <span>The Visual Journal</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#8F1235] leading-tight">
              SCENES FROM <br />
              <span className="italic font-normal text-[#F13D70]">
                The Parisian
              </span>{" "}
              ATELIER.
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs uppercase font-mono tracking-wider text-[#351C20]/70">
              Curated Daily Journal
            </span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold bg-[#8F1235] text-white hover:bg-[#F13D70] transition-colors"
            >
              <Camera className="w-3.5 h-3.5" />
              <span>@houseofcakes.demo</span>
            </a>
          </div>
        </div>

        {/* Editorial Masonry/Staggered Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_PHOTOS.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-white bg-[#FFF0F4] ${
                photo.aspect === "wide"
                  ? "sm:col-span-2 h-72 sm:h-80"
                  : photo.aspect === "tall"
                  ? "h-96 sm:h-[420px]"
                  : "h-72 sm:h-80"
              }`}
            >
              <Image
                src={photo.image}
                alt={photo.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#351C20]/70 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Tag / Category Badge */}
              <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-white/90 text-[#8F1235] shadow-xs">
                {photo.category}
              </span>

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight">
                  {photo.title}
                </h3>
                <p className="text-xs text-white/80 mt-1 line-clamp-1">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#351C20]/90 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label={activePhoto.title}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-[#FFFBF5] rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 text-[#351C20] hover:bg-[#8F1235] hover:text-white transition-colors"
                aria-label="Close photo view"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full h-[60vh] bg-black">
                <Image
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="p-6 bg-[#FFFBF5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#F13D70]">
                    {activePhoto.category}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#8F1235] mt-0.5">
                    {activePhoto.title}
                  </h3>
                  <p className="text-sm text-[#351C20]/80 mt-1">
                    {activePhoto.caption}
                  </p>
                </div>

                <div className="text-xs text-[#351C20]/60 italic">
                  Paris Atelier Collection Archive
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
