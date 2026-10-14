import { ArrowUpRight, AtSign, BookOpen, Briefcase, Globe, Mail, type LucideIcon } from 'lucide-react'
import { profile, socialLinks, type SocialLink } from '@/lib/portfolio-data'
import { Reveal } from '@/components/reveal'
import { Section } from '@/components/section'

const icons: Record<SocialLink['icon'], LucideIcon> = {
  mail: Mail,
  linkedin: Briefcase,
  research: BookOpen,
  orcid: AtSign,
  globe: Globe,
}

export function Contact() {
  return (
    <Section
      id="contact"
      index="08"
      eyebrow="Contact"
      title="Let's connect."
      intro="Whether it's a research collaboration, a mentorship opportunity, or a conversation about medicine, I'd be glad to hear from you."
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

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {socialLinks.map((link, i) => {
          const Icon = icons[link.icon]
          const external = !link.href.startsWith('mailto:')
          return (
            <Reveal as="li" key={link.label} delay={i * 80}>
              <a
                href={link.href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex h-full flex-col rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40"
              >
                <div className="flex items-center justify-between">
                  <Icon className="size-5 text-accent" aria-hidden="true" />
                  <ArrowUpRight
                    className="size-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-6 font-medium">{link.label}</p>
                <p className="mt-1 truncate text-sm text-muted-foreground">{link.handle}</p>
              </a>
            </Reveal>
          )
        })}
      </ul>
    </Section>
  )
}
