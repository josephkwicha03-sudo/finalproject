import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { WORK } from "@/data/work";

// Intro row with a short statement and counts taken from the existing data, followed by the software
// project list. Each row is highlighted on hover (the first row is highlighted by default), and a
// design sample overlaps the list on larger screens.
export function ProjectsShowcase() {
  const overlay = WORK[1] ?? WORK[0];

  return (
    <section aria-labelledby="projects-intro-title" className="bg-cream px-4 py-20 text-navy md:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Intro: pill label, statement and counts */}
        <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-16">
          <div>
            <span className="inline-flex rounded-full border border-navy/30 px-4 py-1 text-xs font-medium uppercase tracking-wider">
              Overview
            </span>
          </div>
          <div>
            <h2 id="projects-intro-title" className="font-serif text-3xl font-medium leading-snug md:text-4xl">
              Visual identity and software, <span className="italic text-cta">shaped around real projects</span> for
              clients, campus events and churches.
            </h2>
            <dl className="mt-12 flex flex-wrap gap-x-14 gap-y-8">
              <div className="border-l border-cta/40 pl-6">
                <dt className="font-serif text-5xl font-medium">{PROJECTS.length}</dt>
                <dd className="mt-2 text-sm text-navy/70">Software and digital projects</dd>
              </div>
              <div className="border-l border-cta/40 pl-6">
                <dt className="font-serif text-5xl font-medium">{WORK.length}</dt>
                <dd className="mt-2 text-sm text-navy/70">Design samples</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Project list with an overlapping design sample */}
        <div className="relative mt-20">
          <ul className="border-t border-navy/15">
            {PROJECTS.map((project, index) => (
              <li
                key={project.title}
                className={`group relative flex items-start justify-between gap-6 border-b border-navy/15 px-5 py-7 transition-colors duration-300 md:px-8 md:py-9 ${
                  index === 0 ? "bg-cta text-white" : "hover:bg-cta hover:text-white"
                }`}
              >
                <div className="min-w-0 max-w-xl">
                  <h3 className="font-serif text-2xl font-medium md:text-3xl">{project.title}</h3>
                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      index === 0 ? "text-white/85" : "text-navy/70 group-hover:text-white/85"
                    }`}
                  >
                    {project.summary}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className={`rounded-full px-3 py-0.5 text-xs font-medium ${
                          index === 0 ? "bg-white/20" : "bg-navy/5 group-hover:bg-white/20"
                        }`}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
                <span
                  aria-hidden
                  className="mt-2 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-current/30"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </li>
            ))}
          </ul>

          {/* Overlapping design sample, visible on larger screens only */}
          <div className="pointer-events-none absolute left-[56%] top-1/2 hidden w-[24%] -translate-y-1/2 overflow-hidden rounded-xl shadow-2xl md:block">
            <div className="relative aspect-[4/3]">
              <Image src={overlay.src} alt="" fill sizes="25vw" className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
