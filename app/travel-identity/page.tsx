"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { createClient } from "@/lib/supabase/client"
import { PrimaryButton } from "@/components/travel/primary-button"
import type { User } from "@supabase/supabase-js"

// Budget tiers with full details
const budgetTiers = [
  { id: "luxury", label: "Luxury", range: "$25K+", description: "The pinnacle of refinement" },
  { id: "high-end", label: "High End", range: "$10K - $25K", description: "Elevated experiences" },
  { id: "mid-range", label: "Mid-Range", range: "$5K - $10K", description: "Quality & comfort" },
  { id: "family-friendly", label: "Family", range: "$3K - $8K", description: "Memorable for all" },
  { id: "budget-conscious", label: "Value", range: "$1K - $3K", description: "Smart choices" },
]

// Wells with proper icons
const wells = [
  { id: "stay-well", name: "Stay-Well", description: "Accommodations" },
  { id: "eat-well", name: "Eat-Well", description: "Dining" },
  { id: "move-well", name: "Move-Well", description: "Transportation" },
  { id: "activity-well", name: "Activity-Well", description: "Activities" },
  { id: "experience-well", name: "Experience-Well", description: "Experiences" },
]

// Well icons as SVG components
const WellIcon = ({ wellId, isActive }: { wellId: string; isActive: boolean }) => {
  const color = isActive ? "#C6A96B" : "#5A5A5A"
  
  const icons: Record<string, JSX.Element> = {
    "stay-well": (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    "eat-well": (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
      </svg>
    ),
    "move-well": (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    "activity-well": (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    "experience-well": (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  }
  
  return icons[wellId] || null
}

// Generate personality sentence
const generatePersonalitySentence = (data: typeof mockIdentityData) => {
  const sentences = [
    `A ${data.travelerType.toLowerCase()} who seeks ${data.primaryWorld.toLowerCase()} experiences with ${data.pace.toLowerCase()} rhythm.`,
    `Drawn to ${data.destinationStyle.toLowerCase()} landscapes, finding joy in ${data.emotionalDriver.toLowerCase()}.`,
  ]
  return sentences.join(" ")
}

// Mock data - in production this comes from database
const mockIdentityData = {
  travelerType: "Mature Traveler",
  primaryWorld: "Culture & Heritage",
  secondaryWorlds: ["Culinary", "Wellness"],
  companions: "Romantic Duo",
  budget: "luxury",
  selectedWells: ["stay-well", "eat-well", "experience-well"],
  pace: "Slow & Deliberate",
  structure: "Semi-Planned",
  destinationStyle: "Urban Adventure",
  emotionalDriver: "Connection & Discovery",
  travelFrequency: "4-6 trips per year",
}

export default function IdentityPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [identityData] = useState(mockIdentityData)

  useEffect(() => {
    const checkUser = async () => {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) {
        router.push("/sign-in")
        return
      }
      
      setUser(user)
      setIsLoading(false)
    }
    
    checkUser()
  }, [router])

  const handleSignOut = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push("/")
  }

  if (isLoading) {
    return (
      <main className="min-h-screen bg-[#0F0F10] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#C6A96B] border-t-transparent rounded-full animate-spin" />
      </main>
    )
  }

  const personalitySentence = generatePersonalitySentence(identityData)

  return (
    <main className="min-h-screen bg-[#0F0F10] pb-32">
      {/* Hero Section */}
      <div className="relative h-[45vh] min-h-[360px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80"
          alt="Your Travel Identity"
          fill
          className="object-cover"
          priority
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F10]/60 via-transparent to-[#0F0F10]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F10]/40 to-transparent" />
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-10">
          <div className="max-w-2xl mx-auto w-full">
            {/* Label */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A96B]" />
              <span className="text-xs text-[#C6A96B] font-sans uppercase tracking-[0.2em]">
                Travel Dossier
              </span>
            </div>
            
            {/* Title */}
            <h1 className="font-serif text-4xl md:text-5xl text-[#F5F5F5] leading-[1.1] mb-4">
              Your Travel Identity
            </h1>
            
            {/* Subtitle */}
            <p className="text-base text-[#A1A1A1] font-sans leading-relaxed max-w-lg">
              Designed around your preferences, refined for effortless exploration.
            </p>
          </div>
        </div>
        
        {/* Sign Out */}
        <button
          onClick={handleSignOut}
          className="absolute top-20 right-6 text-sm text-[#7A7A7A] hover:text-[#F5F5F5] font-sans transition-colors"
        >
          Sign Out
        </button>
      </div>

      {/* Content */}
      <div className="px-6 py-10 max-w-2xl mx-auto">
        
        {/* Identity Summary Section */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#C6A96B]/40" />
            <h2 className="text-xs text-[#7A7A7A] font-sans uppercase tracking-[0.2em]">
              Identity Summary
            </h2>
          </div>
          
          <div className="space-y-6">
            {/* Primary Identity */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#C6A96B]/10 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-[#C6A96B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-[#5A5A5A] font-sans uppercase tracking-widest mb-1">
                  Traveler Type
                </p>
                <p className="text-[#F5F5F5] font-serif text-2xl">
                  {identityData.travelerType}
                </p>
              </div>
            </div>
            
            {/* Primary World */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#C6A96B]/10 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-[#C6A96B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-[#5A5A5A] font-sans uppercase tracking-widest mb-1">
                  Primary Identity
                </p>
                <p className="text-[#F5F5F5] font-serif text-2xl">
                  {identityData.primaryWorld}
                </p>
                {identityData.secondaryWorlds.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {identityData.secondaryWorlds.map((world) => (
                      <span
                        key={world}
                        className="px-3 py-1 rounded-full bg-[#2A2A2B] text-[#A1A1A1] text-xs font-sans"
                      >
                        {world}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            {/* Companions */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#C6A96B]/10 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-[#C6A96B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-[#5A5A5A] font-sans uppercase tracking-widest mb-1">
                  Travel Companions
                </p>
                <p className="text-[#F5F5F5] font-serif text-2xl">
                  {identityData.companions}
                </p>
              </div>
            </div>
          </div>
          
          {/* Personality Line */}
          <div className="mt-8 p-5 rounded-xl bg-gradient-to-r from-[#C6A96B]/5 to-transparent border-l-2 border-[#C6A96B]/40">
            <p className="text-[#A1A1A1] font-serif text-lg italic leading-relaxed">
              &ldquo;{personalitySentence}&rdquo;
            </p>
          </div>
        </section>

        {/* Your Preferred Experiences (Wells) */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#C6A96B]/40" />
            <h2 className="text-xs text-[#7A7A7A] font-sans uppercase tracking-[0.2em]">
              Your Preferred Experiences
            </h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {wells.map((well) => {
              const isActive = identityData.selectedWells.includes(well.id)
              return (
                <div
                  key={well.id}
                  className={`
                    p-5 rounded-xl transition-all duration-300
                    ${isActive 
                      ? "bg-[#C6A96B]/10 border border-[#C6A96B]/30 shadow-[0_0_20px_rgba(198,169,107,0.1)]" 
                      : "bg-[#1A1A1B]/50 border border-[#2A2A2B]/50"
                    }
                  `}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`
                      w-12 h-12 rounded-full flex items-center justify-center mb-3
                      ${isActive ? "bg-[#C6A96B]/20" : "bg-[#2A2A2B]/50"}
                    `}>
                      <WellIcon wellId={well.id} isActive={isActive} />
                    </div>
                    <p className={`text-sm font-sans font-medium ${isActive ? "text-[#C6A96B]" : "text-[#5A5A5A]"}`}>
                      {well.name}
                    </p>
                    <p className={`text-xs font-sans mt-1 ${isActive ? "text-[#A1A1A1]" : "text-[#3A3A3B]"}`}>
                      {well.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Budget Tier */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#C6A96B]/40" />
            <h2 className="text-xs text-[#7A7A7A] font-sans uppercase tracking-[0.2em]">
              Experience Level
            </h2>
          </div>
          
          <div className="space-y-2">
            {budgetTiers.map((tier, index) => {
              const isActive = identityData.budget === tier.id
              const isComingSoon = !isActive && index > 0
              
              return (
                <div
                  key={tier.id}
                  className={`
                    relative p-4 rounded-xl transition-all duration-300 flex items-center justify-between
                    ${isActive 
                      ? "bg-gradient-to-r from-[#C6A96B]/15 to-[#C6A96B]/5 border border-[#C6A96B]/40" 
                      : "bg-[#1A1A1B]/30 border border-[#2A2A2B]/30"
                    }
                  `}
                >
                  <div className="flex items-center gap-4">
                    <div className={`
                      w-3 h-3 rounded-full transition-all
                      ${isActive 
                        ? "bg-[#C6A96B] shadow-[0_0_10px_rgba(198,169,107,0.5)]" 
                        : "bg-[#2A2A2B]"
                      }
                    `} />
                    <div>
                      <p className={`text-sm font-sans font-medium ${isActive ? "text-[#F5F5F5]" : "text-[#5A5A5A]"}`}>
                        {tier.label}
                      </p>
                      <p className={`text-xs font-sans ${isActive ? "text-[#A1A1A1]" : "text-[#3A3A3B]"}`}>
                        {tier.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className={`text-sm font-sans ${isActive ? "text-[#C6A96B]" : "text-[#3A3A3B]"}`}>
                      {tier.range}
                    </span>
                    {isActive && (
                      <span className="px-2 py-0.5 rounded-full bg-[#C6A96B] text-[#0F0F10] text-[10px] font-sans font-medium uppercase">
                        Active
                      </span>
                    )}
                    {isComingSoon && !isActive && (
                      <span className="text-[10px] text-[#3A3A3B] font-sans uppercase tracking-wide">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Preferences */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#C6A96B]/40" />
            <h2 className="text-xs text-[#7A7A7A] font-sans uppercase tracking-[0.2em]">
              Travel Preferences
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Pace */}
            <div className="p-5 rounded-xl bg-[#1A1A1B] border border-[#2A2A2B]">
              <p className="text-[10px] text-[#5A5A5A] font-sans uppercase tracking-widest mb-2">
                Pace
              </p>
              <p className="text-[#F5F5F5] font-serif text-lg">
                {identityData.pace}
              </p>
            </div>
            
            {/* Structure */}
            <div className="p-5 rounded-xl bg-[#1A1A1B] border border-[#2A2A2B]">
              <p className="text-[10px] text-[#5A5A5A] font-sans uppercase tracking-widest mb-2">
                Structure
              </p>
              <p className="text-[#F5F5F5] font-serif text-lg">
                {identityData.structure}
              </p>
            </div>
            
            {/* Frequency */}
            <div className="p-5 rounded-xl bg-[#1A1A1B] border border-[#2A2A2B]">
              <p className="text-[10px] text-[#5A5A5A] font-sans uppercase tracking-widest mb-2">
                Frequency
              </p>
              <p className="text-[#F5F5F5] font-serif text-lg">
                {identityData.travelFrequency}
              </p>
            </div>
          </div>
        </section>

        {/* Destination Style */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#C6A96B]/40" />
            <h2 className="text-xs text-[#7A7A7A] font-sans uppercase tracking-[0.2em]">
              Destination Style
            </h2>
          </div>
          
          <div className="p-6 rounded-xl bg-[#1A1A1B] border border-[#2A2A2B]">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#C6A96B]/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#C6A96B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-[#5A5A5A] font-sans uppercase tracking-widest mb-1">
                  Preferred Environment
                </p>
                <p className="text-[#F5F5F5] font-serif text-2xl">
                  {identityData.destinationStyle}
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Emotional Driver */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#C6A96B]/40" />
            <h2 className="text-xs text-[#7A7A7A] font-sans uppercase tracking-[0.2em]">
              What Drives You
            </h2>
          </div>
          
          <div className="p-6 rounded-xl bg-gradient-to-br from-[#C6A96B]/10 via-[#1A1A1B] to-[#1A1A1B] border border-[#C6A96B]/20">
            <p className="text-[#C6A96B] font-serif text-2xl text-center">
              {identityData.emotionalDriver}
            </p>
          </div>
        </section>
      </div>

      {/* Fixed Bottom CTAs */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0F0F10]/95 backdrop-blur-md border-t border-[#2A2A2B] p-6">
        <div className="max-w-lg mx-auto flex gap-4">
          <PrimaryButton 
            variant="secondary"
            onClick={() => router.push("/onboarding")}
            className="flex-1"
          >
            Refine Identity
          </PrimaryButton>
          <PrimaryButton 
            onClick={() => router.push("/categories")}
            className="flex-1"
          >
            Design Your Journey
          </PrimaryButton>
        </div>
      </div>
    </main>
  )
}
