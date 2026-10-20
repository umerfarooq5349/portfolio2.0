import type { Metadata } from "next";
import Link from "next/link";
import {
  FirstAid,
  Robot,
  Funnel,
  RocketLaunch,
  EnvelopeSimple,
  GearSix,
  ArrowSquareOut,
  CheckCircle,
  Lightning,
  MapPin,
  Globe,
  Buildings,
  ArrowLeft,
  Quotes,
} from "@phosphor-icons/react/dist/ssr";

interface MetricItem {
  label: string;
  value: string;
}

interface SolutionPoint {
  title: string;
  description: string;
}

interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  iconType: "first-aid" | "robot" | "funnel" | "rocket" | "envelope" | "gear";
  result: string;
  tech: string[];
  client: {
    name: string;
    industry: string;
    location: string;
    website?: string;
  };
  metrics: MetricItem[];
  overview: string;
  challenge: string[];
  solution: SolutionPoint[];
  deliverables: string[];
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

const rawProjects: ProjectItem[] = [
  {
    id: "1",
    slug: "arc-rehabilitation-pilates",
    title: "ARC Rehabilitation & Pilates",
    subtitle: "Complete Patient Growth System & Clinic Automation Ecosystem",
    category: "Healthcare & Clinic Systems",
    iconType: "first-aid",
    result: "285+ Leads Managed",
    tech: ["GoHighLevel", "Facebook Lead Ads", "Custom CRM Pipelines", "Automated PDF Delivery", "Email Marketing", "Reformer Pilates Funnels"],
    client: {
      name: "ARC Rehabilitation & Pilates",
      industry: "Physiotherapy & Reformer Pilates",
      location: "Ballina, Co. Mayo, Ireland",
      website: "https://arcrehab.ie/",
    },
    metrics: [
      { label: "Active Leads Tracked", value: "285+" },
      { label: "Specific Auto-Workflows", value: "11" },
      { label: "Sales Pipeline Stages", value: "4" },
      { label: "Resource Delivery", value: "100% Automated" },
    ],
    overview: "ARC Rehabilitation & Pilates is a specialist physiotherapy, rehabilitation, and Reformer Pilates clinic based in Ballina, Co. Mayo, Ireland, founded by chartered physiotherapist Stephen Clarke. Working with major insurance providers including VHI, LAYA, and Irish Life, ARC has guided over 1,000 patients toward long-term recovery from chronic pain, sporting injuries, and movement limitations.",
    challenge: [
      "No centralized CRM or structured lead capture process, causing inbound Facebook ads and organic inquiries to be handled inconsistently.",
      "Front-desk staff spent hours every day manually composing and sending condition information packs to prospects.",
      "Inquiries were treated with generic, one-size-fits-all responses rather than addressing their specific injury or clinical requirement.",
      "Zero visibility into lead stage progression, resulting in warm prospects slipping through the cracks before booking an assessment.",
      "Disconnected digital assets (website, forms, and ad campaigns) operating in silos without automated follow-up sequences.",
    ],
    solution: [
      {
        title: "Clinic Website & Reformer Landing Page",
        description: "Engineered a high-converting, mobile-responsive website on GoHighLevel with dedicated treatment pages and an assessment-focused landing page structured to overcome patient hesitations and drive appointment bookings.",
      },
      {
        title: "Facebook Lead Ads Direct Integration",
        description: "Connected Meta Lead Ads directly into a 4-stage GoHighLevel sales pipeline. Leads are instantly captured, tagged, and distributed without human intervention or delayed manual export.",
      },
      {
        title: "11 Condition-Specific Automation Workflows",
        description: "Architected 11 automated workflow branches that detect the patient's reported pain area (back pain, neck stiffness, sports injuries, post-op recovery) and deliver tailored clinical guidance.",
      },
      {
        title: "Instant PDF Information Pack Delivery",
        description: "Automated the dispatch of specialized condition PDF guides immediately upon form submission, establishing immediate authority and cutting front-desk response times to seconds.",
      },
      {
        title: "Patient Nurture & Branded Newsletter Engine",
        description: "Configured long-term educational email nurture sequences and an ongoing newsletter system inside GoHighLevel to maintain trust, foster referrals, and re-engage past patients.",
      },
    ],
    deliverables: [
      "Custom Clinic Website Design & GoHighLevel Build",
      "Facebook Lead Ads Real-Time CRM Synchronization",
      "Four-Stage Patient Pipeline & Status Tracking",
      "11 Automated Condition-Specific Follow-Up Sequences",
      "Instant Automated PDF Information Pack Delivery",
      "Reformer Pilates Assessment High-Converting Landing Page",
      "Branded Patient Newsletter & Long-Term Nurture Flows",
    ],
    results: [
      "Captured and organized over 285 active patient leads inside a centralized, searchable CRM.",
      "Eliminated manual info-pack emailing, saving the front desk 6+ administrative hours per week.",
      "Increased booking conversion through 11 targeted, condition-specific educational sequences.",
      "Created a robust, scalable patient acquisition engine ahead of ongoing paid ad traffic.",
    ],
    testimonial: {
      quote: "By building a complete patient growth system inside GoHighLevel, our clinic now captures, nurtures, and tracks every lead seamlessly. The automated condition-specific follow-ups and instant info packs have saved our front desk countless hours while noticeably increasing booked appointments.",
      author: "Stephen Clarke",
      role: "Founder & Chartered Physiotherapist, ARC Rehabilitation & Pilates",
    },
  },
  {
    id: "2",
    slug: "abnehmen-im-liegen-hamburg",
    title: "Abnehmen im Liegen Hamburg",
    subtitle: "24/7 AI Assistant & Unified Multi-Channel Patient System",
    category: "AI & Multi-Channel CRM",
    iconType: "robot",
    result: "24/7 Instant AI Responses",
    tech: ["GoHighLevel", "LinaBot (Custom AI)", "WhatsApp Business API", "Unified Inbox", "Appointment Automation", "Email Marketing"],
    client: {
      name: "Abnehmen im Liegen Hamburg",
      industry: "Wellness & Body Contouring Clinic",
      location: "Hamburg, Germany",
      website: "https://shape.abnehmenhamburg.info/",
    },
    metrics: [
      { label: "AI Response Time", value: "< 5 sec" },
      { label: "Channels Unified", value: "WhatsApp + Email" },
      { label: "Automated Workflows", value: "5+" },
      { label: "Appointment Attendance", value: "Significant Lift" },
    ],
    overview: "Abnehmen im Liegen Hamburg is a premier German wellness and body-contouring clinic offering specialized slimming, muscle toning, and metabolic treatments. As inquiry volume grew, managing disconnected communications across WhatsApp and email began overwhelming the team and risking missed bookings.",
    challenge: [
      "Customer inquiries arrived unpredictably across WhatsApp and email, forcing staff to toggle between apps and causing delayed replies.",
      "Common questions regarding treatment safety, pricing, and availability went unanswered during peak treatment sessions and weekends.",
      "Inconsistent message formatting and lack of branded templates harmed the clinic's premium image.",
      "Manual appointment confirmation resulted in no-shows and underutilized treatment machines.",
      "Lack of structured post-treatment follow-up to capture reviews and schedule maintenance treatments.",
    ],
    solution: [
      {
        title: "LinaBot 24/7 Custom AI Assistant",
        description: "Engineered and deployed LinaBot inside GoHighLevel, an intelligent conversational AI trained on the clinic's treatment guides, pricing, and policies to answer questions instantly around the clock.",
      },
      {
        title: "Unified Multi-Channel Communications Inbox",
        description: "Integrated WhatsApp Business API and business email into a single GoHighLevel inbox, giving the clinic full visibility over all client dialogues in one place.",
      },
      {
        title: "WhatsApp Business Template System",
        description: "Constructed compliant, high-converting WhatsApp message templates for appointment confirmations, preparation advice, and schedule updates.",
      },
      {
        title: "Automated Appointment Reminders & Post-Care",
        description: "Built automated SMS and email reminders that verify attendance 24 hours prior, followed by automated post-session satisfaction surveys and review requests.",
      },
      {
        title: "Team Operating Guides & Enablement",
        description: "Delivered step-by-step Standard Operating Procedures (SOPs) and training so the clinic team can independently adjust AI knowledge, schedule calendars, and manage templates.",
      },
    ],
    deliverables: [
      "Centralized GoHighLevel CRM Architecture",
      "LinaBot Custom AI Assistant Implementation & Knowledge Base",
      "WhatsApp Business API Integration & Template Optimization",
      "Unified Multi-Channel Communications Inbox (Email & WhatsApp)",
      "Automated Appointment Reminder & Post-Visit Review Sequences",
      "Comprehensive Clinic Team Operating Guides",
    ],
    results: [
      "LinaBot answers customer inquiries 24/7 with zero wait time, qualifying prospects before staff involvement.",
      "Consolidated WhatsApp and email into a single inbox, eliminating app-switching and saving the staff hours each week.",
      "Automated multi-step reminders drastically cut appointment no-shows, protecting machine utilization.",
      "Enabled staff to manage daily communications and AI data independently without external technical support.",
    ],
    testimonial: {
      quote: "Muhammad and his team did an excellent job building and structuring our systems. From automation to overall setup, everything was handled professionally and with great attention to detail. Communication was clear, timelines were respected, and the results matched exactly what was promised.",
      author: "Cilem Knauf",
      role: "Owner, Abnehmen im Liegen Hamburg",
    },
  },
  {
    id: "3",
    slug: "the-posture-doctor",
    title: "The Posture Doctor",
    subtitle: "Funnel CRO Overhaul & Practice Hub Automated Recall Ecosystem",
    category: "Funnel CRO & Healthcare EHR",
    iconType: "funnel",
    result: "Automated SMS Recall Engine",
    tech: ["GoHighLevel", "Practice Hub EHR", "Funnel CRO Audit", "Automated SMS Recalls", "Intelligent Kill-Switches", "Mobile Optimization"],
    client: {
      name: "The Posture Doctor / Busselton Chiropractic Clinic",
      industry: "Chiropractic & Postural Healthcare",
      location: "Western Australia",
      website: "https://signup.posturedoctor.com.au/posture-doctor",
    },
    metrics: [
      { label: "Audit Score Lift", value: "42/100 to Production" },
      { label: "Recall Automation", value: "3-Step Smart SMS" },
      { label: "EHR Sync", value: "Practice Hub Realtime" },
      { label: "Lead Capture", value: "100% Pre-Booking" },
    ],
    overview: "The Posture Doctor (operating as Busselton Chiropractic Clinic in Western Australia) provides structured clinical assessments for patients suffering from chronic back pain, sciatica, and postural issues. Ahead of an aggressive paid advertising scale, they partnered with us to audit their funnels, fix severe conversion blockers, and connect GoHighLevel with Practice Hub.",
    challenge: [
      "An initial technical audit revealed a low 42/100 funnel score, riddled with critical conversion blockers that wasted paid ad spend.",
      "Glaring spelling errors in primary headlines ('Undertsand Your Sciatica') degraded patient trust and clinical authority.",
      "Broken mobile UX caused headlines to clip and CTA buttons to fall below the fold (over 65% of healthcare traffic is mobile).",
      "Missing lead capture forms meant visitors who did not immediately book an appointment vanished with zero follow-up possible.",
      "Lack of mandatory medical disclaimers exposed the practice to compliance and legal vulnerabilities.",
      "Disconnected systems: Missed appointments inside Practice Hub required tedious manual staff phone recalls.",
    ],
    solution: [
      {
        title: "Full Funnel CRO Overhaul",
        description: "Rebuilt mobile visual hierarchy, corrected typographical errors, inserted compliance disclaimers, and added mandatory opt-in lead forms ahead of the booking calendar to capture 100% of prospects.",
      },
      {
        title: "Practice Hub EHR Field Integration",
        description: "Mapped Practice Hub EHR fields ('PH Last Missed Appointment Type' and 'PH Patient Status') directly into GoHighLevel via automated webhooks, keeping contact records synchronized in real time.",
      },
      {
        title: "3-Step Missed Appointment SMS Recall Sequence",
        description: "Constructed an automated recall sequence triggered when Practice Hub marks a patient as 'Did Not Arrive'. After a 10-minute sync buffer, the system sends friendly, dynamic SMS messages with direct rebooking links.",
      },
      {
        title: "Intelligent Kill-Switch Safeguards",
        description: "Engineered safety logic checking patient status prior to every SMS dispatch. If the patient rebooks, replies, or is tagged by staff, the automation instantly aborts to prevent spam.",
      },
      {
        title: "SMS & Email Template Library",
        description: "Designed 6-7 custom workflow automations alongside standardized email and SMS templates dynamically referencing each patient's individual Practice Hub online booking URL.",
      },
    ],
    deliverables: [
      "Comprehensive GoHighLevel Strategic Funnel Audit & Roadmap",
      "Mobile CRO Funnel Overhaul (Hierarchy, Copy, Medical Compliance)",
      "Practice Hub 3rd-Party EHR Custom Field Mapping",
      "6-7 Advanced Workflow Automations inside GoHighLevel",
      "3-Step Automated SMS Missed Appointment Recall Sequence",
      "Real-Time Kill-Switch Workflow Safeguards",
      "Dynamic SMS & Email Practice Hub Template Library",
    ],
    results: [
      "Turned a leaking 42/100 funnel into an error-free, mobile-optimized asset prepared to convert paid ad traffic safely.",
      "100% of engaged visitors now have their contact details captured before seeing the calendar, enabling retargeting.",
      "Completely hands-free recall engine texts patients immediately upon a missed appointment, driving direct rebookings.",
      "Eliminated duplicate data entry and saved front-desk staff hours of manual follow-up calls every week.",
    ],
    testimonial: {
      quote: "The audit was an eye-opener. Fixing our mobile funnel and integrating Practice Hub with automated SMS recalls has plugged our lead leaks and taken the burden of chasing missed appointments completely off our front desk.",
      author: "Clinical Director",
      role: "The Posture Doctor / Busselton Chiropractic Clinic",
    },
  },
  {
    id: "4",
    slug: "coaching-ecosystem-rebuild",
    title: "Multi-Offer Coaching Ecosystem",
    subtitle: "Tens of Thousands of Contacts Cleansed, Segmented & Integrated",
    category: "High-Volume CRM Architecture",
    iconType: "rocket",
    result: "10,000+ Contacts Re-Segmented",
    tech: ["GoHighLevel", "n8n", "Zapier", "Pabbly Connect", "Fathom AI", "Slack API", "Stripe API"],
    client: {
      name: "High-Ticket Education & Coaching Academy",
      industry: "Online Education & Business Coaching",
      location: "United States / Global",
    },
    metrics: [
      { label: "CRM Database", value: "10,000+ Contacts" },
      { label: "Meeting Notes Sync", value: "100% Automated" },
      { label: "SaaS Sub-Accounts", value: "Auto-Provisioned" },
      { label: "Conflicting Workflows", value: "0" },
    ],
    overview: "A high-ticket business education academy with multiple coaching tiers, mastermind groups, and a database of tens of thousands of past and active students. Rapid growth had created severe technical debt, resulting in duplicated records, broken tags, and manual operational chaos.",
    challenge: [
      "Tens of thousands of contacts accumulated across 3 years with broken tags, outdated automations, and overlapping lists.",
      "Coaches spent 40+ minutes after every client call manually summarizing notes and emailing action steps.",
      "Manual student provisioning for membership portals and SaaS sub-accounts, resulting in onboarding delays and support tickets.",
      "Disjointed payment webhooks causing access revocation errors during billing retries.",
    ],
    solution: [
      {
        title: "Database Cleansing & Smart Re-Segmentation",
        description: "Audited and restructured the entire GoHighLevel database, pruning dead contacts, purging orphaned tags, and creating clean smart lists for active, dormant, and VIP students.",
      },
      {
        title: "Fathom AI to Slack Meeting Notes Pipeline",
        description: "Built an automated n8n/Zapier pipeline that extracts Fathom AI meeting transcripts, generates executive action items, and posts them directly into dedicated Slack channels.",
      },
      {
        title: "Automated SaaS & Course Provisioning",
        description: "Configured instant sub-account and membership creation upon Stripe checkout completion, granting students immediate access.",
      },
      {
        title: "Multi-Funnel Lead Architecture",
        description: "Engineered separate pipelines for lead magnets, webinar attendees, and high-ticket applications with tailored scoring rules.",
      },
    ],
    deliverables: [
      "Full CRM Database Audit & Re-Segmentation (10k+ Records)",
      "Automated Fathom AI to Slack Meeting Summarization Pipeline",
      "Automated Course & Membership Onboarding Infrastructure",
      "Instant SaaS Sub-Account Provisioning via Webhooks",
      "Payment Webhook Reconciliation & Dunning Sequence Logic",
    ],
    results: [
      "Eliminated 100% of conflicting legacy automations and restored high email deliverability across the entire list.",
      "Saved coaches over 15 hours weekly with automated Fathom AI meeting notes and action item delivery.",
      "Zero student onboarding delay: course and software credentials arrive within 90 seconds of payment.",
    ],
  },
  {
    id: "5",
    slug: "elearning-agency-outbound",
    title: "B2B Outbound Engine for eLearning Agency",
    subtitle: "White-Labeled GHL & Instantly.ai Cold Email Infrastructure",
    category: "B2B Lead Generation",
    iconType: "envelope",
    result: "65%+ Cold Open Rate",
    tech: ["GoHighLevel White-Label", "Instantly.ai", "Custom SMTP/DNS", "Opportunity Pipelines", "Webhook Routing"],
    client: {
      name: "Corporate eLearning & Content Agency",
      industry: "Digital Learning & Enterprise Training",
      location: "United States",
    },
    metrics: [
      { label: "Cold Email Open Rate", value: "65%+" },
      { label: "Pipeline Handoff", value: "Real-Time Webhook" },
      { label: "Multi-Week Sequences", value: "Automated Drip" },
      { label: "Setup Architecture", value: "Turnkey" },
    ],
    overview: "A premier eLearning content agency producing high-end corporate training modules needed a consistent, outbound B2B pipeline targeting corporate L&D directors, HR executives, and enterprise training leaders without burning domain reputation.",
    challenge: [
      "Previous outbound campaigns suffered from severe inbox deliverability issues, frequently landing in spam folders.",
      "Interested prospect replies were buried in general inboxes, leading to slow follow-up and lost deals.",
      "Lack of a centralized sales pipeline to track prospect progression from cold lead to signed contract.",
      "No automated classification separating positive interest from unsubscribe requests.",
    ],
    solution: [
      {
        title: "Dedicated Domain & DNS Architecture",
        description: "Configured SPF, DKIM, DMARC, and custom tracking domains across secondary sending domains, followed by structured inbox warming.",
      },
      {
        title: "Instantly.ai to GoHighLevel Webhook Bridge",
        description: "Connected Instantly cold outbound sequences to a white-labeled GHL sub-account. When a lead replies positively, an Opportunity Card is instantly generated in GHL.",
      },
      {
        title: "Automated Sales Notifications",
        description: "Configured instant SMS and email notifications to the account executive the moment a warm reply is received.",
      },
      {
        title: "Multi-Week Follow-Up Sequences",
        description: "Deployed multi-touch cadence combining thought leadership resources and calendar booking links.",
      },
    ],
    deliverables: [
      "Secondary Domain & DNS Authentication Setup (SPF, DKIM, DMARC)",
      "Instantly.ai Multi-Week Cold Outreach Cadence",
      "White-Labeled GoHighLevel Sales Pipeline",
      "Webhook Integration for Real-Time Lead Ingestion",
      "Automated AE Lead Routing & Instant Push Alerts",
    ],
    results: [
      "Achieved a sustained 65%+ open rate and healthy reply rate without risking main agency domain reputation.",
      "Positive replies are placed into the GHL sales pipeline and routed to sales reps within 30 seconds.",
      "Generated a steady stream of qualified sales calls with enterprise L&D decision makers.",
    ],
  },
  {
    id: "6",
    slug: "agency-intake-automation",
    title: "Agency Client Onboarding & Intake Automation",
    subtitle: "Intake-to-Pipeline Automation with Conditional Routing",
    category: "Workflow & Operations",
    iconType: "gear",
    result: "80% Less Admin Follow-Up",
    tech: ["GoHighLevel", "Zapier", "Slack API", "Google Drive API", "Conditional Routing", "Automated Reminders"],
    client: {
      name: "Full-Service Digital Marketing Agency",
      industry: "Marketing & Creative Services",
      location: "Global / Remote",
    },
    metrics: [
      { label: "Admin Follow-Up Cut", value: "80%" },
      { label: "Onboarding Cycle", value: "Hours vs Days" },
      { label: "Asset Collection", value: "100% Automated" },
      { label: "Team Alignment", value: "Instant Slack Sync" },
    ],
    overview: "A fast-growing marketing agency managing paid ads, SEO, and content for dozens of clients struggled with client onboarding friction, delayed asset submission, and manual administrative handoffs.",
    challenge: [
      "Staff spent 5+ hours per client chasing logos, brand guidelines, ad account access, and logins via scattered emails.",
      "Onboarding forms were one-size-fits-all, asking irrelevant questions and confusing clients who bought single services.",
      "Account managers manually created Slack channels, Drive folders, and project board tasks for each new client.",
      "Delayed onboarding pushed project kickoffs back by 7 to 10 days, eroding early client excitement.",
    ],
    solution: [
      {
        title: "Dynamic Conditional Intake Forms",
        description: "Built an intelligent intake portal inside GoHighLevel that dynamically asks only for relevant assets based on the package purchased.",
      },
      {
        title: "Automated Onboarding Drip Reminders",
        description: "Configured automated multi-channel nudges (email and SMS) that politely remind clients to submit missing assets until 100% complete.",
      },
      {
        title: "Automated Internal Workspace Provisioning",
        description: "Built Zapier workflows that instantly generate branded Google Drive folders, invite clients to private Slack channels, and assign production tasks to team members.",
      },
      {
        title: "Centralized Client Status Pipeline",
        description: "Created a clear 5-stage onboarding pipeline so the leadership team has live visibility over every onboarding client.",
      },
    ],
    deliverables: [
      "GoHighLevel Conditional Multi-Tier Intake Forms",
      "Automated Asset Collection Drip & Reminder Engine",
      "Automated Google Drive & Slack Channel Provisioning",
      "Five-Stage Visual Onboarding Pipeline",
      "Team Task Assignment & Handoff Automations",
    ],
    results: [
      "Cut administrative onboarding time by 80%, freeing account managers to focus on campaign strategy.",
      "Reduced average client onboarding cycle from 8 days down to under 24 hours.",
      "Eliminated misplaced client assets and missing passwords, creating a polished, professional client experience.",
    ],
  },
];

