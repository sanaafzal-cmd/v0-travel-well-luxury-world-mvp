"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"

export default function SignInPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    const supabase = createClient()
    setIsLoading(true)
    setError(null)

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      
      if (error) {
        // Handle specific error cases with user-friendly messages
        if (error.message.includes("Invalid login credentials")) {
          setError("Invalid email or password. Please try again.")
        } else if (error.message.includes("Email not confirmed")) {
          setError("Please confirm your email address before signing in.")
        } else if (error.message.includes("rate limit")) {
          setError("Too many attempts. Please wait a moment and try again.")
        } else {
          setError("Something didn't go as planned. Please try again.")
        }
        return
      }
      
      // Use router.replace for immediate navigation after successful login - go to Discovery
      router.replace("/itinerary")
      router.refresh()
    } catch {
      setError("Something didn't go as planned. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#0F0F10] flex">
      {/* Left Side - Cinematic Image (Desktop only) */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <Image
          src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80"
          alt="Paris cityscape at dusk"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F10]/60 via-transparent to-[#0F0F10]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F10] via-transparent to-transparent" />
        
        {/* Overlay Text */}
        <div className="absolute bottom-0 left-0 right-0 p-12">
          <h2 className="font-serif text-4xl text-[#F5F5F5] leading-tight mb-4">
            Continue Your Journey
          </h2>
          <p className="text-[#A1A1A1] font-sans text-lg max-w-md leading-relaxed">
            Your curated travel identity awaits
          </p>
        </div>
      </div>

      {/* Right Side / Mobile - Form */}
      <div className="w-full lg:w-1/2 relative flex items-center justify-center px-6 py-12 lg:px-12">
        {/* Mobile Background */}
        <div className="absolute inset-0 lg:hidden">
          <Image
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80"
            alt="Paris cityscape"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F10]/80 via-[#0F0F10]/90 to-[#0F0F10]" />
        </div>

        {/* Form Card */}
        <div className="relative z-10 w-full max-w-md">
          {/* Mobile Glass Card */}
          <div className="lg:bg-transparent bg-[#1A1A1B]/80 backdrop-blur-xl lg:backdrop-blur-none rounded-2xl lg:rounded-none p-8 lg:p-0 border border-[#2A2A2B]/50 lg:border-0">
            {/* Header */}
            <div className="mb-10">
              <span className="text-[#C6A96B] font-serif text-lg tracking-wider">
                TravelWell
              </span>
              <h1 className="font-serif text-3xl text-[#F5F5F5] mt-6 mb-3">
                Welcome Back
              </h1>
              <p className="text-[#A1A1A1] font-sans">
                Sign in to continue your journey
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSignIn} className="space-y-8">
              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs text-[#7A7A7A] font-sans uppercase tracking-wider">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-0 border-b border-[#2A2A2B] px-0 py-3 text-[#F5F5F5] font-sans text-lg placeholder:text-[#5A5A5A] focus:outline-none focus:border-[#C6A96B] transition-colors duration-200"
                  placeholder="your@email.com"
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label htmlFor="password" className="text-xs text-[#7A7A7A] font-sans uppercase tracking-wider">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent border-0 border-b border-[#2A2A2B] px-0 py-3 text-[#F5F5F5] font-sans text-lg placeholder:text-[#5A5A5A] focus:outline-none focus:border-[#C6A96B] transition-colors duration-200"
                  placeholder="Enter your password"
                />
              </div>

              {/* Error Message */}
              {error && (
                <p className="text-sm text-red-400 font-sans animate-fade-in">
                  {error}
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 rounded-full bg-[#C6A96B] text-[#0F0F10] font-sans font-medium text-base transition-all duration-300 hover:bg-[#E8DFC8] hover:shadow-[0_0_30px_rgba(198,169,107,0.3)] hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Signing in...
                  </span>
                ) : (
                  "Continue Your Journey"
                )}
              </button>
            </form>

            {/* Sign Up Link */}
            <div className="mt-10 pt-8 border-t border-[#2A2A2B]/50">
              <p className="text-center text-sm text-[#A1A1A1] font-sans">
                New to TravelWell?{" "}
                <Link 
                  href="/sign-up" 
                  className="text-[#C6A96B] hover:text-[#E8DFC8] transition-colors underline underline-offset-4"
                >
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
