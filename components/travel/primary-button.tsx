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
    relative w-full py-4 px-6 rounded-lg font-sans text-base font-medium
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-2 focus:ring-[#C6A96B] focus:ring-offset-2 focus:ring-offset-[#0F0F10]
    disabled:opacity-50 disabled:cursor-not-allowed
    active:scale-[0.98]
  `
  
  const variants = {
    primary: `
      bg-[#C6A96B] text-[#0F0F10]
      hover:bg-[#E8DFC8]
    `,
    secondary: `
      bg-[#2A2A2B] text-[#F5F5F5] border border-[#3A3A3B]
      hover:bg-[#3A3A3B]
    `,
    ghost: `
      bg-transparent text-[#A1A1A1]
      hover:text-[#F5F5F5]
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
