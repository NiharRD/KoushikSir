import { prisma } from "@/lib/prisma"
import { updateConsultancy } from "../../actions"
import { KeyValueEditor } from "@/components/admin/key-value-editor"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Save } from "lucide-react"

export default async function EditConsultancy({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = await prisma.consultancyProject.findUnique({
    where: { id: Number(id) }
  })

  if (!project) notFound()

  const updateConsultancyWithId = updateConsultancy.bind(null, project.id)

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <div className="mb-8 flex items-center gap-4">
        <Link href="/admin/consultancy" className="p-2 border border-border rounded-md hover:bg-secondary/40 text-muted-foreground transition-colors">
          <ArrowLeft size={16} />
        </Link>
        <div>
          <h1 className="font-serif text-3xl text-primary">Edit Consultancy Project</h1>
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mt-1">
            {project.client}
          </p>
        </div>
      </div>

      <div className="bg-card border border-border p-6 rounded-lg">
        <form action={updateConsultancyWithId} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-muted-foreground mb-1">Project Title</label>
            <input name="title" defaultValue={project.title} required className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Client Organization</label>
              <input name="client" defaultValue={project.client} required className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Expert Role (e.g. Principal Investigator)</label>
              <input name="role" defaultValue={project.role || ""} className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-mono text-muted-foreground mb-1">Description (optional)</label>
            <textarea name="description" defaultValue={project.description || ""} rows={3} className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Start Date</label>
              <input name="startDate" defaultValue={project.startDate || ""} placeholder="e.g. Jan 2023" className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">End Date</label>
              <input name="endDate" defaultValue={project.endDate || ""} placeholder="Leave blank if ongoing" className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Status</label>
              <select name="status" defaultValue={project.status || "Ongoing"} className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm">
                <option value="Ongoing">Ongoing</option>
                <option value="Completed">Completed</option>
                <option value="Under Review">Under Review</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Project Value</label>
              <input name="value" defaultValue={project.value || ""} placeholder="e.g. ₹ 37.32 Lakh" className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-mono text-muted-foreground mb-1">Progress Note (optional, e.g. "Phase 2", "75% complete")</label>
            <input name="progress" defaultValue={project.progress || ""} className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
          </div>
          <div className="pt-2">
            <KeyValueEditor 
              name="links" 
              initialValue={project.links || "[]"}
              keyPlaceholder="Label (e.g. Report, Certificate)" 
              valuePlaceholder="URL" 
            />
          </div>
          <div className="pt-4 flex justify-end gap-3 border-t border-border mt-6">
            <Link href="/admin/consultancy" className="px-6 py-2 border border-border text-foreground font-mono text-sm tracking-widest hover:bg-secondary/40 rounded-sm">
              Cancel
            </Link>
            <button type="submit" className="flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground font-mono text-sm tracking-widest hover:opacity-90 rounded-sm">
              <Save size={16} /> Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
