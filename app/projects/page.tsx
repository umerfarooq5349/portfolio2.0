import { ProjectsShowcase } from "@/components/sections/projects-showcase";
import { MiniTestimonials } from "@/components/sections/mini-testimonials";

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-20 bg-[var(--background)] min-h-screen">
      <div className="max-w-5xl mx-auto px-6 mb-8 text-center">
        <p className="text-[var(--accent)] font-sans uppercase tracking-[0.2em] text-sm font-semibold mb-4">Portfolio</p>
        <h1 className="text-5xl md:text-7xl font-heading font-semibold text-white tracking-tight">
          My Case <span className="text-[var(--accent)] italic">Studies</span>
        </h1>
        <p className="mt-6 text-[var(--ice)]/80 font-sans text-lg max-w-2xl mx-auto">
          Production automation systems engineered for measurable operational and revenue impact.
        </p>
      </div>
      <ProjectsShowcase />
      <MiniTestimonials heading="Clients After Every Project" subheading="Outcomes that speak louder than case studies." />
    </div>
  );
}
