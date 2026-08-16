import { ProjectsShowcase } from "@/components/sections/projects-showcase";
import { MiniTestimonials } from "@/components/sections/mini-testimonials";

export default function ProjectsPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6 mb-8 text-center">
        <p className="text-[var(--accent)] font-sans uppercase tracking-[0.2em] text-sm font-semibold mb-4">Portfolio</p>
        <h1 className="text-5xl md:text-7xl font-heading font-semibold text-white tracking-tight">
          My Case <span className="text-[var(--accent)] italic">Studies</span>
        </h1>
      </div>
      <ProjectsShowcase />
      <MiniTestimonials heading="Clients After Every Project" subheading="Outcomes that speak louder than case studies." />
    </main>
  );
}
