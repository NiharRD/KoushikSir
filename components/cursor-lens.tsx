"use client"

import { useEffect, useRef, useState } from "react"

function shouldEnableLens() {
  if (typeof window === "undefined") return false
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false
  if (window.matchMedia("(pointer: coarse)").matches) return false
  return true
}

function stripIds(root: HTMLElement) {
  root.removeAttribute("id")
  root.querySelectorAll("[id]").forEach((el) => el.removeAttribute("id"))
}

function buildLensLayers(mainContent: HTMLElement) {
  const clone = mainContent.cloneNode(true) as HTMLElement
  stripIds(clone)

  // 1. Edge Layer
  const lensEdge = document.createElement("div")
  lensEdge.className = "lens-layer lens-edge-layer"
  const edgeClone = document.createElement("div")
  edgeClone.className = "cursor-lens-clone"
  edgeClone.appendChild(clone)
  lensEdge.appendChild(edgeClone)

  // 2. Center Layer
  const lensCenter = document.createElement("div")
  lensCenter.className = "lens-layer lens-center-layer"
  const centerClone = document.createElement("div")
  centerClone.className = "cursor-lens-clone"
  centerClone.appendChild(clone.cloneNode(true))
  lensCenter.appendChild(centerClone)

  // 3. Glass Overlay
  const lensGlass = document.createElement("div")
  lensGlass.className = "lens-glass-overlay"
  lensGlass.setAttribute("aria-hidden", "true")

  return { lensEdge, lensCenter, lensGlass }
}

export function CursorLens() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (!shouldEnableLens()) return

    setActive(true)

    let targetX = -1000
    let targetY = -1000
    let currentX = -1000
    let currentY = -1000
    let rafId: number | null = null
    let isLensing = false

    const updateClones = () => {
      if (!isLensing) return

      const scrollY = window.scrollY
      
      // Smooth interpolation (lerp)
      if (currentX === -1000) {
        currentX = targetX
        currentY = targetY
      } else {
        // Butter-smooth inertia glide
        currentX += (targetX - currentX) * 0.16
        currentY += (targetY - currentY) * 0.16
      }

      const container = containerRef.current
      if (container) {
        const W = 280
        const H = 280
        const D = 25 // Edge width
        const W_inner = W - 2 * D
        const H_inner = H - 2 * D

        const cx = currentX
        const cy = currentY

        const lensX = cx - W / 2
        const lensY = cy - H / 2
        container.style.transform = `translate3d(${lensX}px, ${lensY}px, 0)`

        // Move the clones inside
        const edgeClone = container.querySelector(".lens-edge-layer .cursor-lens-clone") as HTMLElement | null
        const centerClone = container.querySelector(".lens-center-layer .cursor-lens-clone") as HTMLElement | null

        if (edgeClone) {
          const S_edge = 1.3
          const tx_edge = W / 2 - cx * S_edge
          const ty_edge = H / 2 - (cy + scrollY) * S_edge
          edgeClone.style.transform = `translate3d(${tx_edge}px, ${ty_edge}px, 0) scale(${S_edge})`
        }

        if (centerClone) {
          const S_center = 1.8
          const tx_center = W_inner / 2 - cx * S_center
          const ty_center = H_inner / 2 - (cy + scrollY) * S_center
          centerClone.style.transform = `translate3d(${tx_center}px, ${ty_center}px, 0) scale(${S_center})`
        }
      }

      rafId = requestAnimationFrame(updateClones)
    }

    const startLensing = () => {
      if (isLensing) return
      isLensing = true
      document.documentElement.classList.add("cursor-lens-active")
      if (rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(updateClones)
    }

    const stopLensing = () => {
      if (!isLensing) return
      isLensing = false
      document.documentElement.classList.remove("cursor-lens-active")
      if (rafId) {
        cancelAnimationFrame(rafId)
        rafId = null
      }
      // Reset position variables
      currentX = -1000
      currentY = -1000
      const container = containerRef.current
      if (container) {
        container.style.transform = `translate3d(-1000px, -1000px, 0)`
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY
    }

    const handleMouseDown = (e: MouseEvent) => {
      if (e.button === 2) {
        targetX = e.clientX
        targetY = e.clientY
        currentX = e.clientX
        currentY = e.clientY
        mountClones()
        startLensing()
      }
    }

    const handleMouseUp = (e: MouseEvent) => {
      if (e.button === 2) {
        stopLensing()
      }
    }

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
    }

    const handleBlur = () => {
      stopLensing()
    }

    const mountClones = () => {
      const mainContent = document.getElementById("main-content")
      const container = containerRef.current
      if (!mainContent || !container) return

      container.replaceChildren()
      const { lensEdge, lensCenter, lensGlass } = buildLensLayers(mainContent)
      container.append(lensEdge, lensCenter, lensGlass)
    }

    const initTimer = window.setTimeout(mountClones, 100)
    const loadTimer = window.setTimeout(mountClones, 800)

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mousedown", handleMouseDown, true)
    window.addEventListener("mouseup", handleMouseUp, true)
    window.addEventListener("contextmenu", handleContextMenu, true)
    window.addEventListener("blur", handleBlur)
    window.addEventListener("resize", mountClones)
    window.addEventListener("load", mountClones)

    return () => {
      window.clearTimeout(initTimer)
      window.clearTimeout(loadTimer)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mousedown", handleMouseDown, true)
      window.removeEventListener("mouseup", handleMouseUp, true)
      window.removeEventListener("contextmenu", handleContextMenu, true)
      window.removeEventListener("blur", handleBlur)
      window.removeEventListener("resize", mountClones)
      window.removeEventListener("load", mountClones)
      stopLensing()
      containerRef.current?.replaceChildren()
    }
  }, [])

  if (!active) return null

  return (
    <div
      ref={containerRef}
      className="cursor-lens-container"
      aria-hidden="true"
    />
  )
}
