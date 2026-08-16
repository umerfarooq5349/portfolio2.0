"use client";

import { PageCurtains } from "@/components/ui/page-curtains";

export default function Template({ children }: { children: React.ReactNode }) {
  return <PageCurtains>{children}</PageCurtains>;
}
