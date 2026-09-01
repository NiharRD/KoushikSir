"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function createAward(formData: FormData) {
  await prisma.award.create({
    data: {
      title: formData.get("title") as string,
      date: formData.get("date") as string,
      detail: formData.get("detail") as string,
      links: formData.get("links") as string || "[]",
    }
  })
  revalidatePath("/admin/awards")
  revalidatePath("/awards")
  revalidatePath("/")
}

export async function updateAward(id: number, formData: FormData) {
  await prisma.award.update({
    where: { id },
    data: {
      title: formData.get("title") as string,
      date: formData.get("date") as string,
      detail: formData.get("detail") as string,
      links: formData.get("links") as string || "[]",
    }
  })
  revalidatePath("/admin/awards")
  revalidatePath("/awards")
  revalidatePath("/")
  redirect("/admin/awards")
}

export async function deleteAward(id: number) {
  await prisma.award.delete({ where: { id } })
  revalidatePath("/admin/awards")
  revalidatePath("/awards")
  revalidatePath("/")
}
