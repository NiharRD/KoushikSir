"use client"

import { useState } from "react"
import { X, Plus } from "lucide-react"

type KVPair = { key: string; value: string }

interface Props {
  name: string
  initialValue?: string
  keyPlaceholder?: string
  valuePlaceholder?: string
}

export function KeyValueEditor({
  name,
  initialValue = "[]",
  keyPlaceholder = "Label (e.g. PDF, Certificate)",
  valuePlaceholder = "URL (https://...)",
}: Props) {
  const [pairs, setPairs] = useState<KVPair[]>(() => {
    try {
      return JSON.parse(initialValue) || []
    } catch {
      return []
    }
  })

  const updatePair = (index: number, field: keyof KVPair, value: string) => {
    const newPairs = [...pairs]
    newPairs[index][field] = value
    setPairs(newPairs)
  }

  const removePair = (index: number) => {
    setPairs(pairs.filter((_, i) => i !== index))
  }

  const addPair = () => {
    setPairs([...pairs, { key: "", value: "" }])
  }

  return (
    <div className="space-y-3 p-4 border border-border bg-card/50 rounded-md">
      <div className="flex items-center justify-between mb-2">
        <label className="text-xs font-mono text-muted-foreground">Custom Links</label>
      </div>

      <input type="hidden" name={name} value={JSON.stringify(pairs)} />

      {pairs.map((pair, index) => (
        <div key={index} className="flex gap-2 items-start">
          <div className="flex-1 space-y-2">
            <input
              type="text"
              placeholder={keyPlaceholder}
              value={pair.key}
              onChange={(e) => updatePair(index, "key", e.target.value)}
              className="w-full bg-background border border-border px-3 py-1.5 text-sm rounded-sm"
            />
            <input
              type="url"
              placeholder={valuePlaceholder}
              value={pair.value}
              onChange={(e) => updatePair(index, "value", e.target.value)}
              className="w-full bg-background border border-border px-3 py-1.5 text-sm rounded-sm"
            />
          </div>
          <button
            type="button"
            onClick={() => removePair(index)}
            className="p-1.5 text-muted-foreground hover:text-destructive transition-colors shrink-0"
            title="Remove"
          >
            <X size={16} />
          </button>
        </div>
      ))}

      {pairs.length === 0 && (
        <p className="text-xs text-muted-foreground italic text-center py-2">
          No custom links added yet.
        </p>
      )}

      <button
        type="button"
        onClick={addPair}
        className="flex items-center gap-1.5 text-xs font-mono text-primary hover:text-orange transition-colors mt-2"
      >
        <Plus size={14} /> Add Link
      </button>
    </div>
  )
}
