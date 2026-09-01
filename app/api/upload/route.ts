import { writeFile, mkdir } from "fs/promises"
import { NextResponse } from "next/server"
import path from "path"

export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const file = formData.get("file") as File
    
    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    
    const ext = file.name.split(".").pop()
    const filename = `portrait-${Date.now()}.${ext}`
    
    const uploadDir = path.join(process.cwd(), "public", "uploads")
    
    // Ensure the uploads directory exists
    try {
      await mkdir(uploadDir, { recursive: true })
    } catch (e) {
      // Ignore if directory already exists
    }

    const uploadPath = path.join(uploadDir, filename)
    await writeFile(uploadPath, buffer)
    
    return NextResponse.json({ url: `/uploads/${filename}` })
  } catch (error) {
    console.error("Upload error:", error)
    return NextResponse.json({ error: "Failed to upload file" }, { status: 500 })
  }
}
