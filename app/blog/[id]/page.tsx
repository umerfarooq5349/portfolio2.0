import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, Zap, BookOpen } from "lucide-react";

const blogPostsData: Record<string, any> = {
  "1": {
    title: "How to Save 10+ Hours/Week with GHL Workflow Automation",
    category: "CRM Setup",
    date: "May 12, 2024",
    readTime: "5 min read",
    author: "Muhammad Umer Farooq",
    overview: "Operational efficiency isn't about working harder; it's about systems doing the heavy lifting. Learn the exact GoHighLevel workflow recipes that reclaim hours of manual admin time every single week.",
    content: [
      {
        sectionTitle: "1. The Lead Auto-Responder (The 2-Minute Rule)",
        paragraphs: [
          "Studies show that responding to a lead within 5 minutes increases connection rates by over 391%. Yet, most business owners manually check emails and follow up hours later. With GoHighLevel, we solve this with a simple trigger-to-action workflow.",
          "Trigger: 'Form Submitted' or 'Facebook Lead Form Submitted'. Action: Create/Update Contact, assign a lead tag, and send an automated personalized SMS & Email. By personalizing the SMS ('Hi {contact.first_name}, thanks for reaching out...'), you initiate an active conversation instantly on autopilot."
        ]
      },
      {
        sectionTitle: "2. Round-Robin Lead Assignment & Forced Call Loops",
        paragraphs: [
          "When you have multiple agents, manual delegation is slow and prone to bias. We set up user assignment rules using Round-Robin (split evenly or by weighted ratios).",
          "Furthermore, we utilize GHL's 'Call' action in workflows. When a high-intent lead comes in, GHL dials the agent first. Once the agent answers, a recorded voice says 'New lead from John Smith. Press any key to connect.' The CRM then automatically dials the lead. This forced loop guarantees a sub-2-minute response time."
        ]
      },
      {
        sectionTitle: "3. Database Reactivation Campaigns (Re-engaging Cold Leads)",
        paragraphs: [
          "Every business has a goldmine of old, unclosed leads sitting in their database. A Database Reactivation (DBR) workflow can generate thousands in revenue in days without spend.",
          "We extract a list of leads older than 90 days, filter out active customers, and drop them into a drip workflow. The workflow sends a short, low-friction text (e.g. 'Hey {first_name}, are you still looking for help with [service]?'). The replies trigger notification alerts to agents to step in and close the deal."
        ]
      }
    ],
    takeaways: [
      "Immediate follow-up leads to 391% higher connection rates.",
      "Forced call loops connect agents to hot prospects in real-time.",
      "Database reactivation reactivates dead leads with zero ad spend."
    ]
  },
  "2": {
    title: "n8n vs Zapier: Choosing the Right Integration Tool for Scale",
    category: "Integrations",
    date: "April 28, 2024",
    readTime: "7 min read",
    author: "Muhammad Umer Farooq",
    overview: "A granular comparison between the two giants of workflow automation. We analyze costs, logic limits, hosting choices, and how to decide which tool fits your growth stage.",
    content: [
      {
        sectionTitle: "1. The Pricing Model and Task Limits",
        paragraphs: [
          "Zapier is excellent for fast setups, but its pricing scales exponentially. A multi-step workflow running thousands of times a month can quickly cost $100–$500+ per month because Zapier charges per task execution.",
          "n8n, on the other hand, is source-available and can be self-hosted on a basic virtual private server (VPS) for $5/month, giving you unlimited executions. For businesses processing high volumes of Webhook payloads or data synchronizations, n8n saves thousands of dollars annually."
        ]
      },
      {
        sectionTitle: "2. Complex Logic and JavaScript Execution",
        paragraphs: [
          "Zapier offers 'Paths' for conditional logic, but it gets messy and expensive with more than 3 branches. n8n uses a visual node canvas that supports advanced branching, loops, and custom JavaScript directly inside code nodes without needing separate helper steps.",
          "This makes n8n the tool of choice for advanced developers who need to parse complex JSON payloads, map array arrays, or build loops that iterate over lists of database items."
        ]
      },
      {
        sectionTitle: "3. Hosting: Cloud vs Self-Hosted VPS",
        paragraphs: [
          "Zapier is purely cloud-based, meaning zero server maintenance. n8n offers both a cloud-managed service and a self-hosted option (via Docker).",
          "For healthcare and finance clients where data privacy and HIPAA compliance are critical, n8n self-hosted is a game-changer. The data never leaves your private server, satisfying strict regulatory policies."
        ]
      }
    ],
    takeaways: [
      "Zapier charges per task; n8n self-hosted offers unlimited executions for a flat server cost.",
      "n8n supports loops and complex JavaScript data transformation out of the box.",
      "Self-hosted n8n is ideal for HIPAA and data privacy compliance."
    ]
  },
  "3": {
    title: "Implementing AI Chatbots to Qualify Real Estate Leads Instantly",
    category: "AI Automation",
    date: "March 15, 2024",
    readTime: "6 min read",
    author: "Muhammad Umer Farooq",
    overview: "Discover how to combine the OpenAI Assistant API with n8n and GoHighLevel to build an autonomous bot that qualifies incoming buyer/tenant inquiries and books them directly onto calendars.",
    content: [
      {
        sectionTitle: "1. Connecting GHL Conversations to OpenAI via n8n",
        paragraphs: [
          "When a prospect sends a text, message, or web chat, GoHighLevel triggers a Webhook containing the message content and contact ID. n8n receives this webhook and forwards the prompt to the OpenAI Assistants API.",
          "The Assistant is pre-loaded with specific instructions: 'You are Umer's real estate assistant. Qualify prospects by asking for their budget, desired location, and moving timeline. Do not recommend listings until you have this info.'"
        ]
      },
      {
        sectionTitle: "2. Live Availability Checking and Booking",
        paragraphs: [
          "Once the OpenAI Assistant determines the lead is qualified, it uses function calling to check calendar availability. n8n queries the GoHighLevel API for free booking slots.",
          "The chatbot presents 2 or 3 options to the user. Once the user replies with their choice, the bot submits the booking payload back to the GHL Calendar API, updating the contact's pipeline stage and triggering booking confirmations automatically."
        ]
      },
      {
        sectionTitle: "3. The Human Hand-Off Fail-Safe",
        paragraphs: [
          "No AI is perfect, and some leads will ask questions outside the bot's scope. We implement a regex/semantic filter. If the lead asks to speak to a human, or if the AI confidence score drops, the workflow disables the AI node.",
          "The system then sends an SMS/Slack notification to the agent: 'AI Hand-Off Triggered for John Smith. Please take over manually.' This ensures a flawless customer experience."
        ]
      }
    ],
    takeaways: [
      "OpenAI Assistants can qualify leads based on custom criteria 24/7.",
      "Function calling enables AI to check CRM calendar availability and book appointments dynamically.",
      "An automated human hand-off prevents AI hallucinations from ruining client conversations."
    ]
  }
};

