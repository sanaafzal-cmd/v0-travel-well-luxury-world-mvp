"use client"

import { useRouter, useParams } from "next/navigation"
import { categories } from "@/lib/data"
import { CategoryCard } from "@/components/travel/category-card"
import { PrimaryButton } from "@/components/travel/primary-button"
import { VCDemoButton } from "@/components/travel/vc-demo-button"
import { useSelections } from "@/lib/selections-context"

export default function CategoryDetailPage() {
  const router = useRouter()
  const params = useParams()
  const categoryId = params.categoryId as string
  const { addSelection, removeSelection, isSelected, getSelectionCount } = useSelections()
  
  const category = categories.find(c => c.id === categoryId)
  
  if (!category) {
    return (
      <main className="min-h-screen bg-[#0F0F10] flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="font-serif text-2xl text-[#F5F5F5] mb-4">Category not found</h1>
          <PrimaryButton onClick={() => router.push("/categories")}>
            Back to Categories
          </PrimaryButton>
        </div>
      </main>
    )
  }
  
  const handleSelect = (optionId: string, optionTitle: string) => {
    if (isSelected(categoryId, optionId)) {
      removeSelection(categoryId, optionId)
    } else {
      addSelection(categoryId, optionId, optionTitle)
    }
  }
  
  const selectionCount = getSelectionCount(categoryId)
  
  const handleConfirm = () => {
    router.push("/categories")
  }
  
  return (
    <main className="min-h-screen bg-[#0F0F10]">
      {/* Header */}
      <div className="sticky top-16 md:top-[72px] z-20 bg-[#0F0F10]/95 backdrop-blur-md border-b border-[#2A2A2B]">
        <div className="px-5 md:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.back()}
              className="w-10 h-10 rounded-full bg-[#1A1A1B] border border-[#2A2A2B] flex items-center justify-center text-[#A1A1A1] hover:text-[#F5F5F5] hover:border-[#3A3A3B] transition-colors"
              aria-label="Go back"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div>
              <span className="text-xs text-[#C6A96B] font-sans uppercase tracking-widest">
                {category.subtitle}
              </span>
              <h1 className="font-serif text-xl text-[#F5F5F5]">
                {category.name}
              </h1>
            </div>
          </div>
          <VCDemoButton variant="compact" />
        </div>
      </div>
      
      {/* Intro */}
      <div className="px-6 py-8">
        <p className="text-base text-[#A1A1A1] font-sans leading-relaxed">
          Our curated selection of exceptional experiences. Each option has been personally vetted for quality and exclusivity.
        </p>
      </div>
      
      {/* Options */}
      <div className="px-5 md:px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {category.options.map((option) => (
            <CategoryCard
              key={option.id}
              option={option}
              isSelected={isSelected(categoryId, option.id)}
              onSelect={() => handleSelect(option.id, option.title)}
            />
          ))}
        </div>
      </div>
      
      {/* Fixed Bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0F0F10]/95 backdrop-blur-sm border-t border-[#2A2A2B] p-6">
        <div className="max-w-lg mx-auto flex gap-4">
          <PrimaryButton 
            variant="secondary"
            onClick={() => router.push("/categories")}
            className="w-auto px-6"
          >
            Back
          </PrimaryButton>
          <PrimaryButton 
            onClick={handleConfirm}
            className="flex-1"
          >
            {selectionCount > 0 
              ? `Done (${selectionCount} selected)` 
              : 'Continue'
            }
          </PrimaryButton>
        </div>
      </div>
    </main>
  )
}
