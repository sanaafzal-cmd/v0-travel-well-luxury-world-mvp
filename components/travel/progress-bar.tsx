"use client"

interface ProgressBarProps {
  currentStep: number
  totalSteps: number
  stepLabel?: string
}

export function ProgressBar({ currentStep, totalSteps, stepLabel }: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100
  
  return (
    <div className="w-full px-6 py-5">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-sm text-[#A1A1A1] font-sans">
            {currentStep} of {totalSteps}
          </span>
          {stepLabel && (
            <>
              <span className="text-[#2A2A2B]">|</span>
              <span className="text-sm text-[#F5F5F5] font-sans font-medium">
                {stepLabel}
              </span>
            </>
          )}
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
      
      {/* Step indicators */}
      <div className="flex justify-between mt-3">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div 
            key={i}
            className={`
              w-2 h-2 rounded-full transition-all duration-300
              ${i + 1 <= currentStep 
                ? 'bg-[#C6A96B]' 
                : 'bg-[#2A2A2B]'
              }
            `}
          />
        ))}
      </div>
    </div>
  )
}
