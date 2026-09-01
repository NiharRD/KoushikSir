import { prisma } from "@/lib/prisma"
import { createAward, deleteAward } from "./actions"
import { KeyValueEditor } from "@/components/admin/key-value-editor"
import Link from "next/link"
import { Trophy, Edit2 } from "lucide-react"

export default async function AdminAwards() {
  const awards = await prisma.award.findMany({ orderBy: { id: 'desc' } })

  return (
    <div className="p-10 max-w-5xl mx-auto">
      <h1 className="font-serif text-3xl text-primary mb-8">Manage Awards & Honours</h1>
      
      <div className="mb-12 bg-card border border-border p-6 rounded-lg">
        <h2 className="font-serif text-xl text-primary mb-4 flex items-center gap-2">
          <Trophy size={20} /> Add New Award / Honour
        </h2>
        <form action={createAward} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <label className="block text-xs font-mono text-muted-foreground mb-1">Award / Honour Title</label>
              <input name="title" required className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Date / Year (e.g. 2026)</label>
              <input name="date" required className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-mono text-muted-foreground mb-1">Description / Detail</label>
            <textarea name="detail" required rows={3} className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" />
          </div>
          <div className="pt-2">
            <KeyValueEditor name="links" keyPlaceholder="Label (e.g. Certificate, Press Release)" valuePlaceholder="URL" />
          </div>
          <div className="pt-2">
            <button type="submit" className="px-6 py-2 bg-primary text-primary-foreground font-mono text-sm tracking-widest hover:opacity-90 rounded-sm">
              Add Award
            </button>
          </div>
        </form>
      </div>

      <div className="space-y-4">
        {awards.map(a => {
          const customLinks = JSON.parse(a.links || "[]")
          return (
            <div key={a.id} className="bg-card border border-border p-5 rounded-lg flex flex-col md:flex-row gap-4 justify-between group">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest bg-orange/10 text-orange px-2 py-0.5 rounded-sm border border-orange/20">
                    {a.date}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-medium leading-tight mb-2">{a.title}</h3>
                <p className="text-xs text-muted-foreground mb-3">{a.detail}</p>
                <div className="flex flex-wrap gap-2">
                  {customLinks.map((l: any, i: number) => (
                    <span key={i} className="text-[0.65rem] font-mono border border-orange/20 text-orange px-2 py-1 rounded-sm bg-orange/5">{l.key}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-3 shrink-0">
                <Link href={`/admin/awards/${a.id}/edit`} className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-colors" title="Edit">
                  <Edit2 size={16} />
                </Link>
                <form action={async () => {
                  "use server"
                  await deleteAward(a.id)
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
