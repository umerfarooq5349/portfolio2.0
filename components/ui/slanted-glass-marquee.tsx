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
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const duplicateCount = 6;

  // 60fps smooth loop with IntersectionObserver to pause when offscreen
  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();
    let singleSetWidth = items.length * 260;
    let isVisible = true;

    const measure = () => {
      if (trackRef.current && duplicateCount > 0) {
        singleSetWidth = trackRef.current.scrollWidth / duplicateCount;
      }
    };

    measure();
    window.addEventListener("resize", measure, { passive: true });

    const container = containerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        isVisible = entry.isIntersecting;
        if (isVisible) {
          lastTime = performance.now();
        }
      },
      { threshold: 0.05 }
    );

    if (container) {
      observer.observe(container);
    }

    const updateFrame = (now: number) => {
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      if (!isHovered && isVisible) {
        const wrapWidth = singleSetWidth > 0 ? singleSetWidth : 1;
        offsetRef.current = (offsetRef.current + delta * 65 * speed) % wrapWidth;
        if (trackRef.current) {
          trackRef.current.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
        }
      }
      animId = requestAnimationFrame(updateFrame);
    };

    animId = requestAnimationFrame(updateFrame);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", measure);
      observer.disconnect();
    };
  }, [isHovered, speed, items.length]);

  // Duplicate items 6 times to ensure seamless infinite looping across all resolutions
  const displayItems = Array.from({ length: duplicateCount }, () => items).flat();

  return (
    <div
      ref={containerRef}
      className="w-full relative overflow-hidden flex items-center justify-center py-6 sm:py-8 md:py-10"
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
    >
      {/* Slanted Glassmorphic Container tilted at -4deg */}
      <div
        className="w-[118%] max-w-none relative flex items-center overflow-hidden transition-transform duration-300"
        style={{
          transform: `rotate(${angle}deg) translateZ(0)`,
          willChange: "transform",
          background: "linear-gradient(90deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.06) 20%, rgba(255,255,255,0.06) 80%, rgba(255,255,255,0.02) 100%)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          borderTop: "1px solid rgba(255, 255, 255, 0.12)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
          padding: "14px 0",
          cursor: pauseOnHover ? "pointer" : "default",
        }}
      >
        {/* Horizontal Marquee Track */}
        <div
          ref={trackRef}
          className="flex items-center whitespace-nowrap will-change-transform"
        >
          {displayItems.map((item, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2 sm:gap-3.5 px-4 sm:px-8 transition-all duration-300 hover:scale-105 shrink-0"
              style={{
                fontFamily: FONT_FAMILY,
                fontSize: "clamp(0.95rem, 2.5vw, 1.15rem)",
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
              <span className="text-white font-bold">{item.name}</span>
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
