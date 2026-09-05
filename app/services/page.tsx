import type { Metadata } from "next";
import { ServicesBento } from "@/components/sections/services-bento";
import { MiniTestimonials } from "@/components/sections/mini-testimonials";

export const metadata: Metadata = {
  title: "Services | Muhammad Umer Farooq | CRM & Automation Specialist",
  description: "CRM setup, workflow automation, funnel building, AI chatbots, SMS & email automation, appointment booking, pipeline setup, and white-label GoHighLevel SaaS. All built for real business growth.",
};

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-20 bg-[var(--background)] min-h-screen">
      <div className="max-w-5xl mx-auto px-6 mb-8 text-center">
        <p className="text-[var(--accent)] font-sans uppercase tracking-[0.2em] text-sm font-semibold mb-4">Services</p>
        <h1 className="text-5xl md:text-7xl font-heading font-semibold text-white tracking-tight">
          What <span className="text-[var(--accent)] italic">I</span> Do
        </h1>
        <p className="mt-6 text-[var(--ice)]/80 font-sans text-lg max-w-2xl mx-auto">
          Every service I offer is designed to replace manual work with systems that run 24/7, so you can focus on what matters most.
        </p>
      </div>
      <ServicesBento />
      <MiniTestimonials heading="Results My Clients Love" subheading="Real businesses, real automations, real revenue." />
    </div>
  );
}
