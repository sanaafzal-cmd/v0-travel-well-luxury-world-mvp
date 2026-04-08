"use client"

import type { IdentityStepData } from "@/lib/data"
import { OptionCard } from "./option-card"
import { ChipOption } from "./chip-option"

interface IdentityStepProps {
  step: IdentityStepData
  selectedOptions: string[]
  onSelectOption: (optionId: string) => void
  onToggleOption: (optionId: string) => void
}

export function IdentityStep({ step, selectedOptions, onSelectOption, onToggleOption }: IdentityStepProps) {
  const isMultiSelect = step.isMultiSelect
  const layout = step.layout || 'cards'

  const handleSelect = (optionId: string) => {
    if (isMultiSelect) {
      onToggleOption(optionId)
    } else {
      onSelectOption(optionId)
    }
  }

  return (
    <div className="w-full min-h-screen flex flex-col animate-fade-in">
      {/* Header */}
      <div className="px-6 pt-10 pb-8">
        <h1 className="font-serif text-4xl md:text-5xl text-[#F5F5F5] leading-tight mb-4 tracking-tight">
          {step.question}
        </h1>
        <p className="text-lg text-[#A1A1A1] font-sans leading-relaxed">
          {step.subtitle}
        </p>
        {isMultiSelect && (
          <p className="text-sm text-[#C6A96B] font-sans mt-3">
            Select all that apply
          </p>
        )}
      </div>
      
      {/* Options */}
      <div className="flex-1 px-6 pb-36">
        {layout === 'chips' ? (
          <div className="flex flex-wrap gap-3">
            {step.options.map((option) => (
              <ChipOption
                key={option.id}
                title={option.title}
                subtitle={option.subtitle}
                isSelected={selectedOptions.includes(option.id)}
                onSelect={() => handleSelect(option.id)}
              />
            ))}
          </div>
        ) : layout === 'scale' ? (
          <div className="space-y-8">
            {/* Pace section */}
            <div>
              <h3 className="text-sm uppercase tracking-wider text-[#A1A1A1] mb-4 font-sans">Pace</h3>
              <div className="grid grid-cols-3 gap-3">
                {step.options.filter(o => o.id.startsWith('pace')).map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleSelect(option.id)}
                    className={`
                      relative p-5 rounded-xl transition-all duration-300 text-center
                      ${selectedOptions.includes(option.id)
                        ? 'bg-[#C6A96B]/20 border-2 border-[#C6A96B]'
                        : 'bg-[#1A1A1B] border-2 border-[#2A2A2B] hover:border-[#3A3A3B]'
                      }
                    `}
                  >
                    <span className={`
                      block font-serif text-lg mb-1 transition-colors
                      ${selectedOptions.includes(option.id) ? 'text-[#C6A96B]' : 'text-[#F5F5F5]'}
                    `}>
                      {option.title.replace('Slow & Deliberate', 'Slow').replace('Fast & Dynamic', 'Fast')}
                    </span>
                    <span className="block text-xs text-[#A1A1A1]">{option.subtitle}</span>
                    {selectedOptions.includes(option.id) && (
                      <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-[#C6A96B] flex items-center justify-center">
                        <svg className="w-3 h-3 text-[#0F0F10]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Structure section */}
            <div>
              <h3 className="text-sm uppercase tracking-wider text-[#A1A1A1] mb-4 font-sans">Structure</h3>
              <div className="grid grid-cols-3 gap-3">
                {step.options.filter(o => o.id.startsWith('structure')).map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleSelect(option.id)}
                    className={`
                      relative p-5 rounded-xl transition-all duration-300 text-center
                      ${selectedOptions.includes(option.id)
                        ? 'bg-[#C6A96B]/20 border-2 border-[#C6A96B]'
                        : 'bg-[#1A1A1B] border-2 border-[#2A2A2B] hover:border-[#3A3A3B]'
                      }
                    `}
                  >
                    <span className={`
                      block font-serif text-lg mb-1 transition-colors
                      ${selectedOptions.includes(option.id) ? 'text-[#C6A96B]' : 'text-[#F5F5F5]'}
                    `}>
                      {option.title}
                    </span>
                    <span className="block text-xs text-[#A1A1A1]">{option.subtitle}</span>
                    {selectedOptions.includes(option.id) && (
                      <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-[#C6A96B] flex items-center justify-center">
                        <svg className="w-3 h-3 text-[#0F0F10]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {step.options.map((option) => (
              <OptionCard
                key={option.id}
                title={option.title}
                subtitle={option.subtitle}
                image={option.image}
                isSelected={selectedOptions.includes(option.id)}
                onSelect={() => handleSelect(option.id)}
                isMultiSelect={isMultiSelect}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
