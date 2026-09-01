import { prisma } from "@/lib/prisma"
import { createStudent, deleteStudent } from "./actions"
import { KeyValueEditor } from "@/components/admin/key-value-editor"
import Link from "next/link"
import { Users, Edit2 } from "lucide-react"

export default async function AdminStudents() {
  const students = await prisma.student.findMany({ orderBy: { id: 'desc' } })

  return (
    <div className="p-10 max-w-5xl mx-auto">
      <h1 className="font-serif text-3xl text-primary mb-8">Manage Scholars & Students</h1>
      
      <div className="mb-12 bg-card border border-border p-6 rounded-lg">
        <h2 className="font-serif text-xl text-primary mb-4 flex items-center gap-2">
          <Users size={20} /> Add New Scholar
        </h2>
        <form action={createStudent} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Scholar Name</label>
              <input name="name" required className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Degree</label>
              <input name="degree" defaultValue="Ph.D." required className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Graduation Year (optional)</label>
              <input name="year" placeholder="e.g. 2026" className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Status</label>
              <select name="status" defaultValue="Graduated" className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm">
                <option value="Graduated">Graduated</option>
                <option value="Ongoing">Ongoing</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-xs font-mono text-muted-foreground mb-1">Thesis Title / Research Topic</label>
            <textarea name="thesis" required rows={2} className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Area of Research (optional)</label>
              <input name="areaOfResearch" className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Google Scholar URL</label>
              <input name="googleScholarUrl" type="url" className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
          </div>
          <div className="pt-2">
            <KeyValueEditor name="links" keyPlaceholder="Label (e.g. LinkedIn, Instagram)" valuePlaceholder="URL" />
          </div>
          <div className="pt-2">
            <button type="submit" className="px-6 py-2 bg-primary text-primary-foreground font-mono text-sm tracking-widest hover:opacity-90 rounded-sm">
              Add Scholar
            </button>
          </div>
        </form>
      </div>

      <div className="space-y-4">
        {students.map(s => {
          const customLinks = JSON.parse(s.links || "[]")
          return (
            <div key={s.id} className="bg-card border border-border p-5 rounded-lg flex flex-col md:flex-row gap-4 justify-between group">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest bg-primary/10 text-primary px-2 py-0.5 rounded-sm">
                    {s.degree}
                  </span>
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest bg-orange/10 text-orange px-2 py-0.5 rounded-sm border border-orange/20">
                    {s.status === 'Graduated' ? `Graduated ${s.year}` : 'Ongoing'}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-medium leading-tight mb-2">{s.name}</h3>
                <p className="text-sm font-medium mb-1 line-clamp-1">{s.thesis}</p>
                {s.areaOfResearch && <p className="text-xs text-muted-foreground mb-3">Area: {s.areaOfResearch}</p>}
                
                <div className="flex flex-wrap gap-2 mt-2">
                  {s.googleScholarUrl && <span className="text-[0.65rem] font-mono border border-border px-2 py-1 rounded-sm bg-background">Scholar</span>}
                  {customLinks.map((l: any, i: number) => (
                    <span key={i} className="text-[0.65rem] font-mono border border-orange/20 text-orange px-2 py-1 rounded-sm bg-orange/5">{l.key}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-3 shrink-0">
                <Link href={`/admin/students/${s.id}/edit`} className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-colors" title="Edit">
                  <Edit2 size={16} />
                </Link>
                <form action={async () => {
                  "use server"
                  await deleteStudent(s.id)
                }}>
                  <button type="submit" className="text-xs font-mono text-destructive hover:underline p-2">Delete</button>
                </form>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
