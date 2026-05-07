"use client"

import { useRouter, useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { getSpecialInterestById } from "@/lib/special-interests-data"

// Stay Tier Types
type StayTier = "all" | "all-inclusive" | "premier" | "mid-range" | "budget"

const stayTiers = [
  { id: "all" as StayTier, label: "All Properties" },
  { id: "all-inclusive" as StayTier, label: "All-Inclusive" },
  { id: "premier" as StayTier, label: "Premier" },
  { id: "mid-range" as StayTier, label: "Mid-Range" },
  { id: "budget" as StayTier, label: "Budget" },
]

// Placeholder sub-region data - will be replaced with Supabase data
const subRegionData: Record<string, { name: string; description: string; heroImage: string; regionName: string; regionSlug: string }> = {
  "eastern-caribbean": {
    name: "Eastern Caribbean",
    description: "St. Lucia, Barbados, Antigua and the stunning windward islands with dramatic volcanic landscapes.",
    heroImage: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
    regionName: "Caribbean & Atlantic",
    regionSlug: "caribbean-atlantic",
  },
  "cyclades": {
    name: "Cyclades",
    description: "The iconic Greek island chain featuring whitewashed villages, blue-domed churches, and crystal-clear Aegean waters.",
    heroImage: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
    regionName: "Mediterranean Europe",
    regionSlug: "mediterranean-europe",
  },
  "amalfi-coast": {
    name: "Amalfi Coast",
    description: "Dramatic Italian coastline with colorful cliffside villages, world-class cuisine, and stunning Mediterranean vistas.",
    heroImage: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800&q=80",
    regionName: "Mediterranean Europe",
    regionSlug: "mediterranean-europe",
  },
}

// Micro-destinations for sub-regions - will be replaced with Supabase data
const microDestinationsBySubRegion: Record<string, Array<{
  id: number
  name: string
  slug: string
  description: string
  heroImage: string
  stayCount: number
}>> = {
  "eastern-caribbean": [
    { id: 1, name: "St. Lucia", slug: "st-lucia", description: "The Pitons and volcanic beaches", heroImage: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80", stayCount: 18 },
    { id: 2, name: "Barbados", slug: "barbados", description: "West coast luxury and east coast waves", heroImage: "https://images.unsplash.com/photo-1580541631950-7282082b53ce?w=800&q=80", stayCount: 32 },
    { id: 3, name: "Antigua & Barbuda", slug: "antigua-barbuda", description: "365 beaches to explore", heroImage: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80", stayCount: 19 },
    { id: 4, name: "St. Barts", slug: "st-barts", description: "French Caribbean elegance", heroImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80", stayCount: 12 },
    { id: 5, name: "Anguilla", slug: "anguilla", description: "Quiet luxury and pristine beaches", heroImage: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80", stayCount: 11 },
    { id: 6, name: "Dominica", slug: "dominica", description: "Nature island adventure", heroImage: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80", stayCount: 8 },
    { id: 7, name: "Grenada", slug: "grenada", description: "Spice island charm", heroImage: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80", stayCount: 14 },
    { id: 8, name: "St. Kitts & Nevis", slug: "st-kitts-nevis", description: "Historic charm and natural beauty", heroImage: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80", stayCount: 10 },
  ],
  "cyclades": [
    { id: 1, name: "Santorini", slug: "santorini", description: "Iconic sunsets and caldera views", heroImage: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80", stayCount: 28 },
    { id: 2, name: "Mykonos", slug: "mykonos", description: "Glamorous beaches and nightlife", heroImage: "https://images.unsplash.com/photo-1601581875039-e899893d520c?w=800&q=80", stayCount: 35 },
    { id: 3, name: "Paros", slug: "paros", description: "Traditional villages and golden beaches", heroImage: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?w=800&q=80", stayCount: 18 },
    { id: 4, name: "Naxos", slug: "naxos", description: "Largest Cycladic island", heroImage: "https://images.unsplash.com/photo-1504512485720-7d83a16ee930?w=800&q=80", stayCount: 15 },
    { id: 5, name: "Milos", slug: "milos", description: "Volcanic landscapes and unique beaches", heroImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80", stayCount: 12 },
    { id: 6, name: "Ios", slug: "ios", description: "Beach parties and charming Chora", heroImage: "https://images.unsplash.com/photo-1555990538-1e6c89c63156?w=800&q=80", stayCount: 14 },
    { id: 7, name: "Folegandros", slug: "folegandros", description: "Peaceful and authentic", heroImage: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80", stayCount: 6 },
  ],
  "amalfi-coast": [
    { id: 1, name: "Positano", slug: "positano", description: "Vertical village of dreams", heroImage: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800&q=80", stayCount: 22 },
    { id: 2, name: "Ravello", slug: "ravello", description: "Gardens in the sky", heroImage: "https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?w=800&q=80", stayCount: 14 },
    { id: 3, name: "Amalfi", slug: "amalfi", description: "Historic maritime republic", heroImage: "https://images.unsplash.com/photo-1612698093158-e07ac200d44e?w=800&q=80", stayCount: 18 },
    { id: 4, name: "Capri", slug: "capri", description: "Island of eternal glamour", heroImage: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=800&q=80", stayCount: 26 },
    { id: 5, name: "Praiano", slug: "praiano", description: "Quiet luxury between Positano and Amalfi", heroImage: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80", stayCount: 10 },
  ],
}

// Stay partners data - will be replaced with Supabase data
const stayPartnersData = [
  { id: 1, name: "Jade Mountain St. Lucia", tier: "premier", priceFrom: 1400, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80" },
  { id: 2, name: "Sandy Lane Barbados", tier: "premier", priceFrom: 1200, image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80" },
  { id: 3, name: "Sandals Grande Antigua", tier: "all-inclusive", priceFrom: 450, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80" },
  { id: 4, name: "Le Guanahani St. Barts", tier: "premier", priceFrom: 950, image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80" },
  { id: 5, name: "Cap Juluca Anguilla", tier: "premier", priceFrom: 850, image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80" },
  { id: 6, name: "Cobblers Cove Barbados", tier: "mid-range", priceFrom: 320, image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80" },
  { id: 7, name: "Sugar Beach Viceroy", tier: "all-inclusive", priceFrom: 680, image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80" },
  { id: 8, name: "Bequia Beach Hotel", tier: "mid-range", priceFrom: 195, image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80" },
  { id: 9, name: "Serenity Boutique Hotel", tier: "budget", priceFrom: 95, image: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=800&q=80" },
  { id: 10, name: "Caribbean Inn", tier: "budget", priceFrom: 75, image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80" },
]

export default function SubRegionDetailPage() {
  const router = useRouter()
  const params = useParams()
  const interestId = params.id as string
  const regionSlug = params.regionSlug as string
  const subRegionSlug = params.subRegionSlug as string
  
  const interest = getSpecialInterestById(interestId)
  const subRegion = subRegionData[subRegionSlug] || subRegionData["eastern-caribbean"]
  const microDestinations = microDestinationsBySubRegion[subRegionSlug] || microDestinationsBySubRegion["eastern-caribbean"]
  
  const [selectedTier, setSelectedTier] = useState<StayTier>("all")
  const [selectedDestination, setSelectedDestination] = useState<typeof microDestinations[0] | null>(null)
  
  // Filter stays by tier
  const filteredStays = selectedTier === "all" 
    ? stayPartnersData 
    : stayPartnersData.filter(stay => stay.tier === selectedTier)

  if (!interest) {
    return null
  }

  return (
    <main className="min-h-screen bg-[#F8F6F1]">
      {/* Sub-Region Hero Section */}
      <section className="relative h-[45vh] min-h-[350px] overflow-hidden">
        {/* Hero Background Image */}
        <Image
          src={subRegion.heroImage}
          alt={subRegion.name}
          fill
          className="object-cover"
          priority
        />
        
        {/* Elegant gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

        {/* Back Navigation */}
        <button
          onClick={() => router.push(`/interests/${interestId}/regions/${regionSlug}`)}
          className="absolute top-6 left-6 lg:left-12 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
          aria-label="Back to Region"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-12 pb-12">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <span className="text-white/60 font-sans text-sm">TravelWell</span>
              <span className="text-white/40">/</span>
              <span className="text-white/60 font-sans text-sm">{interest.title}</span>
              <span className="text-white/40">/</span>
              <span className="text-white/60 font-sans text-sm">{subRegion.regionName}</span>
              <span className="text-white/40">/</span>
              <span className="text-white/80 font-sans text-sm">{subRegion.name}</span>
            </div>
            
            {/* Title */}
            <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">
              {subRegion.name}
            </h1>
            
            <p className="font-sans text-lg text-white/80 max-w-2xl">
              {subRegion.description}
            </p>
          </div>
        </div>

        {/* Decorative gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F8F6F1] to-transparent" />
      </section>

      {/* Micro-Destinations Grid */}
      <section className="relative -mt-6 z-10 px-6 lg:px-12 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-8">
            <h2 className="font-serif text-2xl md:text-3xl text-[#1A1A1B] mb-2">
              Micro-Destinations in {subRegion.name}
            </h2>
            <p className="text-[#6B6B6B] font-sans">
              {microDestinations.length} destinations to explore
            </p>
          </div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {microDestinations.map((destination) => (
              <button
                key={destination.id}
                onClick={() => setSelectedDestination(selectedDestination?.id === destination.id ? null : destination)}
                className={`group relative overflow-hidden rounded-xl aspect-[3/4] shadow-md text-left transition-all duration-300 ${
                  selectedDestination?.id === destination.id 
                    ? "ring-2 ring-[#C6A96B] shadow-lg" 
                    : "hover:shadow-lg hover:ring-2 hover:ring-[#C6A96B]/50"
                }`}
              >
                {/* Destination Image */}
                <Image
                  src={destination.heroImage}
                  alt={destination.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Selection Indicator */}
                {selectedDestination?.id === destination.id && (
                  <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-[#C6A96B] flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className={`font-serif text-base md:text-lg mb-1 transition-colors ${
                    selectedDestination?.id === destination.id ? "text-[#C6A96B]" : "text-white group-hover:text-[#C6A96B]"
                  }`}>
                    {destination.name}
                  </h3>
                  <p className="text-xs text-white/70 font-sans line-clamp-1">
                    {destination.description}
                  </p>
                  <p className="text-xs text-white/50 font-sans mt-1">
                    {destination.stayCount} stays
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Selected Destination Stay Partners Preview */}
          {selectedDestination && (
            <div className="mt-8 p-6 bg-white rounded-2xl border border-[#E8E4DC] animate-in slide-in-from-top-2 duration-300">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-serif text-xl text-[#1A1A1B]">
                    Where to Stay in {selectedDestination.name}
                  </h3>
                  <p className="text-sm text-[#6B6B6B] font-sans">
                    {selectedDestination.stayCount} properties available
                  </p>
                </div>
                <Link
                  href={`/interests/${interestId}/regions/${regionSlug}/${selectedDestination.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2D7A7A] text-white font-sans text-sm font-medium hover:bg-[#3D9A9A] transition-colors"
                >
                  View Full Details
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Stay Tier Quick Filter */}
              <div className="flex flex-wrap gap-2 mb-6">
                {stayTiers.map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setSelectedTier(tier.id)}
                    className={`px-4 py-2 rounded-full font-sans text-xs font-medium transition-all duration-300 ${
                      selectedTier === tier.id
                        ? "bg-[#2D7A7A] text-white"
                        : "bg-[#F8F6F1] text-[#6B6B6B] hover:bg-[#E8E4DC]"
                    }`}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>
              
              {/* Stay Partners Grid (Preview) */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {filteredStays.slice(0, 4).map((stay) => (
                  <div
                    key={stay.id}
                    className="group bg-[#F8F6F1] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    {/* Stay Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={stay.image}
                        alt={stay.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Tier Badge */}
                      <div className="absolute top-2 right-2 px-2 py-1 rounded-md bg-white/90 backdrop-blur-sm text-xs font-sans font-medium text-[#1A1A1B]">
                        {stayTiers.find(t => t.id === stay.tier)?.label}
                      </div>
                    </div>
                    
                    {/* Stay Info */}
                    <div className="p-3">
                      <h4 className="font-sans text-sm font-medium text-[#1A1A1B] truncate group-hover:text-[#2D7A7A] transition-colors">
                        {stay.name}
                      </h4>
                      <p className="text-xs text-[#6B6B6B] font-sans mt-1">
                        From <span className="font-semibold text-[#1A1A1B]">${stay.priceFrom}</span>/night
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {filteredStays.length === 0 && (
                <p className="text-center py-8 text-[#6B6B6B] font-sans text-sm">
                  No properties found for this tier.
                </p>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Footer Navigation */}
      <footer className="bg-white py-10 px-6 lg:px-12 border-t border-[#E8E4DC]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Link
            href={`/interests/${interestId}/regions/${regionSlug}`}
            className="inline-flex items-center gap-2 text-[#6B6B6B] hover:text-[#2D7A7A] transition-colors font-sans text-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to {subRegion.regionName}
          </Link>
          
          <Link
            href={`/interests/${interestId}`}
            className="inline-flex items-center gap-2 text-[#6B6B6B] hover:text-[#2D7A7A] transition-colors font-sans text-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            {interest.title} Home
          </Link>
        </div>
      </footer>
    </main>
  )
}
