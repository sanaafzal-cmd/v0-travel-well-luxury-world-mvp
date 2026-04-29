"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"

// Section 1 — Car Rentals (Global)
const carRentals = [
  {
    name: "Sixt",
    type: "Car Rentals",
    regions: "Europe / North America / Latin America / Middle East / Africa / Asia-Pacific",
    brandColor: "#FF5F00",
    url: "https://www.sixt.com",
  },
  {
    name: "Hertz",
    type: "Car Rentals",
    regions: "North America / Europe / Latin America / Middle East / Africa / Asia-Pacific",
    brandColor: "#FFD100",
    url: "https://www.hertz.com",
  },
  {
    name: "Avis",
    type: "Car Rentals",
    regions: "North America / Europe / Asia / Latin America / Australia–New Zealand",
    brandColor: "#CC0000",
    url: "https://www.avis.com",
  },
]

// Section 2 — Luxury Rides & Rideshare
const luxuryRides = [
  {
    name: "Uber",
    type: "Rideshare",
    regions: "Global (70+ countries)",
    brandColor: "#000000",
    url: "https://www.uber.com",
  },
  {
    name: "Blacklane",
    type: "Luxury Chauffeur",
    regions: "Europe / Asia-Pacific / Middle East / Africa / North America / Latin America",
    brandColor: "#000000",
    url: "https://www.blacklane.com",
  },
  {
    name: "Sixt Ride",
    type: "Premium Chauffeur",
    regions: "Europe / North America / Middle East / Asia-Pacific",
    brandColor: "#FF5F00",
    url: "https://www.sixt.com/ride/",
  },
]

// Section 3 — Trains / Buses / Ferries / Transfers / Rail Passes
const groundTransport = [
  {
    name: "Bookaway",
    type: "Bus / Train / Ferry / Transfers",
    regions: "Asia / SE Asia / South America / Mexico / Africa / Europe",
    brandColor: "#0057FF",
    url: "https://www.bookaway.com",
  },
  {
    name: "Omio",
    type: "Train / Bus / Ferry",
    regions: "Europe / SE Asia / United States / Canada",
    brandColor: "#6E00FF",
    url: "https://www.omio.com",
  },
  {
    name: "Busbud",
    type: "Bus / Train",
    regions: "United States / Canada / Mexico / Brazil / Argentina / Europe / South Africa",
    brandColor: "#00A6A6",
    url: "https://www.busbud.com",
  },
  {
    name: "Eurail",
    type: "Rail Passes",
    regions: "Europe (33 Countries)",
    brandColor: "#003399",
    url: "https://www.eurail.com",
  },
]

interface PartnerCardProps {
  partner: {
    name: string
    type: string
    regions: string
    brandColor: string
    url: string
  }
}

function PartnerCard({ partner }: PartnerCardProps) {
  return (
    <a
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative p-6 rounded-2xl bg-[#1A1A1B] border border-[#2A2A2B] hover:border-[#3A3A3B] transition-all duration-300 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1"
    >
      {/* Brand Accent Line */}
      <div 
        className="absolute top-0 left-6 right-6 h-[2px] rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
        style={{ backgroundColor: partner.brandColor }}
      />
      
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          {/* Partner Name */}
          <h3 className="font-serif text-xl text-[#F5F5F5] group-hover:text-white transition-colors">
            {partner.name}
          </h3>
          
          {/* Service Type */}
          <p 
            className="text-sm font-sans font-medium mt-1 transition-colors"
            style={{ color: partner.brandColor }}
          >
            {partner.type}
          </p>
          
          {/* Regions */}
          <p className="text-xs text-[#7A7A7A] font-sans mt-3 leading-relaxed">
            {partner.regions}
          </p>
        </div>
        
        {/* External Link Icon */}
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#2A2A2B] flex items-center justify-center group-hover:bg-[#3A3A3B] transition-colors">
          <svg
            className="w-4 h-4 text-[#7A7A7A] group-hover:text-[#F5F5F5] transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </div>
    </a>
  )
}

export default function MoveWellPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-[#0F0F10]">
      {/* Hero */}
      <div className="relative h-[45vh] min-h-[350px]">
        <Image
          src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1600&q=80"
          alt="Move-Well - Premium Transportation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F10] via-[#0F0F10]/70 to-[#0F0F10]/30" />
        
        {/* Back Button */}
        <button
          onClick={() => router.push("/discover")}
          className="absolute top-6 left-6 lg:left-12 z-10 w-11 h-11 rounded-full bg-[#1A1A1B]/90 backdrop-blur-md border border-[#2A2A2B] flex items-center justify-center text-[#A1A1A1] hover:text-[#F5F5F5] hover:border-[#C6A96B]/50 hover:bg-[#1A1A1B] transition-all duration-300"
          aria-label="Back to Discovery"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-12">
          <div className="max-w-3xl">
            <span className="inline-block text-xs text-[#C6A96B] font-sans uppercase tracking-[0.2em] mb-3">
              Move-Well
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#F5F5F5] leading-[1.1]">
              Travel in style and comfort
            </h1>
            <p className="text-[#A1A1A1] font-sans text-base md:text-lg max-w-2xl mt-4 leading-relaxed">
              From global car rentals to luxury chauffeurs to trains, buses, ferries, and European rail passes — move effortlessly through your journey.
            </p>
          </div>
        </div>
      </div>

      {/* Section 1 — Car Rentals */}
      <section className="px-6 lg:px-12 py-12 lg:py-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-[#C6A96B]/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-[#C6A96B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
            </div>
            <div>
              <h2 className="font-serif text-2xl text-[#F5F5F5]">
                Car Rentals
              </h2>
              <p className="text-sm text-[#7A7A7A] font-sans">
                Global coverage
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {carRentals.map((partner) => (
              <PartnerCard key={partner.name} partner={partner} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Luxury Rides & Rideshare */}
      <section className="px-6 lg:px-12 py-12 lg:py-16 bg-[#0A0A0B]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-[#C6A96B]/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-[#C6A96B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h2 className="font-serif text-2xl text-[#F5F5F5]">
                Luxury Rides & Rideshare
              </h2>
              <p className="text-sm text-[#7A7A7A] font-sans">
                Premium chauffeur services
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {luxuryRides.map((partner) => (
              <PartnerCard key={partner.name} partner={partner} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Ground Transport */}
      <section className="px-6 lg:px-12 py-12 lg:py-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-[#C6A96B]/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-[#C6A96B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
              </svg>
            </div>
            <div>
              <h2 className="font-serif text-2xl text-[#F5F5F5]">
                Trains, Buses, Ferries & Rail Passes
              </h2>
              <p className="text-sm text-[#7A7A7A] font-sans">
                Ground transportation worldwide
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {groundTransport.map((partner) => (
              <PartnerCard key={partner.name} partner={partner} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <footer className="px-6 lg:px-12 py-10 border-t border-[#1A1A1B]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#5A5A5A] font-sans text-sm leading-relaxed">
            TravelWell earns a commission when you book through our partners.
          </p>
        </div>
      </footer>
    </main>
  )
}
