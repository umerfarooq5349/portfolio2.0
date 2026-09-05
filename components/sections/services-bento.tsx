"use client";

import { motion } from "framer-motion";
import { Gear, Lightning, Funnel, Users, Envelope, Robot, CalendarCheck, SquaresFour, Globe } from "@phosphor-icons/react";
import { GlowCard } from "@/components/ui/spotlight-card";

const services = [
  {
    icon: <Gear size={28} />,
    title: "CRM Setup (GoHighLevel)",
    description: "Complete setup of your CRM system tailored to your exact business workflow. From pipelines to automations, I build it end-to-end.",
    colSpan: "md:col-span-2 md:row-span-2",
    featured: true,
  },
  {
    icon: <Lightning size={24} />,
    title: "Workflow Automation",
    description: "Automating repetitive business tasks using GoHighLevel, n8n, and Zapier to save hours every day.",
    colSpan: "md:col-span-1",
    featured: false,
  },
  {
    icon: <Funnel size={24} />,
    title: "Funnel Building",
    description: "High-converting sales funnels designed to generate and nurture leads on autopilot.",
    colSpan: "md:col-span-1",
    featured: false,
  },
  {
    icon: <Users size={24} />,
    title: "Lead Management Systems",
    description: "Organized lead tracking to improve conversions and follow-up rates significantly.",
    colSpan: "md:col-span-1",
    featured: false,
  },
  {
    icon: <Envelope size={24} />,
    title: "SMS & Email Automation",
    description: "Automated communication systems for client engagement, nurturing, and retention.",
    colSpan: "md:col-span-1",
    featured: false,
  },
  {
    icon: <Robot size={28} />,
    title: "AI Chatbots",
    description: "Smart AI-powered chat systems for lead qualification and 24/7 customer support, integrated directly into your CRM.",
    colSpan: "md:col-span-2",
    featured: true,
  },
  {
    icon: <CalendarCheck size={24} />,
    title: "Appointment Booking Systems",
    description: "Automated booking flows to reduce no-shows and fill your calendar without manual work.",
    colSpan: "md:col-span-1",
    featured: false,
  },
  {
    icon: <SquaresFour size={24} />,
    title: "Pipeline Setup",
    description: "Custom sales pipelines that match your business process for full deal visibility.",
    colSpan: "md:col-span-1",
    featured: false,
  },
  {
    icon: <Globe size={24} />,
    title: "White Label GHL & SaaS Setup",
    description: "Fully branded white-label GoHighLevel SaaS platforms for agencies and businesses ready to scale.",
    colSpan: "md:col-span-2",
    featured: false,
  },
];

export function ServicesBento({ showHeader = true }: { showHeader?: boolean } = {}) {
  return (
    <section aria-label="Services" className={showHeader ? "py-24 sm:py-32 bg-[var(--background)]" : "pb-24 pt-4 bg-[var(--background)]"}>
      <div className="max-w-5xl mx-auto px-6">
        {showHeader && (
          <div className="mb-14 md:mb-20 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[var(--accent)] font-sans uppercase tracking-[0.2em] text-sm font-semibold mb-3"
            >
              What I Do
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl font-heading font-semibold text-white leading-[1.1] max-w-3xl mx-auto"
            >
              I transform manual processes into{" "}
              <span className="text-[var(--accent)] italic">intelligent automation.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 sm:mt-6 text-[var(--ice)]/80 font-sans text-sm sm:text-lg max-w-2xl mx-auto"
            >
              Every service is designed with one goal: replace repetitive manual tasks with systems that work 24/7.
            </motion.p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`${service.colSpan} h-full`}
            >
              <GlowCard 
                customSize={true} 
                glowColor="orange"
                className={`w-full h-full relative group p-6 sm:p-8 rounded-3xl border flex flex-col justify-between cursor-default transition-all duration-300 ${service.featured
                  ? "bg-[var(--surface-elevated)] border-[var(--accent)]/30 hover:border-[var(--accent)]/60 shadow-xl"
                  : "bg-[var(--surface)] border-[var(--border-subtle)] hover:border-[var(--accent)]/40 shadow-lg"
                }`}
              >
              {service.featured && (
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 to-transparent pointer-events-none rounded-3xl" />
              )}
              <div className={`mb-4 relative z-10 ${service.featured ? "text-[var(--accent)]" : "text-[var(--ice)]/70 group-hover:text-[var(--accent)] transition-colors"}`}>
                {service.icon}
              </div>
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-heading font-semibold text-white mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-[var(--ice)]/75 font-sans text-xs sm:text-sm leading-relaxed">{service.description}</p>
              </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
