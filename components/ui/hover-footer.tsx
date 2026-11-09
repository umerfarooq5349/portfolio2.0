"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextHoverEffect = ({
  text,
  duration,
  className,
}: {
  text: string;
  duration?: number;
  className?: string;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!svgRef.current) return;
    const svgRect = svgRef.current.getBoundingClientRect();
    if (svgRect.width === 0 || svgRect.height === 0) return;
    const cxPercentage = ((e.clientX - svgRect.left) / svgRect.width) * 100;
    const cyPercentage = ((e.clientY - svgRect.top) / svgRect.height) * 100;
    setMaskPosition({
      cx: `${cxPercentage.toFixed(1)}%`,
      cy: `${cyPercentage.toFixed(1)}%`,
    });
  };

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 1600 240"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className={cn("select-none uppercase cursor-pointer pointer-events-auto w-full h-auto block", className)}
    >
      <defs>
        {/* Ambient Watermark Gradient (matching reference image) */}
        <linearGradient id="ignittoGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(184, 219, 217, 0.22)" />
          <stop offset="35%" stopColor="rgba(32, 71, 108, 0.32)" />
          <stop offset="100%" stopColor="rgba(17, 40, 61, 0.08)" />
        </linearGradient>

        {/* Subtle Rim Stroke Gradient */}
        <linearGradient id="ignittoStroke" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(184, 219, 217, 0.55)" />
          <stop offset="45%" stopColor="rgba(184, 219, 217, 0.22)" />
          <stop offset="100%" stopColor="rgba(32, 71, 108, 0.06)" />
        </linearGradient>

        {/* Interactive Hover Glow Gradient */}
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          {hovered && (
            <>
              <stop offset="0%" stopColor="var(--accent, #ECB365)" />
              <stop offset="25%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="var(--accent, #ECB365)" />
              <stop offset="75%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="var(--accent, #ECB365)" />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="25%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>

      {/* Base fill layer — dark navy glass watermark */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        textLength="1550"
        lengthAdjust="spacingAndGlyphs"
        fill="url(#ignittoGradient)"
        className="font-heading font-black"
        style={{
          fontSize: 220,
          fontFamily: "var(--font-heading, 'Chubbo', sans-serif)",
          fontWeight: 900,
        }}
      >
        {text}
      </text>

      {/* Top rim outline / stroke */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        textLength="1550"
        lengthAdjust="spacingAndGlyphs"
        fill="none"
        stroke="url(#ignittoStroke)"
        strokeWidth="1.6"
        className="font-heading font-black"
        style={{
          fontSize: 220,
          fontFamily: "var(--font-heading, 'Chubbo', sans-serif)",
          fontWeight: 900,
        }}
      >
        {text}
      </text>

      {/* Interactive reveal layer — follows cursor with gold accent beam */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        textLength="1550"
        lengthAdjust="spacingAndGlyphs"
        fill="url(#textGradient)"
        mask="url(#textMask)"
        className="font-heading font-black"
        style={{
          fontSize: 220,
          fontFamily: "var(--font-heading, 'Chubbo', sans-serif)",
          fontWeight: 900,
        }}
      >
        {text}
      </text>
    </svg>
  );
};

export const FooterBackgroundGradient = () => {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(184, 219, 217, 0.035) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(184, 219, 217, 0.035) 1px, transparent 1px),
          radial-gradient(125% 125% at 50% 10%, transparent 45%, rgba(236, 179, 101, 0.05) 100%)
        `,
        backgroundSize: "48px 48px, 48px 48px, 100% 100%",
        maskImage: "radial-gradient(ellipse 90% 90% at 50% 50%, black 40%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 90% 90% at 50% 50%, black 40%, transparent 100%)",
      }}
    />
  );
};
