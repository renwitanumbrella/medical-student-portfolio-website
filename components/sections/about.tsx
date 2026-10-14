import { Stethoscope } from 'lucide-react'
import { about, profile } from '@/lib/portfolio-data'
import { Reveal } from '@/components/reveal'
import { Section } from '@/components/section'

export function About() {
  return (
    <Section id="about" index="01" eyebrow="About me" title="A student of medicine, and of people.">
      <div className="grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-navy">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(80%_60%_at_30%_20%,oklch(0.6_0.15_252/0.35),transparent_70%)]"
            />
            <div className="relative flex h-full flex-col items-center justify-center gap-4 p-6 text-center text-navy-foreground">
              <span className="flex size-24 items-center justify-center rounded-full border border-white/20 font-serif text-4xl">
                {profile.initials}
              </span>
              <p className="text-sm text-navy-muted">[Replace with your portrait photo]</p>
            </div>
          </div>
        </Reveal>

        <div className="space-y-10 md:col-span-7 md:col-start-6">
          <Reveal delay={100} className="space-y-5 text-lg leading-relaxed text-pretty">
            {about.bio.map((paragraph, i) => (
              <p key={i} className={i === 0 ? 'text-foreground' : 'text-muted-foreground'}>
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal delay={200}>
            <h3 className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
              <Stethoscope className="size-4 text-accent" aria-hidden="true" />
              Medical interests
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {about.interests.map((interest, i) => (
                <li
                  key={i}
                  className="rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent"
                >
                  {interest}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={300}>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border">
              {about.facts.map((fact) => (
                <div key={fact.label} className="bg-background p-5">
                  <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{fact.label}</dt>
                  <dd className="mt-2 font-medium">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
