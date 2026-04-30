"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

// Big 3 Premium Experiences
const big3Experiences = [
  {
    id: "live-entertainment",
    title: "Live Entertainment",
    subtitle: "World-class concerts & shows",
    url: "https://www.ticketmaster.com/",
    isExternal: true,
    images: [
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80",
    ],
  },
  {
    id: "dive-liveaboards",
    title: "Dive & Liveaboards",
    subtitle: "Underwater adventures await",
    url: "/experiences/dive-liveaboards",
    isExternal: false,
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
      "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800&q=80",
    ],
  },
  {
    id: "river-cruises",
    title: "River Cruises",
    subtitle: "Scenic waterway journeys",
    url: "/experiences/river-cruises",
    isExternal: false,
    images: [
      "https://images.unsplash.com/photo-1637851058613-95f0d41c3c2f?w=800&q=80",
      "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=800&q=80",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80",
    ],
  },
]

// 10 Special Interests
const specialInterests = [
  {
    id: "beaches",
    title: "Beaches",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    url: "https://www.getyourguide.com/s/?q=beach&searchSource=3",
  },
  {
    id: "adventure",
    title: "Adventure",
    image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800&q=80",
    url: "https://www.viator.com/tours/Adventure",
  },
  {
    id: "culinary",
    title: "Culinary",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    url: "https://www.getyourguide.com/s/?q=food%20tour&searchSource=3",
  },
  {
    id: "culture-history",
    title: "Culture & History",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
    url: "https://www.tiqets.com/en/search/?q=museum",
  },
  {
    id: "photography",
    title: "Photography",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80",
    url: "https://www.getyourguide.com/s/?q=photography&searchSource=3",
  },
  {
    id: "wellness",
    title: "Wellness",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
    url: "https://www.klook.com/en-US/search/?keyword=spa",
  },
  {
    id: "nightlife",
    title: "Nightlife",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
    url: "https://www.viator.com/searchResults/all?text=nightlife",
  },
  {
    id: "romance",
    title: "Romance & Honeymoons",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80",
    url: "https://www.getyourguide.com/s/?q=romantic&searchSource=3",
  },
  {
    id: "family",
    title: "Family",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80",
    url: "https://www.getyourguide.com/s/?q=family&searchSource=3",
  },
  {
    id: "winter-ski",
    title: "Winter & Ski",
    image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800&q=80",
    url: "https://www.ski.com/",
  },
]

// 5 Wells
const wells = [
  { id: "fly-well", name: "Fly-Well", subtitle: "Flights", icon: "plane", active: true, url: "/wells/fly-well" },
  { id: "stay-well", name: "Stay-Well", subtitle: "Hotels", icon: "bed", active: true, url: "/wells/stay-well" },
  { id: "eat-well", name: "Eat-Well", subtitle: "Dining", icon: "utensils", active: true, url: "/wells/eat-well" },
  { id: "move-well", name: "Move-Well", subtitle: "Transport", icon: "car", active: true, url: "/wells/move-well" },
  { id: "insure-well", name: "Insure-Well", subtitle: "Coming Soon", icon: "shield", active: false, url: "/wells/insure-well" },
]

// Big 3 Tile Component with Image Carousel
function Big3Tile({ experience }: { experience: typeof big3Experiences[0] }) {
  const [currentImage, setCurrentImage] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const TileWrapper = experience.isExternal ? 'a' : Link
  const linkProps = experience.isExternal 
    ? { href: experience.url, target: "_blank", rel: "noopener noreferrer" }
    : { href: experience.url }

  return (
    <TileWrapper
      {...linkProps}
      className="group relative block overflow-hidden rounded-2xl aspect-[4/5] lg:aspect-[3/4]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Images */}
      {experience.images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ${
            currentImage === idx ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img}
            alt={experience.title}
            fill
            className={`object-cover transition-transform duration-700 ${
              isHovered ? "scale-105" : "scale-100"
            }`}
          />
        </div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="font-serif text-2xl lg:text-3xl text-[#F5F5F5] mb-1">
          {experience.title}
        </h3>
        <p className="text-sm text-[#A1A1A1] font-sans">{experience.subtitle}</p>

        {/* Image Indicators */}
        <div className="flex gap-2 mt-4">
          {experience.images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.preventDefault()
                setCurrentImage(idx)
              }}
              className={`h-1 rounded-full transition-all duration-300 ${
                currentImage === idx
                  ? "w-6 bg-[#C6A96B]"
                  : "w-2 bg-[#F5F5F5]/40 hover:bg-[#F5F5F5]/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Hover Arrow */}
      <div
        className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-[#C6A96B]/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        }`}
      >
        <svg
          className="w-5 h-5 text-[#C6A96B]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>
    </TileWrapper>
  )
}

