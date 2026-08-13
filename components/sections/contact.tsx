import { CopyEmail } from "@/components/copy-email";
import {
  ArrowUpRightIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "@/components/icons";
import { Container } from "@/components/section";
import { site } from "@/lib/site";

const cards = [
  {
    label: "Email",
    value: site.email,
    detail: "Best way to reach me",
    href: `mailto:${site.email}`,
    icon: MailIcon,
    external: false,
  },
  {
    label: "LinkedIn",
    value: site.linkedinDisplay,
    detail: "Professional profile",
    href: site.linkedin,
    icon: LinkedinIcon,
    external: true,
  },
  {
    label: "GitHub",
    value: site.githubDisplay,
    detail: "Code & projects",
    href: site.github,
    icon: GithubIcon,
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-24 py-24">
      <Container className="text-center">
        <h2 id="contact-heading" className="reveal text-4xl font-semibold tracking-tight sm:text-6xl">
          Let&apos;s work <span className="text-gradient">together</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted">
          I&apos;m actively looking for software engineering internships.
          Whether you have a role in mind or just want to connect — my inbox is open.
        </p>

        <ul className="mt-10 grid gap-4 text-left sm:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <li key={card.label}>
                <a
                  href={card.href}
                  className="glass reveal group flex items-start gap-4 rounded-2xl p-5 transition-colors hover:border-accent"
                  {...(card.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/30 text-accent">
                    <Icon />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">
                      {card.label}
                    </span>
                    <span className="mt-1 block truncate font-medium">{card.value}</span>
                    <span className="mt-1 block text-sm text-muted">{card.detail}</span>
                  </span>
                  <ArrowUpRightIcon className="mt-1 h-4 w-4 text-muted group-hover:text-accent" />
                </a>
              </li>
            );
          })}
        </ul>
        <CopyEmail />
      </Container>
    </section>
  );
}
