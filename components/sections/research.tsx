import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { DnaHelix } from '@/components/dna-helix'
import { Section } from '@/components/section'

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

      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-background px-8 py-14 text-center md:px-16 md:py-20">
          <div className="mx-auto flex max-w-xl flex-col items-center">
            <span className="mb-6 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Coming Soon
            </span>

            <h3 className="font-serif text-3xl leading-snug md:text-4xl">
              Something is in the works.
            </h3>

            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
              This space will soon feature research experiences, laboratory
              work, and academic projects as my journey through medicine
              progresses.
            </p>

            <div className="mt-8 flex items-center gap-2 text-sm font-medium text-accent">
              More to come
              <ArrowRight className="size-4" aria-hidden="true" />
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
