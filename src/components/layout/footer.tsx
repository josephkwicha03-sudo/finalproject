import Link from "next/link";
import type { ComponentType } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { Mail } from "lucide-react";
import { NAV_ITEMS, SITE } from "@/lib/site";
import { PROFILE } from "@/data/profile";

type Social = { href: string; label: string; icon: ComponentType<{ className?: string }> };

const headingClass = "text-lg font-semibold text-white";
const linkClass = "text-white/80 transition-colors hover:text-white";

export function Footer() {
  const year = new Date().getFullYear();

  const candidates: (Social | null)[] = [
    PROFILE.links.facebook ? { href: PROFILE.links.facebook, label: "Facebook", icon: FaFacebook } : null,
    PROFILE.links.instagram ? { href: PROFILE.links.instagram, label: "Instagram", icon: FaInstagram } : null,
    PROFILE.links.tiktok ? { href: PROFILE.links.tiktok, label: "TikTok", icon: FaTiktok } : null,
    PROFILE.links.linkedin ? { href: PROFILE.links.linkedin, label: "LinkedIn", icon: FaLinkedin } : null,
    PROFILE.links.whatsapp ? { href: PROFILE.links.whatsapp, label: "WhatsApp", icon: FaWhatsapp } : null,
    PROFILE.links.github ? { href: PROFILE.links.github, label: "GitHub", icon: FaGithub } : null,
    PROFILE.email ? { href: `mailto:${PROFILE.email}`, label: "Email", icon: Mail } : null,
  ];
  const socials = candidates.filter((s): s is Social => s !== null);

  return (
    <footer className="bg-navy-deep text-white/90">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-3xl font-extrabold tracking-tight text-white">{SITE.name}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/80">{PROFILE.summary}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className={headingClass}>Navigation</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={headingClass}>Information</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>{PROFILE.email || "Add your email in src/data/profile.ts"}</li>
            <li>{PROFILE.phone}</li>
            <li>{PROFILE.degree}</li>
            <li>{PROFILE.location}</li>
          </ul>
        </div>

        <div>
          <h2 className={headingClass}>Get in touch</h2>
          <p className="mt-4 text-sm text-white/80">
            Open to conversations about software projects, study and opportunities.
          </p>
          <Link href="/contact" className="mt-4 inline-block text-sm font-semibold text-steel hover:text-steel/80">
            Contact me →
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 py-8 text-center text-sm text-white/80">
          <p>
            Copyright © {year} {SITE.name}. All rights reserved. | Built with{" "}
            <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-steel hover:text-steel/80">
              Next.js
            </a>
          </p>

          {socials.length > 0 && (
            <ul className="flex gap-6">
              {socials.map(({ href, label, icon: Icon }) => {
                const isMail = href.startsWith("mailto:");
                return (
                  <li key={label}>
                    <a
                      href={href}
                      aria-label={label}
                      target={isMail ? undefined : "_blank"}
                      rel={isMail ? undefined : "noopener noreferrer"}
                      className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-steel hover:text-steel"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  </li>
                );
              })}
            </ul>
          )}

          <a href="#top" className="text-xs uppercase tracking-wider text-white/60 hover:text-white">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
