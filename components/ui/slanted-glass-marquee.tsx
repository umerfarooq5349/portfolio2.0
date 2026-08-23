"use client";

import React, { useState, useRef, useEffect } from "react";

export interface MarqueeItem {
  name: string;
  icon?: React.ReactNode;
  color?: string;
}

export interface SlantedGlassMarqueeProps {
  items: MarqueeItem[];
  angle?: number; // Default -4deg (Templifica angle)
  speed?: number;
  pauseOnHover?: boolean;
}

const FONT_FAMILY =
  "var(--font-supreme), var(--font-geist-sans), -apple-system, BlinkMacSystemFont, sans-serif";

export function SlantedGlassMarquee({
  items = [],
  angle = -4,
  speed = 1,
  pauseOnHover = true,
}: SlantedGlassMarqueeProps) {
  const [isHovered, setIsHovered] = useState(false);
  const offsetRef = useRef(0);
  const [, setTick] = useState(0);

  // 60fps smooth loop
  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();

    const updateFrame = (now: number) => {
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      if (!isHovered) {
        // Continuous movement ~80px per sec
        offsetRef.current += delta * 70 * speed;
        setTick((t) => t + 1);
      }
      animId = requestAnimationFrame(updateFrame);
    };

    animId = requestAnimationFrame(updateFrame);
    return () => cancelAnimationFrame(animId);
  }, [isHovered, speed]);

  // Duplicate items 4 times to ensure seamless infinite looping
  const displayItems = [...items, ...items, ...items, ...items];
  const itemWidthApprox = 260; // Average pixel width per item slot
  const totalTrackWidth = items.length * itemWidthApprox;

  const currentOffset = -(offsetRef.current % Math.max(1, totalTrackWidth));

  return (
    <div
      className="w-full relative overflow-visible flex items-center justify-center py-8 md:py-10"
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
    >
      {/* Slanted Glassmorphic Container tilted at -4deg */}
      <div
        className="w-[112%] max-w-none relative flex items-center overflow-hidden transition-transform duration-300"
        style={{
          transform: `rotate(${angle}deg)`,
          background: "linear-gradient(90deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.06) 20%, rgba(255,255,255,0.06) 80%, rgba(255,255,255,0.02) 100%)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderTop: "1px solid rgba(255, 255, 255, 0.12)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow: "0 15px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
          padding: "18px 0",
          cursor: pauseOnHover ? "pointer" : "default",
        }}
      >
        {/* Horizontal Marquee Track */}
        <div
          className="flex items-center whitespace-nowrap will-change-transform"
          style={{
            transform: `translateX(${currentOffset}px)`,
          }}
        >
          {displayItems.map((item, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-3.5 px-8 transition-all duration-300 hover:scale-110 shrink-0"
              style={{
                fontFamily: FONT_FAMILY,
                fontSize: "1.35rem",
                fontWeight: 700,
                color: item.color || "#FFFFFF",
                letterSpacing: "-0.02em",
                filter: isHovered ? "none" : "blur(0px)",
                opacity: isHovered ? 1 : 0.95,
                transition: "filter 0.3s ease, opacity 0.3s ease, transform 0.3s ease",
              }}
            >
              {item.icon && (
                <span className="inline-flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-120">
                  {item.icon}
                </span>
              )}
              <span className="drop-shadow-md text-white font-bold">{item.name}</span>
              <span className="ml-6 text-[var(--accent)] font-sans text-lg opacity-80">✦</span>
            </div>
          ))}
        </div>

        {/* Transparent edge gradient overlay */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/20 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/20 to-transparent pointer-events-none z-10" />
      </div>
    </div>
  );
}

export default SlantedGlassMarquee;
