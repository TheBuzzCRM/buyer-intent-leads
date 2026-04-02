import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/request'
import { verifyToken } from './lib/auth'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Only protect /admin routes
  if (pathname.startsWith('/admin')) {
    const token = request.cookies.get('auth_token')?.value

    if (!token) {
      // Redirect to login if no token (for now, we'll just return 401 for API or redirect for pages)
      // Since our admin page handles its own mock login state for now, 
      // we'll just ensure the token is valid if it exists.
      // In a real app, we'd redirect to /login.
      return NextResponse.redirect(new URL('/', request.url))
    }

    const decoded = verifyToken(token)
    if (!decoded || decoded.role !== 'admin') {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
}