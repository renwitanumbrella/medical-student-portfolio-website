import type { CSSProperties } from 'react'
import { cn } from '@/lib/utils'

type Particle = {
  kind: 'dot' | 'molecule' | 'ring'
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

const particles: Particle[] = [
  { kind: 'molecule', x: 8, y: 18, size: 30, duration: 14, delay: 0 },
  { kind: 'dot', x: 18, y: 62, size: 6, duration: 11, delay: -3 },
  { kind: 'ring', x: 30, y: 12, size: 12, duration: 16, delay: -6 },
  { kind: 'dot', x: 44, y: 78, size: 4, duration: 12, delay: -1 },
  { kind: 'molecule', x: 58, y: 24, size: 24, duration: 18, delay: -8 },
  { kind: 'dot', x: 66, y: 52, size: 5, duration: 10, delay: -4 },
  { kind: 'ring', x: 76, y: 82, size: 14, duration: 15, delay: -2 },
  { kind: 'molecule', x: 88, y: 40, size: 34, duration: 17, delay: -5 },
  { kind: 'dot', x: 93, y: 14, size: 4, duration: 13, delay: -7 },
  { kind: 'dot', x: 4, y: 88, size: 5, duration: 12, delay: -9 },
]

function Shape({ kind }: { kind: Particle['kind'] }) {
  if (kind === 'dot') return <span className="block size-full rounded-full bg-current" />
  if (kind === 'ring') return <span className="block size-full rounded-full border border-current" />
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-full">
      <path d="M5 17 L12 6 L19 17 Z" stroke="currentColor" strokeWidth="1" />
      <circle cx="12" cy="6" r="2.4" fill="currentColor" />
      <circle cx="5" cy="17" r="2" fill="currentColor" />
      <circle cx="19" cy="17" r="2.8" fill="currentColor" />
    </svg>
  )
}

export function MoleculeField({ className, density = 'full' }: { className?: string; density?: 'full' | 'light' }) {
  const items = density === 'light' ? particles.filter((_, i) => i % 2 === 0) : particles
  return (
    <div aria-hidden="true" className={cn('pointer-events-none absolute inset-0 -z-10 overflow-hidden', className)}>
      {items.map((p, i) => (
        <span
          key={i}
          className="molecule-float absolute"
          style={
            {
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            } as CSSProperties
          }
        >
          <Shape kind={p.kind} />
        </span>
      ))}
    </div>
  )
}
