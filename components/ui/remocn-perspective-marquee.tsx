"use client";

import React, { useState, useRef, useEffect } from "react";

export interface MarqueeItem {
  name: string;
  icon?: React.ReactNode;
  color?: string;
}

export interface PerspectiveMarqueeProps {
  items?: (string | MarqueeItem)[];
  fontSize?: number;
  color?: string;
  fontWeight?: number;
  pixelsPerFrame?: number;
  rotateY?: number;
  rotateX?: number;
  rotateZ?: number;
  perspective?: number;
  fadeColor?: string;
  background?: string;
  speed?: number;
  className?: string;
  pauseOnHover?: boolean;
}

const FONT_FAMILY =
  "var(--font-supreme), var(--font-geist-sans), -apple-system, BlinkMacSystemFont, sans-serif";

export function PerspectiveMarquee({
  items = [],
  fontSize = 44,
  color = "#FFFFFF",
  fontWeight = 700,
  pixelsPerFrame = 1.4,
  rotateY = -12,
  rotateX = 6,
  rotateZ = -4.5,
  perspective = 1200,
  fadeColor = "#11283D",
  background = "transparent",
  speed = 1,
  className = "",
  pauseOnHover = true,
}: PerspectiveMarqueeProps) {
  const [isHovered, setIsHovered] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    isHoveredRef.current = isHovered;
  }, [isHovered]);

  const parsedItems: MarqueeItem[] = items.map((item) =>
    typeof item === "string" ? { name: item } : item
  );

  const itemPadding = fontSize * 1.4;
  const approxItemWidth = parsedItems.reduce(
    (acc, item) => acc + item.name.length * fontSize * 0.55 + itemPadding + (item.icon ? 44 : 0),
    0
  );

  // 60fps frame accumulation loop with pause-on-hover via direct DOM transform
  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();

    const updateFrame = (now: number) => {
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      if (!isHoveredRef.current && trackRef.current) {
        offsetRef.current -= delta * 60 * speed * pixelsPerFrame;
        const mod = approxItemWidth > 0 ? approxItemWidth : 1;
        const currentOffset = offsetRef.current % mod;
        trackRef.current.style.transform = `translateX(${currentOffset}px)`;
      }
      animId = requestAnimationFrame(updateFrame);
    };

    animId = requestAnimationFrame(updateFrame);
    return () => cancelAnimationFrame(animId);
  }, [speed, pixelsPerFrame, approxItemWidth]);

  const rendered = [...parsedItems, ...parsedItems, ...parsedItems, ...parsedItems];

  return (
    <div
      className={className}
      onMouseEnter={() => {
        if (pauseOnHover) {
          setIsHovered(true);
          isHoveredRef.current = true;
        }
      }}
      onMouseLeave={() => {
        if (pauseOnHover) {
          setIsHovered(false);
          isHoveredRef.current = false;
        }
      }}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        background,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "visible",
        perspective: `${perspective}px`,
        cursor: pauseOnHover ? "pointer" : "default",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "115%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
          transformStyle: "preserve-3d",
          transition: "transform 0.4s ease-out",
          padding: "16px 0",
        }}
      >
        {/* Glassmorphic Background Ribbon Bar */}
        <div
          className="absolute left-[-10%] w-[130%] h-[76px] md:h-[86px] rounded-2xl pointer-events-none"
          style={{
            top: "50%",
            transform: "translateY(-50%)",
            background: "linear-gradient(90deg, rgba(17, 40, 61, 0.2) 0%, rgba(20, 50, 75, 0.65) 25%, rgba(20, 50, 75, 0.65) 75%, rgba(17, 40, 61, 0.2) 100%)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
            zIndex: 0,
          }}
        />

        <div
          ref={trackRef}
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            whiteSpace: "nowrap",
            willChange: "transform",
          }}
        >
          {rendered.map((item, i) => (
            <div
              key={i}
              className="group relative inline-flex items-center gap-3.5 transition-all duration-300 hover:scale-110 shrink-0"
              style={{
                fontFamily: FONT_FAMILY,
                fontSize,
                fontWeight,
                color: item.color || color,
                letterSpacing: "-0.02em",
                paddingRight: itemPadding,
                opacity: 1,
                transition: "opacity 0.3s ease, transform 0.3s ease",
              }}
            >
              {item.icon && (
                <span className="inline-flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-125">
                  {item.icon}
                </span>
              )}
              <span className="drop-shadow-md font-bold">{item.name}</span>
              <span className="ml-4 text-[var(--accent)] font-sans text-xl">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Side Fade Gradients for clean edge masking */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: `linear-gradient(90deg, ${fadeColor} 0%, transparent 12%, transparent 88%, ${fadeColor} 100%)`,
        }}
      />
    </div>
  );
}

export default PerspectiveMarquee;
