import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PROFILE } from "@/data/profile";
import { Parallax } from "@/components/motion/parallax";

// Split hero: text on the left, framed portrait on the right, on the navy background. The negative
// top margin pulls it up behind the sticky header (h-20), and the top padding clears the navbar.
export function Hero() {
  return (
    <section className="-mt-20 relative isolate overflow-hidden bg-navy">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-40 pt-32 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:px-8 md:pb-44 md:pt-44">
        <div className="space-y-7 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-steel">{PROFILE.tagline}</p>
          <h1 className="font-serif text-5xl font-medium leading-[1.08] tracking-tight text-white md:text-6xl lg:text-7xl">
            <span className="block">{PROFILE.headline[0]}</span>
            <span className="block italic text-steel">{PROFILE.headline[1]}</span>
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-white/80 md:text-lg">{PROFILE.summary}</p>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-cta px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-cta/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get in touch <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-md border border-white/30 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-steel hover:text-steel focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              View projects
            </Link>
          </div>
        </div>

        {/* Portrait in a framed shape with a steel-blue block behind it, as in the reference layout */}
        <Parallax speed={0.05} className="relative mx-auto w-full max-w-md">
        <div className="relative w-full motion-safe:animate-in motion-safe:fade-in motion-safe:duration-1000">
          <div aria-hidden className="float-soft absolute -right-6 -top-6 h-full w-full rounded-[2.5rem] bg-secondary/80" />
          <div aria-hidden className="float-soft absolute -bottom-6 -left-6 h-24 w-24 rounded-3xl bg-secondary" style={{ animationDelay: "-3s" }} />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-card shadow-2xl">
            <Image
              src={PROFILE.photo}
              alt={`Portrait of ${PROFILE.name}`}
              fill
              priority
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover object-top"
            />
          </div>

          <div className="absolute bottom-6 left-4 right-4 rounded-2xl border border-white/15 bg-navy/90 p-5 shadow-xl backdrop-blur md:-left-10 md:right-auto md:w-72">
            <p className="text-xs font-medium uppercase tracking-wider text-steel">{PROFILE.availability.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-white/85">{PROFILE.availability.text}</p>
          </div>
        </div>
        </Parallax>
      </div>
    </section>
  );
}
