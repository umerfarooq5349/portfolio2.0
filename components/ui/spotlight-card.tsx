"use client";

import React, { useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  glowColor?: "blue" | "purple" | "green" | "red" | "orange";
  size?: "sm" | "md" | "lg";
  width?: string | number;
  height?: string | number;
  customSize?: boolean;
}

const glowColorMap = {
  blue: { hue: 215 },
  purple: { hue: 275 },
  green: { hue: 145 },
  red: { hue: 350 },
  orange: { hue: 36 }, // Perfect warm amber matching #ECB365
};

const sizeMap = {
  sm: "w-48 h-64",
  md: "w-64 h-80",
  lg: "w-80 h-96",
};

const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = "",
  glowColor = "orange",
  size = "md",
  width,
  height,
  customSize = false,
  onPointerMove,
  onPointerLeave,
  style,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { hue } = glowColorMap[glowColor] || glowColorMap.orange;

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    // Only track mouse/pen, never block touch gestures on mobile
    if (e.pointerType === "touch") return;

    const el = cardRef.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty("--x", `${x.toFixed(1)}px`);
      el.style.setProperty("--y", `${y.toFixed(1)}px`);
      el.style.setProperty("--spot-opacity", "1");
    }

    if (onPointerMove) onPointerMove(e);
  };

  const handlePointerLeave = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (el) {
      el.style.setProperty("--spot-opacity", "0");
    }
    if (onPointerLeave) onPointerLeave(e);
  };

  const getSizeClasses = () => {
    if (customSize) return "";
    return sizeMap[size];
  };

  const customDimensions: React.CSSProperties = {};
  if (width !== undefined) {
    customDimensions.width = typeof width === "number" ? `${width}px` : width;
  }
  if (height !== undefined) {
    customDimensions.height = typeof height === "number" ? `${height}px` : height;
  }

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{
        "--hue": hue,
        "--spotlight-size": "340px",
        ...customDimensions,
        ...style,
      } as React.CSSProperties}
      className={cn(
        "glow-card group/glow relative rounded-3xl overflow-hidden transition-all duration-300",
        getSizeClasses(),
        className
      )}
      {...props}
    >
      {/* Background Spotlight Glow (Local coordinates, zero scroll stutter) */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 rounded-[inherit] -z-10"
        style={{
          background: `radial-gradient(
            var(--spotlight-size) var(--spotlight-size) at var(--x, -1000px) var(--y, -1000px),
            hsl(var(--hue) 90% 60% / calc(0.12 * var(--spot-opacity, 0))),
            transparent 70%
          )`,
          opacity: "var(--spot-opacity, 0)",
        }}
      />

      {/* Border Spotlight Glow (Hardware accelerated mask border) */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 p-[1px] -z-10"
        style={{
          background: `radial-gradient(
            var(--spotlight-size) var(--spotlight-size) at var(--x, -1000px) var(--y, -1000px),
            hsl(var(--hue) 95% 65% / calc(0.65 * var(--spot-opacity, 0))),
            transparent 65%
          )`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          opacity: "var(--spot-opacity, 0)",
        }}
      />

      {children}
    </div>
  );
};

export { GlowCard };

