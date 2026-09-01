import { auth } from "@/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  const isProtected =
    req.nextUrl.pathname.startsWith("/admin") ||
    req.nextUrl.pathname.startsWith("/admincms")

  if (isProtected && !req.auth) {
    return NextResponse.redirect(new URL("/api/auth/signin", req.url))
  }
})

export const config = { matcher: ["/admin/:path*", "/admincms/:path*"] }
