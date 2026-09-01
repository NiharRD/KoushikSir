import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const allowedEmails = [
  process.env.EMAIL_ADMIN,
  process.env.EMAIL_SIR,
].filter(Boolean) as string[]

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Google],
  callbacks: {
    signIn({ profile }) {
      if (!profile?.email) return false
      return allowedEmails.includes(profile.email)
    },
  },
})
