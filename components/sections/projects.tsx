"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { ArrowUpRightIcon, GithubIcon } from "@/components/icons";
import { Container, Tag } from "@/components/section";
import { type ProjectItem, projects } from "@/lib/content";

function ProjectImage({
  project,
  priority,
}: {
  project: ProjectItem;
  priority: boolean;
}) {
  const image = (
    <Image
      src={project.image}
      alt={project.imageAlt}
      width={1600}
      height={1200}
      sizes="(max-width: 1024px) 100vw, 70vw"
      className="h-auto w-full"
      priority={priority}
    />
  );

  const frameClass =
    "block overflow-hidden rounded-3xl border border-border bg-card";

  if (project.demo) {
    return (
      <a
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        className={frameClass}
        aria-label={`Try ${project.name} live`}
      >
        {image}
      </a>
    );
  }

  return <div className={frameClass}>{image}</div>;
}

export function Projects() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const baseId = useId();
  const project = projects.find((item) => item.id === activeId) ?? projects[0];

  return (
    <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <h2 id="projects-heading" className="sr-only">
          Projects
        </h2>
        <div className="grid items-start gap-8 lg:grid-cols-[240px_minmax(0,1fr)]">
          <nav aria-label="Project list">
            <div className="relative border-l border-border" role="tablist">
              {projects.map((item) => {
                const selected = item.id === project.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    id={`${baseId}-tab-${item.id}`}
                    aria-selected={selected}
                    aria-controls={`${baseId}-panel-${item.id}`}
                    onClick={() => setActiveId(item.id)}
                    className={`relative -ml-px block w-full cursor-pointer border-l-2 py-3.5 pl-5 text-left transition-colors duration-300 ${
                      selected
                        ? "border-accent text-accent"
                        : "border-transparent text-foreground/80 hover:text-foreground"
                    }`}
                  >
                    <span className="block text-base font-semibold lg:text-lg">{item.name}</span>
                    <span
                      className={`mt-1 block text-xs ${selected ? "text-accent/70" : "text-muted"}`}
                    >
                      {item.dates}
                    </span>
                  </button>
                );
              })}
            </div>
          </nav>

          <div
            key={project.id}
            id={`${baseId}-panel-${project.id}`}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${project.id}`}
            className="project-panel"
          >
            <ProjectImage
              project={project}
              priority={project.id === projects[0].id}
            />

            <article className="glass mt-5 rounded-3xl p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-3xl font-semibold">{project.name}</h3>
                  <span className="rounded-full border border-accent/35 px-3 py-1 text-xs text-accent">
                    {project.badge}
                  </span>
                </div>
                {(project.demo || project.github) ? (
                <div className="flex flex-wrap gap-2">
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-3.5 py-1.5 text-sm font-semibold text-accent-fg"
                    >
                      <ArrowUpRightIcon />
                      Try it out
                    </a>
                  ) : null}
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-sm hover:border-accent hover:text-accent"
                    >
                      <GithubIcon />
                      GitHub
                    </a>
                  ) : null}
                </div>
                ) : null}
              </div>
              <p className="mt-3 text-muted">{project.headline}</p>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">{project.summary}</p>
              <ul className="mt-5 space-y-2.5 text-sm leading-7 text-muted">
                {project.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${project.name} tech stack`}>
                {project.stack.map((item) => (
                  <li key={item}>
                    <Tag>{item}</Tag>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}
