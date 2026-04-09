"use client"

import Image from "next/image"
import type { ItineraryActivity } from "@/lib/data"
import { ActivityBadge } from "./activity-badge"
import { CommissionTag } from "./commission-tag"
import { getCommissionRange } from "@/lib/monetization"

interface ItineraryCardProps {
  activity: ItineraryActivity
  showPrices: boolean
}

const categoryColors: Record<string, string> = {
  "Stay-Well": "#C6A96B",
  "Eat-Well": "#E8DFC8",
  "Move-Well": "#A1A1A1",
  "Activity-Well": "#7A7A7A",
  "Experience-Well": "#C6A96B",
}

const walkingIcons: Record<string, string> = {
  low: "Walking: Low",
  moderate: "Walking: Moderate", 
  high: "Walking: High",
}

export function ItineraryCard({ activity, showPrices }: ItineraryCardProps) {
  return (
    <div className="w-full bg-[#1A1A1B] rounded-xl overflow-hidden border border-[#2A2A2B] transition-all duration-300 hover:border-[#C6A96B]/30 active:scale-[0.99]">
      {/* Image */}
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={activity.image}
          alt={activity.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1B] via-transparent to-transparent" />
        
        {/* Category tag */}
        <div 
          className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-sans"
          style={{ 
            backgroundColor: `${categoryColors[activity.category] || '#C6A96B'}20`,
            color: categoryColors[activity.category] || '#C6A96B',
            border: `1px solid ${categoryColors[activity.category] || '#C6A96B'}40`
          }}
        >
          {activity.category}
        </div>
        
        {/* Transport indicator */}
        {activity.transportIncluded && (
          <div className="absolute top-4 right-4 p-2 rounded-full bg-[#0F0F10]/80 backdrop-blur-sm">
            <svg className="w-4 h-4 text-[#C6A96B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-5">
        {/* Time - Most prominent */}
        <div className="text-3xl font-serif text-[#C6A96B] mb-2">
          {activity.time}
        </div>
        
        {/* Title */}
        <h3 className="font-serif text-xl text-[#F5F5F5] mb-1">
          {activity.title}
        </h3>
        
        {/* Location */}
        <p className="text-sm text-[#A1A1A1] font-sans mb-4 flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {activity.location}
        </p>
        
        {/* Badges */}
        {activity.badges && activity.badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {activity.badges.map((badge) => (
              <ActivityBadge key={badge} label={badge} />
            ))}
            {activity.walkingIntensity && (
              <ActivityBadge label={walkingIcons[activity.walkingIntensity]} />
            )}
            {activity.accessible && (
              <ActivityBadge label="Accessible" />
            )}
          </div>
        )}
        
        {/* Price & Commission - Only shown when prices toggle is ON */}
        {showPrices && activity.price !== undefined && activity.price > 0 && (
          <div className="pt-4 border-t border-[#2A2A2B] animate-fade-in">
            <div className="flex items-center justify-between">
              <span className="text-lg font-serif text-[#E8DFC8]">
                ${activity.price.toLocaleString()}
              </span>
              {/* Dynamic commission from monetization data based on category */}
              <CommissionTag commission={getCommissionRange(activity.category)} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
