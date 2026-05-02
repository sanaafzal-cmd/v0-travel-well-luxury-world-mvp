"use client"

import { Spinner } from "@/components/ui/spinner"

interface PrimaryButtonProps {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  type?: 'button' | 'submit'
}

export function PrimaryButton({ 
  children, 
  onClick, 
  disabled = false, 
  loading = false,
  variant = 'primary',
  className = '',
  type = 'button'
}: PrimaryButtonProps) {
  const baseStyles = `
    relative w-full py-4 px-6 rounded-full font-sans text-base font-medium
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-2 focus:ring-[#2D7A7A] focus:ring-offset-2 focus:ring-offset-[#FAF9F6]
    disabled:opacity-50 disabled:cursor-not-allowed
    active:scale-[0.98]
  `
  
  const variants = {
    primary: `
      bg-[#2D7A7A] text-white
      hover:bg-[#3D9A9A] shadow-lg shadow-[#2D7A7A]/30
    `,
    secondary: `
      bg-white text-[#1A1A1B] border border-[#E8E4DC]
      hover:bg-[#F8F6F1] shadow-md
    `,
    ghost: `
      bg-transparent text-[#6B6B6B]
      hover:text-[#1A1A1B]
    `
  }
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <Spinner className="w-5 h-5" />
          <span>Loading...</span>
        </span>
      ) : (
        children
      )}
    </button>
  )
}
