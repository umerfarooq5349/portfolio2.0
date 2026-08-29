import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies & Projects | GoHighLevel & n8n Portfolio",
  description: "Explore my past projects and case studies showcasing business automation, CRM setups, and workflow optimization.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
