'use client'

import React from 'react'
import {
	BarChart,
	Bar,
	Cell,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
	TooltipProps,
} from 'recharts'
import { Card } from '../ui/card'
import { Weekday } from '@/lib/actions/types'

export function VerticalBar({ data }: { data: any[] }) {
	return (
		<ResponsiveContainer width='100%' height='100%'>
			<BarChart width={150} height={40} data={data}>
				<Bar fill='#f5f5f5' dataKey='average' radius={[5, 5, 0, 0]} />
				<XAxis dataKey='name' tickLine={false} />
				<YAxis axisLine={false} tickLine={false} unit={'hrs'} />
				<Tooltip cursor={false} content={<CustomTooltip />} />
			</BarChart>
		</ResponsiveContainer>
	)
}

const CustomTooltip = ({ active, payload, label }: TooltipProps<any, any>) => {
	if (active && payload && payload.length) {
		return (
			<Card className='border-stone-800 bg-stone-900 py-3 px-4'>
				<p className='text-sm'>
					Average: {(payload[0].payload as Weekday).human_readable_average}
				</p>
				<p className='text-sm'>
					Total in {label}:{' '}
					{(payload[0].payload as Weekday).human_readable_total}
				</p>
			</Card>
		)
	}

	return null
}
