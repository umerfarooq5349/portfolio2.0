"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  { value: 1.5, suffix: "+", label: "Years Experience", description: "Building CRM & automation systems" },
  { value: 50, suffix: "+", label: "Automations Built", description: "Across real estate, healthcare & more" },
  { value: 70, suffix: "%", label: "Reduction in Manual Work", description: "Average result for my clients" },
  { value: 3, suffix: "", label: "Industries Served", description: "Real estate, healthcare, service-based" },
];

function AnimatedNumber({ value, suffix, isDecimal }: { value: number; suffix: string; isDecimal?: boolean }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const startTime = performance.now();
    const start = 0;

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(parseFloat((start + (value - start) * eased).toFixed(isDecimal ? 1 : 0)));
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }, [inView, value, isDecimal]);

  return (
    <span ref={ref}>
      {isDecimal ? display.toFixed(1) : display}
      {suffix}
    </span>
  );
}

export function StatsBar() {
  return (
    <section
      aria-label="Key Statistics"
      className="relative z-10 py-16 border-y border-white/10 bg-[var(--background)]"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center text-center px-4 py-6"
            >
              <h3 className="text-4xl md:text-5xl font-heading font-semibold text-[var(--accent)] mb-1">
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  isDecimal={stat.value % 1 !== 0}
                />
              </h3>
              <p className="text-sm md:text-base text-white font-sans font-medium uppercase tracking-widest mb-1">
                {stat.label}
              </p>
              <p className="text-xs text-zinc-500 font-sans hidden md:block">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
