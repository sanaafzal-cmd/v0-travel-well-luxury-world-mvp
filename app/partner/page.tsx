"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Suspense } from "react"

function PartnerFrameContent() {
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
      {/* Header Bar */}
      <div className="sticky top-0 z-50 px-4 py-3 bg-[#1A1A1B] border-b border-[#2A2A2B] flex items-center justify-between gap-4">
        {/* Back Button */}
        <button
          onClick={() => router.push(returnPath)}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#2A2A2B] text-[#F5F5F5] font-sans text-sm hover:bg-[#3A3A3B] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to TravelWell
        </button>

        {/* Partner Name */}
        <div className="flex-1 text-center">
          <span className="text-sm text-[#7A7A7A] font-sans">Viewing</span>
          <span className="ml-2 text-sm text-[#F5F5F5] font-sans font-medium">{partnerName}</span>
        </div>

        {/* Open in New Tab (optional fallback) */}
        <a
          href={partnerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#2A2A2B] text-[#7A7A7A] font-sans text-sm hover:border-[#C6A96B] hover:text-[#C6A96B] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          <span className="hidden sm:inline">Open Full Site</span>
        </a>
      </div>

      {/* Partner iframe */}
      <div className="flex-1 relative">
        <iframe
          src={partnerUrl}
          title={partnerName}
          className="absolute inset-0 w-full h-full border-0"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation-by-user-activation"
          referrerPolicy="no-referrer-when-downgrade"
        />
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
          <p className="text-[#7A7A7A] font-sans">Loading partner...</p>
        </div>
      </main>
    }>
      <PartnerFrameContent />
    </Suspense>
  )
}
