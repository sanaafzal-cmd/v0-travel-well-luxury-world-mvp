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
    <main className="min-h-screen bg-[#FAF9F6] flex flex-col">
      {/* Hero Section - Full viewport cinematic */}
      <div className="relative min-h-[85vh] flex items-center">
        {/* Background Image - Mykonos/aspirational destination */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1920&q=85"
            alt="Stunning coastal destination with crystal blue waters"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Enhanced cinematic overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/30" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="max-w-2xl">
            {/* Brand badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#2D7A7A] animate-pulse" />
              <span className="text-sm font-sans text-white/90 tracking-wide">
                TravelWell Engine Active
              </span>
            </div>
            
            {/* Main Heading */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 text-balance">
              <span className="block">TravelWell</span>
              <span className="block text-[#C6A96B]">Worlds of Adventure</span>
            </h1>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-white/80 font-serif mb-4">
              Your Journey Starts Here
            </p>
            
            <p className="text-base md:text-lg text-white/70 font-sans leading-relaxed max-w-lg mb-10">
              Premium curated experiences across the globe. From hidden gems to iconic destinations, discover extraordinary journeys crafted for the discerning traveler.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleBeginJourney}
                className="px-8 py-4 rounded-full bg-[#2D7A7A] text-white font-sans font-semibold text-lg hover:bg-[#3D9A9A] transition-all duration-300 shadow-lg shadow-[#2D7A7A]/30"
              >
                Design Your Next Adventure
              </button>
              <button
                onClick={() => router.push("/discover")}
                className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white font-sans font-medium text-lg border border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                Explore Experiences
              </button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/60 mt-16">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/30 to-white/60" />
          <span className="text-xs font-sans tracking-widest uppercase">Scroll to Explore</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
      
      {/* Value Pillars Section */}
      <section className="bg-[#FAF9F6] py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm text-[#2D7A7A] font-sans uppercase tracking-widest">
              Why TravelWell
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1B] mt-3 mb-4">
              Travel, Elevated
            </h2>
            <p className="text-[#6B6B6B] font-sans text-lg max-w-2xl mx-auto">
              We combine expert curation with intelligent technology to create seamless, extraordinary journeys.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
              }
              title="Expert Curation"
              description="Handpicked experiences from luxury travel specialists who know every destination intimately."
            />
            <FeatureCard 
              icon={
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              }
              title="Effortless Intelligence"
              description="A structured system that eliminates research fatigue and delivers perfect itineraries in minutes."
            />
            <FeatureCard 
              icon={
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              }
              title="Global Access"
              description="Direct connection to the world's most exceptional experiences, from hidden gems to iconic destinations."
            />
          </div>
        </div>
      </section>
      
      {/* Investor Demo Strip */}
      <section className="bg-[#1A1A1B] py-8 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => router.push("/demo")}
            className="w-full flex items-center justify-between p-6 rounded-2xl bg-gradient-to-r from-[#C6A96B]/20 via-[#C6A96B]/10 to-[#C6A96B]/20 border border-[#C6A96B]/30 hover:border-[#C6A96B]/50 transition-all duration-300"
          >
            <div className="text-left">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs text-[#C6A96B] font-sans font-semibold uppercase tracking-widest">
                  Investor Demo
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-sans font-bold bg-[#C6A96B] text-[#1A1A1B]">
                  LIVE
                </span>
              </div>
              <span className="text-lg text-[#F5F5F5] font-sans block">
                Paris Luxury Experience · Revenue Model Preview
              </span>
            </div>
            <div className="w-12 h-12 rounded-full bg-[#C6A96B]/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-[#C6A96B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[#FAF9F6] py-12 px-6 lg:px-12 border-t border-[#E8E4DC]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-[#6B6B6B] font-sans">
            Extraordinary journeys, effortlessly curated
          </p>
        </div>
      </footer>
    </main>
  )
}

function FeatureCard({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode
  title: string
  description: string 
}) {
  return (
    <div className="p-8 rounded-2xl bg-white border border-[#E8E4DC] hover:shadow-xl hover:shadow-[#2D7A7A]/5 transition-all duration-300">
      <div className="w-14 h-14 rounded-2xl bg-[#2D7A7A]/10 flex items-center justify-center text-[#2D7A7A] mb-6">
        {icon}
      </div>
      <h3 className="font-serif text-xl text-[#1A1A1B] mb-3">
        {title}
      </h3>
      <p className="text-[#6B6B6B] font-sans leading-relaxed">
        {description}
      </p>
    </div>
  )
}
