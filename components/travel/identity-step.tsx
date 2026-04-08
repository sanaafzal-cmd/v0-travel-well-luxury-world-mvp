"use client"

import type { IdentityStepData } from "@/lib/data"
import { OptionCard } from "./option-card"
import Image from "next/image"

interface IdentityStepProps {
  step: IdentityStepData
  selectedOptions: string[]
  onSelectOption: (optionId: string) => void
  onSelectPace?: (optionId: string) => void
  onSelectStructure?: (optionId: string) => void
}

export function IdentityStep({ step, selectedOptions, onSelectOption, onSelectPace, onSelectStructure }: IdentityStepProps) {
  const layout = step.layout || 'cards'

  return (
    <div className="w-full flex flex-col animate-fade-in">
      {/* Header */}
      <div className="px-5 md:px-6 pt-6 md:pt-10 pb-5 md:pb-8">
        <h1 className="font-serif text-2xl md:text-4xl lg:text-5xl text-[#F5F5F5] leading-snug md:leading-tight mb-2 md:mb-4 tracking-tight">
          {step.question}
        </h1>
        <p className="text-base md:text-lg text-[#A1A1A1] font-sans leading-relaxed">
          {step.subtitle}
        </p>
      </div>
      
      {/* Options */}
      <div className="flex-1 px-5 md:px-6 pb-40 md:pb-36">
        {layout === 'dual-image' ? (
          <div className="space-y-8">
            {/* Pace section */}
            <div>
              <h3 className="text-xs md:text-sm uppercase tracking-wider text-[#A1A1A1] mb-4 font-sans">Pace</h3>
              <div className="flex flex-col md:grid md:grid-cols-3 gap-3">
                {step.options.filter(o => o.id.startsWith('pace')).map((option) => {
                  const isSelected = selectedOptions.some(s => s === option.id)
                  return (
                    <button
                      key={option.id}
                      onClick={() => onSelectPace?.(option.id)}
                      className={`
                        relative rounded-xl overflow-hidden aspect-[4/3] transition-all duration-300
                        ${isSelected
                          ? 'ring-2 ring-[#C6A96B]'
                          : 'ring-1 ring-[#2A2A2B] hover:ring-[#3A3A3B]'
                        }
                      `}
                    >
                      <Image
                        src={option.image}
                        alt={option.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <span className={`block font-serif text-lg md:text-xl mb-1 ${isSelected ? 'text-[#C6A96B]' : 'text-[#F5F5F5]'}`}>
                          {option.title.replace('Slow & Deliberate', 'Slow').replace('Fast & Dynamic', 'Fast').replace('Balanced Flow', 'Balanced')}
                        </span>
                        <span className="block text-sm text-[#A1A1A1]">{option.subtitle}</span>
                      </div>
                      {isSelected && (
                        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#C6A96B] flex items-center justify-center">
                          <svg className="w-5 h-5 text-[#0F0F10]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
            
            {/* Structure section */}
            <div>
              <h3 className="text-xs md:text-sm uppercase tracking-wider text-[#A1A1A1] mb-4 font-sans">Structure</h3>
              <div className="flex flex-col md:grid md:grid-cols-3 gap-3">
                {step.options.filter(o => o.id.startsWith('structure')).map((option) => {
                  const isSelected = selectedOptions.some(s => s === option.id)
                  return (
                    <button
                      key={option.id}
                      onClick={() => onSelectStructure?.(option.id)}
                      className={`
                        relative rounded-xl overflow-hidden aspect-[4/3] transition-all duration-300
                        ${isSelected
                          ? 'ring-2 ring-[#C6A96B]'
                          : 'ring-1 ring-[#2A2A2B] hover:ring-[#3A3A3B]'
                        }
                      `}
                    >
                      <Image
                        src={option.image}
                        alt={option.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <span className={`block font-serif text-lg md:text-xl mb-1 ${isSelected ? 'text-[#C6A96B]' : 'text-[#F5F5F5]'}`}>
                          {option.title}
                        </span>
                        <span className="block text-sm text-[#A1A1A1]">{option.subtitle}</span>
                      </div>
                      {isSelected && (
                        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#C6A96B] flex items-center justify-center">
                          <svg className="w-5 h-5 text-[#0F0F10]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col md:grid md:grid-cols-2 gap-3 md:gap-4">
            {step.options.map((option) => (
              <OptionCard
                key={option.id}
                title={option.title}
                subtitle={option.subtitle}
                image={option.image}
                isSelected={selectedOptions.includes(option.id)}
                onSelect={() => onSelectOption(option.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
