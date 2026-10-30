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
      "Account and location structure; custom fields and tags",
      "Pipeline stages and opportunity rules",
      "Forms and surveys with validation",
      "Calendars and booking rules",
      "Email and SMS templates; user permissions",
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
        industry: "Service Businesses",
        scenario: "Scattered spreadsheets and unassigned leads resulting in slow responses and missed follow-up.",
        outcome: "Centralized CRM with organized lead ownership and clear deal stage visibility.",
      },
      {
        industry: "Marketing & Growth Agencies",
        scenario: "Agencies needing rapid client onboarding with a standardized account structure.",
        outcome: "Configured client CRM sub-accounts with consistent structure and agreed handoff rules.",
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
      "Inbound trigger detection (form fill, Facebook Lead Ad, webhook, call)",
      "Conditional logic branching based on service interest, time of day, and lead data",
      "First response dispatch via approved channels",
      "Response-aware pause mechanisms — stop automated sequences when prospect replies",
      "Deal stage updates and internal alerts when a lead needs human action",
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
        scenario: "Losing inbound calls because technicians are on job sites and unable to answer.",
        outcome: "Automated acknowledgement messages and next-step links recapture callers who can be reached by message.",
      },
      {
        industry: "B2B Consulting & Coaching",
        scenario: "Manual follow-ups taking significant time each day with cold leads falling through the cracks.",
        outcome: "Automated condition-specific nurture sequences that continue until the lead replies, books, or opts out.",
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
      "n8n automation is a workflow orchestration system that connects APIs, databases, CRM webhooks, and AI models to run multi-step business processes. It can be self-hosted or used via cloud.",
    whyChoose:
      "When Zapier or Make becomes costly or hits execution limits, n8n offers more control over data, custom logic, and deployment. Self-hosting gives you ownership of the infrastructure.",
    workflowSteps: [
      "Custom Webhook Listener with HMAC Authentication & Payload Validation",
      "Multi-Branch Data Transformation (Code nodes, JSON normalization)",
      "External API Integrations (CRM, ERP, Payment Gateways, Scraping tools)",
      "AI Agent & LLM Decision Logic (OpenAI/Anthropic function calling)",
      "Automated Error Handling, Retries, and Telegram/Slack Incident Logging",
    ],
    keyCapabilities: [
      {
        title: "Flexible Multi-System Orchestration",
        description: "Sync GoHighLevel with PostgreSQL, Stripe, Airtable, and other systems based on agreed integration scope.",
      },
      {
        title: "Self-Hosted or Cloud Deployment",
        description: "Choose the deployment model that fits your access, security, maintenance, and budget requirements.",
      },
      {
        title: "AI-Assisted Workflow Nodes",
        description: "Integrate LLM reasoning nodes to classify inquiries, extract data, and trigger CRM updates within defined boundaries.",
      },
      {
        title: "Error Handling and Alerts",
        description: "Sub-workflows dedicated to catching API errors, retrying failed calls, and notifying admins when intervention is needed.",
      },
    ],
    useCases: [
      {
        industry: "High-Volume Operations",
        scenario: "Zapier monthly bills growing with frequent payload timeouts during peak traffic.",
        outcome: "Migrated to self-hosted n8n: reduced per-execution costs and gained more control over workflow logic and data.",
      },
      {
        industry: "Real Estate & Lead Generation",
        scenario: "Leads arriving from multiple ad portals needing enrichment and CRM injection.",
        outcome: "Unified n8n pipeline processing lead data via third-party APIs before injecting into GoHighLevel.",
      },
    ],
    faqs: [
      {
        question: "Why consider n8n over Zapier or Make?",
        answer: "n8n allows self-hosting for data control, supports custom code execution (JavaScript/Python), handles complex branching, and removes per-task pricing. The right choice depends on your complexity, maintenance capability, and budget.",
      },
      {
        question: "Can n8n run on our own servers?",
        answer: "Yes. I deploy n8n on Docker, AWS, DigitalOcean, or similar environments. Hosting, backups, monitoring, and API usage are separate considerations to plan for.",
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
      "Lead follow-up automation is a system that ensures every inbound lead receives a timely, relevant response, followed by further follow-up until they reply, book, or opt out.",
    whyChoose:
      "The challenge isn't usually lead volume—it's what happens after the inquiry arrives. I build systems that respond promptly, keep conversations organized, and alert a human when personal attention is needed.",
    workflowSteps: [
      "Lead capture from your website, ads, or forms",
      "Create or update the CRM contact and assign an owner",
      "Send an appropriate first response through the agreed channel",
      "Follow up based on timing, behavior, and your business rules",
      "Stop, route, or update when the lead replies, books, or opts out",
    ],
    keyCapabilities: [
      {
        title: "Timely First Response",
        description: "Send an appropriate confirmation or next step through the approved channel when a lead comes in.",
      },
      {
        title: "Condition-Specific Follow-Up",
        description: "Continue at sensible intervals based on the lead's inquiry, your business rules, and their actions.",
      },
      {
        title: "Stop Rules and Human Handoff",
        description: "Pause or stop the sequence when a lead replies, books, or opts out. Alert a person when the conversation needs personal attention.",
      },
      {
        title: "CRM Visibility",
        description: "Keep stages, tasks, and conversations organized so your team can see what happened with each inquiry.",
      },
    ],
    useCases: [
      {
        industry: "Home Services",
        scenario: "Average time to respond to a website lead was several hours, by which time prospects had often contacted a competitor.",
        outcome: "Automated first response sent promptly after lead submission, with follow-up continuing until the lead replies or books.",
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
      "A calendar link is only the first step. My appointment systems combine pre-booking steps, multi-channel reminders, and easy rescheduling options to reduce no-shows and unnecessary back-and-forth.",
    workflowSteps: [
      "Booking interface with qualification questions where agreed",
      "Real-time two-way calendar sync (Google, Outlook, Apple Calendar)",
      "Calendar invite with meeting link generation",
      "Automated reminder sequence (email, SMS, or WhatsApp based on agreed channels)",
      "Post-appointment routing based on attended or no-show status",
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
        industry: "Clinics & Wellness",
        scenario: "Manual appointment reminders were inconsistent and missed appointments disrupted the schedule.",
        outcome: "Automated reminder sequences sent at agreed intervals, with easy rescheduling links and no-show follow-up workflows.",
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
      "Sales teams spend significant time manually updating deal stages and setting reminders. CRM automations execute updates in the background when agreed actions occur, reducing manual overhead.",
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
        industry: "Consulting & Service Companies",
        scenario: "Deals lingering without follow-up because account managers lacked structured reminders and clear task ownership.",
        outcome: "Automated stalled-deal alerts and follow-up task creation so the next step is always visible.",
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
