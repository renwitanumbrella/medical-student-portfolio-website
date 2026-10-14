import type { CSSProperties } from 'react'
import { cn } from '@/lib/utils'

const DURATION = 6
const PAIRS_PER_TWIST = 18

export function DnaHelix({ pairs = 36, className }: { pairs?: number; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none flex h-16 items-center justify-between overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]',
        className,
      )}
    >
      {Array.from({ length: pairs }, (_, i) => {
        const delay = -((i % PAIRS_PER_TWIST) / PAIRS_PER_TWIST) * DURATION
        const style = { '--helix-delay': `${delay}s`, '--helix-duration': `${DURATION}s` } as CSSProperties
        return (
          <span key={i} className="relative flex h-full w-2 items-center justify-center" style={style}>
            <span className="helix-rung absolute h-11 w-px bg-current opacity-30" />
            <span className="helix-dot absolute size-2 rounded-full bg-current" />
            <span className="helix-dot helix-dot-b absolute size-2 rounded-full bg-accent" />
          </span>
        )
      })}
    </div>
  )
}
