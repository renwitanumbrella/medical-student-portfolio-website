'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

const BEAT_SECONDS = 1.4
const ERASE_GAP_PX = 28
const SAMPLE_STEP_PX = 0.5
const MAX_FRAME_SECONDS = 0.05

const WAVE_COMPONENTS = [
  { name: 'P', amplitude: 0.11, center: 0.16, spread: 0.026 },
  { name: 'Q', amplitude: -0.1, center: 0.305, spread: 0.008 },
  { name: 'R', amplitude: 1, center: 0.325, spread: 0.009 },
  { name: 'S', amplitude: -0.26, center: 0.345, spread: 0.009 },
  { name: 'T', amplitude: 0.27, center: 0.58, spread: 0.045 },
] as const

function ecgValue(phase: number) {
  let value = 0
  for (const wave of WAVE_COMPONENTS) {
    const offset = phase - wave.center
    value += wave.amplitude * Math.exp(-(offset * offset) / (2 * wave.spread * wave.spread))
  }
  return value
}

export function EcgMonitor({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    let width = 0
    let height = 0
    let speed = 0
    let beatPx = 1
    let baseline = 0
    let amplitude = 0

    let distance = 0
    let headX = 0
    let lastY = 0
    let frameId = 0
    let lastTime: number | null = null
    let inView = true

    const yAt = (d: number) => baseline - ecgValue((d / beatPx) % 1) * amplitude

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height)
      ctx.beginPath()
      const phaseOffset = beatPx * 0.6
      ctx.moveTo(0, yAt(phaseOffset))
      for (let x = SAMPLE_STEP_PX; x <= width; x += SAMPLE_STEP_PX) {
        ctx.lineTo(x, yAt(x + phaseOffset))
      }
      ctx.stroke()
    }

    const clearAhead = (fromX: number) => {
      const end = fromX + ERASE_GAP_PX
      ctx.clearRect(fromX, 0, Math.min(end, width) - fromX, height)
      if (end > width) ctx.clearRect(0, 0, end - width, height)
    }

    const tick = (time: number) => {
      frameId = requestAnimationFrame(tick)
      if (lastTime === null) {
        lastTime = time
        return
      }
      const seconds = Math.min((time - lastTime) / 1000, MAX_FRAME_SECONDS)
      lastTime = time

      const advance = speed * seconds
      let travelled = 0

      ctx.beginPath()
      ctx.moveTo(headX, lastY)
      while (travelled < advance) {
        const step = Math.min(SAMPLE_STEP_PX, advance - travelled)
        travelled += step
        distance += step
        headX += step

        if (headX >= width) {
          ctx.stroke()
          headX -= width
          distance %= beatPx
          lastY = yAt(distance)
          ctx.beginPath()
          ctx.moveTo(headX, lastY)
          continue
        }

        lastY = yAt(distance)
        ctx.lineTo(headX, lastY)
      }
      ctx.stroke()
      clearAhead(headX + 2)
    }

    const stop = () => {
      cancelAnimationFrame(frameId)
      frameId = 0
    }

    const start = () => {
      if (frameId || !inView || reducedMotion.matches || width === 0) return
      lastTime = null
      frameId = requestAnimationFrame(tick)
    }

    const setup = () => {
      const rect = canvas.getBoundingClientRect()
      if (rect.width === width && rect.height === height) return

      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      ctx.strokeStyle = getComputedStyle(canvas).color
      ctx.lineWidth = 1.5
      ctx.lineJoin = 'round'
      ctx.lineCap = 'round'

      speed = Math.min(85, Math.max(40, width / 14))
      beatPx = speed * BEAT_SECONDS
      baseline = height * 0.62
      amplitude = height * 0.42

      distance = 0
      headX = 0
      lastY = yAt(0)

      if (reducedMotion.matches) drawStatic()
      start()
    }

    const handleMotionChange = () => {
      stop()
      width = 0
      height = 0
      setup()
    }

    const resizeObserver = new ResizeObserver(setup)
    resizeObserver.observe(canvas)

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting
      if (inView) start()
      else stop()
    })
    intersectionObserver.observe(canvas)

    reducedMotion.addEventListener('change', handleMotionChange)

    return () => {
      stop()
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
      reducedMotion.removeEventListener('change', handleMotionChange)
    }
  }, [])

  return (
    <div aria-hidden="true" className={cn('ecg-monitor pointer-events-none overflow-hidden', className)}>
      <canvas ref={canvasRef} className="ecg-canvas block h-full w-full text-pulse" />
    </div>
  )
}
