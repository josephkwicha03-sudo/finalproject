// Site-wide settings. Set NEXT_PUBLIC_SITE_URL to your live address when deploying.
export const SITE = {
  name: "Joseph Baya Kwicha",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://joseph-kwicha.vercel.app",
  description:
    "Portfolio of Joseph Baya Kwicha: graphic designer, Computer Science student at Laikipia University and founder of BayionTech.",
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
] as const;
