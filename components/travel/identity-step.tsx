"use client"

import type { IdentityStepData } from "@/lib/data"
import { OptionCard } from "./option-card"

interface IdentityStepProps {
  step: IdentityStepData
  selectedOption: string | null
  onSelectOption: (optionId: string) => void
}

export function IdentityStep({ step, selectedOption, onSelectOption }: IdentityStepProps) {
  return (
    <div className="w-full min-h-screen flex flex-col animate-fade-in">
      {/* Header */}
      <div className="px-6 pt-8 pb-6">
        <h1 className="font-serif text-3xl md:text-4xl text-[#F5F5F5] leading-tight mb-3">
          {step.question}
        </h1>
        <p className="text-base text-[#A1A1A1] font-sans">
          {step.subtitle}
        </p>
      </div>
      
      {/* Options */}
      <div className="flex-1 px-6 pb-32">
        <div className="flex flex-col gap-4">
          {step.options.map((option) => (
            <OptionCard
              key={option.id}
              title={option.title}
              subtitle={option.subtitle}
              image={option.image}
              isSelected={selectedOption === option.id}
              onSelect={() => onSelectOption(option.id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
