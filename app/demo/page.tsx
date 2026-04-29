"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { 
  parisItinerary, 
  defaultTravelParty, 
  calculateTripRevenue,
  type TravelParty,
  type ParisItineraryDay,
  type ItineraryItem
} from "@/lib/paris-itinerary"
import { PeopleLayer } from "@/components/travel/people-layer"
import { RevenueSummary } from "@/components/travel/revenue-summary"
import { SafetyCard } from "@/components/travel/safety-card"

const wellColors: Record<string, string> = {
  StayWell: 'text-blue-400',
  EatWell: 'text-amber-400',
  MoveWell: 'text-emerald-400',
  ExperienceWell: 'text-purple-400',
  ActivityWell: 'text-rose-400',
}

const wellBgColors: Record<string, string> = {
  StayWell: 'bg-blue-500/10 border-blue-500/30',
  EatWell: 'bg-amber-500/10 border-amber-500/30',
  MoveWell: 'bg-emerald-500/10 border-emerald-500/30',
  ExperienceWell: 'bg-purple-500/10 border-purple-500/30',
  ActivityWell: 'bg-rose-500/10 border-rose-500/30',
}

const wellLabels: Record<string, string> = {
  StayWell: 'Stay-Well',
  EatWell: 'Eat-Well',
  MoveWell: 'Move-Well',
  ExperienceWell: 'Experience-Well',
  ActivityWell: 'Activity-Well',
}

function formatPrice(price: number): string {
  if (price >= 1000) {
    return `$${(price / 1000).toFixed(0)}K`
  }
  return `$${price.toLocaleString()}`
}

function formatCommission(low: number, high: number): string {
  return `${(low * 100).toFixed(0)}–${(high * 100).toFixed(0)}%`
}

