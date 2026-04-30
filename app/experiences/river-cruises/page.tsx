"use client"

import { useRouter } from "next/navigation"

// Partner data with assigned ocean-inspired backgrounds
const partners = [
  {
    name: "Viking River Cruises",
    regions: "Danube • Rhine • Seine • Nile • Mekong • Mississippi",
    url: "https://www.viking.com",
    bgColor: "#0A1A2F",
  },
  {
    name: "AmaWaterways",
    regions: "Danube • Rhine • Moselle • Mekong • Nile • Douro",
    url: "https://www.amawaterways.com",
    bgColor: "#12344D",
  },
  {
    name: "Avalon Waterways",
    regions: "Danube • Rhine • Moselle • Rhône • Seine",
    url: "https://www.avalonwaterways.com",
    bgColor: "#1F4F57",
  },
  {
    name: "Uniworld Boutique River Cruises",
    regions: "Danube • Rhine • Douro • Mekong • Nile",
    url: "https://www.uniworld.com",
    bgColor: "#2F6A73",
  },
]

export default function RiverCruisesPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-[#0F0F10]">
      {/* Hero Section */}
      <section className="relative px-6 lg:px-12 pt-8 pb-12">
        {/* Back Button */}
        <button
          onClick={() => router.push("/discover")}
          className="mb-8 w-10 h-10 rounded-full bg-[#1A1A1B] border border-[#2A2A2B] flex items-center justify-center text-[#A1A1A1] hover:text-[#F5F5F5] hover:border-[#3A3A3B] transition-colors"
          aria-label="Back to Discovery"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs text-[#D4AF37] font-sans uppercase tracking-[0.2em]">
            Premium Experiences
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#F5F5F5] mt-4 mb-6">
            River Cruises
          </h1>
          <p className="text-base md:text-lg text-[#7A7A7A] font-sans leading-relaxed max-w-2xl mx-auto">
            Discover the world&apos;s most elegant river journeys across Europe, Asia, Africa, and the Americas.
          </p>
        </div>
      </section>

      {/* Partner Grid */}
      <section className="px-6 lg:px-12 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-6 rounded-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/5 hover:-translate-y-0.5"
                style={{ backgroundColor: partner.bgColor }}
              >
                <div className="text-center">
                  {/* Partner Name */}
                  <h3 className="font-serif text-xl md:text-2xl text-[#D4AF37] group-hover:text-[#E8C84B] transition-colors">
                    {partner.name}
                  </h3>
                  
                  {/* Regions */}
                  <p className="text-sm text-[#A0A0A0] font-sans mt-3 leading-relaxed">
                    {partner.regions}
                  </p>
                  
                  {/* External Link Indicator */}
                  <div className="mt-4 flex items-center justify-center gap-1.5 text-[#D4AF37]/60 group-hover:text-[#D4AF37] transition-colors">
                    <span className="text-xs font-sans uppercase tracking-wider">Visit</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 lg:px-12 py-8 border-t border-[#2A2A2B]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs text-[#5A5A5A] font-sans">
            Extraordinary river journeys, effortlessly curated
          </p>
        </div>
      </footer>
    </main>
  )
}
