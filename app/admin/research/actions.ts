"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function createGrant(formData: FormData) {
  await prisma.researchGrant.create({
    data: {
      title: formData.get("title") as string,
      agency: formData.get("agency") as string,
      period: formData.get("period") as string,
      grant: formData.get("grant") as string,
      role: formData.get("role") as string,
      researchGateUrl: formData.get("researchGateUrl") as string || null,
      googleScholarUrl: formData.get("googleScholarUrl") as string || null,
      links: formData.get("links") as string || "[]",
    }
  })
  revalidatePath("/admin/research")
  revalidatePath("/research")
  revalidatePath("/")
}

export async function updateGrant(id: number, formData: FormData) {
  await prisma.researchGrant.update({
    where: { id },
    data: {
      title: formData.get("title") as string,
      agency: formData.get("agency") as string,
      period: formData.get("period") as string,
      grant: formData.get("grant") as string,
      role: formData.get("role") as string,
      researchGateUrl: formData.get("researchGateUrl") as string || null,
      googleScholarUrl: formData.get("googleScholarUrl") as string || null,
      links: formData.get("links") as string || "[]",
    }
  })
  revalidatePath("/admin/research")
  revalidatePath("/research")
  revalidatePath("/")
  redirect("/admin/research")
}

export async function deleteGrant(id: number) {
  await prisma.researchGrant.delete({ where: { id } })
  revalidatePath("/admin/research")
  revalidatePath("/research")
  revalidatePath("/")
}
