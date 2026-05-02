"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import type { User } from "@supabase/supabase-js"

export function Navbar() {
  const router = useRouter()
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  // Check if we're on the landing page hero (needs transparent nav with white text)
  const isHeroPage = pathname === "/"

  const handleSignOut = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    setUser(null)
    router.push("/")
  }

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

  // Dynamic styling based on page and scroll
  const navClasses = isHeroPage && !isScrolled
    ? 'bg-transparent backdrop-blur-sm border-b border-transparent'
    : 'bg-white/95 backdrop-blur-xl border-b border-[#E8E4DC] shadow-sm'

  const textColor = isHeroPage && !isScrolled ? 'text-white' : 'text-[#1A1A1B]'
  const subtleTextColor = isHeroPage && !isScrolled ? 'text-white/70' : 'text-[#6B6B6B]'
  const brandColor = isHeroPage && !isScrolled ? 'text-[#C6A96B]' : 'text-[#2D7A7A]'

  return (
    <>
      <nav 
        className={`
          w-full sticky top-0 z-50 transition-all duration-500 ease-out
          ${navClasses}
        `}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              {/* Monogram */}
              <div className={`w-8 h-8 rounded-full border ${isHeroPage && !isScrolled ? 'border-white/40 group-hover:border-white' : 'border-[#2D7A7A]/40 group-hover:border-[#2D7A7A]'} flex items-center justify-center transition-all duration-300 group-hover:bg-[#2D7A7A]/5`}>
                <span className={`font-serif text-sm tracking-wider ${brandColor}`}>TW</span>
              </div>
              {/* Brand Name */}
              <span className={`font-serif text-xl md:text-[22px] tracking-[0.04em] transition-colors duration-300 ${textColor} group-hover:${brandColor}`}>
                TravelWell
              </span>
            </Link>
            
            {/* Desktop: Context Label + Auth */}
            <div className="hidden md:flex items-center gap-8">
              {/* Context Label */}
              <span className={`text-xs font-sans tracking-widest uppercase ${subtleTextColor}`}>
                Worlds of Adventure
              </span>
              
              {/* Auth */}
              <div className="flex items-center gap-5">
                {user ? (
                  <>
                    <Link
                      href="/discover"
                      className="px-5 py-2 text-sm font-sans font-medium bg-[#2D7A7A] text-white rounded-full hover:bg-[#3D9A9A] transition-all duration-300 flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                      </svg>
                      Discover
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className={`text-sm font-sans hover:text-[#2D7A7A] transition-colors duration-300 tracking-wide ${subtleTextColor}`}
                    >
                      Sign out
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/sign-in"
                      className={`text-sm font-sans hover:text-[#2D7A7A] transition-colors duration-300 tracking-wide ${subtleTextColor}`}
                    >
                      Sign in
                    </Link>
                    <Link
                      href="/sign-up"
                      className="px-5 py-2 text-sm font-sans font-medium bg-[#2D7A7A] text-white rounded-full hover:bg-[#3D9A9A] transition-all duration-300"
                    >
                      Get Started
                    </Link>
                  </>
                )}
              </div>
            </div>
            
            {/* Mobile: Menu Icon */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`md:hidden w-10 h-10 flex items-center justify-center transition-colors ${subtleTextColor} hover:${textColor}`}
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
          fixed inset-0 z-[100] bg-[#FAF9F6] transition-all duration-500 ease-out md:hidden
          ${isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
          }
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-[#E8E4DC]">
          <Link href="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="w-8 h-8 rounded-full border border-[#2D7A7A]/40 flex items-center justify-center">
              <span className="font-serif text-sm text-[#2D7A7A] tracking-wider">TW</span>
            </div>
            <span className="font-serif text-xl text-[#1A1A1B] tracking-[0.04em]">
              TravelWell
            </span>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center text-[#6B6B6B] hover:text-[#1A1A1B] transition-colors"
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
              className="font-serif text-4xl text-[#1A1A1B] hover:text-[#2D7A7A] transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/discover"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-serif text-4xl text-[#1A1A1B] hover:text-[#2D7A7A] transition-colors duration-300"
            >
              Discover
            </Link>
            <Link
              href="/itinerary"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-serif text-4xl text-[#1A1A1B] hover:text-[#2D7A7A] transition-colors duration-300"
            >
              My Itinerary
            </Link>
            <Link
              href="/demo"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-serif text-4xl text-[#C6A96B] hover:text-[#2D7A7A] transition-colors duration-300"
            >
              Investor Demo
            </Link>
          </nav>

          {/* Auth Actions */}
          <div className="flex flex-col gap-4 pt-8 border-t border-[#E8E4DC]">
            {user ? (
              <>
                <Link
                  href="/discover"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-center py-3.5 text-base font-sans font-medium bg-[#2D7A7A] text-white rounded-full hover:bg-[#3D9A9A] transition-all duration-300"
                >
                  Discover Experiences
                </Link>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    handleSignOut()
                  }}
                  className="text-center py-3.5 text-base font-sans text-[#6B6B6B] hover:text-[#1A1A1B] transition-colors"
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/sign-in"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-center py-3.5 text-base font-sans text-[#6B6B6B] hover:text-[#1A1A1B] transition-colors"
                >
                  Sign in
                </Link>
                <Link
                  href="/sign-up"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-center py-3.5 text-base font-sans font-medium bg-[#2D7A7A] text-white rounded-full hover:bg-[#3D9A9A] transition-all duration-300"
                >
                  Get Started
                </Link>
              </>
            )}
            
            {/* Context Label */}
            <p className="text-center text-xs text-[#6B6B6B] font-sans tracking-widest uppercase mt-6">
              Worlds of Adventure
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
