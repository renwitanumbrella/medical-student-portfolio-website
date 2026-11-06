
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { competencyRoles } from '@/lib/competencies-data'
import { Reveal } from '@/components/reveal'
import { Section } from '@/components/section'

export function Competencies() {
  return (
    <Section
      id="competencies"
      index="02"
      eyebrow="EmiratesMEDs framework"
      title="Competencies"
      intro="The nine thematic roles of a future UAE medical graduate, providing a framework for the knowledge, skills, values, and responsibilities I aim to develop throughout medical school."
      tone="muted"
    >
      {/* Framework banner */}
      <Reveal>
        <div className="relative isolate mb-12 overflow-hidden rounded-3xl bg-navy px-7 py-10 text-navy-foreground shadow-xl md:px-10 md:py-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-28 size-80 rounded-full border border-white/10 motion-reduce:animate-none animate-[spin_36s_linear_infinite]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 top-12 size-48 rounded-full border border-accent/30 motion-reduce:animate-none animate-[spin_24s_linear_infinite]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-24 top-24 size-32 rounded-full bg-accent/15 blur-3xl motion-reduce:animate-none animate-pulse"
          />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-accent">
              <span className="size-1.5 rounded-full bg-accent motion-reduce:animate-none animate-pulse" />
              UAE national medical graduate framework
            </span>

            <h3 className="mt-6 max-w-2xl font-serif text-3xl leading-tight md:text-5xl">
              The kind of doctor I hope to become.
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-navy-muted md:text-base">
              Nine interconnected roles that bring together the clinical,
              academic, professional, and social responsibilities of a
              medical graduate.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Competency cards heading */}
      <Reveal>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="font-serif text-2xl">
              Explore the nine roles
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Select a role to explore its domain, reflection, and evidence.
            </p>
          </div>

          <span className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground">
            Nine competencies
          </span>
        </div>
      </Reveal>

      {/* Interactive competency cards */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {competencyRoles.map((role, i) => {
          const Icon = role.icon
          const isCompleted = role.status === 'completed'

          return (
            <Reveal key={role.number} delay={i * 75}>
              <Link
                href={`/competencies/${role.slug}`}
                aria-label={`${isCompleted ? 'View details for' : 'Explore'} ${role.title}`}
                className={`group flex min-h-[265px] flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-18px_oklch(0.22_0.05_260/0.25)] motion-reduce:transform-none ${
                  isCompleted
                    ? 'border-emerald-500/30 bg-emerald-500/[0.035] hover:border-emerald-500/70 hover:bg-emerald-500/[0.07]'
                    : 'border-border bg-background hover:border-accent/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-sm ${
                      isCompleted
                        ? 'text-emerald-700 dark:text-emerald-300'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {role.number} / 09
                  </span>

                  <span
                    className={`flex size-11 items-center justify-center rounded-xl transition-all duration-300 group-hover:rotate-3 ${
                      isCompleted
                        ? 'bg-emerald-500/10 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white dark:text-emerald-300'
                        : 'bg-accent/10 text-accent group-hover:bg-accent group-hover:text-navy'
                    }`}
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                </div>

                <h4
                  className={`mt-6 font-serif text-xl leading-snug transition-colors duration-300 ${
                    isCompleted
                      ? 'group-hover:text-emerald-700 dark:group-hover:text-emerald-300'
                      : 'group-hover:text-accent'
                  }`}
                >
                  {role.title}
                </h4>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {role.description}
                </p>

                <div className="mt-auto flex items-center justify-between gap-3 pt-6">
                  {isCompleted ? (
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                      Completed
                    </span>
                  ) : (
                    <span className="text-xs text-muted-foreground">
                      Explore role
                    </span>
                  )}

                  <span
                    className={`flex items-center gap-1 text-sm font-semibold transition-colors ${
                      isCompleted
                        ? 'text-emerald-700 group-hover:text-emerald-900 dark:text-emerald-300 dark:group-hover:text-emerald-200'
                        : 'text-accent group-hover:text-foreground'
                    }`}
                  >
                    {isCompleted ? 'View detail' : 'Explore role'}

                    <ArrowUpRight
                      className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
