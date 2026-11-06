import Image from "next/image";
import { Star } from "lucide-react";
import { PROFILE } from "@/data/profile";

export function AboutPanel() {
  const about = PROFILE.about;
  const stats = PROFILE.stats;

  return (
    <div className="grid gap-6 rounded-3xl bg-[#2E5A2A] p-6 text-white ring-1 ring-white/10 md:grid-cols-2 md:p-10 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700">
      {/* Left column: heading, bio and trust card */}
      <div className="flex flex-col justify-between gap-10">
        <div className="space-y-5">
          <p className="text-sm font-medium uppercase tracking-wider text-white/60">{about.eyebrow}</p>
          <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">{about.heading}</h2>
          <div className="space-y-4 text-base leading-relaxed text-white/70">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 text-zinc-900 shadow-xl">
          <div className="flex items-center gap-3">
            <Image
              src={PROFILE.photo}
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 rounded-full object-cover"
            />
            <p className="text-sm font-medium">{about.trust}</p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600">{PROFILE.summary}</p>
          <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-zinc-200 pt-5">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-semibold">{stat.value}</dt>
                <dd className="mt-1 text-xs text-zinc-500">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Right column: highlight cards */}
      <ul className="flex flex-col gap-4">
        {about.highlights.map((item, index) => (
          <li
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:bg-white/[0.07]"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-zinc-900">
              <Star className="h-4 w-4 fill-current" aria-hidden />
            </span>
            <p className="mt-5 text-lg font-semibold">
              <span className="sr-only">Highlight {index + 1}: </span>
              {item.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/65">{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
