"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { identitySteps } from "@/lib/data"
import { ProgressBar } from "@/components/travel/progress-bar"
import { IdentityStep } from "@/components/travel/identity-step"
import { PrimaryButton } from "@/components/travel/primary-button"

export default function OnboardingPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [selections, setSelections] = useState<Record<number, string>>({})
  
  const totalSteps = identitySteps.length
  const currentStepData = identitySteps[currentStep - 1]
  
  const handleSelectOption = (optionId: string) => {
    setSelections(prev => ({ ...prev, [currentStep]: optionId }))
  }
  
  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1)
    } else {
      // Complete onboarding
      router.push("/categories")
    }
  }
  
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }
  
  const isCurrentStepComplete = selections[currentStep] !== undefined
  
  return (
    <main className="min-h-screen bg-[#0F0F10] flex flex-col">
      {/* Progress Bar */}
      <div className="sticky top-0 z-20 bg-[#0F0F10]/95 backdrop-blur-sm border-b border-[#2A2A2B]">
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      </div>
      
      {/* Step Content */}
      <div className="flex-1">
        <IdentityStep
          key={currentStep}
          step={currentStepData}
          selectedOption={selections[currentStep] || null}
          onSelectOption={handleSelectOption}
        />
      </div>
      
      {/* Fixed Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0F0F10]/95 backdrop-blur-sm border-t border-[#2A2A2B] p-6">
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
            {currentStep === totalSteps ? "Complete" : "Continue"}
          </PrimaryButton>
        </div>
      </div>
    </main>
  )
}
