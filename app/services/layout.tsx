import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automation Services | CRM, GoHighLevel & AI Solutions",
  description: "Professional services including GoHighLevel setup, n8n workflows, Zapier integration, and custom AI chatbots.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
