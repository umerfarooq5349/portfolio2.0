"use client";

import { SlantedGlassMarquee, MarqueeItem } from "@/components/ui/slanted-glass-marquee";

// Official brand SVG logo icons
const BrandLogos = {
  GoHighLevel: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-[#3B82F6] shrink-0">
      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  n8n: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-[#FF6D5A] shrink-0">
      <circle cx="6" cy="12" r="3" fill="currentColor" />
      <circle cx="18" cy="6" r="3" fill="currentColor" />
      <circle cx="18" cy="18" r="3" fill="currentColor" />
      <path d="M8.5 10.5L15.5 7.5M8.5 13.5L15.5 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  Zapier: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#FF4F00] shrink-0">
      <path d="M12 2L14.5 9.5H22L16 14L18.5 21.5L12 17L5.5 21.5L8 14L2 9.5H9.5L12 2Z" fill="currentColor" />
    </svg>
  ),
  OpenAI: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#ECB365] shrink-0">
      <path d="M12 2L14.5 7.5L20 8L15.5 12L17 17.5L12 14.5L7 17.5L8.5 12L4 8L9.5 7.5L12 2Z" fill="currentColor" />
    </svg>
  ),
  Make: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#A855F7] shrink-0">
      <rect x="3" y="3" width="7" height="7" rx="2" fill="currentColor" />
      <rect x="14" y="3" width="7" height="7" rx="2" fill="currentColor" />
      <rect x="8.5" y="14" width="7" height="7" rx="2" fill="currentColor" />
    </svg>
  ),
  HubSpot: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#FF7A59] shrink-0">
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      <path d="M12 2V6M12 18V22M2 12H6M18 12H22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  Stripe: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#635BFF] shrink-0">
      <path d="M13.9 9.1c0-.7-.6-1-1.6-1-1.4 0-3.1.5-4.4 1.3V5.8C9.4 5.1 11.4 4.7 13 4.7c3.4 0 5.6 1.7 5.6 4.7 0 4.6-6.3 3.9-6.3 5.9 0 .8.7 1.1 1.8 1.1 1.6 0 3.6-.7 4.9-1.6v3.7c-1.5.8-3.5 1.2-5.1 1.2-3.6 0-5.9-1.7-5.9-4.8 0-4.9 6.3-4.1 6.3-5.8z" fill="currentColor" />
    </svg>
  ),
  API: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#B8DBD9] shrink-0">
      <path d="M16 18L22 12L16 6M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

const TOOLS_DATA: MarqueeItem[] = [
  { name: "GoHighLevel", icon: <BrandLogos.GoHighLevel />, color: "#FFFFFF" },
  { name: "n8n Automation", icon: <BrandLogos.n8n />, color: "#FFFFFF" },
  { name: "Zapier Workflows", icon: <BrandLogos.Zapier />, color: "#FFFFFF" },
  { name: "AI Agents & Chatbots", icon: <BrandLogos.OpenAI />, color: "#ECB365" },
  { name: "Make.com Integrations", icon: <BrandLogos.Make />, color: "#FFFFFF" },
  { name: "HubSpot CRM", icon: <BrandLogos.HubSpot />, color: "#FFFFFF" },
  { name: "Stripe & Webhooks", icon: <BrandLogos.Stripe />, color: "#FFFFFF" },
  { name: "Custom API Systems", icon: <BrandLogos.API />, color: "#B8DBD9" },
];

export function TrustedBy() {
  return (
    <section
      aria-label="Tools and Platforms I Work With"
      className="w-full relative z-20 -mt-8 md:-mt-12 -mb-8 md:-mb-12 overflow-visible"
    >
      {/* Templifica-Style Slanted Glassmorphic Marquee (-4deg) */}
      <SlantedGlassMarquee
        items={TOOLS_DATA}
        angle={-4}
        speed={1}
        pauseOnHover={true}
      />
    </section>
  );
}

export default TrustedBy;
