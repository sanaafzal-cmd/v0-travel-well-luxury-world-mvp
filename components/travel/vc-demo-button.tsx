"use client"

import { useRouter } from "next/navigation"

interface VCDemoButtonProps {
  variant?: "default" | "compact"
  className?: string
}

export function VCDemoButton({ variant = "default", className = "" }: VCDemoButtonProps) {
  const router = useRouter()
  
  if (variant === "compact") {
    return (
      <button
        onClick={() => router.push("/demo")}
        className={`
          inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-sans
          text-[#C6A96B] bg-transparent border border-[#C6A96B]/30
          hover:bg-[#C6A96B]/10 hover:border-[#C6A96B]/50 
          transition-all duration-300
          ${className}
        `}
      >
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
        <span>VC Demo</span>
      </button>
    )
  }
  
  return (
    <button
      onClick={() => router.push("/demo")}
      className={`
        inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-sans font-medium
        text-[#C6A96B] bg-[#C6A96B]/5 border border-[#C6A96B]/25
        hover:bg-[#C6A96B]/10 hover:border-[#C6A96B]/40 
        shadow-[0_0_12px_rgba(198,169,107,0.1)]
        hover:shadow-[0_0_20px_rgba(198,169,107,0.15)]
        transition-all duration-300
        ${className}
      `}
    >
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
      <span>Investor View</span>
    </button>
  )
}
