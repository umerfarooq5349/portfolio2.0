"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { HangingIdCard } from "@/components/lightswind/hanging-id-card";
import {
  Sparkle,
  ArrowUpRight,
  Lightning,
  ShieldCheck,
  Cpu,
  CheckCircle,
  GearSix,
  Code,
  TrendUp,
  Quotes,
} from "@phosphor-icons/react";

// Count-up Animated Number Component
function AnimatedNumber({ value, suffix, isDecimal }: { value: number; suffix: string; isDecimal?: boolean }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const startTime = performance.now();
    const start = 0;

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(parseFloat((start + (value - start) * eased).toFixed(isDecimal ? 1 : 0)));
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }, [inView, value, isDecimal]);

  return (
    <span ref={ref}>
      {isDecimal ? display.toFixed(1) : display}
      {suffix}
    </span>
  );
}

const pillars = [
  {
    id: "ghl",
    title: "GoHighLevel CRM Architecture",
    icon: ShieldCheck,
    tag: "GHL Expert & SaaS Setup",
    description:
      "Engineered end-to-end GoHighLevel sub-accounts, white-label SaaS setups, automated opportunity pipelines, SMS/Email drip workflows, and calendar booking systems.",
    metrics: ["50+ GHL Workflows", "Instant Lead Response"],
  },
  {
    id: "n8n-zapier",
    title: "n8n & Zapier Workflow Mesh",
    icon: Cpu,
    tag: "n8n + Zapier + REST Webhooks",
    description:
      "Connecting disparate tools (GoHighLevel, Stripe, Google Sheets, Custom APIs) into self-healing, multi-step webhooks that operate 24/7 without manual intervention.",
    metrics: ["70% Manual Work Cut", "Sub-Second Sync"],
  },
  {
    id: "ai-chatbots",
    title: "AI Chatbots & Lead Capture",
    icon: Lightning,
    tag: "OpenAI + Voice & Chat Agents",
    description:
      "Deploying conversational AI bots for real estate, healthcare, and service businesses to qualify incoming leads, schedule appointments, and update CRM records automatically.",
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
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#ECB365]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-20 text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ECB365]/10 border border-[#ECB365]/25 text-xs font-sans font-semibold uppercase tracking-widest text-[#ECB365]">
            <Sparkle size={14} className="text-[#ECB365] animate-pulse" />
            <span>Muhammad Umer Farooq &bull; About Me</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-semibold text-white tracking-tight leading-[1.12]">
            Engineering Autonomous Systems <br className="hidden sm:inline" />
            <span className="text-[#ECB365] italic">That Drive Revenue.</span>
          </h2>

          <p className="text-sm sm:text-base font-sans text-[#B8DBD9]/80 leading-relaxed font-light max-w-xl mx-auto">
            Hi, I&apos;m Muhammad Umer Farooq, a CRM &amp; Automation Expert with 1.5+ years of experience transforming client operations through GoHighLevel, n8n, and custom webhooks.
          </p>
        </motion.div>

        {/* 12-Column Grid with Equal Height Matching Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column (5 Cols) — Direct Hanging ID Card (Outer Frame Removed, Equal Height) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col items-center justify-center h-full p-6 sm:p-8 rounded-3xl "
          >
            {/* Hanging ID Card (Directly hanging with guaranteed h-fit & zero vertical stretching) */}
            <div className="my-auto py-2 flex flex-col items-center justify-center h-fit w-full shrink-0">
              <HangingIdCard
                name="Muhammad Umer Farooq"
                role="CRM & Automation Specialist"
                badgeId="MUF-89240-CRM"
                accentColor="#ECB365"
                ropeLength={150}
                avatarUrl="/hero-portrait.png"
              />
            </div>

            {/* Quick Experience Badge */}
            <div className="mt-8 pt-4 border-t border-white/10 w-full flex items-center justify-between text-xs font-sans text-[#B8DBD9]/75">
              <span className="flex items-center gap-1.5">
                <Code size={14} className="text-[#ECB365]" />
                1.5+ Yrs Experience
              </span>
              <span className="flex items-center gap-1.5">
                <TrendUp size={14} className="text-[var(--emerald)]" />
                70% Efficiency Gain
              </span>
            </div>
          </motion.div>

          {/* Right Column (7 Cols) — Editorial Content & Interactive Pillars (Equal Height) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-6 h-full p-6 sm:p-8 rounded-3xl "
          >
            {/* Main Quote Statement */}
            <div className="relative p-6 sm:p-7 rounded-2xl bg-[#112335]/50 border border-white/10 backdrop-blur-xl border-l-4 border-l-[#ECB365] overflow-hidden space-y-3 shadow-lg">
              {/* Background Decorative Quote Watermark */}
              <Quotes size={80} className="absolute -top-3 -right-2 text-[#ECB365]/10 pointer-events-none" />

              <p className="text-base sm:text-xl font-heading font-medium italic text-white leading-relaxed relative z-10">
                &ldquo;I turn fragmented tools into seamless, automated engines that capture leads 24/7 and eliminate manual workload.&rdquo;
              </p>

              <p className="text-xs sm:text-sm font-sans text-[#B8DBD9]/85 leading-relaxed font-light relative z-10 pt-1">
                Specializing in GoHighLevel, n8n, Zapier, and custom API webhooks, I build scalable systems tailored for real estate, healthcare, and service businesses.
              </p>
            </div>

            {/* Interactive Pillar Selector Tabs */}
            <div className="space-y-3">
              <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#ECB365] block">
                Core Expertise Pillars
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {pillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  const isActive = activePillar === idx;
                  return (
                    <button
                      key={pillar.id}
                      onClick={() => setActivePillar(idx)}
                      className={`p-3.5 rounded-xl text-left border transition-all duration-300 cursor-pointer flex flex-col justify-between h-28 ${isActive
                        ? "bg-[#ECB365]/15 border-[#ECB365] text-white shadow-lg"
                        : "bg-white/[0.02] border-white/10 text-zinc-400 hover:border-white/20 hover:text-white"
                        }`}
                    >
                      <div className="flex items-center justify-between">
                        <Icon size={18} className={isActive ? "text-[#ECB365]" : "text-zinc-400"} />
                        {isActive && <CheckCircle size={14} className="text-[#ECB365]" />}
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
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="p-5 rounded-2xl bg-[#193854]/70 border border-white/15 backdrop-blur-xl space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-sm sm:text-base font-heading font-semibold text-white">
                    {pillars[activePillar].title}
                  </h4>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/10 text-[#B8DBD9]">
                    {pillars[activePillar].tag}
                  </span>
                </div>
                <p className="text-xs font-sans text-[#B8DBD9]/90 leading-relaxed font-light">
                  {pillars[activePillar].description}
                </p>
                <div className="flex flex-wrap gap-2 pt-1 border-t border-white/10">
                  {pillars[activePillar].metrics.map((m, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 text-[10px] font-sans font-medium text-[#ECB365] bg-[#ECB365]/10 border border-[#ECB365]/20 px-2.5 py-0.5 rounded-full"
                    >
                      <GearSix size={12} className="animate-spin" />
                      {m}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Minimalist Metrics Strip with Animated Numbers */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 text-center">
              <div>
                <span className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  <AnimatedNumber value={50} suffix="+" />
                </span>
                <p className="text-[11px] font-sans text-zinc-400 mt-0.5">Automations Built</p>
              </div>
              <div className="border-x border-white/10 px-2">
                <span className="text-2xl sm:text-3xl font-heading font-bold text-[#ECB365]">
                  <AnimatedNumber value={70} suffix="%" />
                </span>
                <p className="text-[11px] font-sans text-zinc-400 mt-0.5 font-medium">Workload Cut</p>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  <AnimatedNumber value={99.9} suffix="%" isDecimal />
                </span>
                <p className="text-[11px] font-sans text-zinc-400 mt-0.5">System Uptime</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-1 flex justify-start">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#ECB365] text-black font-sans font-bold text-xs hover:bg-white transition-all shadow-lg group"
              >
                <span>Book a CRM Automation Audit</span>
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
