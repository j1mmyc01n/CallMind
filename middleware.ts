import { withAuth } from 'next-auth/middleware'

const nextAuthSecret =
  process.env.NEXTAUTH_SECRET ??
  (process.env.NODE_ENV === 'development' ? 'callmind-dev-secret' : undefined)

export default withAuth({
  secret: nextAuthSecret,
})

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
