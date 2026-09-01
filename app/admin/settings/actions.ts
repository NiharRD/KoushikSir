"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function updateSettings(formData: FormData) {
  await prisma.siteSettings.upsert({
    where: { id: 1 },
    create: {
      id: 1,
      yearsExperience: formData.get("yearsExperience") as string,
      grantsLabel: formData.get("grantsLabel") as string,
      profileImageUrl: formData.get("profileImageUrl") as string,
      socialLinks: formData.get("socialLinks") as string,
    },
    update: {
      yearsExperience: formData.get("yearsExperience") as string,
      grantsLabel: formData.get("grantsLabel") as string,
      profileImageUrl: formData.get("profileImageUrl") as string,
      socialLinks: formData.get("socialLinks") as string,
    },
  })

  revalidatePath("/")
  revalidatePath("/admin/settings")
}
