"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";
import Link from "next/link";
import { CalendarCheck, ArrowRight } from "@phosphor-icons/react";

export function ContactCTA() {
  return (
    <section aria-label="Call to Action" className="py-32 px-6 bg-[var(--background)]">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1e1e1e] to-[#141414] border border-white/10 p-8 sm:p-12 md:p-20 text-center"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--accent)/10_0%,_transparent_70%)] pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[var(--accent)] font-sans uppercase tracking-[0.2em] text-sm font-semibold mb-6"
            >
              Ready to Automate?
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-heading font-semibold text-white leading-[1.1] mb-6"
            >
              Let&apos;s Eliminate Manual Work &amp;{" "}
              <span className="text-[var(--accent)] italic">Scale Your Business.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-400 font-sans text-lg mb-10 max-w-xl mx-auto"
            >
              Book a consultation today. We&apos;ll map out exactly how to automate your business operations, improve your systems, and scale with powerful CRM automation.
            </motion.p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <MagneticButton className="inline-flex items-center gap-2 bg-[var(--accent)] text-black px-10 py-5 rounded-full font-sans font-semibold text-sm hover:opacity-90 transition-all tracking-wide cursor-pointer">
                  <CalendarCheck size={18} />
                  Start a Project
                </MagneticButton>
              </Link>
              <Link href="/services">
                <button className="inline-flex items-center gap-2 text-sm font-sans text-zinc-300 hover:text-white transition-colors px-8 py-5 rounded-full border border-white/10 hover:border-white/30 cursor-pointer">
                  <span>View My Services</span>
                  <ArrowRight size={14} />
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
