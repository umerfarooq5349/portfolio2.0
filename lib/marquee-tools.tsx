import React from "react";
import { MarqueeItem } from "@/components/ui/slanted-glass-marquee";

export const BrandLogos = {
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
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z" fill="currentColor" />
    </svg>
  ),
};

export const TOOLS_DATA: MarqueeItem[] = [
  { name: "GoHighLevel", icon: <BrandLogos.GoHighLevel /> },
  { name: "n8n Workflows", icon: <BrandLogos.n8n /> },
  { name: "Zapier Mesh", icon: <BrandLogos.Zapier /> },
  { name: "AI Chatbots & Voice", icon: <BrandLogos.OpenAI /> },
  { name: "Make.com", icon: <BrandLogos.Make /> },
  { name: "HubSpot CRM", icon: <BrandLogos.HubSpot /> },
  { name: "Stripe Billing", icon: <BrandLogos.Stripe /> },
];
