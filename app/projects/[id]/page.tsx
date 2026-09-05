import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Award, Zap } from "lucide-react";

interface ProjectItem {
  title: string;
  category: string;
  emoji: string;
  result: string;
  tech: string[];
  overview: string;
  challenge: string;
  solution: string;
}

const projectsData: Record<string, ProjectItem> = {
  "1": {
    title: "Real Estate Lead Automation",
    category: "CRM Automation",
    emoji: "🏠",
    result: "85% faster follow-up",
    tech: ["GoHighLevel", "n8n", "SMS Automation", "Twilio", "Mailgun"],
    overview: "A comprehensive end-to-end lead capture and nurturing system built for a real estate agency receiving over 500 leads monthly from Meta and Google Ads. Before this setup, agents manually called leads, resulting in an average follow-up time of 4 hours.",
    challenge: "High lead leakage due to manual entry delays and lack of immediate engagement. Leads cooled off by the time an agent reached out, leading to poor conversation rates and wasted ad spend.",
    solution: "Built a real-time integration via webhooks to GoHighLevel. Created automated workflow branches that immediately sent a personalized SMS and email within 2 minutes of form submission. Implemented an internal notification loop that assigned leads to available agents using a round-robin system with instant push notifications.",
  },
  "2": {
    title: "Healthcare Appointment System",
    category: "Booking Automation",
    emoji: "🏥",
    result: "60% fewer no-shows",
    tech: ["GoHighLevel", "Zapier", "Google Calendar", "Custom SMS Gateway"],
    overview: "An automated scheduling and multi-channel notification engine for a healthcare clinic. Designed to replace manual reminder phone calls by front-desk staff.",
    challenge: "Clinic suffered from a high rate of missed appointments (no-shows), directly impacting revenue. Administrative staff spent up to 3 hours a day making confirmation calls.",
    solution: "Designed a booking automation flow where patients booking through the website or portal were instantly synced to GHL. Created a sequence of triggers sending confirmation messages, 24-hour reminders with dynamic 'Confirm/Reschedule' buttons, and 2-hour emergency follow-ups. The clinic's no-show rate fell from 15% to under 5%.",
  },
  "3": {
    title: "Multi-Step Nurture Campaign",
    category: "Email & SMS Automation",
    emoji: "📧",
    result: "3x engagement rate",
    tech: ["GoHighLevel", "Email Sequences", "SMS Marketing", "A/B Testing"],
    overview: "A behavior-based email and SMS follow-up workflow designed to reactivate cold databases and nurture long-cycle service leads.",
    challenge: "High database size but extremely low engagement. Broadcasts were landing in promotions or spam, and click rates were below 1%.",
    solution: "Segmented the database dynamically based on contact custom fields. Built a multi-step campaign with branching logic: users who opened emails got a specific SMS follow-up, while unengaged users got a soft re-engagement drip. Conducted A/B testing on email subject lines and SMS delivery times to find the optimal conversion window.",
  },
  "4": {
    title: "AI Chatbot for Lead Qualification",
    category: "AI Automation",
    emoji: "🤖",
    result: "40% more qualified leads",
    tech: ["OpenAI API", "n8n", "GoHighLevel", "Websockets"],
    overview: "An intelligent, natural language AI chatbot designed to engage site visitors 24/7, qualify them, and book appointments without human agents.",
    challenge: "Support team could not keep up with night and weekend incoming web chats, losing potential clients to faster competitors.",
    solution: "Integrated an OpenAI assistant with n8n to act as the brains. Used GHL APIs to fetch calendar availability in real time. The AI chatbot answers FAQs, determines if the lead meets specific criteria (budget, service type), and dynamically schedules discovery calls directly into GHL pipelines.",
  },
  "5": {
    title: "White Label GHL SaaS Setup",
    category: "SaaS & White Label",
    emoji: "🚀",
    result: "Agency launched in 7 days",
    tech: ["GoHighLevel SaaS Pro", "Stripe API", "Domain DNS", "SMTP Setup"],
    overview: "A full white-label setup of the GoHighLevel ecosystem configured as a SaaS offering for an agency owner targeting local businesses.",
    challenge: "Setting up custom domains, agency branding, payment processing with Stripe, and pre-packaged snapshots for new sub-accounts was technically overwhelming for the founder.",
    solution: "Completed full agency settings configuration, mapped custom DNS for the app and portal, integrated Stripe for automatic client subscription billing, and configured automated sub-account creation snapshots so new clients immediately got access to templates.",
  },
  "6": {
    title: "Service Business Full Automation",
    category: "End-to-End CRM",
    emoji: "⚙️",
    result: "70% less manual work",
    tech: ["n8n", "Zapier", "GoHighLevel", "QuickBooks", "Slack API"],
    overview: "An operational revamp for a cleaning and maintenance service business, connecting front-end booking to back-end accounting and internal team channels.",
    challenge: "The staff manually copied information from GHL booking forms to QuickBooks for invoicing, sent emails to cleaners, and manually checked booking updates.",
    solution: "Built n8n workflows linking GoHighLevel, QuickBooks, and Slack. When a customer schedules a service, GHL pipelines update, QuickBooks dynamically drafts and sends the invoice, and a Slack alert goes to the assigned cleaner with service details.",
  },
};

