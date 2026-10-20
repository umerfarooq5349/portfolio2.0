export interface IndustryProblem {
  title: string;
  description: string;
}

export interface IndustryWorkflow {
  name: string;
  trigger: string;
  action: string;
  outcome: string;
}

export interface IndustryFAQ {
  question: string;
  answer: string;
}

export interface IndustryDetail {
  slug: string;
  name: string;
  headline: string;
  metaDescription: string;
  targetKeywords: string[];
  overview: string;
  industryProblems: IndustryProblem[];
  commonWorkflows: IndustryWorkflow[];
  automationOpportunities: string[];
  recommendedArchitecture: string[];
  relevantServices: { title: string; slug: string }[];
  relevantCaseStudySlug: string;
  relevantCaseStudyTitle: string;
  faqs: IndustryFAQ[];
}

export const INDUSTRIES_DATA: Record<string, IndustryDetail> = {
  "real-estate": {
    slug: "real-estate",
    name: "Real Estate & Property Development",
    headline: "Real Estate CRM, Speed-to-Lead & Property Inquiry Automation",
    metaDescription:
      "Convert real estate inquiries into booked showings. Automated lead capture from Zillow, Facebook & portals into GoHighLevel with sub-2-minute speed-to-lead.",
    targetKeywords: [
      "real estate CRM automation",
      "GoHighLevel real estate automation",
      "real estate lead follow-up",
      "AI real estate lead qualification",
      "real estate appointment automation",
    ],
    overview:
      "Real estate transactions are won by the agent who responds first. Inquiries from portals and social ads often sit untouched for hours while agents are on showings. My real estate automation architecture connects every lead source directly to sub-2-minute SMS verification, AI qualification, and automated showing booking.",
    industryProblems: [
      {
        title: "Slow Speed-to-Lead on Portal Inquiries",
        description:
          "Leads from Facebook Ads or Zillow wait hours for an agent to call back. By the time someone reaches out, the prospect has moved on to a competitor.",
      },
      {
        title: "Unqualified Buyer & Renter Inquiries",
        description:
          "Agents waste valuable field time speaking with tire-kickers who lack pre-approval or do not match property price ranges.",
      },
      {
        title: "Disorganized Lead Spreadsheets",
        description:
          "Past buyer and seller contacts are scattered across personal phones and spreadsheets with zero systematic nurture or anniversary follow-up.",
      },
    ],
    commonWorkflows: [
      {
        name: "Instant Speed-to-Lead Bridge Call Loop",
        trigger: "Prospect submits Facebook Lead Ad or portal form",
        action: "GHL dials agent immediately; upon answer, connects directly to prospect while sending personalized SMS",
        outcome: "Sub-90-second response time with 4x higher connection rates",
      },
      {
        name: "AI Property Preference Qualification",
        trigger: "Prospect replies to automated text",
        action: "AI agent conversationally gathers bedroom count, target neighborhood, budget, and financing status",
        outcome: "Agents receive pre-qualified, tagged leads with verified buying timelines",
      },
      {
        name: "Automated Property Showing Booking",
        trigger: "Qualified lead requests in-person or virtual walkthrough",
        action: "Sends personalized GHL calendar link with custom buffer times between properties",
        outcome: "Automated calendar booking with zero double-booking or back-and-forth texting",
      },
    ],
    automationOpportunities: [
      "Automated Open House QR-code check-in into GoHighLevel pipeline",
      "Automated Buyer Pre-Approval document collection portal",
      "Long-term homeowner anniversary and equity update drip campaigns",
      "Multi-agent round-robin lead distribution based on postal code or price bracket",
    ],
    recommendedArchitecture: [
      "Lead Sources (Meta Ads, Google Ads, Zillow, Website) → GoHighLevel Webhooks",
      "Instant Phone Validation & Duplicate Contact Merge",
      "Immediate Conditioned SMS & Forced Outbound Call Loop to On-Duty Agent",
      "OpenAI Conversation Node for 24/7 Qualification & FAQ Triage",
      "Round-Robin Calendar Slot Reservation with 24h/2h Pre-Tour SMS Reminders",
    ],
    relevantServices: [
      { title: "GoHighLevel CRM Setup", slug: "gohighlevel-crm-setup" },
      { title: "Lead Follow-Up Automation", slug: "lead-follow-up-automation" },
      { title: "AI Chatbot Development", slug: "ai-chatbot-development" },
    ],
    relevantCaseStudySlug: "real-estate-lead-automation",
    relevantCaseStudyTitle: "Real Estate Speed-to-Lead & Follow-Up Automation",
    faqs: [
      {
        question: "Can GoHighLevel integrate with our MLS or real estate website?",
        answer:
          "Yes. Inbound leads from WordPress, IDX sites, or ad portals feed directly into GHL via webhooks, Zapier, or n8n with full contact details and property interest tags.",
      },
      {
        question: "How do forced call loops work for real estate teams?",
        answer:
          "When a new lead submits a form, GoHighLevel dials the designated agent's phone. A voice prompt announces 'New lead from John Smith. Press 1 to connect.' Once the agent presses 1, GHL instantly calls the lead, achieving sub-2-minute response times without manual dialing.",
      },
    ],
  },
  "agencies": {
    slug: "agencies",
    name: "Marketing & Growth Agencies",
    headline: "Agency CRM Pipelines, Automated Client Onboarding & White-Label GHL",
    metaDescription:
      "Streamline agency operations. Cut client onboarding from 8 days to 24 hours with automated intake forms, task handoffs, and white-label GoHighLevel snapshots.",
    targetKeywords: [
      "agency CRM automation",
      "lead management for agencies",
      "white-label GoHighLevel automation",
      "automated client onboarding",
    ],
    overview:
      "Digital agencies bleed profit and time during the messy client onboarding phase: missing logos, delayed access permissions, and scattered email threads. My agency systems automate client intake, provision branded GHL sub-accounts, and assign operational tasks to creative teams automatically.",
    industryProblems: [
      {
        title: "Drawn-Out Client Onboarding Lag",
        description:
          "Taking 7 to 10 days just to collect brand assets, ad account access, and logins before kickoff calls can be held.",
      },
      {
        title: "Manual Sub-Account Deployment Overhead",
        description:
          "Account managers spending hours manually rebuilding pipelines, custom fields, and email templates for each new client.",
      },
      {
        title: "Client Churn Due to Weak First-Week Experience",
        description:
          "Clients feeling anxious after signing contracts because communication goes quiet while internal teams scramble to set up tools.",
      },
    ],
    commonWorkflows: [
      {
        name: "Zero-Lag Contract to Onboarding Sequence",
        trigger: "Contract signed in PandaDoc/DocuSign or Stripe payment completed",
        action: "Instantly sends branded intake form, provisions GHL sub-account, and generates Slack client channel",
        outcome: "Client receives immediate welcome instructions within 60 seconds of signing",
      },
      {
        name: "Automated Asset Collection Chaser",
        trigger: "Intake form incomplete after 48 hours",
        action: "Friendly automated reminders highlighting the specific missing assets (e.g. ad account ID)",
        outcome: "Onboarding cycle compressed from 8 days down to under 24 hours",
      },
      {
        name: "Team Task Assignment Hand-off",
        trigger: "All assets submitted and validated",
        action: "Creates structured cards in ClickUp/Asana/Trello with assigned account managers and due dates",
        outcome: "Flawless internal delivery with zero dropped balls",
      },
    ],
    automationOpportunities: [
      "White-label GoHighLevel SaaS provisioning for agency clients",
      "Automated monthly performance report generation via n8n",
      "Fathom / Fireflies AI meeting summary ingestion into client Slack channels",
      "Automated client referral request campaigns triggered after 60 days of positive ROI",
    ],
    recommendedArchitecture: [
      "Stripe / Contract Signed → n8n Webhook",
      "GoHighLevel API Sub-Account Creation & Snapshot Deployment",
      "Dynamic Asset Intake Portal with File Upload to Google Drive / S3",
      "Internal Team Notification & Task Dispatch in ClickUp / Slack",
      "Automated Kickoff Booking Calendar Link Sent to Client",
    ],
    relevantServices: [
      { title: "GoHighLevel CRM Setup", slug: "gohighlevel-crm-setup" },
      { title: "n8n Workflow Automation", slug: "n8n-automation" },
      { title: "CRM Automation", slug: "crm-automation" },
    ],
    relevantCaseStudySlug: "agency-client-onboarding",
    relevantCaseStudyTitle: "Digital Agency 24-Hour Client Onboarding Pipeline",
    faqs: [
      {
        question: "Can you configure white-label GoHighLevel for our agency domain and branding?",
        answer:
          "Yes. I configure custom domains, white-label branding, custom CSS styling, mobile app branding, and tailored snapshot permissions so your clients experience your agency's proprietary software.",
      },
      {
        question: "How does the automated client onboarding workflow work?",
        answer:
          "The moment a client pays their invoice or signs their contract, a webhook triggers automated intake forms, creates their dedicated CRM sub-account, organizes Google Drive folders, and notifies your team in Slack.",
      },
    ],
  },
  "service-businesses": {
    slug: "service-businesses",
    name: "Service Businesses & Contractors",
    headline: "Service Business CRM, Missed-Call Text-Back & Review Automation",
    metaDescription:
      "Automate lead capture, missed call recovery, appointment bookings, and Google reviews for local service businesses and home contractors.",
    targetKeywords: [
      "service business lead automation",
      "appointment automation",
      "missed call text back automation",
      "CRM automation for service businesses",
    ],
    overview:
      "Service businesses and trade contractors lose thousands every month simply because technicians are working on-site when customers call. My service business automations guarantee that every caller receives an immediate SMS response, self-scheduling options, and automated post-job review requests.",
    industryProblems: [
      {
        title: "Missed Inbound Customer Calls",
        description:
          "When owners or receptionists are busy, calls go to voicemail. Over 75% of prospects never leave a voicemail and call the next competitor.",
      },
      {
        title: "High Appointment No-Show Rates",
        description:
          "Clients forgetting consultation or inspection times, wasting travel time and blocking technician schedules.",
      },
      {
        title: "Lack of Consistent 5-Star Google Reviews",
        description:
          "Satisfied clients rarely leave reviews unless prompted with a direct, frictionless link immediately after service delivery.",
      },
    ],
    commonWorkflows: [
      {
        name: "Instant Missed Call Text Back (MCTB)",
        trigger: "Inbound phone call goes unanswered or busy",
        action: "Within 20 seconds, sends an automated text: 'Hi! Missed your call while helping a customer. How can we help you today?'",
        outcome: "Recovers 40%+ of missed callers who would otherwise call competitors",
      },
      {
        name: "Automated Pre-Service Reminder Sequence",
        trigger: "Appointment booked in CRM",
        action: "Sends calendar invite, 24h SMS reminder, and 2h 'Technician en route' notification",
        outcome: "Cuts customer no-show rates by up to 70%",
      },
      {
        name: "Post-Service Review Generation Engine",
        trigger: "Job status moved to 'Completed' or invoice paid",
        action: "Sends a personalized text thanking the client with a direct one-tap Google Review link",
        outcome: "Generates a steady stream of verified 5-star Google reviews on autopilot",
      },
    ],
    automationOpportunities: [
      "Automated quote follow-up sequences that check in on pending estimates",
      "Seasonal maintenance reactivation campaigns for past customers",
      "Automated technician dispatch and route notification messages",
      "Two-way SMS messaging directly from mobile smartphones without sharing personal cell numbers",
    ],
    recommendedArchitecture: [
      "Twilio / GHL Phone Number with Call Routing & Fallback Forwarding",
      "Instant Missed Call Detection Trigger in GoHighLevel",
      "Two-Way Conversational SMS Follow-Up Loop with Smart Keyword Triage",
      "Online Booking Interface with Location Verification",
      "Automated Post-Service Invoice Dispatch & Review Request Trigger",
    ],
    relevantServices: [
      { title: "Lead Follow-Up Automation", slug: "lead-follow-up-automation" },
      { title: "Appointment Automation", slug: "appointment-automation" },
      { title: "GoHighLevel Automation", slug: "gohighlevel-automation" },
    ],
    relevantCaseStudySlug: "cilem-knauf-systems",
    relevantCaseStudyTitle: "Abnehmen im Liegen Client Booking & Studio Automation",
    faqs: [
      {
        question: "Does missed call text-back work on existing business phone lines?",
        answer:
          "Yes. We can port your existing number or set up call-forwarding so your current business number remains unchanged while unlocking automated SMS capabilities.",
      },
      {
        question: "Can we manage SMS conversations from our smartphones?",
        answer:
          "Yes. The GoHighLevel LeadConnector mobile app allows your entire team to reply to calls, SMS, WhatsApp, and emails from one shared business inbox.",
      },
    ],
  },
  "healthcare": {
    slug: "healthcare",
    name: "Healthcare, Clinics & Wellness",
    headline: "Clinic Patient Intake, Appointment Recalls & EHR Synchronization",
    metaDescription:
      "Automate patient intake, condition-specific follow-ups, and appointment recalls for physiotherapy, chiropractic, and wellness clinics.",
    targetKeywords: [
      "healthcare CRM automation",
      "clinic appointment automation",
      "patient intake automation",
      "chiropractic clinic automation",
    ],
    overview:
      "Healthcare and wellness clinics face intense front-desk burnout handling patient intake forms, booking cancellations, and chronic care recalls. My clinic systems deliver structured, condition-specific patient nurturing, automated digital intake, and EHR pipeline synchronization.",
    industryProblems: [
      {
        title: "Front Desk Admin Overload",
        description:
          "Clinic staff spending 3+ hours daily manually mailing PDF information packs and answering repetitive clinic FAQs.",
      },
      {
        title: "Patient Drop-Off During Multi-Session Care",
        description:
          "Patients completing 2 treatment sessions and forgetting to book recommended follow-ups, limiting clinical recovery.",
      },
      {
        title: "Fragmented Patient Intake Records",
        description:
          "Paper intake clipboards and unintegrated digital forms requiring manual transcription into clinical software.",
      },
    ],
    commonWorkflows: [
      {
        name: "Condition-Specific Patient Information Delivery",
        trigger: "Patient inquires via website or social ad for specific clinical pain area",
        action: "Instantly dispatches clinical educational guide (e.g. Back Pain vs Post-Op Rehab PDF) and therapist bio",
        outcome: "Establishes immediate clinical trust and speeds up assessment bookings",
      },
      {
        name: "Automated Treatment Plan Recall Chaser",
        trigger: "14 days elapse since last clinic session without next appointment booked",
        action: "Friendly clinical check-in SMS inquiring about recovery progress and offering direct re-booking link",
        outcome: "Maintains patient care continuity and fills vacant practitioner slots",
      },
      {
        name: "Digital Pre-Assessment Intake Sync",
        trigger: "Assessment appointment booked",
        action: "Sends secure mobile-responsive medical history form with automated sync to patient profile",
        outcome: "Eliminates waiting room paperwork delays completely",
      },
    ],
    automationOpportunities: [
      "Insurance verification document collection workflows",
      "Post-treatment home exercise video automated delivery",
      "Lapsed patient reactivation campaigns for seasonal tune-ups",
      "Multi-practitioner room and calendar balancing",
    ],
    recommendedArchitecture: [
      "Clinic Website & Treatment Pages on GoHighLevel",
      "Direct Meta / Google Ads Patient Lead Synchronization",
      "Condition-Specific Tagging & Automated Clinical Resource Dispatch",
      "EHR / Practice Hub Webhook Sync for Appointment Status Updates",
      "Long-Term Educational Patient Nurture Newsletter Engine",
    ],
    relevantServices: [
      { title: "GoHighLevel CRM Setup", slug: "gohighlevel-crm-setup" },
      { title: "Appointment Automation", slug: "appointment-automation" },
      { title: "CRM Automation", slug: "crm-automation" },
    ],
    relevantCaseStudySlug: "arc-rehabilitation-pilates",
    relevantCaseStudyTitle: "ARC Rehabilitation Complete Clinic Patient Ecosystem",
    faqs: [
      {
        question: "How does the system handle patient data privacy and compliance?",
        answer:
          "Workflows are configured with strict data governance: minimal necessary health indicators, encrypted transport via HTTPS/TLS, role-based access, and direct integration with certified clinical practice management systems.",
      },
      {
        question: "Can automations deliver different guides based on the patient's condition?",
        answer:
          "Yes. By tagging inquiries by pain point (back pain, sports injury, Pilates rehab), the system automatically branches into specific clinical information paths.",
      },
    ],
  },
};
