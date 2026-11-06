
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import {
  ArrowLeft,
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  FileText,
  ImagePlus,
} from 'lucide-react'

import { competencyRoles } from '@/lib/competencies-data'
import { profile } from '@/lib/portfolio-data'
import { Reveal } from '@/components/reveal'

type PageProps = {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return competencyRoles.map((role) => ({
    slug: role.slug,
  }))
}

export default async function CompetencyDetailPage({
  params,
}: PageProps) {
  const { slug } = await params

  const role = competencyRoles.find((item) => item.slug === slug)

  if (!role) {
    notFound()
  }

  const Icon = role.icon

  const currentIndex = competencyRoles.findIndex(
    (item) => item.slug === role.slug,
  )

  const previousRole =
    currentIndex > 0 ? competencyRoles[currentIndex - 1] : null

  const nextRole =
    currentIndex < competencyRoles.length - 1
      ? competencyRoles[currentIndex + 1]
      : null

  return (
    <main className="min-h-screen bg-background">
      {/* Detail page navigation */}
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
          <Link
            href="/#competencies"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All competencies
          </Link>

          <Link
            href="/"
            className="font-serif text-sm font-medium text-foreground transition-colors hover:text-accent"
          >
            {profile.initials}
            <span className="ml-2 hidden sm:inline">
              {profile.name}
            </span>
          </Link>
        </div>
      </header>

      {/* Competency hero */}
      <section className="relative isolate overflow-hidden bg-navy text-navy-foreground">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-28 size-96 rounded-full border border-white/10 motion-reduce:animate-none animate-[spin_40s_linear_infinite]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-20 top-24 size-64 rounded-full border border-accent/20 motion-reduce:animate-none animate-[spin_30s_linear_infinite]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-1/3 size-72 rounded-full bg-accent/10 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 md:py-28">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-accent">
                EmiratesMEDs · Role {role.number} of 09
              </span>

              {role.status === 'completed' && (
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs font-medium uppercase tracking-wider text-emerald-300">
                  <BadgeCheck className="size-4" aria-hidden="true" />
                  Completed
                </span>
              )}
            </div>

            <div className="mt-8 flex items-start gap-5">
              <div
                className={`hidden size-16 shrink-0 items-center justify-center rounded-2xl sm:flex ${
                  role.status === 'completed'
                    ? 'bg-emerald-400/10 text-emerald-300'
                    : 'bg-accent/10 text-accent'
                }`}
              >
                <Icon className="size-8" aria-hidden="true" />
              </div>

              <div>
                <h1 className="max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
                  {role.title}
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-muted md:text-lg">
                  {role.description}
                </p>
              </div>
            </div>

            {role.status === 'completed' && (
              <p className="mt-7 max-w-2xl text-sm leading-relaxed text-navy-muted">
                Organising World Anatomy Day gave me the opportunity to take
                responsibility for activities, work with other organisers,
                and help make the event a success.
              </p>
            )}
          </Reveal>
        </div>
      </section>

      {/* Main content */}
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">

        {/* Competency domain */}
        <Reveal>
          <section
            aria-labelledby="domain-heading"
            className="border-b border-border pb-12"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm text-accent">
                01
              </span>

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Competency domain
              </p>
            </div>

            <h2
              id="domain-heading"
              className="mt-5 font-serif text-3xl md:text-4xl"
            >
              Understanding the role
            </h2>

            <p className="mt-6 max-w-4xl text-base leading-[1.9] text-muted-foreground">
              {role.domain}
            </p>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Key themes
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {role.focus.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* Personal reflection */}
        <Reveal delay={100}>
          <section
            aria-labelledby="reflection-heading"
            className="border-b border-border py-12"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm text-accent">
                02
              </span>

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Personal Reflection
              </p>
            </div>

            <h2
              id="reflection-heading"
              className="mt-5 font-serif text-3xl md:text-4xl"
            >
              Personal Reflection
            </h2>

            {role.reflection && role.reflection.length > 0 ? (
              <>
                {role.reflection.map((entry, index) => (
                  <article
                    key={entry.heading}
                    className={`mt-7 grid gap-4 md:grid-cols-[210px_1fr] ${
                      index > 0 ? 'border-t border-border pt-7' : ''
                    }`}
                  >
                    <h3 className="font-semibold leading-relaxed text-foreground">
                      {entry.heading}
                    </h3>

                    <p className="text-sm leading-[1.9] text-muted-foreground md:text-base">
                      {entry.content}
                    </p>
                  </article>
                ))}
              </>
            ) : (
              <div className="mt-8 rounded-2xl border border-dashed border-border bg-muted/20 p-8">
                <p className="font-serif text-xl">
                  Reflection to be added
                </p>

                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  This space will document relevant experiences, personal
                  reflections, and lessons learned as I develop in this
                  competency throughout medical school.
                </p>
              </div>
            )}
          </section>
        </Reveal>

        {/* Evidence portfolio */}
        <Reveal delay={200}>
          <section
            aria-labelledby="evidence-heading"
            className="border-b border-border py-12"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm text-accent">
                03
              </span>

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Evidence portfolio
              </p>
            </div>

            <h2
              id="evidence-heading"
              className="mt-5 font-serif text-3xl md:text-4xl"
            >
              Supporting evidence
            </h2>

            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Supporting documents and material that demonstrate the
              activities and experiences described in this portfolio.
            </p>

            {role.evidence && role.evidence.length > 0 ? (
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {role.evidence.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open full-size ${item.title}`}
                    className="group overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg"
                  >
                    {item.image ? (
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-white">
                        <Image
                          src={item.href}
                          alt={item.title}
                          fill
                          sizes="(max-width: 640px) 100vw, 50vw"
                          className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                      </div>
                    ) : (
                      <div className="flex aspect-[4/3] items-center justify-center bg-muted/40">
                        <FileText
                          className="size-10 text-accent"
                          aria-hidden="true"
                        />
                      </div>
                    )}

                    <div className="p-6">
                      <h3 className="font-medium transition-colors group-hover:text-accent">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm text-muted-foreground">
                        {item.description}
                      </p>

                      <p className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-accent">
                        View full certificate
                        <ArrowUpRight
                          className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <div className="mt-8 rounded-2xl border border-dashed border-border bg-muted/20 p-8">
                <FileText className="size-6 text-accent" aria-hidden="true" />

                <p className="mt-4 font-serif text-xl">
                  Evidence to be added
                </p>

                <p className="mt-2 text-sm text-muted-foreground">
                  Relevant certificates, documents, and supporting material
                  will be included here as they become available.
                </p>
              </div>
            )}

            {role.photosToAdd && (
              <div className="mt-5 rounded-2xl border border-dashed border-emerald-500/40 bg-emerald-500/[0.025] p-8">
                <ImagePlus
                  className="size-7 text-emerald-700 dark:text-emerald-300"
                  aria-hidden="true"
                />

                <h3 className="mt-4 font-serif text-xl">
                  World Anatomy Day photographs
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  Photographs documenting the event and my contributions
                  will be added to this section.
                </p>

                <span className="mt-5 inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-300">
                  Awaiting photographs
                </span>
              </div>
            )}
          </section>
        </Reveal>

        {/* Framework source */}
        <Reveal delay={250}>
          <section className="py-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Framework reference
            </p>

            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              This portfolio section is aligned with the EmiratesMEDs
              framework for medical graduates in the UAE.
            </p>

            <div className="mt-5 flex flex-wrap gap-5">
              <a
                href="https://www.frontiersin.org/journals/medicine/articles/10.3389/fmed.2026.1803817/full"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-foreground"
              >
                Read the framework article
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>

              <a
                href="https://www.caa.ae/PORTALGUIDELINES/2023-04-27%20UAE%20Competency%20Framework%20For%20Medical%20Education%2C%20EmiratesMeds.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-foreground"
              >
                Official EmiratesMEDs framework
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </section>
        </Reveal>

        {/* Previous and next competency navigation */}
        <div className="grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
          {previousRole ? (
            <Link
              href={`/competencies/${previousRole.slug}`}
              className="group rounded-2xl border border-border p-5 transition-colors hover:border-accent/50"
            >
              <span className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
                <ChevronLeft className="size-4" aria-hidden="true" />
                Previous competency
              </span>

              <span className="mt-3 block font-medium transition-colors group-hover:text-accent">
                {previousRole.title}
              </span>
            </Link>
          ) : (
            <Link
              href="/#competencies"
              className="group rounded-2xl border border-border p-5 transition-colors hover:border-accent/50"
            >
              <span className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
                <ChevronLeft className="size-4" aria-hidden="true" />
                Return to
              </span>

              <span className="mt-3 block font-medium group-hover:text-accent">
                All competencies
              </span>
            </Link>
          )}

          {nextRole ? (
            <Link
              href={`/competencies/${nextRole.slug}`}
              className="group rounded-2xl border border-border p-5 text-left transition-colors hover:border-accent/50 sm:text-right"
            >
              <span className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground sm:justify-end">
                Next competency
                <ChevronRight className="size-4" aria-hidden="true" />
              </span>

              <span className="mt-3 block font-medium transition-colors group-hover:text-accent">
                {nextRole.title}
              </span>
            </Link>
          ) : (
            <Link
              href="/#competencies"
              className="group rounded-2xl border border-border p-5 text-left transition-colors hover:border-accent/50 sm:text-right"
            >
              <span className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground sm:justify-end">
                Finished exploring
                <ChevronRight className="size-4" aria-hidden="true" />
              </span>

              <span className="mt-3 block font-medium group-hover:text-accent">
                All competencies
              </span>
            </Link>
          )}
        </div>
      </div>

      {/* Detail page footer */}
      <footer className="border-t border-border bg-muted/30 px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-col justify-between gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <span>
            {profile.name} · Medical Student Portfolio
          </span>

          <Link
            href="/#competencies"
            className="inline-flex items-center gap-2 font-medium transition-colors hover:text-accent"
          >
            <CalendarDays className="size-4" aria-hidden="true" />
            Return to competencies
          </Link>
        </div>
      </footer>
    </main>
  )
}
