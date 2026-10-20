import { ProjectsShowcase } from "@/components/sections/projects-showcase";
import { MiniTestimonials } from "@/components/sections/mini-testimonials";

export default function ProjectsPage() {
  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-20 bg-[var(--background)] min-h-[100dvh]">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 mb-8 text-center">
        <p className="text-[var(--accent)] font-sans uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold mb-3">Portfolio</p>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-semibold text-white tracking-tight">
          My Case <span className="text-[var(--accent)] italic">Studies</span>
        </h1>
        <p className="mt-4 sm:mt-6 text-[var(--ice)]/80 font-sans text-sm sm:text-lg max-w-2xl mx-auto">
          Production automation systems engineered for measurable operational and revenue impact.
        </p>
      </div>
      <ProjectsShowcase showHeader={false} />
      <MiniTestimonials heading="Clients After Every Project" subheading="Outcomes that speak louder than case studies." />
    </div>
  );
}
