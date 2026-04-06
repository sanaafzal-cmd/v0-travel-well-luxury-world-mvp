"use client"

interface CommissionTagProps {
  commission: string
}

export function CommissionTag({ commission }: CommissionTagProps) {
  return (
    <span className="text-xs text-[#7A7A7A] font-sans">
      Earns: {commission}
    </span>
  )
}
