import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Muhammad Umer Farooq",
  description:
    "Common questions answered about GoHighLevel CRM setup, n8n and Zapier automation workflows, custom AI chatbots, pricing, and deployment timelines.",
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
