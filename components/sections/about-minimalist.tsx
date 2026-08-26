"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HangingIdCard } from "@/components/lightswind/hanging-id-card";
import {
  Sparkle,
  ArrowUpRight,
  Lightning,
  ShieldCheck,
  Cpu,
  CheckCircle,
  GearSix,
} from "@phosphor-icons/react";

const pillars = [
  {
    id: "crm",
    title: "Systemic CRM Architecture",
    icon: ShieldCheck,
    tag: "GoHighLevel & White-Label SaaS",
    description:
      "Engineered multi-tenant sub-account structures, automated pipeline stages, custom custom-field schemas, and fail-safe lead routing.",
    metrics: ["100% Lead Capture", "Instant SMS Triggers"],
  },
  {
    id: "workflows",
    title: "Autonomous Workflow Mesh",
    icon: Cpu,
    tag: "n8n + Zapier + REST Webhooks",
    description:
      "Connecting disconnected platforms into seamless, self-healing event loops. Eliminating repetitive manual data entry across teams.",
    metrics: ["70% Manual Work Cut", "Sub-second Execution"],
  },
  {
    id: "ai",
    title: "AI Chatbots & Conversational Sync",
    icon: Lightning,
    tag: "OpenAI + Webhook Integrations",
    description:
      "Deploying intelligent 24/7 AI agents that qualify incoming leads, book appointments directly onto calendars, and update CRMs in real time.",
    metrics: ["24/7 Operations", "Zero Lead Leakage"],
  },
];

export function AboutMinimalist() {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section
      id="about-minimalist"
      aria-label="About — Minimalist Editorial Edition"
      className="relative z-10 py-24 sm:py-32 lg:py-36 bg-[var(--background)] text-white overflow-hidden"
    >
      {/* Soft Ambient Radial Light Spill */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(236,179,101,0.06),transparent_80%)] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Sub-heading Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-20 text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-xs font-sans font-semibold uppercase tracking-widest text-[var(--accent)]">
            <Sparkle size={14} className="text-[var(--accent)] animate-pulse" />
            <span>Minimalist Editorial Edition</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-semibold text-white tracking-tight leading-[1.12]">
            Engineering Autonomous Systems <br className="hidden sm:inline" />
            <span className="text-[var(--accent)] italic">That Scale Impact.</span>
          </h2>

          <p className="text-sm sm:text-base font-sans text-[var(--ice)]/75 leading-relaxed font-light max-w-xl mx-auto">
            A minimalist approach to business operations: removing friction, automating repetitive tasks, and building CRM pipelines that work continuously behind the scenes.
          </p>
        </motion.div>

        {/* 12-Column Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column (5 Cols) — Artfully Framed Hanging ID Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            {/* Glass Pedestal Card Frame */}
            <div className="w-full bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl relative flex flex-col items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group hover:border-[var(--accent)]/30 transition-colors duration-500">
              {/* Internal Soft Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,179,101,0.12),transparent_70%)] pointer-events-none" />

              {/* Top Pedestal Header */}
              <div className="w-full flex items-center justify-between border-b border-white/10 pb-4 mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--emerald)] animate-ping" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--accent)]">
                    IDENTITY_CARD.RAW
                  </span>
                </div>
                <span className="text-[10px] font-mono text-zinc-500">INTERACTIVE PENDULUM</span>
              </div>

              {/* The Hanging ID Card */}
              <HangingIdCard
                name="Muhammad Umer Farooq"
                role="CRM & Automation Architect"
                badgeId="MUF-MINIMAL-2026"
                accentColor="#ECB365"
                ropeLength={90}
                className="py-2"
              />
            </div>
          </motion.div>

          {/* Right Column (7 Cols) — Wide Editorial Content & Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Main Editorial Quote Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl space-y-4">
              <p className="text-base sm:text-lg font-heading font-medium text-white leading-relaxed">
                &ldquo;Every manual click in your sales process is a bottleneck. True automation turns fragmented client interactions into an autonomous revenue engine.&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2 text-xs font-sans text-[var(--ice)]/70">
                <span className="font-semibold text-white">Muhammad Umer Farooq</span>
                <span>&bull;</span>
                <span className="text-[var(--accent)] font-medium">1.5+ Years CRM Specialization</span>
              </div>
            </div>

            {/* Interactive Pillar Selector Tabs */}
            <div className="space-y-3">
              <span className="text-xs font-sans font-bold uppercase tracking-widest text-[var(--accent)] block">
                Core Specialization Pillars
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {pillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  const isActive = activePillar === idx;
                  return (
                    <button
                      key={pillar.id}
                      onClick={() => setActivePillar(idx)}
                      className={`p-3.5 rounded-xl text-left border transition-all duration-300 cursor-pointer flex flex-col justify-between h-28 ${
                        isActive
                          ? "bg-[var(--accent)]/15 border-[var(--accent)] text-white shadow-lg"
                          : "bg-white/[0.02] border-white/10 text-zinc-400 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <Icon size={18} className={isActive ? "text-[var(--accent)]" : "text-zinc-400"} />
                        {isActive && <CheckCircle size={14} className="text-[var(--accent)]" />}
                      </div>
                      <div>
                        <h4 className="text-xs font-sans font-bold text-white line-clamp-1">{pillar.title}</h4>
                        <p className="text-[10px] font-sans text-zinc-400 line-clamp-1 mt-0.5">{pillar.tag}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Pillar Details Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="p-6 rounded-2xl bg-[#112335]/60 border border-white/12 backdrop-blur-xl space-y-4"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-heading font-semibold text-white">
                    {pillars[activePillar].title}
                  </h4>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/10 text-[var(--ice)]">
                    {pillars[activePillar].tag}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-sans text-[var(--ice)]/80 leading-relaxed font-light">
                  {pillars[activePillar].description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                  {pillars[activePillar].metrics.map((m, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 text-[11px] font-sans font-medium text-[var(--accent)] bg-[var(--accent)]/10 border border-[var(--accent)]/20 px-3 py-1 rounded-full"
                    >
                      <GearSix size={12} className="animate-spin" />
                      {m}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Minimalist Metrics Strip */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 text-center">
              <div>
                <span className="text-2xl sm:text-3xl font-heading font-bold text-white">50+</span>
                <p className="text-[11px] font-sans text-zinc-400 mt-0.5">Automations Built</p>
              </div>
              <div className="border-x border-white/10 px-2">
                <span className="text-2xl sm:text-3xl font-heading font-bold text-[var(--accent)]">70%</span>
                <p className="text-[11px] font-sans text-zinc-400 mt-0.5">Workload Cut</p>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-heading font-bold text-white">99.9%</span>
                <p className="text-[11px] font-sans text-zinc-400 mt-0.5">System Uptime</p>
              </div>
            </div>

            {/* CTA Link */}
            <div className="pt-2 flex justify-start">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-black font-sans font-bold text-xs hover:bg-white transition-all shadow-lg group"
              >
                <span>Request Custom CRM Architecture</span>
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
