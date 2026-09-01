"use client"

import { useEffect, useState } from "react"

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let rafId: number

    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop
        const scrollHeight =
          document.documentElement.scrollHeight - document.documentElement.clientHeight

        if (scrollHeight > 0) {
          const currentProgress = (scrollTop / scrollHeight) * 100
          setProgress(Math.min(100, Math.max(0, currentProgress)))
        } else {
          setProgress(0)
        }
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return progress
}
