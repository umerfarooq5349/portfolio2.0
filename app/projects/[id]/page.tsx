import type { Metadata } from "next";
import Link from "next/link";
import { INDUSTRIES_DATA } from "@/lib/industries-data";
import {
  ArrowRight,
  Building2,
  HeartPulse,
  Rocket,
  GraduationCap,
  ShoppingBag,
  Zap,
  ShieldCheck,
  CalendarCheck,
  CheckCircle2,
} from "lucide-react";
import { MagneticButton } from "@/components/lightswind/magnetic-button";
import { LiquidGlassButton } from "@/components/lightswind/liquid-glass-button";

export const metadata: Metadata = {
  title: "Industries Served | CRM & Automation Architecture | Muhammad Umer Farooq",
  description:
    "Explore tailored CRM and AI automation architectures engineered for real estate, healthcare clinics, marketing agencies, education, and e-commerce.",
  alternates: {
    canonical: "https://muhammadumer.coderacks.com/industries",
  },
  openGraph: {
    title: "Industries Served | CRM & Automation Systems | Muhammad Umer Farooq",
    description:
      "Operational automation architectures tailored to your sector: GoHighLevel CRM, n8n webhook networks, and AI speed-to-lead loops.",
    url: "https://muhammadumer.coderacks.com/industries",
    type: "website",
  },
};

const industryIcons: Record<string, React.ReactNode> = {
  "real-estate": <Building2 className="w-7 h-7 text-[var(--accent)]" />,
  healthcare: <HeartPulse className="w-7 h-7 text-emerald-400" />,
  agencies: <Rocket className="w-7 h-7 text-[var(--pink)]" />,
  education: <GraduationCap className="w-7 h-7 text-[var(--accent)]" />,
  ecommerce: <ShoppingBag className="w-7 h-7 text-emerald-400" />,
};

export default function IndustriesIndexPage() {
  const industries = Object.values(INDUSTRIES_DATA);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Industries Served by Muhammad Umer Farooq",
    description:
      "CRM and automation architectures engineered for real estate, healthcare, agencies, education, and e-commerce.",
    url: "https://muhammadumer.coderacks.com/industries",
    hasPart: industries.map((ind) => ({
      "@type": "WebPage",
      name: ind.name,
      url: `https://muhammadumer.coderacks.com/industries/${ind.slug}`,
      description: ind.metaDescription,
    })),
  };

  return (
    <div className="pt-24 sm:pt-32 pb-20 sm:pb-32 min-h-[100dvh] bg-[var(--background)] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Header Section */}
        <header className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-sans font-bold uppercase tracking-[0.25em] text-[var(--accent)] block mb-3">
            Industries
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-semibold text-white tracking-tight leading-[1.12]">
            Automation shaped around{" "}
            <span className="text-[var(--accent)] italic">how your team works</span>
          </h1>
          <p className="mt-5 text-sm sm:text-lg font-sans text-[var(--ice)]/80 leading-relaxed">
            Different businesses lose leads and time in different places. I map the actual process, then build follow-up and operations workflows around your tools, team, and customer journey.
          </p>
        </header>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {industries.map((ind) => (
            <div
              key={ind.slug}
              className="group rounded-3xl bg-[var(--surface)] border border-[var(--border-subtle)] p-6 sm:p-8 flex flex-col justify-between hover:border-[var(--accent)]/50 hover:bg-[var(--surface-elevated)] transition-all duration-300 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:border-[var(--accent)]/30 transition-colors">
                    {industryIcons[ind.slug] || <Building2 className="w-7 h-7 text-[var(--accent)]" />}
                  </div>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/5 text-[var(--ice)]/80 border border-white/10">
                    {ind.commonWorkflows.length} Key Workflows
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-heading font-semibold text-white group-hover:text-[var(--accent)] transition-colors mb-3 leading-snug">
                  {ind.name}
                </h2>

                <p className="text-xs sm:text-sm font-sans text-[var(--ice)]/75 leading-relaxed mb-6">
                  {ind.overview}
                </p>

                {/* Primary Bottleneck Solved */}
                {ind.industryProblems[0] && (
                  <div className="p-3.5 rounded-2xl bg-[var(--background)]/60 border border-[var(--border-subtle)]/60 mb-6">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[var(--coral)] block mb-1">
                      Primary Bottleneck Solved
                    </span>
                    <p className="text-xs font-sans text-[var(--ice)]/90 font-medium">
                      {ind.industryProblems[0].title}
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <Link
                  href={`/industries/${ind.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-sans font-semibold text-[var(--accent)] group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight size={14} />
                </Link>

                {ind.relevantCaseStudySlug && (
                  <Link
                    href={`/projects/${ind.relevantCaseStudySlug}`}
                    className="text-[11px] font-sans text-[var(--ice)]/60 hover:text-white transition-colors"
                  >
                    View Case Study
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Shared approach strip */}
        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[var(--surface-elevated)] to-[var(--surface)] border border-[var(--border-subtle)] shadow-2xl mb-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-[var(--accent)]">No Generic Snapshots</span>
            <h2 className="text-xl sm:text-2xl font-heading font-semibold text-white">
              No generic snapshot dropped into your business
            </h2>
            <p className="text-sm font-sans text-[var(--ice)]/80 leading-relaxed">
              We start with your intake process, communication rules, CRM structure, and handoff needs. The result should match your workflow—not force your team into someone else&apos;s template.
            </p>
          </div>
        </section>

        {/* Bottom CTA Box */}
        <div className="text-center p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[var(--surface-elevated)] to-[var(--surface)] border border-[var(--accent)]/30 shadow-2xl space-y-5">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-[var(--accent)]">
            Ready to Talk
          </span>
          <h2 className="text-2xl sm:text-4xl font-heading font-semibold text-white max-w-xl mx-auto leading-tight">
            Tell me where leads or tasks get stuck
          </h2>
          <p className="text-xs sm:text-base font-sans text-[var(--ice)]/80 max-w-lg mx-auto leading-relaxed">
            We start with your current intake process and work from there. No commitment until we&apos;ve mapped the problem together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link href="/contact">
              <MagneticButton variant="primary" size="md" className="h-12 px-8 font-bold">
                <CalendarCheck size={18} />
                <span>Book Complimentary Call</span>
              </MagneticButton>
            </Link>
            <Link href="/services">
              <LiquidGlassButton variant="outline" className="h-12 px-7 text-xs sm:text-sm font-medium">
                <span>Discuss Your Project</span>
                <ArrowRight size={14} />
              </LiquidGlassButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}