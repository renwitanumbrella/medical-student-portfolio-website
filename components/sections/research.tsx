import { ArrowUpRight, BookOpen, FlaskConical, Microscope, type LucideIcon } from 'lucide-react'
import { projects, type ProjectItem } from '@/lib/portfolio-data'
import { Reveal } from '@/components/reveal'
import { DnaHelix } from '@/components/dna-helix'
import { Section, Tag } from '@/components/section'

const categoryIcon: Record<ProjectItem['category'], LucideIcon> = {
  Research: Microscope,
  Laboratory: FlaskConical,
  Academic: BookOpen,
}

export function Research() {
  return (
    <Section
      id="research"
      index="03"
      eyebrow="Research & projects"
      title="Inquiry at the bench and beyond"
      intro="Research experience, laboratory projects, and academic work that have shaped how I think about evidence and care."
    >
      <Reveal className="-mt-6 mb-10 md:-mt-8">
        <DnaHelix className="text-primary/70" />
      </Reveal>
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => {
          const Icon = categoryIcon[project.category]
          return (
            <Reveal as="li" key={i} delay={i * 100}>
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_20px_50px_-20px_oklch(0.22_0.05_260/0.25)]">
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-muted text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                    {project.category}
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-2xl leading-snug">{project.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {project.role} &middot; {project.period}
                </p>
                <p className="mt-4 flex-1 leading-relaxed text-muted-foreground text-pretty">
                  {project.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <li key={j}>
                      <Tag>{tag}</Tag>
                    </li>
                  ))}
                </ul>
                {project.link ? (
                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                  >
                    {project.link.label}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                ) : null}
              </article>
            </Reveal>
          )
        })}
      </ul>
    </Section>
  )
}
