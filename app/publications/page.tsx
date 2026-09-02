import { prisma } from "@/lib/prisma"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { AmbientBackground } from "@/components/ambient-background"
import { ArrowLeft, BookOpen, GraduationCap, ExternalLink } from "lucide-react"
import Link from "next/link"

export default async function PublicationsPage() {
  const publications = await prisma.publication.findMany({
    orderBy: { id: "asc" },
  })

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
                  Publications &amp; Articles
                </h1>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-2">
                  Peer-reviewed journals, book chapters &amp; conference proceedings
                </p>
              </div>
              <span className="font-mono text-xs px-3 py-1 bg-primary/10 text-primary border border-primary/20 self-start sm:self-auto">
                {publications.length} Articles Recorded
              </span>
            </div>

            <div className="space-y-5">
              {publications.map((pub) => (
                <div
                  key={pub.id}
                  className="p-6 border border-border bg-background hover:bg-secondary/25 hover:border-primary/40 transition-all rounded-sm"
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
                  </div>

                  <h2 className="font-serif text-xl text-foreground font-medium mb-2.5 leading-snug">
                    {pub.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {pub.cite}
                  </p>

                  <div className="flex flex-wrap gap-2.5 pt-2 border-t border-border/40">
                    {pub.researchGateUrl && (
                      <a
                        href={pub.researchGateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono border border-border px-3 py-1 bg-secondary/30 text-muted-foreground hover:text-orange hover:border-orange transition-colors"
                      >
                        <BookOpen className="h-3 w-3" />
                        <span>ResearchGate</span>
                        <ExternalLink className="h-2.5 w-2.5" />
                      </a>
                    )}
                    {pub.googleScholarUrl && (
                      <a
                        href={pub.googleScholarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono border border-border px-3 py-1 bg-secondary/30 text-muted-foreground hover:text-orange hover:border-orange transition-colors"
                      >
                        <GraduationCap className="h-3 w-3" />
                        <span>Google Scholar</span>
                      </a>
                    )}
                    {pub.doiUrl && (
                      <a
                        href={pub.doiUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono border border-border px-3 py-1 bg-secondary/30 text-muted-foreground hover:text-orange hover:border-orange transition-colors"
                      >
                        <span>DOI Link</span>
                        <ExternalLink className="h-2.5 w-2.5" />
                      </a>
                    )}
                    {(() => {
                      try {
                        const customLinks = pub.links ? JSON.parse(pub.links) : [];
                        return customLinks.map((link: any, idx: number) => (
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
                        ));
                      } catch (e) {
                        return null;
                      }
                    })()}
                  </div>
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
