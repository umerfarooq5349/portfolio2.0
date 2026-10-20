"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FirstAid, Robot, Funnel, RocketLaunch, EnvelopeSimple, GearSix } from "@phosphor-icons/react";
import Link from "next/link";
import { GlowCard } from "@/components/ui/spotlight-card";

const projects = [
  {
    id: 1,
    slug: "arc-rehabilitation-pilates",
    title: "ARC Rehabilitation & Pilates",
    category: "Healthcare & Clinic Systems",
    icon: <FirstAid size={28} weight="duotone" className="text-[var(--accent)]" />,
    tags: ["GoHighLevel", "Facebook Lead Ads", "Automated Workflows"],
    result: "285+ Leads Managed",
    description: "Complete patient acquisition system for a premier Irish clinic. Centralized GHL CRM, direct Facebook Lead Ads integration into a 4-stage pipeline, 11 condition-specific workflows, and automated PDF pack delivery.",
  },
  {
    id: 2,
    slug: "abnehmen-im-liegen-hamburg",
    title: "Abnehmen im Liegen Hamburg",
    category: "AI & Multi-Channel CRM",
    icon: <Robot size={28} weight="duotone" className="text-[var(--accent)]" />,
    tags: ["GoHighLevel", "LinaBot AI", "WhatsApp API"],
    result: "24/7 Instant AI Responses",
    description: "24/7 intelligent patient system for a German wellness clinic. Built LinaBot custom AI assistant, unified WhatsApp Business & email into one inbox, and automated appointment reminders.",
  },
  {
    id: 3,
    slug: "the-posture-doctor",
    title: "The Posture Doctor",
    category: "Funnel CRO & Healthcare EHR",
    icon: <Funnel size={28} weight="duotone" className="text-[var(--accent)]" />,
    tags: ["GoHighLevel", "Practice Hub", "Funnel CRO"],
    result: "Automated SMS Recall Engine",
    description: "Audited and rebuilt a chiropractic clinic's patient funnel ahead of paid ads, fixing mobile UX and lead capture. Integrated Practice Hub EHR with a 3-step automated SMS recall sequence with kill-switch safeguards.",
  },
  {
    id: 4,
    slug: "coaching-ecosystem-rebuild",
    title: "Multi-Offer Coaching Ecosystem",
    category: "High-Volume CRM Architecture",
    icon: <RocketLaunch size={28} weight="duotone" className="text-[var(--accent)]" />,
    tags: ["GoHighLevel", "n8n", "Fathom AI", "Slack API"],
    result: "10,000+ Contacts Cleansed",
    description: "Rebuilt and re-segmented a large-scale CRM database of tens of thousands of contacts. Automated course delivery, membership onboarding, and created a Fathom AI meeting notes to Slack pipeline.",
  },
  {
    id: 5,
    slug: "elearning-agency-outbound",
    title: "B2B Outbound Engine",
    category: "B2B Lead Generation",
    icon: <EnvelopeSimple size={28} weight="duotone" className="text-[var(--accent)]" />,
    tags: ["GoHighLevel", "Instantly.ai", "Cold Email"],
    result: "65%+ Cold Open Rate",
    description: "Deployed white-labeled GoHighLevel and Instantly.ai outbound architecture for an eLearning agency. Configured DNS warming, multi-week cold sequences, and real-time CRM opportunity pipeline sync.",
  },
  {
    id: 6,
    slug: "agency-intake-automation",
    title: "Agency Client Intake Automation",
    category: "Workflow & Operations",
    icon: <GearSix size={28} weight="duotone" className="text-[var(--accent)]" />,
    tags: ["GoHighLevel", "Zapier", "Slack API"],
    result: "80% Less Admin Follow-Up",
    description: "Automated the entire client intake and asset collection journey for a digital agency. Triggered from contract signing, it collects creative assets, generates Drive folders, and assigns team tasks without human admin lag.",
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
              <Link href={`/projects/${project.slug}`} className="block h-full">
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
