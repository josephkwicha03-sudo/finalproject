"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/site";
import { PROFILE } from "@/data/profile";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

const linkBase =
  "relative py-1 text-[13px] font-semibold uppercase tracking-[0.12em] text-white/85 transition-colors hover:text-steel focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

// Monogram from the full name, for example "Joseph Baya Kwicha" becomes "JK".
const initials = PROFILE.name
  .split(" ")
  .filter(Boolean)
  .map((part, i, all) => (i === 0 || i === all.length - 1 ? part[0] : ""))
  .join("")
  .toUpperCase();

// Pages whose first section sits behind the transparent header. About and Experience start on light bands, so their headers stay solid.
const OVER_HERO = ["/", "/projects", "/contact"];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // The page heroes sit behind the header, so the header is transparent there until the user scrolls.
  const overHero = OVER_HERO.includes(pathname) && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  // Escape closes the menu, and the page stops scrolling underneath it.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  const linkClass = (href: string) =>
    cn(
      linkBase,
      isActive(href) &&
        "text-white after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-steel"
    );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 text-white transition-colors duration-300",
        overHero ? "bg-transparent" : "bg-navy/95 shadow-lg backdrop-blur-md"
      )}
    >
      <nav aria-label="Main" className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6">
        <Link
          href="/"
          aria-label={`${PROFILE.name}, home`}
          className="grid h-11 w-11 place-items-center rounded-full border-2 border-steel font-serif text-base font-semibold tracking-wide text-steel transition-colors hover:bg-steel hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {initials}
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={isActive(item.href) ? "page" : undefined} className={linkClass(item.href)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle className="text-white hover:bg-white/10 hover:text-white" />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle className="text-white hover:bg-white/10 hover:text-white" />
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full text-white hover:bg-white/10"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-white/10 bg-navy lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "block border-b border-white/10 py-3 text-base font-semibold uppercase tracking-[0.12em]",
                    isActive(item.href) ? "text-steel" : "text-white/80 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
