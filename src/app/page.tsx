import { Hero } from "@/components/home/hero";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { ContactSection } from "@/components/home/contact-section";
import { Section, SectionHeader } from "@/components/section-header";
import { SkillsGrid } from "@/components/skills-grid";
import { Insights } from "@/components/home/insights";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Section labelledBy="skills-title" className="border-t border-border">
        <SectionHeader
          id="skills-title"
          eyebrow="Skills"
          title="What I work with"
          description="Languages, tools and fundamentals I use to build software."
        />
        <SkillsGrid />
      </Section>
      <Insights />
      <ContactSection />
    </>
  );
}
