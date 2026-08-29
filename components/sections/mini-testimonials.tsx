"use client";

import { motion } from "framer-motion";
import { Star, Quotes } from "@phosphor-icons/react";
import { GlowCard } from "@/components/ui/spotlight-card";

const featured = [
  {
    quote: "Umer completely transformed our lead management system. Everything is now automated and we never miss follow-ups anymore. Our response time went from hours to under 2 minutes.",
    name: "James Carter",
    role: "Real Estate Agency Owner",
    initial: "JC",
    stars: 5,
  },
  {
    quote: "The automation system he built saved us hours of manual work every single day. Our appointment no-show rate dropped by 60% in the first month. Absolutely worth every penny.",
    name: "Sarah Mitchell",
    role: "Healthcare Clinic Director",
    initial: "SM",
    stars: 5,
  },
  {
    quote: "He built an AI chatbot that now handles 70% of our initial lead qualification. Our team focuses on closing, not chasing. The ROI has been extraordinary.",
    name: "Priya Sharma",
    role: "SaaS Startup Founder",
    initial: "PS",
    stars: 5,
  },
];

interface MiniTestimonialsProps {
  heading?: string;
  subheading?: string;
}

export function MiniTestimonials({
  heading = "What Clients Say",
  subheading = "Real results from real businesses.",
}: MiniTestimonialsProps) {
  return (
    <section
      aria-label="Client testimonials"
      className="py-20 bg-[var(--background)]"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[var(--accent)] font-sans uppercase tracking-[0.2em] text-sm font-semibold mb-3"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-semibold text-white"
          >
            {heading}
          </motion.h2>
          {subheading && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-3 text-zinc-400 font-sans text-base"
            >
              {subheading}
            </motion.p>
          )}
        </div>

        {/* Testimonial cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featured.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <GlowCard customSize glowColor="orange" className="h-full relative p-7 rounded-3xl border border-white/10 bg-[#111111] flex flex-col justify-between hover:border-[var(--accent)]/30 transition-colors duration-300">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4 relative z-10">
                  {[...Array(t.stars)].map((_, s) => (
                    <Star key={s} size={13} className="fill-[var(--accent)] text-[var(--accent)]" />
                  ))}
                </div>

                {/* Quote mark */}
                <span className="text-5xl font-heading text-[var(--accent)]/20 absolute top-5 right-6 font-serif select-none leading-none z-10">
                  &ldquo;
                </span>

                {/* Quote text */}
                <p className="font-sans text-sm text-zinc-300 italic leading-relaxed flex-1 relative z-10">
                  {t.quote}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 border-t border-white/8 pt-5 mt-5 relative z-10">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--accent)]/40 to-[var(--accent)]/10 flex items-center justify-center text-xs font-bold text-[var(--accent)] shrink-0 font-heading">
                    {t.initial}
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-white text-sm">{t.name}</h4>
                    <p className="font-sans text-xs text-zinc-500 mt-0.5">{t.role}</p>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
