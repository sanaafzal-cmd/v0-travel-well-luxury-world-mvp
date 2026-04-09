"use client"

interface ActivityBadgeProps {
  label: string
}

export function ActivityBadge({ label }: ActivityBadgeProps) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-sans font-medium bg-[#0F0F10]/90 text-[#F5F5F5] border border-[#2A2A2B] backdrop-blur-sm shadow-sm">
      {label}
    </span>
  )
}
