"use client";

import { motion } from "framer-motion";
import { StatCard } from "@/components/ui/card-10";
import { ArrowUpRight, ShieldCheck, Zap, CheckCircle2 } from "lucide-react";

export function StatsBar() {
  return (
    <section
      aria-label="Verified Performance Benchmarks & Metrics"
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
              Verified Operational Track Record
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight mt-1">
              Real-World Automation Metrics
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[var(--ice)]/70 max-w-sm font-sans">
            Verified implementation benchmarks achieved across live GoHighLevel, n8n, and custom API pipelines.
          </p>
        </motion.div>

        {/* Verified Static Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              title="Automation Workflows Built"
              value="50+"
              changeDescription="production deployments"
              icon={<CheckCircle2 className="h-4 w-4 text-emerald-400" />}
              className="bg-[var(--surface)] border-[var(--border-subtle)] text-white shadow-xl hover:border-[var(--accent)]/40 transition-colors"
            />
            <StatCard
              title="Faster Lead Response"
              prefix="Up to "
              value="85%"
              changeDescription="sub-2 min auto reply"
              icon={<Zap className="h-4 w-4 text-emerald-400" />}
              className="bg-[var(--surface)] border-[var(--border-subtle)] text-white shadow-xl hover:border-[var(--accent)]/40 transition-colors"
            />
            <StatCard
              title="System Uptime Reliability"
              value="99.9%"
              changeDescription="active API & webhook monitoring"
              icon={<ShieldCheck className="h-4 w-4 text-[var(--accent)]" />}
              className="bg-[var(--surface)] border-[var(--border-subtle)] text-white shadow-xl hover:border-[var(--accent)]/40 transition-colors"
            />
            <StatCard
              title="Custom CRM Architecture"
              value="100%"
              changeDescription="tailored business workflows"
              icon={<ArrowUpRight className="h-4 w-4 text-emerald-400" />}
              className="bg-[var(--surface)] border-[var(--border-subtle)] text-white shadow-xl hover:border-[var(--accent)]/40 transition-colors"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default StatsBar;
