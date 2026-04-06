"use client"

import Image from "next/image"
import type { CategoryOption } from "@/lib/data"

interface CategoryCardProps {
  option: CategoryOption
  isSelected: boolean
  onSelect: () => void
}

export function CategoryCard({ option, isSelected, onSelect }: CategoryCardProps) {
  return (
    <button
      onClick={onSelect}
      className={`
        relative w-full overflow-hidden rounded-xl transition-all duration-300 ease-out
        focus:outline-none focus:ring-2 focus:ring-[#C6A96B] focus:ring-offset-2 focus:ring-offset-[#0F0F10]
        ${isSelected 
          ? 'ring-2 ring-[#C6A96B] scale-[1.02]' 
          : 'hover:scale-[1.01] active:scale-[0.99]'
        }
      `}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={option.image}
          alt={option.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F10] via-[#0F0F10]/50 to-transparent" />
        
        {/* Rating stars */}
        <div className="absolute top-4 left-4 flex gap-0.5">
          {Array.from({ length: option.rating }).map((_, i) => (
            <svg key={i} className="w-3 h-3 text-[#C6A96B]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        
        {/* Selection indicator */}
        {isSelected && (
          <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-[#C6A96B] flex items-center justify-center animate-scale-in">
            <svg className="w-4 h-4 text-[#0F0F10]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="flex items-end justify-between">
          <div>
            <h3 className={`
              font-serif text-xl mb-1 transition-colors duration-300
              ${isSelected ? 'text-[#C6A96B]' : 'text-[#F5F5F5]'}
            `}>
              {option.title}
            </h3>
            <p className="text-sm text-[#A1A1A1] font-sans">
              {option.subtitle}
            </p>
          </div>
          <span className="text-sm text-[#C6A96B] font-sans">
            {option.priceLevel}
          </span>
        </div>
      </div>
    </button>
  )
}
