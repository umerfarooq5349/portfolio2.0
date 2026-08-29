import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Muhammad Umer | Hire an Automation Expert",
  description: "Get in touch with Muhammad Umer to discuss your CRM setup, n8n workflows, or AI automation project.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
