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

export function VerticalBar({ data }: { data: any[] }) {
	return (
		<ResponsiveContainer width='100%' height='100%'>
			<BarChart width={150} height={40} data={data}>
				<Bar fill='#f5f5f5' dataKey='average' radius={[5, 5, 0, 0]} />
				<XAxis dataKey='name' />
				<YAxis unit={'hrs'} />
			</BarChart>
		</ResponsiveContainer>
	)
}
