"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, House, FirstAid, Envelope, Robot, Rocket, Gear } from "@phosphor-icons/react";
import Link from "next/link";
import { GlowCard } from "@/components/ui/spotlight-card";

const projects = [
  {
    id: 1,
    title: "Real Estate Lead Automation",
    category: "CRM Automation",
    icon: <House size={28} className="text-[var(--accent)]" />,
    tags: ["GoHighLevel", "n8n", "SMS Automation"],
    result: "85% faster follow-up",
    description: "End-to-end automated lead capture & follow-up system for a real estate agency. Leads from Facebook Ads instantly entered the CRM, triggered personalized SMS/email sequences, and notified agents, all without manual work.",
  },
  {
    id: 2,
    title: "Healthcare Appointment System",
    category: "Booking Automation",
    icon: <FirstAid size={28} className="text-[var(--accent)]" />,
    tags: ["GoHighLevel", "Zapier", "Calendar"],
    result: "60% fewer no-shows",
    description: "Fully automated appointment booking and reminder system for a healthcare clinic. Patients receive instant confirmations, 24h reminders, and post-visit follow-ups through automated SMS and email workflows.",
  },
  {
    id: 3,
    title: "Multi-Step Nurture Campaign",
    category: "Email & SMS Automation",
    icon: <Envelope size={28} className="text-[var(--accent)]" />,
    tags: ["GoHighLevel", "Email", "SMS"],
    result: "3x engagement rate",
    description: "A sophisticated multi-step email + SMS nurturing workflow designed to convert cold leads into warm prospects. 14-day drip campaign with dynamic content personalization based on user behavior.",
  },
  {
    id: 4,
    title: "AI Chatbot for Lead Qualification",
    category: "AI Automation",
    icon: <Robot size={28} className="text-[var(--accent)]" />,
    tags: ["AI Chatbot", "GoHighLevel", "API"],
    result: "40% more qualified leads",
    description: "Custom AI-powered chatbot integrated into a service business's website. The bot qualifies leads, answers FAQs, and books discovery calls directly, all without human intervention.",
  },
  {
    id: 5,
    title: "White Label GHL SaaS Setup",
    category: "SaaS & White Label",
    icon: <Rocket size={28} className="text-[var(--accent)]" />,
    tags: ["GoHighLevel", "White Label", "SaaS"],
    result: "Agency launched in 7 days",
    description: "Complete white-label GoHighLevel SaaS platform setup for a digital marketing agency. Custom branding, sub-account management, automated onboarding flows, and reseller pricing configuration.",
  },
  {
    id: 6,
    title: "Service Business Full Automation",
    category: "End-to-End CRM",
    icon: <Gear size={28} className="text-[var(--accent)]" />,
    tags: ["n8n", "Zapier", "GoHighLevel"],
    result: "70% less manual work",
    description: "Complete operational automation for a service-based business: lead intake, CRM pipeline, invoice reminders, client follow-ups, and review requests, all connected and automated.",
  },
];

export function ProjectsShowcase({ showHeader = true }: { showHeader?: boolean } = {}) {
  return (
    <section aria-label="Portfolio Case Studies" className={showHeader ? "py-24 sm:py-32 bg-[var(--background)]" : "pb-24 pt-4 bg-[var(--background)]"}>
      <div className="max-w-5xl mx-auto px-6">
        {showHeader && (
          <div className="text-center mb-16 md:mb-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[var(--accent)] font-sans uppercase tracking-[0.2em] text-sm font-semibold mb-4"
            >
              Case Studies
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl font-heading font-semibold text-white leading-[1.1] max-w-3xl mx-auto"
            >
              Real Automations.{" "}
              <span className="text-[var(--accent)] italic">Real Results.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 sm:mt-6 text-[var(--ice)]/80 font-sans text-sm sm:text-base max-w-xl mx-auto"
            >
              Examples of automation systems I&apos;ve built for businesses across industries.
            </motion.p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={`/projects/${project.id}`} className="block h-full">
                <GlowCard customSize={true} glowColor="orange" className="group flex flex-col h-full w-full p-6 sm:p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border-subtle)] hover:border-[var(--accent)]/40 hover:bg-[var(--surface-elevated)] transition-all duration-300 shadow-lg">
                {/* Header */}
                <div className="flex items-start justify-between mb-6 relative z-10">
                  {project.icon}
                  <ArrowUpRight size={20} className="text-[var(--ice)]/60 group-hover:text-[var(--accent)] transition-colors mt-1" />
                </div>

                {/* Category */}
                <p className="text-[var(--accent)] font-sans text-xs tracking-widest uppercase mb-2 relative z-10 font-medium">
                  {project.category}
                </p>

                {/* Title */}
                <h3 className="text-xl font-heading font-semibold text-white mb-3 group-hover:text-[var(--accent)] transition-colors leading-tight relative z-10">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-[var(--ice)]/75 font-sans text-sm leading-relaxed mb-6 flex-1 line-clamp-3 relative z-10">
                  {project.description}
                </p>

                {/* Result badge */}
                <div className="mb-4 relative z-10">
                  <span className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {project.result}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full border border-[var(--border-subtle)] text-xs font-sans text-[var(--ice)] bg-[var(--surface-elevated)]">
                      {tag}
                    </span>
                  ))}
                </div>
                </GlowCard>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link href="/projects" className="inline-flex items-center space-x-2 text-[var(--ice)]/80 hover:text-[var(--accent)] transition-colors pb-1 border-b border-[var(--border-subtle)] hover:border-[var(--accent)]/50">
            <span className="font-sans text-sm tracking-widest uppercase">View All Case Studies</span>
            <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
