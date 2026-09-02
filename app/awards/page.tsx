export const revalidate = 3600 // ISR: re-generate every 1 hour max; admin edits trigger instant revalidation via revalidatePath()

import { prisma } from "@/lib/prisma"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { AmbientBackground } from "@/components/ambient-background"
import { ArrowLeft, Award as AwardIcon } from "lucide-react"
import Link from "next/link"

export default async function AwardsPage() {
  const items = await prisma.award.findMany({ orderBy: { id: "asc" } })

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
                  Awards &amp; Honours
                </h1>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-2">
                  Fellowships, international research grants, session chairs &amp; academic distinctions
                </p>
              </div>
              <span className="font-mono text-xs px-3 py-1 bg-primary/10 text-primary border border-primary/20 self-start sm:self-auto">
                {items.length} Honours
              </span>
            </div>

            <div className="space-y-5">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="p-6 border border-border bg-background hover:bg-secondary/25 hover:border-primary/40 transition-all rounded-sm flex gap-5 items-start"
                >
                  <div className="h-10 w-10 rounded-full bg-orange/10 border border-orange/25 flex items-center justify-center shrink-0 text-orange mt-1">
                    <AwardIcon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <span className="font-mono text-xs uppercase tracking-widest bg-orange/10 text-orange px-2.5 py-0.5 border border-orange/20">
                      {item.date}
                    </span>
                    <h2 className="font-serif text-xl font-medium text-foreground mt-2 mb-1.5">
                      {item.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.detail}
                    </p>
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
