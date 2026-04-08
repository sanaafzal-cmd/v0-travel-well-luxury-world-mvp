"use client"

import { useEffect } from "react"
import { popups, type WellCategory } from "@/lib/monetization"

interface WellPopupModalProps {
  wellCategory: WellCategory | null
  isOpen: boolean
  onClose: () => void
}

export function WellPopupModal({ wellCategory, isOpen, onClose }: WellPopupModalProps) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  if (!isOpen || !wellCategory) return null

  const content = popups[wellCategory]
  if (!content) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-5"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in" />
      
      {/* Modal */}
      <div 
        className="relative w-full max-w-md bg-[#0F0F10] border border-[#2A2A2B] rounded-2xl overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#1A1A1B] border border-[#2A2A2B] flex items-center justify-center text-[#A1A1A1] hover:text-[#F5F5F5] hover:border-[#3A3A3B] transition-colors z-10"
          aria-label="Close"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="p-8 pt-10">
          {/* Category label */}
          <div className="inline-block px-3 py-1 rounded-full bg-[#C6A96B]/10 border border-[#C6A96B]/20 mb-4">
            <span className="text-xs text-[#C6A96B] font-sans uppercase tracking-widest">
              {wellCategory}
            </span>
          </div>

          {/* Title */}
          <h2 className="font-serif text-2xl md:text-3xl text-[#F5F5F5] mb-3 leading-tight">
            {content.title}
          </h2>

          {/* Description */}
          <p className="text-[#A1A1A1] font-sans text-base leading-relaxed mb-6">
            {content.description}
          </p>

          {/* Commission highlight */}
          <div className="bg-[#1A1A1B] border border-[#2A2A2B] rounded-xl p-5 mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-[#A1A1A1] font-sans">Commission Range</span>
              <span className="text-sm text-[#7A7A7A] font-sans">via CJ Affiliate</span>
            </div>
            <div className="text-3xl font-serif text-[#C6A96B]">
              {content.commissionRange}
            </div>
          </div>

          {/* Partners */}
          <div className="mb-6">
            <span className="text-xs text-[#A1A1A1] font-sans uppercase tracking-widest block mb-3">
              Example Partners
            </span>
            <div className="flex flex-wrap gap-2">
              {content.partners.slice(0, 5).map((partner) => (
                <span 
                  key={partner}
                  className="px-3 py-1.5 rounded-full bg-[#1A1A1B] border border-[#2A2A2B] text-sm text-[#E8DFC8] font-sans"
                >
                  {partner}
                </span>
              ))}
              {content.partners.length > 5 && (
                <span className="px-3 py-1.5 rounded-full bg-[#1A1A1B] border border-[#2A2A2B] text-sm text-[#7A7A7A] font-sans">
                  +{content.partners.length - 5} more
                </span>
              )}
            </div>
          </div>

          {/* Credibility line */}
          <div className="pt-5 border-t border-[#2A2A2B]">
            <p className="text-xs text-[#7A7A7A] font-sans leading-relaxed">
              {content.credibilityLine}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
