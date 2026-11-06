import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WORK } from "@/data/work";

// A full-width feature panel built on an existing design sample. It links to the gallery on the Projects page.
export function Showreel() {
  const feature = WORK[0];

  return (
    <section aria-labelledby="showreel-title" className="bg-navy px-4 py-20 md:py-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-navy-deep shadow-2xl ring-1 ring-white/10">
        <div className="relative aspect-[16/9] min-h-[360px] md:aspect-[21/9]">
          <Image
            src={feature.src}
            alt=""
            fill
            sizes="(min-width: 1024px) 1152px, 100vw"
            className="object-cover opacity-70"
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-navy-deep/10" />

          <div className="absolute inset-0 flex items-center p-8 md:p-14">
            <div className="max-w-xl space-y-6">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-steel">Design work</p>
              <h2 id="showreel-title" className="font-serif text-4xl font-medium leading-tight text-white md:text-5xl">
                Posters, infographics and <span className="italic text-steel">brand identity</span>
              </h2>
              <p className="text-base leading-relaxed text-white/80 md:text-lg">
                Visual work for clients, campus events and churches, alongside the software projects I build.
              </p>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-md bg-cta px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-cta/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                View the gallery <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
