"use client"

import { useState, useEffect } from "react"

interface SafetyCardProps {
  destination?: string
}

export function SafetyCard({ destination = "Paris, France" }: SafetyCardProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [showLocationPrompt, setShowLocationPrompt] = useState(false)
  const [locationEnhanced, setLocationEnhanced] = useState(false)
  const [hasSeenPrompt, setHasSeenPrompt] = useState(false)

  // Load location preference from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("travelwell_location_enhanced")
    const seenPrompt = localStorage.getItem("travelwell_location_prompt_seen")
    if (stored !== null) {
      setLocationEnhanced(stored === "true")
    }
    if (seenPrompt !== null) {
      setHasSeenPrompt(true)
    }
  }, [])

  const handleOpenSafetyCard = () => {
    // Show location prompt on first open if not seen before
    if (!hasSeenPrompt && !locationEnhanced) {
      setShowLocationPrompt(true)
      localStorage.setItem("travelwell_location_prompt_seen", "true")
      setHasSeenPrompt(true)
    } else {
      setIsOpen(true)
    }
  }

  const handleEnableLocation = () => {
    setLocationEnhanced(true)
    localStorage.setItem("travelwell_location_enhanced", "true")
    setShowLocationPrompt(false)
    setIsOpen(true)
  }

  const handleDeclineLocation = () => {
    setLocationEnhanced(false)
    localStorage.setItem("travelwell_location_enhanced", "false")
    setShowLocationPrompt(false)
    setIsOpen(true)
  }

  // Emergency data based on destination (Paris example)
  const emergencyData = {
    emergencyNumbers: [
      { label: "European Emergency", number: "112", description: "Universal EU emergency line" },
      { label: "Police", number: "17", description: "Local police services" },
      { label: "Fire & Rescue", number: "18", description: "Pompiers (Fire brigade)" },
      { label: "Medical Emergency", number: "15", description: "SAMU (Emergency medical)" },
    ],
    nearestHospital: locationEnhanced
      ? { name: "Hôpital Hôtel-Dieu", address: "1 Place du Parvis Notre-Dame", distance: "0.8 km" }
      : { name: "Hôpital Hôtel-Dieu", address: "1 Place du Parvis Notre-Dame, Paris", distance: null },
    weatherAlert: null,
    safetyGuidance: [
      "Keep valuables secure in crowded tourist areas",
      "Be aware of pickpockets on public transport",
      "Carry a photocopy of your passport",
      "Register with your embassy if staying extended period",
    ],
  }

  return (
    <>
      {/* Safety Card Tile - Large, Visible, Premium */}
      <button
        onClick={handleOpenSafetyCard}
        className={`
          relative flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300
          ${locationEnhanced 
            ? "bg-emerald-500/10 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.15)]" 
            : "bg-[#1A1A1B] border border-[#2A2A2B] hover:border-emerald-500/30"
          }
        `}
        aria-label="TravelWell Safety Card"
      >
        {/* Cross Icon */}
        <div className={`
          w-8 h-8 rounded-full flex items-center justify-center transition-colors
          ${locationEnhanced 
            ? "bg-emerald-500/20 text-emerald-400" 
            : "bg-emerald-500/10 text-emerald-400"
          }
        `}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </div>

        {/* Text */}
        <div className="text-left">
          <div className="flex items-center gap-2">
            <span className="text-sm font-sans font-medium text-[#F5F5F5]">
              Safety Card
            </span>
            <span className="text-[10px] font-sans uppercase tracking-wider text-emerald-400 font-medium">
              ACTIVE
            </span>
          </div>
          {locationEnhanced && (
            <span className="text-[10px] font-sans text-emerald-400/80">
              Location Enhanced
            </span>
          )}
        </div>

        {/* Subtle glow effect when location enhanced */}
        {locationEnhanced && (
          <div className="absolute inset-0 rounded-xl bg-emerald-500/5 pointer-events-none" />
        )}
      </button>

      {/* Location Enhancement Prompt Modal */}
      {showLocationPrompt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => {
              setShowLocationPrompt(false)
              setIsOpen(true)
            }}
          />

          <div className="relative w-full max-w-md bg-[#1A1A1B] rounded-2xl border border-[#2A2A2B] shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="px-6 py-6 text-center border-b border-[#2A2A2B]">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h2 className="font-serif text-xl text-[#F5F5F5]">
                Enhance Your Safety Experience
              </h2>
            </div>

            {/* Content */}
            <div className="px-6 py-6">
              <p className="text-[#A1A1A1] font-sans text-sm mb-6">
                Allow location access for:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Nearest hospitals",
                  "Local emergency contacts",
                  "Weather alerts",
                  "Region-specific safety guidance"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[#F5F5F5] font-sans text-sm">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Privacy Note */}
              <div className="p-3 rounded-lg bg-[#0F0F10] border border-[#2A2A2B] mb-6">
                <p className="text-[#7A7A7A] font-sans text-xs leading-relaxed">
                  TravelWell never tracks your movement or stores your location history.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={handleEnableLocation}
                  className="w-full py-3.5 rounded-full bg-emerald-500 text-white font-sans font-medium hover:bg-emerald-400 transition-colors"
                >
                  Enable Enhanced Safety
                </button>
                <button
                  onClick={handleDeclineLocation}
                  className="w-full py-3.5 rounded-full bg-[#2A2A2B] text-[#A1A1A1] font-sans hover:bg-[#3A3A3B] hover:text-[#F5F5F5] transition-colors"
                >
                  Not Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Safety Panel Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[#1A1A1B] rounded-2xl border border-[#2A2A2B] shadow-xl animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="sticky top-0 z-10 px-6 py-5 border-b border-[#2A2A2B] bg-[#1A1A1B] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center
                  ${locationEnhanced 
                    ? "bg-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.2)]" 
                    : "bg-emerald-500/10"
                  }
                `}>
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-serif text-lg text-[#F5F5F5]">
                    Safety Card
                  </h2>
                  <p className="text-xs font-sans text-[#7A7A7A]">
                    {destination}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-[#2A2A2B] flex items-center justify-center text-[#7A7A7A] hover:text-[#F5F5F5] hover:bg-[#3A3A3B] transition-colors"
                aria-label="Close"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Location Enhancement Status */}
            {locationEnhanced && (
              <div className="px-6 py-3 bg-emerald-500/5 border-b border-emerald-500/20 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-sans text-emerald-400">
                  Location Enhanced — Using device location for nearby services
                </span>
              </div>
            )}

            {/* Content Sections */}
            <div className="px-6 py-6 space-y-6">
              
              {/* Emergency Numbers */}
              <section>
                <h3 className="text-xs font-sans text-[#C6A96B] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Emergency Numbers
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {emergencyData.emergencyNumbers.map((emergency, idx) => (
                    <a
                      key={idx}
                      href={`tel:${emergency.number}`}
                      className="p-4 rounded-xl bg-[#0F0F10] border border-[#2A2A2B] hover:border-emerald-500/30 transition-colors group"
                    >
                      <span className="text-2xl font-serif text-[#F5F5F5] group-hover:text-emerald-400 transition-colors">
                        {emergency.number}
                      </span>
                      <p className="text-sm font-sans text-[#A1A1A1] mt-1">
                        {emergency.label}
                      </p>
                      <p className="text-xs font-sans text-[#5A5A5A] mt-0.5">
                        {emergency.description}
                      </p>
                    </a>
                  ))}
                </div>
              </section>

              {/* Nearest Hospital */}
              <section>
                <h3 className="text-xs font-sans text-[#C6A96B] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                  Nearest Hospital
                </h3>
                <div className="p-4 rounded-xl bg-[#0F0F10] border border-[#2A2A2B]">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-serif text-lg text-[#F5F5F5]">
                        {emergencyData.nearestHospital.name}
                      </h4>
                      <p className="text-sm font-sans text-[#7A7A7A] mt-1">
                        {emergencyData.nearestHospital.address}
                      </p>
                    </div>
                    {emergencyData.nearestHospital.distance && (
                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-sans">
                        {emergencyData.nearestHospital.distance}
                      </span>
                    )}
                  </div>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(emergencyData.nearestHospital.name + " " + emergencyData.nearestHospital.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full py-2.5 rounded-full bg-[#2A2A2B] text-[#F5F5F5] font-sans text-sm hover:bg-[#3A3A3B] transition-colors flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                    </svg>
                    Get Directions
                  </a>
                </div>
              </section>

              {/* Weather & Conditions */}
              <section>
                <h3 className="text-xs font-sans text-[#C6A96B] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                  </svg>
                  Weather & Conditions
                </h3>
                <div className="p-4 rounded-xl bg-[#0F0F10] border border-[#2A2A2B]">
                  <div className="flex items-center gap-2 text-[#7A7A7A]">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-sans">No active weather alerts for {destination}</span>
                  </div>
                </div>
              </section>

              {/* Regional Safety Guidance */}
              <section>
                <h3 className="text-xs font-sans text-[#C6A96B] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  Regional Safety Guidance
                </h3>
                <div className="space-y-2">
                  {emergencyData.safetyGuidance.map((tip, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-[#0F0F10] border border-[#2A2A2B] flex items-start gap-3">
                      <span className="text-[#C6A96B] text-sm">{idx + 1}.</span>
                      <p className="text-sm font-sans text-[#A1A1A1]">{tip}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Legal Disclaimer */}
            <div className="px-6 py-4 bg-[#0F0F10] border-t border-[#2A2A2B]">
              <p className="text-[#5A5A5A] font-sans text-xs leading-relaxed text-center">
                TravelWell never tracks your movement or stores your location history. TravelWell provides general safety information for awareness only. Always follow local authorities and emergency services.
              </p>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 px-6 py-4 border-t border-[#2A2A2B] bg-[#1A1A1B]">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full py-3 rounded-full bg-[#2A2A2B] text-[#F5F5F5] font-sans text-sm hover:bg-[#3A3A3B] transition-colors"
              >
                Close Safety Card
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
