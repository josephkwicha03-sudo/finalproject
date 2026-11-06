import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { Section, SectionHeader } from "@/components/section-header";
import { PROJECTS } from "@/data/projects";
import { WorkGallery } from "@/components/work-gallery";
import { ProjectsHero } from "@/components/projects-hero";

export const metadata: Metadata = {
  title: "Projects",
  description: "Design work and software projects by Joseph Baya Kwicha.",
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />

      <Section className="pt-0">
        <SectionHeader
          eyebrow="Design work"
          title="Graphic design"
          description="Posters, infographics and visual identity work for clients and campus events."
        />
        <WorkGallery />
      </Section>

      <Section className="border-t border-border">
        <SectionHeader
          eyebrow="Projects"
          title="Software and digital projects"
          description="Digital solutions, church media and online commerce projects, with the problem, approach and outcome for each."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Section>
    </>
  );
}
