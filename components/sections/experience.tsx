import { ChartIcon, PinIcon } from "@/components/icons";
import { Container, Tag } from "@/components/section";
import { experience } from "@/lib/content";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-24 py-24">
      <Container>
        <h2 id="experience-heading" className="reveal text-4xl font-semibold tracking-tight sm:text-5xl">
          Where I&apos;ve <span className="text-gradient">worked</span>
        </h2>

        <ol className="mt-14 space-y-16">
          {experience.map((job, index) => {
            const reversed = index % 2 === 1;
            return (
              <li
                key={job.company}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
              >
                <article
                  className={`glass rounded-3xl p-7 ${reversed ? "lg:order-2 reveal-right" : "reveal-left"}`}
                >
                  <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                    {job.dates}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold">{job.company}</h3>
                  <p className="mt-1 text-muted">{job.role}</p>
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-x-10 gap-y-3">
                    <p className="inline-flex items-center gap-2 text-sm text-muted">
                      <PinIcon className="h-3.5 w-3.5 text-accent" />
                      {job.location}
                    </p>
                    <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 px-3 py-1.5 text-sm text-accent">
                      <ChartIcon className="h-3.5 w-3.5" />
                      {job.metric}
                    </p>
                  </div>
                </article>

                <div className={reversed ? "lg:order-1 reveal-left" : "reveal-right"}>
                  <ul className="space-y-3 text-sm leading-7 text-muted">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${job.company} tech stack`}>
                    {job.tech.map((item) => (
                      <li key={item}>
                        <Tag>{item}</Tag>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
