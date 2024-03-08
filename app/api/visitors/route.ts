import { redis } from '@/lib/redis'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
	try {
		const ip = req.headers.get('x-forwarded-for') || req.ip
		const today = new Date().toISOString().slice(0, 10)
		const key = 'visitor'
		const value = `visit:${today}:${ip}`

		await redis.connect()
		await redis.sAdd(key, value)

		const visitCount = await redis.sCard(key)
		await redis.disconnect()

		return NextResponse.json({ visitCount }, { status: 200 })
	} catch (error) {
		console.log('visitor GET error', error)
		return NextResponse.json(
			{ message: 'Something went wrong.' },
			{ status: 500 }
		)
	}
}
