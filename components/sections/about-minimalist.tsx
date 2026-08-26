"use client";

import React from "react";
import { motion } from "framer-motion";
import { HangingIdCard } from "@/components/lightswind/hanging-id-card";
import { ArrowUpRight, Sparkle, Lightning, CheckCircle } from "@phosphor-icons/react";

export function AboutMinimalist() {
  return (
    <section
      id="about-minimalist"
      aria-label="About — Minimalist Editorial Edition"
      className="relative z-10 py-28 lg:py-36 bg-[var(--background)] text-white overflow-hidden"
    >
      {/* Soft ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_30%,rgba(184,219,217,0.04),transparent_80%)] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Minimalist Sub-heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--ice)]/10 border border-[var(--ice)]/20 text-xs font-sans font-medium text-[var(--ice)] mb-4">
            <Sparkle size={14} className="text-[var(--accent)]" />
            Editorial Design Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-white tracking-tight leading-tight mb-4">
            Simplicity is the Ultimate Automation.
          </h2>
          <p className="text-sm sm:text-base font-sans text-[var(--ice)]/75 leading-relaxed font-light">
            I craft minimalist, frictionless CRM workflows that remove complexity and allow businesses to operate effortlessly behind the scenes.
          </p>
        </motion.div>

        {/* Airy 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (5 cols) — Hanging ID Card (Minimalist Theme) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            <HangingIdCard
              name="Muhammad Umer Farooq"
              role="CRM & Automation Architect"
              badgeId="MUF-MINIMAL-2026"
              accentColor="#B8DBD9"
              ropeLength={110}
            />
          </motion.div>

          {/* Right Column (7 cols) — Wide Editorial Text & Sparse Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 space-y-10"
          >
            {/* Main Narrative */}
            <div className="space-y-5 text-sm sm:text-base font-sans text-[var(--ice)]/85 font-light leading-relaxed">
              <p className="text-white text-lg sm:text-xl font-heading font-normal leading-snug">
                Every manual click in your sales process is a bottleneck waiting to be simplified.
              </p>
              <p>
                Specializing in GoHighLevel, n8n, and custom REST API webhooks, I design intelligent CRM systems that automatically trigger client follow-ups, capture leads 24/7, and synchronize pipeline data across your tech stack.
              </p>
            </div>

            {/* Sparse Clean Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/10">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Lightning size={16} className="text-[var(--accent)]" />
                  <h4 className="text-sm font-sans font-semibold text-white">GoHighLevel Specialist</h4>
                </div>
                <p className="text-xs text-[var(--ice)]/70 font-sans leading-relaxed font-light">
                  End-to-end CRM setup, funnel workflows, SMS/Email triggers, and white-label SaaS configurations.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-[var(--emerald)]" />
                  <h4 className="text-sm font-sans font-semibold text-white">70% Workload Reduction</h4>
                  </div>
                <p className="text-xs text-[var(--ice)]/70 font-sans leading-relaxed font-light">
                  Replacing manual data entry with seamless webhooks and instant lead response automations.
                </p>
              </div>
            </div>

            {/* Minimalist CTA Link */}
            <div className="pt-2">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-white hover:text-[var(--accent)] transition-colors group"
              >
                <span>Discuss Your Automation Architecture</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutMinimalist;
