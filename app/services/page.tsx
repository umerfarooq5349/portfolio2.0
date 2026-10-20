import type { Metadata } from "next";
import Link from "next/link";
import { ServicesBento } from "@/components/sections/services-bento";
import { MiniTestimonials } from "@/components/sections/mini-testimonials";
import { SERVICES_DATA } from "@/lib/services-data";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "CRM & Workflow Automation Services | Muhammad Umer Farooq",
  description:
    "Explore dedicated automation services: GoHighLevel CRM setup, n8n workflow engineering, Zapier connections, AI chatbots, lead follow-up, and appointment booking.",
  alternates: {
    canonical: "https://muhammadumer.coderacks.com/services",
  },
};

export default function ServicesPage() {
  const servicesList = Object.values(SERVICES_DATA);

  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-20 bg-[var(--background)] min-h-[100dvh]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 mb-12 text-center">
        <p className="text-[var(--accent)] font-sans uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold mb-3">
          Specialized Services
        </p>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-semibold text-white tracking-tight">
          Intelligent Automation <span className="text-[var(--accent)] italic">Services</span>
        </h1>
        <p className="mt-4 sm:mt-6 text-[var(--ice)]/80 font-sans text-sm sm:text-lg max-w-2xl mx-auto">
          Every system is architected to eliminate repetitive manual admin work, connect disconnected software, and capture leads 24/7.
        </p>
      </div>

      {/* Direct Links to All 8 Dedicated Service Landing Pages */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicesList.map((svc) => (
            <Link
              key={svc.slug}
              href={`/services/${svc.slug}`}
              className="group p-6 rounded-3xl bg-[var(--surface)] border border-[var(--border-subtle)] hover:border-[var(--accent)]/50 hover:bg-[var(--surface-elevated)] transition-all flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent)]/10 px-2.5 py-0.5 rounded-full border border-[var(--accent)]/20">
                    {svc.badge}
                  </span>
                  <span className="text-xs text-[var(--ice)]/50 group-hover:text-[var(--accent)] transition-colors">
                    Explore →
                  </span>
                </div>
                <h2 className="text-lg font-heading font-semibold text-white group-hover:text-[var(--accent)] transition-colors mb-2 leading-snug">
                  {svc.shortTitle}
                </h2>
                <p className="text-xs sm:text-sm font-sans text-[var(--ice)]/75 leading-relaxed line-clamp-3 mb-4">
                  {svc.quickAnswer}
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--border-subtle)]/70 flex items-center justify-between text-xs font-sans text-[var(--ice)]/60">
                <span>{svc.keyCapabilities.length} Core Modules</span>
                <span className="inline-flex items-center gap-1 text-[var(--accent)] font-medium">
                  <span>View Details</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Visual Bento Showcase */}
      <div className="border-t border-[var(--border-subtle)] pt-12">
        <div className="max-w-5xl mx-auto px-5 text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-white">
            Architecture &amp; Capability Map
          </h2>
        </div>
        <ServicesBento showHeader={false} />
      </div>

      <MiniTestimonials heading="Results My Clients Love" subheading="Real businesses, real automations, real revenue." />
    </div>
  );
}
