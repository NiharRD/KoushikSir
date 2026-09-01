import { prisma } from "@/lib/prisma"
import { updatePublication } from "../../actions"
import { KeyValueEditor } from "@/components/admin/key-value-editor"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Save } from "lucide-react"

export default async function EditPublication({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const pub = await prisma.publication.findUnique({
    where: { id: Number(id) }
  })

  if (!pub) notFound()

  // create a bound action with the id
  const updatePublicationWithId = updatePublication.bind(null, pub.id)

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <div className="mb-8 flex items-center gap-4">
        <Link href="/admin/publications" className="p-2 border border-border rounded-md hover:bg-secondary/40 text-muted-foreground transition-colors">
          <ArrowLeft size={16} />
        </Link>
        <div>
          <h1 className="font-serif text-3xl text-primary">Edit Publication</h1>
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mt-1">
            Ref: {pub.ref}
          </p>
        </div>
      </div>

      <div className="bg-card border border-border p-6 rounded-lg">
        <form action={updatePublicationWithId} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Reference (e.g. [01])</label>
              <input name="ref" defaultValue={pub.ref} required className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Date (e.g. May 2026)</label>
              <input name="date" defaultValue={pub.date} required className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-mono text-muted-foreground mb-1">Title</label>
            <input name="title" defaultValue={pub.title} required className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
          </div>
          <div>
            <label className="block text-xs font-mono text-muted-foreground mb-1">Full Citation</label>
            <textarea name="cite" defaultValue={pub.cite} required rows={4} className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Type</label>
              <select name="type" defaultValue={pub.type} className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm">
                <option value="journal">Journal</option>
                <option value="conference">Conference</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Google Scholar URL</label>
              <input name="googleScholarUrl" defaultValue={pub.googleScholarUrl || ""} type="url" className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">ResearchGate URL</label>
              <input name="researchGateUrl" defaultValue={pub.researchGateUrl || ""} type="url" className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">DOI URL</label>
              <input name="doiUrl" defaultValue={pub.doiUrl || ""} type="url" className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
          </div>
          <div className="pt-2">
            <KeyValueEditor 
              name="links" 
              initialValue={pub.links || "[]"}
              keyPlaceholder="Link Label (e.g. PDF, Preprint)" 
              valuePlaceholder="URL" 
            />
          </div>
          <div className="pt-4 flex justify-end gap-3 border-t border-border mt-6">
            <Link href="/admin/publications" className="px-6 py-2 border border-border text-foreground font-mono text-sm tracking-widest hover:bg-secondary/40 rounded-sm">
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
