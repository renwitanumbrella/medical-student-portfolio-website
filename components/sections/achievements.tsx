import { ArrowUpRight, Award, BadgeCheck } from 'lucide-react'
import { achievements } from '@/lib/portfolio-data'
import { Reveal } from '@/components/reveal'
import { Section } from '@/components/section'

export function Achievements() {
  return (
    <Section
      id="achievements"
      index="05"
      eyebrow="Achievements & certificates"
      title="Recognition and credentials"
      intro="Awards, honours, and certifications earned along the way."
    >
      <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item, i) => {
          const Icon = item.kind === 'Award' ? Award : BadgeCheck

          return (
            <Reveal as="li" key={i} delay={(i % 3) * 80} className="bg-background">
              <article className="group relative flex h-full flex-col p-7 transition-colors duration-300 hover:bg-muted">

                {item.imageUrl && (
                  <div className="mb-5 flex h-48 items-center justify-center overflow-hidden rounded-xl bg-muted/30 p-2">
                    <img
                      src={item.imageUrl}
                      alt={`${item.title} certificate`}
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                )}

                <div className="flex items-start justify-between gap-4">
                  <Icon
                    className="size-6 text-accent transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  />
                  <span className="text-sm tabular-nums text-muted-foreground">
                    {item.year}
                  </span>
                </div>

                <p className="mt-6 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  {item.kind}
                </p>

                <h3 className="mt-2 font-serif text-xl leading-snug">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm font-medium">{item.issuer}</p>

                {item.description ? (
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                ) : null}

                {item.credentialUrl ? (
                  <a
                    href={item.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                  >
                    View credential
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
