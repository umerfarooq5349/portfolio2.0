"use client";

import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/spotlight-card";

const testimonials = [
  { quote: "Umer completely transformed our lead management system. Everything is now automated and we never miss follow-ups anymore.", name: "James Carter", role: "Real Estate Agency Owner" },
  { quote: "The automation system he built saved us hours of manual work every single day. Absolutely worth every penny.", name: "Sarah Mitchell", role: "Healthcare Clinic Director" },
  { quote: "Highly professional and understands CRM systems at a level I haven't seen before. Our pipeline is now fully automated.", name: "David Okafor", role: "Digital Marketing Agency CEO" },
  { quote: "He built an AI chatbot that now handles 70% of our initial lead qualification. Our team focuses on closing, not chasing.", name: "Priya Sharma", role: "SaaS Startup Founder" },
  { quote: "Our appointment booking is fully automated now. No-show rates dropped by 60% in the first month.", name: "Michael Torres", role: "Medical Practice Manager" },
  { quote: "The GoHighLevel setup Umer delivered was far beyond what I expected. Incredibly clean and scalable architecture.", name: "Emma Wilson", role: "Agency Owner" },
  { quote: "Fast delivery, zero errors, and the automation has been running flawlessly for 6 months straight.", name: "Liam Johnson", role: "E-commerce Brand Owner" },
  { quote: "Umer understood exactly what our business needed without us having to explain it three times. Rare skill.", name: "Fatima Al-Hassan", role: "Service Business Owner" },
  { quote: "We went from manually following up with 200+ leads a week to it all happening on autopilot. Life-changing.", name: "Chris Nguyen", role: "Real Estate Investor" },
];

const row1 = [...testimonials.slice(0, 3), ...testimonials.slice(0, 3)];
const row2 = [...testimonials.slice(3, 6), ...testimonials.slice(3, 6)];
const row3 = [...testimonials.slice(6, 9), ...testimonials.slice(6, 9)];

export function Testimonials() {
  return (
    <section aria-label="Client Testimonials" className="py-32 bg-[var(--background)] overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[var(--accent)] font-sans uppercase tracking-[0.2em] text-sm font-semibold mb-4"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading font-semibold text-white leading-[1.1] max-w-3xl mx-auto"
          >
            What{" "}
            <span className="text-[var(--accent)] italic">Clients</span>{" "}
            Say
          </motion.h2>
        </div>
      </div>

      <div className="relative mt-4 flex flex-col gap-5">
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />
        
        {/* Row 1 → */}
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          className="flex gap-5 w-max"
        >
          {row1.map((t, i) => <TestimonialCard key={i} testimonial={t} />)}
        </motion.div>

        {/* Row 2 ← */}
        <motion.div 
          animate={{ x: ["-50%", "0%"] }}
          transition={{ ease: "linear", duration: 45, repeat: Infinity }}
          className="flex gap-5 w-max"
        >
          {row2.map((t, i) => <TestimonialCard key={i} testimonial={t} />)}
        </motion.div>

        {/* Row 3 → */}
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 38, repeat: Infinity }}
          className="flex gap-5 w-max"
        >
          {row3.map((t, i) => <TestimonialCard key={i} testimonial={t} />)}
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: { quote: string; name: string; role: string } }) {
  return (
    <GlowCard customSize={true} glowColor="orange" className="w-[380px] md:w-[460px] relative p-7 rounded-3xl bg-[var(--surface)] border border-[var(--border-subtle)] flex flex-col justify-between shrink-0 hover:border-[var(--accent)]/40 transition-colors duration-300 shadow-lg">
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
