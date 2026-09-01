"use client"

import { useState } from "react"
import { Image as ImageIcon, Loader2, UploadCloud } from "lucide-react"

interface Props {
  initialUrl?: string
}

export function ImageUploadInput({ initialUrl = "/professor-portrait.png" }: Props) {
  const [url, setUrl] = useState(initialUrl)
  const [isUploading, setIsUploading] = useState(false)

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsUploading(true)
    const formData = new FormData()
    formData.append("file", file)

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })
      if (!res.ok) throw new Error("Upload failed")
      const data = await res.json()
      setUrl(data.url)
    } catch (error) {
      console.error(error)
      alert("Failed to upload image.")
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="space-y-4">
      <input type="hidden" name="profileImageUrl" value={url} />
      
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="shrink-0">
          <div className="relative aspect-[3/4] w-48 overflow-hidden rounded-md border border-border bg-muted/30">
            {isUploading ? (
              <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm">
                <Loader2 className="h-6 w-6 animate-spin text-primary" />
              </div>
            ) : null}
            {url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={url} alt="Profile Preview" className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-muted-foreground">
                <ImageIcon className="h-10 w-10 opacity-20" />
              </div>
            )}
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Update Portrait</label>
            <p className="text-xs text-muted-foreground mb-4">
              Recommended: 600 × 800 px (3:4 portrait ratio). JPEG, PNG, AVIF or WebP.
            </p>
            
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleUpload}
                disabled={isUploading}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
              />
              <div className="flex items-center justify-center gap-2 px-4 py-8 border-2 border-dashed border-border rounded-md bg-secondary/20 hover:bg-secondary/40 transition-colors pointer-events-none">
                <UploadCloud className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-mono text-muted-foreground">
                  {isUploading ? "Uploading..." : "Click or drag to upload"}
                </span>
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-xs font-mono text-muted-foreground mb-1">Current URL</label>
            <input
              type="text"
              readOnly
              value={url}
              className="w-full bg-background border border-border px-3 py-2 text-xs font-mono text-muted-foreground rounded-sm opacity-70"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
