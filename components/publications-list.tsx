"use client"

import { useState } from "react"
import { BaseModal } from "./base-modal"
import { BookOpen, GraduationCap, ExternalLink } from "lucide-react"

type Publication = {
  id: number
  ref: string
  title: string
  cite: string
  date: string | null
  researchGateUrl: string | null
  googleScholarUrl: string | null
  doiUrl: string | null
  links: string | null
}

export function PublicationsList({ publications }: { publications: Publication[] }) {
  const [selected, setSelected] = useState<Publication | null>(null)

  return (
    <>
      <div className="space-y-5">
        {publications.map((pub) => (
          <div
            key={pub.id}
            onClick={() => setSelected(pub)}
            className="p-6 border border-border bg-background hover:bg-secondary/25 hover:border-primary/40 transition-all rounded-sm cursor-pointer group"
          >
            <div className="flex justify-between items-start gap-4 mb-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-widest bg-orange/10 text-orange px-2.5 py-0.5 border border-orange/20">
                  {pub.date}
                </span>
                <span className="font-mono text-xs bg-primary/10 text-primary px-2.5 py-0.5">
                  {pub.ref}
                </span>
              </div>
              <div className="text-xs font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                View Details &rarr;
              </div>
            </div>

            <h2 className="font-serif text-xl text-foreground font-medium mb-2.5 leading-snug group-hover:text-primary transition-colors">
              {pub.title}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
              {pub.cite}
            </p>

            <div className="flex flex-wrap gap-2.5 pt-2 border-t border-border/40">
              {pub.researchGateUrl && (
                <span className="inline-flex items-center gap-1.5 text-xs font-mono border border-border px-3 py-1 bg-secondary/30 text-muted-foreground">
                  <BookOpen className="h-3 w-3" />
                  <span>ResearchGate</span>
                </span>
              )}
              {pub.googleScholarUrl && (
                <span className="inline-flex items-center gap-1.5 text-xs font-mono border border-border px-3 py-1 bg-secondary/30 text-muted-foreground">
                  <GraduationCap className="h-3 w-3" />
                  <span>Google Scholar</span>
                </span>
              )}
              {pub.doiUrl && (
                <span className="inline-flex items-center gap-1.5 text-xs font-mono border border-border px-3 py-1 bg-secondary/30 text-muted-foreground">
                  <span>DOI Link</span>
                </span>
              )}
              {(() => {
                try {
                  const customLinks = pub.links ? JSON.parse(pub.links) : [];
                  return customLinks.map((link: any, idx: number) => (
                    <span key={`custom-${idx}`} className="inline-flex items-center gap-1.5 text-xs font-mono border border-border px-3 py-1 bg-secondary/30 text-muted-foreground">
                      <span>{link.key}</span>
                    </span>
                  ));
                } catch (e) {
                  return null;
                }
              })()}
            </div>
          </div>
        ))}
      </div>

      <BaseModal
        open={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.title || ""}
        badge={selected?.date ? <span className="font-mono text-xs uppercase tracking-widest bg-orange/10 text-orange px-2.5 py-0.5 border border-orange/20">{selected.date}</span> : null}
        typeBadge={<span className="font-mono text-xs bg-primary/10 text-primary px-2.5 py-0.5">{selected?.ref}</span>}
      >
        {selected && (
          <>
            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground mb-2">Citation</p>
              <p className="text-sm leading-relaxed text-foreground">{selected.cite}</p>
            </div>
            
            <div className="flex flex-wrap gap-3 pt-4 border-t border-border/50">
              {selected.researchGateUrl && (
                <a href={selected.researchGateUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-mono border border-border px-4 py-2 bg-secondary/30 text-foreground hover:text-orange hover:border-orange transition-colors">
                  <BookOpen className="h-4 w-4" />
                  <span>View on ResearchGate</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
              {selected.googleScholarUrl && (
                <a href={selected.googleScholarUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-mono border border-border px-4 py-2 bg-secondary/30 text-foreground hover:text-orange hover:border-orange transition-colors">
                  <GraduationCap className="h-4 w-4" />
                  <span>View on Google Scholar</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
              {selected.doiUrl && (
                <a href={selected.doiUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-mono border border-border px-4 py-2 bg-secondary/30 text-foreground hover:text-orange hover:border-orange transition-colors">
                  <span>DOI Link</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
              {(() => {
                try {
                  const customLinks = selected.links ? JSON.parse(selected.links) : [];
                  return customLinks.map((link: any, idx: number) => (
                    <a key={`custom-modal-${idx}`} href={link.value} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-mono border border-border px-4 py-2 bg-secondary/30 text-foreground hover:text-orange hover:border-orange transition-colors">
                      <span>{link.key}</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ));
                } catch (e) {
                  return null;
                }
              })()}
            </div>
          </>
        )}
      </BaseModal>
    </>
  )
}
