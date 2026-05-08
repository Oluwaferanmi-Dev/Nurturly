import { type NextRequest, NextResponse } from 'next/server'
import { createMiddlewareClient } from '@/lib/supabase/middleware'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Only protect /ats routes. Skip the login page itself to avoid redirect loops.
  if (!pathname.startsWith('/ats') || pathname.startsWith('/ats/login')) {
    return NextResponse.next()
  }

  const { supabase, supabaseResponse } = createMiddlewareClient(request)

  // Refresh the session — required to avoid stale auth state
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    // Redirect to login, preserving the original destination as a `next` param
    const loginUrl = new URL('/ats/login', request.url)
    loginUrl.searchParams.set('next', pathname)
    return NextResponse.redirect(loginUrl)
  }

  // User is authenticated — continue with refreshed session cookies
  return supabaseResponse
}

export const config = {
  matcher: [
    /*
     * Match all /ats/* routes.
     * Exclude next.js internals (_next/static, _next/image, favicon, etc.)
     */
    '/ats/:path*',
  ],
}
