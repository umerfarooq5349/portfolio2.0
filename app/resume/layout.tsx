import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume & Qualifications | Muhammad Umer Farooq",
  description:
    "Professional background, qualifications, and track record of Muhammad Umer Farooq, CRM & Automation Specialist in GoHighLevel, n8n, and Zapier.",
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
