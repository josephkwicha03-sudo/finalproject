import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex h-full flex-col transition-[transform,box-shadow] duration-300 motion-safe:hover:-translate-y-1 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription className="text-sm leading-relaxed">{project.summary}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col gap-4">
        <ul className="flex flex-wrap gap-2" aria-label="Technologies">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
        {(project.repoUrl || project.liveUrl) && (
          <div className="flex gap-4 text-sm font-medium">
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground">
                <FaGithub className="h-4 w-4" aria-hidden /> Code
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-primary hover:underline">
                <ExternalLink className="h-4 w-4" aria-hidden /> Live demo
              </a>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
