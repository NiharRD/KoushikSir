"use client"

import { Sparkles } from "lucide-react"

export function LensHint() {
  return (
    <div
      className="fixed bottom-20 right-6 z-50 flex h-12 w-12 items-center justify-start px-3.5 rounded-full border border-border bg-secondary/80 text-primary shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-md transition-all duration-300 hover:w-52 group cursor-help dark:bg-card/80 dark:border-border/40 select-none"
      title="Press & hold your right mouse button anywhere on the page to activate the magnifying lens."
    >
      <Sparkles className="h-5 w-5 text-orange animate-pulse shrink-0" />
      <span className="opacity-0 w-0 group-hover:opacity-100 group-hover:w-36 transition-all duration-300 overflow-hidden font-mono text-[0.65rem] uppercase tracking-widest text-orange ml-0 group-hover:ml-2.5 whitespace-nowrap">
        Hold Right-Click
      </span>
    </div>
  )
}
