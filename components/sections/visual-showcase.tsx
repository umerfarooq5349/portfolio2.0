"use client";

import { motion } from "framer-motion";
import { Carousel_003 } from "@/components/ui/skiper-ui/skiper49";
import { Sparkle, SlidersHorizontal, ArrowUpRight } from "@phosphor-icons/react";
import Link from "next/link";

const showcaseImages = [
  {
    src: "/crm-dashboard.png",
    alt: "GoHighLevel CRM Dashboard Architecture & Pipeline",
  },
  {
    src: "/automation-workflow.png",
    alt: "n8n & Zapier Multi-step Lead Automation Flow",
  },
  {
    src: "/projects/aether_os.png",
    alt: "Aether OS — Smart Automation Operating System",
  },
  {
    src: "/projects/fintech_dashboard.png",
    alt: "Fintech Lead Analytics & Conversion Dashboard",
  },
  {
    src: "/projects/luxe_maison.png",
    alt: "High-Ticket Real Estate Automated Booking Engine",
  },
];

export function VisualShowcase() {
  return (
    <section
      aria-label="Visual Systems Showcase"
      className="py-28 relative bg-[var(--background)] overflow-hidden border-t border-white/5"
    >
      {/* Background glow & mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[var(--accent)]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)]/10 px-4 py-1.5 text-xs font-sans text-[var(--accent)] border border-[var(--accent)]/20 mb-4 font-semibold uppercase tracking-[0.18em]"
          >
            <Sparkle size={14} className="text-[var(--accent)]" />
            Interactive Systems Gallery
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading font-semibold text-white tracking-tight leading-[1.1]"
          >
            Visual Architecture &amp;{" "}
            <span className="text-[var(--accent)] italic font-medium">System Blueprints.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-zinc-400 font-sans text-base sm:text-lg leading-relaxed"
          >
            Explore interactive 3D coverflow previews of custom CRM setups, multi-channel automation workflows, and automated client onboarding systems built for high-growth businesses.
          </motion.p>
        </div>

        {/* Skiper49 Coverflow Carousel Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl bg-[#141414] border border-white/10 p-6 md:p-12 shadow-2xl overflow-hidden"
        >
          {/* Subtle top bar UI */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-mono text-zinc-500 ml-2">systems_coverflow.config.ts</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-sans text-zinc-400">
              <SlidersHorizontal size={14} className="text-[var(--accent)]" />
              <span>Drag or Swipe to Explore</span>
            </div>
          </div>

          {/* Skiper49 Carousel Component */}
          <div className="py-4">
            <Carousel_003
              images={showcaseImages}
              showPagination
              showNavigation
              loop
              autoplay
            />
          </div>

          {/* Footer bar */}
          <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-zinc-400">
            <p>GoHighLevel · n8n · Zapier · AI Workflows · Web Applications</p>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-[var(--accent)] hover:text-[var(--accent-hover)] font-semibold transition-colors"
            >
              <span>View Detailed Case Studies</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
