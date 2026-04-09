"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { categories } from "@/lib/data"
import { PrimaryButton } from "@/components/travel/primary-button"
import { WellPopupModal } from "@/components/travel/well-popup-modal"
import { getPopupData, affiliatePartners } from "@/lib/monetization"

const categoryIcons: Record<string, React.ReactNode> = {
  bed: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  utensils: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  compass: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  ),
  car: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  ),
  sparkles: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
}

export default function CategoriesPage() {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [popupCategory, setPopupCategory] = useState<string | null>(null)
  
  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId)
  }
  
  const handleInfoClick = (e: React.MouseEvent, categoryId: string) => {
    e.stopPropagation()
    setPopupCategory(categoryId)
  }
  
  const popupData = popupCategory ? getPopupData(popupCategory) : null
  const wellName = popupCategory ? categories.find(c => c.id === popupCategory)?.name || '' : ''
  
  const handleContinue = () => {
    if (selectedCategory) {
      router.push(`/categories/${selectedCategory}`)
    }
  }
  
  return (
    <main className="min-h-screen bg-[#0F0F10]">
      {/* Header with Back Arrow */}
      <div className="px-5 md:px-6 pt-6 md:pt-8">
        <button
          onClick={() => router.push("/onboarding")}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1A1A1B] border border-[#2A2A2B] text-[#A1A1A1] hover:text-[#F5F5F5] hover:border-[#3A3A3B] transition-colors mb-6"
          aria-label="Go back"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <span className="text-sm text-[#C6A96B] font-sans uppercase tracking-widest">
          Your Journey
        </span>
        <h1 className="font-serif text-2xl md:text-4xl text-[#F5F5F5] mt-2 leading-tight">
          Curate Your Experience
        </h1>
        <p className="text-base text-[#A1A1A1] font-sans mt-3">
          Select a category to explore our curated recommendations
        </p>
      </div>
      
      {/* Categories */}
      <div className="px-5 md:px-6 pt-6 pb-32">
        <div className="flex flex-col gap-4">
          {categories.map((category) => {
            const partnerData = affiliatePartners[category.name]
            return (
              <div
                key={category.id}
                role="button"
                tabIndex={0}
                onClick={() => handleCategorySelect(category.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleCategorySelect(category.id)
                  }
                }}
                className={`
                  w-full p-5 md:p-6 rounded-xl border transition-all duration-300 ease-out text-left cursor-pointer
                  focus:outline-none focus:ring-2 focus:ring-[#C6A96B] focus:ring-offset-2 focus:ring-offset-[#0F0F10]
                  ${selectedCategory === category.id
                    ? 'bg-[#1A1A1B] border-[#C6A96B] scale-[1.02]'
                    : 'bg-[#1A1A1B] border-[#2A2A2B] hover:border-[#C6A96B]/50'
                  }
                `}
              >
                <div className="flex items-center gap-4">
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300
                    ${selectedCategory === category.id 
                      ? 'bg-[#C6A96B] text-[#0F0F10]' 
                      : 'bg-[#2A2A2B] text-[#C6A96B]'
                    }
                  `}>
                    {categoryIcons[category.icon]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className={`
                        font-serif text-xl transition-colors duration-300
                        ${selectedCategory === category.id ? 'text-[#C6A96B]' : 'text-[#F5F5F5]'}
                      `}>
                        {category.name}
                      </h3>
                      {/* Info button for monetization popup */}
                      <button
                        onClick={(e) => handleInfoClick(e, category.id)}
                        className="w-5 h-5 rounded-full flex items-center justify-center text-[#5A5A5A] hover:text-[#C6A96B] hover:bg-[#C6A96B]/10 transition-colors"
                        aria-label={`View ${category.name} partnership info`}
                      >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </button>
                    </div>
                    <p className="text-sm text-[#A1A1A1] font-sans mt-0.5">
                      {category.subtitle}
                    </p>
                    {/* Subtle commission indicator */}
                    {partnerData && (
                      <p className="text-xs text-[#5A5A5A] font-sans mt-1.5">
                        Earns: <span className="text-[#C6A96B]/60">{partnerData.commissionRange}</span>
                      </p>
                    )}
                  </div>
                  <svg 
                    className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${selectedCategory === category.id ? 'text-[#C6A96B] translate-x-1' : 'text-[#A1A1A1]'}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* View Itinerary Link */}
        <div className="mt-8 text-center">
          <button
            onClick={() => router.push("/itinerary")}
            className="text-[#C6A96B] font-sans text-sm underline underline-offset-4 hover:text-[#E8DFC8] transition-colors"
          >
            View Your Complete Itinerary
          </button>
        </div>
      </div>
      
      {/* Fixed Bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0F0F10]/95 backdrop-blur-sm border-t border-[#2A2A2B] p-5 md:p-6">
        <div className="max-w-lg mx-auto">
          <PrimaryButton 
            onClick={handleContinue}
            disabled={!selectedCategory}
          >
            Explore Category
          </PrimaryButton>
        </div>
      </div>
      
      {/* Well Category Popup Modal */}
      <WellPopupModal
        isOpen={!!popupCategory}
        onClose={() => setPopupCategory(null)}
        popup={popupData}
        wellName={wellName}
      />
    </main>
  )
}
