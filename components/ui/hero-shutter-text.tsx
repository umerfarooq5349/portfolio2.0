"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

interface HeroShutterTextProps {
  text: string;
  className?: string;
  textClassName?: string;
  accentWords?: string[];
  baseColor?: string;
  sliceColor?: string;
  startDelay?: number;
}

export default function HeroShutterText({
  text,
  className = "",
  textClassName = "",
  accentWords = [],
  baseColor = "text-white",
  sliceColor = "text-[var(--accent)]",
  startDelay = 0.1,
}: HeroShutterTextProps) {
  const words = text.split(" ");

  return (
    <div className={cn("relative inline-block select-none py-1 overflow-visible", className)}>
      <div className="flex flex-wrap items-baseline gap-x-[0.28em] gap-y-[0.2em] overflow-visible">
        {words.map((word, wordIdx) => {
          const isAccent = accentWords.some((aw) =>
            word.toLowerCase().includes(aw.toLowerCase())
          );
          const characters = word.split("");

          return (
            <span key={wordIdx} className="inline-flex items-center whitespace-nowrap overflow-visible py-0.5">
              {characters.map((char, charIdx) => {
                const charOffset = (wordIdx * 5 + charIdx) * 0.025;
                const totalCharDelay = startDelay + charOffset;

                return (
                  <span
                    key={charIdx}
                    className="relative inline-block overflow-visible pb-1 pr-[0.06em]"
                  >
                    {/* Base Character with Full Descender Clearance */}
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.45,
                        delay: totalCharDelay + 0.05,
                        ease: [0.25, 1, 0.5, 1],
                      }}
                      className={cn(
                        "inline-block tracking-tight leading-[1.25]",
                        isAccent ? "text-[var(--accent)] italic font-medium pr-[0.05em]" : baseColor,
                        textClassName
                      )}
                    >
                      {char}
                    </motion.span>

                    {/* Top Slice Layer — Shutter Slice */}
                    <motion.span
                      initial={{ x: "-105%", opacity: 0 }}
                      animate={{ x: "105%", opacity: [0, 1, 0] }}
                      transition={{
                        duration: 0.55,
                        delay: totalCharDelay,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className={cn(
                        "absolute inset-0 pointer-events-none tracking-tight leading-[1.25] overflow-hidden will-change-transform",
                        isAccent ? "text-white italic font-medium pr-[0.05em]" : sliceColor,
                        textClassName
                      )}
                      style={{
                        clipPath: "polygon(0 0, 100% 0, 100% 35%, 0 35%)",
                        transform: "translateZ(0)",
                      }}
                    >
                      {char}
                    </motion.span>

                    {/* Middle Slice Layer — Shutter Slice */}
                    <motion.span
                      initial={{ x: "105%", opacity: 0 }}
                      animate={{ x: "-105%", opacity: [0, 1, 0] }}
                      transition={{
                        duration: 0.55,
                        delay: totalCharDelay + 0.05,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className={cn(
                        "absolute inset-0 pointer-events-none tracking-tight leading-[1.25] overflow-hidden text-zinc-300 will-change-transform",
                        isAccent && "italic font-medium pr-[0.05em]",
                        textClassName
                      )}
                      style={{
                        clipPath: "polygon(0 35%, 100% 35%, 100% 65%, 0 65%)",
                        transform: "translateZ(0)",
                      }}
                    >
                      {char}
                    </motion.span>

                    {/* Bottom Slice Layer — Shutter Slice */}
                    <motion.span
                      initial={{ x: "-105%", opacity: 0 }}
                      animate={{ x: "105%", opacity: [0, 1, 0] }}
                      transition={{
                        duration: 0.55,
                        delay: totalCharDelay + 0.1,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className={cn(
                        "absolute inset-0 pointer-events-none tracking-tight leading-[1.25] overflow-hidden will-change-transform",
                        isAccent ? "text-white italic font-medium pr-[0.05em]" : sliceColor,
                        textClassName
                      )}
                      style={{
                        clipPath: "polygon(0 65%, 100% 65%, 100% 100%, 0 100%)",
                        transform: "translateZ(0)",
                      }}
                    >
                      {char}
                    </motion.span>
                  </span>
                );
              })}
            </span>
          );
        })}
      </div>
    </div>
  );
}
