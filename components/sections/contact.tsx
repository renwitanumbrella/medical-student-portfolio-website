
import { ArrowUpRight } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { Reveal } from '@/components/reveal'
import { Section } from '@/components/section'

export function Contact() {
  return (
    <Section
      id="contact"
      index="09"
      eyebrow="Contact"
      title="Let's connect."
      intro="I'm always interested in connecting with people who share an interest in medicine, scientific research, and learning. Feel free to reach out by email."
      tone="muted"
    >
      <Reveal>
        <a
          href={`mailto:${profile.email}`}
          className="group flex flex-wrap items-center justify-between gap-4 border-b border-border pb-8"
        >
          <span className="font-serif text-3xl break-all transition-colors group-hover:text-accent sm:text-4xl md:text-6xl">
            {profile.email}
          </span>
          <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-navy text-navy-foreground transition-all duration-300 group-hover:rotate-45 group-hover:bg-accent">
            <ArrowUpRight className="size-6" aria-hidden="true" />
            <span className="sr-only">Send an email</span>
          </span>
        </a>
      </Reveal>
    </Section>
  )
}
