"use client";

import React, { useRef, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

/* ==========================================================================
   MAGNETIC LIQUID GLASS BUTTON
   Combines: Magnetic spring-physics attraction + Amber liquid glass visual
   Use for: ALL primary / "Book Complimentary Call" CTAs sitewide
   ========================================================================== */

interface MagneticLiquidGlassProps
  extends React.ComponentPropsWithoutRef<typeof motion.button> {
  children: React.ReactNode;
  /** Magnetic pull strength (0–1). Default 0.4 */
  strength?: number;
  /** Radius in px within which the magnetic effect activates. Default 80 */
  radius?: number;
  /** Size preset */
  size?: "sm" | "md" | "lg";
  className?: string;
  wrapperClassName?: string;
  fullWidth?: boolean;
  /** Accepts 'primary' (ignored — always amber glass) for backward compat */
  variant?: string;
}

export function MagneticLiquidGlass({
  children,
  strength = 0.4,
  radius = 80,
  size = "md",
  className,
  wrapperClassName,
  fullWidth = false,
  type = "button",
  variant: _variant, // consumed + ignored — always amber primary
  ...props
}: MagneticLiquidGlassProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  /* ── Spring config ──────────────────────────────────────────────────── */
  const springCfg = { stiffness: 200, damping: 18, mass: 0.6 };
  const rawX = useSpring(0, springCfg);
  const rawY = useSpring(0, springCfg);
  // Inner content shifts at 40% of button travel → satisfying parallax
  const textX = useTransform(rawX, (v) => v * 0.4);
  const textY = useTransform(rawY, (v) => v * 0.4);

  /* ── Pointer tracking ───────────────────────────────────────────────── */
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    const dist = Math.hypot(dx, dy);
    if (dist < radius) {
      rawX.set(dx * strength);
      rawY.set(dy * strength);
      setIsHovered(true);
    } else {
      rawX.set(0);
      rawY.set(0);
      setIsHovered(false);
    }
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
    setIsHovered(false);
  };

  /* ── Size presets (match existing site button heights) ──────────────── */
  const sizes: Record<string, string> = {
    sm: "h-9 px-4 sm:px-5 text-xs rounded-full",
    md: "h-11 sm:h-12 px-6 sm:px-7 text-xs sm:text-sm rounded-full",
    lg: "h-12 px-8 text-sm sm:text-base rounded-full",
  };

  return (
    <div
      ref={wrapRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        fullWidth ? "w-full flex" : "inline-flex",
        wrapperClassName
      )}
    >
      <motion.button
        type={type}
        {...props}
        style={{ x: rawX, y: rawY }}
        animate={{
          scale: isHovered ? 1.03 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={cn(
          /* ── Layout & base ── */
          "relative inline-flex items-center justify-center",
          "font-sans font-bold tracking-wide select-none cursor-pointer overflow-hidden",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/60",
          "transition-shadow duration-200",
          fullWidth && "w-full",

          /* ── Amber liquid glass visual ── */
          "text-[#1C0A00]",
          "bg-gradient-to-b from-[#f5c06a] via-[#ECB365] to-[#c48538]",
          "border border-[#f7d08a]/60",

          /* ── Resting glow shadow ── */
          "shadow-[0_14px_32px_-4px_rgba(236,179,101,0.5),0_4px_10px_-2px_rgba(0,0,0,0.25),inset_0_2.5px_2px_rgba(255,230,155,0.9),0_0_0_1px_rgba(236,179,101,0.35),inset_0_-4px_8px_rgba(110,55,0,0.3)]",

          /* ── Hover glow ── */
          isHovered &&
            "shadow-[0_20px_40px_-4px_rgba(236,179,101,0.72),0_6px_14px_-2px_rgba(0,0,0,0.3),inset_0_2.5px_2px_rgba(255,235,165,0.95),0_0_0_1px_rgba(236,179,101,0.55),inset_0_-4px_8px_rgba(120,60,0,0.4)]",

          sizes[size] ?? sizes.md,
          className
        )}
      >
        {/* ── Top curved glare reflection ── */}
        <span
          aria-hidden="true"
          className="absolute top-[1px] left-1 right-1 h-[48%] pointer-events-none rounded-[100px_100px_45%_45%]"
          style={{
            background:
              "linear-gradient(180deg,rgba(255,235,160,0.92) 0%,rgba(255,215,110,0.38) 42%,rgba(255,200,80,0) 100%)",
          }}
        />
        {/* ── Bottom internal refraction ring ── */}
        <span
          aria-hidden="true"
          className="absolute bottom-[1.5px] left-1.5 right-1.5 h-[26%] pointer-events-none rounded-[0_0_100px_100px]"
          style={{
            background:
              "linear-gradient(0deg,rgba(255,195,70,0.4) 0%,rgba(255,210,100,0) 100%)",
          }}
        />

        {/* ── Magnetic parallax inner content ── */}
        <motion.span
          style={{ x: textX, y: textY }}
          className="relative z-10 flex items-center gap-2"
        >
          {children}
        </motion.span>
      </motion.button>
    </div>
  );
}

export default MagneticLiquidGlass;

