import type { Metadata } from "next";
import { Testimonials } from "@/components/sections/testimonials";

export const metadata: Metadata = {
  title: "Client Testimonials & Reviews | Muhammad Umer Farooq",
  description: "Read real reviews and client feedback from businesses scaling with GoHighLevel CRM and automated workflows built by Muhammad Umer Farooq.",
};

export default function TestimonialsPage() {
  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-20 bg-[var(--background)] min-h-[100dvh]">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 mb-8 text-center">
        <p className="text-[var(--accent)] font-sans uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold mb-3">Reviews</p>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-semibold text-white tracking-tight">
          What <span className="text-[var(--accent)] italic">Clients</span> Say
        </h1>
        <p className="mt-4 sm:mt-6 text-[var(--ice)]/80 font-sans text-sm sm:text-lg max-w-2xl mx-auto">
          Direct feedback from agency owners, healthcare leaders, and service founders.
        </p>
      </div>
      <Testimonials showHeader={false} />
    </div>
  );
}
