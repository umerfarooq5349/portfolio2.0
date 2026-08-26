"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AboutSection } from "@/components/sections/about-section";
import { AboutBrutalist } from "@/components/sections/about-brutalist";
import { AboutMinimalist } from "@/components/sections/about-minimalist";
import { Lightning, SquaresFour, Sparkle } from "@phosphor-icons/react";

export function AboutVariationsContainer() {
  const [activeTab, setActiveTab] = useState<"original" | "brutalist" | "minimalist">("original");

  return (
    <div className="w-full">
      {/* Design Variation Switcher Bar */}
      <div className="max-w-6xl mx-auto px-6 mb-12 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 p-1.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-xl shadow-xl">
          <button
            onClick={() => setActiveTab("original")}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-sans font-bold transition-all cursor-pointer ${
              activeTab === "original"
                ? "bg-[var(--accent)] text-black shadow-md"
                : "text-[var(--ice)]/80 hover:text-white hover:bg-white/10"
            }`}
          >
            <Lightning size={14} />
            Original About
          </button>

          <button
            onClick={() => setActiveTab("brutalist")}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-sans font-bold transition-all cursor-pointer ${
              activeTab === "brutalist"
                ? "bg-white text-black shadow-md"
                : "text-[var(--ice)]/80 hover:text-white hover:bg-white/10"
            }`}
          >
            <SquaresFour size={14} />
            Brutalism Edition
          </button>

          <button
            onClick={() => setActiveTab("minimalist")}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-sans font-bold transition-all cursor-pointer ${
              activeTab === "minimalist"
                ? "bg-[var(--ice)] text-black shadow-md"
                : "text-[var(--ice)]/80 hover:text-white hover:bg-white/10"
            }`}
          >
            <Sparkle size={14} />
            Minimalist White Space
          </button>
        </div>
      </div>

      {/* Render Active Variation */}
      <AnimatePresence mode="wait">
        {activeTab === "original" && (
          <motion.div
            key="original"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
          >
            <AboutSection />
          </motion.div>
        )}

        {activeTab === "brutalist" && (
          <motion.div
            key="brutalist"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
          >
            <AboutBrutalist />
          </motion.div>
        )}

        {activeTab === "minimalist" && (
          <motion.div
            key="minimalist"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
          >
            <AboutMinimalist />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AboutVariationsContainer;
