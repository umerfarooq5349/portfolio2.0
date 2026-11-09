import type { Metadata } from "next";
import Link from "next/link";
import { AboutMinimalist } from "@/components/sections/about-minimalist";
import { StatsBar } from "@/components/sections/stats-bar";
import { MiniTestimonials } from "@/components/sections/mini-testimonials";
import { SlantedGlassMarquee } from "@/components/ui/slanted-glass-marquee";
import { TOOLS_DATA } from "@/lib/marquee-tools";
import {
  ArrowRight,
  CheckCircle2,
  CalendarCheck,
  Layers,
  Cpu,
  Target,
  ShieldCheck,
} from "lucide-react";
import {
  LinkedinLogo,
  GithubLogo,
  InstagramLogo,
} from "@phosphor-icons/react/dist/ssr";
import { LiquidGlassButton } from "@/components/lightswind/liquid-glass-button";
import { MagneticButton } from "@/components/lightswind/magnetic-button";

export const metadata: Metadata = {
  title: "About Muhammad Umer Farooq | GoHighLevel & n8n Automation Expert",
  description:
    "Learn about Muhammad Umer Farooq, a GoHighLevel & n8n automation specialist who builds production-grade CRM pipelines, speed-to-lead systems, and AI workflows.",
  alternates: {
    canonical: "https://muhammadumer.coderacks.com/about",
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Umer Farooq",
    url: "https://muhammadumer.coderacks.com/about",
    jobTitle: "GoHighLevel & n8n Automation Expert",
    sameAs: [
      "https://www.linkedin.com/in/umer-ai-agents/",
      "https://github.com/umerfarooq5349/",
      "https://www.instagram.com/muhammad.umer.faro.oq",
    ],
    knowsAbout: [
      "GoHighLevel",
      "n8n",
      "Zapier",
      "CRM Architecture",
      "AI Workflow Automation",
      "Speed-to-Lead Workflows",
    ],
  };

  return (
    <div className="pt-24 sm:pt-32 pb-20 bg-[var(--background)] min-h-[100dvh]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Main Minimalist Hero/About Section */}
      <AboutMinimalist isPageHeading={true} />

      {/* Full-Width Slanted Glassmorphic Marquee (-3deg) */}
      <div className="w-full relative z-20 pb-6 pt-2 overflow-hidden pointer-events-auto">
        <SlantedGlassMarquee
          items={TOOLS_DATA}
          angle={-3}
          speed={1}
          pauseOnHover={true}
        />
      </div>

      {/* Section 45: What I Specialize In & What I Build */}
      <section className="py-16 sm:py-20 max-w-5xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {/* What I Specialize In */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border-subtle)] space-y-4">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-[var(--accent)] flex items-center gap-1.5">
              <Target size={16} />
              <span>Core Specialization</span>
            </span>
            <h3 className="text-xl sm:text-2xl font-heading font-semibold text-white">
              My Core Areas
            </h3>
            <p className="text-xs sm:text-sm font-sans text-[var(--ice)]/80 leading-relaxed">
              I work with GoHighLevel, n8n, APIs, and AI tools to help businesses connect their lead capture, follow-up, booking, and CRM processes.
            </p>
            <ul className="space-y-2 text-xs font-sans text-[var(--ice)]/90 pt-2">
              {[
                "GoHighLevel CRM setup and workflow automation",
                "Lead follow-up and appointment journeys",
                "n8n integrations, webhooks, and data processing",
                "AI assistants with clear boundaries and human handoff",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What I Build */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border-subtle)] space-y-4">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-[var(--accent)] flex items-center gap-1.5">
              <Cpu size={16} />
              <span>Production Architectures</span>
            </span>
            <h3 className="text-xl sm:text-2xl font-heading font-semibold text-white">
              What I Actually Build
            </h3>
            <p className="text-xs sm:text-sm font-sans text-[var(--ice)]/80 leading-relaxed">
              I like solving the messy operational problems behind the scenes: duplicate contacts, missed follow-ups, disconnected tools, and workflows that stop making sense when a lead replies.
            </p>
            <div className="space-y-2.5 text-xs font-sans text-[var(--ice)]/85 pt-1">
              <div className="p-2.5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
                <strong className="text-white block mb-0.5">Lead follow-up systems:</strong>
                Connect lead sources to CRM, send timely first responses, follow up based on behavior, stop when the person replies or books.
              </div>
              <div className="p-2.5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
                <strong className="text-white block mb-0.5">Appointment workflows:</strong>
                Confirmations, reminders, rescheduling, no-show follow-up, and review requests—organized around how your calendar actually works.
              </div>
              <div className="p-2.5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
                <strong className="text-white block mb-0.5">CRM and integration work:</strong>
                Cleanup, routing, data sync between platforms, and AI assistants with defined scope and human handoff rules.
              </div>
            </div>
          </div>
        </div>

        {/* Engineering Approach / Process */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <Layers className="text-[var(--accent)]" size={20} />
            <h3 className="text-2xl font-heading font-semibold text-white">
              My Engineering Approach
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                step: "01",
                title: "Understand the Process",
                desc: "Map what happens today, where information gets lost, and what the team needs to see.",
              },
              {
                step: "02",
                title: "Agree on Scope",
                desc: "Define fields, stage definitions, edge cases, and what success looks like before building anything.",
              },
              {
                step: "03",
                title: "Build and Test",
                desc: "Build the workflow, test normal paths and failure paths, and validate with realistic data.",
              },
              {
                step: "04",
                title: "Launch and Hand Over",
                desc: "Launch with documentation so your team can understand, operate, and maintain what was built.",
              },
            ].map((p) => (
              <div
                key={p.step}
                className="p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border-subtle)] flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[var(--accent)] block mb-2">{p.step}</span>
                  <h4 className="text-base font-heading font-semibold text-white mb-1.5">{p.title}</h4>
                  <p className="text-xs font-sans text-[var(--ice)]/75 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-[var(--border-subtle)] pt-12 mb-14">
          <div>
            <h4 className="text-[var(--accent)] font-sans uppercase tracking-[0.2em] text-xs font-semibold mb-6">
              Track Record &amp; Focus
            </h4>
            <div className="space-y-6">
              {[
                {
                  role: "Independent CRM & Automation Specialist",
                  company: "Consulting for Service Businesses & Agencies",
                  period: "2023 - Present",
                  desc: "Designing and deploying custom GoHighLevel and n8n systems with over 50 production workflows.",
                },
                {
                  role: "GoHighLevel Systems Architect",
                  company: "High-Ticket Agencies & Wellness Clinics",
                  period: "2022 - 2023",
                  desc: "Configured multi-location CRM sub-accounts, EHR synchronizations, and automated patient recall sequences.",
                },
              ].map((job, idx) => (
                <div key={idx} className="border-b border-[var(--border-subtle)]/60 pb-5 last:border-0">
                  <h5 className="text-lg font-heading font-semibold text-white">{job.role}</h5>
                  <div className="flex justify-between items-center mt-1 mb-2">
                    <p className="text-xs text-[var(--ice)]/80 font-sans">{job.company}</p>
                    <p className="text-xs text-[var(--ice)]/60 font-sans">{job.period}</p>
                  </div>
                  <p className="text-xs text-[var(--ice)]/70 font-sans leading-relaxed">{job.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Case Studies Links */}
          <div>
            <h4 className="text-[var(--accent)] font-sans uppercase tracking-[0.2em] text-xs font-semibold mb-6">
              Featured Case Studies
            </h4>
            <div className="space-y-3">
              {[
                {
                  title: "ARC Rehabilitation & Clinic Ecosystem",
                  category: "Healthcare & Clinic Systems",
                  slug: "arc-rehabilitation-pilates",
                  metric: "285+ Leads Managed",
                },
                {
                  title: "Abnehmen im Liegen 24/7 AI System",
                  category: "AI & WhatsApp CRM",
                  slug: "abnehmen-im-liegen-hamburg",
                  metric: "Instant AI Triage",
                },
                {
                  title: "Agency Client Intake Automation",
                  category: "Operations & Onboarding",
                  slug: "agency-intake-automation",
                  metric: "80% Less Admin Lag",
                },
              ].map((cs) => (
                <Link
                  key={cs.slug}
                  href={`/projects/${cs.slug}`}
                  className="p-4 rounded-2xl bg-[var(--surface)] border border-[var(--border-subtle)] hover:border-[var(--accent)]/50 transition-all flex items-center justify-between group"
                >
                  <div>
                    <span className="text-[10px] uppercase font-sans text-[var(--accent)] font-semibold">{cs.category}</span>
                    <p className="text-sm font-heading font-semibold text-white group-hover:text-[var(--accent)] transition-colors">
                      {cs.title}
                    </p>
                    <span className="text-xs text-emerald-400 font-sans">{cs.metric}</span>
                  </div>
                  <ArrowRight size={16} className="text-[var(--ice)]/50 group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>

            {/* Official Professional Profiles (Section 45 & 49) */}
            <div className="pt-6 border-t border-[var(--border-subtle)]/60 mt-6">
              <span className="text-xs font-sans text-[var(--ice)]/60 block mb-3 font-semibold uppercase tracking-wider">
                Official Professional Profiles
              </span>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href="https://www.linkedin.com/in/umer-ai-agents/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--border-subtle)] text-xs text-white hover:border-[var(--accent)] transition-colors"
                >
                  <LinkedinLogo size={16} weight="fill" className="text-[#0A66C2]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/umerfarooq5349/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--border-subtle)] text-xs text-white hover:border-[var(--accent)] transition-colors"
                >
                  <GithubLogo size={16} weight="fill" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.instagram.com/muhammad.umer.faro.oq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--border-subtle)] text-xs text-white hover:border-[var(--accent)] transition-colors"
                >
                  <InstagramLogo size={16} weight="fill" className="text-[#E4405F]" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsBar />

      {/* Mini testimonials for trust */}
      <MiniTestimonials heading="Feedback on the Work" />

      {/* Final Strategy CTA */}
      <section className="max-w-4xl mx-auto px-5 sm:px-6 pt-12 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[var(--surface-elevated)] to-[var(--surface)] border border-[var(--accent)]/30 shadow-2xl space-y-4">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-[var(--accent)]">
            Have a Process That Keeps Breaking?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-white">
            Tell me what happens today and what you want to happen instead.
          </h2>
          <p className="text-xs sm:text-sm font-sans text-[var(--ice)]/80 max-w-lg mx-auto leading-relaxed">
            We&apos;ll map the process, identify where things break down, and agree on a practical next step.
          </p>
          <div className="pt-2">
            <Link href="/contact">
              <MagneticButton variant="primary" size="md" className="h-12 px-8 font-bold">
                <CalendarCheck size={18} />
                <span>Book Complimentary Call</span>
              </MagneticButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}