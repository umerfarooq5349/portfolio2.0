"use client";

import { motion } from "framer-motion";
import { Download, Calendar, FileText, CheckCircle2, Zap } from "lucide-react";
import { MagneticButton } from "@/components/lightswind/magnetic-button";
import RippleButton from "@/components/lightswind/ripple-button";
import Link from "next/link";

const experience = [
  {
    role: "CRM & Automation Specialist",
    company: "Independent Consultant / Freelancer",
    period: "2023 - Present",
    desc: "Architecting workflow automation engines using GoHighLevel, n8n, and Zapier for real estate, healthcare, and service industries. Integrating AI assistants to automate customer qualification and booking, reducing business response times from hours to under 2 minutes.",
  },
  {
    role: "GoHighLevel Specialist & SaaS Integrator",
    company: "Agency Solutions",
    period: "2022 - 2023",
    desc: "Built custom sales funnels, lead tracking dashboards, and white-label CRM sub-account setups for agency owners. Designed automated onboarding pipelines including Stripe billing, sub-account instantiation, and SMS marketing activations.",
  },
  {
    role: "Workflow Automation Consultant",
    company: "Service Operations Optimization",
    period: "2022 - Present",
    desc: "Mapping operations for small to mid-sized businesses and replacing repetitive data entry. Integrating CRMs with accounting (QuickBooks), communications (Twilio, Slack, Gmail), and scheduling software.",
  },
];

const skills = [
  { category: "CRM Platforms", items: ["GoHighLevel (GHL)", "ActiveCampaign", "HubSpot"] },
  { category: "Integration & Workflows", items: ["n8n", "Zapier", "API & Webhooks", "Make (Integromat)"] },
  { category: "Marketing & Comms", items: ["SMS Automation (Twilio)", "Email Automation (Mailgun)", "Sales Funnels"] },
  { category: "AI & Innovation", items: ["OpenAI API", "AI Chatbots", "Prompt Engineering"] },
];

export default function ResumePage() {
  return (
    <div role="region" aria-label="Qualifications and Resume" className="pt-32 pb-32 min-h-screen bg-[var(--background)]">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[var(--accent)] font-sans uppercase tracking-[0.2em] text-sm font-semibold mb-2">Qualifications</p>
            <h1 className="text-5xl md:text-7xl font-heading font-semibold text-white tracking-tight mb-4">
              My <span className="text-[var(--accent)] italic">Resume</span>
            </h1>
            <p className="text-[var(--ice)]/80 font-sans text-lg">Muhammad Umer Farooq | CRM &amp; Automation Specialist</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <Link href="/contact">
              <RippleButton>
                <Calendar size={18} />
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
          className="bg-[var(--surface)] border border-[var(--border-subtle)] rounded-3xl p-8 md:p-16 space-y-16"
        >
          {/* Summary */}
          <section>
            <h3 className="text-xs font-sans uppercase tracking-[0.2em] text-[var(--accent)] mb-6 border-b border-[var(--border-subtle)] pb-3 flex items-center gap-2 font-semibold">
              <FileText size={14} className="text-[var(--accent)]" />
              Professional Summary
            </h3>
            <p className="text-[var(--ice)] font-sans text-base md:text-lg leading-relaxed max-w-3xl">
              Highly motivated CRM &amp; Automation Expert with 1.5+ years of experience constructing automated processes that increase operational speed and eliminate manual data entry. Experienced in configuring GoHighLevel, n8n, and Zapier to bridge leads, invoicing, tracking pipelines, and communication channels.
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
