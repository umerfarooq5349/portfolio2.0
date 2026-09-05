import { HeroScroll } from "@/components/sections/hero-scroll";
import { StatsBar } from "@/components/sections/stats-bar";
import { ServicesBento } from "@/components/sections/services-bento";
import { AutomationVisual } from "@/components/sections/automation-visual";
import { VisualShowcase } from "@/components/sections/visual-showcase";
import { ProjectsShowcase } from "@/components/sections/projects-showcase";
import { Testimonials } from "@/components/sections/testimonials";
import { ContactCTA } from "@/components/sections/contact-cta";
import AboutMinimalist from "@/components/sections/about-minimalist";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Muhammad Umer Farooq",
            url: "https://muhammadumer.coderacks.com",
            jobTitle: "CRM & Automation Expert",
            sameAs: [
              "https://www.linkedin.com/in/umer-ai-agents/",
              "https://www.instagram.com/muhammad.umer.faro.oq",
              "https://github.com/umerfarooq5349/"
            ]
          }),
        }}
      />
      <HeroScroll />
      {/* <TrustedBy /> */}
      <StatsBar />


      <AboutMinimalist />
      <ServicesBento />
      <AutomationVisual />
      <VisualShowcase />
      <ProjectsShowcase />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
