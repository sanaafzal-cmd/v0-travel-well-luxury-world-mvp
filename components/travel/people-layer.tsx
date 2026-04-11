"use client"

import { useState } from "react"
import type { TravelParty, TravelerInfo } from "@/lib/paris-itinerary"

interface PeopleLayerProps {
  party: TravelParty
  onUpdate: (party: TravelParty) => void
  isEditable?: boolean
}

const partyTypeOptions = [
  { id: 'couple', label: 'Couple', icon: '2', description: '2 travelers' },
  { id: 'family', label: 'Family', icon: '3-5', description: '3-5 travelers' },
  { id: 'group', label: 'Group', icon: '4+', description: '4+ travelers' },
  { id: 'multi-couple', label: 'Multiple Couples', icon: '4+', description: '2+ couples' },
] as const

export function PeopleLayer({ party, onUpdate, isEditable = false }: PeopleLayerProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  const totalTravelers = party.adults.length + party.children.length
  
  const updateTraveler = (index: number, field: 'firstName' | 'lastName', value: string) => {
    const newAdults = [...party.adults]
    newAdults[index] = { ...newAdults[index], [field]: value }
    onUpdate({ ...party, adults: newAdults })
  }
  
  const addTraveler = () => {
    onUpdate({
      ...party,
      adults: [...party.adults, { firstName: '', lastName: '' }]
    })
  }
  
  const removeTraveler = (index: number) => {
    if (party.adults.length > 1) {
      const newAdults = party.adults.filter((_, i) => i !== index)
      onUpdate({ ...party, adults: newAdults })
    }
  }
  
  const setPartyType = (type: TravelParty['partyType']) => {
    onUpdate({ ...party, partyType: type })
  }

  return (
    <div className="bg-[#1A1A1B] border border-[#2A2A2B] rounded-2xl overflow-hidden">
      {/* Header - Always visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-5 py-4 flex items-center justify-between hover:bg-[#222223] transition-colors"
      >
        <div className="flex items-center gap-4">
          {/* Traveler avatars */}
          <div className="flex -space-x-2">
            {party.adults.slice(0, 4).map((traveler, idx) => (
              <div
                key={idx}
                className="w-9 h-9 rounded-full bg-gradient-to-br from-[#C6A96B] to-[#8B7355] flex items-center justify-center text-[#0F0F10] text-sm font-medium border-2 border-[#1A1A1B]"
              >
                {traveler.firstName ? traveler.firstName[0].toUpperCase() : (idx + 1)}
              </div>
            ))}
            {party.adults.length > 4 && (
              <div className="w-9 h-9 rounded-full bg-[#2A2A2B] flex items-center justify-center text-[#A1A1A1] text-xs font-medium border-2 border-[#1A1A1B]">
                +{party.adults.length - 4}
              </div>
            )}
          </div>
          
          <div className="text-left">
            <p className="text-[#F5F5F5] font-sans text-sm font-medium">
              {party.groupName || `${totalTravelers} Travelers`}
            </p>
            <p className="text-[#7A7A7A] font-sans text-xs">
              {party.adults.length} adult{party.adults.length !== 1 ? 's' : ''}
              {party.children.length > 0 && `, ${party.children.length} child${party.children.length !== 1 ? 'ren' : ''}`}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          {/* Party size indicator */}
          <div className="px-3 py-1.5 rounded-full bg-[#C6A96B]/10 border border-[#C6A96B]/30">
            <span className="text-[#C6A96B] font-sans text-sm font-medium">{totalTravelers}</span>
          </div>
          
          <svg 
            className={`w-5 h-5 text-[#7A7A7A] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      {/* Expanded content */}
      {isExpanded && (
        <div className="border-t border-[#2A2A2B] px-5 py-5 space-y-5">
          {/* Party Type Selection */}
          {isEditable && (
            <div>
              <label className="block text-xs text-[#7A7A7A] font-sans uppercase tracking-wider mb-3">
                Travel Party Type
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {partyTypeOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setPartyType(option.id as TravelParty['partyType'])}
                    className={`
                      px-3 py-2.5 rounded-xl border text-left transition-all duration-200
                      ${party.partyType === option.id
                        ? 'bg-[#C6A96B]/10 border-[#C6A96B]/40 text-[#C6A96B]'
                        : 'bg-[#0F0F10] border-[#2A2A2B] text-[#A1A1A1] hover:border-[#3A3A3B]'
                      }
                    `}
                  >
                    <span className="block text-sm font-medium">{option.label}</span>
                    <span className="block text-xs opacity-70 mt-0.5">{option.description}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Trip Name */}
          {isEditable && (
            <div>
              <label className="block text-xs text-[#7A7A7A] font-sans uppercase tracking-wider mb-2">
                Trip Name
              </label>
              <input
                type="text"
                value={party.groupName}
                onChange={(e) => onUpdate({ ...party, groupName: e.target.value })}
                placeholder="e.g., Paris Anniversary Trip"
                className="w-full px-4 py-3 rounded-xl bg-[#0F0F10] border border-[#2A2A2B] text-[#F5F5F5] font-sans text-sm placeholder:text-[#5A5A5A] focus:outline-none focus:border-[#C6A96B]/50 transition-colors"
              />
            </div>
          )}
          
          {/* Travelers List */}
          <div>
            <label className="block text-xs text-[#7A7A7A] font-sans uppercase tracking-wider mb-3">
              Travelers
            </label>
            <div className="space-y-2">
              {party.adults.map((traveler, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C6A96B] to-[#8B7355] flex items-center justify-center text-[#0F0F10] text-xs font-medium flex-shrink-0">
                    {idx + 1}
                  </div>
                  
                  {isEditable ? (
                    <>
                      <input
                        type="text"
                        value={traveler.firstName}
                        onChange={(e) => updateTraveler(idx, 'firstName', e.target.value)}
                        placeholder="First name"
                        className="flex-1 px-3 py-2.5 rounded-lg bg-[#0F0F10] border border-[#2A2A2B] text-[#F5F5F5] font-sans text-sm placeholder:text-[#5A5A5A] focus:outline-none focus:border-[#C6A96B]/50 transition-colors"
                      />
                      <input
                        type="text"
                        value={traveler.lastName}
                        onChange={(e) => updateTraveler(idx, 'lastName', e.target.value)}
                        placeholder="Last name"
                        className="flex-1 px-3 py-2.5 rounded-lg bg-[#0F0F10] border border-[#2A2A2B] text-[#F5F5F5] font-sans text-sm placeholder:text-[#5A5A5A] focus:outline-none focus:border-[#C6A96B]/50 transition-colors"
                      />
                      {party.adults.length > 1 && (
                        <button
                          onClick={() => removeTraveler(idx)}
                          className="w-8 h-8 rounded-full bg-[#0F0F10] border border-[#2A2A2B] flex items-center justify-center text-[#7A7A7A] hover:text-red-400 hover:border-red-400/30 transition-colors flex-shrink-0"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      )}
                    </>
                  ) : (
                    <div className="flex-1 px-3 py-2.5 rounded-lg bg-[#0F0F10] border border-[#2A2A2B]">
                      <span className="text-[#F5F5F5] font-sans text-sm">
                        {traveler.firstName} {traveler.lastName}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {isEditable && (
              <button
                onClick={addTraveler}
                className="mt-3 w-full py-2.5 rounded-xl border border-dashed border-[#3A3A3B] text-[#7A7A7A] font-sans text-sm hover:border-[#C6A96B]/50 hover:text-[#C6A96B] transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                Add Traveler
              </button>
            )}
          </div>
          
          {/* Revenue Impact Note */}
          <div className="pt-3 border-t border-[#2A2A2B]">
            <div className="flex items-start gap-2">
              <svg className="w-4 h-4 text-[#C6A96B] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-xs text-[#7A7A7A] font-sans">
                Party size affects revenue calculation. Per-person items (dining, activities) multiply commission by traveler count.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
