import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
	const apiKey = process.env.WAKATIME_API_KEY
	const response = await fetch(
		`https://wakatime.com/api/v1/users/current/stats/all_time`,
		{
			method: 'GET',
			headers: {
				Authorization: `Basic ${apiKey}`,
			},
		}
	)
	const json = await response.json()
	return NextResponse.json(json)
}
