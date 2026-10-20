import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES_DATA, ServiceDetail } from "@/lib/services-data";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  CalendarCheck,
  Cpu,
  Layers,
  Sparkles,
  HelpCircle,
  Briefcase,
  ChevronRight,
} from "lucide-react";
import RippleButton from "@/components/lightswind/ripple-button";
import { MagneticButton } from "@/components/lightswind/magnetic-button";

export function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | Muhammad Umer Farooq`,
    description: service.metaDescription,
    keywords: service.targetKeywords,
    alternates: {
      canonical: `https://muhammadumer.coderacks.com/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | Muhammad Umer Farooq`,
      description: service.metaDescription,
      url: `https://muhammadumer.coderacks.com/services/${service.slug}`,
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];

  if (!service) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "Person",
      name: "Muhammad Umer Farooq",
      url: "https://muhammadumer.coderacks.com",
      jobTitle: "GoHighLevel & n8n Automation Expert",
    },
    serviceType: service.shortTitle,
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Automation Services",
      itemListElement: service.keyCapabilities.map((cap, idx) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: cap.title,
          description: cap.description,
        },
      })),
    },
  };

  return (
    <div className="pt-24 sm:pt-32 pb-20 sm:pb-28 bg-[var(--background)] min-h-[100dvh]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumbs" className="mb-6 flex items-center gap-2 text-xs font-sans text-[var(--ice)]/60">
          <Link href="/" className="hover:text-[var(--accent)] transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link href="/services" className="hover:text-[var(--accent)] transition-colors">Services</Link>
          <ChevronRight size={12} />
          <span className="text-[var(--ice)] font-medium truncate max-w-xs">{service.shortTitle}</span>
        </nav>

        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-sans font-medium text-[var(--ice)]/70 hover:text-[var(--accent)] transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to All Services</span>
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)]/10 px-3.5 py-1 text-xs font-sans font-semibold text-[var(--accent)] border border-[var(--accent)]/20 mb-4">
            <Sparkles size={14} />
            <span>{service.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold text-white tracking-tight leading-[1.15] mb-6">
            {service.title}
          </h1>

          <p className="text-base sm:text-lg font-sans text-[var(--ice)]/80 leading-relaxed max-w-3xl">
            {service.metaDescription}
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <Link href="/contact">
              <RippleButton className="h-12 px-7 font-semibold">
                <CalendarCheck size={18} />
                <span>Book a Strategy Call</span>
              </RippleButton>
            </Link>

            {service.relatedCaseStudySlug && (
              <Link href={`/projects/${service.relatedCaseStudySlug}`}>
                <MagneticButton variant="outline" size="sm" className="h-12 px-7 text-xs sm:text-sm font-medium">
                  <span>View Related Case Study</span>
                  <ArrowRight size={14} />
                </MagneticButton>
              </Link>
            )}
          </div>
        </header>

        {/* Answer-First Quick Definition Card */}
        <section className="p-6 sm:p-8 rounded-3xl bg-[var(--surface)] border border-[var(--accent)]/30 shadow-xl mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(ellipse_at_top_right,rgba(236,179,101,0.12),transparent_70%)] pointer-events-none" />
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-[var(--accent)] block mb-2">
            Overview &amp; Definition
          </span>
          <h2 className="text-xl sm:text-2xl font-heading font-semibold text-white mb-3">
            What is {service.shortTitle}?
          </h2>
          <p className="text-sm sm:text-base font-sans text-[var(--ice)]/90 leading-relaxed mb-4">
            {service.quickAnswer}
          </p>
          <div className="pt-3 border-t border-[var(--border-subtle)]">
            <p className="text-xs sm:text-sm font-sans text-[var(--ice)]/70">
              <strong className="text-white font-medium">Why work with a specialist: </strong>
              {service.whyChoose}
            </p>
          </div>
        </section>

        {/* Workflow Architecture Steps */}
        <section className="mb-14">
          <div className="flex items-center gap-2.5 mb-6">
            <Layers className="text-[var(--accent)]" size={22} />
            <h2 className="text-2xl font-heading font-semibold text-white">
              Standard Architecture &amp; Implementation Workflow
            </h2>
          </div>

          <div className="space-y-3">
            {service.workflowSteps.map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4.5 rounded-2xl bg-[var(--surface)] border border-[var(--border-subtle)]"
              >
                <span className="h-7 w-7 rounded-xl bg-[var(--accent)]/15 text-[var(--accent)] font-mono text-xs flex items-center justify-center font-bold shrink-0">
                  {idx + 1}
                </span>
                <p className="text-sm font-sans text-[var(--ice)]/90 font-medium pt-0.5">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Capabilities Grid */}
        <section className="mb-14">
          <div className="flex items-center gap-2.5 mb-6">
            <Cpu className="text-[var(--accent)]" size={22} />
            <h2 className="text-2xl font-heading font-semibold text-white">
              Core Technical Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.keyCapabilities.map((cap, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border-subtle)] flex flex-col justify-between"
              >
                <h3 className="text-lg font-heading font-semibold text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                  <span>{cap.title}</span>
                </h3>
                <p className="text-xs sm:text-sm font-sans text-[var(--ice)]/75 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Real-World Use Cases */}
        {service.useCases.length > 0 && (
          <section className="mb-14">
            <div className="flex items-center gap-2.5 mb-6">
              <Briefcase className="text-[var(--accent)]" size={22} />
              <h2 className="text-2xl font-heading font-semibold text-white">
                Real-World Implementation Scenarios
              </h2>
            </div>

            <div className="space-y-4">
              {service.useCases.map((uc, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border-subtle)] space-y-3"
                >
                  <span className="text-xs font-sans font-bold uppercase tracking-wider text-[var(--accent)]">
                    {uc.industry}
                  </span>
                  <p className="text-xs sm:text-sm font-sans text-[var(--ice)]/80">
                    <strong className="text-white">Operational Bottleneck: </strong>
                    {uc.scenario}
                  </p>
                  <p className="text-xs sm:text-sm font-sans text-[var(--emerald)]">
                    <strong className="text-white">Delivered System Outcome: </strong>
                    {uc.outcome}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Frequently Asked Questions (Answer-First) */}
        {service.faqs.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-2.5 mb-6">
              <HelpCircle className="text-[var(--accent)]" size={22} />
              <h2 className="text-2xl font-heading font-semibold text-white">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
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
        )}

        {/* Technology Badges */}
        <div className="p-6 rounded-2xl bg-[var(--surface)]/60 border border-[var(--border-subtle)] mb-14">
          <span className="text-xs font-sans font-bold uppercase tracking-wider text-[var(--ice)]/60 block mb-3">
            Integrated Platforms &amp; Technologies
          </span>
          <div className="flex flex-wrap gap-2">
            {service.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-full text-xs font-sans font-medium bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Final Conversion CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[var(--surface-elevated)] to-[var(--surface)] border border-[var(--accent)]/30 text-center space-y-4 shadow-2xl">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-[var(--accent)]">
            Ready to Automate?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-white max-w-xl mx-auto">
            Need a custom {service.shortTitle} system for your business?
          </h2>
          <p className="text-xs sm:text-sm font-sans text-[var(--ice)]/80 max-w-lg mx-auto leading-relaxed">
            Let&apos;s map out your bottlenecks and build a custom architecture that eliminates manual admin work.
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
