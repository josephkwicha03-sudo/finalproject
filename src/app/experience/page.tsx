import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/section-header";
import { Timeline } from "@/components/timeline";
import { ExperienceHero } from "@/components/experience/experience-hero";

export const metadata: Metadata = {
  title: "Experience",
  description: "Education and professional experience.",
};

export default function ExperiencePage() {
  return (
    <>
      <ExperienceHero />

      <Section className="border-t border-white/10">
        <SectionHeader
          title="Education and experience"
          description="My academic background and the roles that have shaped my skills."
        />
        <Timeline />
      </Section>
    </>
  );
}
