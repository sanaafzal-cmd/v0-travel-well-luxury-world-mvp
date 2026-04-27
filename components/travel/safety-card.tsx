"use client"

import { useState } from "react"

export function SafetyCard() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Safety Button - Green Cross */}
      <button
        onClick={() => setIsOpen(true)}
        className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300"
        aria-label="TravelWell Safety"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative w-full max-w-md bg-[#1A1A1B] rounded-2xl border border-[#2A2A2B] shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="px-6 py-5 border-b border-[#2A2A2B] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <h2 className="font-serif text-xl text-[#F5F5F5]">
                  TravelWell Safety
                </h2>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-[#2A2A2B] flex items-center justify-center text-[#7A7A7A] hover:text-[#F5F5F5] hover:bg-[#3A3A3B] transition-colors"
                aria-label="Close"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="px-6 py-8">
              {/* Coming Soon Badge */}
              <div className="flex justify-center mb-6">
                <span className="px-4 py-2 rounded-full text-sm font-sans bg-[#C6A96B]/10 text-[#C6A96B] border border-[#C6A96B]/30">
                  Coming Soon
                </span>
              </div>

              <p className="text-[#A1A1A1] font-sans text-sm text-center leading-relaxed mb-6">
                Enhanced safety features and emergency resources are being developed to keep you protected during your travels.
              </p>

              {/* Disclaimer */}
              <div className="p-4 rounded-xl bg-[#0F0F10] border border-[#2A2A2B]">
                <p className="text-[#7A7A7A] font-sans text-xs leading-relaxed">
                  TravelWell provides general safety information for awareness only. TravelWell does not track your physical location, verify proximity, or guarantee accuracy. Always follow local authorities and emergency services.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-[#2A2A2B]">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full py-3 rounded-full bg-[#2A2A2B] text-[#F5F5F5] font-sans text-sm hover:bg-[#3A3A3B] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
