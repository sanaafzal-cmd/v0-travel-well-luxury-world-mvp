"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

const WELLS = [
  { name: "Stay-Well", icon: "bed", color: "#C6A96B" },
  { name: "Eat-Well", icon: "utensils", color: "#E8DFC8" },
  { name: "Move-Well", icon: "car", color: "#A1A1A1" },
  { name: "Activity-Well", icon: "compass", color: "#7A7A7A" },
  { name: "Experience-Well", icon: "sparkles", color: "#C6A96B" },
]

export default function CraftingPage() {
  const router = useRouter()
  const [progress, setProgress] = useState(0)
  const [currentWell, setCurrentWell] = useState(0)
  const [statusText, setStatusText] = useState("Initializing Trifecta Engine...")

  useEffect(() => {
    // Simulate progress with realistic timing
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          // Navigate to 5 Wells screen after completion
          setTimeout(() => {
            router.push("/categories")
          }, 500)
          return 100
        }
        return prev + 2
      })
    }, 80)

    return () => clearInterval(interval)
  }, [router])

  // Update current well and status based on progress
  useEffect(() => {
    if (progress < 15) {
      setCurrentWell(0)
      setStatusText("Analyzing travel preferences...")
    } else if (progress < 30) {
      setCurrentWell(0)
      setStatusText("Curating Stay-Well options...")
    } else if (progress < 45) {
      setCurrentWell(1)
      setStatusText("Discovering Eat-Well experiences...")
    } else if (progress < 60) {
      setCurrentWell(2)
      setStatusText("Optimizing Move-Well transfers...")
    } else if (progress < 75) {
      setCurrentWell(3)
      setStatusText("Selecting Activity-Well moments...")
    } else if (progress < 90) {
      setCurrentWell(4)
      setStatusText("Finalizing Experience-Well events...")
    } else {
      setStatusText("Your journey is ready...")
    }
  }, [progress])

  return (
    <main className="min-h-screen bg-[#0F0F10] flex flex-col items-center justify-center px-6">
      {/* Logo animation */}
      <div className="mb-12">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#C6A96B] to-[#E8DFC8] flex items-center justify-center animate-pulse">
          <svg className="w-10 h-10 text-[#0F0F10]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
        </div>
      </div>

      {/* Main heading */}
      <h1 className="font-serif text-2xl md:text-3xl text-[#F5F5F5] text-center mb-3">
        Crafting your personalized journey
      </h1>
      <p className="text-[#A1A1A1] font-sans text-sm text-center mb-12 max-w-sm">
        Our Trifecta Engine is curating 4-6 monetizable experiences per day across all 5 Wells
      </p>

      {/* Wells indicator */}
      <div className="flex items-center gap-3 mb-8">
        {WELLS.map((well, index) => (
          <div
            key={well.name}
            className={`
              w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500
              ${index === currentWell 
                ? 'bg-[#C6A96B]/20 border-2 border-[#C6A96B] scale-110' 
                : index < currentWell
                ? 'bg-[#C6A96B] border-2 border-[#C6A96B]'
                : 'bg-[#1A1A1B] border border-[#2A2A2B]'
              }
            `}
          >
            {index < currentWell ? (
              <svg className="w-5 h-5 text-[#0F0F10]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <div 
                className={`w-2 h-2 rounded-full ${index === currentWell ? 'bg-[#C6A96B] animate-pulse' : 'bg-[#3A3A3B]'}`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Status text */}
      <p className="text-[#C6A96B] font-sans text-sm mb-8 h-5 transition-opacity duration-300">
        {statusText}
      </p>

      {/* Progress bar */}
      <div className="w-full max-w-sm">
        <div className="h-1 bg-[#2A2A2B] rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#C6A96B] to-[#E8DFC8] rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-xs text-[#5A5A5A] font-sans">{progress}%</span>
          <span className="text-xs text-[#5A5A5A] font-sans">7 days · 35+ items</span>
        </div>
      </div>

      {/* Subtle footer */}
      <p className="absolute bottom-8 text-xs text-[#3A3A3B] font-sans">
        Powered by TravelWell Trifecta Engine™
      </p>
    </main>
  )
}
