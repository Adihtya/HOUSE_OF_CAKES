"use client";

import Link from "next/link";
import React from "react";

interface ForgeButtonProps {
  children: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "gold";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  ariaLabel?: string;
}

export function ForgeButton({
  children,
  href,
  onClick,
  className = "",
  variant = "primary",
  type = "button",
  disabled = false,
  ariaLabel,
}: ForgeButtonProps) {
  // Split string into characters for staggered roll-up
  const chars = children.split("");

  const getVariantStyles = () => {
    switch (variant) {
      case "gold":
        return "border-[#C5A064]/40 hover:border-[#C5A064] text-[#F2F1ED] hover:bg-[#161616]";
      case "secondary":
        return "border-white/10 hover:border-white/30 text-[#F2F1ED]/80 hover:text-white";
      case "primary":
      default:
        return "border-white/20 hover:border-[#C5A064] text-[#F2F1ED] hover:bg-[#141414]";
    }
  };

  const content = (
    <>
      <span className="block overflow-hidden relative z-10 font-sans text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase">
        {chars.map((char, index) => (
          <span
            key={index}
            className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.43,0.195,0.02,1)]"
            style={{
              transitionDelay: `${index * 0.02}s`,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>

      {/* Subtle hairline edge highlight */}
      <i
        aria-hidden="true"
        className="absolute inset-0 border border-white/5 pointer-events-none group-hover:border-[#C5A064]/30 transition-colors duration-500"
      />
    </>
  );

  const baseClasses = `forge-btn group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 bg-[#0C0C0C]/80 backdrop-blur-md transition-all duration-500 cursor-pointer select-none ${getVariantStyles()} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={baseClasses}
        aria-label={ariaLabel || children}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      aria-label={ariaLabel || children}
    >
      {content}
    </button>
  );
}
