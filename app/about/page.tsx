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
import RippleButton from "@/components/lightswind/ripple-button";

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
              Systems Over Tools
            </h3>
            <p className="text-xs sm:text-sm font-sans text-[var(--ice)]/80 leading-relaxed">
              I specialize in architecting reliable business systems using <strong>GoHighLevel</strong>, <strong>n8n</strong>, <strong>Zapier</strong>, and <strong>OpenAI</strong>. Rather than bolting together fragile point-to-point zaps, I build coherent operational pipelines that handle lead capture, qualification, appointment booking, and database reactivation.
            </p>
            <ul className="space-y-2 text-xs font-sans text-[var(--ice)]/90 pt-2">
              {[
                "GoHighLevel CRM Sub-Accounts & Visual Pipelines",
                "Self-Hosted n8n Multi-Branch API Orchestration",
                "Sub-2-Minute Speed-to-Lead SMS & Call Loops",
                "AI Conversational Triage & Calendar Booking Agents",
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
              I engineer end-to-end automation pipelines that replace manual admin work and stop valuable leads from going cold:
            </p>
            <div className="space-y-2.5 text-xs font-sans text-[var(--ice)]/85 pt-1">
              <div className="p-2.5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
                <strong className="text-white block mb-0.5">Speed-to-Lead Engines:</strong>
                Connecting Facebook Ads, Google Ads, and forms to sub-2-minute SMS verification and agent bridge calls.
              </div>
              <div className="p-2.5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
                <strong className="text-white block mb-0.5">Client Onboarding Pipelines:</strong>
                Automating intake forms, Google Drive provisioning, and team task assignment within 24 hours of payment.
              </div>
              <div className="p-2.5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
                <strong className="text-white block mb-0.5">Database Reactivation:</strong>
                Re-engaging stalled CRM contacts with low-friction text conversations that book fresh revenue.
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
                title: "Process Audit",
                desc: "We analyze your exact bottlenecks, manual touches, and software stack before touching code.",
              },
              {
                step: "02",
                title: "Data Taxonomy",
                desc: "Clean custom fields, standardized tags, and pipeline stages that prevent messy data corruption.",
              },
              {
                step: "03",
                title: "Logic Engineering",
                desc: "Building conditional triggers, pause loops on reply, and error-handling webhook traps.",
              },
              {
                step: "04",
                title: "Go-Live & Handoff",
                desc: "End-to-end testing, team video walkthroughs, and guaranteed 30-day post-launch support.",
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
      <MiniTestimonials heading="Client Outcomes That Speak For Themselves" />

      {/* Final Strategy CTA */}
      <section className="max-w-4xl mx-auto px-5 sm:px-6 pt-12 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[var(--surface-elevated)] to-[var(--surface)] border border-[var(--accent)]/30 shadow-2xl space-y-4">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-[var(--accent)]">
            Let&apos;s Build Together
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-white">
            Ready to replace manual tasks with intelligent automation?
          </h2>
          <p className="text-xs sm:text-sm font-sans text-[var(--ice)]/80 max-w-lg mx-auto leading-relaxed">
            Let&apos;s schedule a 15-minute strategy call to inspect your operational bottlenecks and map out a custom architecture.
          </p>
          <div className="pt-2">
            <Link href="/contact">
              <RippleButton className="h-12 px-8 font-semibold">
                <CalendarCheck size={18} />
                <span>Book a Strategy Call</span>
              </RippleButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
