import { HandHeart, HeartPulse, Clock } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Section } from '@/components/section'

export function Experience() {
  return (
    <Section
      id="experience"
      index="05"
      eyebrow="Experience & volunteering"
      title="Learning beside patients and communities"
      intro="Clinical exposure and service work that ground my studies in real-world care."
      tone="muted"
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-10">
        <Reveal>
          <h3 className="flex items-center gap-3 border-b border-border pb-4 text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
            <HeartPulse className="size-4 text-accent" aria-hidden="true" />
            Healthcare experience
          </h3>

          <div className="py-10 text-center">
            <Clock className="mx-auto size-7 text-accent/70" aria-hidden="true" />
            <p className="mt-4 font-serif text-2xl">Coming Soon</p>
            <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Healthcare experiences and clinical learning will be shared here as my medical journey progresses.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h3 className="flex items-center gap-3 border-b border-border pb-4 text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
            <HandHeart className="size-4 text-accent" aria-hidden="true" />
            Community service
          </h3>

          <div className="py-10 text-center">
            <Clock className="mx-auto size-7 text-accent/70" aria-hidden="true" />
            <p className="mt-4 font-serif text-2xl">Coming Soon</p>
            <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Community involvement and volunteering experiences will be featured here soon.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
