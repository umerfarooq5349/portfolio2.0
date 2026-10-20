import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { INDUSTRIES_DATA, IndustryDetail } from "@/lib/industries-data";
import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  AlertCircle,
  Workflow,
  Layers,
  HelpCircle,
  ChevronRight,
  Briefcase,
} from "lucide-react";
import RippleButton from "@/components/lightswind/ripple-button";
import { MagneticButton } from "@/components/lightswind/magnetic-button";

export function generateStaticParams() {
  return Object.keys(INDUSTRIES_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES_DATA[slug];
  if (!industry) return { title: "Industry Not Found" };

  return {
    title: `${industry.headline} | Muhammad Umer Farooq`,
    description: industry.metaDescription,
    keywords: industry.targetKeywords,
    alternates: {
      canonical: `https://muhammadumer.coderacks.com/industries/${industry.slug}`,
    },
    openGraph: {
      title: `${industry.headline} | Muhammad Umer Farooq`,
      description: industry.metaDescription,
      url: `https://muhammadumer.coderacks.com/industries/${industry.slug}`,
      type: "website",
    },
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = INDUSTRIES_DATA[slug];

  if (!industry) {
    notFound();
  }

  return (
    <div className="pt-24 sm:pt-32 pb-20 sm:pb-28 bg-[var(--background)] min-h-[100dvh]">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumbs" className="mb-6 flex items-center gap-2 text-xs font-sans text-[var(--ice)]/60">
          <Link href="/" className="hover:text-[var(--accent)] transition-colors">Home</Link>
          <ChevronRight size={12} />
          <span className="text-[var(--ice)]/50">Industries</span>
          <ChevronRight size={12} />
          <span className="text-[var(--ice)] font-medium truncate max-w-xs">{industry.name}</span>
        </nav>

        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-sans font-medium text-[var(--ice)]/70 hover:text-[var(--accent)] transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Explore Services</span>
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12">
          <span className="inline-block text-xs font-sans font-bold uppercase tracking-[0.2em] text-[var(--accent)] mb-3">
            Industry Automation Architecture
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold text-white tracking-tight leading-[1.18] mb-6">
            {industry.headline}
          </h1>

          <p className="text-base sm:text-lg font-sans text-[var(--ice)]/80 leading-relaxed max-w-3xl">
            {industry.overview}
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <Link href="/contact">
              <RippleButton className="h-12 px-7 font-semibold">
                <CalendarCheck size={18} />
                <span>Book a Strategy Call</span>
              </RippleButton>
            </Link>

            <Link href={`/projects/${industry.relevantCaseStudySlug}`}>
              <MagneticButton variant="outline" size="sm" className="h-12 px-7 text-xs sm:text-sm font-medium">
                <span>View {industry.name} Case Study</span>
                <ArrowRight size={14} />
              </MagneticButton>
            </Link>
          </div>
        </header>

        {/* Core Industry Problems */}
        <section className="mb-14">
          <div className="flex items-center gap-2.5 mb-6">
            <AlertCircle className="text-[var(--accent)]" size={22} />
            <h2 className="text-2xl font-heading font-semibold text-white">
              Primary Operational Bottlenecks
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {industry.industryProblems.map((prob, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border-subtle)] flex flex-col justify-between"
              >
                <h3 className="text-base font-heading font-semibold text-white mb-2">
                  {prob.title}
                </h3>
                <p className="text-xs sm:text-sm font-sans text-[var(--ice)]/75 leading-relaxed">
                  {prob.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Common Workflows (Trigger, Action, Outcome) */}
        <section className="mb-14">
          <div className="flex items-center gap-2.5 mb-6">
            <Workflow className="text-[var(--accent)]" size={22} />
            <h2 className="text-2xl font-heading font-semibold text-white">
              Core Automated Workflows We Implement
            </h2>
          </div>

          <div className="space-y-4">
            {industry.commonWorkflows.map((wf, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[var(--surface)] border border-[var(--border-subtle)] space-y-3"
              >
                <h3 className="text-lg font-heading font-semibold text-white flex items-center gap-2">
                  <span className="text-[var(--accent)] font-mono text-sm font-bold">0{idx + 1}.</span>
                  <span>{wf.name}</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs sm:text-sm font-sans">
                  <div className="p-3 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
                    <span className="text-[11px] font-bold text-[var(--accent)] uppercase tracking-wider block mb-1">Trigger</span>
                    <p className="text-[var(--ice)]/90">{wf.trigger}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
                    <span className="text-[11px] font-bold text-white uppercase tracking-wider block mb-1">Automated Action</span>
                    <p className="text-[var(--ice)]/90">{wf.action}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">Business Outcome</span>
                    <p className="text-emerald-200">{wf.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended Architecture Blueprint */}
        <section className="mb-14">
          <div className="flex items-center gap-2.5 mb-6">
            <Layers className="text-[var(--accent)]" size={22} />
            <h2 className="text-2xl font-heading font-semibold text-white">
              Recommended Technical Architecture Blueprint
            </h2>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border-subtle)] space-y-3">
            {industry.recommendedArchitecture.map((arch, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-sans text-[var(--ice)]/90">
                <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>{arch}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Relevant Services & Case Study Cross-Links */}
        <section className="mb-14 p-6 sm:p-8 rounded-3xl bg-[var(--surface)]/80 border border-[var(--border-subtle)]">
          <span className="text-xs font-sans font-bold uppercase tracking-wider text-[var(--accent)] block mb-4">
            Recommended Service Modules
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            {industry.relevantServices.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className="p-4 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--accent)]/50 transition-colors group flex items-center justify-between"
              >
                <span className="text-xs font-heading font-semibold text-white group-hover:text-[var(--accent)] transition-colors">
                  {svc.title}
                </span>
                <ArrowRight size={14} className="text-[var(--accent)] shrink-0" />
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <p className="text-xs font-sans text-[var(--ice)]/60">Featured Case Study</p>
              <p className="text-sm font-heading font-semibold text-white">{industry.relevantCaseStudyTitle}</p>
            </div>
            <Link
              href={`/projects/${industry.relevantCaseStudySlug}`}
              className="inline-flex items-center gap-1.5 text-xs font-sans font-bold text-[var(--accent)] hover:underline"
            >
              <span>Read Full Implementation</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <div className="flex items-center gap-2.5 mb-6">
            <HelpCircle className="text-[var(--accent)]" size={22} />
            <h2 className="text-2xl font-heading font-semibold text-white">
              Industry FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {industry.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border-subtle)]"
              >
                <h3 className="text-base sm:text-lg font-heading font-semibold text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm font-sans text-[var(--ice)]/80 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Conversion CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[var(--surface-elevated)] to-[var(--surface)] border border-[var(--accent)]/30 text-center space-y-4 shadow-2xl">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-[var(--accent)]">
            Custom Industry Blueprint
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-white max-w-xl mx-auto">
            Ready to automate your {industry.name.toLowerCase()} operations?
          </h2>
          <p className="text-xs sm:text-sm font-sans text-[var(--ice)]/80 max-w-lg mx-auto leading-relaxed">
            Let&apos;s map out your lead capture, CRM pipeline, and booking workflows to eliminate manual work.
          </p>
          <div className="pt-2">
            <Link href="/contact">
              <RippleButton className="h-12 px-8 font-semibold">
                <CalendarCheck size={18} />
                <span>Book a Strategy Call</span>
              </RippleButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
