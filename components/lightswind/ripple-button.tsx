"use client";

import React, { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RippleButtonProps {
  children?: ReactNode;
  text?: string;
  variant?: "primary" | "outline" | "secondary" | "ghost";
  bgColor?: string;
  circleColor?: string;
  width?: string;
  height?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

  export const RippleButton: React.FC<RippleButtonProps> = ({
    children,
    text,
    variant = "primary",
    className = "",
    onClick,
    type = "button",
    width,
    height,
  }) => {
    const [ripple, setRipple] = useState<{ x: number; y: number; id: number } | null>(null);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setRipple({ x, y, id: Date.now() });
      if (onClick) onClick();
    };

    const variants = {
      primary: cn(
        "bg-[var(--accent)] hover:bg-[var(--accent-hover)] active:bg-[var(--accent-hover)]",
        "text-black font-heading font-bold",
        "border border-[var(--accent)] shadow-[0_4px_16px_rgba(236,179,101,0.3)] hover:shadow-[0_6px_24px_rgba(236,179,101,0.45)]"
      ),
      outline: cn(
        "border border-[var(--border-subtle)] text-[var(--ice)] hover:border-[var(--accent)]/50 hover:text-white",
        "bg-[var(--surface)]/50 font-sans font-medium"
      ),
      secondary: cn(
        "border border-white/10 text-white bg-white/5 hover:bg-white/10 hover:border-white/20",
        "font-sans font-medium"
      ),
      ghost: cn(
        "text-[var(--ice)]/80 hover:bg-white/10 hover:text-white border border-transparent",
        "font-sans font-medium"
      ),
    };

    return (
      <motion.button
        type={type}
        onClick={handleClick}
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        style={{ width, height }}
        className={cn(
          "group relative inline-flex items-center justify-center gap-2",
          "h-11 sm:h-12 px-6 sm:px-7 rounded-full text-xs sm:text-sm tracking-wide",
          "transition-all duration-300 cursor-pointer select-none whitespace-nowrap overflow-hidden",
          variants[variant],
          className
        )}
      >
        {/* Background Micro Shimmer Sheen */}
        <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out" />

        {/* Ripple Wave on Click */}
        {ripple && (
          <motion.span
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.6 }}
            animate={{ scale: 4, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="pointer-events-none absolute rounded-full bg-white/30"
            style={{
              left: ripple.x - 20,
              top: ripple.y - 20,
              width: 40,
              height: 40,
            }}
          />
        )}

        {/* Content: Always horizontally aligned with gap */}
        <span
          className={cn(
            "relative z-10 inline-flex items-center justify-center gap-2 leading-none",
            variant === "primary" ? "text-black font-bold" : "text-inherit font-medium"
          )}
        >
          {children || text}
        </span>
      </motion.button>
    );
  };

  export default RippleButton;
