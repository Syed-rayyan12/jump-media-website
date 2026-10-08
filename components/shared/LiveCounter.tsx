'use client'

import { useEffect, useRef, useState } from 'react'

type LiveCounterProps = {
  value: number
  suffix?: string
  decimals?: number
  separator?: boolean
  duration?: number
}

function formatValue(value: number, decimals: number, separator: boolean, suffix: string) {
  const fixed = value.toFixed(decimals)
  const formatted = separator ? Number(fixed).toLocaleString('en-GB', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }) : fixed

  return `${formatted}${suffix}`
}

export default function LiveCounter({
  value,
  suffix = '',
  decimals = 0,
  separator = false,
  duration = 1500,
}: LiveCounterProps) {
  const ref = useRef<HTMLElement>(null)
  const frameRef = useRef<number | null>(null)
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const runCounter = () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }

      if (prefersReducedMotion) {
        setDisplayValue(value)
        return
      }

      const start = performance.now()
      const animate = (now: number) => {
        const elapsed = now - start
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)

        setDisplayValue(value * eased)

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(animate)
        }
      }

      frameRef.current = requestAnimationFrame(animate)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runCounter()
          observer.disconnect()
        }
      },
      { threshold: 0.35 }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [decimals, duration, value])

  return (
    <strong ref={ref}>
      {formatValue(displayValue, decimals, separator, suffix)}
    </strong>
  )
}
