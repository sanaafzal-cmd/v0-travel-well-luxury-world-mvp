"use client"

interface ChipOptionProps {
  title: string
  subtitle: string
  isSelected: boolean
  onSelect: () => void
}

export function ChipOption({ title, subtitle, isSelected, onSelect }: ChipOptionProps) {
  return (
    <button
      onClick={onSelect}
      className={`
        relative px-5 py-4 rounded-xl transition-all duration-300 ease-out
        focus:outline-none focus:ring-2 focus:ring-[#C6A96B] focus:ring-offset-2 focus:ring-offset-[#0F0F10]
        ${isSelected 
          ? 'bg-[#C6A96B]/20 border-2 border-[#C6A96B] scale-[1.02]' 
          : 'bg-[#1A1A1B] border-2 border-[#2A2A2B] hover:border-[#3A3A3B] hover:bg-[#1E1E1F]'
        }
      `}
    >
      <div className="flex items-center gap-3">
        {/* Checkbox indicator */}
        <div className={`
          w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300
          ${isSelected 
            ? 'bg-[#C6A96B]' 
            : 'border-2 border-[#3A3A3B]'
          }
        `}>
          {isSelected && (
            <svg className="w-3 h-3 text-[#0F0F10] animate-scale-in" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
        
        {/* Content */}
        <div className="text-left">
          <span className={`
            block font-sans text-base font-medium transition-colors duration-300
            ${isSelected ? 'text-[#C6A96B]' : 'text-[#F5F5F5]'}
          `}>
            {title}
          </span>
          <span className="block text-xs text-[#A1A1A1] mt-0.5">
            {subtitle}
          </span>
        </div>
      </div>
    </button>
  )
}
