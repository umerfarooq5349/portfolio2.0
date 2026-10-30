"use client";

import { motion } from "framer-motion";
import { StatCard } from "@/components/ui/card-10";
import { Layers, ShieldCheck, Cpu, CheckCircle2 } from "lucide-react";

export function StatsBar() {
  return (
    <section
      aria-label="Built Around Real Business Workflows"
      className="relative z-20 py-12 lg:py-16 border-y border-[var(--border-subtle)] bg-[var(--background)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div>
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-[var(--accent)]">
              Quick Proof
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight mt-1">
              Built Around Real Business Workflows
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[var(--ice)]/80 max-w-md font-sans">
            From lead capture and multi-channel follow-up to appointment reminders and CRM cleanup, I build systems around how your business actually works.
          </p>
        </motion.div>

        {/* Verified Proof Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              title="Workflows Built"
              value="50+"
              changeDescription="production automations delivered"
              icon={<CheckCircle2 className="h-4 w-4 text-emerald-400" />}
              className="bg-[var(--surface)] border-[var(--border-subtle)] text-white shadow-xl hover:border-[var(--accent)]/40 transition-colors"
            />
            <StatCard
              title="Core Stack Implementation"
              value="GHL & n8n"
              changeDescription="native CRM & webhook orchestration"
              icon={<Cpu className="h-4 w-4 text-[var(--accent)]" />}
              className="bg-[var(--surface)] border-[var(--border-subtle)] text-white shadow-xl hover:border-[var(--accent)]/40 transition-colors"
            />
            <StatCard
              title="Conditional Follow-Up"
              value="Multi-Step"
              changeDescription="timed sequences with human handoff"
              icon={<Layers className="h-4 w-4 text-emerald-400" />}
              className="bg-[var(--surface)] border-[var(--border-subtle)] text-white shadow-xl hover:border-[var(--accent)]/40 transition-colors"
            />
            <StatCard
              title="End-to-End Integration"
              value="Synced"
              changeDescription="forms, calendars, CRM & messaging"
              icon={<ShieldCheck className="h-4 w-4 text-emerald-400" />}
              className="bg-[var(--surface)] border-[var(--border-subtle)] text-white shadow-xl hover:border-[var(--accent)]/40 transition-colors"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default StatsBar;
