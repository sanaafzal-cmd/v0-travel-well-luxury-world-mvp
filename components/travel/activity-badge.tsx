"use client"

interface ActivityBadgeProps {
  label: string
}

export function ActivityBadge({ label }: ActivityBadgeProps) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-sans bg-[#2A2A2B] text-[#A1A1A1] border border-[#3A3A3B]">
      {label}
    </span>
  )
}
