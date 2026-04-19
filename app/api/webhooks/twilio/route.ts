import { NextResponse } from 'next/server'
import { buildDialTwiml } from '@/lib/twilio'
import { getRetellAgentPhone } from '@/lib/retell'

export async function POST() {
  return new NextResponse(buildDialTwiml(getRetellAgentPhone()), {
    headers: { 'Content-Type': 'text/xml' },
  })
}
