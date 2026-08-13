import Image from "next/image";
import {
  ArrowDownIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "@/components/icons";
import { Container } from "@/components/section";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="about" aria-labelledby="hero-name" className="relative min-h-[100svh] overflow-hidden">
      <Image
        src="/hero-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#070b12]/78 dark:bg-[#070b12]/72" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#070b12]/40 via-transparent to-background" />

      <Container className="relative flex min-h-[100svh] flex-col justify-between pb-8 pt-24">
        <div className="grid items-center gap-12 py-10 lg:grid-cols-[1.15fr_0.85fr] lg:py-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
              {site.eyebrow}
            </p>
            <h1
              id="hero-name"
              className="mt-4 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              {site.name}
            </h1>
            <div className="line-gradient mt-5" />
            <p className="mt-6 max-w-xl text-base leading-8 text-white/85 sm:text-lg">
              {site.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-fg"
              >
                View My Work
                <ArrowDownIcon className="h-4 w-4" />
              </a>
              <a
                href={site.resumePath}
                download
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/20 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm hover:border-accent"
              >
                <DownloadIcon className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <figure className="overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-2 backdrop-blur-md">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src={site.headshot.src}
                  alt={site.headshot.alt}
                  fill
                  unoptimized={site.headshot.src.endsWith(".svg")}
                  sizes="(max-width: 1024px) 70vw, 320px"
                  className="object-cover"
                />
              </div>
              <figcaption className="flex items-center justify-center gap-2 py-3 text-sm text-white/90">
                <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                Open to Opportunities
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:gap-8">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-white/50 uppercase">
            Find me
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/80">
            <li>
              <a
                className="inline-flex items-center gap-2 hover:text-accent"
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon /> GitHub
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center gap-2 hover:text-accent"
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon /> LinkedIn
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-2 hover:text-accent" href={`mailto:${site.email}`}>
                <MailIcon /> Email
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
