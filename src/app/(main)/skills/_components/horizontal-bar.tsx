'use client'

import { Card } from '@/components/ui/card'
import { Language } from '@/types/wakatime'
import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, TooltipProps } from 'recharts'

export function HorizontalBar({ data }: { data: Language[] }) {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <BarChart width={150} height={150} margin={{ left: 40 }} data={data} layout='vertical'>
        <Bar className='fill-black dark:fill-[#f5f5f5]' dataKey='total_seconds' radius={[0, 5, 5, 0]} />
        <XAxis hide axisLine={false} tickLine={false} type='number' unit={'hrs'} />
        <YAxis axisLine={false} tickLine={false} dataKey='name' type='category' />
        <Tooltip cursor={false} content={<CustomTooltip />} />
      </BarChart>
    </ResponsiveContainer>
  )
}

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, any>) => {
  if (active && payload && payload.length) {
    return (
      <Card className='px-4 py-3 dark:border-stone-800 dark:bg-stone-900'>
        <p className='text-sm'>{`${label}: ${payload[0].value?.toFixed(0)} hrs`}</p>
      </Card>
    )
  }

  return null
}
