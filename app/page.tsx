import Image from "next/image"
import Link from "next/link"
import {
  GraduationCap,
  BookOpen,
  ArrowRight,
  Sparkles,
  Award as AwardIcon,
  FlaskConical,
  Users,
  Briefcase,
  Layers,
  ChevronRight,
  ExternalLink
} from "lucide-react"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedCounter } from "@/components/animated-counter"
import { AmbientBackground } from "@/components/ambient-background"
import { prisma } from "@/lib/prisma"

function LinkedinIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const DEGREES = [
  { degree: "Ph.D.", place: "IIT Kanpur" },
  { degree: "M.Tech.", place: "IIT Roorkee / KIT Germany" },
  { degree: "B.E.", place: "BESU Shibpur" },
]

const INTERESTS = [
  "Structural Health Monitoring",
  "Dynamic Damage Identification",
  "Vibration Control & Dampers",
  "Earthquake Engineering",
  "Soil-Structure Interaction",
  "Bridge Weigh-in-Motion (B-WIM)",
]

export default async function Home() {
  // Parallel fetch for counts and preview items
  const [
    pubCount,
    grantCount,
    studentCount,
    awardCount,
    consultancyCount,
    recentPubs,
    recentGrants,
    recentStudents,
    recentAwards,
    recentConsultancy,
  ] = await Promise.all([
    prisma.publication.count(),
    prisma.researchGrant.count(),
    prisma.student.count(),
    prisma.award.count(),
    prisma.consultancyProject.count(),
    prisma.publication.findMany({ take: 5, orderBy: { id: "asc" } }),
    prisma.researchGrant.findMany({ take: 4, orderBy: { id: "asc" } }),
    prisma.student.findMany({ take: 4, orderBy: { id: "asc" } }),
    prisma.award.findMany({ take: 4, orderBy: { id: "asc" } }),
    prisma.consultancyProject.findMany({ take: 4, orderBy: { id: "asc" } }),
  ])

  return (
    <div className="relative isolate min-h-screen font-sans text-foreground">
      <AmbientBackground />

      <div className="relative z-10 w-full bg-card/85 shadow-[0_0_100px_oklch(0.36_0.13_252/0.10),0_24px_80px_oklch(0.22_0.04_252/0.08)] backdrop-blur-md">
        <SiteNav />

        {/* Masthead / Hero */}
        <header id="hero" className="scroll-mt-14 border-b border-border">
          <div className="flex flex-col justify-between gap-2 border-b border-primary/15 bg-primary px-6 py-3 font-mono text-[0.7rem] uppercase tracking-widest text-primary-foreground sm:flex-row sm:px-10">
            <span>Dept. of Civil &amp; Environmental Engineering</span>
            <span>IIT Patna / Bihta, Bihar — 801106</span>
          </div>

          <div className="relative grid grid-cols-1 overflow-hidden lg:grid-cols-12">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,transparent_46%,oklch(0.62_0.14_58/0.08)_46%,transparent_62%)]" />
            
            {/* Hero Left Content (8 cols) */}
            <div className="relative border-border bg-gradient-to-br from-secondary/40 via-card/40 to-orange/10 lg:col-span-8 lg:border-r">
              <div className="pointer-events-none absolute left-10 top-10 h-52 w-52 rounded-full bg-primary/10 blur-3xl" />
              <div className="pointer-events-none absolute bottom-12 right-10 h-40 w-40 rounded-full bg-orange/12 blur-3xl" />

              <div className="relative flex h-full flex-col justify-between gap-8 px-6 py-10 sm:px-10 sm:py-14">
                <div>
                  <a
                    href="https://www.iitp.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 mb-6 group/iitw inline-flex hover:opacity-95 transition-opacity"
                  >
                    <div className="relative w-12 h-12 overflow-hidden rounded-full border border-border bg-white p-1 shadow-sm shrink-0 transition-transform duration-300 group-hover/iitw:scale-105">
                      <Image
                        src="/images/education/iit_patna.png"
                        alt="IIT Patna Logo"
                        fill
                        className="object-contain p-0.5"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <p className="font-mono text-[0.75rem] uppercase tracking-widest text-primary font-semibold leading-tight group-hover/iitw:text-orange transition-colors">
                        Indian Institute of Technology Patna
                      </p>
                      <p className="text-[0.65rem] font-mono text-muted-foreground uppercase tracking-widest">
                        Bihta, Bihar, India
                      </p>
                    </div>
                  </a>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {["Structural Health Monitoring", "Seismic Resilience", "Dynamic Damage Detection"].map((tag) => (
                      <span
                        key={tag}
                        className="border border-orange/25 bg-orange/10 px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-widest text-orange shadow-[0_0_20px_oklch(0.62_0.14_58/0.08)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="font-mono text-[0.7rem] uppercase tracking-widest text-primary">
                    Assistant Professor of Civil Engineering
                  </p>
                  <p className="mt-4 font-serif text-3xl font-medium tracking-tight text-primary sm:text-5xl">
                    Dr. Koushik Roy
                  </p>
                  <p className="mt-2 font-mono text-[0.65rem] sm:text-[0.7rem] uppercase tracking-widest text-muted-foreground/80">
                    {DEGREES.map((d) => `${d.degree} (${d.place})`).join(" • ")}
                  </p>
                  
                  <h1 className="mt-4 max-w-3xl text-balance font-serif text-3xl sm:text-5xl font-medium leading-[1.06] tracking-tight">
                    Structural Dynamics &amp;{" "}
                    <span className="bg-gradient-to-r from-orange via-primary to-orange bg-clip-text text-transparent">
                      SHM Lab
                    </span>
                  </h1>
                  
                  <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-sm sm:text-base text-muted-foreground">
                    Leading research in vibration-based structural health monitoring, dynamic damage detection using output-only modal identification, seismic control of buildings and bridges, and machine-learning-driven damage prognosis.
                  </p>

                  {/* Profile Links */}
                  <div className="mt-6 flex flex-wrap gap-2.5">
                    <a
                      href="https://scholar.google.com/citations?user=j3-TJncAAAAJ&hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-border bg-secondary/30 px-3.5 py-1.5 font-mono text-[0.7rem] uppercase tracking-widest text-primary transition-all duration-300 hover:border-orange hover:bg-secondary/60 hover:text-orange"
                    >
                      <GraduationCap className="h-3.5 w-3.5" />
                      Google Scholar
                    </a>
                    <a
                      href="https://www.researchgate.net/profile/Koushik-Roy-10"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-border bg-secondary/30 px-3.5 py-1.5 font-mono text-[0.7rem] uppercase tracking-widest text-primary transition-all duration-300 hover:border-orange hover:bg-secondary/60 hover:text-orange"
                    >
                      <BookOpen className="h-3.5 w-3.5" />
                      ResearchGate
                    </a>
                    <a
                      href="https://www.linkedin.com/in/dr-koushik-roy-2b87768a/?originalSubdomain=in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-border bg-secondary/30 px-3.5 py-1.5 font-mono text-[0.7rem] uppercase tracking-widest text-primary transition-all duration-300 hover:border-orange hover:bg-secondary/60 hover:text-orange"
                    >
                      <LinkedinIcon className="h-3.5 w-3.5" />
                      LinkedIn
                    </a>
                  </div>
                </div>

                {/* Animated Stats Bar */}
                <dl className="grid grid-cols-2 sm:grid-cols-4 border-t border-border pt-4">
                  {[
                    ["12+", "Years Experience"],
                    [pubCount > 0 ? `${pubCount}+` : "27+", "Publications"],
                    ["₹ 2.0+ Cr", "Research Grants"],
                    [studentCount > 0 ? `${studentCount}` : "5+", "Ph.D. Scholars"],
                  ].map(([n, l], i) => (
                    <div
                      key={l}
                      className={`py-3 px-3 ${i % 2 === 0 ? "border-r border-border sm:border-r" : i < 3 ? "sm:border-r sm:border-border" : ""}`}
                    >
                      <dt className="font-serif text-2xl sm:text-3xl font-medium tabular-nums text-primary">
                        {n.includes("Cr") ? n : <AnimatedCounter value={n.replace(/[^0-9]/g, "")} />}
                        {n.includes("+") && !n.includes("Cr") ? "+" : ""}
                      </dt>
                      <dd className="mt-1 font-mono text-[0.65rem] uppercase tracking-widest text-muted-foreground">
                        {l}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* Hero Right Portrait (4 cols) */}
            <div className="bg-gradient-to-b from-secondary/20 to-transparent p-6 sm:p-10 lg:col-span-4 lg:flex lg:flex-col lg:justify-center lg:items-center">
              <div className="relative aspect-[3/4] w-full max-w-sm mx-auto overflow-hidden border border-primary/20 shadow-[0_12px_40px_oklch(0.36_0.13_252/0.15)] rounded-sm">
                <Image
                  src="/professor-portrait.png"
                  alt="Portrait of Dr. Koushik Roy"
                  fill
                  priority
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover saturate-[0.9] contrast-[1.05]"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="font-serif text-base text-primary font-medium">Dr. Koushik Roy, Ph.D.</p>
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  IIT Patna • Bihta Campus
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Research Focus Ribbon */}
        <section className="border-b border-border bg-secondary/30 px-6 py-6 sm:px-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary font-semibold">
              <FlaskConical className="h-4 w-4 text-orange" />
              Core Research Focus Areas:
            </div>
            <div className="flex flex-wrap gap-2">
              {INTERESTS.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 bg-background/80 border border-border text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 1: PUBLICATIONS PREVIEW */}
        {/* ========================================================================= */}
        <section id="publications-preview" className="border-b border-border py-14 px-6 sm:px-10 scroll-mt-14">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-border/60">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange/10 font-mono text-xs font-semibold text-orange border border-orange/20">
                  01
                </span>
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl text-primary font-medium">
                    Featured Publications
                  </h2>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Selected journal papers &amp; research articles ({pubCount} Total)
                  </p>
                </div>
              </div>
              <Link
                href="/publications"
                className="inline-flex items-center gap-2 px-4 py-2 border border-border bg-secondary/30 font-mono text-xs uppercase tracking-widest text-primary hover:border-orange hover:bg-secondary/60 hover:text-orange transition-all self-start sm:self-auto"
              >
                View All Publications <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {recentPubs.map((pub) => (
                <div
                  key={pub.id}
                  className="group relative p-5 border border-border bg-background hover:bg-secondary/25 hover:border-primary/40 transition-all rounded-sm"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="font-mono text-[0.68rem] uppercase tracking-widest bg-orange/10 text-orange px-2 py-0.5 border border-orange/20">
                          {pub.date}
                        </span>
                        <span className="font-mono text-[0.68rem] bg-primary/10 text-primary px-2 py-0.5">
                          {pub.ref}
                        </span>
                      </div>
                      <h3 className="font-serif text-lg font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
                        {pub.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {pub.cite}
                      </p>
                    </div>

                    <div className="flex md:flex-col gap-2 shrink-0 self-start">
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
                          <span>Scholar</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/publications"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary hover:text-orange transition-colors"
              >
                Explore all {pubCount} peer-reviewed publications &amp; conference proceedings <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: RESEARCH & GRANTS PREVIEW */}
        {/* ========================================================================= */}
        <section id="research-preview" className="border-b border-border py-14 px-6 sm:px-10 bg-card/50 scroll-mt-14">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-border/60">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange/10 font-mono text-xs font-semibold text-orange border border-orange/20">
                  02
                </span>
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl text-primary font-medium">
                    Sponsored Research &amp; Grants
                  </h2>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Funded projects by DST, Ministry of Rural Development, HSCL &amp; Govt. ({grantCount} Projects)
                  </p>
                </div>
              </div>
              <Link
                href="/research"
                className="inline-flex items-center gap-2 px-4 py-2 border border-border bg-secondary/30 font-mono text-xs uppercase tracking-widest text-primary hover:border-orange hover:bg-secondary/60 hover:text-orange transition-all self-start sm:self-auto"
              >
                View All Grants <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {recentGrants.map((grant) => (
                <div
                  key={grant.id}
                  className="p-5 border border-border bg-background hover:bg-secondary/25 transition-all rounded-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-center mb-2.5">
                      <span className="font-mono text-[0.68rem] uppercase tracking-wider text-orange font-medium">
                        {grant.period}
                      </span>
                      <span className="font-mono text-xs font-semibold px-2 py-0.5 bg-primary/10 text-primary">
                        {grant.grant}
                      </span>
                    </div>
                    <h3 className="font-serif text-base sm:text-lg font-medium text-foreground mb-3 leading-snug">
                      {grant.title}
                    </h3>
                  </div>

                  <div className="pt-3 border-t border-border/50 text-xs font-mono text-muted-foreground space-y-1">
                    <p><strong className="text-foreground">Agency:</strong> {grant.agency}</p>
                    <p><strong className="text-foreground">Role:</strong> {grant.role}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/research"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary hover:text-orange transition-colors"
              >
                View all ongoing &amp; completed research grants <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: STUDENTS & RESEARCH SCHOLARS PREVIEW */}
        {/* ========================================================================= */}
        <section id="students-preview" className="border-b border-border py-14 px-6 sm:px-10 scroll-mt-14">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-border/60">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange/10 font-mono text-xs font-semibold text-orange border border-orange/20">
                  03
                </span>
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl text-primary font-medium">
                    Ph.D. Scholars &amp; Supervision
                  </h2>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Doctoral and graduate researchers guided in the SHM Lab
                  </p>
                </div>
              </div>
              <Link
                href="/students"
                className="inline-flex items-center gap-2 px-4 py-2 border border-border bg-secondary/30 font-mono text-xs uppercase tracking-widest text-primary hover:border-orange hover:bg-secondary/60 hover:text-orange transition-all self-start sm:self-auto"
              >
                View All Scholars <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {recentStudents.map((student) => (
                <div
                  key={student.id}
                  className="p-5 border border-border bg-background hover:bg-secondary/25 transition-all rounded-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-mono text-[0.65rem] uppercase tracking-wider text-orange font-medium">
                        {student.year || "Ph.D."}
                      </span>
                      <span className="font-mono text-[0.65rem] px-2 py-0.5 bg-primary/10 text-primary">
                        {student.status}
                      </span>
                    </div>
                    <h3 className="font-serif text-base font-medium text-foreground mb-2">
                      {student.name}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-3">
                      {student.thesis}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border/50 flex justify-between items-center text-[0.7rem] font-mono text-muted-foreground">
                    <span>{student.degree} Degree</span>
                    <span className="text-orange">IIT Patna</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/students"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary hover:text-orange transition-colors"
              >
                View all doctoral researchers &amp; theses titles <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: AWARDS & HONOURS PREVIEW */}
        {/* ========================================================================= */}
        <section id="awards-preview" className="border-b border-border py-14 px-6 sm:px-10 bg-card/50 scroll-mt-14">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-border/60">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange/10 font-mono text-xs font-semibold text-orange border border-orange/20">
                  04
                </span>
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl text-primary font-medium">
                    Awards, Fellowships &amp; Honours
                  </h2>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    International recognitions, DAAD, UKIERI, and institutional chairs
                  </p>
                </div>
              </div>
              <Link
                href="/awards"
                className="inline-flex items-center gap-2 px-4 py-2 border border-border bg-secondary/30 font-mono text-xs uppercase tracking-widest text-primary hover:border-orange hover:bg-secondary/60 hover:text-orange transition-all self-start sm:self-auto"
              >
                View All Awards <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recentAwards.map((award) => (
                <div
                  key={award.id}
                  className="p-5 border border-border bg-background hover:bg-secondary/25 transition-all rounded-sm flex gap-4 items-start"
                >
                  <div className="h-9 w-9 rounded-full bg-orange/10 border border-orange/20 flex items-center justify-center shrink-0 text-orange mt-0.5">
                    <AwardIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-mono text-[0.68rem] uppercase tracking-wider text-orange mb-1">
                      {award.date}
                    </div>
                    <h3 className="font-serif text-base sm:text-lg font-medium text-foreground mb-1.5">
                      {award.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {award.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/awards"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary hover:text-orange transition-colors"
              >
                View full chronological awards and honours timeline <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: CONSULTANCY & INDUSTRIAL PROJECTS PREVIEW */}
        {/* ========================================================================= */}
        <section id="consultancy-preview" className="border-b border-border py-14 px-6 sm:px-10 scroll-mt-14">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-border/60">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange/10 font-mono text-xs font-semibold text-orange border border-orange/20">
                  05
                </span>
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl text-primary font-medium">
                    Industrial Consultancy &amp; Design Vetting
                  </h2>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Proof checking, structural safety audits, and smart city infrastructure ({consultancyCount} Projects)
                  </p>
                </div>
              </div>
              <Link
                href="/consultancy"
                className="inline-flex items-center gap-2 px-4 py-2 border border-border bg-secondary/30 font-mono text-xs uppercase tracking-widest text-primary hover:border-orange hover:bg-secondary/60 hover:text-orange transition-all self-start sm:self-auto"
              >
                View All Consultancy <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recentConsultancy.map((proj) => (
                <div
                  key={proj.id}
                  className="p-5 border border-border bg-background hover:bg-secondary/25 transition-all rounded-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-mono text-[0.68rem] uppercase tracking-wider text-orange font-medium">
                        {proj.period}
                      </span>
                      {proj.value && (
                        <span className="font-mono text-xs font-semibold px-2 py-0.5 bg-primary/10 text-primary">
                          {proj.value}
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif text-base sm:text-lg font-medium text-foreground mb-2 leading-snug">
                      {proj.title}
                    </h3>
                  </div>

                  <div className="pt-3 border-t border-border/50 text-xs font-mono text-muted-foreground space-y-1">
                    <p><strong className="text-foreground">Client:</strong> {proj.client}</p>
                    {proj.role && <p><strong className="text-foreground">Role:</strong> {proj.role}</p>}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/consultancy"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary hover:text-orange transition-colors"
              >
                View all 27+ government &amp; private sector structural consultancy projects <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </section>

        {/* Site Footer with full contact details */}
        <SiteFooter />
      </div>
    </div>
  )
}
