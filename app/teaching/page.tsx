import { prisma } from "@/lib/prisma"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { AmbientBackground } from "@/components/ambient-background"
import { ArrowLeft, BookOpen, GraduationCap } from "lucide-react"
import Link from "next/link"

const UG_COURSES = [
  "Engineering Mechanics",
  "Structural Mechanics",
  "Numerical Methods for Civil Engineering",
  "Engineering Drawing",
  "Civil Engineering Design Studio",
  "Infrastructure Planning & Management",
]

const PG_COURSES = [
  "Structural Dynamics",
  "Earthquake Resistant Design of Structures",
  "Finite Element Methods in Engineering",
  "Theory of Plates and Shells",
  "Uncertainty, Risk and Reliability Analyses",
  "Bridge Engineering and Design",
  "Advanced Structural Design",
  "Analytical Methods in Civil Engineering",
]

export default async function TeachingPage() {
  const items = await prisma.journeyItem.findMany({
    where: { type: "academic" },
    orderBy: { sortOrder: "asc" },
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
                  Teaching &amp; Academic Instructorship
                </h1>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-2">
                  Undergraduate &amp; Postgraduate courses taught at IIT Patna
                </p>
              </div>
            </div>

            {/* Courses Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 border border-border bg-background rounded-sm">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                  <GraduationCap className="h-5 w-5 text-orange" />
                  <h2 className="font-serif text-xl text-primary font-medium">
                    Postgraduate Level (M.Tech / Ph.D.)
                  </h2>
                </div>
                <ul className="space-y-2.5">
                  {PG_COURSES.map((course, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="font-mono text-xs text-orange mt-0.5">0{i + 1}.</span>
                      <span className="text-foreground/90">{course}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 border border-border bg-background rounded-sm">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                  <BookOpen className="h-5 w-5 text-orange" />
                  <h2 className="font-serif text-xl text-primary font-medium">
                    Undergraduate Level (B.Tech)
                  </h2>
                </div>
                <ul className="space-y-2.5">
                  {UG_COURSES.map((course, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="font-mono text-xs text-orange mt-0.5">0{i + 1}.</span>
                      <span className="text-foreground/90">{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Academic Background */}
            <div className="mb-10">
              <h2 className="font-serif text-2xl text-primary mb-6">
                Academic Background &amp; Education
              </h2>
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="p-6 border border-border bg-background hover:bg-secondary/25 transition-all rounded-sm"
                  >
                    <span className="font-mono text-xs uppercase tracking-widest bg-orange/10 text-orange px-2.5 py-0.5 border border-orange/20">
                      {item.period}
                    </span>
                    <h3 className="font-serif text-xl font-medium text-foreground mt-2 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-primary font-mono mb-2">{item.institution}</p>
                    {item.thesis && (
                      <p className="text-sm text-muted-foreground leading-relaxed mt-2 bg-secondary/20 p-3 border border-border/50">
                        <strong>Thesis:</strong> {item.thesis}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>

        <SiteFooter />
      </div>
    </div>
  )
}
