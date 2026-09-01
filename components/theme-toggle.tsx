"use client"

import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    if (savedTheme) {
      setTheme(savedTheme)
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    } else {
      // Force dark mode as initial default
      const initial = "dark"
      setTheme(initial)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    if (!theme) return
    const nextTheme = theme === "light" ? "dark" : "light"
    setTheme(nextTheme)
    localStorage.setItem("theme", nextTheme)
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  if (theme === null) {
    return null
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-secondary/80 text-primary shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-orange hover:text-orange hover:shadow-[0_0_20px_oklch(0.62_0.14_58/0.2)] active:scale-95 cursor-pointer dark:bg-card/80 dark:border-border/40"
      aria-label="Toggle theme"
    >
      <div className="relative h-6 w-6">
        <Sun className={`absolute inset-0 h-6 w-6 transition-all duration-500 transform ${theme === "dark" ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`} />
        <Moon className={`absolute inset-0 h-6 w-6 transition-all duration-500 transform ${theme === "dark" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`} />
      </div>
    </button>
  )
}
