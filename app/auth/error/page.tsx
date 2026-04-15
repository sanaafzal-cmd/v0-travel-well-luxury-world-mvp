"use client"

import { useRouter } from "next/navigation"
import { PrimaryButton } from "@/components/travel/primary-button"

export default function AuthErrorPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-[#0F0F10] flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="w-16 h-16 rounded-full bg-[#C6A96B]/10 border border-[#C6A96B]/30 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-[#C6A96B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
        </div>
        
        <h1 className="font-serif text-2xl text-[#F5F5F5] mb-3">
          Something went wrong
        </h1>
        <p className="text-[#A1A1A1] font-sans text-sm mb-8 leading-relaxed">
          We couldn&apos;t complete your authentication. Please try again or contact support if the problem persists.
        </p>
        
        <div className="flex flex-col gap-3">
          <PrimaryButton onClick={() => router.push("/sign-up")}>
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
