"use client"

import { useState, useMemo } from "react"
import { Search, SlidersHorizontal, BookOpen, Presentation } from "lucide-react"
import { PublicationsAccordion, type Publication } from "./publications-accordion"

export function PublicationsSearch({
  journals,
  conferences,
}: {
  journals: Publication[]
  conferences: Publication[]
}) {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState<"all" | "journals" | "conferences">("all")
  const [selectedYear, setSelectedYear] = useState<string>("all")

  // Extract all unique years dynamically
  const availableYears = useMemo(() => {
    const years = new Set<string>()
    const extractYear = (cite: string, date?: string) => {
      const match = cite.match(/\b(20\d{2})\b/) || (date ? date.match(/\b(20\d{2})\b/) : null)
      return match ? match[1] : null
    }

    journals.forEach((j) => {
      const yr = extractYear(j.cite, j.date)
      if (yr) years.add(yr)
    })
    conferences.forEach((c) => {
      const yr = extractYear(c.cite, c.date)
      if (yr) years.add(yr)
    })

    return Array.from(years).sort((a, b) => b.localeCompare(a))
  }, [journals, conferences])

  // Filter lists
  const filteredJournals = useMemo(() => {
    return journals.filter((j) => {
      const matchesSearch =
        j.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        j.cite.toLowerCase().includes(searchQuery.toLowerCase())
      
      const extractYear = j.cite.match(/\b(20\d{2})\b/) || (j.date ? j.date.match(/\b(20\d{2})\b/) : null)
      const matchesYear = selectedYear === "all" || (extractYear && extractYear[1] === selectedYear)

      return matchesSearch && matchesYear
    }).map((item, index) => ({
      ...item,
      ref: `[${String(index + 1).padStart(2, "0")}]`,
    }))
  }, [journals, searchQuery, selectedYear])

  const filteredConferences = useMemo(() => {
    return conferences.filter((c) => {
      const matchesSearch =
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.cite.toLowerCase().includes(searchQuery.toLowerCase())

      const extractYear = c.cite.match(/\b(20\d{2})\b/) || (c.date ? c.date.match(/\b(20\d{2})\b/) : null)
      const matchesYear = selectedYear === "all" || (extractYear && extractYear[1] === selectedYear)

      return matchesSearch && matchesYear
    }).map((item, index) => ({
      ...item,
      ref: `[${String(index + 1).padStart(2, "0")}]`,
    }))
  }, [conferences, searchQuery, selectedYear])

  return (
    <div className="space-y-8 bg-gradient-to-b from-card/30 to-secondary/10 pb-8">
      {/* Search and Filter Controls */}
      <div className="border-y border-border bg-card/70 p-6 shadow-[0_12px_40px_oklch(0.36_0.13_252/0.05)] backdrop-blur sm:px-10 flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-orange" />
          <input
            type="text"
            placeholder="Search by title, citation, or authors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-border bg-background/70 py-3 pl-10 pr-4 text-sm text-foreground shadow-inner transition-all placeholder:text-muted-foreground/70 focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange/30"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Tab switches */}
          <div className="flex border border-border bg-secondary/70 p-0.5 text-xs font-mono shadow-sm">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-3 py-2 transition-all cursor-pointer ${activeTab === "all" ? "bg-primary text-primary-foreground font-semibold shadow-sm" : "text-muted-foreground hover:bg-card/70 hover:text-primary"}`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab("journals")}
              className={`px-3 py-2 transition-all cursor-pointer flex items-center gap-1.5 ${activeTab === "journals" ? "bg-primary text-primary-foreground font-semibold shadow-sm" : "text-muted-foreground hover:bg-card/70 hover:text-primary"}`}
            >
              <BookOpen className="size-3" />
              Journals
            </button>
            <button
              onClick={() => setActiveTab("conferences")}
              className={`px-3 py-2 transition-all cursor-pointer flex items-center gap-1.5 ${activeTab === "conferences" ? "bg-primary text-primary-foreground font-semibold shadow-sm" : "text-muted-foreground hover:bg-card/70 hover:text-primary"}`}
            >
              <Presentation className="size-3" />
              Conferences
            </button>
          </div>

          {/* Year selector */}
          <div className="flex items-center gap-1.5 border border-border bg-background/70 px-3 py-2 text-xs text-foreground shadow-sm">
            <SlidersHorizontal className="size-3.5 text-orange" />
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="bg-transparent focus:outline-none border-none pr-2 cursor-pointer font-mono font-medium"
            >
              <option value="all" className="bg-background text-foreground">All Years</option>
              {availableYears.map((yr) => (
                <option key={yr} value={yr} className="bg-background text-foreground">
                  {yr}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Rendering */}
      <div>
        {(activeTab === "all" || activeTab === "journals") && (
          <div>
            <div className="border-b border-border bg-gradient-to-r from-secondary/45 via-card/60 to-orange/10 px-6 py-4 font-mono text-[0.7rem] uppercase tracking-widest text-primary sm:px-10 flex justify-between items-center">
              <span>Journal Publications</span>
              <span className="border border-border bg-background/60 px-2 py-1 text-[0.65rem] lowercase font-normal text-muted-foreground">
                {filteredJournals.length} found
              </span>
            </div>
            {filteredJournals.length > 0 ? (
              <PublicationsAccordion items={filteredJournals} />
            ) : (
              <div className="px-6 py-12 text-center text-sm text-muted-foreground sm:px-10 border-b border-border">
                No journals match the filters.
              </div>
            )}
          </div>
        )}

        {(activeTab === "all" || activeTab === "conferences") && (
          <div className={`${activeTab === "all" ? "mt-8 border-t border-border" : ""}`}>
            <div className="border-b border-border bg-gradient-to-r from-secondary/45 via-card/60 to-orange/10 px-6 py-4 font-mono text-[0.7rem] uppercase tracking-widest text-primary sm:px-10 flex justify-between items-center">
              <span>Conference Publications</span>
              <span className="border border-border bg-background/60 px-2 py-1 text-[0.65rem] lowercase font-normal text-muted-foreground">
                {filteredConferences.length} found
              </span>
            </div>
            {filteredConferences.length > 0 ? (
              <PublicationsAccordion items={filteredConferences} trigger="hover" />
            ) : (
              <div className="px-6 py-12 text-center text-sm text-muted-foreground sm:px-10 border-b border-border">
                No conferences match the filters.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
