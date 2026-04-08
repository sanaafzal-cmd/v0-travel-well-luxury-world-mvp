"use client"

interface ProgressBarProps {
  currentStep: number
  totalSteps: number
  onBack?: () => void
  showBackArrow?: boolean
}

export function ProgressBar({ currentStep, totalSteps, onBack, showBackArrow = true }: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100
  
  return (
    <div className="w-full px-5 md:px-6 py-4 md:py-5">
      <div className="flex items-center justify-between mb-2.5 md:mb-3">
        <div className="flex items-center gap-3">
          {showBackArrow && onBack && (
            <button
              onClick={onBack}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1A1A1B] border border-[#2A2A2B] text-[#A1A1A1] hover:text-[#F5F5F5] hover:border-[#3A3A3B] transition-colors"
              aria-label="Go back"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          <span className="text-sm text-[#A1A1A1] font-sans">
            Step {currentStep} of {totalSteps}
          </span>
        </div>
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
