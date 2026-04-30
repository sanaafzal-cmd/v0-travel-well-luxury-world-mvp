"use client"

import { useRouter } from "next/navigation"

// Partner data with assigned ocean-inspired backgrounds
const partners = [
  {
    name: "Aggressor Fleet",
    regions: "Red Sea • Maldives • Galápagos • Indonesia • Caribbean • Pacific",
    url: "https://www.aggressor.com",
    bgColor: "#0A1A2F",
  },
  {
    name: "Explorer Ventures",
    regions: "Caribbean • Galápagos • Pacific",
    url: "https://www.explorerventures.com",
    bgColor: "#0F2438",
  },
  {
    name: "Blue O Two",
    regions: "Red Sea • Maldives • Indonesia",
    url: "https://www.blueotwo.com",
    bgColor: "#12344D",
  },
  {
    name: "Liveaboard.com",
    regions: "Worldwide (Red Sea • Maldives • Indonesia • Philippines • Galápagos • Caribbean • Pacific)",
    url: "https://www.liveaboard.com",
    bgColor: "#1A3E4C",
  },
  {
    name: "Master Liveaboards",
    regions: "Galápagos • Indonesia • Maldives • Philippines • Red Sea",
    url: "https://masterliveaboards.com",
    bgColor: "#1F4F57",
  },
  {
    name: "Emperor Divers",
    regions: "Red Sea • Maldives • Indonesia",
    url: "https://www.emperordivers.com",
    bgColor: "#2A5C6A",
  },
  {
    name: "All Star Liveaboards",
    regions: "Bahamas • British Virgin Islands • Philippines",
    url: "https://allstarliveaboards.com",
    bgColor: "#2F6A73",
  },
  {
    name: "Nautilus Liveaboards",
    regions: "Mexico (Socorro • Guadalupe) • British Columbia",
    url: "https://nautilusliveaboards.com",
    bgColor: "#3A7A82",
  },
]

export default function DiveLiveaboardsPage() {
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
            Dive & Liveaboards
          </h1>
          <p className="text-base md:text-lg text-[#7A7A7A] font-sans leading-relaxed max-w-2xl mx-auto">
            Explore the world&apos;s finest liveaboard diving experiences across the Red Sea, Maldives, Galápagos, Indonesia, Caribbean, Pacific, and beyond.
          </p>
        </div>
      </section>

      {/* Partner Grid */}
      <section className="px-6 lg:px-12 pb-16">
        <div className="max-w-5xl mx-auto">
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
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs text-[#5A5A5A] font-sans">
            Extraordinary underwater journeys, effortlessly curated
          </p>
        </div>
      </footer>
    </main>
  )
}
