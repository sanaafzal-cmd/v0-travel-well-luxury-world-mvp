"use client"

import Link from "next/link"

export function Navbar() {
  return (
    <nav className="w-full bg-[#0F0F10]/95 backdrop-blur-md border-b border-[#2A2A2B] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-2.5 group">
            {/* Logo Icon */}
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-[#C6A96B] to-[#E8DFC8] flex items-center justify-center shadow-lg shadow-[#C6A96B]/10 transition-transform duration-300 group-hover:scale-105">
              <svg 
                className="w-5 h-5 md:w-6 md:h-6 text-[#0F0F10]" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={1.5}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" 
                />
              </svg>
            </div>
            {/* Brand Name */}
            <span className="font-serif text-xl md:text-2xl text-[#F5F5F5] tracking-tight transition-colors duration-300 group-hover:text-[#C6A96B]">
              TravelWell
            </span>
          </Link>
          
          {/* Auth Buttons */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Sign In */}
            <Link
              href="/signin"
              className="px-4 md:px-5 py-2 md:py-2.5 text-sm font-sans text-[#A1A1A1] hover:text-[#F5F5F5] transition-colors duration-300"
            >
              Sign in
            </Link>
            {/* Sign Up */}
            <Link
              href="/signup"
              className="px-4 md:px-5 py-2 md:py-2.5 text-sm font-sans font-medium bg-[#C6A96B] text-[#0F0F10] rounded-lg hover:bg-[#E8DFC8] transition-all duration-300 shadow-sm shadow-[#C6A96B]/20"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
