"use client"

import { useEffect, useState, useRef } from "react"

export function AnimatedCounter({ value }: { value: string }) {
  const [count, setCount] = useState(0)
  const targetNumber = parseInt(value, 10)
  const elementRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    let observer: IntersectionObserver | null = null
    let animationFrameId: number

    const startAnimation = () => {
      const duration = 1500 // 1.5 seconds
      const startTime = performance.now()

      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime
        const progress = Math.min(elapsedTime / duration, 1)
        
        // Easing function: easeOutQuad
        const easeProgress = progress * (2 - progress)
        const currentCount = Math.floor(easeProgress * targetNumber)

        setCount(currentCount)

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate)
        } else {
          setCount(targetNumber)
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    if (elementRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            startAnimation()
            if (observer) observer.disconnect()
          }
        },
        { threshold: 0.1 }
      )
      observer.observe(elementRef.current)
    }

    return () => {
      if (observer) observer.disconnect()
      cancelAnimationFrame(animationFrameId)
    }
  }, [targetNumber])

  // Pad numbers with leading zero if the original value had one
  const formatNumber = (num: number) => {
    if (value.startsWith("0") && num < 10) {
      return `0${num}`
    }
    return String(num)
  }

  return (
    <span ref={elementRef} className="tabular-nums">
      {formatNumber(count)}
    </span>
  )
}
