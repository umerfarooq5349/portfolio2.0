"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ArrowRight, CheckCircle, Lightning } from "@phosphor-icons/react";
import Link from "next/link";

const highlights = [
  "Focused on results, not just setup",
  "Clean, scalable automation architecture",
  "Deep understanding of CRM workflows",
  "Real business experience across industries",
  "Systems that save time & increase revenue",
];

export function AboutSection() {
  return (
    <section
      aria-label="About Muhammad Umer Farooq"
      className="py-24 relative bg-[var(--background)] overflow-hidden border-t border-[var(--border-subtle)]"
    >
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--accent)]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-[var(--surface)] border border-[var(--border-subtle)]">
              {/* Automation visual */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8">
                <div className="w-20 h-20 rounded-2xl bg-[var(--accent)]/10 border border-[var(--accent)]/30 flex items-center justify-center">
                  <Lightning size={36} className="text-[var(--accent)]" />
                </div>
                <div className="space-y-3 w-full">
                  {["Lead Captured → CRM", "CRM → Email Sequence", "AI Chatbot → Qualified Lead", "Booking → Confirmation SMS"].map((flow, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15, duration: 0.5 }}
                      className="flex items-center gap-3 bg-[var(--surface-elevated)] rounded-xl px-4 py-3 border border-[var(--border-subtle)]"
                    >
                      <span className="w-2 h-2 rounded-full bg-[var(--emerald)] shrink-0 animate-pulse" />
                      <span className="text-xs font-sans text-[var(--ice)]">{flow}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-[var(--surface)] to-transparent" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <p className="text-[var(--accent)] font-sans uppercase tracking-[0.2em] text-sm font-semibold mb-4">
              About Me
            </p>
            <h2 className="text-3xl md:text-5xl font-heading font-semibold text-white leading-tight mb-6">
              I Replace Manual Work With{" "}
              <span className="text-[var(--accent)] italic font-medium">Intelligent Automation</span>{" "}
              That Works 24/7.
            </h2>
            <div className="space-y-5 text-[var(--ice)]/80 font-sans text-base leading-relaxed">
              <p>
                I&apos;m <strong className="text-white">Muhammad Umer Farooq</strong>, a CRM &amp; Automation Expert with 1.5+ years of experience building smart, scalable business systems.
              </p>
              <p>
                I specialize in designing automation workflows that reduce manual work, improve lead handling, and increase overall business efficiency. I&apos;ve worked with <strong className="text-white">real estate, healthcare, and service-based businesses</strong> — helping them streamline operations and grow faster.
              </p>
            </div>

            <ul className="mt-8 space-y-3">
              {highlights.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                  className="flex items-center gap-3 text-sm font-sans text-[var(--ice)]"
                >
                  <CheckCircle size={16} className="text-[var(--accent)] shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link href="/about">
                <MagneticButton className="inline-flex items-center space-x-2 bg-white text-black px-8 py-4 rounded-full font-sans font-semibold text-sm hover:bg-[var(--accent)] transition-colors cursor-pointer">
                  <span>More About Me</span>
                  <ArrowRight size={16} />
                </MagneticButton>
              </Link>
              <Link href="/contact">
                <button className="inline-flex items-center gap-2 text-sm font-sans text-[var(--ice)] hover:text-white transition-colors px-6 py-4 rounded-full border border-[var(--border-subtle)] hover:border-white/40 cursor-pointer bg-[var(--surface)]/50">
                  Start a Project
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
