import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { AboutPanel } from "@/components/about/about-panel";
import { Section, SectionHeader } from "@/components/section-header";
import { SkillsGrid } from "@/components/skills-grid";
import { PROFILE } from "@/data/profile";

export const metadata: Metadata = {
  title: "About",
  description: `About ${PROFILE.name}, ${PROFILE.degree.toLowerCase()}.`,
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <Section className="pt-12">
        <AboutPanel />
      </Section>

      <Section className="border-t border-border">
        <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Goals</p>
          <ul className="mt-5 grid gap-4 md:grid-cols-2">
            {PROFILE.goals.map((goal) => (
              <li key={goal} className="flex gap-3 text-muted-foreground">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {goal}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="border-t border-border">
        <SectionHeader eyebrow="Skills" title="Skills and tools" />
        <SkillsGrid />
      </Section>
    </>
  );
}
