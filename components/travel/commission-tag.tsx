"use client"

interface CommissionTagProps {
  commission: string
  variant?: 'default' | 'subtle'
}

export function CommissionTag({ commission, variant = 'default' }: CommissionTagProps) {
  if (variant === 'subtle') {
    return (
      <span className="text-xs text-[#5A5A5A] font-sans italic">
        Earns: {commission}
      </span>
    )
  }
  
  return (
    <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-[#C6A96B]/5 border border-[#C6A96B]/10">
      <svg className="w-3 h-3 text-[#C6A96B]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
      <span className="text-xs text-[#A1A1A1] font-sans">
        Earns: {commission}
      </span>
    </span>
  )
}
