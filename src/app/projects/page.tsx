import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/section-header";
import { WorkGallery } from "@/components/work-gallery";
import { ProjectsHero } from "@/components/projects-hero";
import { ProjectsShowcase } from "@/components/projects/projects-showcase";

export const metadata: Metadata = {
  title: "Projects",
  description: "Design work and software projects by Joseph Baya Kwicha.",
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />

      <ProjectsShowcase />

      <Section className="border-t border-white/10">
        <SectionHeader
          eyebrow="Design work"
          title="Graphic design"
          description="Posters, infographics and visual identity work for clients and campus events."
        />
        <WorkGallery />
      </Section>
    </>
  );
}
