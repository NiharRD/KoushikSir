export const revalidate = 3600 // ISR: re-generate every 1 hour max; admin edits trigger instant revalidation via revalidatePath()

import { prisma } from "@/lib/prisma"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { AmbientBackground } from "@/components/ambient-background"
import { ArrowLeft, FlaskConical, ExternalLink } from "lucide-react"
import Link from "next/link"

import { ResearchList } from "@/components/research-list"

export default async function ResearchPage() {
  const items = await prisma.researchGrant.findMany({ orderBy: { id: "desc" } })

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

            <ResearchList items={items} />
          </main>
        </div>

        <SiteFooter />
      </div>
    </div>
  )
}
