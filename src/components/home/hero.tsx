import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROFILE } from "@/data/profile";

// Full-bleed hero, matching the Projects hero. The negative top margin pulls it up behind the
// sticky header (h-20), and the top padding keeps the text clear of the navbar.
export function Hero() {
  return (
    <section className="-mt-20 relative isolate flex min-h-[600px] w-full items-center overflow-hidden bg-[#2E5A2A] md:min-h-[700px]">
      {/* Photo sits on the right so the text on the left never covers the face */}
      <div className="absolute inset-y-0 right-0 -z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_40%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_40%)] md:w-[66%]">
        <Image
          src={PROFILE.photo}
          alt={`Portrait of ${PROFILE.name}`}
          fill
          priority
          sizes="(min-width: 768px) 62vw, 100vw"
          className="object-cover object-[center_20%]"
        />
      </div>

      {/* Dark fade from the left keeps the text readable */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-[#2E5A2A] via-[#2E5A2A]/70 to-transparent" />
      {/* Light fade at the top keeps the white navbar links readable */}
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-black/70 to-transparent" />

      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 pb-16 pt-32 md:px-8 md:pt-40">
        <div className="max-w-2xl space-y-7 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700">
          <p className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white/85 backdrop-blur">
            {PROFILE.tagline}
          </p>
          <h1 className="font-serif text-5xl font-medium leading-[1.05] tracking-tight text-white md:text-7xl">
            <span className="block">{PROFILE.headline[0]}</span>
            <span className="block text-white/60">{PROFILE.headline[1]}</span>
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-white/80 md:text-xl">{PROFILE.summary}</p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-semibold text-black transition-transform hover:scale-[1.02]"
            >
              View projects
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/5 px-6 py-3 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Get in touch
            </Link>
          </div>

          <dl className="flex flex-wrap gap-x-10 gap-y-4 pt-4">
            {PROFILE.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-serif text-4xl font-medium text-white">{stat.value}</dt>
                <dd className="mt-1 text-sm text-white/70">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Availability card, bottom right on larger screens */}
      <div className="absolute bottom-8 right-6 hidden max-w-xs rounded-2xl border border-white/20 bg-white/10 p-5 text-white shadow-xl backdrop-blur-md md:right-10 md:block">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-white/70">Availability</p>
            <p className="mt-1 text-lg font-medium">{PROFILE.availability.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-white/80">{PROFILE.availability.text}</p>
          </div>
          <Link
            href="/#contact"
            aria-label="Get in touch"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-black transition-transform hover:scale-105"
          >
            <ArrowUpRight className="h-5 w-5" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
