"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { Navbar } from "@/components/travel/navbar"

const partners = [
  {
    name: "Uber",
    description: "Rides and car rentals worldwide",
    url: "https://www.uber.com/",
    logo: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&q=80",
  },
  {
    name: "Sixt",
    description: "Premium car rentals globally",
    url: "https://www.sixt.com/",
    logo: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=400&q=80",
  },
  {
    name: "Blacklane",
    description: "Professional chauffeur services",
    url: "https://www.blacklane.com/",
    logo: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&q=80",
  },
]

export default function MoveWellPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-[#0F0F10]">
      <Navbar />

      {/* Hero */}
      <div className="relative h-[40vh] min-h-[300px]">
        <Image
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&q=80"
          alt="Move-Well"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F10] via-[#0F0F10]/60 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-12">
          <button
            onClick={() => router.push("/discover")}
            className="absolute top-24 left-6 lg:left-12 w-10 h-10 rounded-full bg-[#1A1A1B]/80 backdrop-blur-sm border border-[#2A2A2B] flex items-center justify-center text-[#A1A1A1] hover:text-[#F5F5F5] hover:border-[#3A3A3B] transition-colors"
            aria-label="Go back"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <span className="text-xs text-[#C6A96B] font-sans uppercase tracking-widest">
            Move-Well
          </span>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#F5F5F5] mt-2">
            Transport
          </h1>
          <p className="text-[#A1A1A1] font-sans text-lg max-w-xl mt-3">
            Travel in style and comfort. From luxury chauffeurs to premium car rentals, move effortlessly through your journey.
          </p>
        </div>
      </div>

      {/* Partners */}
      <section className="px-6 lg:px-12 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-xl text-[#F5F5F5] mb-6">
            Transport Partners
          </h2>
          
          <div className="grid gap-4">
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 p-5 rounded-xl bg-[#1A1A1B] border border-[#2A2A2B] hover:border-[#C6A96B]/40 transition-all duration-300"
              >
                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-lg text-[#F5F5F5] group-hover:text-[#C6A96B] transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-[#7A7A7A] font-sans">
                    {partner.description}
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-[#5A5A5A] group-hover:text-[#C6A96B] transition-colors flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-12 py-8 border-t border-[#2A2A2B]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs text-[#5A5A5A] font-sans">
            TravelWell earns a commission when you book through our partners
          </p>
        </div>
      </section>
    </main>
  )
}
