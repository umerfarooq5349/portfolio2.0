import type { Metadata } from "next";
import { AboutMinimalist } from "@/components/sections/about-minimalist";
import { StatsBar } from "@/components/sections/stats-bar";
import { MiniTestimonials } from "@/components/sections/mini-testimonials";
import { SlantedGlassMarquee } from "@/components/ui/slanted-glass-marquee";
import { TOOLS_DATA } from "@/lib/marquee-tools";

export const metadata: Metadata = {
  title: "About Muhammad Umer Farooq | CRM & Automation Expert",
  description: "Learn about Muhammad Umer Farooq, a CRM & Automation Expert with 1.5+ years of experience building GoHighLevel, n8n, and Zapier systems for real estate, healthcare, and service businesses.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 bg-[var(--background)] min-h-screen">
      {/* Main Minimalist About Section with restored semantic H1 */}
      <AboutMinimalist isPageHeading={true} />

      {/* Full-Width Slanted Glassmorphic Marquee (-3deg) */}
      <div className="w-full relative z-20 pb-6 pt-2 overflow-visible pointer-events-auto">
        <SlantedGlassMarquee
          items={TOOLS_DATA}
          angle={-3}
          speed={1}
          pauseOnHover={true}
        />
      </div>

      {/* Experience & Skills */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-[var(--accent)] font-sans uppercase tracking-[0.2em] text-sm font-semibold mb-8 border-b border-[var(--border-subtle)] pb-4">
              Experience
            </h3>
            <div className="space-y-8">
              {[
                { role: "CRM & Automation Specialist", company: "Freelance / Independent", period: "2023 - Present" },
                { role: "GoHighLevel Automation Builder", company: "Digital Agencies & Service Businesses", period: "2022 - 2023" },
                { role: "Workflow Automation Consultant", company: "Real Estate & Healthcare Clients", period: "2022 - Present" },
              ].map((job, idx) => (
                <div key={idx} className="border-b border-[var(--border-subtle)] pb-6 last:border-0">
                  <h4 className="text-xl font-heading font-semibold text-white">{job.role}</h4>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-[var(--ice)]/80 font-sans text-sm">{job.company}</p>
                    <p className="text-[var(--ice)]/60 font-sans text-xs">{job.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-[var(--accent)] font-sans uppercase tracking-[0.2em] text-sm font-semibold mb-8 border-b border-[var(--border-subtle)] pb-4">
              Core Skills &amp; Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "GoHighLevel (GHL)", "n8n", "Zapier", "AI Chatbots",
                "CRM Pipeline Setup", "Funnel Building", "Email Automation", "SMS Automation",
                "API Integrations", "Lead Management", "White Label GHL", "SaaS Setup",
                "Appointment Booking", "Workflow Design",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full border border-[var(--border-subtle)] text-sm font-sans text-[var(--ice)] bg-[var(--surface)] hover:border-[var(--accent)] hover:text-white transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <StatsBar />

      {/* Inline mini testimonials for trust */}
      <MiniTestimonials heading="Don't take my word for it" />
    </div>
  );
}
