'use client'
import { useEffect, useState } from 'react'
import { VscEye, VscLoading } from 'react-icons/vsc'
import { Statistic } from './ui/Statistic'

export function Visitors() {
	const [visitors, setVisitors] = useState(0)
	const [loading, setLoading] = useState(false)

	const fetchVisitors = async () => {
		let baseUrl
		if (process.env.NODE_ENV === 'production') {
			baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
		} else {
			baseUrl = process.env.NEXT_PUBLIC_BASE_URL
		}
		setLoading(true)
		fetch(`${baseUrl}/api/visitors`)
			.then(async (res) => {
				const data = await res.json()
				setVisitors(data.visitCount)
			})
			.catch((err) => console.log(err))
			.finally(() => setLoading(false))
	}

	useEffect(() => {
		fetchVisitors()
	}, [])

	return (
		<>
			<VscEye />
			<small>
				{loading ? (
					<VscLoading className='animate-spin' />
				) : (
					<Statistic start={0} end={visitors} />
				)}
			</small>
		</>
	)
}
