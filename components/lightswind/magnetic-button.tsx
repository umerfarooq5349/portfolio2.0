"use client";

import React, { useRef, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends React.ComponentPropsWithoutRef<typeof motion.button> {
  children: React.ReactNode;
  strength?: number;
  radius?: number;
  variant?: "primary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
  wrapperClassName?: string;
  fullWidth?: boolean;
}

export function MagneticButton({
  children,
  strength = 0.4,
  radius = 80,
  variant = "outline",
  size = "md",
  className,
  wrapperClassName,
  fullWidth = false,
  type = "button",
  ...props
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const springConfig = { stiffness: 200, damping: 18, mass: 0.6 };

  const rawX = useSpring(0, springConfig);
  const rawY = useSpring(0, springConfig);

  const textX = useTransform(rawX, (v) => v * 0.4);
  const textY = useTransform(rawY, (v) => v * 0.4);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (!rect) return;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    const dist = Math.sqrt(distX ** 2 + distY ** 2);

    if (dist < radius) {
      rawX.set(distX * strength);
      rawY.set(distY * strength);
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

  const variants = {
    primary:
      "bg-[var(--accent)] text-black hover:bg-white shadow-lg shadow-[var(--accent)]/20 border border-[var(--accent)] font-bold",
    outline:
      "border border-[var(--border-subtle)] text-[var(--ice)] hover:border-[var(--accent)]/50 hover:text-white bg-[var(--surface)]/50",
    ghost:
      "text-[var(--ice)]/80 hover:bg-white/10 hover:text-white",
    dark:
      "bg-black text-white shadow-lg border border-white/10",
  };

  const sizes = {
    sm: "h-10 px-5 text-xs sm:text-sm rounded-full",
    md: "h-12 px-7 text-sm rounded-full",
    lg: "h-14 px-10 text-base rounded-full",
  };

  return (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(fullWidth ? "w-full flex" : "inline-flex", wrapperClassName)}
      style={{ padding: fullWidth ? 0 : radius * 0.25 }}
    >
      <motion.button
        type={type}
        {...props}
        style={{ x: rawX, y: rawY }}
        animate={{ scale: isHovered ? 1.02 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={cn(
          "relative inline-flex items-center justify-center font-sans font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white overflow-hidden",
          fullWidth && "w-full",
          variants[variant],
          sizes[size],
          className
        )}
      >
        <motion.span
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          className="pointer-events-none absolute inset-0 rounded-full bg-white/5"
        />

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
