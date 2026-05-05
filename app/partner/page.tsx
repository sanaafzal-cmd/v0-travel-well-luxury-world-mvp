"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Suspense } from "react"
import Link from "next/link"

function PartnerTransitionContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const partnerUrl = searchParams.get("url") || ""
  const partnerName = searchParams.get("name") || "Partner"
  const returnPath = searchParams.get("return") || "/discover"

  if (!partnerUrl) {
    return (
      <main className="min-h-screen bg-[#0F0F10] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#7A7A7A] font-sans">No partner URL provided</p>
          <button
            onClick={() => router.push(returnPath)}
            className="mt-4 px-6 py-2 rounded-full bg-[#2D7A7A] text-white font-sans text-sm hover:bg-[#3D9A9A] transition-colors"
          >
            Go Back
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#0F0F10] flex flex-col">
      {/* Premium Transition Screen */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-md w-full text-center">
          {/* TravelWell Logo Mark */}
          <div className="mb-8">
            <div className="w-16 h-16 mx-auto rounded-full border border-[#C6A96B]/40 flex items-center justify-center">
              <span className="font-serif text-2xl text-[#C6A96B]">TW</span>
            </div>
          </div>

          {/* Decorative Line */}
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C6A96B]/60 to-transparent mx-auto mb-8" />

          {/* Partner Name */}
          <p className="text-[#7A7A7A] font-sans text-sm uppercase tracking-widest mb-3">
            Prime Partner
          </p>
          <h1 className="font-serif text-3xl md:text-4xl text-[#F5F5F5] mb-6">
            {partnerName}
          </h1>

          {/* Trust Message */}
          <p className="text-[#A1A1A1] font-sans text-base md:text-lg leading-relaxed mb-10">
            You are now entering our trusted Prime Partner experience.
          </p>

          {/* Continue to Partner CTA */}
          <a
            href={partnerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#C6A96B] text-[#0F0F10] font-sans font-medium text-base hover:bg-[#D4B87A] transition-all duration-300 shadow-lg shadow-[#C6A96B]/20 hover:shadow-xl hover:shadow-[#C6A96B]/30 hover:-translate-y-0.5"
          >
            Continue to {partnerName}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          {/* Return Reassurance */}
          <div className="mt-10 pt-8 border-t border-[#2A2A2B]">
            <p className="text-[#5A5A5A] font-sans text-sm mb-4">
              Your TravelWell journey continues when you return
            </p>
            <button
              onClick={() => router.push(returnPath)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#2A2A2B] text-[#A1A1A1] font-sans text-sm hover:border-[#3A3A3B] hover:text-[#F5F5F5] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Return to TravelWell
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex items-center justify-center gap-6 text-[#5A5A5A]">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#C6A96B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="font-sans text-xs">Verified Partner</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#C6A96B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="font-sans text-xs">Secure Booking</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Footer */}
      <div className="px-6 py-4 border-t border-[#1A1A1B]">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <Link 
            href="/"
            className="text-[#5A5A5A] font-sans text-xs hover:text-[#7A7A7A] transition-colors"
          >
            TravelWell
          </Link>
          <span className="text-[#3A3A3B] font-sans text-xs">
            Worlds of Adventure
          </span>
        </div>
      </div>
    </main>
  )
}

export default function PartnerPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-[#0F0F10] flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-[#C6A96B] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[#7A7A7A] font-sans">Preparing your experience...</p>
        </div>
      </main>
    }>
      <PartnerTransitionContent />
    </Suspense>
  )
}
