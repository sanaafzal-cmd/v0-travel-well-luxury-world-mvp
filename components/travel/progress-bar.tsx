"use client"

interface ProgressBarProps {
  currentStep: number
  totalSteps: number
}

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100
  
  return (
    <div className="w-full px-6 py-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-[#A1A1A1] font-sans">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-sm text-[#C6A96B] font-sans">
          {Math.round(progress)}%
        </span>
      </div>
      <div className="w-full h-1 bg-[#2A2A2B] rounded-full overflow-hidden">
        <div 
          className="h-full bg-[#C6A96B] rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
