import Link from "next/link";
import { BookOpen, Code2, Megaphone, Palette, type LucideIcon } from "lucide-react";

// Four areas of work, written from the descriptions already on the site (projects and skills).
const services: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Palette,
    title: "Graphic design",
    text: "Posters, infographics, brand identity and video editing for clients and campus events.",
  },
  {
    icon: Code2,
    title: "Software development",
    text: "Web and app development with HTML, CSS, JavaScript and Python, built on Computer Science foundations.",
  },
  {
    icon: Megaphone,
    title: "Church media",
    text: "Posters, infographics and short invitation and sermon-based videos for church events.",
  },
  {
    icon: BookOpen,
    title: "Digital commerce",
    text: "Online book reviews and discussions, and a platform for selling digital books.",
  },
];

export function Services() {
  return (
    <section aria-labelledby="services-title" className="bg-cream px-4 pb-20 pt-24 text-navy md:pb-28 md:pt-28">
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-cta">What I offer</p>
          <h2 id="services-title" className="font-serif text-3xl font-medium leading-tight md:text-5xl">
            Graphic design and software, <span className="italic text-cta">working together</span>
          </h2>
        </header>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, text }) => (
            <li key={title} className="group flex flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy text-primary transition-colors group-hover:bg-cta group-hover:text-white">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-6 font-serif text-xl font-medium">{title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/70">{text}</p>
              <Link
                href="/projects"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-cta hover:underline"
              >
                See the work <span aria-hidden>→</span>
                <span className="sr-only">about {title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