export function generateStaticParams() {
  return Object.keys(projectsData).map((id) => ({ id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = projectsData[id];
  if (!project) return { title: "Case Study Not Found" };
  return {
    title: `${project.title} | Case Study by Muhammad Umer Farooq`,
    description: project.overview.slice(0, 160),
  };
}

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projectsData[id];

  if (!project) {
    return (
      <div className="pt-40 pb-20 text-center min-h-screen bg-[var(--background)]">
        <p className="text-zinc-400 font-sans mb-4">Case Study not found</p>
        <Link href="/projects" className="text-[var(--accent)] hover:underline">
          Return to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-32 bg-[var(--background)] min-h-screen">
      <article className="max-w-4xl mx-auto px-6">
        {/* Back Link */}
        <div className="mb-12">
          <Link href="/projects" className="inline-flex items-center gap-2 text-[var(--ice)]/70 hover:text-white transition-colors text-sm font-sans mb-8">
            <ArrowLeft size={16} />
            <span>Back to Case Studies</span>
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-[var(--accent)] font-sans text-sm tracking-widest uppercase mb-2 font-medium">
                {project.category}
              </p>
              <h1 className="text-4xl md:text-6xl font-heading font-semibold text-white tracking-tight leading-tight">
                {project.title}
              </h1>
            </div>
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-4 py-2 rounded-full whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                {project.result}
              </span>
            </div>
          </div>
        </div>

        {/* Content Box */}
        <div className="bg-[var(--surface)] border border-[var(--border-subtle)] rounded-3xl p-8 md:p-12 mb-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-12">
            
            {/* Meta Sidebar */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-sans uppercase tracking-[0.2em] text-[var(--ice)]/60 mb-4 border-b border-[var(--border-subtle)] pb-2 flex items-center gap-2">
                  <Zap size={14} className="text-[var(--accent)]" />
                  Tech &amp; Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech: string) => (
                    <span key={tech} className="px-3 py-1 rounded-full border border-[var(--border-subtle)] text-xs font-sans text-[var(--ice)] bg-[var(--surface-elevated)]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs font-sans uppercase tracking-[0.2em] text-[var(--ice)]/60 mb-4 border-b border-[var(--border-subtle)] pb-2 flex items-center gap-2">
                  <Award size={14} className="text-[var(--accent)]" />
                  Role
                </h3>
                <p className="text-white font-sans text-sm font-medium">CRM &amp; Automation Architect</p>
              </div>
              <div className="text-center md:text-left py-4">
                <span className="text-7xl block md:inline-block">{project.emoji}</span>
              </div>
            </div>

            {/* Case Study Body */}
            <div className="space-y-10">
              <section>
                <h2 className="text-2xl font-heading font-semibold text-white mb-3">Project Overview</h2>
                <p className="text-[var(--ice)]/80 font-sans text-base md:text-lg leading-relaxed">{project.overview}</p>
              </section>
              
              <section>
                <h2 className="text-2xl font-heading font-semibold text-white mb-3">The Challenge</h2>
                <p className="text-[var(--ice)]/80 font-sans text-base md:text-lg leading-relaxed">{project.challenge}</p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-semibold text-white mb-3">The Solution</h2>
                <p className="text-[var(--ice)]/80 font-sans text-base md:text-lg leading-relaxed">{project.solution}</p>
              </section>
            </div>

          </div>
        </div>

        {/* CTA to Consultation */}
        <div className="text-center p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[var(--surface-elevated)] to-[var(--surface)] border border-[var(--border-subtle)] shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-white mb-2">Need a similar automation system?</h2>
          <p className="text-[var(--ice)]/70 font-sans text-sm sm:text-base mb-6 max-w-lg mx-auto">Let&apos;s map out a custom pipeline and automation strategy for your business operations.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[var(--accent)] text-black px-8 py-3.5 rounded-full font-sans font-semibold text-sm hover:bg-[var(--accent-hover)] transition-all shadow-md">
            Book a Free Consultation
          </Link>
        </div>
      </article>
    </div>
  );
}
