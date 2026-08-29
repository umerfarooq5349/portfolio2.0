"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react";

const benefits = [
  "Instant lead follow-up under 2 minutes — automated",
  "CRM pipeline with visual deal tracking stages",
  "Multi-step email + SMS sequences on autopilot",
  "AI chatbot for 24/7 lead qualification",
  "Real-time reporting and conversion analytics",
];

export function AutomationVisual() {
  return (
    <section
      aria-label="Automation workflow visual"
      className="py-24 bg-[var(--background)] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[var(--accent)] font-sans uppercase tracking-[0.2em] text-sm font-semibold mb-4"
            >
              How It Works
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-heading font-semibold text-white tracking-tight leading-[1.15] mb-6"
            >
              Your Business on{" "}
              <span className="text-[var(--accent)] italic">Autopilot</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-400 font-sans text-base leading-relaxed mb-8"
            >
              Every automation I build follows a battle-tested framework — from the moment a lead enters your funnel to the moment they sign the deal. Nothing slips through the cracks.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-3 mb-10"
            >
              {benefits.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-sans text-zinc-300">
                  <CheckCircle size={16} className="text-[var(--accent)] shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-[var(--accent)] hover:gap-3 transition-all duration-200"
              >
                Explore All Services
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>

          {/* Right — Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glow behind */}
            <div className="absolute inset-0 bg-[var(--accent)]/10 rounded-3xl blur-3xl scale-90" />

            <div className="relative rounded-3xl overflow-hidden border border-white/8 shadow-2xl">
              <Image
                src="/automation-workflow.png"
                alt="Automation workflow diagram showing lead capture through CRM pipeline to booking"
                width={700}
                height={438}
                className="w-full h-auto object-cover"
                priority={false}
              />
              {/* Dark top gradient overlay for blend */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/30 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
