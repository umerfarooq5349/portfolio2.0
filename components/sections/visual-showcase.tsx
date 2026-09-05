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
    alt: "Aether OS: Smart Automation Operating System",
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
      className="py-28 relative bg-[var(--background)] overflow-hidden border-t border-[var(--border-subtle)]"
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

        {/* Interactive Coverflow Showcase Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl bg-[var(--surface)] border border-[var(--border-subtle)] p-6 md:p-12 shadow-2xl overflow-hidden"
        >
          {/* Professional System Architecture Status Bar */}
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-6 mb-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--emerald)]/15 border border-[var(--emerald)]/30 text-[11px] font-sans text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Production CRM Blueprints
              </span>
              <span className="hidden sm:inline-block text-xs font-sans text-[var(--ice)]/60">
                Verified Workflows &amp; Pipelines
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-sans text-[var(--ice)]/70">
              <SlidersHorizontal size={14} className="text-[var(--accent)]" />
              <span>Swipe or Drag to Inspect</span>
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
          <div className="mt-6 pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[var(--ice)]/70">
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
