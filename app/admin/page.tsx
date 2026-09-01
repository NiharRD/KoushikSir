import { prisma } from "@/lib/prisma"
import Link from "next/link"
import { FileText, FlaskConical, Users, Trophy, Briefcase, ArrowRight, Settings } from "lucide-react"

export default async function AdminDashboard() {
  const [pubCount, grantCount, studentCount, awardCount, consultancyCount] = await Promise.all([
    prisma.publication.count(),
    prisma.researchGrant.count(),
    prisma.student.count(),
    prisma.award.count(),
    prisma.consultancyProject.count(),
  ])

  const sections = [
    {
      title: "Site Settings",
      desc: "Manage hero stats, profile photo, and social/academic profile links.",
      href: "/admin/settings",
      count: "Global",
      icon: Settings,
    },
    {
      title: "Publications",
      desc: "Manage journal papers, conference articles, and Google Scholar / ResearchGate / DOI links.",
      href: "/admin/publications",
      count: pubCount,
      icon: FileText,
    },
    {
      title: "Research & Grants",
      desc: "Add and update sponsored research grants, funding agencies, project values, and roles.",
      href: "/admin/research",
      count: grantCount,
      icon: FlaskConical,
    },
    {
      title: "Scholars & Students",
      desc: "Manage Ph.D. scholars, thesis titles, graduation years, and scholar profile links.",
      href: "/admin/students",
      count: studentCount,
      icon: Users,
    },
    {
      title: "Awards & Honours",
      desc: "Track awards, DAAD fellowships, conference chairs, and key academic recognitions.",
      href: "/admin/awards",
      count: awardCount,
      icon: Trophy,
    },
    {
      title: "Consultancy Projects",
      desc: "Record structural vetting, proof checking, quality assurance, and government consultancies.",
      href: "/admin/consultancy",
      count: consultancyCount,
      icon: Briefcase,
    },
  ]

  return (
    <div className="p-10 max-w-6xl">
      <div className="mb-10 pb-4 border-b border-border">
        <h1 className="font-serif text-3xl text-primary font-medium">CMS Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Welcome to Dr. Koushik Roy's Portfolio Content Management System. Select a section to add or modify items.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((sec) => {
          const Icon = sec.icon
          return (
            <Link
              key={sec.href}
              href={sec.href}
              className="p-6 border border-border bg-card/60 hover:bg-secondary/40 hover:border-primary/50 transition-all rounded-lg flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="p-2.5 rounded-md bg-primary/10 text-primary border border-primary/20">
                    <Icon size={20} />
                  </div>
                  <span className="font-mono text-xs font-semibold px-2.5 py-1 bg-secondary text-primary rounded-full">
                    {typeof sec.count === 'string' ? sec.count : `${sec.count} Items`}
                  </span>
                </div>
                <h2 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors font-medium mb-2">
                  {sec.title}
                </h2>
                <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                  {sec.desc}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-orange uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                <span>Manage {sec.title}</span>
                <ArrowRight size={14} />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
