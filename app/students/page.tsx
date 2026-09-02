export const dynamic = "force-dynamic"

import { prisma } from "@/lib/prisma"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { AmbientBackground } from "@/components/ambient-background"
import { ArrowLeft, GraduationCap, Users, ExternalLink } from "lucide-react"
import Link from "next/link"

export default async function StudentsPage() {
  const items = await prisma.student.findMany({ orderBy: { id: "asc" } })

  return (
    <div className="relative isolate min-h-screen font-sans text-foreground">
      <AmbientBackground />
      <div className="relative z-10 w-full bg-card/85 shadow-xl backdrop-blur-md min-h-screen flex flex-col justify-between">
        <div>
          <SiteNav />
          <main className="px-6 py-12 sm:px-10 max-w-6xl mx-auto w-full">
            <Link
              href="/"
              className="inline-flex items-center text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-orange transition-colors mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Overview
            </Link>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-10 pb-4 border-b border-border">
              <div>
                <h1 className="font-serif text-3xl sm:text-5xl text-primary font-medium">
                  Doctoral Scholars &amp; Supervision
                </h1>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-2">
                  Ph.D. &amp; Masters researchers supervised in the Structural Dynamics &amp; SHM Lab
                </p>
              </div>
              <span className="font-mono text-xs px-3 py-1 bg-primary/10 text-primary border border-primary/20 self-start sm:self-auto">
                {items.length} Scholars
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="p-6 border border-border bg-background hover:bg-secondary/25 hover:border-primary/40 transition-all rounded-sm flex flex-col justify-between"
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

                    <h2 className="font-serif text-2xl font-medium text-foreground mb-2">
                      {item.name}
                    </h2>
                    <p className="text-xs font-mono text-orange mb-3">
                      {item.degree} • IIT Patna
                    </p>

                    <div className="bg-secondary/20 p-4 border border-border/60 rounded-sm mb-4">
                      <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                        Doctoral Thesis Topic:
                      </p>
                      <p className="text-sm text-foreground/90 leading-relaxed font-serif">
                        &ldquo;{item.thesis}&rdquo;
                      </p>
                    </div>
                  </div>

                  {item.googleScholarUrl && (
                    <div className="pt-3 border-t border-border/50">
                      <a
                        href={item.googleScholarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:text-orange transition-colors"
                      >
                        <GraduationCap className="h-3.5 w-3.5" />
                        <span>Google Scholar Profile</span>
                      </a>
                    </div>
                  )}
                  {(() => {
                    try {
                      const customLinks = item.links ? JSON.parse(item.links) : [];
                      if (customLinks.length === 0) return null;
                      return (
                        <div className="flex flex-wrap gap-2 pt-3 mt-3 border-t border-border/40">
                          {customLinks.map((link: any, idx: number) => (
                            <a
                              key={`custom-${idx}`}
                              href={link.value}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-mono border border-border px-3 py-1 bg-secondary/30 text-muted-foreground hover:text-orange hover:border-orange transition-colors"
                            >
                              <span>{link.key}</span>
                              <ExternalLink className="h-2.5 w-2.5" />
                            </a>
                          ))}
                        </div>
                      );
                    } catch (e) { return null; }
                  })()}
                </div>
              ))}
            </div>
          </main>
        </div>

        <SiteFooter />
      </div>
    </div>
  )
}
