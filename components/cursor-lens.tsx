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

  const lensEdge = document.createElement("div")
  lensEdge.id = "lens-edge"
  const edgeWrapper = document.createElement("div")
  edgeWrapper.className = "cursor-lens-clone edge-scale"
  edgeWrapper.appendChild(clone)
  lensEdge.appendChild(edgeWrapper)

  const lensCenter = document.createElement("div")
  lensCenter.id = "lens-center"
  const centerWrapper = document.createElement("div")
  centerWrapper.className = "cursor-lens-clone center-scale"
  centerWrapper.appendChild(clone.cloneNode(true))
  lensCenter.appendChild(centerWrapper)

  const lensGlass = document.createElement("div")
  lensGlass.id = "lens-glass"
  lensGlass.setAttribute("aria-hidden", "true")

  return { lensEdge, lensCenter, lensGlass }
}

export function CursorLens() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (!shouldEnableLens()) return

    setActive(true)

    const updateMousePosition = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--lens-x", `${e.clientX}px`)
      document.documentElement.style.setProperty("--lens-y", `${e.clientY}px`)
    }

    const updateScrollPosition = () => {
      document.documentElement.style.setProperty("--lens-scroll-y", `${window.scrollY}px`)
    }

    const mountClones = () => {
      const mainContent = document.getElementById("main-content")
      const container = containerRef.current
      if (!mainContent || !container) return

      container.replaceChildren()
      const { lensEdge, lensCenter, lensGlass } = buildLensLayers(mainContent)
      container.append(lensEdge, lensCenter, lensGlass)
    }

    const handleMouseDown = (e: MouseEvent) => {
      if (e.button === 2) {
        updateMousePosition(e)
        updateScrollPosition()
        mountClones()
        document.documentElement.classList.add("cursor-lens-active")
      }
    }

    const handleMouseUp = (e: MouseEvent) => {
      if (e.button === 2) {
        document.documentElement.classList.remove("cursor-lens-active")
      }
    }

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
    }

    const handleBlur = () => {
      document.documentElement.classList.remove("cursor-lens-active")
    }

    const initTimer = window.setTimeout(mountClones, 100)
    const loadTimer = window.setTimeout(mountClones, 800)

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("scroll", updateScrollPosition, { passive: true })
    window.addEventListener("mousedown", handleMouseDown, true)
    window.addEventListener("mouseup", handleMouseUp, true)
    window.addEventListener("contextmenu", handleContextMenu, true)
    window.addEventListener("blur", handleBlur)
    window.addEventListener("resize", mountClones)
    window.addEventListener("load", mountClones)

    document.documentElement.style.setProperty("--lens-x", "-1000px")
    document.documentElement.style.setProperty("--lens-y", "-1000px")
    updateScrollPosition()

    return () => {
      window.clearTimeout(initTimer)
      window.clearTimeout(loadTimer)
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("scroll", updateScrollPosition)
      window.removeEventListener("mousedown", handleMouseDown, true)
      window.removeEventListener("mouseup", handleMouseUp, true)
      window.removeEventListener("contextmenu", handleContextMenu, true)
      window.removeEventListener("blur", handleBlur)
      window.removeEventListener("resize", mountClones)
      window.removeEventListener("load", mountClones)
      document.documentElement.classList.remove("cursor-lens-active")
      document.documentElement.style.removeProperty("--lens-x")
      document.documentElement.style.removeProperty("--lens-y")
      document.documentElement.style.removeProperty("--lens-scroll-y")
      containerRef.current?.replaceChildren()
    }
  }, [])

  if (!active) return null

  return (
    <div
      ref={containerRef}
      className="cursor-lens-root"
      aria-hidden="true"
    />
  )
}
