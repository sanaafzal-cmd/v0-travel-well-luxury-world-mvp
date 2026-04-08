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
  
  // For Step 5 dual-image layout - handle pace selection
  const handleSelectPace = (optionId: string) => {
    setSelections(prev => {
      const currentSelections = prev[currentStep] || []
      // Remove any existing pace selection
      const withoutPace = currentSelections.filter(id => !id.startsWith('pace'))
      return {
        ...prev,
        [currentStep]: [...withoutPace, optionId]
      }
    })
  }
  
  // For Step 5 dual-image layout - handle structure selection
  const handleSelectStructure = (optionId: string) => {
    setSelections(prev => {
      const currentSelections = prev[currentStep] || []
      // Remove any existing structure selection
      const withoutStructure = currentSelections.filter(id => !id.startsWith('structure'))
      return {
        ...prev,
        [currentStep]: [...withoutStructure, optionId]
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
  const isDualImageStep = currentStepData?.layout === 'dual-image'
  
  // For dual-image layout, require both pace and structure selections
  // For other steps, require exactly one selection
  const isCurrentStepComplete = isDualImageStep 
    ? currentSelections.some(s => s.startsWith('pace')) && currentSelections.some(s => s.startsWith('structure'))
    : currentSelections.length === 1
  
  return (
    <main className="min-h-screen bg-[#0F0F10] flex flex-col">
      {/* Progress Bar */}
      <div className="sticky top-0 z-20 bg-[#0F0F10]/95 backdrop-blur-md border-b border-[#2A2A2B]">
        <ProgressBar 
          currentStep={currentStep} 
          totalSteps={totalSteps}
        />
      </div>
      
      {/* Step Content */}
      <div className={`flex-1 transition-opacity duration-150 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        <IdentityStep
          key={currentStep}
          step={currentStepData}
          selectedOptions={currentSelections}
          onSelectOption={handleSelectOption}
          onSelectPace={handleSelectPace}
          onSelectStructure={handleSelectStructure}
        />
      </div>
      
      {/* Fixed Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-[#0F0F10] via-[#0F0F10] to-[#0F0F10]/0 pt-10 pb-6 md:pb-8 px-5 md:px-6">
        <div className="flex gap-3 max-w-lg mx-auto">
          {currentStep > 1 && (
            <PrimaryButton 
              variant="secondary" 
              onClick={handleBack}
              className="flex-1"
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
      </div>
    </main>
  )
}
