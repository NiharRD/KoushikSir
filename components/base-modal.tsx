"use client"

import { useEffect, useRef, ReactNode, useState } from "react"
import { createPortal } from "react-dom"
import { X } from "lucide-react"

interface BaseModalProps {
  open: boolean
  onClose: () => void
  title: string
  badge?: ReactNode
  typeBadge?: ReactNode
  children: ReactNode
}

export function BaseModal({ open, onClose, title, badge, typeBadge, children }: BaseModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!open) return
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    setTimeout(() => {
      closeRef.current?.focus()
    }, 10)
    
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    window.addEventListener("keydown", onKey)
    return () => { 
      document.body.style.overflow = originalOverflow
      window.removeEventListener("keydown", onKey) 
    }
  }, [open, onClose])

  if (!open || !mounted) return null

  return createPortal(
    <div
      role="dialog" aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-foreground/40 backdrop-blur-sm animate-in fade-in duration-200 sm:p-6"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="relative w-full sm:w-[60vw] lg:w-[50vw] xl:w-[40vw] max-w-4xl max-h-[92dvh] sm:max-h-[85vh] overflow-y-auto bg-card border border-border shadow-2xl rounded-t-lg sm:rounded-sm animate-in slide-in-from-bottom-4 sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-200"
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 bg-card/95 backdrop-blur-sm border-b border-border px-6 py-4">
          <div className="flex flex-wrap items-center gap-2">
            {badge}
            {typeBadge}
          </div>
          <button ref={closeRef} onClick={onClose} aria-label="Close"
            className="shrink-0 p-1.5 text-muted-foreground hover:text-orange border border-border hover:border-orange transition-colors rounded-sm">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="px-6 pt-5 pb-2">
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-primary leading-snug">
            {title}
          </h2>
        </div>

        <div className="px-6 pb-8 pt-2 space-y-5">
          {children}
        </div>
      </div>
    </div>,
    document.body
  )
}
