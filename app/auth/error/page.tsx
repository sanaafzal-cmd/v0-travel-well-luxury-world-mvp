"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Suspense } from "react"
import { PrimaryButton } from "@/components/travel/primary-button"

function AuthErrorContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const message = searchParams.get('message')
  
  // User-friendly message mapping
  const displayMessage = message || "We couldn't complete your authentication. Please try again."

  return (
    <main className="min-h-screen bg-[#0F0F10] flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="w-16 h-16 rounded-full bg-[#C6A96B]/10 border border-[#C6A96B]/30 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-[#C6A96B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
        </div>
        
        <h1 className="font-serif text-2xl text-[#F5F5F5] mb-3">
          Something didn&apos;t go as planned
        </h1>
        <p className="text-[#A1A1A1] font-sans text-sm mb-8 leading-relaxed">
          {displayMessage}
        </p>
        
        <div className="flex flex-col gap-3">
          <PrimaryButton onClick={() => router.push("/sign-in")}>
            Try Again
          </PrimaryButton>
          <PrimaryButton variant="ghost" onClick={() => router.push("/")}>
            Return Home
          </PrimaryButton>
        </div>
      </div>
    </main>
  )
}

export default function AuthErrorPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-[#0F0F10] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#C6A96B] border-t-transparent rounded-full animate-spin" />
      </main>
    }>
      <AuthErrorContent />
    </Suspense>
  )
}
