"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function createStudent(formData: FormData) {
  await prisma.student.create({
    data: {
      name: formData.get("name") as string,
      degree: formData.get("degree") as string || "Ph.D.",
      year: formData.get("year") as string || null,
      status: formData.get("status") as string || "Graduated",
      thesis: formData.get("thesis") as string,
      areaOfResearch: formData.get("areaOfResearch") as string || null,
      googleScholarUrl: formData.get("googleScholarUrl") as string || null,
      links: formData.get("links") as string || "[]",
    }
  })
  revalidatePath("/admin/students")
  revalidatePath("/students")
  revalidatePath("/")
}

export async function updateStudent(id: number, formData: FormData) {
  await prisma.student.update({
    where: { id },
    data: {
      name: formData.get("name") as string,
      degree: formData.get("degree") as string || "Ph.D.",
      year: formData.get("year") as string || null,
      status: formData.get("status") as string || "Graduated",
      thesis: formData.get("thesis") as string,
      areaOfResearch: formData.get("areaOfResearch") as string || null,
      googleScholarUrl: formData.get("googleScholarUrl") as string || null,
      links: formData.get("links") as string || "[]",
    }
  })
  revalidatePath("/admin/students")
  revalidatePath("/students")
  revalidatePath("/")
  redirect("/admin/students")
}

export async function deleteStudent(id: number) {
  await prisma.student.delete({ where: { id } })
  revalidatePath("/admin/students")
  revalidatePath("/students")
  revalidatePath("/")
}
