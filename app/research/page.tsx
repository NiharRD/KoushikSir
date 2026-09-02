import { prisma } from "@/lib/prisma"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { AmbientBackground } from "@/components/ambient-background"
import { ArrowLeft, FlaskConical, ExternalLink } from "lucide-react"
import Link from "next/link"

export default async function ResearchPage() {
  const items = await prisma.researchGrant.findMany({ orderBy: { id: "asc" } })

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
                  Sponsored Research &amp; Grants
                </h1>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-2">
                  Funded research projects, startup grants &amp; laboratory equipment initiatives
                </p>
              </div>
              <span className="font-mono text-xs px-3 py-1 bg-primary/10 text-primary border border-primary/20 self-start sm:self-auto">
                {items.length} Grants
              </span>
            </div>

            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="p-6 border border-border bg-background hover:bg-secondary/25 hover:border-primary/40 transition-all rounded-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs uppercase tracking-widest bg-orange/10 text-orange px-2.5 py-0.5 border border-orange/20 self-start">
                      {item.period}
                    </span>
                    <span className="font-mono text-sm font-semibold text-primary px-2.5 py-0.5 bg-primary/10 self-start sm:self-auto">
                      Grant Amount: {item.grant}
                    </span>
                  </div>

                  <h2 className="font-serif text-xl font-medium text-foreground mb-3 leading-snug">
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
                  {(() => {
                    try {
                      const customLinks = item.links ? JSON.parse(item.links) : [];
                      if (customLinks.length === 0) return null;
                      return (
                        <div className="flex flex-wrap gap-2 pt-3 mt-3 border-t border-border/40">
                          {customLinks.map((link: any, idx: number) => (
                            <a
                              key={`custom-${idx}`}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-mono border border-border px-3 py-1 bg-secondary/30 text-muted-foreground hover:text-orange hover:border-orange transition-colors"
                            >
                              <span>{link.label}</span>
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
