"use client"

import { useEffect } from "react"
import type { WellPopup } from "@/lib/monetization"

interface WellPopupModalProps {
  isOpen: boolean
  onClose: () => void
  popup: WellPopup | null
  wellName: string
}

export function WellPopupModal({ isOpen, onClose, popup, wellName }: WellPopupModalProps) {
  // Handle escape key
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

  if (!isOpen || !popup) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-5"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
      />
      
      {/* Modal */}
      <div 
        className="relative w-full max-w-md bg-[#141415] rounded-2xl overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle top accent */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#C6A96B]/40 to-transparent" />
        
        <div className="p-8">
          {/* Header */}
          <div className="mb-6">
            <span className="text-xs text-[#C6A96B]/70 font-sans uppercase tracking-widest">
              {wellName}
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-[#F5F5F5] mt-2 leading-tight">
              {popup.title}
            </h2>
          </div>
          
          {/* Description */}
          <p className="text-[#A1A1A1] font-sans text-base leading-relaxed mb-6">
            {popup.description}
          </p>
          
          {/* Commission Range - Highlighted subtly */}
          <div className="mb-6 p-4 rounded-xl bg-[#1A1A1B] border border-[#2A2A2B]">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#7A7A7A] font-sans">Commission Range</span>
              <span className="text-lg font-serif text-[#C6A96B]">{popup.commissionRange}</span>
            </div>
          </div>
          
          {/* Partners */}
          <div className="mb-6">
            <span className="text-xs text-[#7A7A7A] font-sans uppercase tracking-wider">
              Partner Network
            </span>
            <div className="flex flex-wrap gap-2 mt-3">
              {popup.partners.map((partner) => (
                <span 
                  key={partner}
                  className="px-3 py-1.5 rounded-full text-xs font-sans text-[#A1A1A1] bg-[#1A1A1B] border border-[#2A2A2B]"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
          
          {/* Credibility Line */}
          <p className="text-xs text-[#5A5A5A] font-sans leading-relaxed italic">
            {popup.credibilityLine}
          </p>
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="mt-8 w-full py-3 rounded-xl bg-[#1A1A1B] border border-[#2A2A2B] text-[#A1A1A1] font-sans text-sm hover:border-[#C6A96B]/30 hover:text-[#F5F5F5] transition-all duration-300"
          >
            Continue Exploring
          </button>
        </div>
        
        {/* Close X button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-[#5A5A5A] hover:text-[#A1A1A1] transition-colors"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}
