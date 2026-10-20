"use client";

import { motion } from "framer-motion";
import { Download, Calendar, FileText, CheckCircle2, Zap } from "lucide-react";
import { MagneticButton } from "@/components/lightswind/magnetic-button";
import RippleButton from "@/components/lightswind/ripple-button";
import Link from "next/link";

const experience = [
  {
    role: "GoHighLevel Team Lead",
    company: "Ignitto",
    period: "January 2025 - Present",
    desc: "Leading a GoHighLevel automation engineering team, training builders into production-ready funnel, workflow, and integration architects. Spearheading complex client ecosystems including Practice Hub EHR integrations, large-scale database cleanups (tens of thousands of contacts), Instantly.ai cold email outbound systems, and AI-powered patient chatbots.",
  },
  {
    role: "CRM & Workflow Automation Specialist",
    company: "Independent Client Engagements",
    period: "2023 - 2024",
    desc: "Designed and deployed full-scale GoHighLevel patient acquisition systems, multi-channel unified inboxes (WhatsApp Business + Email), and condition-specific automated nurture workflows for healthcare and wellness clinics across Ireland, Germany, and Australia.",
  },
  {
    role: "BS in Information Technology",
    company: "Bahria University",
    period: "Class of 2024",
    desc: "Graduated with a strong foundation in database management, software architecture, RESTful API integrations, and systems engineering.",
  },
];

const skills = [
  { category: "CRM & Funnel Platforms", items: ["GoHighLevel (GHL)", "Practice Hub EHR", "HubSpot", "Funnel CRO", "Membership Portals"] },
  { category: "Workflow Automation & APIs", items: ["n8n", "Zapier", "Pabbly Connect", "REST Webhooks", "Make (Integromat)"] },
  { category: "Outbound & Messaging", items: ["Instantly.ai", "WhatsApp Business API", "Twilio SMS", "Mailgun", "B2B Outbound"] },
  { category: "AI & Modern Tools", items: ["OpenAI API", "Custom AI Chatbots (LinaBot)", "Fathom AI", "Slack API", "Stripe API"] },
];

export default function ResumePage() {
  return (
    <div role="region" aria-label="Qualifications and Resume" className="pt-24 sm:pt-32 pb-20 sm:pb-28 min-h-[100dvh] bg-[var(--background)]">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 sm:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[var(--accent)] font-sans uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold mb-2">Qualifications</p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-semibold text-white tracking-tight mb-3">
              My <span className="text-[var(--accent)] italic">Resume</span>
            </h1>
            <p className="text-[var(--ice)]/80 font-sans text-base sm:text-lg">Muhammad Umer Farooq | CRM &amp; Automation Specialist</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap items-center gap-3.5"
          >
            <Link href="/contact">
              <RippleButton className="h-10 sm:h-11 px-5 sm:px-6 font-semibold">
                <Calendar size={17} />
                <span>Book a Call</span>
              </RippleButton>
            </Link>
            <a href="/muhammad-umer-farooq-gohighlevel-expert.pdf" download="Muhammad_Umer_Farooq_Resume.pdf" className="inline-block">
              <MagneticButton variant="outline" size="sm">
                <Download size={16} />
                <span>Download PDF</span>
              </MagneticButton>
            </a>
          </motion.div>
        </div>

        {/* Resume Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-[var(--surface)] border border-[var(--border-subtle)] rounded-3xl p-6 sm:p-10 md:p-16 space-y-12 sm:space-y-16"
        >
          {/* Summary */}
          <section>
            <h3 className="text-xs font-sans uppercase tracking-[0.2em] text-[var(--accent)] mb-6 border-b border-[var(--border-subtle)] pb-3 flex items-center gap-2 font-semibold">
              <FileText size={14} className="text-[var(--accent)]" />
              Professional Summary
            </h3>
            <p className="text-[var(--ice)] font-sans text-base md:text-lg leading-relaxed max-w-3xl">
              GoHighLevel Team Lead &amp; CRM Automation Architect with extensive production experience directing automation teams and engineering high-impact client systems. Proven track record auditing healthcare funnels, integrating Practice Hub EHR with automated SMS recall engines, rebuilding large-scale databases (tens of thousands of contacts), and deploying 24/7 AI-powered conversational bots and B2B outbound engines.
            </p>
          </section>

          {/* Work Experience */}
          <section>
            <h3 className="text-xs font-sans uppercase tracking-[0.2em] text-[var(--accent)] mb-8 border-b border-[var(--border-subtle)] pb-3 flex items-center gap-2 font-semibold">
              <CheckCircle2 size={14} className="text-[var(--accent)]" />
              Experience
            </h3>
            <div className="space-y-12">
              {experience.map((job, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-4 md:gap-8 border-b border-[var(--border-subtle)] pb-8 last:border-0 last:pb-0">
                  <div>
                    <h4 className="text-lg font-heading font-semibold text-white leading-tight">{job.role}</h4>
                    <p className="text-[var(--ice)]/60 font-sans text-sm mt-1">{job.company}</p>
                    <p className="text-[var(--accent)] font-sans text-xs mt-1 font-semibold">{job.period}</p>
                  </div>
                  <p className="text-[var(--ice)]/80 font-sans text-sm md:text-base leading-relaxed">{job.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Breakdown */}
          <section>
            <h3 className="text-xs font-sans uppercase tracking-[0.2em] text-[var(--accent)] mb-8 border-b border-[var(--border-subtle)] pb-3 flex items-center gap-2 font-semibold">
              <Zap size={14} className="text-[var(--accent)]" />
              Skills &amp; Toolkit
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skillGroup, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
                  <h4 className="font-heading font-semibold text-[var(--accent)] text-sm uppercase tracking-wider mb-4">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item) => (
                      <span key={item} className="px-3 py-1 rounded-full border border-[var(--border-subtle)] text-xs font-sans text-[var(--ice)] bg-[var(--surface)] hover:border-[var(--accent)]/40 hover:text-white transition-colors">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

        </motion.div>
      </div>
    </div>
  );
}
