
'use client'

import { useEffect, useState } from 'react'
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
  X,
  type LucideIcon,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Section } from '@/components/section'

type CompetencyRole = {
  number: string
  title: string
  description: string
  details: string
  focus: string[]
  icon: LucideIcon
}

const roles: CompetencyRole[] = [
  {
    number: '01',
    title: 'Medical Expert',
    description:
      'Apply medical knowledge and clinical skills to understand health conditions and contribute to patient care.',
    details:
      'The Medical Expert role brings together the medical knowledge, clinical reasoning, and practical skills that form the foundation of medical practice. It focuses on developing the ability to understand health conditions and use relevant knowledge in clinical situations.',
    focus: ['Medical knowledge', 'Clinical reasoning', 'Clinical skills'],
    icon: Stethoscope,
  },
  {
    number: '02',
    title: 'Evidence-Based Practitioner and Scholar',
    description:
      'Use scientific evidence, critical thinking, and continuous learning to improve healthcare.',
    details:
      'This role emphasises applying scientific reasoning and continuous learning to improve patient care. It involves approaching questions critically, engaging with research, and using relevant evidence to inform medical decisions.',
    focus: ['Scientific reasoning', 'Research literacy', 'Lifelong learning'],
    icon: BookOpen,
  },
  {
    number: '03',
    title: 'Patient Care Provider and Health Advocate',
    description:
      'Recognise the health needs of individuals and communities and support better health outcomes.',
    details:
      'This role focuses on responding to the health needs of individuals and communities. It includes understanding patient needs, supporting wellbeing, and recognising the wider importance of health advocacy and prevention.',
    focus: ['Patient needs', 'Health promotion', 'Community advocacy'],
    icon: HeartPulse,
  },
  {
    number: '04',
    title: 'Communicator',
    description:
      'Communicate clearly and empathetically with patients, families, and healthcare teams.',
    details:
      'Effective communication is central to safe and respectful healthcare. This role highlights the ability to exchange information clearly, listen to others, demonstrate empathy, and communicate effectively with patients, families, and colleagues.',
    focus: ['Clear communication', 'Empathy', 'Team communication'],
    icon: MessageCircle,
  },
  {
    number: '05',
    title: 'Collaborator, Innovator and Leader',
    description:
      'Work with others, adapt to challenges, and contribute through teamwork and leadership.',
    details:
      'This role reflects the importance of teamwork, adaptive thinking, and leadership. It involves contributing constructively to shared activities, working effectively with others, and responding to challenges in changing environments.',
    focus: ['Teamwork', 'Adaptive thinking', 'Leadership'],
    icon: Users,
  },
  {
    number: '06',
    title: 'Professional',
    description:
      'Demonstrate integrity, ethical conduct, accountability, and respect.',
    details:
      'The Professional role emphasises the values and behaviours expected of members of the medical profession. It includes ethical practice, integrity, accountability, and treating others with respect.',
    focus: ['Ethical practice', 'Integrity', 'Accountability'],
    icon: ShieldCheck,
  },
  {
    number: '07',
    title: 'Health System Proponent',
    description:
      'Understand healthcare systems and contribute to improving the quality and delivery of care.',
    details:
      'This role focuses on understanding how healthcare systems function and how their structures influence the delivery of care. It encourages future doctors to recognise opportunities to support better quality, safety, and healthcare outcomes.',
    focus: ['Healthcare systems', 'Quality of care', 'System improvement'],
    icon: Building2,
  },
  {
    number: '08',
    title: 'Self and Profession Enhancer',
    description:
      'Commit to reflection, personal development, wellbeing, and lifelong learning.',
    details:
      'This role recognises that becoming a good doctor involves continuous personal and professional development. It highlights lifelong learning, maintaining wellbeing, reflecting on experience, and contributing positively to the medical profession.',
    focus: ['Self-reflection', 'Personal wellbeing', 'Professional growth'],
    icon: GraduationCap,
  },
  {
    number: '09',
    title: 'Socially Accountable',
    description:
      'Recognise the needs of diverse populations and respond to important health priorities in society.',
    details:
      'Social accountability highlights the responsibility of medical graduates to serve diverse populations and respond to important societal health needs. It connects medical education with the needs and priorities of the communities doctors serve.',
    focus: ['Diverse populations', 'Community needs', 'Social responsibility'],
    icon: Globe,
  },
]

