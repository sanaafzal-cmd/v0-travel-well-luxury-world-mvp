"use client"

import { useRouter } from "next/navigation"
import { PrimaryButton } from "@/components/travel/primary-button"

export default function SignUpSuccessPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-[#0F0F10] flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 rounded-full bg-[#C6A96B]/10 border border-[#C6A96B]/30 flex items-center justify-center mx-auto mb-8 animate-scale-in">
          <svg className="w-10 h-10 text-[#C6A96B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </div>
        
        {/* Content */}
        <h1 className="font-serif text-3xl text-[#F5F5F5] mb-4">
          Check Your Email
        </h1>
        <p className="text-[#A1A1A1] font-sans leading-relaxed mb-8">
          We&apos;ve sent a confirmation link to your email address. Click the link to verify your account and begin your journey.
        </p>
        
        {/* Visual Element */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <div className="w-2 h-2 rounded-full bg-[#C6A96B] animate-pulse" style={{ animationDelay: "0ms" }} />
          <div className="w-2 h-2 rounded-full bg-[#C6A96B] animate-pulse" style={{ animationDelay: "150ms" }} />
          <div className="w-2 h-2 rounded-full bg-[#C6A96B] animate-pulse" style={{ animationDelay: "300ms" }} />
        </div>
        
        {/* Actions */}
        <div className="flex flex-col gap-3">
          <PrimaryButton onClick={() => router.push("/sign-in")}>
            Already Confirmed? Sign In
          </PrimaryButton>
          <PrimaryButton variant="ghost" onClick={() => router.push("/")}>
            Return Home
          </PrimaryButton>
        </div>
        
        {/* Help Text */}
        <p className="text-xs text-[#5A5A5A] font-sans mt-8">
          Didn&apos;t receive an email? Check your spam folder or try signing up again.
        </p>
      </div>
    </main>
  )
}
