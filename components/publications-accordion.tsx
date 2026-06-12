"use client"

import { useState } from "react"
import { Plus, Minus, ArrowRight } from "lucide-react"

export type Publication = {
  ref: string
  title: string
  cite: string
  abstract?: string
  date?: string
}

export function PublicationsAccordion({
  items,
  trigger = "click",
}: {
  items: Publication[]
  trigger?: "click" | "hover"
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const isHover = trigger === "hover"

  return (
    <ul>
      {items.map((p, i) => {
        const isOpen = openIndex === i
        return (
          <li
            key={p.ref}
            onMouseEnter={isHover ? () => setOpenIndex(i) : undefined}
            onMouseLeave={isHover ? () => setOpenIndex(null) : undefined}
            className={i < items.length - 1 ? "border-b border-border" : ""}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center gap-5 px-6 py-6 text-left transition-colors hover:bg-secondary/60 sm:px-10"
            >
              <span className="font-mono text-xs tabular-nums text-primary">{p.ref}</span>
              <div className="flex-1">
                <span className="block font-serif text-lg font-medium tracking-tight text-foreground">
                  {p.title}
                </span>
                {p.date && (
                  <span className="mt-1 block font-mono text-[0.65rem] uppercase tracking-widest text-orange">
                    {p.date}
                  </span>
                )}
              </div>
              <span aria-hidden="true" className="shrink-0 text-muted-foreground">
                {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-8 sm:px-10">
                <div className="border-t border-border pt-6">
                  <p className="font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground">
                    Citation
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground">{p.cite}</p>
                  {p.abstract && (
                    <>
                      <p className="mt-6 font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground">
                        Abstract
                      </p>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-pretty text-muted-foreground">
                        {p.abstract}
                      </p>
                    </>
                  )}
                  <a
                    href="#"
                    className="group mt-6 inline-flex items-center gap-2 font-sans text-xs font-medium tracking-wide text-primary hover:text-primary/80"
                  >
                    Download PDF
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            )}
          </li>
        )
      })}
    </ul>
  )
}
