"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

function computePeriod(startDate: string, endDate: string) {
  if (startDate && endDate) return `${startDate} - ${endDate}`
  if (startDate && !endDate) return `${startDate} onward`
  if (!startDate && endDate) return `Ending ${endDate}`
  return "Unknown"
}

export async function createConsultancy(formData: FormData) {
  const startDate = formData.get("startDate") as string || ""
  const endDate = formData.get("endDate") as string || ""
  const computedPeriod = computePeriod(startDate, endDate)

  await prisma.consultancyProject.create({
    data: {
      title: formData.get("title") as string,
      client: formData.get("client") as string,
      period: computedPeriod, // Auto-computed for backward compatibility
      value: formData.get("value") as string || null,
      role: formData.get("role") as string || null,
      description: formData.get("description") as string || null,
      startDate: startDate || null,
      endDate: endDate || null,
      status: formData.get("status") as string || "Ongoing",
      progress: formData.get("progress") as string || null,
      links: formData.get("links") as string || "[]",
    }
  })
  revalidatePath("/admin/consultancy")
  revalidatePath("/consultancy")
  revalidatePath("/")
}

export async function updateConsultancy(id: number, formData: FormData) {
  const startDate = formData.get("startDate") as string || ""
  const endDate = formData.get("endDate") as string || ""
  const computedPeriod = computePeriod(startDate, endDate)

  await prisma.consultancyProject.update({
    where: { id },
    data: {
      title: formData.get("title") as string,
      client: formData.get("client") as string,
      period: computedPeriod,
      value: formData.get("value") as string || null,
      role: formData.get("role") as string || null,
      description: formData.get("description") as string || null,
      startDate: startDate || null,
      endDate: endDate || null,
      status: formData.get("status") as string || "Ongoing",
      progress: formData.get("progress") as string || null,
      links: formData.get("links") as string || "[]",
    }
  })
  revalidatePath("/admin/consultancy")
  revalidatePath("/consultancy")
  revalidatePath("/")
  redirect("/admin/consultancy")
}

export async function deleteConsultancy(id: number) {
  await prisma.consultancyProject.delete({ where: { id } })
  revalidatePath("/admin/consultancy")
  revalidatePath("/consultancy")
  revalidatePath("/")
}
