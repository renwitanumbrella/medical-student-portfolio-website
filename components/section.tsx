import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'

type SectionProps = {
  id: string
  index: string
  eyebrow: string
  title: string
  intro?: string
  tone?: 'light' | 'muted'
  children: ReactNode
}

export function Section({ id, index, eyebrow, title, intro, tone = 'light', children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn('py-24 md:py-32', tone === 'muted' ? 'bg-muted' : 'bg-background')}
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-14 grid gap-6 md:mb-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              <span className="tabular-nums">{index}</span>
              <span aria-hidden="true" className="h-px w-8 bg-accent/60" />
              {eyebrow}
            </p>
            <h2
              id={`${id}-heading`}
              className="mt-4 font-serif text-4xl leading-tight text-balance md:text-5xl"
            >
              {title}
            </h2>
          </div>
          {intro ? (
            <p className="text-pretty leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7 md:self-end">
              {intro}
            </p>
          ) : null}
        </Reveal>
        {children}
      </div>
    </section>
  )
}

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground',
        className,
      )}
    >
      {children}
    </span>
  )
}
