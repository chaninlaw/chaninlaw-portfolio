'use client'

import { Card } from '@/components/ui/card'
import { Weekday } from '@/types/wakatime'
import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, TooltipProps } from 'recharts'

export function VerticalBar({ data }: { data: any[] }) {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <BarChart width={150} height={40} data={data}>
        <Bar className='fill-black dark:fill-[#f5f5f5]' dataKey='average' radius={[5, 5, 0, 0]} />
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
      <Card className='px-4 py-3 dark:border-stone-800 dark:bg-stone-900'>
        <p className='text-sm'>Average: {(payload[0].payload as Weekday).human_readable_average}</p>
        <p className='text-sm'>
          Total in {label}: {(payload[0].payload as Weekday).human_readable_total}
        </p>
      </Card>
    )
  }

  return null
}
