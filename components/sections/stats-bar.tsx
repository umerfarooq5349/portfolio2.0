"use client";

import { motion } from "framer-motion";
import { StatisticCard2 } from "@/components/ui/statistics-card-2";
import { StatCard } from "@/components/ui/card-10";
import { ArrowUpRight, ArrowDownRight, ShieldCheck } from "lucide-react";

export function StatsBar() {
  return (
    <section
      aria-label="Key Statistics & Performance Metrics"
      className="relative z-20 py-12 lg:py-16 border-y border-white/10 bg-[var(--background)] space-y-12"
    >
      <div className="max-w-6xl mx-auto px-6">
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
              Performance Snapshot
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight mt-1">
              Impact &amp; System Analytics
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[var(--ice)]/70 max-w-xs font-sans">
            Real-time automation metrics &amp; operational efficiency benchmarks delivered for client workflows.
          </p>
        </motion.div>

        {/* StatisticCard2 Component Grid
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <StatisticCard2 />
        </motion.div> */}

        {/* StatCard (card-10) Interactive Animated Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 pt-10 border-t border-white/10"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <StatCard
              title="Automated Lead Response Rate"
              value={95}
              change={32}
              changeDescription="last month"
              icon={<ArrowUpRight className="h-4 w-4 text-emerald-400" />}
              className="bg-[#112335]/70 border-white/10 text-white shadow-xl hover:border-[var(--accent)]/30 transition-colors"
            />
            <StatCard
              title="Manual Data Entry Time"
              value={15}
              change={-70}
              changeDescription="since automation"
              icon={<ArrowDownRight className="h-4 w-4 text-emerald-400" />}
              className="bg-[#112335]/70 border-white/10 text-white shadow-xl hover:border-[var(--accent)]/30 transition-colors"
            />
            <StatCard
              title="Webhook System Reliability"
              value={99}
              change={0.9}
              changeDescription="last 30 days"
              icon={<ShieldCheck className="h-4 w-4 text-[var(--accent)]" />}
              className="bg-[#112335]/70 border-white/10 text-white shadow-xl hover:border-[var(--accent)]/30 transition-colors"
            />
            <StatCard
              title="Webhook System Reliability"
              value={99}
              change={0.9}
              changeDescription="last 30 days"
              icon={<ShieldCheck className="h-4 w-4 text-[var(--accent)]" />}
              className="bg-[#112335]/70 border-white/10 text-white shadow-xl hover:border-[var(--accent)]/30 transition-colors"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default StatsBar;

