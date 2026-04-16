import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams, origin } = request.nextUrl
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/onboarding'
  const errorParam = searchParams.get('error')
  const errorDescription = searchParams.get('error_description')

  // Handle OAuth errors gracefully
  if (errorParam) {
    const errorUrl = new URL('/auth/error', origin)
    errorUrl.searchParams.set('message', errorDescription || 'Authentication failed')
    return NextResponse.redirect(errorUrl)
  }

  if (code) {
    try {
      const supabase = await createClient()
      const { error } = await supabase.auth.exchangeCodeForSession(code)
      
      if (!error) {
        // Successful authentication - redirect to intended destination
        return NextResponse.redirect(`${origin}${next}`)
      }
      
      const errorUrl = new URL('/auth/error', origin)
      errorUrl.searchParams.set('message', 'Unable to complete sign in. Please try again.')
      return NextResponse.redirect(errorUrl)
    } catch {
      const errorUrl = new URL('/auth/error', origin)
      errorUrl.searchParams.set('message', 'An unexpected error occurred')
      return NextResponse.redirect(errorUrl)
    }
  }

  // No code provided - redirect to error page
  const errorUrl = new URL('/auth/error', origin)
  errorUrl.searchParams.set('message', 'Invalid authentication request')
  return NextResponse.redirect(errorUrl)
}
