import { prisma } from "@/lib/prisma"
import { updateStudent } from "../../actions"
import { KeyValueEditor } from "@/components/admin/key-value-editor"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Save } from "lucide-react"

export default async function EditStudent({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const student = await prisma.student.findUnique({
    where: { id: Number(id) }
  })

  if (!student) notFound()

  const updateStudentWithId = updateStudent.bind(null, student.id)

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <div className="mb-8 flex items-center gap-4">
        <Link href="/admin/students" className="p-2 border border-border rounded-md hover:bg-secondary/40 text-muted-foreground transition-colors">
          <ArrowLeft size={16} />
        </Link>
        <div>
          <h1 className="font-serif text-3xl text-primary">Edit Scholar</h1>
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mt-1">
            {student.name}
          </p>
        </div>
      </div>

      <div className="bg-card border border-border p-6 rounded-lg">
        <form action={updateStudentWithId} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Scholar Name</label>
              <input name="name" defaultValue={student.name} required className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Degree</label>
              <input name="degree" defaultValue={student.degree} required className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Graduation Year (optional)</label>
              <input name="year" defaultValue={student.year || ""} className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Status</label>
              <select name="status" defaultValue={student.status} className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm">
                <option value="Graduated">Graduated</option>
                <option value="Ongoing">Ongoing</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-xs font-mono text-muted-foreground mb-1">Thesis Title / Research Topic</label>
            <textarea name="thesis" defaultValue={student.thesis} required rows={2} className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Area of Research (optional)</label>
              <input name="areaOfResearch" defaultValue={student.areaOfResearch || ""} className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Google Scholar URL</label>
              <input name="googleScholarUrl" defaultValue={student.googleScholarUrl || ""} type="url" className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
          </div>
          <div className="pt-2">
            <KeyValueEditor 
              name="links" 
              initialValue={student.links || "[]"}
              keyPlaceholder="Label (e.g. LinkedIn, Instagram)" 
              valuePlaceholder="URL" 
            />
          </div>
          <div className="pt-4 flex justify-end gap-3 border-t border-border mt-6">
            <Link href="/admin/students" className="px-6 py-2 border border-border text-foreground font-mono text-sm tracking-widest hover:bg-secondary/40 rounded-sm">
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
