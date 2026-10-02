'use client'

import { useEffect, useState } from 'react'

export default function Preloader() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMounted, setIsMounted] = useState(true)

  useEffect(() => {
    // Lock scrolling while preloader is active
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const startTime = Date.now()
    // Minimum time to ensure the elegant sequential brand reveal completes
    const minDisplayTime = 1350

    const finishLoading = () => {
      const elapsed = Date.now() - startTime
      const remainingTime = Math.max(0, minDisplayTime - elapsed)

      setTimeout(() => {
        setIsLoaded(true)
        // Restore scrolling when exit animation begins
        document.body.style.overflow = originalOverflow

        // Unmount from DOM after exit animation finishes (700ms)
        setTimeout(() => {
          setIsMounted(false)
        }, 700)
      }, remainingTime)
    }

    if (document.readyState === 'complete') {
      finishLoading()
    } else {
      window.addEventListener('load', finishLoading)
      // Safety fallback to prevent preloader from hanging on slow connections (max 4.5s)
      const safetyTimer = setTimeout(finishLoading, 4500)

      return () => {
        window.removeEventListener('load', finishLoading)
        clearTimeout(safetyTimer)
        document.body.style.overflow = originalOverflow
      }
    }
  }, [])

  if (!isMounted) return null

  return (
    <div
      className={`preloader-overlay ${isLoaded ? 'preloader-exit' : ''}`}
      aria-hidden={isLoaded}
      role="status"
      aria-label="Loading Jump Media"
    >
      <div className="preloader-container">
        {/* Animated circular glowing arc */}
        <div className="preloader-ring-wrapper" aria-hidden="true">
          <svg className="preloader-svg-ring" viewBox="0 0 160 160">
            <circle
              className="preloader-track"
              cx="80"
              cy="80"
              r="72"
            />
            <circle
              className="preloader-arc"
              cx="80"
              cy="80"
              r="72"
            />
          </svg>
        </div>

        {/* Editorial Branded Wordmark: JUMP MEDIA */}
        <div className="preloader-brand">
          <div className="preloader-jump" aria-label="JUMP">
            <span className="preloader-letter" style={{ animationDelay: '120ms' }}>J</span>
            <span className="preloader-letter" style={{ animationDelay: '260ms' }}>U</span>
            <span className="preloader-letter" style={{ animationDelay: '400ms' }}>M</span>
            <span className="preloader-letter" style={{ animationDelay: '540ms' }}>P</span>
          </div>
          <span className="preloader-media">MEDIA</span>
        </div>
      </div>
    </div>
  )
}
