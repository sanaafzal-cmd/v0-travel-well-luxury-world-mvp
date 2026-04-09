"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { itinerary } from "@/lib/data"
import { DaySection } from "@/components/travel/day-section"
import { PriceToggle } from "@/components/travel/price-toggle"

export default function ItineraryPage() {
  const router = useRouter()
  const [showPrices, setShowPrices] = useState(false)
  const [activeDay, setActiveDay] = useState(1)
  const dayRefs = useRef<Map<number, HTMLDivElement>>(new Map())
  const tabsContainerRef = useRef<HTMLDivElement>(null)
  
  // Intersection Observer for scroll-based active day detection
  useEffect(() => {
    const observers: IntersectionObserver[] = []
    
    dayRefs.current.forEach((element, dayNum) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
              setActiveDay(dayNum)
            }
          })
        },
        {
          rootMargin: '-200px 0px -50% 0px',
          threshold: [0.3, 0.5, 0.7]
        }
      )
      observer.observe(element)
      observers.push(observer)
    })
    
    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])
  
  // Scroll active tab into view
  useEffect(() => {
    if (tabsContainerRef.current) {
      const activeTab = tabsContainerRef.current.querySelector(`[data-day="${activeDay}"]`)
      if (activeTab) {
        activeTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
      }
    }
  }, [activeDay])
  
  const handleTabClick = (day: number) => {
    const element = dayRefs.current.get(day)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  
  const setDayRef = (day: number) => (el: HTMLDivElement | null) => {
    if (el) {
      dayRefs.current.set(day, el)
    }
  }
  
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
      {/* Sticky Header + Day Tabs Container */}
      <div className="sticky top-0 z-30 bg-[#0F0F10]/95 backdrop-blur-md">
        {/* Header */}
        <div className="px-5 md:px-6 py-4 border-b border-[#2A2A2B]">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => router.push("/categories")}
              className="w-10 h-10 rounded-full bg-[#1A1A1B] border border-[#2A2A2B] flex items-center justify-center text-[#A1A1A1] hover:text-[#F5F5F5] hover:border-[#3A3A3B] transition-colors"
              aria-label="Go back"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <PriceToggle showPrices={showPrices} onToggle={() => setShowPrices(!showPrices)} />
          </div>
          
          <div>
            <span className="text-xs text-[#C6A96B] font-sans uppercase tracking-widest">
              Your Journey
            </span>
            <h1 className="font-serif text-xl md:text-2xl text-[#F5F5F5] mt-1">
              10-Day Japan Experience
            </h1>
          </div>
          
          {/* Quick stats */}
          <div className="flex items-center gap-4 md:gap-6 mt-4">
            <div>
              <span className="text-xl md:text-2xl font-serif text-[#F5F5F5]">{itinerary.length}</span>
              <span className="text-xs md:text-sm text-[#A1A1A1] font-sans ml-1">days</span>
            </div>
            <div className="w-px h-5 bg-[#2A2A2B]" />
            <div>
              <span className="text-xl md:text-2xl font-serif text-[#F5F5F5]">{totalActivities}</span>
              <span className="text-xs md:text-sm text-[#A1A1A1] font-sans ml-1">experiences</span>
            </div>
            {showPrices && (
              <>
                <div className="w-px h-5 bg-[#2A2A2B]" />
                <div>
                  <span className="text-xl md:text-2xl font-serif text-[#C6A96B]">${totalPrice.toLocaleString()}</span>
                  <span className="text-xs md:text-sm text-[#A1A1A1] font-sans ml-1">total</span>
                </div>
              </>
            )}
          </div>
        </div>
        
        {/* Day Navigation Tabs - inside sticky container */}
        <div 
          ref={tabsContainerRef}
          className="px-5 md:px-6 py-3 overflow-x-auto scrollbar-hide border-b border-[#2A2A2B]"
        >
          <div className="flex gap-2 min-w-max">
            {itinerary.map((day) => {
              const isActive = activeDay === day.day
              return (
                <button
                  key={day.day}
                  data-day={day.day}
                  onClick={() => handleTabClick(day.day)}
                  className={`
                    flex-shrink-0 px-4 md:px-5 py-2 md:py-2.5 rounded-full text-sm font-sans transition-all duration-300 ease-out
                    focus:outline-none focus:ring-2 focus:ring-[#C6A96B]/50 focus:ring-offset-2 focus:ring-offset-[#0F0F10]
                    ${isActive 
                      ? 'bg-[#C6A96B]/10 text-[#C6A96B] border border-[#C6A96B]/40 font-medium shadow-sm shadow-[#C6A96B]/10' 
                      : 'bg-[#1A1A1B] text-[#A1A1A1] border border-[#2A2A2B] hover:border-[#C6A96B]/30 hover:text-[#F5F5F5]'
                    }
                  `}
                >
                  Day {day.day}
                </button>
              )
            })}
          </div>
        </div>
      </div>
      
      {/* Itinerary Content */}
      <div className="pb-8">
        {itinerary.map((day) => (
          <div 
            key={day.day} 
            id={`day-${day.day}`}
            ref={setDayRef(day.day)}
          >
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
