"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Publications", href: "/publications" },
  { label: "Research", href: "/research" },
  { label: "Students", href: "/students" },
  { label: "Awards", href: "/awards" },
  { label: "Teaching", href: "/teaching" },
  { label: "Consultancy", href: "/consultancy" },
]

export function SiteNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav aria-label="Primary" className="sticky top-0 z-50 border-b border-border bg-background/90 shadow-[0_12px_40px_oklch(0.24_0.06_255/0.06)] backdrop-blur-xl">
      {/* Desktop Nav */}
      <ul className="hidden lg:grid grid-cols-7 w-full">
        {NAV_ITEMS.map((item, i) => {
          const isActive = pathname === item.href
          return (
            <li
              key={item.href}
              className={[
                "border-border border-r",
                i === NAV_ITEMS.length - 1 ? "border-r-0" : "",
              ].join(" ")}
            >
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={[
                  "relative flex h-full items-center justify-center px-2 py-4 text-center font-sans text-xs font-medium tracking-wide transition-all duration-300",
                  isActive
                    ? "bg-gradient-to-b from-primary/15 to-orange/10 text-primary shadow-[inset_0_-2px_0_0_var(--orange)] font-semibold"
                    : "text-muted-foreground hover:bg-secondary/70 hover:text-primary",
                ].join(" ")}
              >
                {isActive && (
                  <span className="absolute inset-x-4 bottom-0 h-[2px] bg-orange shadow-[0_0_14px_oklch(0.62_0.14_58/0.55)]" />
                )}
                {item.label}
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
              const isActive = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={[
                      "block px-6 py-3.5 text-sm font-medium tracking-wide transition-all",
                      isActive
                        ? "bg-primary/10 text-primary border-l-4 border-orange pl-5 font-semibold"
                        : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </nav>
  )
}
