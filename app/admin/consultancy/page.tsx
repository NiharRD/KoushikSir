import { prisma } from "@/lib/prisma"
import { createConsultancy, deleteConsultancy } from "./actions"
import { KeyValueEditor } from "@/components/admin/key-value-editor"
import Link from "next/link"
import { Briefcase, Edit2 } from "lucide-react"

export default async function AdminConsultancy() {
  const projects = await prisma.consultancyProject.findMany({ orderBy: { id: 'desc' } })

  return (
    <div className="p-10 max-w-5xl mx-auto">
      <h1 className="font-serif text-3xl text-primary mb-8">Manage Consultancy & Vetting</h1>
      
      <div className="mb-12 bg-card border border-border p-6 rounded-lg">
        <h2 className="font-serif text-xl text-primary mb-4 flex items-center gap-2">
          <Briefcase size={20} /> Add New Consultancy Project
        </h2>
        <form action={createConsultancy} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-muted-foreground mb-1">Project Title</label>
            <input name="title" required className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Client Organization</label>
              <input name="client" required className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Expert Role (e.g. Principal Investigator)</label>
              <input name="role" className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-mono text-muted-foreground mb-1">Description (optional)</label>
            <textarea name="description" rows={2} className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Start Date</label>
              <input name="startDate" placeholder="e.g. Jan 2023" className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">End Date</label>
              <input name="endDate" placeholder="Leave blank if ongoing" className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Status</label>
              <select name="status" defaultValue="Ongoing" className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm">
                <option value="Ongoing">Ongoing</option>
                <option value="Completed">Completed</option>
                <option value="Under Review">Under Review</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Project Value</label>
              <input name="value" placeholder="e.g. ₹ 37.32 Lakh" className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-mono text-muted-foreground mb-1">Progress Note (optional, e.g. "Phase 2", "75% complete")</label>
            <input name="progress" className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
          </div>
          <div className="pt-2">
            <KeyValueEditor name="links" keyPlaceholder="Label (e.g. Report, Certificate)" valuePlaceholder="URL" />
          </div>
          <div className="pt-2">
            <button type="submit" className="px-6 py-2 bg-primary text-primary-foreground font-mono text-sm tracking-widest hover:opacity-90 rounded-sm">
              Add Project
            </button>
          </div>
        </form>
      </div>

      <div className="space-y-4">
        {projects.map(p => {
          const customLinks = JSON.parse(p.links || "[]")
          return (
            <div key={p.id} className="bg-card border border-border p-5 rounded-lg flex flex-col md:flex-row gap-4 justify-between group">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest bg-orange/10 text-orange px-2 py-0.5 rounded-sm border border-orange/20">
                    {p.period}
                  </span>
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest bg-secondary text-muted-foreground px-2 py-0.5 rounded-sm">
                    {p.status}
                  </span>
                  {p.value && (
                    <span className="font-mono text-[0.65rem] uppercase tracking-widest bg-primary/10 text-primary px-2 py-0.5 rounded-sm">
                      {p.value}
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-lg font-medium leading-tight mb-1">{p.title}</h3>
                <p className="text-sm font-medium mb-1">{p.client}</p>
                <div className="text-xs text-muted-foreground space-y-1 mb-3">
                  {p.role && <p>Role: {p.role}</p>}
                  {p.progress && <p>Progress: <span className="text-foreground">{p.progress}</span></p>}
                </div>
                <div className="flex flex-wrap gap-2">
                  {customLinks.map((l: any, i: number) => (
                    <span key={i} className="text-[0.65rem] font-mono border border-orange/20 text-orange px-2 py-1 rounded-sm bg-orange/5">{l.key}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-3 shrink-0">
                <Link href={`/admin/consultancy/${p.id}/edit`} className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-colors" title="Edit">
                  <Edit2 size={16} />
                </Link>
                <form action={async () => {
                  "use server"
                  await deleteConsultancy(p.id)
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
