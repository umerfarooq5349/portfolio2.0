"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "@phosphor-icons/react";
import { Card, CardContent } from "@/components/ui/card";

const featured = [
  {
    quote: "Muhammad and his team did an excellent job building and structuring our systems. Everything was handled professionally with great attention to detail. Results matched exactly what was promised.",
    name: "Cilem Knauf",
    role: "Owner, Abnehmen im Liegen Hamburg",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    stars: 5,
  },
  {
    quote: "By building a complete patient growth system inside GoHighLevel, our clinic now captures, nurtures, and tracks every lead seamlessly. The automated condition-specific follow-ups saved our front desk countless hours.",
    name: "Stephen Clarke",
    role: "Founder, ARC Rehabilitation",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    stars: 5,
  },
  {
    quote: "The strategic funnel audit and Practice Hub integration completely plugged our lead leaks. The automated missed appointment SMS recall has taken huge pressure off our front desk.",
    name: "Dr. Posture Doctor",
    role: "Clinical Director, Chiropractic Clinic",
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&auto=format&fit=crop&q=80",
    stars: 5,
  },
];

interface MiniTestimonialsProps {
  heading?: string;
  subheading?: string;
}

export function MiniTestimonials({
  heading = "Feedback on the Work",
  subheading = "Direct feedback from clients scaling with GoHighLevel and automated systems.",
}: MiniTestimonialsProps) {
  return (
    <section
      aria-label="Client testimonials"
      className="py-20 sm:py-24 bg-[var(--background)] relative"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[var(--accent)] font-sans uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold mb-3"
          >
            Verified Client Outcomes
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold text-white tracking-tight"
          >
            {heading}
          </motion.h2>
          {subheading && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-3 text-[var(--ice)]/80 font-sans text-sm sm:text-base max-w-xl mx-auto"
            >
              {subheading}
            </motion.p>
          )}
        </div>

        {/* 3-card modern grid matching the marquee aesthetic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <Card className="h-full flex flex-col justify-between p-6 sm:p-7 rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface)]/75 hover:bg-[var(--surface-elevated)] backdrop-blur-md shadow-none hover:border-[var(--accent)]/40 hover:-translate-y-1 transition-all duration-300 group">
                <CardContent className="p-0 flex flex-col justify-between h-full gap-5">
                  {/* Top: Stars and quote mark */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(t.stars)].map((_, s) => (
                        <Star
                          key={s}
                          size={14}
                          weight="fill"
                          className="text-[var(--accent)] fill-[var(--accent)]"
                        />
                      ))}
                    </div>
                    <span className="text-3xl font-heading text-[var(--accent)]/30 font-serif leading-none select-none">
                      &ldquo;
                    </span>
                  </div>

                  {/* Quote body */}
                  <p className="text-xs sm:text-sm leading-relaxed text-[var(--ice)]/85 font-sans">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Author info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-subtle)]">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[var(--border-subtle)] group-hover:border-[var(--accent)]/50 transition-colors shrink-0">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        fill
                        sizes="40px"
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <h4 className="font-heading font-semibold text-white text-sm truncate">
                        {t.name}
                      </h4>
                      <p className="font-sans text-[11px] sm:text-xs text-[var(--accent)] font-medium truncate">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MiniTestimonials;
