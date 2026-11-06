import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader, Section } from "@/components/section-header";
import { PROJECTS } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <Section labelledBy="featured-projects-title">
      <SectionHeader
        id="featured-projects-title"
        eyebrow="Projects"
        title="Selected work"
        description="A few projects that show how I approach problems, design systems and write code."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.slice(0, 3).map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button asChild variant="outline">
          <Link href="/projects">
            All projects <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
