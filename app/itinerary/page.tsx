"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { itinerary } from "@/lib/data"
import { DaySection } from "@/components/travel/day-section"
import { PriceToggle } from "@/components/travel/price-toggle"

export default function ItineraryPage() {
  const router = useRouter()
  const [showPrices, setShowPrices] = useState(false)
  
  // Calculate totals
  const totalPrice = itinerary.reduce((acc, day) => {
    const dayTotal = [
      ...day.morning, 
      ...day.afternoon, 
      ...day.evening
    ].reduce((sum, activity) => sum + (activity.price || 0), 0)
    return acc + dayTotal
  }, 0)
  
  const totalActivities = itinerary.reduce((acc, day) => {
    return acc + day.morning.length + day.afternoon.length + day.evening.length
  }, 0)
  
  return (
    <main className="min-h-screen bg-[#0F0F10]">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-[#0F0F10]/95 backdrop-blur-sm border-b border-[#2A2A2B]">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => router.push("/categories")}
              className="w-10 h-10 rounded-full bg-[#1A1A1B] flex items-center justify-center text-[#A1A1A1] hover:text-[#F5F5F5] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <PriceToggle showPrices={showPrices} onToggle={() => setShowPrices(!showPrices)} />
          </div>
          
          <div>
            <span className="text-xs text-[#C6A96B] font-sans uppercase tracking-widest">
              Your Journey
            </span>
            <h1 className="font-serif text-2xl text-[#F5F5F5] mt-1">
              10-Day Japan Experience
            </h1>
          </div>
          
          {/* Quick stats */}
          <div className="flex items-center gap-6 mt-4 pb-2">
            <div>
              <span className="text-2xl font-serif text-[#F5F5F5]">{itinerary.length}</span>
              <span className="text-sm text-[#A1A1A1] font-sans ml-1">days</span>
            </div>
            <div className="w-px h-6 bg-[#2A2A2B]" />
            <div>
              <span className="text-2xl font-serif text-[#F5F5F5]">{totalActivities}</span>
              <span className="text-sm text-[#A1A1A1] font-sans ml-1">experiences</span>
            </div>
            {showPrices && (
              <>
                <div className="w-px h-6 bg-[#2A2A2B]" />
                <div>
                  <span className="text-2xl font-serif text-[#C6A96B]">${totalPrice.toLocaleString()}</span>
                  <span className="text-sm text-[#A1A1A1] font-sans ml-1">total</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      
      {/* Day Navigation Pills */}
      <div className="sticky top-[165px] z-20 bg-[#0F0F10]/95 backdrop-blur-sm border-b border-[#2A2A2B] px-6 py-3 overflow-x-auto">
        <div className="flex gap-2">
          {itinerary.map((day) => (
            <a
              key={day.day}
              href={`#day-${day.day}`}
              className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-sans bg-[#1A1A1B] text-[#A1A1A1] border border-[#2A2A2B] hover:border-[#C6A96B]/50 hover:text-[#F5F5F5] transition-all"
            >
              Day {day.day}
            </a>
          ))}
        </div>
      </div>
      
      {/* Itinerary Content */}
      <div className="pb-8">
        {itinerary.map((day) => (
          <div key={day.day} id={`day-${day.day}`}>
            <DaySection day={day} showPrices={showPrices} />
          </div>
        ))}
      </div>
      
      {/* Footer */}
      <div className="px-6 py-8 border-t border-[#2A2A2B]">
        <div className="text-center">
          <p className="text-[#A1A1A1] font-sans text-sm mb-4">
            Your personalized luxury journey awaits
          </p>
          <button
            onClick={() => router.push("/categories")}
            className="text-[#C6A96B] font-sans text-sm underline underline-offset-4 hover:text-[#E8DFC8] transition-colors"
          >
            Customize Your Experience
          </button>
        </div>
      </div>
    </main>
  )
}
