"use client"

import { useEffect, useState } from "react"

const NAV_ITEMS = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Journey", href: "#journey", id: "journey" },
  { label: "Administrative Experience", href: "#administrative-experience", id: "administrative-experience" },
  { label: "Awards & Honours", href: "#awards-honours", id: "awards-honours" },
  { label: "Research", href: "#research", id: "research" },
  { label: "Publications & Conferences", href: "#publications", id: "publications" },
  { label: "Students", href: "#students", id: "students" },
  { label: "Gallery", href: "#gallery", id: "gallery" },
  { label: "Contact", href: "#contact", id: "contact" },
]

export function SiteNav() {
  const [activeId, setActiveId] = useState("home")

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => el !== null,
    )

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top of the viewport that is intersecting.
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        // Account for the sticky nav height; trigger when a section reaches the upper band.
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <nav aria-label="Primary" className="sticky top-0 z-50 border-b border-border bg-background/88 shadow-[0_12px_40px_oklch(0.24_0.06_255/0.06)] backdrop-blur-xl">
      <ul className="grid grid-cols-3 lg:grid-cols-9">
        {NAV_ITEMS.map((item, i) => {
          const isActive = activeId === item.id
          return (
            <li
              key={item.href}
              className={[
                "border-border border-b border-r",
                i % 3 === 2 ? "max-lg:border-r-0" : "",
                i === NAV_ITEMS.length - 1 ? "lg:border-r-0" : "",
                i >= 6 ? "max-lg:border-b-0" : "",
                "lg:border-b-0",
              ].join(" ")}
            >
              <a
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={[
                  "relative flex h-full items-center justify-center px-2 py-4 text-center font-sans text-xs font-medium tracking-wide transition-all duration-300",
                  isActive
                    ? "bg-gradient-to-b from-primary/10 to-orange/5 text-primary shadow-[inset_0_-2px_0_0_var(--orange)]"
                    : "text-muted-foreground hover:bg-secondary/70 hover:text-primary",
                ].join(" ")}
              >
                {isActive && (
                  <span className="absolute inset-x-4 bottom-0 h-px bg-orange shadow-[0_0_14px_oklch(0.62_0.14_58/0.55)]" />
                )}
                {item.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
