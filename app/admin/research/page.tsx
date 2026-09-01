import { prisma } from "@/lib/prisma"
import { createGrant, deleteGrant } from "./actions"
import { KeyValueEditor } from "@/components/admin/key-value-editor"
import Link from "next/link"
import { FlaskConical, Edit2 } from "lucide-react"

export default async function AdminResearch() {
  const grants = await prisma.researchGrant.findMany({ orderBy: { id: 'desc' } })

  return (
    <div className="p-10 max-w-5xl mx-auto">
      <h1 className="font-serif text-3xl text-primary mb-8">Manage Research & Grants</h1>
      
      <div className="mb-12 bg-card border border-border p-6 rounded-lg">
        <h2 className="font-serif text-xl text-primary mb-4 flex items-center gap-2">
          <FlaskConical size={20} /> Add New Grant
        </h2>
        <form action={createGrant} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-muted-foreground mb-1">Project Title</label>
            <input name="title" required className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Funding Agency</label>
              <input name="agency" required className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Period (e.g. 2024 - 2026)</label>
              <input name="period" required className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Grant Amount (e.g. ₹ 24.68 Lakh)</label>
              <input name="grant" required className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Investigator Role (e.g. PI / Co-PI)</label>
              <input name="role" required className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">ResearchGate Link</label>
              <input name="researchGateUrl" type="url" className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Google Scholar Link</label>
              <input name="googleScholarUrl" type="url" className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
          </div>
          <div className="pt-2">
            <KeyValueEditor name="links" keyPlaceholder="Label (e.g. DST Portal, Report)" valuePlaceholder="URL" />
          </div>
          <div className="pt-2">
            <button type="submit" className="px-6 py-2 bg-primary text-primary-foreground font-mono text-sm tracking-widest hover:opacity-90 rounded-sm">
              Add Grant
            </button>
          </div>
        </form>
      </div>

      <div className="space-y-4">
        {grants.map(grant => {
          const customLinks = JSON.parse(grant.links || "[]")
          return (
            <div key={grant.id} className="bg-card border border-border p-5 rounded-lg flex flex-col md:flex-row gap-4 justify-between group">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest bg-orange/10 text-orange px-2 py-0.5 rounded-sm border border-orange/20">
                    {grant.period}
                  </span>
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest bg-primary/10 text-primary px-2 py-0.5 rounded-sm">
                    {grant.grant}
                  </span>
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest bg-secondary text-muted-foreground px-2 py-0.5 rounded-sm">
                    {grant.role}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-medium leading-tight mb-2">{grant.title}</h3>
                <p className="text-xs text-muted-foreground mb-3">{grant.agency}</p>
                <div className="flex flex-wrap gap-2">
                  {grant.googleScholarUrl && <span className="text-[0.65rem] font-mono border border-border px-2 py-1 rounded-sm bg-background">Scholar</span>}
                  {grant.researchGateUrl && <span className="text-[0.65rem] font-mono border border-border px-2 py-1 rounded-sm bg-background">ResearchGate</span>}
                  {customLinks.map((l: any, i: number) => (
                    <span key={i} className="text-[0.65rem] font-mono border border-orange/20 text-orange px-2 py-1 rounded-sm bg-orange/5">{l.key}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-3 shrink-0">
                <Link href={`/admin/research/${grant.id}/edit`} className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-colors" title="Edit">
                  <Edit2 size={16} />
                </Link>
                <form action={async () => {
                  "use server"
                  await deleteGrant(grant.id)
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
