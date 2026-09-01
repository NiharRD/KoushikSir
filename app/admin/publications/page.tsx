import { prisma } from "@/lib/prisma"
import { createPublication, deletePublication } from "./actions"

export default async function AdminPublications() {
  const publications = await prisma.publication.findMany({ orderBy: { id: 'desc' } })

  return (
    <div className="p-10">
      <h1 className="font-serif text-3xl text-primary mb-8">Manage Publications</h1>
      
      <div className="mb-12 bg-card border border-border p-6 rounded-lg">
        <h2 className="font-serif text-xl text-primary mb-4">Add New Publication</h2>
        <form action={createPublication} className="space-y-4 max-w-2xl">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Reference (e.g. [01])</label>
              <input name="ref" required className="w-full bg-background border border-border px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Date (e.g. May 2026)</label>
              <input name="date" required className="w-full bg-background border border-border px-3 py-2 text-sm" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-mono text-muted-foreground mb-1">Title</label>
            <input name="title" required className="w-full bg-background border border-border px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="block text-xs font-mono text-muted-foreground mb-1">Full Citation</label>
            <textarea name="cite" required rows={3} className="w-full bg-background border border-border px-3 py-2 text-sm" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Google Scholar URL</label>
              <input name="googleScholarUrl" type="url" className="w-full bg-background border border-border px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">ResearchGate URL</label>
              <input name="researchGateUrl" type="url" className="w-full bg-background border border-border px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">DOI URL</label>
              <input name="doiUrl" type="url" className="w-full bg-background border border-border px-3 py-2 text-sm" />
            </div>
          </div>
          <button type="submit" className="px-6 py-2 bg-primary text-primary-foreground font-mono text-sm tracking-widest hover:opacity-90">
            Add Publication
          </button>
        </form>
      </div>

      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-secondary/50 font-mono text-xs text-muted-foreground uppercase">
            <tr>
              <th className="px-6 py-3">Ref</th>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {publications.map(pub => (
              <tr key={pub.id} className="hover:bg-secondary/20 transition-colors">
                <td className="px-6 py-4 font-mono text-xs">{pub.ref}</td>
                <td className="px-6 py-4 font-medium max-w-md truncate">{pub.title}</td>
                <td className="px-6 py-4">{pub.date}</td>
                <td className="px-6 py-4">
                  <form action={async () => {
                    "use server"
                    await deletePublication(pub.id)
                  }}>
                    <button type="submit" className="text-destructive text-xs font-mono hover:underline">Delete</button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
