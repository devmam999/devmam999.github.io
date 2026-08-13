import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    email: site.email,
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://devmam999.github.io",
    sameAs: [site.linkedin, site.github],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of California, Santa Barbara",
    },
    knowsAbout: [
      "Software engineering",
      "React",
      "TypeScript",
      "Python",
      "Retrieval-augmented generation",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
