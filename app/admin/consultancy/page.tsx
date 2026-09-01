import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

async function createConsultancy(formData: FormData) {
  "use server"
  await prisma.consultancyProject.create({
    data: {
      title: formData.get("title") as string,
      client: formData.get("client") as string,
      period: formData.get("period") as string,
      value: formData.get("value") as string || null,
      role: formData.get("role") as string || null,
    }
  })
  revalidatePath("/admin/consultancy")
  revalidatePath("/consultancy")
  revalidatePath("/")
}

async function deleteConsultancy(id: number) {
  "use server"
  await prisma.consultancyProject.delete({ where: { id } })
  revalidatePath("/admin/consultancy")
  revalidatePath("/consultancy")
  revalidatePath("/")
}

export default async function AdminConsultancy() {
  const projects = await prisma.consultancyProject.findMany({ orderBy: { id: 'desc' } })

  return (
    <div className="p-10">
      <h1 className="font-serif text-3xl text-primary mb-8">Manage Consultancy & Vetting</h1>
      
      <div className="mb-12 bg-card border border-border p-6 rounded-lg">
        <h2 className="font-serif text-xl text-primary mb-4">Add New Consultancy Project</h2>
        <form action={createConsultancy} className="space-y-4 max-w-2xl">
          <div>
            <label className="block text-xs font-mono text-muted-foreground mb-1">Project Title</label>
            <input name="title" required className="w-full bg-background border border-border px-3 py-2 text-sm" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Client Organization</label>
              <input name="client" required className="w-full bg-background border border-border px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Period (e.g. 2023 onward)</label>
              <input name="period" required className="w-full bg-background border border-border px-3 py-2 text-sm" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Project Value (e.g. ₹ 37.32 Lakh)</label>
              <input name="value" className="w-full bg-background border border-border px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Role (e.g. Principal Investigator)</label>
              <input name="role" className="w-full bg-background border border-border px-3 py-2 text-sm" />
            </div>
          </div>
          <button type="submit" className="px-6 py-2 bg-primary text-primary-foreground font-mono text-sm tracking-widest hover:opacity-90">
            Add Project
          </button>
        </form>
      </div>

      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-secondary/50 font-mono text-xs text-muted-foreground uppercase">
            <tr>
              <th className="px-6 py-3">Period</th>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Client</th>
              <th className="px-6 py-3">Value</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {projects.map(p => (
              <tr key={p.id} className="hover:bg-secondary/20 transition-colors">
                <td className="px-6 py-4 font-mono text-xs text-orange">{p.period}</td>
                <td className="px-6 py-4 font-medium max-w-sm truncate">{p.title}</td>
                <td className="px-6 py-4 text-xs">{p.client}</td>
                <td className="px-6 py-4 font-mono text-xs text-primary">{p.value || "-"}</td>
                <td className="px-6 py-4">
                  <form action={async () => {
                    "use server"
                    await deleteConsultancy(p.id)
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
