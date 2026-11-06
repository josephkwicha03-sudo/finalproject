import Link from "next/link";
import { ArrowRight, Briefcase, GraduationCap } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { PROFILE } from "@/data/profile";
import { SKILLS } from "@/data/skills";
import { TIMELINE } from "@/data/experience";

// Stats row: the three headline stats from PROFILE, separated by thin dividers.
export function ExperienceStats() {
  return (
    <section aria-label="Highlights" className="bg-white px-6 py-16 text-navy md:py-20">
      <dl className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-3 sm:gap-0">
        {PROFILE.stats.map((stat, i) => (
          <div key={stat.label} className={`px-6 text-center ${i > 0 ? "sm:border-l sm:border-navy/15" : ""}`}>
            <dt className="font-serif text-5xl font-medium md:text-6xl">{stat.value}</dt>
            <dd className="mt-3 text-sm text-navy/70">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

// Skill groups from src/data/skills.ts, shown as chips without percentages (no levels are given in the data).
export function ExperienceSkills() {
  return (
    <section aria-labelledby="experience-skills-title" className="bg-navy px-6 py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl">
        <header className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-steel">Skills</p>
          <h2 id="experience-skills-title" className="font-serif text-3xl font-medium leading-tight md:text-5xl">
            Skills by <span className="italic text-steel">area</span>
          </h2>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {SKILLS.map((group, index) => (
            <Reveal key={group.group} delay={index * 100}>
              <div className="h-full rounded-2xl bg-card p-7 ring-1 ring-white/10">
                <h3 className="font-serif text-2xl font-medium">{group.group}</h3>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// Experience and education as a card grid, with the first card highlighted as in the template.
// Entries come from src/data/experience.ts, in the same order as before.
export function ExperienceCards() {
  return (
    <section aria-labelledby="experience-cards-title" className="bg-cream px-6 py-20 text-navy md:py-28">
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-cta">Background</p>
          <h2 id="experience-cards-title" className="font-serif text-3xl font-medium leading-tight md:text-5xl">
            Education and <span className="italic text-cta">experience</span>
          </h2>
        </header>

        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TIMELINE.map((item, index) => {
            const highlighted = index === 0;
            const Icon = item.kind === "education" ? GraduationCap : Briefcase;
            return (
              <li key={`${item.title}-${item.period}`} className="flex">
                <Reveal delay={index * 80} className="flex w-full">
                  <article
                    className={`flex w-full flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                      highlighted ? "bg-steel text-navy shadow-xl" : "bg-white shadow-sm ring-1 ring-navy/5"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-steel">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <p className={`text-xs font-medium uppercase tracking-wider ${highlighted ? "text-navy/80" : "text-cta"}`}>
                        {item.period}
                      </p>
                    </div>
                    <h3 className="mt-6 font-serif text-xl font-medium leading-snug">{item.title}</h3>
                    <p className={`mt-1 text-sm font-medium ${highlighted ? "text-navy/80" : "text-navy/70"}`}>
                      {item.organization}
                      <span className="sr-only"> ({item.kind})</span>
                    </p>
                    {item.details.length > 0 && (
                      <ul
                        className={`mt-5 list-disc space-y-2 pl-5 text-sm leading-relaxed ${
                          highlighted ? "text-navy/85" : "text-navy/70"
                        }`}
                      >
                        {item.details.map((d) => (
                          <li key={d}>{d}</li>
                        ))}
                      </ul>
                    )}
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

// Closing call to action, using the existing contact wording.
export function ExperienceCta() {
  return (
    <section aria-labelledby="experience-cta-title" className="bg-navy-deep px-6 py-20 text-white md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <h2 id="experience-cta-title" className="font-serif text-3xl font-medium leading-tight md:text-4xl">
            Let&apos;s talk
          </h2>
          <p className="mt-3 text-base leading-relaxed text-white/75">
            Open to conversations about software projects, study and opportunities in Computer Science, and to design
            commissions.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-md bg-cta px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-cta/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Contact me <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </section>
  );
}
