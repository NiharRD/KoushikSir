"use client"

import { useState } from "react"
import { BaseModal } from "./base-modal"
import { GraduationCap, ExternalLink } from "lucide-react"

type Student = {
  id: number
  name: string
  degree: string
  year: string | null
  status: string
  thesis: string
  areaOfResearch: string | null
  googleScholarUrl: string | null
  links: string | null
}

export function StudentsList({ items }: { items: Student[] }) {
  const [selected, setSelected] = useState<Student | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelected(item)}
            className="p-6 border border-border bg-background hover:bg-secondary/25 hover:border-primary/40 transition-all rounded-sm flex flex-col justify-between cursor-pointer group"
          >
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="font-mono text-xs uppercase tracking-widest bg-orange/10 text-orange px-2.5 py-0.5 border border-orange/20">
                  {item.year || "Ph.D."}
                </span>
                <span className="font-mono text-xs px-2.5 py-0.5 bg-primary/10 text-primary font-medium">
                  {item.status}
                </span>
              </div>

              <h2 className="font-serif text-2xl font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                {item.name}
              </h2>
              <p className="text-xs font-mono text-orange mb-3">
                {item.degree} • IIT Patna
              </p>

              <div className="bg-secondary/20 p-4 border border-border/60 rounded-sm mb-4">
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                  Doctoral Thesis Topic:
                </p>
                <p className="text-sm text-foreground/90 leading-relaxed font-serif line-clamp-3">
                  &ldquo;{item.thesis}&rdquo;
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between mt-2">
              <div className="text-xs font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                View Profile &rarr;
              </div>
            </div>
          </div>
        ))}
      </div>

      <BaseModal
        open={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.name || ""}
        badge={<span className="font-mono text-xs uppercase tracking-widest bg-orange/10 text-orange px-2.5 py-0.5 border border-orange/20">{selected?.year || "Ph.D."}</span>}
        typeBadge={<span className="font-mono text-xs bg-primary/10 text-primary px-2.5 py-0.5 font-medium">{selected?.status}</span>}
      >
        {selected && (
          <>
            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground mb-1">Degree Program</p>
              <p className="text-sm font-medium text-foreground">{selected.degree} • IIT Patna</p>
            </div>
            
            {selected.areaOfResearch && (
              <div>
                <p className="font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground mb-1">Area of Research</p>
                <p className="text-sm text-foreground">{selected.areaOfResearch}</p>
              </div>
            )}
            
            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground mb-2">Thesis / Research Topic</p>
              <div className="bg-secondary/20 p-5 border border-border/60 rounded-sm">
                <p className="text-sm text-foreground/90 leading-relaxed font-serif text-pretty">
                  &ldquo;{selected.thesis}&rdquo;
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 pt-4 border-t border-border/50">
              {selected.googleScholarUrl && (
                <a href={selected.googleScholarUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-mono border border-border px-4 py-2 bg-secondary/30 text-foreground hover:text-orange hover:border-orange transition-colors">
                  <GraduationCap className="h-4 w-4" />
                  <span>Google Scholar Profile</span>
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
