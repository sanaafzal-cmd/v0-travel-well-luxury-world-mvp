"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"

const regions = [
  { name: "North America", icon: "🌎" },
  { name: "Europe", icon: "🌍" },
  { name: "Asia Pacific", icon: "🌏" },
  { name: "Middle East", icon: "🏜️" },
  { name: "Latin America", icon: "🌴" },
  { name: "Africa", icon: "🦁" },
]

export default function InsureWellPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-[#0F0F10]">
      {/* Hero */}
      <div className="relative h-[40vh] min-h-[300px]">
        <Image
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80"
          alt="Insure-Well"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F10] via-[#0F0F10]/60 to-transparent" />
        
        {/* Back Button */}
        <button
          onClick={() => router.push("/discover#wells")}
          className="absolute top-6 left-6 lg:left-12 z-10 w-10 h-10 rounded-full bg-[#1A1A1B]/80 backdrop-blur-sm border border-[#2A2A2B] flex items-center justify-center text-[#A1A1A1] hover:text-[#F5F5F5] hover:border-[#3A3A3B] transition-colors"
          aria-label="Go back"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-12">
          <span className="text-xs text-[#C6A96B] font-sans uppercase tracking-widest">
            Insure-Well
          </span>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#F5F5F5] mt-2">
            Travel Protection
          </h1>
          <p className="text-[#A1A1A1] font-sans text-lg max-w-xl mt-3">
            Travel with peace of mind. Comprehensive protection for every journey, tailored to your destination.
          </p>
        </div>
      </div>

      {/* Coming Soon Message */}
      <section className="px-6 lg:px-12 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center p-8 rounded-2xl bg-[#1A1A1B] border border-[#2A2A2B]">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#C6A96B]/10 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-[#C6A96B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <h2 className="font-serif text-2xl text-[#F5F5F5] mb-2">
              Partners Coming Soon
            </h2>
            <p className="text-[#7A7A7A] font-sans text-sm max-w-md mx-auto">
              We&apos;re partnering with leading travel insurance providers to bring you comprehensive coverage options.
            </p>
          </div>
        </div>
      </section>

      {/* Region Tiles (UI Only) */}
      <section className="px-6 lg:px-12 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-xl text-[#F5F5F5] mb-6">
            Coverage Regions
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {regions.map((region) => (
              <div
                key={region.name}
                className="p-5 rounded-xl bg-[#1A1A1B]/50 border border-[#2A2A2B]/50 text-center opacity-60"
              >
                <span className="text-3xl mb-3 block">{region.icon}</span>
                <h3 className="font-sans text-sm text-[#7A7A7A]">
                  {region.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="px-6 lg:px-12 py-8 border-t border-[#2A2A2B]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs text-[#5A5A5A] font-sans">
            TravelWell earns a commission when you purchase through our partners
          </p>
        </div>
      </section>
    </main>
  )
}
