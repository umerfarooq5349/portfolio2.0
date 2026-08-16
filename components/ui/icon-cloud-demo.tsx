"use client";

import { IconCloud } from "@/components/ui/interactive-icon-cloud"

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
]

export function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface)] px-10 pb-10 pt-4 shadow-2xl">
      <IconCloud iconSlugs={slugs} />
    </div>
  )
}

export default IconCloudDemo;
