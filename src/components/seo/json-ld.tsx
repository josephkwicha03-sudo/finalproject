import { PROFILE } from "@/data/profile";
import { SITE } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PROFILE.name,
    url: SITE.url,
    description: PROFILE.summary,
    alumniOf: PROFILE.degree,
    sameAs: Object.values(PROFILE.links).filter(Boolean),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
