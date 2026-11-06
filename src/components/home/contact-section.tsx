import Link from "next/link";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/section-header";
import { PROFILE } from "@/data/profile";

export function ContactSection() {
  return (
    <Section id="contact" labelledBy="contact-title" className="border-t border-border">
      <SectionHeader
        id="contact-title"
        eyebrow="Contact"
        title="Let's talk"
        description="Open to conversations about software projects, study and opportunities in Computer Science."
      />
      <div className="flex flex-col items-center gap-4">
        {PROFILE.email ? (
          <Button asChild size="lg">
            <a href={`mailto:${PROFILE.email}`}>
              <Mail className="mr-2 h-4 w-4" aria-hidden /> Email me
            </a>
          </Button>
        ) : (
          <p className="text-sm text-muted-foreground">Add your email address in src/data/profile.ts</p>
        )}
        {PROFILE.phone && (
          <p className="text-sm text-muted-foreground">
            Or call{" "}
            <a href={`tel:${PROFILE.phone}`} className="font-medium text-foreground hover:underline">
              {PROFILE.phone}
            </a>
          </p>
        )}
        <Button asChild variant="outline">
          <Link href="/contact">Send a message</Link>
        </Button>
      </div>
    </Section>
  );
}
