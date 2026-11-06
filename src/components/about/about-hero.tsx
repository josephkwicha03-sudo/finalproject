import Image from "next/image";
import { PROFILE } from "@/data/profile";

// Full-bleed hero, matching the Home and Projects heroes. The negative top margin pulls it up
// behind the sticky header (h-20), and the top padding keeps the text clear of the navbar.
export function AboutHero() {
  return (
    <section className="-mt-20 relative isolate flex min-h-[560px] w-full items-center overflow-hidden bg-[#2E5A2A] md:min-h-[640px]">
      <Image
        src="/images/about-hero.png"
        alt="A rainbow-lit keyboard showing the function, letter and modifier keys"
        fill
        priority
        sizes="100vw"
        className="-z-20 scale-[1.15] object-cover object-center"
      />

      {/* Dark fade from the left keeps the text readable */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-[#2E5A2A] via-[#2E5A2A]/70 to-transparent" />
      {/* Light fade at the top keeps the white navbar links readable */}
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-black/70 to-transparent" />

      <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-32 md:px-8 md:pt-40">
        <div className="max-w-2xl space-y-5 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">{PROFILE.about.eyebrow}</p>
          <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight text-white md:text-6xl">
            About {PROFILE.name}
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-white/80">{PROFILE.summary}</p>
        </div>
      </div>
    </section>
  );
}
