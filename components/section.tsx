import type { ReactNode } from "react"

export function SectionLabel({
  index,
  title,
}: {
  index: string
  title: string
}) {
  return (
    <div className="relative overflow-hidden border-b border-border bg-gradient-to-r from-secondary/55 via-card/70 to-orange/10 px-6 py-6 sm:px-10">
      <div className="absolute inset-y-0 left-0 w-1 bg-orange/80" />
      <div className="absolute right-8 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-orange/10 blur-2xl" />
      <div className="relative flex items-end justify-between gap-5">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-xs tabular-nums text-orange">{index}</span>
          <h2 className="font-serif text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
            {title}
          </h2>
        </div>
        <span className="hidden h-px flex-1 bg-gradient-to-r from-border via-orange/30 to-transparent sm:block" />
      </div>
    </div>
  )
}

export function Section({
  id,
  index,
  title,
  children,
}: {
  id: string
  index: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-14 border-b border-border bg-card/55">
      <SectionLabel index={index} title={title} />
      {children}
    </section>
  )
}