function ItineraryItemCard({ item, partySize }: { item: ItineraryItem; partySize: number }) {
  const totalPrice = item.pricePerPerson ? item.price * partySize : item.price
  const commissionLow = totalPrice * item.commissionRange.low
  const commissionHigh = totalPrice * item.commissionRange.high
  
  return (
    <div className="flex gap-4 p-4 rounded-xl bg-[#1A1A1B] border border-[#2A2A2B] hover:border-[#3A3A3B] transition-colors">
      {/* Image */}
      <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden flex-shrink-0">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
        {/* Well badge */}
        <div className={`absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded text-[10px] font-sans font-medium ${wellBgColors[item.well]} ${wellColors[item.well]} border`}>
          {wellLabels[item.well].split('-')[0]}
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <span className="text-xs text-[#7A7A7A] font-sans">{item.time}</span>
            <h4 className="text-sm font-sans font-medium text-[#F5F5F5] truncate">{item.title}</h4>
            <p className="text-xs text-[#7A7A7A] font-sans truncate">{item.location}</p>
          </div>
          
          {/* Price and commission */}
          {item.price > 0 && (
            <div className="text-right flex-shrink-0">
              <span className="text-sm font-sans text-[#F5F5F5]">{formatPrice(totalPrice)}</span>
              {item.pricePerPerson && (
                <span className="text-xs text-[#5A5A5A] block">×{partySize}</span>
              )}
            </div>
          )}
        </div>
        
        {/* Badges */}
        {item.badges && item.badges.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {item.badges.slice(0, 3).map((badge) => (
              <span 
                key={badge}
                className="px-2 py-0.5 rounded-full text-[10px] font-sans bg-[#2A2A2B] text-[#A1A1A1]"
              >
                {badge}
              </span>
            ))}
          </div>
        )}
        
        {/* Commission indicator */}
        {item.price > 0 && (
          <div className="mt-2 flex items-center gap-2">
            <span className="text-[10px] text-[#5A5A5A] font-sans uppercase">Commission:</span>
            <span className="text-xs text-[#C6A96B] font-sans font-medium">
              {formatPrice(commissionLow)} — {formatPrice(commissionHigh)}
            </span>
            <span className="text-[10px] text-[#5A5A5A] font-sans">
              ({formatCommission(item.commissionRange.low, item.commissionRange.high)})
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

function DaySection({ day, partySize }: { day: ParisItineraryDay; partySize: number }) {
  return (
    <section className="border-t border-[#2A2A2B]">
      {/* Day header */}
      <div className="px-5 md:px-6 py-5 bg-[#0F0F10] sticky top-[220px] z-10">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-[#C6A96B] font-sans uppercase tracking-widest">
              Day {day.day}
            </span>
            <h2 className="font-serif text-lg text-[#F5F5F5] mt-0.5">{day.headline}</h2>
            <p className="text-xs text-[#7A7A7A] font-sans">{day.date}</p>
          </div>
          <div className="text-right">
            <span className="text-xs text-[#5A5A5A] font-sans">{day.items.length} items</span>
          </div>
        </div>
      </div>
      
      {/* Day items */}
      <div className="px-5 md:px-6 py-4 space-y-3">
        {day.items.map((item) => (
          <ItineraryItemCard key={item.id} item={item} partySize={partySize} />
        ))}
      </div>
    </section>
  )
}

export default function VCDemoPage() {
  const router = useRouter()
  const [party, setParty] = useState<TravelParty>(defaultTravelParty)
  const [activeDay, setActiveDay] = useState(1)
  const [showRevenue, setShowRevenue] = useState(true)
  const dayRefs = useRef<Map<number, HTMLDivElement>>(new Map())
  const tabsContainerRef = useRef<HTMLDivElement>(null)
  
  const partySize = party.adults.length + party.children.length
  const revenueData = calculateTripRevenue(parisItinerary, partySize)
  
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
          rootMargin: '-250px 0px -50% 0px',
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

  return (
    <main className="min-h-screen bg-[#0F0F10]">
      {/* Sticky Header */}
      <div className="sticky top-16 md:top-[72px] z-30 bg-[#0F0F10]/95 backdrop-blur-md">
        {/* Header */}
        <div className="px-5 md:px-6 py-4 border-b border-[#2A2A2B]">
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={() => router.push("/")}
              className="w-10 h-10 rounded-full bg-[#1A1A1B] border border-[#2A2A2B] flex items-center justify-center text-[#A1A1A1] hover:text-[#F5F5F5] hover:border-[#3A3A3B] transition-colors"
              aria-label="Go back"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex items-center gap-3">
              <SafetyCard destination="Paris, France" />
              <span className="text-xs text-[#7A7A7A] font-sans hidden sm:inline">Revenue</span>
              <button
                onClick={() => setShowRevenue(!showRevenue)}
                className={`
                  relative w-14 h-7 rounded-full transition-all duration-300 ease-out
                  ${showRevenue 
                    ? 'bg-[#C6A96B] shadow-[0_0_12px_rgba(198,169,107,0.4)]' 
                    : 'bg-[#2A2A2B] border border-[#3A3A3B]'
                  }
                `}
                role="switch"
                aria-checked={showRevenue}
                aria-label="Toggle revenue mode"
              >
                <span
                  className={`
                    absolute top-1 w-5 h-5 rounded-full transition-all duration-300 ease-out
                    ${showRevenue 
                      ? 'left-8 bg-[#0F0F10]' 
                      : 'left-1 bg-[#7A7A7A]'
                    }
                  `}
                />
              </button>
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#C6A96B] font-sans uppercase tracking-widest">
                VC Demo
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-sans bg-[#C6A96B]/10 text-[#C6A96B] border border-[#C6A96B]/30">
                LIVE
              </span>
            </div>
            <h1 className="font-serif text-xl md:text-2xl text-[#F5F5F5] mt-1">
              Paris Springsteen Trip
            </h1>
            <p className="text-sm text-[#7A7A7A] font-sans mt-0.5">
              Miami → Paris → Miami • Private Jet • {parisItinerary.length} Days
            </p>
          </div>
        </div>
        
        {/* Day Navigation Tabs */}
        <div 
          ref={tabsContainerRef}
          className="px-5 md:px-6 py-3 overflow-x-auto scrollbar-hide border-b border-[#2A2A2B]"
        >
          <div className="flex gap-2 min-w-max">
            {parisItinerary.map((day) => {
              const isActive = activeDay === day.day
              return (
                <button
                  key={day.day}
                  data-day={day.day}
                  onClick={() => handleTabClick(day.day)}
                  className={`
                    flex-shrink-0 px-4 py-2 rounded-full text-sm font-sans transition-all duration-300 ease-out
                    focus:outline-none focus:ring-2 focus:ring-[#C6A96B]/50 focus:ring-offset-2 focus:ring-offset-[#0F0F10]
                    ${isActive 
                      ? 'bg-[#C6A96B]/10 text-[#C6A96B] border border-[#C6A96B]/40 font-medium' 
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
      
      {/* People Layer */}
      <div className="px-5 md:px-6 py-4">
        <PeopleLayer 
          party={party} 
          onUpdate={setParty} 
          isEditable={true}
        />
      </div>
      
      {/* Revenue Summary - conditionally shown */}
      {showRevenue && (
        <div className="px-5 md:px-6 pb-4">
          <RevenueSummary
            partySize={partySize}
            days={parisItinerary.length}
            totalItems={revenueData.totalItems}
            revenue={{ low: revenueData.low, high: revenueData.high }}
            byWell={revenueData.byWell}
          />
        </div>
      )}
      
      {/* Itinerary Content */}
      <div className="pb-8">
        {parisItinerary.map((day) => (
          <div 
            key={day.day}
            ref={setDayRef(day.day)}
          >
            <DaySection day={day} partySize={partySize} />
          </div>
        ))}
      </div>
      
      {/* Sticky Revenue Bar at bottom */}
      {showRevenue && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0F0F10]/95 backdrop-blur-md border-t border-[#2A2A2B] px-5 py-3 safe-area-bottom">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <div>
              <span className="text-xs text-[#7A7A7A] font-sans">TravelWell Revenue</span>
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-serif text-[#C6A96B]">
                  ${Math.round(revenueData.low).toLocaleString()}
                </span>
                <span className="text-sm text-[#5A5A5A]">—</span>
                <span className="text-lg font-serif text-[#C6A96B]">
                  ${Math.round(revenueData.high).toLocaleString()}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <span className="text-xs text-[#7A7A7A] font-sans">{partySize} travelers</span>
                <span className="text-xs text-[#5A5A5A] font-sans block">{revenueData.totalItems} items</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#C6A96B] flex items-center justify-center">
                <svg className="w-5 h-5 text-[#0F0F10]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
