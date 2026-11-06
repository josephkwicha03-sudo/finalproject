import { Briefcase, GraduationCap, Layers, MapPin, type LucideIcon } from "lucide-react";
import { PROFILE } from "@/data/profile";
import { CountUp } from "@/components/motion/count-up";

// The stat strip overlaps the bottom of the hero. Values come from PROFILE.stats and PROFILE.location.
const items: { icon: LucideIcon; value: string; label: string }[] = [
  { icon: GraduationCap, value: PROFILE.stats[0].value, label: PROFILE.stats[0].label },
  { icon: Layers, value: PROFILE.stats[1].value, label: PROFILE.stats[1].label },
  { icon: Briefcase, value: PROFILE.stats[2].value, label: PROFILE.stats[2].label },
  { icon: MapPin, value: PROFILE.location, label: "Based in" },
];

export function IntroStrip() {
  return (
    <div className="relative z-10 mx-auto -mt-28 max-w-5xl px-4 md:-mt-24">
      <dl className="grid grid-cols-1 divide-y divide-navy/10 rounded-2xl bg-white text-navy shadow-xl sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
        {items.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex items-start gap-4 p-6 md:p-7">
            <Icon className="mt-1 h-7 w-7 shrink-0 text-cta" aria-hidden />
            <div>
              <dt className="font-serif text-2xl font-medium">
                <CountUp value={value} />
              </dt>
              <dd className="mt-1 text-sm leading-snug text-navy/70">{label}</dd>
            </div>
          </div>
        ))}
      </dl>
    </div>
  );
}
