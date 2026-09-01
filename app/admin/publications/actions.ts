"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function createPublication(formData: FormData) {
  await prisma.publication.create({
    data: {
      ref: formData.get("ref") as string,
      title: formData.get("title") as string,
      cite: formData.get("cite") as string,
      date: formData.get("date") as string,
      googleScholarUrl: formData.get("googleScholarUrl") as string || null,
      researchGateUrl: formData.get("researchGateUrl") as string || null,
      doiUrl: formData.get("doiUrl") as string || null,
    }
  })
  revalidatePath("/admin/publications")
  revalidatePath("/publications")
}

export async function deletePublication(id: number) {
  await prisma.publication.delete({ where: { id } })
  revalidatePath("/admin/publications")
  revalidatePath("/publications")
}
