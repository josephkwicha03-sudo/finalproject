import Image from "next/image";
import Link from "next/link";
import type { ComponentType } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import { PROFILE } from "@/data/profile";

type Social = { href: string; label: string; icon: ComponentType<{ className?: string }> };

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
    <section className="px-4 pb-16 pt-12 md:pt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-12 rounded-3xl bg-[#244A20]/60 p-6 ring-1 ring-white/10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16 md:p-12 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700">
        {/* Framed portrait. It overhangs the panel slightly on larger screens for depth. */}
        <div className="relative mx-auto w-full max-w-sm md:-my-10 md:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-primary/20 shadow-2xl">
            <Image
              src={PROFILE.photo}
              alt={`Portrait of ${PROFILE.name}`}
              fill
              priority
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover object-top"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div aria-hidden className="h-1 w-16 rounded-full bg-secondary" />
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Experience</p>
          <h1 className="font-serif text-5xl font-medium leading-tight tracking-tight text-white md:text-6xl">
            {PROFILE.name}
          </h1>
          <p className="text-lg text-primary">{PROFILE.tagline}</p>
          <p className="max-w-xl text-base leading-relaxed text-white/85 md:text-lg">{PROFILE.summary}</p>

          <div className="flex flex-wrap items-center justify-between gap-6 pt-4">
            {socials.length > 0 && (
              <ul className="flex items-center gap-5">
                {socials.map(({ href, label, icon: Icon }) => {
                  const isMail = href.startsWith("mailto:");
                  return (
                    <li key={label}>
                      <a
                        href={href}
                        aria-label={label}
                        target={isMail ? undefined : "_blank"}
                        rel={isMail ? undefined : "noopener noreferrer"}
                        className="text-secondary transition-opacity hover:opacity-80"
                      >
                        <Icon className="h-5 w-5" />
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
                className="grid h-11 w-11 place-items-center rounded-md bg-secondary text-secondary-foreground transition-transform hover:scale-105"
              >
                <ArrowLeft className="h-5 w-5" aria-hidden />
              </Link>
              <Link
                href="/projects"
                aria-label="Next: Projects"
                className="grid h-11 w-11 place-items-center rounded-md bg-secondary text-secondary-foreground transition-transform hover:scale-105"
              >
                <ArrowRight className="h-5 w-5" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
