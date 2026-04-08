"use client"

interface ProgressBarProps {
  currentStep: number
  totalSteps: number
}

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100
  
  return (
    <div className="w-full px-5 md:px-6 py-4 md:py-5">
      <div className="flex items-center justify-between mb-2.5 md:mb-3">
        <span className="text-sm text-[#A1A1A1] font-sans">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-sm text-[#C6A96B] font-sans font-medium">
          {Math.round(progress)}%
        </span>
      </div>
      
      {/* Progress track */}
      <div className="w-full h-1.5 bg-[#2A2A2B] rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-[#C6A96B] to-[#E8DFC8] rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      
    </div>
  )
}
