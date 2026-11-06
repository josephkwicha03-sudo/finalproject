import Image from "next/image";

// Full-bleed photo hero in the style of the reference. The negative top margin pulls it up behind the
// sticky header (h-20), and the top padding keeps the text clear of the navbar.
export function ProjectsHero() {
  return (
    <section className="-mt-20 relative isolate flex min-h-[600px] w-full items-center overflow-hidden bg-navy md:min-h-[720px]">
      <Image
        src="/images/projects-hero.png"
        alt="A hand holding a design toolbar beside the Photoshop, Illustrator and Pen tool icons"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[60%_center]"
      />

      {/* Navy wash keeps the text readable and ties the photo to the palette */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/80 to-navy/30" />
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-black/60 to-transparent" />

      <div className="mx-auto w-full max-w-6xl px-6 pb-40 pt-32 md:px-8 md:pb-48 md:pt-40">
        <div className="max-w-2xl space-y-6 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-steel">Projects</p>
          <h1 className="font-serif text-5xl font-medium leading-[1.08] tracking-tight text-white md:text-7xl">
            Graphic design and <span className="italic text-steel">digital work</span>
          </h1>
          <p className="max-w-lg text-base leading-relaxed text-white/80 md:text-lg">
            Posters, infographics, brand identity and video editing, alongside the software and online projects I
            build.
          </p>
        </div>
      </div>

      {/* Large outlined word along the bottom edge, as in the reference hero */}
      <p
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-6 select-none text-center font-serif text-[18vw] font-medium uppercase leading-none tracking-tight text-transparent [-webkit-text-stroke:1px_rgb(255_255_255/0.35)] md:bottom-10"
      >
        Projects
      </p>
    </section>
  );
}
