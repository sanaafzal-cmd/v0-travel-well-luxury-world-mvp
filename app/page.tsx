"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { PrimaryButton } from "@/components/travel/primary-button"

export default function HomePage() {
  const router = useRouter()
  
  return (
    <main className="min-h-screen bg-[#0F0F10] flex flex-col">
      {/* Hero Section */}
      <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 h-[50vh]">
          <Image
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80"
            alt="Paris Eiffel Tower at golden hour"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F10]/40 via-[#0F0F10]/60 to-[#0F0F10]" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col px-6 pt-16 pb-8">
          {/* Logo / Brand */}
          <div className="mb-8">
            <span className="text-[#C6A96B] font-serif text-lg tracking-wider">
              TravelWell
            </span>
          </div>
          
          {/* Hero Text */}
          <div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-8xl text-[#F5F5F5] leading-tight mb-4">
              <span className="block">Luxury</span>
              <span className="block text-[#C6A96B]">Redefined</span>
            </h1>
            <p className="text-lg text-[#A1A1A1] font-sans leading-relaxed max-w-md">
              Your personal concierge for extraordinary journeys. Curated experiences tailored to your desires.
            </p>
          </div>
        </div>
      </div>
      
      {/* Features */}
      <div className="px-6 py-12">
        <div className="flex flex-col gap-6">
          <FeatureItem 
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            }
            title="Personalized Curation"
            description="Every experience selected for your unique preferences"
          />
          <FeatureItem 
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            title="Effortless Planning"
            description="From arrival to departure, every detail considered"
          />
          <FeatureItem 
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            }
            title="Exclusive Access"
            description="Unlock experiences reserved for the discerning few"
          />
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="px-6 pb-8">
        <div className="flex flex-col gap-4">
          <PrimaryButton onClick={() => router.push("/onboarding")}>
            Begin Your Journey
          </PrimaryButton>
          <PrimaryButton variant="ghost" onClick={() => router.push("/itinerary")}>
            View Sample Itinerary
          </PrimaryButton>
        </div>
        
        {/* VC Demo Link */}
        <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-[#C6A96B]/10 via-[#C6A96B]/5 to-[#C6A96B]/10 border border-[#C6A96B]/20">
          <button
            onClick={() => router.push("/demo")}
            className="w-full flex items-center justify-between"
          >
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#C6A96B] font-sans uppercase tracking-widest">
                  Investor Demo
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-sans bg-[#C6A96B]/20 text-[#C6A96B] border border-[#C6A96B]/30">
                  LIVE
                </span>
              </div>
              <span className="text-sm text-[#F5F5F5] font-sans mt-1 block">
                Paris Springsteen Trip — Revenue Model
              </span>
            </div>
            <svg className="w-5 h-5 text-[#C6A96B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <p className="text-center text-xs text-[#7A7A7A] font-sans mt-6">
          Crafted with care for extraordinary travelers
        </p>
      </div>
    </main>
  )
}

function FeatureItem({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode
  title: string
  description: string 
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-[#1A1A1B] border border-[#2A2A2B] flex items-center justify-center text-[#C6A96B] flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-serif text-lg text-[#F5F5F5] mb-1">
          {title}
        </h3>
        <p className="text-sm text-[#A1A1A1] font-sans">
          {description}
        </p>
      </div>
    </div>
  )
}
