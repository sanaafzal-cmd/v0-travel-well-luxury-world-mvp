"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { itinerary, COMMISSION_RANGES } from "@/lib/data"
import { DaySection } from "@/components/travel/day-section"
import { PriceToggle } from "@/components/travel/price-toggle"
import { VCDemoButton } from "@/components/travel/vc-demo-button"

export default function ItineraryPage() {
  const router = useRouter()
  const [showPrices, setShowPrices] = useState(false)
  const [activeDay, setActiveDay] = useState(1)
  const dayRefs = useRef<Map<number, HTMLDivElement>>(new Map())
  const tabsContainerRef = useRef<HTMLDivElement>(null)
  
  // Intersection Observer for scroll-based active day detection
  useEffect(() => {
    // Use a single observer for all day sections
    const visibleDays = new Map<number, number>()
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const dayNum = Number(entry.target.getAttribute('data-day-section'))
          if (entry.isIntersecting) {
            visibleDays.set(dayNum, entry.intersectionRatio)
          } else {
            visibleDays.delete(dayNum)
          }
        })
        
        // Find the day with highest intersection ratio
        if (visibleDays.size > 0) {
          let maxRatio = 0
          let mostVisibleDay = 1
          visibleDays.forEach((ratio, dayNum) => {
            if (ratio > maxRatio) {
              maxRatio = ratio
              mostVisibleDay = dayNum
            }
          })
          setActiveDay(mostVisibleDay)
        }
      },
      {
        rootMargin: '-150px 0px -40% 0px',
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
      }
    )
    
    dayRefs.current.forEach((element) => {
      observer.observe(element)
    })
    
    return () => {
      observer.disconnect()
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
  
  // Party size for revenue calculation
  const partySize = 4 // Two couples
  
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
  
  // Calculate revenue estimates using Trifecta Engine formula
  const calculateRevenue = () => {
    let lowTotal = 0
    let highTotal = 0
    
    itinerary.forEach((day) => {
      const allActivities = [...day.morning, ...day.afternoon, ...day.evening]
      allActivities.forEach((activity) => {
        if (activity.price && activity.commissionRange) {
          lowTotal += activity.price * activity.commissionRange.low
          highTotal += activity.price * activity.commissionRange.high
        }
      })
    })
    
    return { low: lowTotal, high: highTotal }
  }
  
  const revenue = calculateRevenue()
  
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
            <div className="flex items-center gap-3">
              <VCDemoButton variant="compact" />
              <PriceToggle showPrices={showPrices} onToggle={() => setShowPrices(!showPrices)} />
            </div>
          </div>
          
          <div>
            <span className="text-xs text-[#C6A96B] font-sans uppercase tracking-widest">
              Your Journey
            </span>
            <h1 className="font-serif text-xl md:text-2xl text-[#F5F5F5] mt-1">
              7-Day Paris Experience
            </h1>
            <p className="text-xs text-[#7A7A7A] font-sans mt-1">
              Two Couples · Springsteen Concert · June 14-20
            </p>
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
            data-day-section={day.day}
            ref={setDayRef(day.day)}
          >
            <DaySection day={day} showPrices={showPrices} />
          </div>
        ))}
      </div>
      
      {/* Revenue Summary - VC Mode (visible when prices toggle is ON) */}
      {showPrices && (
        <div className="px-5 md:px-6 py-8 border-t border-[#2A2A2B]">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1A1A1B] via-[#1A1A1B] to-[#C6A96B]/5 border border-[#C6A96B]/20">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#C6A96B]/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-[#C6A96B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-xs text-[#C6A96B] font-sans uppercase tracking-widest">
                TravelWell Earnings
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <span className="text-xs text-[#7A7A7A] font-sans">Low Estimate</span>
                <p className="text-2xl font-serif text-[#F5F5F5] mt-1">
                  ${Math.round(revenue.low).toLocaleString()}
                </p>
              </div>
              <div>
                <span className="text-xs text-[#7A7A7A] font-sans">High Estimate</span>
                <p className="text-2xl font-serif text-[#C6A96B] mt-1 drop-shadow-[0_0_8px_rgba(198,169,107,0.3)]">
                  ${Math.round(revenue.high).toLocaleString()}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-[#A1A1A1] font-sans border-t border-[#2A2A2B] pt-4">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#C6A96B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>{partySize} travelers</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#C6A96B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span>{totalActivities} items</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#C6A96B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{itinerary.length} days</span>
              </div>
            </div>
          </div>
          
          <p className="text-center text-xs text-[#5A5A5A] font-sans mt-4 italic">
            Revenue based on commission ranges across 5 Wells
          </p>
        </div>
      )}
      
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
