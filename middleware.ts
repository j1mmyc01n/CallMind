import { withAuth } from 'next-auth/middleware'

export default withAuth({
  secret: process.env.NEXTAUTH_SECRET ?? 'callmind-dev-secret',
})

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/api/numbers/:path*',
    '/api/agents/:path*',
    '/api/calls/:path*',
    '/api/integrations/:path*',
  ],
}
