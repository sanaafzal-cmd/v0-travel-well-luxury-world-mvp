"use client"

interface CommissionTagProps {
  commission: string
}

export function CommissionTag({ commission }: CommissionTagProps) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-[#7A7A7A] font-sans">
      <svg 
        className="w-3 h-3 text-[#C6A96B]/50" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        strokeWidth={1.5}
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" 
        />
      </svg>
      <span className="text-[#5A5A5A]">Earns:</span>
      <span className="text-[#C6A96B]/70">{commission}</span>
    </span>
  )
}
