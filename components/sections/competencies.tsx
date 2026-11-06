
import {
  ArrowUpRight,
  BookOpen,
  Building2,
  GraduationCap,
  HeartPulse,
  MessageCircle,
  ShieldCheck,
  Stethoscope,
  Users,
  Globe,
  type LucideIcon,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Section } from '@/components/section'

type CompetencyRole = {
  number: string
  title: string
  description: string
  icon: LucideIcon
}

const roles: CompetencyRole[] = [
  {
    number: '01',
    title: 'Medical Expert',
    description:
      'Develop and apply medical knowledge and clinical skills to understand health conditions and contribute to safe, effective patient care.',
    icon: Stethoscope,
  },
  {
    number: '02',
    title: 'Evidence-Based Practitioner and Scholar',
    description:
      'Use scientific evidence, critical thinking, research literacy, and continuous learning to inform decisions and improve healthcare.',
    icon: BookOpen,
  },
  {
    number: '03',
    title: 'Patient Care Provider and Health Advocate',
    description:
      'Recognise the health needs of individuals and communities, support wellbeing, and contribute to health promotion and disease prevention.',
    icon: HeartPulse,
  },
  {
    number: '04',
    title: 'Communicator',
    description:
      'Communicate clearly, empathetically, and effectively with patients, families, colleagues, and other healthcare professionals.',
    icon: MessageCircle,
  },
  {
    number: '05',
    title: 'Collaborator, Innovator and Leader',
    description:
      'Work effectively with others, show initiative, adapt to challenges, and contribute to teamwork and improvement in healthcare.',
    icon: Users,
  },
  {
    number: '06',
    title: 'Professional',
    description:
      'Demonstrate integrity, ethical conduct, accountability, respect, and responsibility in medical practice.',
    icon: ShieldCheck,
  },
  {
    number: '07',
    title: 'Health System Proponent',
    description:
      'Understand how healthcare systems function and contribute to improving the quality, safety, and accessibility of care.',
    icon: Building2,
  },
  {
    number: '08',
    title: 'Self and Profession Enhancer',
    description:
      'Commit to lifelong learning, reflection, personal development, wellbeing, and contributing positively to the medical profession.',
    icon: GraduationCap,
  },
  {
    number: '09',
    title: 'Socially Accountable',
    description:
      'Recognise the needs of diverse populations and respond to important health and social priorities within the community.',
    icon: Globe,
  },
]

export function Competencies() {
  return (
    <Section
      id="competencies"
      index="02"
      eyebrow="EmiratesMEDs framework"
      title="Competencies"
      intro="The nine roles of a future UAE medical graduate, providing a framework for the knowledge, skills, values, and responsibilities I aim to develop throughout medical school."
    >
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">
          Nine roles. One continuous journey of development.
        </p>
        <span className="rounded-full border border-border px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          UAE medical graduate framework
        </span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {roles.map((role, i) => {
          const Icon = role.icon
          const hasEvidence = role.number === '05'

          return (
            <Reveal key={role.number} delay={i * 75}>
              <div
                className={`group relative h-full overflow-hidden rounded-2xl border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_-16px_oklch(0.22_0.05_260/0.2)] motion-reduce:hover:translate-y-0 ${
                  hasEvidence
                    ? 'border-accent/50'
                    : 'border-border hover:border-accent/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-muted-foreground">
                    {role.number}
                  </span>
                  <Icon
                    className="size-5 text-accent transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-6 font-serif text-xl leading-snug">
                  {role.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {role.description}
                </p>

                {hasEvidence && (
                  <span className="mt-5 inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-accent">
                    Current example below
                  </span>
                )}
              </div>
            </Reveal>
          )
        })}
      </div>

      <Reveal delay={180}>
        <div className="mt-14 overflow-hidden rounded-2xl border border-accent/30 bg-background">
          <div className="border-b border-border px-6 py-5 md:px-8">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              Evidence in practice
            </span>
            <h3 className="mt-2 font-serif text-2xl md:text-3xl">
              Putting a competency into action
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              An example of how I have begun developing one of the nine roles
              through an experience at Gulf Medical University.
            </p>
          </div>

          <div className="grid gap-6 p-6 md:grid-cols-[0.8fr_1.2fr] md:p-8">
            <div>
              <span className="text-xs font-mono text-muted-foreground">
                ROLE 05
              </span>
              <h4 className="mt-3 font-serif text-2xl leading-snug">
                Collaborator, Innovator and Leader
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                The strongest current match for my World Anatomy Day
                organising experience.
              </p>
            </div>

            <div className="border-t border-border pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
              <span className="inline-flex rounded-full bg-accent/10 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-accent">
                GMU · 15 October 2026
              </span>

              <h4 className="mt-4 text-lg font-semibold">
                World Anatomy Day — Organiser
              </h4>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                I contributed to organising World Anatomy Day by teaching
                the abdominal anatomy activity and running the plank
                competition. Managing participants was a new challenge for
                me, and working collaboratively with the other organisers
                helped the event run successfully.
              </p>

              <div className="mt-5 rounded-xl bg-muted/50 p-4">
                <p className="text-sm font-medium">
                  What this experience demonstrates
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Teamwork, taking responsibility for activities, engaging
                  participants, and adapting to the challenges of organising
                  an event.
                </p>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                This is an early example of development in this role, not a
                claim that the full graduate-level competency has been
                achieved.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={240}>
        <div className="mt-8 border-t border-border pt-6">
          <a
            href="https://www.frontiersin.org/journals/medicine/articles/10.3389/fmed.2026.1803817/full"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-foreground"
          >
            Read the EmiratesMEDs framework article
            <ArrowUpRight
              className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </Reveal>
    </Section>
  )
}
