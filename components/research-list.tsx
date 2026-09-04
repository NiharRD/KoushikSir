"use client"

import { useState } from "react"
import { BaseModal } from "./base-modal"
import { ExternalLink } from "lucide-react"

type ResearchGrant = {
  id: number
  title: string
  agency: string
  grant: string
  period: string
  role: string | null
  links: string | null
}

export function ResearchList({ items, isCompact = false }: { items: ResearchGrant[], isCompact?: boolean }) {
  const [selected, setSelected] = useState<ResearchGrant | null>(null)

  return (
    <>
      <div className={isCompact ? "grid grid-cols-1 md:grid-cols-2 gap-5" : "space-y-6"}>
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelected(item)}
            className={
              isCompact
                ? "p-5 border border-border bg-background hover:bg-secondary/25 transition-all rounded-sm flex flex-col justify-between cursor-pointer group"
                : "p-6 border border-border bg-background hover:bg-secondary/25 hover:border-primary/40 transition-all rounded-sm cursor-pointer group"
            }
          >
            {isCompact ? (
              <>
                <div>
                  <div className="flex justify-between items-center mb-2.5">
                    <span className="font-mono text-[0.68rem] uppercase tracking-wider text-orange font-medium">
                      {item.period}
                    </span>
                    <span className="font-mono text-xs font-semibold px-2 py-0.5 bg-primary/10 text-primary">
                      {item.grant}
                    </span>
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-medium text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="pt-3 border-t border-border/50 text-xs font-mono text-muted-foreground space-y-1">
                  <p><strong className="text-foreground">Agency:</strong> {item.agency}</p>
                  <p><strong className="text-foreground">Role:</strong> {item.role}</p>
                  <div className="pt-2 text-xs font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                    View Details &rarr;
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs uppercase tracking-widest bg-orange/10 text-orange px-2.5 py-0.5 border border-orange/20 self-start">
                    {item.period}
                  </span>
                  <div className="flex items-center gap-3 self-start sm:self-auto">
                    <span className="font-mono text-sm font-semibold text-primary px-2.5 py-0.5 bg-primary/10">
                      Grant Amount: {item.grant}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
                      View Details &rarr;
                    </span>
                  </div>
                </div>

                <h2 className="font-serif text-xl font-medium text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                  {item.title}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-border/50 text-xs font-mono text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Funding Agency:</strong> {item.agency}
                  </p>
                  <p>
                    <strong className="text-foreground">Investigator Role:</strong> {item.role}
                  </p>
                </div>
                
                <div className="mt-3 text-xs font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity sm:hidden">
                  View Details &rarr;
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <BaseModal
        open={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.title || ""}
        badge={selected?.period ? <span className="font-mono text-xs uppercase tracking-widest bg-orange/10 text-orange px-2.5 py-0.5 border border-orange/20">{selected.period}</span> : null}
        typeBadge={<span className="font-mono text-sm font-semibold text-primary px-2.5 py-0.5 bg-primary/10">{selected?.grant}</span>}
      >
        {selected && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground mb-1">Funding Agency</p>
                <p className="text-sm font-medium text-foreground">{selected.agency}</p>
              </div>
              <div>
                <p className="font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground mb-1">Investigator Role</p>
                <p className="text-sm font-medium text-foreground">{selected.role || "N/A"}</p>
              </div>
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
