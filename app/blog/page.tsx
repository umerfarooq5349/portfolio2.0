"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock, CalendarCheck } from "lucide-react";
import RippleButton from "@/components/lightswind/ripple-button";
import { MagneticButton } from "@/components/lightswind/magnetic-button";

const posts = [
  {
    id: "1",
    slug: "gohighlevel-workflow-automation",
    title: "How to Build a Reliable Lead Follow-Up Workflow in GoHighLevel",
    category: "GoHighLevel",
    date: "May 12, 2024",
    readTime: "5 min read",
    excerpt: "A good follow-up workflow does more than send a message. It captures the inquiry, creates a clean record, assigns ownership, responds appropriately, and knows when to stop.",
  },
  {
    id: "2",
    slug: "n8n-vs-zapier",
    title: "n8n vs Zapier: Which Automation Tool Fits Your Workflow?",
    category: "Integrations",
    date: "April 28, 2024",
    readTime: "7 min read",
    excerpt: "The right choice depends on complexity, maintenance, task volume, integrations, and who will support the system after launch. A practical comparison.",
  },
  {
    id: "3",
    slug: "ai-chatbot-real-estate-leads",
    title: "How to Design an AI Assistant for Real Estate Lead Qualification",
    category: "AI Assistants",
    date: "March 15, 2024",
    readTime: "6 min read",
    excerpt: "A useful property assistant answers approved questions, gathers basic requirements, and helps route a lead to an agent—without inventing listing details or making unsupported claims.",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-24 sm:pt-32 pb-20 sm:pb-32 min-h-[100dvh] bg-[var(--background)]">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[var(--accent)] font-sans uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold mb-3"
          >
            Insights
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-heading font-semibold text-white tracking-tight"
          >
            Practical notes from building{" "}
            <span className="text-[var(--accent)] italic">CRM and automation systems</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-[var(--ice)]/80 font-sans text-lg max-w-xl mx-auto"
          >
            Clear explanations, workflow examples, and lessons from connecting lead capture, CRM tools, APIs, and AI assistants.
          </motion.p>
        </div>

        {/* Blog Post List */}
        <div className="grid grid-cols-1 gap-10 max-w-3xl mx-auto">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative border-b border-[var(--border-subtle)] pb-10 last:border-0 last:pb-0"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="space-y-4">
                    {/* Metadata row */}
                    <div className="flex items-center gap-4 text-xs font-sans">
                      <span className="text-[var(--accent)] uppercase tracking-wider font-semibold bg-[var(--accent)]/10 px-3 py-1 rounded-full border border-[var(--accent)]/20">
                        {post.category}
                      </span>
                      <span className="text-[var(--ice)]/60 flex items-center gap-1">
                        <Calendar size={12} />
                        {post.date}
                      </span>
                      <span className="text-[var(--ice)]/60 flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-heading font-semibold text-white group-hover:text-[var(--accent)] transition-colors leading-snug">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-[var(--ice)]/80 font-sans text-sm md:text-base leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="w-12 h-12 rounded-full border border-[var(--border-subtle)] bg-[var(--surface-elevated)] flex items-center justify-center shrink-0 group-hover:bg-[var(--accent)] group-hover:text-black group-hover:border-[var(--accent)] transition-all duration-300 hidden md:flex">
                    <ArrowUpRight size={22} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA to Strategy Consultation */}
        <div className="mt-20 max-w-3xl mx-auto p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[var(--surface-elevated)] to-[var(--surface)] border border-[var(--accent)]/30 text-center shadow-xl space-y-4">
          <h3 className="text-xl sm:text-2xl font-heading font-semibold text-white">Have a workflow you&apos;d like to simplify?</h3>
          <p className="text-[var(--ice)]/75 font-sans text-sm sm:text-base max-w-lg mx-auto">
            Tell me what happens today and where the process breaks. We&apos;ll identify a practical next step.
          </p>
          <div className="pt-2">
            <Link href="/contact">
              <MagneticButton variant="primary" size="md" className="h-12 px-8 font-bold">
                <CalendarCheck size={18} />
                <span>Book Your Complimentary Strategy Call</span>
              </MagneticButton>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
