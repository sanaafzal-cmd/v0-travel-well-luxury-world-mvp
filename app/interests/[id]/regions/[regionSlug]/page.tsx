"use client"

import { useRouter, useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { getSpecialInterestById } from "@/lib/special-interests-data"

// Stay Tier Types
type StayTier = "all" | "all-inclusive" | "premier" | "mid-range" | "budget"

interface StayTierOption {
  id: StayTier
  label: string
  description: string
}

const stayTiers: StayTierOption[] = [
  { id: "all", label: "All Properties", description: "View all accommodation options" },
  { id: "all-inclusive", label: "All-Inclusive Resorts", description: "Everything included for ultimate relaxation" },
  { id: "premier", label: "Premier / High-End", description: "Luxury boutique hotels and resorts" },
  { id: "mid-range", label: "Mid-Range", description: "Quality comfort at reasonable prices" },
  { id: "budget", label: "Budget Friendly", description: "Great value for savvy travelers" },
]

// Placeholder micro-destinations - will be replaced with Supabase data
const microDestinationsData: Record<string, MicroDestination[]> = {
  "caribbean-atlantic": [
    { id: 1, name: "Turks & Caicos", slug: "turks-caicos", description: "Grace Bay's pristine shores", heroImage: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80", stayCount: 24 },
    { id: 2, name: "St. Lucia", slug: "st-lucia", description: "The Pitons and volcanic beaches", heroImage: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80", stayCount: 18 },
    { id: 3, name: "Barbados", slug: "barbados", description: "West coast luxury and east coast waves", heroImage: "https://images.unsplash.com/photo-1580541631950-7282082b53ce?w=800&q=80", stayCount: 32 },
    { id: 4, name: "Aruba", slug: "aruba", description: "One happy island with endless sun", heroImage: "https://images.unsplash.com/photo-1568402102990-bc541580b59f?w=800&q=80", stayCount: 21 },
    { id: 5, name: "Bahamas", slug: "bahamas", description: "Island hopping paradise", heroImage: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80", stayCount: 45 },
    { id: 6, name: "Jamaica", slug: "jamaica", description: "Reggae rhythms and stunning bays", heroImage: "https://images.unsplash.com/photo-1580977276076-ae4b8c219b8e?w=800&q=80", stayCount: 38 },
    { id: 7, name: "Cayman Islands", slug: "cayman-islands", description: "Seven Mile Beach perfection", heroImage: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80", stayCount: 16 },
    { id: 8, name: "US Virgin Islands", slug: "us-virgin-islands", description: "American Caribbean charm", heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80", stayCount: 22 },
    { id: 9, name: "British Virgin Islands", slug: "british-virgin-islands", description: "Sailing and secluded coves", heroImage: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80", stayCount: 14 },
    { id: 10, name: "Antigua & Barbuda", slug: "antigua-barbuda", description: "365 beaches to explore", heroImage: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80", stayCount: 19 },
    { id: 11, name: "St. Barts", slug: "st-barts", description: "French Caribbean elegance", heroImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80", stayCount: 12 },
    { id: 12, name: "Anguilla", slug: "anguilla", description: "Quiet luxury and pristine beaches", heroImage: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80", stayCount: 11 },
  ],
  "mediterranean-europe": [
    { id: 1, name: "Santorini, Greece", slug: "santorini", description: "Iconic sunsets and white-washed villages", heroImage: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80", stayCount: 28 },
    { id: 2, name: "Amalfi Coast, Italy", slug: "amalfi-coast", description: "Dramatic cliffs and coastal charm", heroImage: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800&q=80", stayCount: 22 },
    { id: 3, name: "Mykonos, Greece", slug: "mykonos", description: "Glamorous beaches and vibrant nightlife", heroImage: "https://images.unsplash.com/photo-1601581875039-e899893d520c?w=800&q=80", stayCount: 35 },
    { id: 4, name: "Costa Brava, Spain", slug: "costa-brava", description: "Rugged coves and Catalan culture", heroImage: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80", stayCount: 19 },
    { id: 5, name: "French Riviera", slug: "french-riviera", description: "Glamour from Nice to Monaco", heroImage: "https://images.unsplash.com/photo-1491166617655-0723a0999cfc?w=800&q=80", stayCount: 42 },
    { id: 6, name: "Sardinia, Italy", slug: "sardinia", description: "Emerald waters and hidden beaches", heroImage: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=800&q=80", stayCount: 26 },
    { id: 7, name: "Croatian Coast", slug: "croatian-coast", description: "Dubrovnik to Split perfection", heroImage: "https://images.unsplash.com/photo-1555990538-1e6c89c63156?w=800&q=80", stayCount: 31 },
    { id: 8, name: "Balearic Islands", slug: "balearic-islands", description: "Ibiza, Mallorca, and Menorca", heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", stayCount: 38 },
    { id: 9, name: "Cyprus", slug: "cyprus", description: "Ancient history meets beach life", heroImage: "https://images.unsplash.com/photo-1585241645927-c7a8e5840c42?w=800&q=80", stayCount: 24 },
    { id: 10, name: "Malta", slug: "malta", description: "Historic islands in azure waters", heroImage: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800&q=80", stayCount: 18 },
  ],
}

// Placeholder stay partners - will be replaced with Supabase data
const stayPartnersData = [
  { id: 1, name: "Four Seasons Turks & Caicos", tier: "all-inclusive", priceFrom: 1200, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80" },
  { id: 2, name: "Sandals Grande St. Lucian", tier: "all-inclusive", priceFrom: 450, image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80" },
  { id: 3, name: "The Ritz-Carlton Aruba", tier: "premier", priceFrom: 850, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80" },
  { id: 4, name: "Atlantis Paradise Island", tier: "premier", priceFrom: 550, image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80" },
  { id: 5, name: "Hyatt Ziva Jamaica", tier: "all-inclusive", priceFrom: 380, image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80" },
  { id: 6, name: "Secret Bay Dominica", tier: "premier", priceFrom: 1400, image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80" },
  { id: 7, name: "Ocean Z Aruba", tier: "mid-range", priceFrom: 280, image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80" },
  { id: 8, name: "Divi Village Golf & Beach", tier: "mid-range", priceFrom: 195, image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80" },
  { id: 9, name: "Coral Reef Beach House", tier: "budget", priceFrom: 95, image: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=800&q=80" },
  { id: 10, name: "Island Breeze Inn", tier: "budget", priceFrom: 75, image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80" },
]

interface MicroDestination {
  id: number
  name: string
  slug: string
  description: string
  heroImage: string
  stayCount: number
}

// Region data lookup
const regionData: Record<string, { name: string; description: string; heroImage: string }> = {
  "caribbean-atlantic": {
    name: "Caribbean & Atlantic",
    description: "Crystal-clear waters and white sand beaches across the islands of the Caribbean Sea and Atlantic Ocean.",
    heroImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
  },
  "mediterranean-europe": {
    name: "Mediterranean Europe",
    description: "Sun-drenched coastlines stretching from the Greek islands to the Spanish shores.",
    heroImage: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800&q=80",
  },
  "southeast-asia": {
    name: "Southeast Asia",
    description: "Tropical paradise beaches from Thailand to Indonesia and the Philippines.",
    heroImage: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=800&q=80",
  },
}

export default function RegionDetailPage() {
  const router = useRouter()
  const params = useParams()
  const interestId = params.id as string
  const regionSlug = params.regionSlug as string
  
  const interest = getSpecialInterestById(interestId)
  const region = regionData[regionSlug] || regionData["caribbean-atlantic"]
  const microDestinations = microDestinationsData[regionSlug] || microDestinationsData["caribbean-atlantic"]
  
  const [selectedTier, setSelectedTier] = useState<StayTier>("all")
  const [showAllDestinations, setShowAllDestinations] = useState(false)
  
  // Top 10 destinations
  const top10Destinations = microDestinations.slice(0, 10)
  const additionalDestinations = microDestinations.slice(10)
  
  // Filter stays by tier
  const filteredStays = selectedTier === "all" 
    ? stayPartnersData 
    : stayPartnersData.filter(stay => stay.tier === selectedTier)

  if (!interest) {
    return null
  }

  return (
    <main className="min-h-screen bg-[#F8F6F1]">
      {/* Region Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        {/* Hero Background Image */}
        <Image
          src={region.heroImage}
          alt={region.name}
          fill
          className="object-cover"
          priority
        />
        
        {/* Elegant gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

        {/* Back Navigation */}
        <button
          onClick={() => router.push(`/interests/${interestId}/regions`)}
          className="absolute top-6 left-6 lg:left-12 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
          aria-label="Back to Regions"
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
              <span className="text-white/80 font-sans text-sm">{region.name}</span>
            </div>
            
            {/* Title */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              {region.name}
            </h1>
            
            <p className="font-sans text-lg text-white/80 max-w-2xl">
              {region.description}
            </p>
          </div>
        </div>

        {/* Decorative gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F8F6F1] to-transparent" />
      </section>

      {/* Top 10 Destinations Section */}
      <section className="relative -mt-6 z-10 px-6 lg:px-12 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-8">
            <h2 className="font-serif text-2xl md:text-3xl text-[#1A1A1B] mb-2">
              Top 10 {interest.title} Destinations
            </h2>
            <p className="text-[#6B6B6B] font-sans">
              Our most popular destinations in {region.name}
            </p>
          </div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {top10Destinations.map((destination, index) => (
              <Link
                key={destination.id}
                href={`/interests/${interestId}/regions/${regionSlug}/${destination.slug}`}
                className="group relative overflow-hidden rounded-xl aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Destination Image */}
                <Image
                  src={destination.heroImage}
                  alt={destination.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Rank Badge */}
                <div className="absolute top-3 left-3 w-7 h-7 rounded-full bg-[#C6A96B] text-white text-sm font-sans font-semibold flex items-center justify-center">
                  {index + 1}
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="font-serif text-base md:text-lg text-white mb-1 group-hover:text-[#C6A96B] transition-colors">
                    {destination.name}
                  </h3>
                  <p className="text-xs text-white/60 font-sans">
                    {destination.stayCount} stays
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Tiers Section */}
      <section className="px-6 lg:px-12 py-12 bg-white border-y border-[#E8E4DC]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-8">
            <h2 className="font-serif text-2xl md:text-3xl text-[#1A1A1B] mb-2">
              Where to Stay
            </h2>
            <p className="text-[#6B6B6B] font-sans">
              Filter accommodations by your preferred style
            </p>
          </div>

          {/* Stay Tier Selector */}
          <div className="flex flex-wrap gap-3 mb-10">
            {stayTiers.map((tier) => (
              <button
                key={tier.id}
                onClick={() => setSelectedTier(tier.id)}
                className={`px-5 py-2.5 rounded-full font-sans text-sm font-medium transition-all duration-300 ${
                  selectedTier === tier.id
                    ? "bg-[#2D7A7A] text-white shadow-lg shadow-[#2D7A7A]/30"
                    : "bg-[#F8F6F1] text-[#6B6B6B] hover:bg-[#E8E4DC] hover:text-[#1A1A1B]"
                }`}
              >
                {tier.label}
              </button>
            ))}
          </div>

          {/* Filtered Stays Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredStays.map((stay) => (
              <div
                key={stay.id}
                className="group bg-[#F8F6F1] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
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
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-white/90 backdrop-blur-sm text-xs font-sans font-medium text-[#1A1A1B]">
                    {stayTiers.find(t => t.id === stay.tier)?.label.split(" ")[0]}
                  </div>
                </div>
                
                {/* Stay Info */}
                <div className="p-4">
                  <h3 className="font-serif text-lg text-[#1A1A1B] mb-2 group-hover:text-[#2D7A7A] transition-colors">
                    {stay.name}
                  </h3>
                  <p className="text-sm text-[#6B6B6B] font-sans">
                    From <span className="font-semibold text-[#1A1A1B]">${stay.priceFrom}</span> / night
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredStays.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[#6B6B6B] font-sans">No properties found for this tier. Try another filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Expandable Additional Destinations */}
      {additionalDestinations.length > 0 && (
        <section className="px-6 lg:px-12 py-12">
          <div className="max-w-7xl mx-auto">
            {/* Expand Toggle */}
            <button
              onClick={() => setShowAllDestinations(!showAllDestinations)}
              className="w-full flex items-center justify-between p-5 bg-white rounded-xl border border-[#E8E4DC] hover:border-[#2D7A7A] transition-colors mb-6"
            >
              <div className="text-left">
                <h3 className="font-serif text-xl text-[#1A1A1B]">
                  More Destinations
                </h3>
                <p className="text-sm text-[#6B6B6B] font-sans">
                  {additionalDestinations.length} additional places to explore
                </p>
              </div>
              <svg 
                className={`w-6 h-6 text-[#2D7A7A] transition-transform duration-300 ${showAllDestinations ? "rotate-180" : ""}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Expanded Content */}
            {showAllDestinations && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-in slide-in-from-top-2 duration-300">
                {additionalDestinations.map((destination) => (
                  <Link
                    key={destination.id}
                    href={`/interests/${interestId}/regions/${regionSlug}/${destination.slug}`}
                    className="group flex items-center gap-4 p-4 bg-white rounded-xl border border-[#E8E4DC] hover:border-[#2D7A7A] transition-colors"
                  >
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={destination.heroImage}
                        alt={destination.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-serif text-base text-[#1A1A1B] group-hover:text-[#2D7A7A] transition-colors truncate">
                        {destination.name}
                      </h4>
                      <p className="text-xs text-[#6B6B6B] font-sans">
                        {destination.stayCount} stays
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Footer Navigation */}
      <footer className="bg-white py-10 px-6 lg:px-12 border-t border-[#E8E4DC]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Link
            href={`/interests/${interestId}/regions`}
            className="inline-flex items-center gap-2 text-[#2D7A7A] font-sans font-medium hover:text-[#3D9A9A] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Regions
          </Link>
          <p className="text-sm text-[#6B6B6B] font-sans">
            TravelWell Worlds of Adventure
          </p>
        </div>
      </footer>
    </main>
  )
}
