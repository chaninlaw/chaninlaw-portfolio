import { redis } from '@/server/redis'
import { unstable_noStore } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  unstable_noStore()
  try {
    if (process.env.NODE_ENV === 'development') {
      return NextResponse.json({ visitCount: 999 }, { status: 200 })
    }
    const ip = req.headers.get('x-forwarded-for') || req.ip
    const today = new Date().toISOString().slice(0, 10)
    const key = 'visitor'
    const value = `visit:${today}:${ip}`

    const client = await redis.connect()
    await client.sAdd(key, value)

    const visitCount = await client.sCard(key)
    await client.disconnect()

    return NextResponse.json({ visitCount }, { status: 200 })
  } catch (error) {
    console.log('visitor GET error', error)
    return NextResponse.json({ message: 'Something went wrong.' }, { status: 500 })
  }
}
