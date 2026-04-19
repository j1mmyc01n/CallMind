import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

const nextAuthSecret =
  process.env.NEXTAUTH_SECRET ??
  (process.env.NODE_ENV === 'development' ? 'callmind-dev-secret' : undefined)

const authMiddleware = withAuth({
  secret: nextAuthSecret,
})

export default function middleware(...args: Parameters<typeof authMiddleware>) {
  const [req] = args

  if (!nextAuthSecret) {
    console.error(
      '[middleware] NEXTAUTH_SECRET is not set. Rejecting protected requests. Configure NEXTAUTH_SECRET in environment variables.',
    )

    if (req.nextUrl.pathname.startsWith('/api/')) {
      return NextResponse.json(
        {
          error: 'Server configuration error: NEXTAUTH_SECRET is not set',
        },
        { status: 503 },
      )
    }

    return new NextResponse('Service unavailable', { status: 503 })
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
