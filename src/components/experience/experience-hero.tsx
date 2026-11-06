import Image from "next/image";
import Link from "next/link";
import type { ComponentType } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import { PROFILE } from "@/data/profile";
import { WORK } from "@/data/work";

type Social = { href: string; label: string; icon: ComponentType<{ className?: string }> };

// Split hero in the template's style: heading and summary on the left, a photo collage on the right.
// The social links and previous/next arrows are kept from the earlier version of this page.
export function ExperienceHero() {
  const candidates: (Social | null)[] = [
    PROFILE.links.facebook ? { href: PROFILE.links.facebook, label: "Facebook", icon: FaFacebook } : null,
    PROFILE.links.instagram ? { href: PROFILE.links.instagram, label: "Instagram", icon: FaInstagram } : null,
    PROFILE.links.tiktok ? { href: PROFILE.links.tiktok, label: "TikTok", icon: FaTiktok } : null,
    PROFILE.links.linkedin ? { href: PROFILE.links.linkedin, label: "LinkedIn", icon: FaLinkedin } : null,
    PROFILE.links.whatsapp ? { href: PROFILE.links.whatsapp, label: "WhatsApp", icon: FaWhatsapp } : null,
    PROFILE.email ? { href: `mailto:${PROFILE.email}`, label: "Email", icon: Mail } : null,
  ];
  const socials = candidates.filter((s): s is Social => s !== null);

  return (
    <section className="bg-cream px-6 pb-20 pt-16 text-navy md:pb-28 md:pt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-16">
        <div className="space-y-7 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700">
          <span className="inline-flex items-center gap-2 rounded-full border border-navy/30 px-4 py-1 text-xs font-medium uppercase tracking-wider">
            <span aria-hidden className="h-2 w-2 rounded-full bg-cta" />
            Experience
          </span>
          <h1 className="font-serif text-5xl font-medium leading-[1.08] tracking-tight md:text-6xl">
            Education and experience,{" "}
            <span className="italic text-cta">shaped by design and software</span>
          </h1>
          <p className="max-w-lg text-base leading-relaxed text-navy/70 md:text-lg">{PROFILE.summary}</p>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-cta px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-cta/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta"
            >
              Contact me <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-md border border-navy/30 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide transition-colors hover:border-cta hover:text-cta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta"
            >
              View projects
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-6 pt-4">
            {socials.length > 0 && (
              <ul className="flex items-center gap-4">
                {socials.map(({ href, label, icon: Icon }) => {
                  const isMail = href.startsWith("mailto:");
                  return (
                    <li key={label}>
                      <a
                        href={href}
                        aria-label={label}
                        target={isMail ? undefined : "_blank"}
                        rel={isMail ? undefined : "noopener noreferrer"}
                        className="grid h-10 w-10 place-items-center rounded-full border border-navy/20 text-navy transition-colors hover:border-cta hover:text-cta"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}

            {/* Previous and next arrows link to the neighbouring pages */}
            <div className="flex gap-2">
              <Link
                href="/about"
                aria-label="Previous: About"
                className="grid h-11 w-11 place-items-center rounded-full bg-navy text-white transition-transform hover:scale-105"
              >
                <ArrowLeft className="h-5 w-5" aria-hidden />
              </Link>
              <Link
                href="/contact"
                aria-label="Next: Contact"
                className="grid h-11 w-11 place-items-center rounded-full bg-navy text-white transition-transform hover:scale-105"
              >
                <ArrowRight className="h-5 w-5" aria-hidden />
              </Link>
            </div>
          </div>
        </div>

        {/* Photo collage: your portrait with two design samples, on a steel-blue block */}
        <div className="relative mx-auto grid w-full max-w-md grid-cols-2 gap-4 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-1000">
          <div aria-hidden className="absolute -right-5 -top-5 h-full w-full rounded-[2rem] bg-secondary/70" />
          <div className="relative col-span-2 aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src={PROFILE.photo}
              alt={`Portrait of ${PROFILE.name}`}
              fill
              priority
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover object-[center_25%]"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl">
            <Image src={WORK[0].src} alt="" fill sizes="20vw" className="object-cover" />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl">
            <Image src={WORK[1].src} alt="" fill sizes="20vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
