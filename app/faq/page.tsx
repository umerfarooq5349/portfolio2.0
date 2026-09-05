"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Calendar, MessageSquare } from "lucide-react";
import Link from "next/link";
import RippleButton from "@/components/lightswind/ripple-button";
import { MagneticButton } from "@/components/lightswind/magnetic-button";

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "faq-1",
    category: "Platforms & Tools",
    question: "What platforms and technologies do you specialize in?",
    answer:
      "I specialize in GoHighLevel (GHL) for CRM, sales funnels, and marketing pipelines, along with n8n and Zapier for complex, multi-system integration. For AI automation, I integrate OpenAI and Anthropic models directly into client CRM workflows for automated lead qualification and customer support.",
  },
  {
    id: "faq-2",
    category: "Delivery & Timelines",
    question: "How long does an automation or CRM setup typically take?",
    answer:
      "A focused automation workflow or single pipeline setup usually takes 3 to 7 business days. Full end-to-end CRM implementations, custom funnels, and multi-tool automations typically take 2 to 3 weeks from discovery to final testing and team training.",
  },
  {
    id: "faq-3",
    category: "Data & Migration",
    question: "Can you migrate existing client data and contacts into GoHighLevel?",
    answer:
      "Yes. I handle complete data sanitization, field mapping, contact tag taxonomy, and historical pipeline stage transfers from platforms like HubSpot, ActiveCampaign, ClickFunnels, or spreadsheets without data loss.",
  },
  {
    id: "faq-4",
    category: "Cost & Architecture",
    question: "What is the difference between Zapier and n8n for my business?",
    answer:
      "Zapier is great for simple, low-volume automations with common SaaS apps. n8n is significantly more cost-effective for high-volume transactions, allows advanced custom JavaScript/Python logic, and can be self-hosted with zero per-task penalty costs.",
  },
  {
    id: "faq-5",
    category: "AI & Chatbots",
    question: "How do custom AI chatbots integrate with my CRM?",
    answer:
      "AI chatbots are trained on your company knowledge base and services. When a visitor messages through your website, WhatsApp, or SMS, the AI qualifies them, extracts key intent, updates their contact record in GHL, and schedules a call directly on your calendar.",
  },
  {
    id: "faq-6",
    category: "Support & Handoff",
    question: "Do you provide documentation and training after deployment?",
    answer:
      "Every project includes detailed system architecture diagrams, custom Loom video walkthroughs, and a live handover session. I also offer monthly optimization retainers to ensure your automations remain dependable and scalable as your company grows.",
  },
];

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div
      role="region"
      aria-label="Frequently Asked Questions"
      className="pt-32 pb-32 min-h-screen bg-[var(--background)]"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-[var(--accent)] text-xs font-sans font-bold uppercase tracking-widest mb-4"
          >
            <HelpCircle size={14} />
            Frequently Asked Questions
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-heading font-semibold text-white tracking-tight mb-6"
          >
            Answers to Common{" "}
            <span className="text-[var(--accent)] italic">Automation Inquiries.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[var(--ice)]/80 font-sans text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
          >
            Everything you need to know about GoHighLevel setups, n8n workflows, AI integrations, timelines, and deployment process.
          </motion.p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface)] overflow-hidden transition-colors hover:border-[var(--accent)]/40"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`${faq.id}-content`}
                  id={`${faq.id}-button`}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                >
                  <div>
                    <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[var(--accent)] block mb-1">
                      {faq.category}
                    </span>
                    <h2 className="text-base sm:text-lg font-heading font-semibold text-white">
                      {faq.question}
                    </h2>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 text-[var(--accent)] p-2 rounded-full bg-[var(--surface-elevated)] border border-[var(--border-subtle)]"
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`${faq.id}-content`}
                      role="region"
                      aria-labelledby={`${faq.id}-button`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-[var(--border-subtle)]/50">
                        <p className="text-[var(--ice)]/80 font-sans text-sm sm:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[var(--surface-elevated)] to-[var(--surface)] border border-[var(--border-subtle)] text-center relative overflow-hidden"
        >
          <div className="max-w-xl mx-auto relative z-10">
            <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-white mb-3">
              Still have questions about your system?
            </h3>
            <p className="text-[var(--ice)]/80 font-sans text-sm sm:text-base mb-8">
              Let&apos;s evaluate your current tech stack and map out an automation roadmap tailored to your operations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <RippleButton>
                  <Calendar size={18} />
                  <span>Book Discovery Call</span>
                </RippleButton>
              </Link>
              <Link href="/services">
                <MagneticButton variant="outline" size="md">
                  <MessageSquare size={16} />
                  <span>Explore Services</span>
                </MagneticButton>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
