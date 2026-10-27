"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function JollyCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest("button") ||
          target.closest("a") ||
          target.closest("[role='button']") ||
          target.tagName === "INPUT" ||
          target.tagName === "SELECT" ||
          target.tagName === "TEXTAREA")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden hidden md:block">
      {/* Outer Jolly Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border-2 pointer-events-none"
        animate={{
          x: mousePosition.x - (isHovered ? 26 : 16),
          y: mousePosition.y - (isHovered ? 26 : 16),
          width: isHovered ? 52 : 32,
          height: isHovered ? 52 : 32,
          backgroundColor: isHovered
            ? "rgba(241, 61, 112, 0.15)"
            : "rgba(0, 150, 108, 0.08)",
          borderColor: isHovered
            ? "rgba(241, 61, 112, 0.9)"
            : "rgba(0, 150, 108, 0.6)",
        }}
        transition={{
          type: "spring",
          damping: 24,
          stiffness: 300,
          mass: 0.35,
        }}
      />

      {/* Center Sweet Berry Pip */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full pointer-events-none shadow-sm"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? "#F13D70" : "#004F3C",
        }}
        transition={{
          type: "spring",
          damping: 35,
          stiffness: 450,
        }}
      />
    </div>
  );
}
