"use client"

import { useRouter, useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getSpecialInterestById, signatureIntroCopy, specialInterestsData } from "@/lib/special-interests-data"

// Helper to create in-frame partner URL
function getPartnerUrl(url: string, name: string, returnPath: string) {
  return `/partner?url=${encodeURIComponent(url)}&name=${encodeURIComponent(name)}&return=${encodeURIComponent(returnPath)}`
}

export default function SpecialInterestPage() {
  const router = useRouter()
  const params = useParams()
  const id = params.id as string
  
  const interest = getSpecialInterestById(id)
  
  if (!interest) {
    notFound()
  }

  const partnerLink = getPartnerUrl(
    interest.partnerDeepLink,
    interest.partnerName,
    `/interests/${interest.id}`
  )

  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      {/* Premium Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        {/* Hero Background Image */}
        <Image
          src={interest.heroImage}
          alt={interest.title}
          fill
          className="object-cover"
          priority
        />
        
        {/* Elegant gradient overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

        {/* Back Navigation */}
        <button
          onClick={() => router.push("/discover")}
          className="absolute top-6 left-6 lg:left-12 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
          aria-label="Back to Discover"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-12 pb-16">
          <div className="max-w-4xl">
            {/* Category Label */}
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 font-sans text-xs uppercase tracking-widest mb-6">
              Special Interest
            </span>
            
            {/* Title */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-4 leading-tight">
              {interest.title}
            </h1>
            
            {/* Subtle tagline */}
            <p className="font-sans text-lg md:text-md text-white/80 max-w-2xl mb-4">
              Your curated gateway to extraordinary experiences
            </p>
          </div>
        </div>

        {/* Decorative gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FAF9F6] to-transparent" />
      </section>

      {/* Content Section */}
      <section className="relative -mt-8 z-10 px-6 lg:px-12 pb-20">
        <div className="max-w-3xl mx-auto">
          {/* Premium Card */}
          <div className="bg-white rounded-3xl shadow-2xl shadow-black/10 p-8 md:p-12 border border-[#E8E4DC]">
            {/* Signature Intro Copy */}
            <div className="mb-10">
              <p className="font-serif text-xl md:text-2xl text-[#1A1A1B] leading-relaxed whitespace-pre-line">
                {signatureIntroCopy}
              </p>
            </div>

            {/* Elegant Divider */}
            <div className="flex items-center gap-4 mb-10">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#E8E4DC] to-transparent" />
              <div className="w-2 h-2 rounded-full bg-[#2D7A7A]" />
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#E8E4DC] to-transparent" />
            </div>

            {/* Dynamic Partner Guidance Section */}
            <div className="mb-10">
              <h2 className="font-serif text-lg md:text-xl text-[#2D7A7A] mb-3">
                Getting Started
              </h2>
              <p className="font-sans text-[#6B6B6B] text-base md:text-lg leading-relaxed">
                {interest.guideText}
              </p>
            </div>

            {/* Prime Partner CTA Section */}
            <div className="bg-gradient-to-br from-[#FAF9F6] to-[#F0EDE8] rounded-2xl p-6 md:p-8 border border-[#E8E4DC]">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <p className="text-sm text-[#6B6B6B] font-sans uppercase tracking-wider mb-1">
                    Powered by
                  </p>
                  <p className="font-serif text-xl md:text-2xl text-[#1A1A1B]">
                    {interest.partnerName}
                  </p>
                </div>
                
                <Link
                  href={partnerLink}
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#2D7A7A] text-white font-sans font-semibold text-base md:text-lg shadow-lg shadow-[#2D7A7A]/30 hover:bg-[#3D9A9A] hover:shadow-xl hover:shadow-[#2D7A7A]/40 transition-all duration-300"
                >
                  {interest.ctaLabel}
                  <svg 
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Explore More Section */}
          <div className="mt-12 text-center">
            <p className="text-sm text-[#6B6B6B] font-sans mb-4">
              Explore other interests
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {specialInterestsData
                .filter((item) => item.id !== interest.id)
                .slice(0, 5)
                .map((item) => (
                  <Link
                    key={item.id}
                    href={`/interests/${item.id}`}
                    className="px-4 py-2 rounded-full bg-white border border-[#E8E4DC] text-[#6B6B6B] font-sans text-sm hover:border-[#2D7A7A] hover:text-[#2D7A7A] transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 px-6 lg:px-12 border-t border-[#E8E4DC]">
        <div className="max-w-7xl mx-auto text-center">
          <Link
            href="/discover"
            className="inline-flex items-center gap-2 text-[#2D7A7A] font-sans font-medium hover:text-[#3D9A9A] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Discover
          </Link>
          <p className="text-sm text-[#6B6B6B] font-sans mt-4">
            TravelWell Worlds of Adventure
          </p>
        </div>
      </footer>
    </main>
  )
}
