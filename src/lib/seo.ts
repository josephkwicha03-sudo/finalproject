import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Portfolio`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Portfolio`,
    description: SITE.description,
  },
  twitter: {
    card: "summary",
    title: `${SITE.name} | Portfolio`,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
};
