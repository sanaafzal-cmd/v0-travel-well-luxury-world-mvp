"use client"

import Image from "next/image"

interface OptionCardProps {
  title: string
  subtitle: string
  image: string
  isSelected: boolean
  onSelect: () => void
  tierTag?: string
}

export function OptionCard({ title, subtitle, image, isSelected, onSelect, tierTag }: OptionCardProps) {
  return (
    <button
      onClick={onSelect}
      className={`
        relative w-full overflow-hidden rounded-xl transition-all duration-300 ease-out
        focus:outline-none
        ${isSelected 
          ? 'ring-2 ring-[#C6A96B]' 
          : 'ring-1 ring-[#2A2A2B] hover:ring-[#3A3A3B]'
        }
      `}
    >
      {/* Image container - taller aspect ratio for mobile */}
      <div className="relative aspect-[4/3] md:aspect-[16/10] w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F10] via-[#0F0F10]/40 to-transparent" />
        
        {/* Tier tag */}
        {tierTag && !isSelected && (
          <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-[#0F0F10]/70 backdrop-blur-sm border border-[#2A2A2B]">
            <span className="text-xs text-[#A1A1A1] font-sans tracking-wide">{tierTag}</span>
          </div>
        )}
        
        {/* Selection indicator */}
        {isSelected && (
          <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#C6A96B] flex items-center justify-center animate-scale-in">
            <svg className="w-5 h-5 text-[#0F0F10]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}
        
        {/* Content - positioned at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
          <h3 className={`
            font-serif text-xl md:text-2xl mb-1 transition-colors duration-300
            ${isSelected ? 'text-[#C6A96B]' : 'text-[#F5F5F5]'}
          `}>
            {title}
          </h3>
          <p className="text-sm text-[#A1A1A1] font-sans">
            {subtitle}
          </p>
        </div>
      </div>
    </button>
  )
}
