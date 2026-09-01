import { prisma } from "@/lib/prisma"
import { updateGrant } from "../../actions"
import { KeyValueEditor } from "@/components/admin/key-value-editor"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Save } from "lucide-react"

export default async function EditResearchGrant({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const grant = await prisma.researchGrant.findUnique({
    where: { id: Number(id) }
  })

  if (!grant) notFound()

  const updateGrantWithId = updateGrant.bind(null, grant.id)

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <div className="mb-8 flex items-center gap-4">
        <Link href="/admin/research" className="p-2 border border-border rounded-md hover:bg-secondary/40 text-muted-foreground transition-colors">
          <ArrowLeft size={16} />
        </Link>
        <div>
          <h1 className="font-serif text-3xl text-primary">Edit Grant</h1>
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mt-1">
            {grant.agency}
          </p>
        </div>
      </div>

      <div className="bg-card border border-border p-6 rounded-lg">
        <form action={updateGrantWithId} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-muted-foreground mb-1">Project Title</label>
            <input name="title" defaultValue={grant.title} required className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Funding Agency</label>
              <input name="agency" defaultValue={grant.agency} required className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Period (e.g. 2024 - 2026)</label>
              <input name="period" defaultValue={grant.period} required className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Grant Amount (e.g. ₹ 24.68 Lakh)</label>
              <input name="grant" defaultValue={grant.grant} required className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Investigator Role (e.g. PI / Co-PI)</label>
              <input name="role" defaultValue={grant.role} required className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">ResearchGate Link</label>
              <input name="researchGateUrl" defaultValue={grant.researchGateUrl || ""} type="url" className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Google Scholar Link</label>
              <input name="googleScholarUrl" defaultValue={grant.googleScholarUrl || ""} type="url" className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
          </div>
          <div className="pt-2">
            <KeyValueEditor 
              name="links" 
              initialValue={grant.links || "[]"}
              keyPlaceholder="Label (e.g. DST Portal, Report)" 
              valuePlaceholder="URL" 
            />
          </div>
          <div className="pt-4 flex justify-end gap-3 border-t border-border mt-6">
            <Link href="/admin/research" className="px-6 py-2 border border-border text-foreground font-mono text-sm tracking-widest hover:bg-secondary/40 rounded-sm">
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
