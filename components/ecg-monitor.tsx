import { cn } from '@/lib/utils'

const TILE_WIDTH = 1200
const BEAT_WIDTH = 400
const BASELINE = 70

function beatSegment(x: number) {
  const b = BASELINE
  return [
    `L${x + 150} ${b}`,
    `Q${x + 165} ${b - 12} ${x + 180} ${b}`,
    `L${x + 200} ${b}`,
    `L${x + 208} ${b + 6}`,
    `L${x + 218} ${b - 56}`,
    `L${x + 228} ${b + 30}`,
    `L${x + 236} ${b}`,
    `L${x + 270} ${b}`,
    `Q${x + 295} ${b - 22} ${x + 320} ${b}`,
    `L${x + BEAT_WIDTH} ${b}`,
  ].join(' ')
}

const waveform = `M0 ${BASELINE} ${Array.from({ length: TILE_WIDTH / BEAT_WIDTH }, (_, i) =>
  beatSegment(i * BEAT_WIDTH),
).join(' ')}`

function WaveTile() {
  return (
    <svg
      viewBox={`0 0 ${TILE_WIDTH} 120`}
      preserveAspectRatio="none"
      className="h-full w-1/2 shrink-0 overflow-visible"
    >
      <path
        d={waveform}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

export function EcgMonitor({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn('ecg-monitor pointer-events-none overflow-hidden', className)}>
      <div className="ecg-track flex h-full w-[400%] text-pulse md:w-[200%]">
        <WaveTile />
        <WaveTile />
      </div>
    </div>
  )
}
