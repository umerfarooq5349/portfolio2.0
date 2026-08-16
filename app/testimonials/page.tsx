import { Testimonials } from "@/components/sections/testimonials";

export default function TestimonialsPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6 mb-8 text-center">
        <p className="text-[var(--accent)] font-sans uppercase tracking-[0.2em] text-sm font-semibold mb-4">Reviews</p>
        <h1 className="text-5xl md:text-7xl font-heading font-semibold text-white tracking-tight">
          What <span className="text-[var(--accent)] italic">Clients</span> Say
        </h1>
      </div>
      <Testimonials />
    </main>
  );
}
