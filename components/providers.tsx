"use client"

import { ReactNode } from "react"
import { SelectionsProvider } from "@/lib/selections-context"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SelectionsProvider>
      {children}
    </SelectionsProvider>
  )
}
