"use client"

import { useRouter, useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { getSpecialInterestById, specialInterestsData } from "@/lib/special-interests-data"

// Placeholder regions data - will be replaced with Supabase data when populated
const regionsData: Record<string, RegionData[]> = {
  "beaches": [
    {
      id: 1,
      name: "Caribbean & Atlantic",
      slug: "caribbean-atlantic",
      description: "Crystal-clear waters and white sand beaches across the islands",
      heroImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    },
    {
      id: 2,
      name: "Mediterranean Europe",
      slug: "mediterranean-europe",
      description: "Sun-drenched coastlines from Greece to Spain",
      heroImage: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800&q=80",
    },
    {
      id: 3,
      name: "Southeast Asia",
      slug: "southeast-asia",
      description: "Tropical paradise from Thailand to Indonesia",
      heroImage: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=800&q=80",
    },
    {
      id: 4,
      name: "South Pacific",
      slug: "south-pacific",
      description: "Remote island escapes in Fiji, Tahiti and beyond",
      heroImage: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80",
    },
    {
      id: 5,
      name: "Hawaii",
      slug: "hawaii",
      description: "Volcanic beaches and aloha spirit",
      heroImage: "https://images.unsplash.com/photo-1507876466758-bc54f384809c?w=800&q=80",
    },
    {
      id: 6,
      name: "Australia & Oceania",
      slug: "australia-oceania",
      description: "From the Great Barrier Reef to pristine shores",
      heroImage: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&q=80",
    },
    {
      id: 7,
      name: "Indian Ocean",
      slug: "indian-ocean",
      description: "Maldives, Seychelles, and Mauritius luxury",
      heroImage: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    },
    {
      id: 8,
      name: "Americas Coastal",
      slug: "americas-coastal",
      description: "From California to Brazil's stunning coastline",
      heroImage: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
    },
  ],
  "adventure": [
    {
      id: 1,
      name: "East Africa",
      slug: "east-africa",
      description: "Safari adventures in Kenya, Tanzania, and beyond",
      heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    },
    {
      id: 2,
      name: "Southern Africa",
      slug: "southern-africa",
      description: "From Kruger to Victoria Falls",
      heroImage: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
    },
    {
      id: 3,
      name: "South America",
      slug: "south-america",
      description: "Amazon, Patagonia, and Andes adventures",
      heroImage: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80",
    },
    {
      id: 4,
      name: "Central America",
      slug: "central-america",
      description: "Rainforests, volcanoes, and ancient ruins",
      heroImage: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800&q=80",
    },
    {
      id: 5,
      name: "Himalayas & Asia",
      slug: "himalayas-asia",
      description: "Mountain treks and spiritual journeys",
      heroImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
    },
    {
      id: 6,
      name: "New Zealand",
      slug: "new-zealand",
      description: "Adventure capital of the world",
      heroImage: "https://images.unsplash.com/photo-1469521669194-babb45599def?w=800&q=80",
    },
    {
      id: 7,
      name: "Arctic & Antarctica",
      slug: "arctic-antarctica",
      description: "Polar expeditions and wildlife encounters",
      heroImage: "https://images.unsplash.com/photo-1551415923-a2297c7fda79?w=800&q=80",
    },
    {
      id: 8,
      name: "North America",
      slug: "north-america",
      description: "National parks and wilderness experiences",
      heroImage: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&q=80",
    },
  ],
}

interface RegionData {
  id: number
  name: string
  slug: string
  description: string
  heroImage: string
}

export default function RegionsPage() {
  const router = useRouter()
  const params = useParams()
  const interestId = params.id as string
  
  const interest = getSpecialInterestById(interestId)
  const regions = regionsData[interestId] || regionsData["beaches"] // Fallback to beaches
  
  const [hoveredRegion, setHoveredRegion] = useState<number | null>(null)

  if (!interest) {
    return null
  }

  return (
    <main className="min-h-screen bg-[#F8F6F1]">
      {/* Premium Hero Section */}
      <section className="relative h-[45vh] min-h-[350px] overflow-hidden">
        {/* Hero Background Image */}
        <Image
          src={interest.heroImage}
          alt={interest.title}
          fill
          className="object-cover"
          priority
        />
        
        {/* Elegant gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

        {/* Back Navigation */}
        <button
          onClick={() => router.push(`/interests/${interestId}`)}
          className="absolute top-6 left-6 lg:left-12 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
          aria-label="Back to Interest"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-12 pb-12">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-white/60 font-sans text-sm">TravelWell</span>
              <span className="text-white/40">/</span>
              <span className="text-white/80 font-sans text-sm">{interest.title}</span>
            </div>
            
            {/* Title */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-3">
              Explore Regions
            </h1>
            
            <p className="font-sans text-lg text-white/80 max-w-xl">
              Choose your destination region to discover the best {interest.title.toLowerCase()} experiences
            </p>
          </div>
        </div>

        {/* Decorative gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F8F6F1] to-transparent" />
      </section>

      {/* Regions Grid Section */}
      <section className="relative -mt-4 z-10 px-6 lg:px-12 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-10">
            <h2 className="font-serif text-2xl md:text-3xl text-[#1A1A1B] mb-2">
              Global Regions
            </h2>
            <p className="text-[#6B6B6B] font-sans">
              {regions.length} destinations available
            </p>
          </div>

          {/* Regions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {regions.map((region) => (
              <Link
                key={region.id}
                href={`/interests/${interestId}/regions/${region.slug}`}
                className="group relative overflow-hidden rounded-2xl aspect-[4/5] shadow-lg hover:shadow-2xl transition-all duration-500"
                onMouseEnter={() => setHoveredRegion(region.id)}
                onMouseLeave={() => setHoveredRegion(null)}
              >
                {/* Region Image */}
                <Image
                  src={region.heroImage}
                  alt={region.name}
                  fill
                  className={`object-cover transition-transform duration-700 ${
                    hoveredRegion === region.id ? "scale-110" : "scale-100"
                  }`}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <h3 className="font-serif text-xl md:text-2xl text-white mb-2 group-hover:text-[#C6A96B] transition-colors">
                    {region.name}
                  </h3>
                  <p className="font-sans text-sm text-white/70 line-clamp-2">
                    {region.description}
                  </p>
                  
                  {/* Hover Arrow */}
                  <div className={`mt-4 flex items-center gap-2 text-[#C6A96B] transition-all duration-300 ${
                    hoveredRegion === region.id ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                  }`}>
                    <span className="text-sm font-sans">Explore</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Premium Border on Hover */}
                <div className={`absolute inset-0 rounded-2xl border-2 transition-all duration-300 pointer-events-none ${
                  hoveredRegion === region.id ? "border-[#C6A96B]/60" : "border-transparent"
                }`} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <footer className="bg-white py-10 px-6 lg:px-12 border-t border-[#E8E4DC]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Link
            href={`/interests/${interestId}`}
            className="inline-flex items-center gap-2 text-[#2D7A7A] font-sans font-medium hover:text-[#3D9A9A] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to {interest.title}
          </Link>
          <p className="text-sm text-[#6B6B6B] font-sans">
            TravelWell Worlds of Adventure
          </p>
        </div>
      </footer>
    </main>
  )
}
