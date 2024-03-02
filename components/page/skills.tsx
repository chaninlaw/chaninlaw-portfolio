import { WakatimeResponse } from '@/lib/types'
import { useEffect, useState } from 'react'
import { Monaco } from '../monaco'

export function Skills() {
	const [data, setData] = useState<WakatimeResponse | undefined>()

	// const fetchSkills = async () => {
	// 	const response = await fetch('/api/wakatime')
	// 	const json = await response.json()
	// 	setData(json)
	// }

	// useEffect(() => {
	// 	fetchSkills()
	// }, [])

	const value = `
  
  `

	return (
		<div className='h-full w-full dark:bg-stone-900'>
			<Monaco />
		</div>
	)
}
