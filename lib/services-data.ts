export interface ServiceCapability {
  title: string;
  description: string;
}

export interface ServiceUseCase {
  industry: string;
  scenario: string;
  outcome: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  shortTitle: string;
  badge: string;
  metaDescription: string;
  targetKeywords: string[];
  quickAnswer: string;
  whyChoose: string;
  workflowSteps: string[];
  keyCapabilities: ServiceCapability[];
  useCases: ServiceUseCase[];
  faqs: ServiceFAQ[];
  techStack: string[];
  relatedCaseStudySlug?: string;
  relatedCaseStudyTitle?: string;
}

export const SERVICES_DATA: Record<string, ServiceDetail> = {
  "gohighlevel-crm-setup": {
    slug: "gohighlevel-crm-setup",
    title: "GoHighLevel CRM Setup & Custom Sub-Account Architecture",
    shortTitle: "GoHighLevel CRM Setup",
    badge: "Core Expertise",
    metaDescription:
      "End-to-end GoHighLevel CRM setup by certified specialist Muhammad Umer Farooq. Multi-stage sales pipelines, custom fields, calendars, forms, and unified communication.",
    targetKeywords: ["GoHighLevel CRM setup", "GHL CRM setup", "GoHighLevel consultant", "custom GHL architecture"],
    quickAnswer:
      "GoHighLevel CRM setup is the strategic configuration of sub-accounts, custom data fields, sales pipelines, booking calendars, and unified communication channels inside GHL so businesses can manage leads without operational friction.",
    whyChoose:
      "Most GHL setups fail because they copy generic snapshot templates that don't match how the business actually sells. I architect custom, clean sub-accounts with validated custom values, standardized tag structures, and zero bloated clutter.",
    workflowSteps: [
      "Sub-Account & Domain Provisioning (DNS, LC Phone, LC Email, Mailgun/Twilio)",
      "Custom Field & Tag Taxonomy Architecture (Eliminates messy duplicate data)",
      "Multi-Stage Sales Pipelines with Strict Deal Value Tracking",
      "Unified Lead Capture: Smart Forms, Surveys, and High-Converting Landing Pages",
      "Round-Robin Calendar Setup with Automated Buffer Times & Conflict Detection",
    ],
    keyCapabilities: [
      {
        title: "Clean Pipeline Architecture",
        description: "Custom visual deal pipelines mirroring your true sales cycle, from new inquiry to discovery call, proposal sent, and won contract.",
      },
      {
        title: "Two-Way Omnichannel Inbox",
        description: "Connect SMS, WhatsApp, Email, Facebook Messenger, and Instagram DMs into one unified dashboard with staff assignments.",
      },
      {
        title: "Automated Calendar Scheduling",
        description: "Round-robin team calendars with automated time-zone conversions, pre-call qualification questions, and sync to Google/Outlook.",
      },
      {
        title: "Data Cleansing & Migration",
        description: "Seamless migration of past customer and prospect data from HubSpot, ActiveCampaign, or spreadsheets into structured GHL contacts.",
      },
    ],
    useCases: [
      {
        industry: "High-Ticket Service Businesses",
        scenario: "Scattered spreadsheets and unassigned leads resulting in slow responses and lost sales opportunities.",
        outcome: "Centralized single-pane CRM with automated lead ownership and 100% deal stage visibility.",
      },
      {
        industry: "Marketing & Growth Agencies",
        scenario: "Agencies needing rapid client onboarding snapshots with standardized sub-account architecture.",
        outcome: "Deploy fully configured client CRM sub-accounts in minutes rather than days.",
      },
    ],
    faqs: [
      {
        question: "What is included in a complete GoHighLevel CRM setup?",
        answer: "A complete setup covers DNS and domain authentication, phone/SMS compliance (A2P 10DLC), custom field schemas, deal pipelines, smart forms, automated booking calendars, and team access permissions.",
      },
      {
        question: "Can you migrate our contacts and pipeline data from our existing CRM?",
        answer: "Yes. I map and cleanse your legacy tags, custom fields, communication history, and contact lists from platforms like HubSpot, ActiveCampaign, or Keap directly into GHL without data loss.",
      },
      {
        question: "How long does a custom GHL CRM setup take?",
        answer: "A standard custom setup is delivered within 5 to 7 business days, including testing, team walkthroughs, and post-launch verification.",
      },
    ],
    techStack: ["GoHighLevel", "LC Phone / Twilio", "LC Email / Mailgun", "Google Calendar", "Stripe"],
    relatedCaseStudySlug: "arc-rehabilitation-pilates",
    relatedCaseStudyTitle: "ARC Rehabilitation Complete Clinic CRM Ecosystem",
  },
  "gohighlevel-automation": {
    slug: "gohighlevel-automation",
    title: "GoHighLevel Workflow Automation & Multi-Channel Nurturing",
    shortTitle: "GoHighLevel Automation",
    badge: "High Demand",
    metaDescription:
      "Automate lead follow-up, missed-call text backs, database reactivations, and deal progression with advanced GoHighLevel workflow engineering.",
    targetKeywords: ["GoHighLevel automation", "GHL workflow automation", "GoHighLevel workflows", "GHL lead automation"],
    quickAnswer:
      "GoHighLevel workflow automation uses event triggers, conditional logic branches, and multi-channel communication actions inside GHL to move prospects automatically from initial inquiry to booked appointments.",
    whyChoose:
      "Instead of linear auto-responders that annoy prospects, I engineer smart conditional workflows that pause when a lead responds, detect booking confirmations, and route inquiries intelligently.",
    workflowSteps: [
      "Inbound Trigger Detection (Form fill, Facebook Lead Ad, Webhook, Call)",
      "Conditional Logic Branching (Filter by service interest, time of day, lead score)",
      "Immediate Speed-to-Lead Dispatch (SMS, Email, and Forced Call Loops)",
      "Response-Aware Pause Mechanisms (Stop automated drips instantly when prospect replies)",
      "Automated Deal Stage Updates & Internal Slack/Email Alerts",
    ],
    keyCapabilities: [
      {
        title: "Sub-2-Minute Speed-to-Lead",
        description: "Engage warm prospects within 120 seconds of form submission via dynamic SMS and email tailored to their specific inquiry.",
      },
      {
        title: "Missed Call Text Back (MCTB)",
        description: "Instantly text prospects who call when lines are busy with an automated self-booking link, recovering lost revenue.",
      },
      {
        title: "Database Reactivation (DBR)",
        description: "Automated, non-pushy conversational text campaigns that re-engage stalled database contacts and generate fast booked calls.",
      },
      {
        title: "Review & Reputation Generation",
        description: "Post-service automated Google review request campaigns triggered when deals move to 'Completed' status.",
      },
    ],
    useCases: [
      {
        industry: "Home Services & Local Contractors",
        scenario: "Losing up to 60% of inbound calls because technicians are on job sites and unable to answer.",
        outcome: "Automated instant SMS responses recapture 40%+ of missed callers into booked appointments.",
      },
      {
        industry: "B2B Consulting & Coaching",
        scenario: "Manual follow-ups taking hours every day with cold leads falling through the cracks.",
        outcome: "Automated multi-week condition-specific nurture sequences delivering continuous calendar bookings.",
      },
    ],
    faqs: [
      {
        question: "How does GHL workflow automation prevent sending messages after someone books?",
        answer: "Every workflow incorporates trigger filters and goal events. When a prospect books an appointment, triggers an intake tag, or replies via SMS, they are automatically removed from nurture drips.",
      },
      {
        question: "Can workflows send notifications to our internal sales team?",
        answer: "Yes. Workflows can dispatch internal push notifications, SMS alerts, Slack webhooks, and forced outbound call loops directly to sales reps.",
      },
    ],
    techStack: ["GoHighLevel", "Twilio", "OpenAI", "Zapier", "Slack"],
    relatedCaseStudySlug: "real-estate-lead-automation",
    relatedCaseStudyTitle: "Real Estate Speed-to-Lead & Follow-Up Automation",
  },
  "n8n-automation": {
    slug: "n8n-automation",
    title: "n8n Automation Engineering & Advanced API Workflow Orchestration",
    shortTitle: "n8n Workflow Automation",
    badge: "Technical Specialist",
    metaDescription:
      "Scale operations with custom n8n workflows. Self-hosted and cloud n8n engineering for complex API integrations, database synchronization, and AI agent logic.",
    targetKeywords: ["n8n automation", "n8n workflow development", "n8n automation expert", "self-hosted n8n consultant"],
    quickAnswer:
      "n8n automation is an open, fair-code workflow orchestration system that connects APIs, databases, CRM webhooks, and AI models to run complex business processes without per-task SaaS subscription penalties.",
    whyChoose:
      "When Zapier or Make becomes too expensive ($500+/mo) or hits rigid execution limits, n8n provides unlimited executions, full JSON data control, self-hosted privacy compliance, and native code node execution (JavaScript/Python).",
    workflowSteps: [
      "Custom Webhook Listener with HMAC Authentication & Payload Validation",
      "Multi-Branch Data Transformation (Code nodes, JSON normalization)",
      "External API Integrations (CRM, ERP, Payment Gateways, Scraping tools)",
      "AI Agent & LLM Decision Logic (OpenAI/Anthropic function calling)",
      "Automated Error Handling, Retries, and Telegram/Slack Incident Logging",
    ],
    keyCapabilities: [
      {
        title: "Complex Multi-System Orchestration",
        description: "Sync GoHighLevel with PostgreSQL, Stripe, Airtable, ERPs, and custom internal software in real time.",
      },
      {
        title: "Zero Execution Fee Scalability",
        description: "Run millions of workflow events on self-hosted Docker/VPS instances without paying per-task subscription fees.",
      },
      {
        title: "Autonomous AI Agent Workflows",
        description: "Integrate LLM reasoning nodes with custom toolkits to classify inquiries, extract invoice data, and trigger CRM updates.",
      },
      {
        title: "Bulletproof Error Interceptors",
        description: "Sub-workflows dedicated to catching API rate limits, auto-retrying failed calls, and alerting admins immediately.",
      },
    ],
    useCases: [
      {
        industry: "SaaS & High-Volume E-Commerce",
        scenario: "Zapier monthly bills exceeding $800 with frequent payload timeouts during peak traffic.",
        outcome: "Migrated to self-hosted n8n on Hetzner VPS: 10x faster execution speed, 95% software cost reduction.",
      },
      {
        industry: "Real Estate & Lead Generation",
        scenario: "Leads arriving from multiple ad portals needing enrichment, skip tracing, and CRM injection in real time.",
        outcome: "Unified n8n pipeline enriching lead data via third-party APIs before injecting into GoHighLevel.",
      },
    ],
    faqs: [
      {
        question: "Why should we choose n8n over Zapier or Make?",
        answer: "n8n offers self-hosting for complete data privacy (GDPR/HIPAA compliance), allows raw code execution (JavaScript/Python), supports complex looping, and eliminates per-task pricing tiers.",
      },
      {
        question: "Can n8n run on our own servers?",
        answer: "Yes. I deploy and harden n8n on Docker, AWS, DigitalOcean, or Hetzner with SSL, automated backups, and Redis queue scaling.",
      },
    ],
    techStack: ["n8n", "Docker", "PostgreSQL", "Node.js", "REST APIs", "Webhooks"],
    relatedCaseStudySlug: "busselton-chiropractic-funnel",
    relatedCaseStudyTitle: "Busselton Chiropractic EHR Sync & Practice Hub Automation",
  },
  "zapier-automation": {
    slug: "zapier-automation",
    title: "Zapier Automation & Lightweight SaaS App Synchronization",
    shortTitle: "Zapier Automation",
    badge: "Fast Delivery",
    metaDescription:
      "Connect disparate business apps with clean, error-free Zapier automations. Certified workflow designs with webhooks, multi-step filters, and delay loops.",
    targetKeywords: ["Zapier automation", "Zapier workflow automation", "Zapier consultant", "Zapier expert"],
    quickAnswer:
      "Zapier automation connects over 6,000 cloud applications using triggers and actions, enabling businesses to pass data between CRMs, email tools, forms, and spreadsheets without writing manual code.",
    whyChoose:
      "I design Zapier workflows that minimize task consumption using paths, filters, and bulk lookup tables, preventing wasteful task burning and messy cascading failures.",
    workflowSteps: [
      "Process Audit & Cloud App Trigger Selection",
      "Data Filtering & Conditional Path Architecture",
      "Custom Code (Python/JavaScript) Formatting Nodes",
      "Multi-Step Target App Action Execution",
      "Automated Error Traps & Fail-Safe Notifications",
    ],
    keyCapabilities: [
      {
        title: "Multi-Step Zaps & Paths",
        description: "Advanced conditional routing directing prospects to different sales reps or pipelines based on budget, location, or service.",
      },
      {
        title: "Custom Code by Zapier",
        description: "Embed Python or JavaScript snippets to parse complex regex patterns, format telephone numbers, or calculate custom metrics.",
      },
      {
        title: "Lead Aggregation & Sync",
        description: "Connect Facebook Lead Ads, Google Ads, Typeform, and LinkedIn forms directly to your primary CRM within seconds.",
      },
      {
        title: "Team Notifications & Alerts",
        description: "Instant formatted alerts dispatched to Slack, Microsoft Teams, or SMS with direct action links.",
      },
    ],
    useCases: [
      {
        industry: "Professional Services",
        scenario: "New contract signed on PandaDoc or DocuSign requiring manual project creation in Asana and billing setup in QuickBooks.",
        outcome: "100% automated client handoff triggered the moment a contract is signed.",
      },
    ],
    faqs: [
      {
        question: "How do you optimize Zapier to prevent high task fees?",
        answer: "By using Filter steps early in the Zap, utilizing webhooks over polling triggers, and consolidating multiple Zaps into single multi-path structures.",
      },
    ],
    techStack: ["Zapier", "GoHighLevel", "Slack", "Airtable", "Google Workspace"],
  },
  "ai-chatbot-development": {
    slug: "ai-chatbot-development",
    title: "AI Chatbots & Intelligent Conversational Lead Qualification",
    shortTitle: "AI Chatbot Development",
    badge: "AI Powered",
    metaDescription:
      "Deploy custom AI chatbots that qualify leads, answer company-specific FAQs, and book discovery calls inside GoHighLevel, website chat, and WhatsApp.",
    targetKeywords: ["AI chatbot development", "AI lead qualification chatbot", "business AI chatbot", "GHL OpenAI integration"],
    quickAnswer:
      "AI chatbot development combines Large Language Models (OpenAI/Anthropic) with your business knowledge base and CRM tools to engage visitors 24/7, qualify intent, and book appointments directly on your calendar.",
    whyChoose:
      "Generic chatbots ask robotic questions and frustrate users. My chatbots use strict prompt engineering, real-time knowledge retrieval, and direct CRM tool access (function calling) to act like your best sales rep.",
    workflowSteps: [
      "Company Knowledge Base Extraction (Services, pricing, FAQs, objections)",
      "Strict System Persona & Guardrail Engineering (Prevents hallucination)",
      "CRM Tool Binding (Checking calendar slots, updating contact fields)",
      "Multi-Platform Integration (Web chat, SMS, WhatsApp, Instagram DM)",
      "Live Human Escalation Trigger (Hands over when prospect asks for an agent)",
    ],
    keyCapabilities: [
      {
        title: "Direct Calendar Booking",
        description: "The AI agent checks real-time slot availability and books meetings directly inside GoHighLevel or Google Calendar.",
      },
      {
        title: "Lead Scoring & Qualification",
        description: "Extracts budget, timeline, and project requirements conversationally before tagging the lead as Qualified or Disqualified.",
      },
      {
        title: "Hallucination-Proof Guardrails",
        description: "Restricts the AI strictly to approved knowledge assets, ensuring it never invents pricing or makes unauthorized promises.",
      },
      {
        title: "Multi-Channel Deployment",
        description: "Deploy the identical AI agent across your website widget, SMS text conversations, and social media inboxes.",
      },
    ],
    useCases: [
      {
        industry: "Real Estate & Brokerages",
        scenario: "Website visitors asking about bedroom counts, financing requirements, and showing schedules at 11 PM.",
        outcome: "AI agent answers property specifics instantly and books showings directly onto the listing agent's calendar.",
      },
    ],
    faqs: [
      {
        question: "Can the AI chatbot make bookings on our GoHighLevel calendar?",
        answer: "Yes. Using custom API actions or GHL conversation AI, the bot queries available slots, presents them naturally, and books confirmed appointments.",
      },
      {
        question: "What happens if a customer asks something outside the AI's knowledge?",
        answer: "The chatbot politely acknowledges its limitation, tags the conversation for human intervention, and sends an alert to your team.",
      },
    ],
    techStack: ["OpenAI API", "GoHighLevel", "n8n", "Pinecone", "Webhooks"],
  },
  "lead-follow-up-automation": {
    slug: "lead-follow-up-automation",
    title: "Lead Follow-Up Automation & Rapid Speed-to-Lead Workflows",
    shortTitle: "Lead Follow-Up Automation",
    badge: "Revenue Driver",
    metaDescription:
      "Turn cold leads into closed customers. Speed-to-lead automation delivering personalized multi-channel responses within 120 seconds of inquiry.",
    targetKeywords: ["lead follow-up automation", "automated lead nurturing", "lead response automation", "speed to lead workflows"],
    quickAnswer:
      "Lead follow-up automation is an operational system that guarantees every inbound lead receives personalized, multi-channel outreach (SMS, email, voice call) within seconds, followed by timed conversational follow-up until they respond.",
    whyChoose:
      "Research shows contacting a lead within 5 minutes increases conversion by 391%. My speed-to-lead systems connect your ad campaigns directly to automated SMS and phone loops within 60 to 90 seconds.",
    workflowSteps: [
      "Instant Lead Webhook Capture from Meta, Google Ads, TikTok, or Website",
      "Immediate Phone Verification & Contact Record Creation",
      "First Touchpoint (Personalized SMS referencing the exact ad / service)",
      "Forced Call Loop Dispatch (Ring sales rep first, then auto-dial prospect)",
      "Persistent Multi-Day Drip Sequence with Smart Response Stop-Triggers",
    ],
    keyCapabilities: [
      {
        title: "Forced Call Loops",
        description: "Connect sales agents to hot prospects instantly via automated bridge calls the second a form is submitted.",
      },
      {
        title: "Condition-Specific SMS Follow-Up",
        description: "Tailored text messages referencing the specific pain point or product the prospect clicked on.",
      },
      {
        title: "Automated Lead Re-engagement",
        description: "Timed follow-ups on Day 1, 2, 4, 7, and 14 that maintain warmth without feeling like spam.",
      },
      {
        title: "Unresponsive Lead Recovery",
        description: "Low-pressure conversational text nudges that recover up to 25% of prospects who ghosted initial contact.",
      },
    ],
    useCases: [
      {
        industry: "Home Remodeling & Roofing",
        scenario: "Average time to contact a website lead was 6 hours, leading to prospects hiring the first competitor who picked up.",
        outcome: "Reduced contact time to 45 seconds via automated SMS and call loop, doubling quote conversion rates.",
      },
    ],
    faqs: [
      {
        question: "How does the system know when to stop following up?",
        answer: "The moment a prospect replies by text, answers a call, or schedules a meeting, the workflow immediately removes them from all nurture sequences.",
      },
    ],
    techStack: ["GoHighLevel", "Twilio", "n8n", "Zapier"],
    relatedCaseStudySlug: "real-estate-lead-automation",
    relatedCaseStudyTitle: "Real Estate Speed-to-Lead Follow-Up Workflow",
  },
  "appointment-automation": {
    slug: "appointment-automation",
    title: "Appointment Booking Automation & No-Show Reduction Systems",
    shortTitle: "Appointment Automation",
    badge: "Efficiency",
    metaDescription:
      "Eliminate manual scheduling friction and slash no-show rates with automated appointment booking flows, pre-meeting reminders, and calendar sync.",
    targetKeywords: ["appointment automation", "automated booking system", "CRM appointment automation", "no-show reduction"],
    quickAnswer:
      "Appointment booking automation is a complete scheduling framework that allows prospects to book confirmed times based on real-time availability, while automated reminder sequences ensure they show up prepared.",
    whyChoose:
      "A calendar link is only the first step. My appointment systems combine pre-call qualification questionnaires, multi-channel reminders (24h, 2h, 10m before), and instant one-click reschedule options to drive 85%+ show-up rates.",
    workflowSteps: [
      "Custom Booking Interface with Embedded Qualification Questions",
      "Real-Time Two-Way Calendar Sync (Google, Outlook, Apple Calendar)",
      "Instant Calendar Invite with Zoom / Google Meet Link Generation",
      "Automated Pre-Call Reminder Sequence (Email + SMS + WhatsApp)",
      "Post-Appointment Automated Routing (Attended vs No-Show Sequence)",
    ],
    keyCapabilities: [
      {
        title: "Pre-Call Intake & Screening",
        description: "Collect budget, timeline, and pain point data before prospects can secure a calendar slot.",
      },
      {
        title: "Multi-Channel Show-Up Reminders",
        description: "Strategic sequence sending calendar invites, 24-hour SMS alerts, and 1-hour pre-call WhatsApp reminders.",
      },
      {
        title: "Automated No-Show Recovery",
        description: "If a prospect misses a call, an automated sequence immediately reaches out offering quick reschedule links.",
      },
      {
        title: "Buffer Times & Team Load Balancing",
        description: "Protect team calendars with custom buffer times, daily meeting caps, and round-robin distribution.",
      },
    ],
    useCases: [
      {
        industry: "Medical & Dental Clinics",
        scenario: "High no-show rates costing thousands in vacant practitioner treatment hours every week.",
        outcome: "Automated SMS reminders with 2-way confirmation reduced missed appointments by 68%.",
      },
    ],
    faqs: [
      {
        question: "Does this sync with Google Calendar and Zoom?",
        answer: "Yes. Integrations dynamically generate unique Zoom or Google Meet URLs and block availability across both personal and business calendars.",
      },
    ],
    techStack: ["GoHighLevel", "Google Calendar", "Zoom API", "Twilio"],
    relatedCaseStudySlug: "arc-rehabilitation-pilates",
    relatedCaseStudyTitle: "ARC Rehabilitation Clinic Booking & Recall System",
  },
  "crm-automation": {
    slug: "crm-automation",
    title: "CRM Automation & Sales Pipeline Lifecycle Engineering",
    shortTitle: "CRM Automation",
    badge: "Enterprise Grade",
    metaDescription:
      "Complete CRM automation across GoHighLevel, HubSpot, and custom databases. Pipeline management, deal stage triggers, task delegation, and reporting.",
    targetKeywords: ["CRM automation", "database reactivation", "pipeline automation", "sales pipeline automation"],
    quickAnswer:
      "CRM automation replaces manual data entry by triggering automated actions whenever a prospect moves through different stages of your sales pipeline, keeping deals moving and sales teams accountable.",
    whyChoose:
      "Sales reps waste 30% of their day manually updating deal stages, composing emails, and setting reminders. My CRM automations execute all updates in the background the moment actions occur.",
    workflowSteps: [
      "Stage Movement Triggers (Proposal viewed, call finished, contract signed)",
      "Automated Document Generation & Contract Dispatch",
      "Automated Sales Rep Task Assignment & Follow-Up Reminders",
      "Customer Onboarding Workflow Hand-off",
      "Weekly Pipeline Health Reports & Conversion Analytics",
    ],
    keyCapabilities: [
      {
        title: "Automated Deal Progression",
        description: "Deals advance automatically based on prospect actions (signing contracts, viewing proposals, booking calls).",
      },
      {
        title: "Database Hygiene & Tagging",
        description: "Clean categorization of leads, prospects, customers, and inactive contacts with zero duplicate entries.",
      },
      {
        title: "Team Task Dispatch",
        description: "Automatically creates structured tasks for account managers and reps with firm due dates.",
      },
      {
        title: "Long-Term Revenue Attribution",
        description: "Track lead source all the way to closed revenue for accurate marketing ROI measurement.",
      },
    ],
    useCases: [
      {
        industry: "Consulting & Corporate Services",
        scenario: "Deals lingering in limbo with no follow-up because account managers lacked structured task reminders.",
        outcome: "Automated stalled-deal alerts and follow-up sequences increased pipeline velocity by 45%.",
      },
    ],
    faqs: [
      {
        question: "Can CRM automation connect to our accounting or invoicing tools?",
        answer: "Yes. When a deal reaches 'Closed Won', we can automatically trigger invoice generation in QuickBooks, Xero, or Stripe.",
      },
    ],
    techStack: ["GoHighLevel", "n8n", "Stripe", "PostgreSQL", "Zapier"],
    relatedCaseStudySlug: "agency-client-onboarding",
    relatedCaseStudyTitle: "Digital Agency 24-Hour Client Onboarding Pipeline",
  },
};
