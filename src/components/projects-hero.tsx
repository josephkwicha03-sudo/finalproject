import Image from "next/image";

// Full-bleed hero. The negative top margin pulls it up behind the sticky header (h-20),
// and the top padding keeps the text clear of the navbar.
export function ProjectsHero() {
  return (
    <section className="-mt-20 relative isolate flex min-h-[560px] w-full items-center overflow-hidden bg-background md:min-h-[640px]">
      <Image
        src="/images/projects-hero.png"
        alt="A hand holding a design toolbar beside the Photoshop, Illustrator and Pen tool icons"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[60%_center]"
      />

      {/* Dark fade from the left keeps the text readable */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/80 to-background/10" />
      {/* Light fade at the top keeps the white navbar links readable */}
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-black/70 to-transparent" />

      <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-32 md:px-8 md:pt-40">
        <div className="max-w-xl space-y-5 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Projects</p>
          <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight text-white md:text-6xl">
            Graphic design and digital work
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-white/80">
            Posters, infographics, brand identity and video editing, alongside the software and online
            projects I build.
          </p>
        </div>
      </div>
    </section>
  );
}
