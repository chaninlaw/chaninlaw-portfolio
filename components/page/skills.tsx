import { WakatimeResponse } from '@/lib/types'
import { useEffect, useState } from 'react'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { HighlightJS } from '../ui/highlight-js'

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

	return (
		<div className='h-full w-full dark:bg-stone-900'>
			<Accordion type='single' collapsible defaultValue={'item-1'}>
				<AccordionItem value='item-1' className='border-0'>
					<AccordionTrigger className='flex justify-start space-x-1 my-1'>
						<HighlightJS js={`function add( ) {`} />
					</AccordionTrigger>
					<AccordionContent></AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	)
}
