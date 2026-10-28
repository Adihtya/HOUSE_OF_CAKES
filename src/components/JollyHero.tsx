"use client";

import { useState, useRef } from "react";
import { Sparkles, ArrowDown, Play, Pause, Volume2, VolumeX, Eye } from "lucide-react";

interface JollyHeroProps {
  onOpenTastingBox?: () => void;
}

export function JollyHero({ onOpenTastingBox }: JollyHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [cinemaMode, setCinemaMode] = useState(false);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section
      className="relative w-full min-h-[94vh] sm:min-h-screen flex flex-col justify-between items-center text-center px-4 sm:px-8 lg:px-12 pt-28 sm:pt-32 pb-12 overflow-hidden select-none"
      aria-label="Jolly Atelier Hero"
    >
      {/* FULL-BLEED VIBRANT VIDEO BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          poster={`${basePath}/cake-video-poster.png`}
          className="absolute inset-0 w-full h-full object-cover scale-100 filter brightness-[1.02] contrast-[1.06]"
        >
          <source src={`${basePath}/cake-video.mp4`} type="video/mp4" />
          <source src={`${basePath}/videos/cake-video.mp4`} type="video/mp4" />
        </video>

        {/* Lighter, translucent atmospheric veil ensuring maximum video visibility */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            cinemaMode
              ? "bg-black/35"
              : "bg-gradient-to-b from-white/30 via-white/10 to-[#FFFDF7]/70"
          }`}
        />

        {/* Soft edge vignette to focus on the center cake craft */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#004F3C]/20 pointer-events-none" />

        {/* Subtle, soft ambient pastel accents along the edges */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#FAD5DF]/35 rounded-full blur-[90px]" />
        <div className="absolute top-1/3 -right-24 w-96 h-96 bg-[#BDFBFF]/30 rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-[#FFED6E]/20 rounded-full blur-[100px]" />
      </div>

      {/* Floating Tropical Hibiscus Stickers (Bon Bouquet Style) */}
      <div className="absolute top-24 left-8 sm:left-16 pointer-events-none hidden lg:block animate-float-flower">
        <svg width="84" height="84" viewBox="0 0 100 100" fill="none" className="text-[#F13D70] drop-shadow-md">
          <path
            d="M50 15 C45 2 30 5 32 20 C20 12 10 24 22 34 C8 38 12 55 26 53 C18 67 32 75 40 63 C45 78 60 75 58 60 C70 68 80 56 68 46 C82 42 78 25 64 27 C72 13 58 5 50 15 Z"
            fill="currentColor"
            opacity="0.9"
          />
          <circle cx="50" cy="42" r="6" fill="#FFD84D" />
          <path d="M50 42 Q52 30 56 22" stroke="#FFD84D" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>

      <div className="absolute bottom-28 right-8 sm:right-20 pointer-events-none hidden lg:block animate-float-flower" style={{ animationDelay: "1.5s" }}>
        <svg width="72" height="72" viewBox="0 0 100 100" fill="none" className="text-[#00966C] drop-shadow-md">
          <path
            d="M50 15 C45 2 30 5 32 20 C20 12 10 24 22 34 C8 38 12 55 26 53 C18 67 32 75 40 63 C45 78 60 75 58 60 C70 68 80 56 68 46 C82 42 78 25 64 27 C72 13 58 5 50 15 Z"
            fill="currentColor"
            opacity="0.85"
          />
          <circle cx="50" cy="42" r="5" fill="#FFEAA7" />
        </svg>
      </div>

      {/* Top Eyebrow & Interactive Video Controls Bar */}
      <div className="relative z-20 flex flex-wrap items-center justify-center gap-3 mt-2 sm:mt-4">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border-2 border-[#00966C]/25 shadow-md backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#F13D70] animate-ping" />
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#004F3C]">
            🌸 Bonjour! Paris 9ème &bull; Everyday Brunch Joy
          </span>
        </div>

        {/* Video Cinema Controls Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-[#00966C]/30 shadow-md backdrop-blur-md pointer-events-auto">
          <span className="w-2 h-2 rounded-full bg-[#00966C] animate-pulse" />
          <span className="text-[10px] font-black text-[#004F3C] uppercase tracking-wider">
            Atelier Video
          </span>
          <div className="h-3.5 w-px bg-neutral-300" />
          <button
            type="button"
            onClick={togglePlay}
            className="p-1 rounded-full hover:bg-[#FAD5DF] text-[#004F3C] transition-colors cursor-pointer"
            title={isPlaying ? "Pause video" : "Play video"}
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <button
            type="button"
            onClick={toggleMute}
            className="p-1 rounded-full hover:bg-[#FAD5DF] text-[#004F3C] transition-colors cursor-pointer"
            title={isMuted ? "Unmute audio" : "Mute audio"}
            aria-label={isMuted ? "Unmute audio" : "Mute audio"}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
          <div className="h-3.5 w-px bg-neutral-300" />
          <button
            type="button"
            onClick={() => setCinemaMode(!cinemaMode)}
            className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-colors cursor-pointer flex items-center gap-1 ${
              cinemaMode
                ? "bg-[#004F3C] text-white"
                : "hover:bg-[#FAD5DF] text-[#004F3C]"
            }`}
            title="Toggle Cinema Backdrop"
          >
            <Eye className="w-3 h-3" />
            <span>{cinemaMode ? "Normal" : "Clear View"}</span>
          </button>
        </div>
      </div>

      {/* Center Main Editorial Heading & Subtitle in Luxury Glass Pavilion */}
      <div
        className={`relative z-20 max-w-4xl mx-auto flex flex-col items-center my-auto transition-all duration-500 rounded-[2.5rem] p-6 sm:p-10 border shadow-2xl backdrop-blur-md ${
          cinemaMode
            ? "bg-black/55 text-white border-white/25"
            : "bg-white/75 text-[#1C2421] border-white/80"
        }`}
      >
        <h1
          className={`font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight leading-[1.08] mb-6 text-balance drop-shadow-sm ${
            cinemaMode ? "text-white" : "text-[#004F3C]"
          }`}
        >
          Brunch, Cakes & <br />
          <span className="font-serif italic font-normal text-[#F13D70] underline decoration-[#FFD84D] decoration-wavy decoration-2">
            Everyday Joy
          </span>
        </h1>

        <p
          className={`font-sans text-base sm:text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-8 text-balance ${
            cinemaMode ? "text-neutral-200" : "text-[#1B382E]"
          }`}
        >
          Fluffy soufflé stacks, iced ceremonial matcha clouds, and artisanal celebration cakes crafted with French butter, wild berries, and tropical sunshine.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
          <a
            href="#star-menu"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#00966C] hover:bg-[#004F3C] text-white font-extrabold text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <span>Explore Star Menu</span>
            <span className="text-xl group-hover:rotate-12 transition-transform">🥞</span>
          </a>

          <button
            type="button"
            onClick={onOpenTastingBox}
            className={`group inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm sm:text-base shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer ${
              cinemaMode
                ? "bg-white/20 hover:bg-white/30 text-white border-2 border-white/40"
                : "bg-white hover:bg-[#FDE8EF] text-[#004F3C] border-2 border-[#00966C]/30 hover:border-[#F13D70]"
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#F13D70] group-hover:rotate-45 transition-transform" />
            <span>Curate Tasting Flight</span>
          </button>
        </div>

        {/* Jump link to interactive playground below */}
        <div
          className={`mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold border shadow-sm transition-colors ${
            cinemaMode
              ? "bg-white/20 text-white border-white/30"
              : "bg-white/90 text-[#004F3C] border-[#00966C]/20 hover:bg-white"
          }`}
        >
          <span>✨</span>
          <span>Scroll down for the Patisserie Canvas & 3D Cake Anatomy</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#F13D70] animate-bounce" />
        </div>
      </div>

      {/* Bottom Features Strip */}
      <div
        className={`relative z-20 w-full max-w-[1400px] flex flex-col sm:flex-row items-center justify-between gap-4 border-t-2 pt-5 text-xs font-bold tracking-wider uppercase backdrop-blur-sm px-4 py-2 rounded-2xl ${
          cinemaMode
            ? "border-white/20 text-white/90 bg-black/30"
            : "border-[#004F3C]/15 text-[#004F3C]/90 bg-white/60"
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00966C]" />
          <span>Fresh Soufflé Batter & Pastries Daily</span>
        </div>

        <div className="flex items-center gap-2">
          <ArrowDown className="w-4 h-4 text-[#F13D70] animate-bounce" />
          <span>Scroll down for the Patisserie Canvas</span>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <span>Bali Tropical Warmth &bull; Parisian Craft</span>
        </div>
      </div>
    </section>
  );
}
