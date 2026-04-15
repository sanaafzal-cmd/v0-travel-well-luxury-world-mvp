"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"
import type { User } from "@supabase/supabase-js"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  // Check authentication status
  useEffect(() => {
    const supabase = createClient()
    
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    }
    
    checkUser()
    
    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })
    
    return () => subscription.unsubscribe()
  }, [])

  // Scroll-based background enhancement
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <nav 
        className={`
          w-full sticky top-0 z-50 transition-all duration-500 ease-out
          ${isScrolled 
            ? 'bg-[#0F0F10]/90 backdrop-blur-xl border-b border-[#2A2A2B]/50' 
            : 'bg-transparent backdrop-blur-sm border-b border-transparent'
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              {/* Monogram */}
              <div className="w-8 h-8 rounded-full border border-[#C6A96B]/40 flex items-center justify-center transition-all duration-300 group-hover:border-[#C6A96B] group-hover:bg-[#C6A96B]/5">
                <span className="font-serif text-sm text-[#C6A96B] tracking-wider">TW</span>
              </div>
              {/* Brand Name */}
              <span className="font-serif text-xl md:text-[22px] text-[#F5F5F5] tracking-[0.04em] transition-colors duration-300 group-hover:text-[#C6A96B]">
                TravelWell
              </span>
            </Link>
            
            {/* Desktop: Context Label + Auth */}
            <div className="hidden md:flex items-center gap-8">
              {/* Context Label */}
              <span className="text-xs text-[#5A5A5A] font-sans tracking-widest uppercase">
                Paris — Luxury World
              </span>
              
              {/* Auth */}
              <div className="flex items-center gap-5">
                {user ? (
                  <Link
                    href="/identity"
                    className="px-5 py-2 text-sm font-sans font-medium border border-[#C6A96B]/50 text-[#C6A96B] rounded-full hover:bg-[#C6A96B]/10 hover:border-[#C6A96B] transition-all duration-300 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    My Identity
                  </Link>
                ) : (
                  <>
                    <Link
                      href="/sign-in"
                      className="text-sm font-sans text-[#A1A1A1] hover:text-[#F5F5F5] transition-colors duration-300 tracking-wide"
                    >
                      Sign in
                    </Link>
                    <Link
                      href="/sign-up"
                      className="px-5 py-2 text-sm font-sans font-medium border border-[#C6A96B]/50 text-[#C6A96B] rounded-full hover:bg-[#C6A96B]/10 hover:border-[#C6A96B] transition-all duration-300"
                    >
                      Sign up
                    </Link>
                  </>
                )}
              </div>
            </div>
            
            {/* Mobile: Menu Icon */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-[#A1A1A1] hover:text-[#F5F5F5] transition-colors"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Overlay Menu */}
      <div 
        className={`
          fixed inset-0 z-[100] bg-[#0F0F10] transition-all duration-500 ease-out md:hidden
          ${isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
          }
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-[#2A2A2B]/30">
          <Link href="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="w-8 h-8 rounded-full border border-[#C6A96B]/40 flex items-center justify-center">
              <span className="font-serif text-sm text-[#C6A96B] tracking-wider">TW</span>
            </div>
            <span className="font-serif text-xl text-[#F5F5F5] tracking-[0.04em]">
              TravelWell
            </span>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center text-[#A1A1A1] hover:text-[#F5F5F5] transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu Content */}
        <div className="flex flex-col justify-between h-[calc(100vh-64px)] px-8 py-12">
          {/* Nav Links */}
          <nav className="flex flex-col gap-8">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-serif text-4xl text-[#F5F5F5] hover:text-[#C6A96B] transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/onboarding"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-serif text-4xl text-[#F5F5F5] hover:text-[#C6A96B] transition-colors duration-300"
            >
              Begin Journey
            </Link>
            <Link
              href="/categories"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-serif text-4xl text-[#F5F5F5] hover:text-[#C6A96B] transition-colors duration-300"
            >
              Explore Wells
            </Link>
            <Link
              href="/itinerary"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-serif text-4xl text-[#F5F5F5] hover:text-[#C6A96B] transition-colors duration-300"
            >
              Itinerary
            </Link>
            <Link
              href="/demo"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-serif text-4xl text-[#C6A96B] hover:text-[#E8DFC8] transition-colors duration-300"
            >
              Investor Demo
            </Link>
          </nav>

          {/* Auth Actions */}
          <div className="flex flex-col gap-4 pt-8 border-t border-[#2A2A2B]/30">
            {user ? (
              <Link
                href="/identity"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-center py-3.5 text-base font-sans font-medium border border-[#C6A96B]/50 text-[#C6A96B] rounded-full hover:bg-[#C6A96B]/10 hover:border-[#C6A96B] transition-all duration-300"
              >
                My Identity
              </Link>
            ) : (
              <>
                <Link
                  href="/sign-in"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-center py-3.5 text-base font-sans text-[#A1A1A1] hover:text-[#F5F5F5] transition-colors"
                >
                  Sign in
                </Link>
                <Link
                  href="/sign-up"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-center py-3.5 text-base font-sans font-medium border border-[#C6A96B]/50 text-[#C6A96B] rounded-full hover:bg-[#C6A96B]/10 hover:border-[#C6A96B] transition-all duration-300"
                >
                  Sign up
                </Link>
              </>
            )}
            
            {/* Context Label */}
            <p className="text-center text-xs text-[#5A5A5A] font-sans tracking-widest uppercase mt-6">
              Paris — Luxury World
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
