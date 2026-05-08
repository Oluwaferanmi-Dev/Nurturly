import { NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
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
          response = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options),
          )
        },
      },
    },
  )

  // Refresh session if expired — must happen before any protected route check
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { pathname } = request.nextUrl

  // If user is authenticated and trying to access /ats/login → redirect to dashboard
  if (user && pathname === '/ats/login') {
    return NextResponse.redirect(new URL('/ats', request.url))
  }

  // If user is NOT authenticated and trying to access any /ats route (except /ats/login)
  if (!user && pathname.startsWith('/ats') && pathname !== '/ats/login') {
    const loginUrl = new URL('/ats/login', request.url)
    loginUrl.searchParams.set('next', pathname)
    return NextResponse.redirect(loginUrl)
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all /ats/* routes. Skip static files and Next.js internals.
     */
    '/ats/:path*',
  ],
}