// Special Interest Tile Component
function InterestTile({ interest }: { interest: typeof specialInterests[0] }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href={interest.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-xl aspect-[4/3]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={interest.image}
        alt={interest.title}
        fill
        className={`object-cover transition-transform duration-500 ${
          isHovered ? "scale-110" : "scale-100"
        }`}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-4">
        <h4 className="font-serif text-lg text-[#F5F5F5]">{interest.title}</h4>
      </div>

      {/* Hover Effect */}
      <div
        className={`absolute inset-0 border-2 rounded-xl transition-all duration-300 ${
          isHovered ? "border-[#C6A96B]" : "border-transparent"
        }`}
      />
    </a>
  )
}

// Well Icon Component
function WellIcon({ icon }: { icon: string }) {
  const icons: Record<string, JSX.Element> = {
    plane: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
    bed: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    utensils: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
      </svg>
    ),
    car: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    shield: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  }

  return icons[icon] || null
}

export default function DiscoverPage() {
  return (
    <main className="min-h-screen bg-[#0F0F10]">
      {/* Hero Header */}
      <div className="pt-24 pb-8 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs text-[#C6A96B] font-sans uppercase tracking-widest">
            Discover
          </span>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#F5F5F5] mt-2 mb-3">
            Extraordinary Experiences
          </h1>
          <p className="text-[#A1A1A1] font-sans text-lg max-w-2xl">
            Curated journeys for the discerning traveler
          </p>
        </div>
      </div>

      {/* Big 3 Section */}
      <section className="px-6 lg:px-12 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {big3Experiences.map((exp) => (
              <Big3Tile key={exp.id} experience={exp} />
            ))}
          </div>
        </div>
      </section>

      {/* Special Interests Section */}
      <section className="px-6 lg:px-12 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-serif text-2xl text-[#F5F5F5]">
                Special Interests
              </h2>
              <p className="text-sm text-[#7A7A7A] font-sans mt-1">
                Explore your passions
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {specialInterests.map((interest) => (
              <InterestTile key={interest.id} interest={interest} />
            ))}
          </div>
        </div>
      </section>

      {/* 5 Wells Section */}
      <section className="px-6 lg:px-12 py-12 border-t border-[#2A2A2B]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs text-[#C6A96B] font-sans uppercase tracking-widest">
              The 5 Wells
            </span>
            <h2 className="font-serif text-2xl text-[#F5F5F5] mt-2">
              Your Travel Ecosystem
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {wells.map((well) => (
              <Link
                key={well.id}
                href={well.url}
                className={`relative p-6 rounded-xl text-center transition-all duration-300 ${
                  well.active
                    ? "bg-[#1A1A1B] border border-[#2A2A2B] hover:border-[#C6A96B]/40 cursor-pointer group"
                    : "bg-[#1A1A1B]/50 border border-[#2A2A2B]/50 opacity-60"
                }`}
              >
                <div
                  className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3 transition-colors ${
                    well.active
                      ? "bg-[#C6A96B]/10 text-[#C6A96B] group-hover:bg-[#C6A96B]/20"
                      : "bg-[#2A2A2B]/50 text-[#5A5A5A]"
                  }`}
                >
                  <WellIcon icon={well.icon} />
                </div>
                <h4 className={`font-serif text-base ${well.active ? "text-[#F5F5F5]" : "text-[#5A5A5A]"}`}>
                  {well.name}
                </h4>
                <p className={`text-xs font-sans mt-1 ${well.active ? "text-[#7A7A7A]" : "text-[#5A5A5A]"}`}>
                  {well.subtitle}
                </p>

                {!well.active && (
                  <span className="absolute top-3 right-3 text-[10px] font-sans text-[#5A5A5A] uppercase tracking-wider">
                    Soon
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Itinerary CTA */}
      <section className="px-6 lg:px-12 py-12 border-t border-[#2A2A2B]">
        <div className="max-w-7xl mx-auto">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1A1A1B] via-[#1A1A1B] to-[#C6A96B]/5 border border-[#C6A96B]/20 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs text-[#C6A96B] font-sans uppercase tracking-widest">
                Sample Journey
              </span>
              <h3 className="font-serif text-xl text-[#F5F5F5] mt-1">
                7-Day Paris Experience
              </h3>
              <p className="text-sm text-[#7A7A7A] font-sans mt-1">
                Two Couples · Springsteen Concert · Luxury Itinerary
              </p>
            </div>
            <Link
              href="/itinerary"
              className="px-6 py-3 rounded-full bg-[#C6A96B] text-[#0F0F10] font-sans font-medium hover:bg-[#E8DFC8] transition-colors flex items-center gap-2"
            >
              View Itinerary
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 lg:px-12 py-8 border-t border-[#2A2A2B]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs text-[#5A5A5A] font-sans">
            Extraordinary journeys, effortlessly curated
          </p>
        </div>
      </footer>
    </main>
  )
}
