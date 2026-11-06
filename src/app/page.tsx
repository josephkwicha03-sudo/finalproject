import { Hero } from "@/components/home/hero";
import { IntroStrip } from "@/components/home/intro-strip";
import { Ticker } from "@/components/home/ticker";
import { Services } from "@/components/home/services";
import { Showreel } from "@/components/home/showreel";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { ContactSection } from "@/components/home/contact-section";
import { Section, SectionHeader } from "@/components/section-header";
import { SkillsGrid } from "@/components/skills-grid";
import { Insights } from "@/components/home/insights";
import { Reveal } from "@/components/reveal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroStrip />
      <Ticker />
      <Reveal>
        <Services />
      </Reveal>
      <Reveal>
        <Showreel />
      </Reveal>
      <Reveal>
        <FeaturedProjects />
      </Reveal>
      <Reveal>
        <Section labelledBy="skills-title" className="border-t border-border">
          <SectionHeader
            id="skills-title"
            eyebrow="Skills"
            title="What I work with"
            description="Languages, tools and fundamentals I use to build software."
          />
          <SkillsGrid />
        </Section>
      </Reveal>
      <Reveal>
        <Insights />
      </Reveal>
      <Reveal>
        <ContactSection />
      </Reveal>
    </>
  );
}
