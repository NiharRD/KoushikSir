import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

async function createGrant(formData: FormData) {
  "use server"
  await prisma.researchGrant.create({
    data: {
      title: formData.get("title") as string,
      agency: formData.get("agency") as string,
      period: formData.get("period") as string,
      grant: formData.get("grant") as string,
      role: formData.get("role") as string,
      researchGateUrl: formData.get("researchGateUrl") as string || null,
      googleScholarUrl: formData.get("googleScholarUrl") as string || null,
    }
  })
  revalidatePath("/admin/research")
  revalidatePath("/research")
  revalidatePath("/")
}

async function deleteGrant(id: number) {
  "use server"
  await prisma.researchGrant.delete({ where: { id } })
  revalidatePath("/admin/research")
  revalidatePath("/research")
  revalidatePath("/")
}

export default async function AdminResearch() {
  const grants = await prisma.researchGrant.findMany({ orderBy: { id: 'desc' } })

  return (
    <div className="p-10">
      <h1 className="font-serif text-3xl text-primary mb-8">Manage Research & Grants</h1>
      
      <div className="mb-12 bg-card border border-border p-6 rounded-lg">
        <h2 className="font-serif text-xl text-primary mb-4">Add New Grant</h2>
        <form action={createGrant} className="space-y-4 max-w-2xl">
          <div>
            <label className="block text-xs font-mono text-muted-foreground mb-1">Project Title</label>
            <input name="title" required className="w-full bg-background border border-border px-3 py-2 text-sm" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Funding Agency</label>
              <input name="agency" required className="w-full bg-background border border-border px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Period (e.g. 2024 - 2026)</label>
              <input name="period" required className="w-full bg-background border border-border px-3 py-2 text-sm" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Grant Amount (e.g. ₹ 24.68 Lakh)</label>
              <input name="grant" required className="w-full bg-background border border-border px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Investigator Role (e.g. PI / Co-PI)</label>
              <input name="role" required className="w-full bg-background border border-border px-3 py-2 text-sm" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">ResearchGate Link</label>
              <input name="researchGateUrl" type="url" className="w-full bg-background border border-border px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Google Scholar Link</label>
              <input name="googleScholarUrl" type="url" className="w-full bg-background border border-border px-3 py-2 text-sm" />
            </div>
          </div>
          <button type="submit" className="px-6 py-2 bg-primary text-primary-foreground font-mono text-sm tracking-widest hover:opacity-90">
            Add Grant
          </button>
        </form>
      </div>

      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-secondary/50 font-mono text-xs text-muted-foreground uppercase">
            <tr>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Agency</th>
              <th className="px-6 py-3">Period</th>
              <th className="px-6 py-3">Grant</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {grants.map(grant => (
              <tr key={grant.id} className="hover:bg-secondary/20 transition-colors">
                <td className="px-6 py-4 font-medium max-w-sm truncate">{grant.title}</td>
                <td className="px-6 py-4 text-xs">{grant.agency}</td>
                <td className="px-6 py-4 font-mono text-xs">{grant.period}</td>
                <td className="px-6 py-4 font-mono text-xs text-primary">{grant.grant}</td>
                <td className="px-6 py-4">
                  <form action={async () => {
                    "use server"
                    await deleteGrant(grant.id)
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
