import { Brain, Languages, Lightbulb, Stethoscope, Users, type LucideIcon } from 'lucide-react'
import { personalInterests, skills } from '@/lib/portfolio-data'
import { Reveal } from '@/components/reveal'
import { Section } from '@/components/section'

const groupIcon: Record<string, LucideIcon> = {
  Clinical: Stethoscope,
  'Research & Academic': Brain,
  Professional: Users,
  Languages: Languages,
}

export function Skills() {
  return (
    <Section
      id="skills"
      index="06"
      eyebrow="Skills & interests"
      title="What I bring to the team"
      intro="Professional and academic skills developed through study, practice, and collaboration."
      tone="muted"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group, i) => {
          const Icon = groupIcon[group.group] ?? Lightbulb
          return (
            <Reveal key={group.group} delay={i * 80}>
              <div className="h-full rounded-2xl border border-border bg-background p-6 transition-shadow duration-300 hover:shadow-[0_12px_40px_-16px_oklch(0.22_0.05_260/0.2)]">
                <Icon className="size-5 text-accent" aria-hidden="true" />
                <h3 className="mt-5 font-serif text-xl">{group.group}</h3>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((skill, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )
        })}
      </div>

      <Reveal delay={200} className="mt-12 flex flex-col gap-4 border-t border-border pt-10 md:flex-row md:items-center md:gap-8">
        <h3 className="shrink-0 text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
          Beyond medicine
        </h3>
        <ul className="flex flex-wrap gap-2">
          {personalInterests.map((interest, i) => (
            <li
              key={i}
              className="rounded-full border border-border bg-background px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent"
            >
              {interest}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
