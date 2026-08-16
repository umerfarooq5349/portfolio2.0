"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Calendar, BookOpen, Clock } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "How to Save 10+ Hours/Week with GHL Workflow Automation",
    category: "CRM Setup",
    date: "May 12, 2024",
    readTime: "5 min read",
    excerpt: "Learn the core workflow setups inside GoHighLevel that automate lead qualification, routing, and database reactivation so your team can focus purely on closing.",
  },
  {
    id: 2,
    title: "n8n vs Zapier: Choosing the Right Integration Tool for Scale",
    category: "Integrations",
    date: "April 28, 2024",
    readTime: "7 min read",
    excerpt: "A deep dive comparing n8n and Zapier. We cover cost differences, complexity, hosting options, and when you should upgrade to advanced API webhooks.",
  },
  {
    id: 3,
    title: "Implementing AI Chatbots to Qualify Real Estate Leads Instantly",
    category: "AI Automation",
    date: "March 15, 2024",
    readTime: "6 min read",
    excerpt: "Discover how to hook up OpenAI assistants to your GHL CRM via n8n. Qualify buyers, answer listing questions, and schedule tours on autopilot 24/7.",
  },
];

export default function BlogPage() {
  return (
    <main className="pt-32 pb-32 min-h-screen bg-[var(--background)]">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[var(--accent)] font-sans uppercase tracking-[0.2em] text-sm font-semibold mb-4"
          >
            Insights &amp; Guides
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading font-semibold text-white tracking-tight"
          >
            My <span className="text-[var(--accent)] italic">Insights</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-zinc-400 font-sans text-lg max-w-xl mx-auto"
          >
            Tips, tutorials, and strategies on scaling your operations with modern CRM tools and custom automated workflows.
          </motion.p>
        </div>

        {/* Blog Post List */}
        <div className="grid grid-cols-1 gap-10 max-w-3xl mx-auto">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative border-b border-white/10 pb-10 last:border-0 last:pb-0"
            >
              <Link href={`/blog/${post.id}`} className="block">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="space-y-4">
                    {/* Metadata row */}
                    <div className="flex items-center gap-4 text-xs font-sans">
                      <span className="text-[var(--accent)] uppercase tracking-wider font-semibold bg-[var(--accent)]/10 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-zinc-500 flex items-center gap-1">
                        <Calendar size={12} />
                        {post.date}
                      </span>
                      <span className="text-zinc-500 flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-heading font-semibold text-white group-hover:text-[var(--accent)] transition-colors leading-snug">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-zinc-400 font-sans text-sm md:text-base leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[var(--accent)] group-hover:text-black group-hover:border-[var(--accent)] transition-all duration-300 hidden md:flex">
                    <ArrowUpRight size={24} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA to newsletter or contact */}
        <div className="mt-20 max-w-3xl mx-auto p-8 rounded-3xl bg-[#111111] border border-white/5 text-center">
          <h3 className="text-xl font-heading font-semibold text-white mb-2">Want to streamline your operations?</h3>
          <p className="text-zinc-400 font-sans text-sm mb-6">Let&apos;s build an automation framework specifically for your workflow.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[var(--accent)] text-black px-8 py-3 rounded-full font-sans font-semibold text-sm hover:opacity-90 transition-all"
          >
            Schedule a Free Consultation
          </Link>
        </div>

      </div>
    </main>
  );
}
