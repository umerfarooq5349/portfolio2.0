"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee-01-utils/marquee";
import { Star } from "@phosphor-icons/react";

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  stars?: number;
}

const testimonials: TestimonialItem[] = [
  {
    quote: "Muhammad and his team did an excellent job building and structuring our systems. Everything was handled professionally with great attention to detail. Communication was clear, timelines were respected, and results matched exactly what was promised.",
    name: "Cilem Knauf",
    role: "Owner, Abnehmen im Liegen Hamburg",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    stars: 5,
  },
  {
    quote: "By building a complete patient growth system inside GoHighLevel, our clinic now captures, nurtures, and tracks every lead seamlessly. The automated condition-specific follow-ups have saved our front desk countless hours.",
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
  {
    quote: "Cleansing tens of thousands of contacts and setting up automated Fathom AI meeting notes into Slack was transformative for our coaching business. Zero broken automations since.",
    name: "David Okafor",
    role: "CEO, High-Ticket Education Academy",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    stars: 5,
  },
  {
    quote: "Our cold outbound infrastructure on GoHighLevel and Instantly generated a consistent 65%+ open rate and filled our B2B pipeline within weeks.",
    name: "Liam Johnson",
    role: "Managing Director, eLearning Agency",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    stars: 5,
  },
  {
    quote: "The intake-to-pipeline automation cut our agency client onboarding time from a week down to under 24 hours. The automated asset collection is flawless.",
    name: "Sarah Mitchell",
    role: "Operations Lead, Digital Agency",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    stars: 5,
  },
  {
    quote: "Umer understands CRM architecture and API webhooks at an elite level. Our GoHighLevel pipelines run 24/7 without a glitch.",
    name: "Michael Torres",
    role: "Founder, Growth Consulting",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
    stars: 5,
  },
  {
    quote: "Fast delivery, zero errors, and clean systems. The best automation specialist we have partnered with across all client accounts.",
    name: "Emma Wilson",
    role: "Partner, Agency Solutions",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    stars: 5,
  },
  {
    quote: "The multi-channel unified inbox and automated follow-ups gave our clinic complete peace of mind. Outstanding work on n8n webhook routing.",
    name: "Fatima Al-Hassan",
    role: "Wellness Clinic Director",
    avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=150&auto=format&fit=crop&q=80",
    stars: 5,
  },
];

const row1 = testimonials.slice(0, 5);
const row2 = testimonials.slice(4);

export function Testimonials({ showHeader = true }: { showHeader?: boolean } = {}) {
  return (
    <section
      aria-label="Client Testimonials"
      className={
        showHeader
          ? "py-24 sm:py-32 bg-[var(--background)] overflow-hidden relative"
          : "pb-24 pt-4 bg-[var(--background)] overflow-hidden relative"
      }
    >
      {showHeader && (
        <div className="max-w-5xl mx-auto px-6 mb-14 md:mb-16">
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[var(--accent)] font-sans uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold mb-3"
            >
              Proven Results &amp; Real Feedback
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl font-heading font-semibold text-white leading-[1.1] max-w-3xl mx-auto"
            >
              What <span className="text-[var(--accent)] italic">Clients</span> Say
            </motion.h2>
          </div>
        </div>
      )}

      {/* Modern 2-row infinite marquee */}
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-4 sm:gap-5">
        {/* Row 1 — Left to Right */}
        <Marquee pauseOnHover className="[--duration:36s] py-1">
          {row1.map((item, idx) => (
            <TestimonialMarqueeCard key={`r1-${idx}`} item={item} />
          ))}
        </Marquee>

        {/* Row 2 — Right to Left */}
        <Marquee reverse pauseOnHover className="[--duration:38s] py-1">
          {row2.map((item, idx) => (
            <TestimonialMarqueeCard key={`r2-${idx}`} item={item} />
          ))}
        </Marquee>

        {/* Side gradient edge fades */}
        <div className="from-[var(--background)] pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r to-transparent z-10" />
        <div className="from-[var(--background)] pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l to-transparent z-10" />
      </div>
    </section>
  );
}

export function TestimonialMarqueeCard({ item }: { item: TestimonialItem }) {
  return (
    <Card className="relative h-full w-[310px] sm:w-[380px] md:w-[420px] cursor-pointer overflow-hidden border border-[var(--border-subtle)] bg-[var(--surface)]/75 hover:bg-[var(--surface-elevated)] backdrop-blur-md shadow-none p-5 sm:p-6 rounded-2xl sm:rounded-3xl transition-all duration-300 hover:border-[var(--accent)]/40 hover:-translate-y-1 group shrink-0">
      <CardContent className="p-0 flex flex-col justify-between h-full gap-4">
        {/* Top: Stars and quote mark */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {[...Array(item.stars || 5)].map((_, i) => (
              <Star
                key={i}
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
        <p className="text-xs sm:text-sm leading-relaxed text-[var(--ice)]/85 line-clamp-3 font-sans">
          &ldquo;{item.quote}&rdquo;
        </p>

        {/* Author info */}
        <div className="flex items-center gap-3 pt-3 border-t border-[var(--border-subtle)]">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[var(--border-subtle)] group-hover:border-[var(--accent)]/50 transition-colors shrink-0">
            <Image
              src={item.avatar}
              alt={item.name}
              fill
              sizes="40px"
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="flex flex-col min-w-0">
            <h4 className="font-heading font-semibold text-white text-sm truncate">
              {item.name}
            </h4>
            <p className="font-sans text-[11px] sm:text-xs text-[var(--accent)] font-medium truncate">
              {item.role}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Testimonials;