// Map by both ID and Slug
const projectsMap: Record<string, ProjectItem> = {};
for (const p of rawProjects) {
  projectsMap[p.id] = p;
  projectsMap[p.slug] = p;
}

export function generateStaticParams() {
  const ids = rawProjects.map((p) => ({ id: p.id }));
  const slugs = rawProjects.map((p) => ({ id: p.slug }));
  return [...ids, ...slugs];
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = projectsMap[id];
  if (!project) return { title: "Case Study Not Found" };
  return {
    title: `${project.title} - Case Study by Muhammad Umer Farooq`,
    description: project.overview.slice(0, 160),
  };
}

function ProjectDomainIcon({ type }: { type: ProjectItem["iconType"] }) {
  const props = { size: 30, weight: "duotone" as const, className: "text-[var(--accent)]" };
  switch (type) {
    case "first-aid":
      return <FirstAid {...props} />;
    case "robot":
      return <Robot {...props} />;
    case "funnel":
      return <Funnel {...props} />;
    case "rocket":
      return <RocketLaunch {...props} />;
    case "envelope":
      return <EnvelopeSimple {...props} />;
    case "gear":
      return <GearSix {...props} />;
  }
}

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projectsMap[id];

  if (!project) {
    return (
      <div className="pt-40 pb-20 text-center min-h-[100dvh] bg-[var(--background)]">
        <p className="text-zinc-400 font-sans mb-4">Case Study not found</p>
        <Link href="/projects" className="text-[var(--accent)] hover:underline font-sans">
          Return to Case Studies
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 sm:pt-32 pb-20 sm:pb-32 bg-[var(--background)] min-h-[100dvh]">
      <article className="max-w-5xl mx-auto px-5 sm:px-6">
        
        {/* Back Link */}
        <div className="mb-8 sm:mb-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[var(--ice)]/70 hover:text-white transition-colors text-sm font-sans mb-6"
          >
            <ArrowLeft size={16} />
            <span>Back to Case Studies</span>
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-[var(--accent)] font-sans text-xs sm:text-sm tracking-widest uppercase mb-2 font-medium">
                {project.category}
              </p>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-semibold text-white tracking-tight leading-[1.1]">
                {project.title}
              </h1>
              <p className="text-[var(--ice)]/80 font-sans text-sm sm:text-base mt-2 max-w-2xl">
                {project.subtitle}
              </p>
            </div>
            <div>
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-sans font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-4 py-2 rounded-full whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                {project.result}
              </span>
            </div>
          </div>

          {/* Client Metadata Bar */}
          <div className="mt-6 pt-5 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-sm font-sans text-[var(--ice)]/75">
            <div className="flex items-center gap-1.5">
              <Buildings size={16} className="text-[var(--accent)] shrink-0" />
              <span>{project.client.name}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin size={16} className="text-[var(--accent)] shrink-0" />
              <span>{project.client.location}</span>
            </div>
            {project.client.website && (
              <a
                href={project.client.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[var(--accent)] hover:underline font-medium"
              >
                <Globe size={16} className="shrink-0" />
                <span>Visit Live Client Site</span>
                <ArrowSquareOut size={14} />
              </a>
            )}
          </div>
        </div>

        {/* Performance Metrics Glance Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-12">
          {project.metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border-subtle)] shadow-md text-center sm:text-left"
            >
              <p className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-white mb-1">
                {m.value}
              </p>
              <p className="text-xs font-sans text-[var(--ice)]/70 font-medium">
                {m.label}
              </p>
            </div>
          ))}
        </div>

        {/* Content Box */}
        <div className="bg-[var(--surface)] border border-[var(--border-subtle)] rounded-3xl p-6 sm:p-8 md:p-12 mb-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2.4fr] gap-10 md:gap-12">
            
            {/* Meta Sidebar */}
            <div className="space-y-8">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex items-center justify-center shadow-lg mb-6">
                  <ProjectDomainIcon type={project.iconType} />
                </div>
                <h3 className="text-xs font-sans uppercase tracking-[0.2em] text-[var(--ice)]/60 mb-3 border-b border-[var(--border-subtle)] pb-2 flex items-center gap-2">
                  <Lightning size={14} className="text-[var(--accent)]" />
                  Role
                </h3>
                <p className="text-white font-sans text-sm font-medium">Lead GoHighLevel &amp; Automation Architect</p>
              </div>

              <div>
                <h3 className="text-xs font-sans uppercase tracking-[0.2em] text-[var(--ice)]/60 mb-3 border-b border-[var(--border-subtle)] pb-2 flex items-center gap-2">
                  <GearSix size={14} className="text-[var(--accent)]" />
                  Tech &amp; Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full border border-[var(--border-subtle)] text-xs font-sans text-[var(--ice)] bg-[var(--surface-elevated)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-sans uppercase tracking-[0.2em] text-[var(--ice)]/60 mb-3 border-b border-[var(--border-subtle)] pb-2 flex items-center gap-2">
                  <CheckCircle size={14} className="text-[var(--accent)]" />
                  Key Deliverables
                </h3>
                <ul className="space-y-2 text-xs font-sans text-[var(--ice)]/80">
                  {project.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[var(--accent)] font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Case Study Body */}
            <div className="space-y-10">
              {/* Project Overview */}
              <section>
                <h3 className="text-xl sm:text-2xl font-heading font-semibold text-white mb-3">Project Overview</h3>
                <p className="text-[var(--ice)]/85 font-sans text-sm sm:text-base leading-relaxed">{project.overview}</p>
              </section>
              
              {/* The Challenge */}
              <section>
                <h3 className="text-xl sm:text-2xl font-heading font-semibold text-white mb-3">The Challenge</h3>
                <ul className="space-y-3">
                  {project.challenge.map((c, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[var(--ice)]/85 font-sans leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Architecture Workflow Diagram (Section 8 of Strategy Plan) */}
              <section className="p-6 sm:p-7 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--accent)]/30 shadow-md">
                <span className="text-xs font-sans font-bold uppercase tracking-wider text-[var(--accent)] block mb-3">
                  System Architecture &amp; Data Pipeline
                </span>
                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-sans font-medium text-white">
                  <span className="px-3 py-1.5 rounded-lg bg-[var(--surface)] border border-[var(--border-subtle)] text-[var(--ice)]">
                    Inbound Lead Source
                  </span>
                  <span className="text-[var(--accent)]">→</span>
                  <span className="px-3 py-1.5 rounded-lg bg-[var(--accent)]/15 border border-[var(--accent)]/30 text-[var(--accent)]">
                    GoHighLevel Intake
                  </span>
                  <span className="text-[var(--accent)]">→</span>
                  <span className="px-3 py-1.5 rounded-lg bg-[var(--surface)] border border-[var(--border-subtle)] text-[var(--ice)]">
                    Webhook Trigger
                  </span>
                  <span className="text-[var(--accent)]">→</span>
                  <span className="px-3 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
                    n8n / AI Processing
                  </span>
                  <span className="text-[var(--accent)]">→</span>
                  <span className="px-3 py-1.5 rounded-lg bg-[var(--surface)] border border-[var(--border-subtle)] text-[var(--ice)]">
                    CRM Deal Pipeline
                  </span>
                  <span className="text-[var(--accent)]">→</span>
                  <span className="px-3 py-1.5 rounded-lg bg-[var(--accent)]/15 border border-[var(--accent)]/30 text-[var(--accent)]">
                    SMS &amp; Calendar Booking
                  </span>
                </div>
              </section>

              {/* The Technical Solution */}
              <section>
                <h3 className="text-xl sm:text-2xl font-heading font-semibold text-white mb-4">Technical Solution &amp; Architecture</h3>
                <div className="space-y-4">
                  {project.solution.map((sol, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)]"
                    >
                      <h4 className="text-white font-heading font-semibold text-base mb-1.5 flex items-center gap-2">
                        <span className="text-[var(--accent)] font-mono text-xs">{idx + 1}.</span>
                        {sol.title}
                      </h4>
                      <p className="text-[var(--ice)]/80 font-sans text-xs sm:text-sm leading-relaxed">
                        {sol.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Case Study to Service Cross-Link (Section 27 of Strategy Plan) */}
              <section className="p-6 rounded-2xl bg-gradient-to-r from-[var(--surface-elevated)] to-[var(--surface)] border border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[var(--ice)]/60 block mb-1">
                    Related Automation Service
                  </span>
                  <p className="text-sm font-heading font-semibold text-white">
                    Need a similar architecture built for your business?
                  </p>
                </div>
                <Link
                  href="/services/gohighlevel-automation"
                  className="inline-flex items-center gap-2 text-xs font-sans font-bold text-[var(--accent)] hover:underline shrink-0"
                >
                  <span>Explore GoHighLevel Automation →</span>
                </Link>
              </section>

              {/* Measurable Impact & Results */}
              <section>
                <h3 className="text-xl sm:text-2xl font-heading font-semibold text-white mb-3">Operational Impact &amp; Results</h3>
                <div className="p-6 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] space-y-3">
                  {project.results.map((res, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-sans text-[var(--ice)]/90">
                      <CheckCircle size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Real Client Testimonial (if available) */}
              {project.testimonial && (
                <section className="relative p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[var(--surface-elevated)] to-[var(--surface)] border border-[var(--accent)]/30 shadow-lg">
                  <Quotes size={40} className="text-[var(--accent)]/20 absolute top-4 right-4 pointer-events-none" />
                  <p className="font-sans text-sm sm:text-base text-white/95 italic leading-relaxed mb-4 relative z-10">
                    &ldquo;{project.testimonial.quote}&rdquo;
                  </p>
                  <div className="border-t border-[var(--border-subtle)] pt-3 relative z-10">
                    <p className="font-heading font-semibold text-[var(--accent)] text-sm">{project.testimonial.author}</p>
                    <p className="font-sans text-xs text-[var(--ice)]/65 mt-0.5">{project.testimonial.role}</p>
                  </div>
                </section>
              )}
            </div>

          </div>
        </div>

        {/* CTA to Strategy Consultation */}
        <div className="text-center p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[var(--surface-elevated)] to-[var(--surface)] border border-[var(--border-subtle)] shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-white mb-2">
            Need a similar automation system?
          </h2>
          <p className="text-[var(--ice)]/75 font-sans text-sm sm:text-base mb-6 max-w-lg mx-auto">
            Let&apos;s map out a custom CRM architecture, funnel, and automated workflow strategy tailored to your operations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[var(--accent)] text-black px-8 py-3.5 rounded-full font-sans font-semibold text-sm hover:bg-[var(--accent-hover)] transition-all shadow-md cursor-pointer"
          >
            <span>Book a Strategy Call</span>
          </Link>
        </div>

      </article>
    </div>
  );
}
