import { prisma } from "@/lib/prisma"
import { updateAward } from "../../actions"
import { KeyValueEditor } from "@/components/admin/key-value-editor"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Save } from "lucide-react"

export default async function EditAward({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const award = await prisma.award.findUnique({
    where: { id: Number(id) }
  })

  if (!award) notFound()

  const updateAwardWithId = updateAward.bind(null, award.id)

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <div className="mb-8 flex items-center gap-4">
        <Link href="/admin/awards" className="p-2 border border-border rounded-md hover:bg-secondary/40 text-muted-foreground transition-colors">
          <ArrowLeft size={16} />
        </Link>
        <div>
          <h1 className="font-serif text-3xl text-primary">Edit Award</h1>
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mt-1">
            {award.date}
          </p>
        </div>
      </div>

      <div className="bg-card border border-border p-6 rounded-lg">
        <form action={updateAwardWithId} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <label className="block text-xs font-mono text-muted-foreground mb-1">Award / Honour Title</label>
              <input name="title" defaultValue={award.title} required className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Date / Year (e.g. 2026)</label>
              <input name="date" defaultValue={award.date} required className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-mono text-muted-foreground mb-1">Description / Detail</label>
            <textarea name="detail" defaultValue={award.detail} required rows={3} className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
          </div>
          <div className="pt-2">
            <KeyValueEditor 
              name="links" 
              initialValue={award.links || "[]"}
              keyPlaceholder="Label (e.g. Certificate, Press Release)" 
              valuePlaceholder="URL" 
            />
          </div>
          <div className="pt-4 flex justify-end gap-3 border-t border-border mt-6">
            <Link href="/admin/awards" className="px-6 py-2 border border-border text-foreground font-mono text-sm tracking-widest hover:bg-secondary/40 rounded-sm">
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
