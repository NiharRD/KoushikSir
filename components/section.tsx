import type { ReactNode } from "react"

export function SectionLabel({
  index,
  title,
}: {
  index: string
  title: string
}) {
  return (
    <div className="flex items-baseline gap-4 border-b border-border bg-secondary/40 px-6 py-5 sm:px-10">
      <span className="font-mono text-xs tabular-nums text-orange">{index}</span>
      <h2 className="font-serif text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
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
    <section id={id} className="scroll-mt-14 border-b border-border">
      <SectionLabel index={index} title={title} />
      {children}
    </section>
  )
}
