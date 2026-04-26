"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { PrimaryButton } from "@/components/travel/primary-button"
import { createClient } from "@/lib/supabase/client"

export default function HomePage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  
  useEffect(() => {
    const checkAuth = async () => {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      setIsAuthenticated(!!user)
      
      // Redirect authenticated users to Discover page
      if (user) {
        router.replace("/discover")
      }
    }
    checkAuth()
  }, [router])
  
  const handleBeginJourney = () => {
    if (isAuthenticated) {
      router.push("/discover")
    } else {
      router.push("/sign-up")
    }
  }
  
  return (
    <main className="min-h-screen bg-[#0F0F10] flex flex-col">
      {/* Hero Section */}
      <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 h-[50vh]">
          <Image
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80"
            alt="Paris Eiffel Tower at golden hour"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F10]/40 via-[#0F0F10]/60 to-[#0F0F10]" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col px-6 pt-16 pb-8">
          {/* Logo / Brand */}
          <div className="mb-8">
            <span className="text-[#C6A96B] font-serif text-lg tracking-wider">
              TravelWell
            </span>
          </div>
          
          {/* Hero Text */}
          <div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-[#F5F5F5] leading-[1.1] mb-6 text-balance">
              <span className="block">Luxury Travel,</span>
              <span className="block text-[#C6A96B]">Reimagined</span>
            </h1>
            <p className="text-base md:text-lg text-[#A1A1A1] font-sans leading-relaxed max-w-lg">
              TravelWell replaces chaotic trip planning with curated, extraordinary experiences — delivering luxury journeys in minutes.
            </p>
            
            {/* OS Signal */}
            <div className="mt-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C6A96B] animate-pulse" />
              <span className="text-xs text-[#C6A96B]/70 font-sans tracking-wide">
                TravelWell Engine Active
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Value Pillars */}
      <div className="px-6 py-12">
        <div className="flex flex-col gap-6">
          <FeatureItem 
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
            }
            title="Expert Curation"
            description="Handpicked experiences curated by luxury travel specialists"
          />
          <FeatureItem 
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            }
            title="Effortless Intelligence"
            description="A structured system that eliminates research and decision fatigue"
          />
          <FeatureItem 
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            }
            title="Premium Access"
            description="Direct connection to the world's most exceptional experiences"
          />
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="px-6 pb-8">
        <div className="flex flex-col gap-4">
          <PrimaryButton onClick={handleBeginJourney}>
            Start Exploring
          </PrimaryButton>
          <PrimaryButton variant="ghost" onClick={() => router.push("/discover")}>
            Explore a Curated Journey
          </PrimaryButton>
        </div>
        
        {/* Investor Demo Strip */}
        <div className="mt-8 p-5 rounded-xl bg-gradient-to-r from-[#C6A96B]/10 via-[#C6A96B]/5 to-[#C6A96B]/10 border border-[#C6A96B]/30 shadow-[0_0_20px_rgba(198,169,107,0.08)]">
          <button
            onClick={() => router.push("/demo")}
            className="w-full flex items-center justify-between"
          >
            <div className="text-left">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-[#C6A96B] font-sans font-medium uppercase tracking-widest">
                  Investor Demo
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-sans font-medium bg-[#C6A96B] text-[#0F0F10]">
                  LIVE
                </span>
              </div>
              <span className="text-sm text-[#F5F5F5] font-sans block">
                Paris Luxury Experience · Revenue Model Preview
              </span>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#C6A96B]/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-[#C6A96B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>
        
        <p className="text-center text-xs text-[#5A5A5A] font-sans mt-6">
          Extraordinary journeys, effortlessly curated
        </p>
      </div>
    </main>
  )
}

function FeatureItem({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode
  title: string
  description: string 
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-[#1A1A1B] border border-[#2A2A2B] flex items-center justify-center text-[#C6A96B] flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-serif text-lg text-[#F5F5F5] mb-1">
          {title}
        </h3>
        <p className="text-sm text-[#A1A1A1] font-sans">
          {description}
        </p>
      </div>
    </div>
  )
}
