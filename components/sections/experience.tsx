import { HandHeart, HeartPulse, type LucideIcon } from 'lucide-react'
import { experience, type ExperienceItem } from '@/lib/portfolio-data'
import { Reveal } from '@/components/reveal'
import { Section } from '@/components/section'

const groups: { type: ExperienceItem['type']; label: string; icon: LucideIcon }[] = [
  { type: 'Clinical', label: 'Healthcare experience', icon: HeartPulse },
  { type: 'Volunteering', label: 'Community service', icon: HandHeart },
]

export function Experience() {
  return (
    <Section
      id="experience"
      index="04"
      eyebrow="Experience & volunteering"
      title="Learning beside patients and communities"
      intro="Clinical exposure and service work that ground my studies in real-world care."
      tone="muted"
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-10">
        {groups.map((group, gi) => {
          const items = experience.filter((e) => e.type === group.type)
          const Icon = group.icon
          return (
            <Reveal key={group.type} delay={gi * 120}>
              <h3 className="flex items-center gap-3 border-b border-border pb-4 text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
                <Icon className="size-4 text-accent" aria-hidden="true" />
                {group.label}
              </h3>
              <ul>
                {items.map((item, i) => (
                  <li
                    key={i}
                    className="group border-b border-border py-7 transition-colors last:border-b-0"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h4 className="font-serif text-2xl leading-snug transition-colors group-hover:text-accent">
                        {item.title}
                      </h4>
                      <p className="text-sm tabular-nums text-muted-foreground">{item.period}</p>
                    </div>
                    <p className="mt-1 text-sm font-medium">{item.organisation}</p>
                    <p className="mt-3 leading-relaxed text-muted-foreground text-pretty">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
