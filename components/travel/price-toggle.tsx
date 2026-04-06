"use client"

interface PriceToggleProps {
  showPrices: boolean
  onToggle: () => void
}

export function PriceToggle({ showPrices, onToggle }: PriceToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#1A1A1B] border border-[#2A2A2B] transition-all duration-300 hover:border-[#C6A96B]/50"
    >
      <span className="text-sm text-[#A1A1A1] font-sans">Prices:</span>
      <span className={`
        text-sm font-medium font-sans transition-colors duration-300
        ${showPrices ? 'text-[#C6A96B]' : 'text-[#A1A1A1]'}
      `}>
        {showPrices ? 'ON' : 'OFF'}
      </span>
      <div 
        className={`
          relative w-10 h-5 rounded-full transition-colors duration-300
          ${showPrices ? 'bg-[#C6A96B]' : 'bg-[#2A2A2B]'}
        `}
      >
        <div 
          className={`
            absolute top-0.5 w-4 h-4 rounded-full bg-[#F5F5F5] shadow-sm
            transition-transform duration-300 ease-out
            ${showPrices ? 'translate-x-5' : 'translate-x-0.5'}
          `}
        />
      </div>
    </button>
  )
}