export default async function BlogPostDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = blogPostsData[id];

  if (!post) {
    return (
      <div className="pt-40 pb-20 text-center min-h-screen bg-[var(--background)]">
        <p className="text-zinc-400 font-sans mb-4">Blog Post not found</p>
        <Link href="/blog" className="text-[var(--accent)] hover:underline">
          Return to Blog
        </Link>
      </div>
    );
  }

  return (
    <main className="pt-32 pb-32 bg-[var(--background)] min-h-screen">
      <article className="max-w-4xl mx-auto px-6">
        
        {/* Back Link */}
        <div className="mb-12">
          <Link href="/blog" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-sans mb-8">
            <ArrowLeft size={16} />
            <span>Back to Blog</span>
          </Link>
          
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-[var(--accent)] bg-[var(--accent)]/10 border border-[var(--accent)]/20 px-3 py-1 rounded-full uppercase tracking-wider mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-semibold text-white tracking-tight leading-tight mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-500 font-sans border-b border-white/10 pb-6">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[var(--accent)]/20 flex items-center justify-center text-[10px] text-[var(--accent)] font-bold">UF</span>
                <span className="text-zinc-300 font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar size={14} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={14} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Box */}
        <div className="bg-[#111111] border border-white/5 rounded-3xl p-8 md:p-12 mb-12">
          <p className="text-lg text-zinc-300 font-sans italic leading-relaxed border-l-2 border-[var(--accent)] pl-6 mb-10">
            {post.overview}
          </p>

          <div className="space-y-12">
            {post.content.map((sec: any, index: number) => (
              <section key={index} className="space-y-4">
                <h2 className="text-2xl font-heading font-semibold text-white">
                  {sec.sectionTitle}
                </h2>
                {sec.paragraphs.map((para: string, idx: number) => (
                  <p key={idx} className="text-zinc-400 font-sans text-base md:text-lg leading-relaxed">
                    {para}
                  </p>
                ))}
              </section>
            ))}
          </div>

          {/* Key Takeaways */}
          <div className="mt-12 pt-8 border-t border-white/5 space-y-4">
            <h3 className="text-xs font-sans uppercase tracking-[0.2em] text-zinc-500 flex items-center gap-2">
              <BookOpen size={14} className="text-[var(--accent)]" />
              Key Takeaways
            </h3>
            <ul className="space-y-3 pl-5 list-disc text-zinc-400 font-sans text-sm md:text-base leading-relaxed">
              {post.takeaways.map((takeaway: string, idx: number) => (
                <li key={idx}>
                  {takeaway}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA to Consultation */}
        <div className="text-center p-8 rounded-3xl bg-[var(--accent)]/5 border border-[var(--accent)]/20">
          <h2 className="text-2xl font-heading font-semibold text-white mb-2">Want to automate your workflows?</h2>
          <p className="text-zinc-400 font-sans text-sm mb-6">Let&apos;s build an automation framework specifically for your business operations.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[var(--accent)] text-black px-8 py-3 rounded-full font-sans font-semibold text-sm hover:opacity-90 transition-all">
            Book a Free Consultation
          </Link>
        </div>

      </article>
    </main>
  );
}
