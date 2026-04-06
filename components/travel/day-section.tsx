"use client"

import type { ItineraryDay } from "@/lib/data"
import { ItineraryCard } from "./itinerary-card"

interface DaySectionProps {
  day: ItineraryDay
  showPrices: boolean
}

export function DaySection({ day, showPrices }: DaySectionProps) {
  return (
    <section className="w-full">
      {/* Day Header */}
      <div className="sticky top-0 z-10 bg-[#0F0F10]/95 backdrop-blur-sm py-6 px-6 border-b border-[#2A2A2B]">
        <span className="text-[#C6A96B] text-sm font-sans uppercase tracking-widest">
          Day {day.day}
        </span>
        <h2 className="font-serif text-2xl text-[#F5F5F5] mt-1">
          {day.date}
        </h2>
      </div>
      
      <div className="px-6 py-8 flex flex-col gap-8">
        {/* Morning */}
        {day.morning.length > 0 && (
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#C6A96B]/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-[#C6A96B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-sans text-sm uppercase tracking-widest text-[#A1A1A1]">
                Morning
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              {day.morning.map((activity) => (
                <ItineraryCard key={activity.id} activity={activity} showPrices={showPrices} />
              ))}
            </div>
          </div>
        )}
        
        {/* Afternoon */}
        {day.afternoon.length > 0 && (
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#E8DFC8]/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-[#E8DFC8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-sans text-sm uppercase tracking-widest text-[#A1A1A1]">
                Afternoon
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              {day.afternoon.map((activity) => (
                <ItineraryCard key={activity.id} activity={activity} showPrices={showPrices} />
              ))}
            </div>
          </div>
        )}
        
        {/* Evening */}
        {day.evening.length > 0 && (
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#7A7A7A]/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-[#7A7A7A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <h3 className="font-sans text-sm uppercase tracking-widest text-[#A1A1A1]">
                Evening
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              {day.evening.map((activity) => (
                <ItineraryCard key={activity.id} activity={activity} showPrices={showPrices} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
