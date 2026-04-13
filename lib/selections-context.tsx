"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

export interface WellSelection {
  itemId: string
  itemTitle: string
  timestamp: number
}

export interface SelectionsState {
  [wellId: string]: WellSelection[]
}

interface SelectionsContextType {
  selections: SelectionsState
  addSelection: (wellId: string, itemId: string, itemTitle: string) => void
  removeSelection: (wellId: string, itemId: string) => void
  clearWellSelections: (wellId: string) => void
  getWellSelections: (wellId: string) => WellSelection[]
  getSelectionCount: (wellId: string) => number
  getLastSelection: (wellId: string) => WellSelection | null
  isSelected: (wellId: string, itemId: string) => boolean
}

const SelectionsContext = createContext<SelectionsContextType | undefined>(undefined)

const STORAGE_KEY = "travelwell-selections"

export function SelectionsProvider({ children }: { children: ReactNode }) {
  const [selections, setSelections] = useState<SelectionsState>({})
  const [isHydrated, setIsHydrated] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        setSelections(JSON.parse(stored))
      }
    } catch (e) {
      console.error("Failed to load selections from storage", e)
    }
    setIsHydrated(true)
  }, [])

  // Save to localStorage on change
  useEffect(() => {
    if (isHydrated) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(selections))
      } catch (e) {
        console.error("Failed to save selections to storage", e)
      }
    }
  }, [selections, isHydrated])

  const addSelection = (wellId: string, itemId: string, itemTitle: string) => {
    setSelections((prev) => {
      const wellSelections = prev[wellId] || []
      // Check if already selected
      if (wellSelections.some((s) => s.itemId === itemId)) {
        return prev
      }
      return {
        ...prev,
        [wellId]: [
          ...wellSelections,
          { itemId, itemTitle, timestamp: Date.now() },
        ],
      }
    })
  }

  const removeSelection = (wellId: string, itemId: string) => {
    setSelections((prev) => {
      const wellSelections = prev[wellId] || []
      return {
        ...prev,
        [wellId]: wellSelections.filter((s) => s.itemId !== itemId),
      }
    })
  }

  const clearWellSelections = (wellId: string) => {
    setSelections((prev) => {
      const newSelections = { ...prev }
      delete newSelections[wellId]
      return newSelections
    })
  }

  const getWellSelections = (wellId: string): WellSelection[] => {
    return selections[wellId] || []
  }

  const getSelectionCount = (wellId: string): number => {
    return (selections[wellId] || []).length
  }

  const getLastSelection = (wellId: string): WellSelection | null => {
    const wellSelections = selections[wellId] || []
    if (wellSelections.length === 0) return null
    return wellSelections[wellSelections.length - 1]
  }

  const isSelected = (wellId: string, itemId: string): boolean => {
    const wellSelections = selections[wellId] || []
    return wellSelections.some((s) => s.itemId === itemId)
  }

  return (
    <SelectionsContext.Provider
      value={{
        selections,
        addSelection,
        removeSelection,
        clearWellSelections,
        getWellSelections,
        getSelectionCount,
        getLastSelection,
        isSelected,
      }}
    >
      {children}
    </SelectionsContext.Provider>
  )
}

export function useSelections() {
  const context = useContext(SelectionsContext)
  if (context === undefined) {
    throw new Error("useSelections must be used within a SelectionsProvider")
  }
  return context
}
