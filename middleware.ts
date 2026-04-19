import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

const nextAuthSecret =
  process.env.NEXTAUTH_SECRET ??
  (process.env.NODE_ENV === 'development' ? 'callmind-dev-secret' : undefined)

const authMiddleware = withAuth({
  secret: nextAuthSecret,
})

export default function middleware(...args: Parameters<typeof authMiddleware>) {
  if (!nextAuthSecret) {
    console.error(
      '[middleware] NEXTAUTH_SECRET is not set. Skipping auth middleware. Configure NEXTAUTH_SECRET in environment variables.',
    )
    return NextResponse.next()
  }
  return authMiddleware(...args)
}

export const config = {
  matcher: [
    '/',
    '/numbers/:path*',
    '/agents/:path*',
    '/calls/:path*',
    '/integrations/:path*',
    '/billing/:path*',
    '/settings/:path*',
    '/dashboard/:path*',
    '/api/numbers/:path*',
    '/api/agents/:path*',
    '/api/calls/:path*',
    '/api/integrations/:path*',
  ],
}
