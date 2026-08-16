"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const IconCloud = dynamic(
  () => import("@/components/ui/interactive-icon-cloud").then((m) => m.IconCloud),
  {
    ssr: false,
    loading: () => <div className="h-[300px] w-full flex items-center justify-center" />,
  }
);

const slugs = [
  "n8n",
  "zapier",
  "make",
  "openai",
  "python",
  "hubspot",
  "salesforce",
  "airtable",
  "stripe",
  "twilio",
  "sendgrid",
  "mailchimp",
  "slack",
  "discord",
  "google",
  "googlesheets",
  "googlecloud",
  "webflow",
  "wordpress",
  "shopify",
  "postgresql",
  "mongodb",
  "firebase",
  "nodedotjs",
  "typescript",
  "javascript",
  "react",
  "nextdotjs",
  "docker",
  "github",
  "vercel",
];

export function ToolsCloudSection() {
  return (
    <section
      aria-label="Tools & Platforms I Work With"
      className="py-20 bg-[var(--background)] relative overflow-hidden border-t border-[var(--border-subtle)]"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[var(--accent)]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column — Text & Info */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)]/10 px-3.5 py-1 text-xs font-sans font-semibold text-[var(--accent)] border border-[var(--accent)]/25 tracking-widest uppercase mb-4">
                Tech &amp; Automation Ecosystem
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-heading font-semibold text-white tracking-tight leading-[1.15] mb-6"
            >
              Tools &amp; Platforms <br />
              <span className="text-[var(--accent)]">I Work With</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[var(--ice)]/80 font-sans text-base leading-relaxed mb-8 max-w-lg"
            >
              I build custom CRM architectures and 24/7 automated workflows using industry-certified platforms, AI engines, databases, and custom API integrations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-2.5"
            >
              {[
                "GoHighLevel",
                "n8n Workflows",
                "Zapier Pro",
                "AI Chatbots",
                "REST & GraphQL APIs",
                "PostgreSQL / Firebase",
                "React & Next.js",
                "Python & Node.js",
              ].map((tool) => (
                <span
                  key={tool}
                  className="px-3.5 py-1.5 rounded-full text-xs font-sans font-medium bg-[var(--surface)] text-[var(--ice)] border border-[var(--border-subtle)] shadow-sm"
                >
                  {tool}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Column — Interactive 3D Icon Cloud */}
          <div className="lg:col-span-6 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-md flex items-center justify-center p-6 rounded-3xl  backdrop-blur-xl "
            >
              <IconCloud iconSlugs={slugs} />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ToolsCloudSection;
