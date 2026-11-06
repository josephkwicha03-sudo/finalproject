import type { Metadata } from "next";
import { ExperienceHero } from "@/components/experience/experience-hero";
import {
  ExperienceCards,
  ExperienceCta,
  ExperienceSkills,
  ExperienceStats,
} from "@/components/experience/experience-sections";

export const metadata: Metadata = {
  title: "Experience",
  description: "Education and professional experience.",
};

export default function ExperiencePage() {
  return (
    <>
      <ExperienceHero />
      <ExperienceStats />
      <ExperienceSkills />
      <ExperienceCards />
      <ExperienceCta />
    </>
  );
}
