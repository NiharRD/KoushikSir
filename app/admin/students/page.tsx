import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

async function createStudent(formData: FormData) {
  "use server"
  await prisma.student.create({
    data: {
      name: formData.get("name") as string,
      year: formData.get("year") as string || null,
      degree: formData.get("degree") as string || "Ph.D.",
      status: formData.get("status") as string || "Graduated",
      thesis: formData.get("thesis") as string,
      googleScholarUrl: formData.get("googleScholarUrl") as string || null,
    }
  })
  revalidatePath("/admin/students")
  revalidatePath("/students")
  revalidatePath("/")
}

async function deleteStudent(id: number) {
  "use server"
  await prisma.student.delete({ where: { id } })
  revalidatePath("/admin/students")
  revalidatePath("/students")
  revalidatePath("/")
}

export default async function AdminStudents() {
  const students = await prisma.student.findMany({ orderBy: { id: 'desc' } })

  return (
    <div className="p-10">
      <h1 className="font-serif text-3xl text-primary mb-8">Manage Scholars & Students</h1>
      
      <div className="mb-12 bg-card border border-border p-6 rounded-lg">
        <h2 className="font-serif text-xl text-primary mb-4">Add New Scholar</h2>
        <form action={createStudent} className="space-y-4 max-w-2xl">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Scholar Name</label>
              <input name="name" required className="w-full bg-background border border-border px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Degree</label>
              <input name="degree" defaultValue="Ph.D." required className="w-full bg-background border border-border px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Year / Status</label>
              <input name="year" placeholder="2026" className="w-full bg-background border border-border px-3 py-2 text-sm" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-mono text-muted-foreground mb-1">Status (e.g. Graduated / Ongoing)</label>
            <input name="status" defaultValue="Graduated" required className="w-full bg-background border border-border px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="block text-xs font-mono text-muted-foreground mb-1">Thesis Title / Research Topic</label>
            <textarea name="thesis" required rows={3} className="w-full bg-background border border-border px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="block text-xs font-mono text-muted-foreground mb-1">Google Scholar URL</label>
            <input name="googleScholarUrl" type="url" className="w-full bg-background border border-border px-3 py-2 text-sm" />
          </div>
          <button type="submit" className="px-6 py-2 bg-primary text-primary-foreground font-mono text-sm tracking-widest hover:opacity-90">
            Add Scholar
          </button>
        </form>
      </div>

      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-secondary/50 font-mono text-xs text-muted-foreground uppercase">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Degree / Year</th>
              <th className="px-6 py-3">Thesis</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {students.map(s => (
              <tr key={s.id} className="hover:bg-secondary/20 transition-colors">
                <td className="px-6 py-4 font-medium">{s.name}</td>
                <td className="px-6 py-4 font-mono text-xs">{s.degree} ({s.year || s.status})</td>
                <td className="px-6 py-4 text-xs max-w-sm truncate">{s.thesis}</td>
                <td className="px-6 py-4">
                  <form action={async () => {
                    "use server"
                    await deleteStudent(s.id)
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
