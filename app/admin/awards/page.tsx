import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

async function createAward(formData: FormData) {
  "use server"
  await prisma.award.create({
    data: {
      title: formData.get("title") as string,
      date: formData.get("date") as string,
      detail: formData.get("detail") as string,
    }
  })
  revalidatePath("/admin/awards")
  revalidatePath("/awards")
  revalidatePath("/")
}

async function deleteAward(id: number) {
  "use server"
  await prisma.award.delete({ where: { id } })
  revalidatePath("/admin/awards")
  revalidatePath("/awards")
  revalidatePath("/")
}

export default async function AdminAwards() {
  const awards = await prisma.award.findMany({ orderBy: { id: 'desc' } })

  return (
    <div className="p-10">
      <h1 className="font-serif text-3xl text-primary mb-8">Manage Awards & Honours</h1>
      
      <div className="mb-12 bg-card border border-border p-6 rounded-lg">
        <h2 className="font-serif text-xl text-primary mb-4">Add New Award / Honour</h2>
        <form action={createAward} className="space-y-4 max-w-2xl">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <label className="block text-xs font-mono text-muted-foreground mb-1">Award / Honour Title</label>
              <input name="title" required className="w-full bg-background border border-border px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Date / Year (e.g. 2026)</label>
              <input name="date" required className="w-full bg-background border border-border px-3 py-2 text-sm" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-mono text-muted-foreground mb-1">Description / Detail</label>
            <textarea name="detail" required rows={3} className="w-full bg-background border border-border px-3 py-2 text-sm" />
          </div>
          <button type="submit" className="px-6 py-2 bg-primary text-primary-foreground font-mono text-sm tracking-widest hover:opacity-90">
            Add Award
          </button>
        </form>
      </div>

      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-secondary/50 font-mono text-xs text-muted-foreground uppercase">
            <tr>
              <th className="px-6 py-3">Year</th>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Detail</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {awards.map(a => (
              <tr key={a.id} className="hover:bg-secondary/20 transition-colors">
                <td className="px-6 py-4 font-mono text-xs text-orange">{a.date}</td>
                <td className="px-6 py-4 font-medium">{a.title}</td>
                <td className="px-6 py-4 text-xs max-w-sm truncate">{a.detail}</td>
                <td className="px-6 py-4">
                  <form action={async () => {
                    "use server"
                    await deleteAward(a.id)
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
