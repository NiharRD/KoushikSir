"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useScrollProgress } from "@/hooks/use-scroll-progress"
import { useActiveSection } from "@/hooks/use-active-section"

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Publications", href: "/publications" },
  { label: "Research", href: "/research" },
  { label: "Students", href: "/students" },
  { label: "Awards", href: "/awards" },
  { label: "Teaching", href: "/teaching" },
  { label: "Consultancy", href: "/consultancy" },
]

const HOMEPAGE_SECTIONS = [
  "hero",
  "publications-preview",
  "research-preview",
  "students-preview",
  "awards-preview",
  "consultancy-preview",
  "contact",
]

const SECTION_TO_NAV: Record<string, string> = {
  hero: "/",
  "publications-preview": "/publications",
  "research-preview": "/research",
  "students-preview": "/students",
  "awards-preview": "/awards",
  "consultancy-preview": "/consultancy",
}

export function SiteNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const scrollProgress = useScrollProgress()
  const activeSection = useActiveSection(HOMEPAGE_SECTIONS)

  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-50 border-b border-border bg-background/90 shadow-[0_12px_40px_oklch(0.24_0.06_255/0.06)] backdrop-blur-xl transition-colors duration-300"
    >
      {/* Desktop Nav */}
      <ul className="hidden lg:grid grid-cols-7 w-full">
        {NAV_ITEMS.map((item, i) => {
          const isCurrentRoute = pathname === item.href
          const isScrollActive =
            pathname === "/" && SECTION_TO_NAV[activeSection ?? ""] === item.href

          return (
            <li
              key={item.href}
              className={[
                "border-border border-r relative",
                i === NAV_ITEMS.length - 1 ? "border-r-0" : "",
              ].join(" ")}
            >
              <Link
                href={item.href}
                aria-current={isCurrentRoute ? "page" : undefined}
                className={[
                  "relative flex h-full items-center justify-center px-2 py-4 text-center font-sans text-xs font-medium tracking-wide transition-all duration-300 group",
                  isCurrentRoute
                    ? "bg-gradient-to-b from-primary/15 to-orange/10 text-primary shadow-[inset_0_-2px_0_0_var(--orange)] font-semibold"
                    : isScrollActive
                    ? "text-orange bg-orange/5 font-semibold"
                    : "text-muted-foreground hover:bg-secondary/70 hover:text-primary",
                ].join(" ")}
              >
                {/* Active Route underline */}
                {isCurrentRoute && (
                  <span className="absolute inset-x-4 bottom-0 h-[2px] bg-orange shadow-[0_0_14px_oklch(0.62_0.14_58/0.55)]" />
                )}

                {/* In-page Section Active Pulse Indicator (Homepage) */}
                {isScrollActive && !isCurrentRoute && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange animate-ping opacity-75" />
                    <span className="absolute h-1.5 w-1.5 rounded-full bg-orange shadow-[0_0_8px_var(--orange)]" />
                  </span>
                )}

                <span className="relative z-10">{item.label}</span>
              </Link>
            </li>
          )
        })}
      </ul>

      {/* Mobile Nav Header */}
      <div className="lg:hidden flex items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif font-medium text-primary text-base">
          Dr. Koushik Roy
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground p-2 rounded-md hover:bg-secondary/60 transition-colors"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <ul className="flex flex-col divide-y divide-border">
            {NAV_ITEMS.map((item) => {
              const isCurrentRoute = pathname === item.href
              const isScrollActive =
                pathname === "/" && SECTION_TO_NAV[activeSection ?? ""] === item.href

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={[
                      "flex items-center justify-between px-6 py-3.5 text-sm font-medium tracking-wide transition-all",
                      isCurrentRoute
                        ? "bg-primary/10 text-primary border-l-4 border-orange pl-5 font-semibold"
                        : isScrollActive
                        ? "text-orange bg-orange/5 font-semibold border-l-4 border-orange/60 pl-5"
                        : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground",
                    ].join(" ")}
                  >
                    <span>{item.label}</span>
                    {isScrollActive && !isCurrentRoute && (
                      <span className="h-2 w-2 rounded-full bg-orange animate-pulse" />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}

      {/* Sleek Scroll Reading Progress Bar (Fixed along bottom edge of nav) */}
      <div className="absolute inset-x-0 bottom-0 h-[2.5px] w-full bg-border/40 overflow-hidden pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-orange via-primary to-orange shadow-[0_0_12px_oklch(0.62_0.14_58/0.8)] transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </nav>
  )
}
