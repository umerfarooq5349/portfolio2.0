"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

/* ==========================================================================
   LIQUID GLASS BUTTON
   Standalone glass button — replaces RippleButton sitewide.
   Use variant="outline" for secondary CTAs on the dark navy background.
   Use variant="primary" for amber standalone CTAs (without magnetic effect).
   ========================================================================== */

export interface LiquidGlassButtonProps
  extends Omit<HTMLMotionProps<"button">, "size"> {
  variant?: "outline" | "primary" | "glass" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const LiquidGlassButton = React.forwardRef<
  HTMLButtonElement,
  LiquidGlassButtonProps
>(
  (
    {
      variant = "outline",
      size = "md",
      fullWidth = false,
      children,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    /* ── Size presets — match existing site button heights ── */
    const sizeClasses: Record<string, string> = {
      sm: "h-10 px-5 text-xs rounded-full gap-1.5",
      md: "h-11 sm:h-12 px-6 sm:px-7 text-xs sm:text-sm rounded-full gap-2",
      lg: "h-12 px-7 text-sm sm:text-base rounded-full gap-2.5",
      xl: "h-14 px-9 text-base rounded-[2rem] gap-3",
    };

    /* ── Variant styles — tuned for dark navy (#11283D) background ── */
    const variantStyles: Record<string, string> = {

      // ─ Outline (dark glass) — primary secondary CTA style ─────────────
      // Transparent dark glass with ice-mint border and subtle glare
      outline: cn(
        "text-[var(--ice)] font-medium tracking-wide",
        "bg-gradient-to-b from-white/[0.07] via-white/[0.03] to-transparent",
        "backdrop-blur-md saturate-150",
        "border border-[var(--border-subtle)]",
        "shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.09),0_6px_18px_rgba(0,0,0,0.22)]",
        "hover:border-[var(--ice)]/35 hover:text-white",
        "hover:bg-gradient-to-b hover:from-white/[0.11] hover:to-white/[0.04]",
        "hover:shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.14),0_8px_22px_rgba(0,0,0,0.3)]"
      ),

      // ─ Primary (amber glass, standalone — no magnetic) ──────────────
      primary: cn(
        "text-[#1C0A00] font-bold tracking-wide",
        "bg-gradient-to-b from-[#f5c06a] via-[#ECB365] to-[#c48538]",
        "border border-[#f7d08a]/60",
        "shadow-[0_14px_32px_-4px_rgba(236,179,101,0.5),inset_0_2.5px_2px_rgba(255,230,155,0.9),inset_0_-4px_8px_rgba(110,55,0,0.3)]",
        "hover:shadow-[0_18px_38px_-4px_rgba(236,179,101,0.68)]"
      ),

      // ─ Glass (pure translucent — for cards, overlays) ───────────────
      glass: cn(
        "text-white font-semibold",
        "bg-gradient-to-b from-white/20 via-white/10 to-white/5",
        "backdrop-blur-md saturate-200",
        "border border-white/25",
        "shadow-[0_12px_30px_-6px_rgba(0,0,0,0.5),inset_0_2px_1.5px_rgba(255,255,255,0.28),inset_0_-4px_8px_rgba(0,0,0,0.25)]"
      ),

      // ─ Secondary (muted surface glass) ─────────────────────────────
      secondary: cn(
        "text-[var(--ice)] font-medium",
        "bg-gradient-to-b from-[var(--surface-elevated)]/50 to-[var(--surface)]/30",
        "backdrop-blur-sm",
        "border border-white/10",
        "shadow-[inset_0_1px_1px_rgba(255,255,255,0.07),0_4px_12px_rgba(0,0,0,0.2)]"
      ),

      // ─ Ghost (text only, no background) ────────────────────────────
      ghost: cn(
        "text-[var(--ice)]/80 font-medium",
        "border border-transparent",
        "hover:text-white hover:bg-white/[0.07] hover:border-white/10"
      ),
    };

    const hasGlassLayers = variant !== "ghost";

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.97, y: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        disabled={disabled}
        className={cn(
          "relative inline-flex items-center justify-center font-sans",
          "overflow-hidden select-none cursor-pointer",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20",
          "transition-colors duration-200",
          sizeClasses[size] ?? sizeClasses.md,
          variantStyles[variant] ?? variantStyles.outline,
          fullWidth && "w-full",
          disabled && "opacity-50 cursor-not-allowed pointer-events-none",
          className
        )}
        {...props}
      >
        {/* ── Top curved glare reflection ── */}
        {hasGlassLayers && (
          <span
            aria-hidden="true"
            className="absolute top-[1px] left-1 right-1 h-[48%] pointer-events-none rounded-[100px_100px_45%_45%]"
            style={{
              background:
                variant === "primary"
                  ? "linear-gradient(180deg,rgba(255,235,160,0.9) 0%,rgba(255,215,110,0.36) 42%,rgba(255,200,80,0) 100%)"
                  : "linear-gradient(180deg,rgba(255,255,255,0.14) 0%,rgba(255,255,255,0.05) 42%,rgba(255,255,255,0) 100%)",
            }}
          />
        )}

        {/* ── Bottom internal refraction ring ── */}
        {hasGlassLayers && (
          <span
            aria-hidden="true"
            className="absolute bottom-[1.5px] left-1.5 right-1.5 h-[25%] pointer-events-none rounded-[0_0_100px_100px]"
            style={{
              background:
                variant === "primary"
                  ? "linear-gradient(0deg,rgba(255,195,70,0.38) 0%,rgba(255,210,100,0) 100%)"
                  : "linear-gradient(0deg,rgba(255,255,255,0.09) 0%,rgba(255,255,255,0) 100%)",
            }}
          />
        )}

        {/* ── Content ── */}
        <span className="relative z-10 inline-flex items-center gap-2">
          {children}
        </span>
      </motion.button>
    );
  }
);
LiquidGlassButton.displayName = "LiquidGlassButton";

export default LiquidGlassButton;

