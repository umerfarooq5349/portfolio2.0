import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Muhammad Umer | CRM & Systems Architect",
  description: "Learn more about Muhammad Umer Farooq, a seasoned automation expert focused on streamlining business operations.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
