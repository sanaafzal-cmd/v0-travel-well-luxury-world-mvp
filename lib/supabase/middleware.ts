import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          )
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          )
        },
      },
    },
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const pathname = request.nextUrl.pathname
  
  // Protected routes that require authentication
  const protectedRoutes = ['/identity', '/onboarding', '/crafting', '/categories', '/itinerary']
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route))
  
  // Auth routes (sign-in/sign-up) - redirect to identity if already logged in
  const authRoutes = ['/sign-in', '/sign-up']
  const isAuthRoute = authRoutes.some(route => pathname.startsWith(route))

  // Redirect to sign-in if accessing protected routes without auth
  if (isProtectedRoute && !user) {
    const url = request.nextUrl.clone()
    url.pathname = '/sign-in'
    return NextResponse.redirect(url)
  }
  
  // Redirect to identity if already logged in and trying to access auth routes
  if (isAuthRoute && user) {
    const url = request.nextUrl.clone()
    url.pathname = '/identity'
    return NextResponse.redirect(url)
  }

  return supabaseResponse
}
