import { PROFILE } from "@/data/profile";

// Title band in the template's style: a light band with a large centred title. The navbar is solid
// navy on this page, so the title sits below it with normal page padding.
export function AboutHero() {
  return (
    <section className="bg-cream px-6 pb-20 pt-20 text-center text-navy md:pb-28 md:pt-28">
      <div className="mx-auto max-w-3xl space-y-5 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-cta">{PROFILE.about.eyebrow}</p>
        <h1 className="font-serif text-5xl font-medium leading-tight tracking-tight md:text-7xl">About me</h1>
        <p className="mx-auto max-w-xl text-lg leading-relaxed text-navy/70">{PROFILE.summary}</p>
      </div>
    </section>
  );
}
