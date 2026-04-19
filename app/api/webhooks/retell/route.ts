import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  return NextResponse.json({ received: true, call_id: body.call_id ?? null })
}
