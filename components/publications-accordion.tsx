"use client"

import { useState } from "react"
import { Plus, Minus, ArrowRight } from "lucide-react"

export type Publication = {
  ref: string
  title: string
  cite: string
  abstract?: string
  date?: string
  url?: string
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
            className={[
              "group relative transition-all duration-300 hover:z-10 hover:bg-secondary/45 hover:shadow-[0_10px_34px_oklch(0.36_0.13_252/0.07)]",
              i < items.length - 1 ? "border-b border-border" : "",
            ].join(" ")}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center gap-5 px-6 py-6 text-left transition-all duration-300 sm:px-10"
            >
              <span className="border border-border bg-card/80 px-2 py-1 font-mono text-xs tabular-nums text-primary shadow-sm transition-colors group-hover:border-orange/40 group-hover:text-orange">{p.ref}</span>
              <div className="flex-1">
                <span className="block font-serif text-lg font-medium leading-snug tracking-tight text-foreground transition-colors group-hover:text-primary">
                  {p.title}
                </span>
                {p.date && (
                  <span className="mt-1 block font-mono text-[0.65rem] uppercase tracking-widest text-orange">
                    {p.date}
                  </span>
                )}
              </div>
              <span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center border border-border bg-card/75 text-muted-foreground transition-all group-hover:border-orange/40 group-hover:text-orange">
                {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-8 sm:px-10">
                <div className="border-t border-border bg-card/45 px-5 py-6 shadow-inner">
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
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link mt-6 inline-flex items-center gap-2 border border-border bg-secondary/45 px-3 py-2 font-sans text-xs font-medium tracking-wide text-primary transition-all hover:border-orange/50 hover:bg-orange/10 hover:text-orange"
                    >
                      View on ResearchGate
                      <ArrowRight
                        className="size-4 transition-transform group-hover/link:translate-x-1"
                        aria-hidden="true"
                      />
                    </a>
                  ) : (
                    <a
                      href="#"
                      className="group/link mt-6 inline-flex items-center gap-2 border border-border bg-secondary/45 px-3 py-2 font-sans text-xs font-medium tracking-wide text-primary transition-all hover:border-orange/50 hover:bg-orange/10 hover:text-orange"
                    >
                      Download PDF
                      <ArrowRight
                        className="size-4 transition-transform group-hover/link:translate-x-1"
                        aria-hidden="true"
                      />
                    </a>
                  )}
                </div>
              </div>
            )}
          </li>
        )
      })}
    </ul>
  )
}
