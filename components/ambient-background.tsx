"use client"

import { useEffect, useRef } from "react"

export function AmbientBackground() {
  const gridRef = useRef<HTMLDivElement>(null)
  const glowBlueRef = useRef<HTMLDivElement>(null)
  const glowGoldRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mouseX = typeof window !== "undefined" ? window.innerWidth / 2 : 0
    let mouseY = typeof window !== "undefined" ? window.innerHeight / 2 : 0
    let currentBlueX = mouseX
    let currentBlueY = mouseY
    let currentGoldX = mouseX
    let currentGoldY = mouseY
    let rafId: number | null = null

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const updateParallaxAndGlows = () => {
      const scrollY = window.scrollY

      // 1. Grid parallax by moving the pattern, not the layer.
      if (gridRef.current) {
        const gridTranslateY = -scrollY * 0.08
        gridRef.current.style.backgroundPosition = `0 ${gridTranslateY}px`
      }

      // 2. Glow tracking (Lerp for smooth physical inertia)
      currentBlueX += (mouseX - currentBlueX) * 0.05
      currentBlueY += (mouseY - currentBlueY) * 0.05

      currentGoldX += (mouseX - currentGoldX) * 0.03
      currentGoldY += (mouseY - currentGoldY) * 0.03

      if (glowBlueRef.current) {
        glowBlueRef.current.style.transform = `translate3d(${currentBlueX}px, ${currentBlueY}px, 0)`
      }

      if (glowGoldRef.current) {
        glowGoldRef.current.style.transform = `translate3d(${currentGoldX}px, ${currentGoldY}px, 0)`
      }

      rafId = requestAnimationFrame(updateParallaxAndGlows)
    }

    window.addEventListener("mousemove", handleMouseMove)
    rafId = requestAnimationFrame(updateParallaxAndGlows)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div className="ambient-bg-root" aria-hidden="true">
      {/* Scroll parallax dot grid */}
      <div ref={gridRef} className="ambient-grid" />

      {/* Floating radial glow spots */}
      <div ref={glowBlueRef} className="ambient-glow glow-blue" />
      <div ref={glowGoldRef} className="ambient-glow glow-gold" />
    </div>
  )
}
