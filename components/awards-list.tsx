"use client"

import { useState } from "react"
import { BaseModal } from "./base-modal"
import { Award as AwardIcon, ExternalLink } from "lucide-react"

type Award = {
  id: number
  title: string
  detail: string
  date: string
  links: string | null
}

export function AwardsList({ items }: { items: Award[] }) {
  const [selected, setSelected] = useState<Award | null>(null)

  return (
    <>
      <div className="space-y-5">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelected(item)}
            className="p-6 border border-border bg-background hover:bg-secondary/25 hover:border-primary/40 transition-all rounded-sm flex gap-5 items-start cursor-pointer group"
          >
            <div className="h-10 w-10 rounded-full bg-orange/10 border border-orange/25 flex items-center justify-center shrink-0 text-orange mt-1">
              <AwardIcon className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs uppercase tracking-widest bg-orange/10 text-orange px-2.5 py-0.5 border border-orange/20">
                  {item.date}
                </span>
                <span className="text-xs font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                  View Details &rarr;
                </span>
              </div>
              <h2 className="font-serif text-xl font-medium text-foreground mt-2 mb-1.5 group-hover:text-primary transition-colors">
                {item.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                {item.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

      <BaseModal
        open={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.title || ""}
        badge={selected?.date ? <span className="font-mono text-xs uppercase tracking-widest bg-orange/10 text-orange px-2.5 py-0.5 border border-orange/20">{selected.date}</span> : null}
      >
        {selected && (
          <>
            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground mb-2">Award Details</p>
              <p className="text-sm leading-relaxed text-foreground whitespace-pre-wrap">{selected.detail}</p>
            </div>
            
            {(() => {
              try {
                const customLinks = selected.links ? JSON.parse(selected.links) : [];
                if (customLinks.length === 0) return null;
                return (
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-border/50">
                    {customLinks.map((link: any, idx: number) => (
                      <a key={`custom-modal-${idx}`} href={link.value} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-mono border border-border px-4 py-2 bg-secondary/30 text-foreground hover:text-orange hover:border-orange transition-colors">
                        <span>{link.key}</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ))}
                  </div>
                );
              } catch (e) {
                return null;
              }
            })()}
          </>
        )}
      </BaseModal>
    </>
  )
}