export function Competencies() {
  const [activeRole, setActiveRole] = useState<CompetencyRole | null>(null)

  useEffect(() => {
    if (!activeRole) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveRole(null)
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeRole])

  return (
    <Section
      id="competencies"
      index="02"
      eyebrow="EmiratesMEDs framework"
      title="Competencies"
      intro="The nine thematic roles of a future UAE medical graduate, providing a framework for the knowledge, skills, values, and responsibilities I aim to develop throughout medical school."
      tone="muted"
    >
      {/* Coloured framework banner */}
      <Reveal>
        <div className="relative isolate mb-12 overflow-hidden rounded-3xl bg-navy px-7 py-10 text-navy-foreground shadow-xl md:px-10 md:py-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-28 size-80 rounded-full border border-white/10 motion-reduce:animate-none animate-[spin_36s_linear_infinite]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 top-12 size-48 rounded-full border border-accent/30 motion-reduce:animate-none animate-[spin_24s_linear_infinite]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-24 top-24 size-32 rounded-full bg-accent/15 blur-3xl motion-reduce:animate-none animate-pulse"
          />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-accent">
              <span className="size-1.5 rounded-full bg-accent motion-reduce:animate-none animate-pulse" />
              UAE national medical graduate framework
            </span>

            <h3 className="mt-6 max-w-2xl font-serif text-3xl leading-tight md:text-5xl">
              A framework for the physician I am working towards becoming.
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-navy-muted md:text-base">
              Nine interconnected roles that bring together the clinical,
              academic, professional, and social responsibilities of a
              medical graduate.
            </p>

            <div className="mt-9 grid max-w-xl grid-cols-3 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                <p className="font-serif text-3xl text-accent">09</p>
                <p className="mt-1 text-xs leading-relaxed text-navy-muted">
                  Thematic roles
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                <p className="font-serif text-3xl text-accent">85</p>
                <p className="mt-1 text-xs leading-relaxed text-navy-muted">
                  Enabling competencies
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                <p className="font-serif text-3xl text-accent">14</p>
                <p className="mt-1 text-xs leading-relaxed text-navy-muted">
                  Professional activities
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Interactive competency cards */}
      <Reveal>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="font-serif text-2xl">Explore the nine roles</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Select a role to explore its meaning and supporting evidence.
            </p>
          </div>
          <span className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground">
            Select a card
          </span>
        </div>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {roles.map((role, i) => {
          const Icon = role.icon
          const hasEvidence = role.number === '05'

          return (
            <Reveal key={role.number} delay={i * 75}>
              <button
                type="button"
                onClick={() => setActiveRole(role)}
                aria-haspopup="dialog"
                aria-label={`Explore ${role.title}`}
                className={`group flex min-h-[265px] w-full flex-col rounded-2xl border p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-18px_oklch(0.22_0.05_260/0.25)] motion-reduce:transform-none ${
                  hasEvidence
                    ? 'border-accent/60 bg-accent/5 hover:border-accent'
                    : 'border-border bg-background hover:border-accent/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-sm ${
                      hasEvidence ? 'text-accent' : 'text-muted-foreground'
                    }`}
                  >
                    {role.number} / 09
                  </span>

                  <span className="flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:rotate-3 group-hover:bg-accent group-hover:text-navy">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                </div>

                <h4 className="mt-6 font-serif text-xl leading-snug transition-colors group-hover:text-accent">
                  {role.title}
                </h4>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {role.description}
                </p>

                <div className="mt-auto flex items-center justify-between gap-3 pt-6">
                  {hasEvidence ? (
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-accent">
                      Evidence added
                    </span>
                  ) : (
                    <span className="text-xs text-muted-foreground">
                      Explore role
                    </span>
                  )}

                  <span className="flex items-center gap-1 text-sm font-medium text-accent">
                    Explore
                    <ArrowUpRight
                      className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </button>
            </Reveal>
          )
        })}
      </div>

      {/* Competency detail pop-up */}
      {activeRole && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4">
          <button
            type="button"
            aria-label="Close competency details"
            onClick={() => setActiveRole(null)}
            className="absolute inset-0 size-full cursor-default bg-navy/75 backdrop-blur-sm"
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={`competency-title-${activeRole.number}`}
            aria-describedby={`competency-description-${activeRole.number}`}
            className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-border bg-background text-foreground shadow-2xl"
          >
            {/* Pop-up heading */}
            <div className="relative overflow-hidden bg-navy px-7 py-8 text-navy-foreground md:px-9 md:py-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-20 size-56 rounded-full border border-white/10"
              />

              <div className="relative z-10 flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                    EmiratesMEDs · Role {activeRole.number} of 09
                  </span>

                  <h3
                    id={`competency-title-${activeRole.number}`}
                    className="mt-4 max-w-lg font-serif text-3xl leading-tight md:text-4xl"
                  >
                    {activeRole.title}
                  </h3>
                </div>

                <button
                  type="button"
                  autoFocus
                  onClick={() => setActiveRole(null)}
                  aria-label="Close"
                  className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-accent hover:bg-accent hover:text-navy"
                >
                  <X className="size-5" aria-hidden="true" />
                </button>
              </div>

              <div className="relative z-10 mt-6 h-px w-full bg-white/10">
                <div
                  className="h-px bg-accent"
                  style={{ width: `${(Number(activeRole.number) / 9) * 100}%` }}
                />
              </div>
            </div>

            {/* Pop-up content */}
            <div className="space-y-8 px-7 py-8 md:px-9">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  Understanding this role
                </span>

                <p
                  id={`competency-description-${activeRole.number}`}
                  className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base"
                >
                  {activeRole.details}
                </p>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  Key themes
                </span>

                <div className="mt-4 flex flex-wrap gap-2">
                  {activeRole.focus.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-accent/25 bg-accent/5 px-4 py-2 text-sm text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-muted/40 p-5 md:p-6">
                {activeRole.number === '05' ? (
                  <>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                        My experience
                      </span>
                      <span className="rounded-full bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent">
                        GMU · 15 October 2026
                      </span>
                    </div>

                    <h4 className="mt-4 font-serif text-2xl">
                      World Anatomy Day — Organiser
                    </h4>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      I helped organise World Anatomy Day at Gulf Medical
                      University. My contributions included teaching the
                      abdominal anatomy activity and running the plank
                      competition. Working alongside the other organisers
                      helped the event run successfully.
                    </p>

                    <div className="mt-5 border-t border-border pt-5">
                      <h5 className="text-sm font-semibold">
                        Reflection and development
                      </h5>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        Managing participants was a new challenge for me.
                        The experience helped me recognise the importance
                        of collaboration and shared responsibility when
                        organising an event.
                      </p>
                    </div>

                    <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                      This is an early example of development in this role,
                      rather than evidence that the full graduate-level
                      competency has been achieved.
                    </p>
                  </>
                ) : (
                  <>
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                      Evidence in my journey
                    </span>
                    <h4 className="mt-3 font-serif text-xl">
                      Developing this role
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Relevant experiences, activities, reflections, and
                      achievements will be documented here as I progress
                      through medical school.
                    </p>
                  </>
                )}
              </div>

              <p className="text-xs leading-relaxed text-muted-foreground">
                Role summaries are adapted from the EmiratesMEDs framework.
                The themes shown here are explanatory summaries, not a
                replacement for the official enabling competencies.
              </p>

              <a
                href="https://www.frontiersin.org/journals/medicine/articles/10.3389/fmed.2026.1803817/full"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-foreground"
              >
                Read the original framework article
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </Section>
  )
}
