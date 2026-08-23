import { HeroScroll } from "@/components/sections/hero-scroll";
import { StatsBar } from "@/components/sections/stats-bar";
import { TrustedBy } from "@/components/sections/trusted-by";
import { ToolsCloudSection } from "@/components/sections/tools-cloud-section";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesBento } from "@/components/sections/services-bento";
import { AutomationVisual } from "@/components/sections/automation-visual";
import { VisualShowcase } from "@/components/sections/visual-showcase";
import { ProjectsShowcase } from "@/components/sections/projects-showcase";
import { Testimonials } from "@/components/sections/testimonials";
import { ContactCTA } from "@/components/sections/contact-cta";

export default function Home() {
  return (
    <>
      <HeroScroll />
      {/* <TrustedBy /> */}
      <StatsBar />
      {/* <ToolsCloudSection /> */}
      <AboutSection />
      <ServicesBento />
      <AutomationVisual />
      <VisualShowcase />
      <ProjectsShowcase />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
