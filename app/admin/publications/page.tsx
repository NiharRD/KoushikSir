import { prisma } from "@/lib/prisma"
import { createPublication, deletePublication } from "./actions"
import { KeyValueEditor } from "@/components/admin/key-value-editor"
import Link from "next/link"
import { FileText, Edit2 } from "lucide-react"

export default async function AdminPublications() {
  const publications = await prisma.publication.findMany({ orderBy: { id: 'desc' } })

  return (
    <div className="p-10 max-w-5xl mx-auto">
      <h1 className="font-serif text-3xl text-primary mb-8">Manage Publications</h1>
      
      <div className="mb-12 bg-card border border-border p-6 rounded-lg">
        <h2 className="font-serif text-xl text-primary mb-4 flex items-center gap-2">
          <FileText size={20} /> Add New Publication
        </h2>
        <form action={createPublication} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Reference (e.g. [01])</label>
              <input name="ref" required className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Date (e.g. May 2026)</label>
              <input name="date" required className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-mono text-muted-foreground mb-1">Title</label>
            <input name="title" required className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
          </div>
          <div>
            <label className="block text-xs font-mono text-muted-foreground mb-1">Full Citation</label>
            <textarea name="cite" required rows={3} className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Type</label>
              <select name="type" className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm">
                <option value="journal">Journal</option>
                <option value="conference">Conference</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Google Scholar URL</label>
              <input name="googleScholarUrl" type="url" className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">ResearchGate URL</label>
              <input name="researchGateUrl" type="url" className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">DOI URL</label>
              <input name="doiUrl" type="url" className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
          </div>
          <div className="pt-2">
            <KeyValueEditor name="links" keyPlaceholder="Link Label (e.g. PDF, Preprint)" valuePlaceholder="URL" />
          </div>
          <div className="pt-2">
            <button type="submit" className="px-6 py-2 bg-primary text-primary-foreground font-mono text-sm tracking-widest hover:opacity-90 rounded-sm">
              Add Publication
            </button>
          </div>
        </form>
      </div>

      <div className="space-y-4">
        {publications.map(pub => {
          const customLinks = JSON.parse(pub.links || "[]")
          return (
            <div key={pub.id} className="bg-card border border-border p-5 rounded-lg flex flex-col md:flex-row gap-4 justify-between group">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest bg-primary/10 text-primary px-2 py-0.5 rounded-sm">
                    {pub.ref}
                  </span>
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest bg-orange/10 text-orange px-2 py-0.5 rounded-sm border border-orange/20">
                    {pub.date}
                  </span>
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest bg-secondary text-muted-foreground px-2 py-0.5 rounded-sm">
                    {pub.type}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-medium leading-tight mb-2">{pub.title}</h3>
                <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed mb-3">{pub.cite}</p>
                <div className="flex flex-wrap gap-2">
                  {pub.googleScholarUrl && <span className="text-[0.65rem] font-mono border border-border px-2 py-1 rounded-sm bg-background">Scholar</span>}
                  {pub.researchGateUrl && <span className="text-[0.65rem] font-mono border border-border px-2 py-1 rounded-sm bg-background">ResearchGate</span>}
                  {pub.doiUrl && <span className="text-[0.65rem] font-mono border border-border px-2 py-1 rounded-sm bg-background">DOI</span>}
                  {customLinks.map((l: any, i: number) => (
                    <span key={i} className="text-[0.65rem] font-mono border border-orange/20 text-orange px-2 py-1 rounded-sm bg-orange/5">{l.key}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-3 shrink-0">
                <Link href={`/admin/publications/${pub.id}/edit`} className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-colors" title="Edit">
                  <Edit2 size={16} />
                </Link>
                <form action={async () => {
                  "use server"
                  await deletePublication(pub.id)
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
