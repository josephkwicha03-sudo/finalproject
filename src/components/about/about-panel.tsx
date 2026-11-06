import Image from "next/image";
import { PROFILE } from "@/data/profile";
import { SKILLS } from "@/data/skills";

// Full-width colour bands in the template's style. Each band has a label on the left and text on the
// right. Only existing content is used: the biography paragraphs, the leadership skills, your own
// photo and design image, and the highlights from your About data.
function Band({
  label,
  children,
  className = "",
  innerClassName = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <section className={`relative isolate overflow-hidden px-6 py-16 md:py-24 ${className}`}>
      <div className={`mx-auto grid max-w-6xl gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-16 ${innerClassName}`}>
        <h2 className="font-sans text-base font-bold uppercase tracking-[0.12em] md:pt-1 md:text-lg">{label}</h2>
        <div className="max-w-2xl text-base leading-relaxed md:text-[17px]">{children}</div>
      </div>
    </section>
  );
}

export function AboutPanel() {
  const about = PROFILE.about;
  const leadership = SKILLS.find((group) => group.group === "Leadership")?.items ?? [];

  return (
    <div>
      {/* Blue band: first biography paragraph */}
      <Band label="Who I am" className="bg-cta text-white">
        <p>{about.paragraphs[0]}</p>
      </Band>

      {/* Photo band: second biography paragraph over your own design image */}
      <Band label="What I do" className="text-white" innerClassName="">
        <div aria-hidden className="absolute inset-0 -z-10">
          <Image src="/images/about-hero.png" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <p>{about.paragraphs[1]}</p>
      </Band>

      {/* Light band: leadership skills as the values list */}
      <Band label="How I work" className="bg-white text-navy">
        <ul className="space-y-3">
          {leadership.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden className="text-cta">
                –
              </span>
              {item}
            </li>
          ))}
        </ul>
      </Band>

      {/* Founder strip: your photo, name and role, with your three highlights beside it */}
      <section className="bg-navy px-6 py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:items-center">
          <div className="flex items-center gap-5">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full ring-4 ring-steel/30">
              <Image src={PROFILE.photo} alt={`Portrait of ${PROFILE.name}`} fill sizes="96px" className="object-cover" />
            </div>
            <div>
              <p className="font-serif text-2xl font-medium">{PROFILE.name}</p>
              <p className="mt-1 text-sm text-steel">{PROFILE.tagline}</p>
            </div>
          </div>
          <ul className="grid gap-4 sm:grid-cols-3">
            {about.highlights.map((item) => (
              <li key={item.title} className="border-l-2 border-steel pl-4">
                <p className="font-semibold">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
