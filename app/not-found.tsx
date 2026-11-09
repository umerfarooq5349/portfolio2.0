import Link from "next/link";
import { ArrowLeft, House, Wrench, Briefcase, CalendarCheck } from "lucide-react";
import { MagneticButton } from "@/components/lightswind/magnetic-button";
import { LiquidGlassButton } from "@/components/lightswind/liquid-glass-button";

export default function NotFound() {
  return (
    <div className="relative min-h-[100dvh] bg-[var(--background)] text-white flex items-center justify-center px-5 sm:px-6 py-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_30%,rgba(236,179,101,0.08),transparent_75%)] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Error Code Pill */}
        <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/25 text-xs font-sans font-bold uppercase tracking-[0.25em] mb-4">
          Error 404
        </span>

        {/* Big Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-bold text-white tracking-tight leading-none mb-4">
          Workflow <span className="text-[var(--accent)] italic">Not Found</span>
        </h1>

        <p className="text-sm sm:text-base font-sans text-[var(--ice)]/80 max-w-lg mx-auto leading-relaxed mb-8">
          The pipeline step or page you were looking for doesn&apos;t exist, was moved, or has had its URL updated. Let&apos;s get you back on track.
        </p>

        {/* Quick Navigation Destination Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 max-w-xl mx-auto">
          {[
            { label: "Home", href: "/", icon: House },
            { label: "Services", href: "/services", icon: Wrench },
            { label: "Projects", href: "/projects", icon: Briefcase },
            { label: "Contact", href: "/contact", icon: CalendarCheck },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-[var(--surface)] border border-[var(--border-subtle)] hover:border-[var(--accent)]/40 hover:text-[var(--accent)] transition-all text-xs font-sans font-medium text-[var(--ice)] shadow-md"
              >
                <Icon size={14} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Main Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <MagneticButton variant="primary" size="md" className="h-12 px-7 font-bold">
              <ArrowLeft size={16} />
              <span>Back to Homepage</span>
            </MagneticButton>
          </Link>
          <Link href="/contact">
            <LiquidGlassButton variant="outline" className="h-12 px-7 text-xs sm:text-sm font-medium">
              <CalendarCheck size={16} />
              <span>Book Complimentary Call</span>
            </LiquidGlassButton>
          </Link>
        </div>
      </div>
    </div>
  );
}