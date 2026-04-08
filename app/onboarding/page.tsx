"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { identitySteps } from "@/lib/data"
import { ProgressBar } from "@/components/travel/progress-bar"
import { IdentityStep } from "@/components/travel/identity-step"
import { PrimaryButton } from "@/components/travel/primary-button"

export default function OnboardingPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [selections, setSelections] = useState<Record<number, string[]>>({})
  const [isTransitioning, setIsTransitioning] = useState(false)
  
  const totalSteps = identitySteps.length
  const currentStepData = identitySteps[currentStep - 1]
  
  // Initialize default selection for budget tier (Luxury)
  useEffect(() => {
    if (currentStepData?.isBudgetTier && !selections[currentStep]?.length) {
      setSelections(prev => ({
        ...prev,
        [currentStep]: ['luxury']
      }))
    }
  }, [currentStep, currentStepData?.isBudgetTier, selections])
  
  const handleSelectOption = (optionId: string) => {
    setSelections(prev => ({ ...prev, [currentStep]: [optionId] }))
  }
  
  const handleToggleOption = (optionId: string) => {
    setSelections(prev => {
      const currentSelections = prev[currentStep] || []
      if (currentSelections.includes(optionId)) {
        return {
          ...prev,
          [currentStep]: currentSelections.filter(id => id !== optionId)
        }
      }
      return {
        ...prev,
        [currentStep]: [...currentSelections, optionId]
      }
    })
  }
  
  const handleNext = () => {
    if (currentStep < totalSteps) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentStep(prev => prev + 1)
        setIsTransitioning(false)
      }, 150)
    } else {
      // Complete onboarding
      router.push("/categories")
    }
  }
  
  const handleBack = () => {
    if (currentStep > 1) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentStep(prev => prev - 1)
        setIsTransitioning(false)
      }, 150)
    }
  }
  
  const currentSelections = selections[currentStep] || []
  const isMultiSelect = currentStepData?.isMultiSelect
  
  // For multi-select, require at least one selection
  // For single-select, require exactly one selection
  const isCurrentStepComplete = isMultiSelect 
    ? currentSelections.length > 0
    : currentSelections.length === 1
  
  // Calculate step labels for progress
  const stepLabels = [
    "Profile",
    "Companions",
    "Budget",
    "Worlds",
    "Pace",
    "Scenario",
    "Drivers"
  ]
  
  return (
    <main className="min-h-screen bg-[#0F0F10] flex flex-col">
      {/* Progress Bar */}
      <div className="sticky top-0 z-20 bg-[#0F0F10]/95 backdrop-blur-md border-b border-[#2A2A2B]">
        <ProgressBar 
          currentStep={currentStep} 
          totalSteps={totalSteps}
          stepLabel={stepLabels[currentStep - 1]}
        />
      </div>
      
      {/* Step Content */}
      <div className={`flex-1 transition-opacity duration-150 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        <IdentityStep
          key={currentStep}
          step={currentStepData}
          selectedOptions={currentSelections}
          onSelectOption={handleSelectOption}
          onToggleOption={handleToggleOption}
        />
      </div>
      
      {/* Fixed Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-[#0F0F10] via-[#0F0F10] to-[#0F0F10]/0 pt-12 pb-8 px-6">
        <div className="flex gap-4 max-w-lg mx-auto">
          {currentStep > 1 && (
            <PrimaryButton 
              variant="secondary" 
              onClick={handleBack}
              className="w-auto px-8"
            >
              Back
            </PrimaryButton>
          )}
          <PrimaryButton 
            onClick={handleNext}
            disabled={!isCurrentStepComplete}
            className="flex-1"
          >
            {currentStep === totalSteps ? "Begin Your Journey" : "Continue"}
          </PrimaryButton>
        </div>
        
        {/* Selection counter for multi-select */}
        {isMultiSelect && currentSelections.length > 0 && (
          <p className="text-center text-sm text-[#A1A1A1] mt-4">
            {currentSelections.length} selected
          </p>
        )}
      </div>
    </main>
  )
}
