"use client";

import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/spotlight-card";

const testimonials = [
  { quote: "Muhammad and his team did an excellent job building and structuring our systems. Everything was handled professionally with great attention to detail. Communication was clear, timelines were respected, and results matched exactly what was promised.", name: "Cilem Knauf", role: "Owner, Abnehmen im Liegen Hamburg" },
  { quote: "By building a complete patient growth system inside GoHighLevel, our clinic now captures, nurtures, and tracks every lead seamlessly. The automated condition-specific follow-ups have saved our front desk countless hours.", name: "Stephen Clarke", role: "Founder & Physiotherapist, ARC Rehabilitation" },
  { quote: "The strategic funnel audit and Practice Hub integration completely plugged our lead leaks. The automated missed appointment SMS recall has taken huge pressure off our front desk.", name: "Dr. Posture Doctor", role: "Clinical Director, Busselton Chiropractic Clinic" },
  { quote: "Cleansing tens of thousands of contacts and setting up automated Fathom AI meeting notes into Slack was transformative for our coaching business. Zero broken automations since.", name: "David Okafor", role: "CEO, High-Ticket Education Academy" },
  { quote: "Our cold outbound infrastructure on GoHighLevel and Instantly generated a consistent 65%+ open rate and filled our B2B pipeline within weeks.", name: "Liam Johnson", role: "Managing Director, eLearning Agency" },
  { quote: "The intake-to-pipeline automation cut our agency client onboarding time from a week down to under 24 hours. The automated asset collection is flawless.", name: "Sarah Mitchell", role: "Operations Lead, Digital Agency" },
  { quote: "Umer understands CRM architecture and API webhooks at an elite level. Our GoHighLevel pipelines run 24/7 without a glitch.", name: "Michael Torres", role: "Founder, Growth Consulting" },
  { quote: "Fast delivery, zero errors, and clean systems. The best automation specialist we have partnered with.", name: "Emma Wilson", role: "Partner, Agency Solutions" },
  { quote: "The multi-channel unified inbox and automated follow-ups gave our clinic complete peace of mind.", name: "Fatima Al-Hassan", role: "Wellness Clinic Director" },
];

const row1 = [...testimonials.slice(0, 3), ...testimonials.slice(0, 3)];
const row2 = [...testimonials.slice(3, 6), ...testimonials.slice(3, 6)];
const row3 = [...testimonials.slice(6, 9), ...testimonials.slice(6, 9)];

export function Testimonials({ showHeader = true }: { showHeader?: boolean } = {}) {
  return (
    <section aria-label="Client Testimonials" className={showHeader ? "py-24 sm:py-32 bg-[var(--background)] overflow-hidden" : "pb-24 pt-4 bg-[var(--background)] overflow-hidden"}>
      {showHeader && (
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14 md:mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl font-heading font-semibold text-white leading-[1.1] max-w-3xl mx-auto"
            >
              What{" "}
              <span className="text-[var(--accent)] italic">Clients</span>{" "}
              Say
            </motion.h2>
          </div>
        </div>
      )}

      <div className="relative mt-4 flex flex-col gap-5">
        <div className="absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />
        
        {/* Row 1 → */}
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          className="flex gap-4 sm:gap-5 w-max"
        >
          {row1.map((t, i) => <TestimonialCard key={i} testimonial={t} />)}
        </motion.div>

        {/* Row 2 ← */}
        <motion.div 
          animate={{ x: ["-50%", "0%"] }}
          transition={{ ease: "linear", duration: 45, repeat: Infinity }}
          className="flex gap-4 sm:gap-5 w-max"
        >
          {row2.map((t, i) => <TestimonialCard key={i} testimonial={t} />)}
        </motion.div>

        {/* Row 3 → (Desktop & Tablet) */}
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 38, repeat: Infinity }}
          className="hidden md:flex gap-4 sm:gap-5 w-max"
        >
          {row3.map((t, i) => <TestimonialCard key={i} testimonial={t} />)}
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: { quote: string; name: string; role: string } }) {
  return (
    <GlowCard customSize={true} glowColor="orange" className="w-[260px] sm:w-[350px] md:w-[420px] relative p-4 sm:p-7 rounded-3xl bg-[var(--surface)] border border-[var(--border-subtle)] flex flex-col justify-between shrink-0 hover:border-[var(--accent)]/40 transition-colors duration-300 shadow-lg">
      <span className="text-5xl font-heading text-[var(--accent)]/30 absolute top-5 left-6 font-serif select-none z-10">
        &ldquo;
      </span>
      <p className="font-sans text-sm text-[var(--ice)]/90 relative z-10 italic mb-6 mt-5 leading-relaxed line-clamp-3">
        {testimonial.quote}
      </p>
      <div className="flex items-center gap-3 border-t border-[var(--border-subtle)] pt-4 relative z-10">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--accent)]/30 to-[var(--accent)]/10 shrink-0 flex items-center justify-center text-xs font-bold text-[var(--accent)]">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-heading font-semibold text-white text-sm">{testimonial.name}</h4>
          <p className="font-sans text-xs text-[var(--ice)]/65 mt-0.5">{testimonial.role}</p>
        </div>
      </div>
    </GlowCard>
  );
}
