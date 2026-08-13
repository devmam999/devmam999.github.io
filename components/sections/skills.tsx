import {
  BoxIcon,
  CapIcon,
  CodeBracketsIcon,
  DatabaseIcon,
  SparkIcon,
  ToolsIcon,
} from "@/components/icons";
import { Container, Tag } from "@/components/section";
import { education, involvement, skillGroups } from "@/lib/content";

const icons = {
  code: CodeBracketsIcon,
  box: BoxIcon,
  database: DatabaseIcon,
  tools: ToolsIcon,
  spark: SparkIcon,
};

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-24 py-24">
      <Container>
        <h2 id="skills-heading" className="reveal text-4xl font-semibold tracking-tight sm:text-5xl">
          What I
          <br />
          <span className="text-gradient">bring</span>
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              Technical stack
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {skillGroups.map((group, index) => {
                const Icon = icons[group.icon];
                return (
                  <div
                    key={group.title}
                    className={`glass rounded-3xl p-5 reveal ${index === 0 ? "sm:col-span-2" : ""}`}
                  >
                    <h3 className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                      <Icon className="h-4 w-4" />
                      {group.title}
                    </h3>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <li key={item}>
                          <Tag>{item}</Tag>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              Education
            </p>
            <article className="glass reveal-right rounded-3xl p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="mt-0 text-2xl font-semibold">{education.school}</h3>
                  <p className="mt-1 text-muted">{education.degree}</p>
                  <p className="mt-2 text-sm text-accent">{education.graduation}</p>
                </div>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent/30 text-accent">
                  <CapIcon className="h-5 w-5" />
                </span>
              </div>
              <dl className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <dd className="text-3xl font-semibold">{education.gpa}</dd>
                  <dt className="mt-1 text-sm text-muted">GPA / 4.00</dt>
                </div>
                <div>
                  <dd className="text-3xl font-semibold">{education.honors}</dd>
                  <dt className="mt-1 text-sm text-muted">Dean’s Honor List</dt>
                </div>
              </dl>
              <h4 className="mt-6 text-xs font-semibold tracking-[0.16em] text-muted uppercase">
                Relevant coursework
              </h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {education.coursework.map((course) => (
                  <li key={course}>
                    <Tag>{course}</Tag>
                  </li>
                ))}
              </ul>
            </article>

            <article className="glass reveal-right rounded-3xl p-6">
              <h3 className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">
                Leadership & involvement
              </h3>
              <ul className="mt-5 space-y-5">
                {involvement.map((item) => (
                  <li key={item.org} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <div>
                      <p className="font-semibold">{item.org}</p>
                      <p className="text-sm text-muted">{item.role}</p>
                      <p className="mt-1 text-sm text-muted">{item.detail}</p>
                    </div>
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
