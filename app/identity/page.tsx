"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { PrimaryButton } from "@/components/travel/primary-button"
import type { User } from "@supabase/supabase-js"

// Budget tiers
const budgetTiers = [
  { id: "comfort", label: "Comfort", range: "$2,000 - $5,000" },
  { id: "premium", label: "Premium", range: "$5,000 - $10,000" },
  { id: "luxury", label: "Luxury", range: "$10,000 - $25,000" },
  { id: "ultra", label: "Ultra Luxury", range: "$25,000 - $50,000" },
  { id: "bespoke", label: "Bespoke", range: "$50,000+" },
]

// Wells
const wells = [
  { id: "stay-well", name: "Stay-Well", icon: "🏨" },
  { id: "eat-well", name: "Eat-Well", icon: "🍽️" },
  { id: "move-well", name: "Move-Well", icon: "🚗" },
  { id: "activity-well", name: "Activity-Well", icon: "⛳" },
  { id: "experience-well", name: "Experience-Well", icon: "✨" },
]

export default function IdentityPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Mock data for demo - in production this would come from the database
  const [identityData] = useState({
    travelerType: "Mature Adult (46-60)",
    travelStyle: "Cultural Explorer",
    companions: "Couples",
    budget: "luxury",
    wells: ["stay-well", "eat-well", "experience-well"],
    preferences: ["Fine Dining", "Private Tours", "Spa & Wellness"],
  })

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

  return (
    <main className="min-h-screen bg-[#0F0F10] pb-24">
      {/* Header */}
      <div className="sticky top-16 md:top-[72px] z-20 bg-[#0F0F10]/95 backdrop-blur-md border-b border-[#2A2A2B]">
        <div className="px-5 md:px-6 py-4 flex items-center justify-between">
          <div>
            <span className="text-xs text-[#C6A96B] font-sans uppercase tracking-widest">
              Your Profile
            </span>
            <h1 className="font-serif text-xl text-[#F5F5F5]">
              Travel Identity
            </h1>
          </div>
          <button
            onClick={handleSignOut}
            className="text-sm text-[#7A7A7A] hover:text-[#F5F5F5] font-sans transition-colors"
          >
            Sign Out
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 md:px-6 py-8 max-w-2xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-10">
          <p className="text-[#7A7A7A] font-sans text-sm mb-2">Welcome back</p>
          <p className="text-[#F5F5F5] font-serif text-2xl">
            {user?.email}
          </p>
        </div>

        {/* Identity Card */}
        <div className="space-y-8">
          {/* Traveler Type */}
          <div className="p-6 rounded-xl bg-[#1A1A1B] border border-[#2A2A2B]">
            <h3 className="text-xs text-[#7A7A7A] font-sans uppercase tracking-widest mb-3">
              Traveler Type
            </h3>
            <p className="text-[#F5F5F5] font-serif text-xl">
              {identityData.travelerType}
            </p>
          </div>

          {/* Travel Style */}
          <div className="p-6 rounded-xl bg-[#1A1A1B] border border-[#2A2A2B]">
            <h3 className="text-xs text-[#7A7A7A] font-sans uppercase tracking-widest mb-3">
              Travel Style
            </h3>
            <p className="text-[#F5F5F5] font-serif text-xl">
              {identityData.travelStyle}
            </p>
          </div>

          {/* Companions */}
          <div className="p-6 rounded-xl bg-[#1A1A1B] border border-[#2A2A2B]">
            <h3 className="text-xs text-[#7A7A7A] font-sans uppercase tracking-widest mb-3">
              Travel Companions
            </h3>
            <p className="text-[#F5F5F5] font-serif text-xl">
              {identityData.companions}
            </p>
          </div>

          {/* Budget Tier */}
          <div className="p-6 rounded-xl bg-[#1A1A1B] border border-[#2A2A2B]">
            <h3 className="text-xs text-[#7A7A7A] font-sans uppercase tracking-widest mb-4">
              Budget Tier
            </h3>
            <div className="flex flex-wrap gap-2">
              {budgetTiers.map((tier) => (
                <div
                  key={tier.id}
                  className={`px-4 py-2 rounded-full text-sm font-sans transition-all ${
                    identityData.budget === tier.id
                      ? "bg-[#C6A96B] text-[#0F0F10] font-medium"
                      : "bg-[#2A2A2B] text-[#5A5A5A]"
                  }`}
                >
                  {tier.label}
                </div>
              ))}
            </div>
            <p className="text-[#C6A96B] font-sans text-sm mt-3">
              {budgetTiers.find(t => t.id === identityData.budget)?.range}
            </p>
          </div>

          {/* Wells */}
          <div className="p-6 rounded-xl bg-[#1A1A1B] border border-[#2A2A2B]">
            <h3 className="text-xs text-[#7A7A7A] font-sans uppercase tracking-widest mb-4">
              Your Wells
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {wells.map((well) => (
                <div
                  key={well.id}
                  className={`p-4 rounded-xl text-center transition-all ${
                    identityData.wells.includes(well.id)
                      ? "bg-[#C6A96B]/10 border border-[#C6A96B]/30"
                      : "bg-[#2A2A2B]/50 border border-transparent"
                  }`}
                >
                  <span className="text-2xl block mb-2">{well.icon}</span>
                  <span className={`text-sm font-sans ${
                    identityData.wells.includes(well.id) 
                      ? "text-[#C6A96B]" 
                      : "text-[#5A5A5A]"
                  }`}>
                    {well.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Preferences */}
          <div className="p-6 rounded-xl bg-[#1A1A1B] border border-[#2A2A2B]">
            <h3 className="text-xs text-[#7A7A7A] font-sans uppercase tracking-widest mb-4">
              Preferences
            </h3>
            <div className="flex flex-wrap gap-2">
              {identityData.preferences.map((pref) => (
                <span
                  key={pref}
                  className="px-4 py-2 rounded-full bg-[#C6A96B]/10 text-[#C6A96B] text-sm font-sans border border-[#C6A96B]/20"
                >
                  {pref}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0F0F10]/95 backdrop-blur-sm border-t border-[#2A2A2B] p-6">
        <div className="max-w-lg mx-auto flex gap-4">
          <PrimaryButton 
            variant="secondary"
            onClick={() => router.push("/categories")}
            className="flex-1"
          >
            Explore Wells
          </PrimaryButton>
          <PrimaryButton 
            onClick={() => router.push("/itinerary")}
            className="flex-1"
          >
            View Itinerary
          </PrimaryButton>
        </div>
      </div>
    </main>
  )
}
