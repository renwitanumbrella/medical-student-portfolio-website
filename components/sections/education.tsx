import { GraduationCap, MapPin } from 'lucide-react'
import { education } from '@/lib/portfolio-data'
import { Reveal } from '@/components/reveal'
import { Section, Tag } from '@/components/section'

export function Education() {
  return (
    <Section
      id="education"
      index="03"
      eyebrow="Education"
      title="Academic journey"
      intro="The milestones of my medical training so far — from foundations to clinical years."
      tone="muted"
    >
      <ol className="relative ml-3 border-l border-border md:ml-0 md:border-l-0">
        {education.map((item, i) => (
          <Reveal as="li" key={i} delay={i * 100} className="relative pb-12 pl-10 last:pb-0 md:grid md:grid-cols-12 md:gap-8 md:pl-0">
            <span
              aria-hidden="true"
              className="absolute -left-[13px] top-1 flex size-6 items-center justify-center rounded-full border border-border bg-background md:hidden"
            >
              <span className="size-2 rounded-full bg-accent" />
            </span>

            <p className="text-sm font-medium tabular-nums text-accent md:col-span-3 md:pt-7 md:text-right">
              {item.period}
            </p>

            <div className="relative hidden md:col-span-1 md:flex md:justify-center">
              <span aria-hidden="true" className="absolute inset-y-0 w-px bg-border" />
              <span
                aria-hidden="true"
                className="relative mt-6 flex size-8 items-center justify-center rounded-full border border-border bg-background text-accent"
              >
                <GraduationCap className="size-4" />
              </span>
            </div>

            <article className="mt-3 rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-12px_oklch(0.22_0.05_260/0.18)] md:col-span-8 md:mt-0 md:p-8">
              <h3 className="font-serif text-2xl leading-snug">{item.title}</h3>
              <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{item.institution}</span>
                {item.location ? (
                  <span className="flex items-center gap-1">
                    <MapPin className="size-3.5" aria-hidden="true" />
                    {item.location}
                  </span>
                ) : null}
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">{item.description}</p>
              {item.highlights?.length ? (
                <ul className="mt-5 flex flex-wrap gap-2">
                  {item.highlights.map((h, j) => (
                    <li key={j}>
                      <Tag>{h}</Tag>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
