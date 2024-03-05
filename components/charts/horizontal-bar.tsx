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
} from 'recharts'

export function HorizontalBar({ data }: { data: any[] }) {
	return (
		<ResponsiveContainer width='100%' height='100%'>
			<BarChart
				width={150}
				height={150}
				margin={{ left: 40 }}
				data={data}
				layout='vertical'
			>
				<Bar fill='#f5f5f5' dataKey='total_seconds' radius={[0, 5, 5, 0]} />
				<XAxis hide axisLine={false} type='number' unit={'hrs'} />
				<YAxis axisLine={false} dataKey='name' type='category' />
			</BarChart>
		</ResponsiveContainer>
	)
}
