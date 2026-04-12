"use client"

import { useState } from "react"

interface WellRevenue {
  low: number
  high: number
  items: number
}

interface RevenueSummaryProps {
  partySize: number
  days: number
  totalItems: number
  revenue: {
    low: number
    high: number
  }
  byWell: Record<string, WellRevenue>
}

const wellColors: Record<string, { bg: string; text: string; border: string }> = {
  StayWell: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/30' },
  EatWell: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/30' },
  MoveWell: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/30' },
  ExperienceWell: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/30' },
  ActivityWell: { bg: 'bg-rose-500/10', text: 'text-rose-400', border: 'border-rose-500/30' },
}

const wellLabels: Record<string, string> = {
  StayWell: 'Stay-Well',
  EatWell: 'Eat-Well',
  MoveWell: 'Move-Well',
  ExperienceWell: 'Experience-Well',
  ActivityWell: 'Activity-Well',
}

function formatCurrency(value: number): string {
  if (value >= 1000) {
    return `$${(value / 1000).toFixed(1)}K`
  }
  return `$${Math.round(value).toLocaleString()}`
}

export function RevenueSummary({ 
  partySize, 
  days, 
  totalItems, 
  revenue, 
  byWell 
}: RevenueSummaryProps) {
  const [isExpanded, setIsExpanded] = useState(true)
  
  // Calculate percentages for the bar visualization
  const maxRevenue = revenue.high
  const wellEntries = Object.entries(byWell).filter(([_, data]) => data.items > 0)

  return (
    <div className="bg-gradient-to-b from-[#1A1A1B] to-[#151516] border border-[#2A2A2B] rounded-2xl overflow-hidden shadow-xl">
      {/* Header with main revenue display */}
      <div className="px-6 py-6 border-b border-[#2A2A2B]">
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="text-xs text-[#C6A96B] font-sans uppercase tracking-widest">
              TravelWell Revenue
            </span>
            <h3 className="font-serif text-lg text-[#F5F5F5] mt-1">
              Trip Monetization Summary
            </h3>
          </div>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-8 h-8 rounded-full bg-[#2A2A2B] flex items-center justify-center text-[#7A7A7A] hover:text-[#F5F5F5] transition-colors"
          >
            <svg 
              className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        
        {/* Big revenue numbers */}
        <div className="flex items-end gap-3">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl md:text-5xl font-serif text-[#C6A96B] drop-shadow-[0_0_20px_rgba(198,169,107,0.3)]">
              {formatCurrency(revenue.low)}
            </span>
            <span className="text-2xl md:text-3xl font-serif text-[#7A7A7A]">—</span>
            <span className="text-4xl md:text-5xl font-serif text-[#C6A96B] drop-shadow-[0_0_20px_rgba(198,169,107,0.3)]">
              {formatCurrency(revenue.high)}
            </span>
          </div>
        </div>
        
        <p className="text-sm text-[#7A7A7A] font-sans mt-2">
          Estimated commission revenue from this itinerary
        </p>
      </div>
      
      {/* Key metrics strip */}
      <div className="grid grid-cols-3 border-b border-[#2A2A2B]">
        <div className="px-5 py-4 border-r border-[#2A2A2B]">
          <span className="block text-2xl font-serif text-[#F5F5F5]">{partySize}</span>
          <span className="text-xs text-[#7A7A7A] font-sans uppercase tracking-wider">Travelers</span>
        </div>
        <div className="px-5 py-4 border-r border-[#2A2A2B]">
          <span className="block text-2xl font-serif text-[#F5F5F5]">{days}</span>
          <span className="text-xs text-[#7A7A7A] font-sans uppercase tracking-wider">Days</span>
        </div>
        <div className="px-5 py-4">
          <span className="block text-2xl font-serif text-[#F5F5F5]">{totalItems}</span>
          <span className="text-xs text-[#7A7A7A] font-sans uppercase tracking-wider">Items</span>
        </div>
      </div>
      
      {/* Expanded breakdown */}
      {isExpanded && (
        <div className="px-6 py-5 space-y-5">
          {/* Revenue by Well */}
          <div>
            <h4 className="text-xs text-[#7A7A7A] font-sans uppercase tracking-wider mb-4">
              Revenue by Well
            </h4>
            
            <div className="space-y-3">
              {wellEntries
                .sort((a, b) => b[1].high - a[1].high)
                .map(([well, data]) => {
                  const colors = wellColors[well]
                  const percentage = maxRevenue > 0 ? (data.high / maxRevenue) * 100 : 0
                  
                  return (
                    <div key={well} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded text-xs font-sans ${colors.bg} ${colors.text} ${colors.border} border`}>
                            {wellLabels[well]}
                          </span>
                          <span className="text-xs text-[#5A5A5A]">
                            {data.items} item{data.items !== 1 ? 's' : ''}
                          </span>
                        </div>
                        <span className="text-sm font-sans text-[#F5F5F5]">
                          {formatCurrency(data.low)} — {formatCurrency(data.high)}
                        </span>
                      </div>
                      
                      {/* Progress bar */}
                      <div className="h-2 bg-[#2A2A2B] rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${colors.bg.replace('/10', '/40')} transition-all duration-500`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
          
          {/* Revenue multiplier explanation */}
          <div className="pt-4 border-t border-[#2A2A2B]">
            <h4 className="text-xs text-[#7A7A7A] font-sans uppercase tracking-wider mb-3">
              Revenue Multipliers
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-[#0F0F10] border border-[#2A2A2B]">
                <div className="flex items-center gap-2 mb-1">
                  <svg className="w-4 h-4 text-[#C6A96B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-xs text-[#A1A1A1] font-sans">Party Size</span>
                </div>
                <span className="text-lg font-serif text-[#F5F5F5]">×{partySize}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0F0F10] border border-[#2A2A2B]">
                <div className="flex items-center gap-2 mb-1">
                  <svg className="w-4 h-4 text-[#C6A96B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs text-[#A1A1A1] font-sans">Daily Stacking</span>
                </div>
                <span className="text-lg font-serif text-[#F5F5F5]">{days} days</span>
              </div>
            </div>
          </div>
          
          {/* VC-focused callout */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-[#C6A96B]/10 via-[#C6A96B]/5 to-[#C6A96B]/10 border border-[#C6A96B]/20">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#C6A96B] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <p className="text-sm text-[#C6A96B] font-sans font-medium">
                  Multi-item monetization engine
                </p>
                <p className="text-xs text-[#A1A1A1] font-sans mt-1">
                  Every itinerary activates all 5 Wells, generating 4-6 monetizable events per day across StayWell, EatWell, MoveWell, ExperienceWell, and ActivityWell.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Footer */}
      <div className="px-6 py-4 bg-[#0F0F10] border-t border-[#2A2A2B]">
        <p className="text-xs text-[#5A5A5A] font-sans text-center">
          Revenue estimates based on CJ Affiliate commission ranges. Actual revenue may vary.
        </p>
      </div>
    </div>
  )
}
