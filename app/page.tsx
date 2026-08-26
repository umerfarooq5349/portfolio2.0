import { HeroScroll } from "@/components/sections/hero-scroll";
import { StatsBar } from "@/components/sections/stats-bar";
import { TrustedBy } from "@/components/sections/trusted-by";

import { AboutSection } from "@/components/sections/about-section";
import { ServicesBento } from "@/components/sections/services-bento";
import { AutomationVisual } from "@/components/sections/automation-visual";
import { VisualShowcase } from "@/components/sections/visual-showcase";
import { ProjectsShowcase } from "@/components/sections/projects-showcase";
import { Testimonials } from "@/components/sections/testimonials";
import { ContactCTA } from "@/components/sections/contact-cta";
import AboutMinimalist from "@/components/sections/about-minimalist";

export default function Home() {
  return (
    <>
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
