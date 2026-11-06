import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ComponentType } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { Reveal } from "@/components/reveal";
import { PROFILE } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${PROFILE.name} about design and software projects.`,
};

type Social = { href: string; label: string; icon: ComponentType<{ className?: string }> };

// Social links that are filled in on PROFILE. Empty links are skipped.
const candidates: (Social | null)[] = [
  PROFILE.links.facebook ? { href: PROFILE.links.facebook, label: "Facebook", icon: FaFacebook } : null,
  PROFILE.links.instagram ? { href: PROFILE.links.instagram, label: "Instagram", icon: FaInstagram } : null,
  PROFILE.links.linkedin ? { href: PROFILE.links.linkedin, label: "LinkedIn", icon: FaLinkedin } : null,
  PROFILE.links.tiktok ? { href: PROFILE.links.tiktok, label: "TikTok", icon: FaTiktok } : null,
  PROFILE.links.whatsapp ? { href: PROFILE.links.whatsapp, label: "WhatsApp", icon: FaWhatsapp } : null,
];
const socials: Social[] = candidates.filter((s): s is Social => s !== null);

export default function ContactPage() {
  return (
    <>
      {/* Photo hero with a centred title, as in the reference. The header is transparent over it. */}
      <section className="-mt-20 relative isolate flex min-h-[460px] items-center justify-center overflow-hidden bg-navy px-6 pb-20 pt-32 text-center md:min-h-[520px]">
        <Image
          src={PROFILE.photo}
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[center_25%]"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-navy/75" />
        <div className="max-w-2xl space-y-5 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700">
          <h1 className="font-serif text-5xl font-medium tracking-tight text-steel md:text-7xl">Contact me</h1>
          <p className="text-lg leading-relaxed text-white/85 md:text-xl">
            Start the conversation about a design project, a software idea or an opportunity.
          </p>
        </div>
      </section>

      {/* Form on the left, details card on the right */}
      <section className="bg-cream px-4 py-20 text-navy md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-14">
          <Reveal>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-cta">Send a message</p>
              <h2 className="mt-4 font-serif text-3xl font-medium leading-tight md:text-5xl">
                Let&apos;s <span className="italic text-cta">talk</span>
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-navy/70">
                Open to conversations about software projects, study and opportunities in Computer Science, and to
                design commissions for brands, campus events and churches.
              </p>
              <div className="mt-10">
                <ContactForm />
              </div>
              <p className="mt-10 text-sm text-navy/70">
                Looking at my work first?{" "}
                <Link href="/projects" className="font-semibold text-cta hover:underline">
                  View projects
                </Link>
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <aside aria-label="Contact details" className="h-full rounded-3xl bg-navy p-8 text-white shadow-2xl md:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-steel">Get in touch</p>
              <h2 className="mt-4 font-serif text-3xl font-medium leading-tight">
                Here&apos;s how to <span className="italic text-steel">reach me</span>
              </h2>

              <ul className="mt-10 space-y-7">
                <li className="flex gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-steel text-navy">
                    <MapPin className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm text-white/60">Location</p>
                    <p className="mt-1 font-medium">{PROFILE.location}</p>
                  </div>
                </li>
                {PROFILE.email && (
                  <li className="flex gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-steel text-navy">
                      <Mail className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm text-white/60">Email</p>
                      <a href={`mailto:${PROFILE.email}`} className="mt-1 block font-medium hover:text-steel">
                        {PROFILE.email}
                      </a>
                    </div>
                  </li>
                )}
                {PROFILE.phone && (
                  <li className="flex gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-steel text-navy">
                      <Phone className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm text-white/60">Phone</p>
                      <a href={`tel:${PROFILE.phone}`} className="mt-1 block font-medium hover:text-steel">
                        {PROFILE.phone}
                      </a>
                    </div>
                  </li>
                )}
              </ul>

              {socials.length > 0 && (
                <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-white/15 pt-8">
                  <p className="mr-2 text-sm font-medium text-white/80">Follow me:</p>
                  <ul className="flex flex-wrap gap-3">
                    {socials.map(({ href, label, icon: Icon }) => (
                      <li key={label}>
                        <a
                          href={href}
                          aria-label={label}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="grid h-10 w-10 place-items-center rounded-full bg-white text-navy transition-colors hover:bg-steel"
                        >
                          <Icon className="h-4 w-4" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
