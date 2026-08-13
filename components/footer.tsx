import Link from "next/link";
import {
  CodeBracketsIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "@/components/icons";
import { navItems, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <Link href="/#about" className="inline-flex items-center gap-2 text-sm font-semibold">
          <CodeBracketsIcon className="h-4 w-4 text-accent" />
          {site.name}
        </Link>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-foreground">
              {item.label}
            </Link>
          ))}
          <Link href="/privacy" className="hover:text-foreground">
            Privacy
          </Link>
        </nav>
        <div className="flex items-center gap-3 text-sm text-muted">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:border-accent hover:text-accent"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:border-accent hover:text-accent"
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:border-accent hover:text-accent"
            aria-label="Email"
          >
            <MailIcon />
          </a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
