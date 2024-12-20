import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Metadata } from 'next'
import { Suspense } from 'react'

import { BestdayCard } from './_components/bestday-card'
import { DailyAverageCard } from './_components/daily-average-card'
import { LanguagesBar } from './_components/languages-bar'
import { TodayTimeSpentCard } from './_components/today-timespent-card'
import { TotalTimeSpentCard } from './_components/total-timespent-card'
import { WeedayBar } from './_components/weekday-bar'

export const metadata: Metadata = {
  title: 'Skills',
  description: 'Visualize me skills with graphs and charts here.'
}

export default function SkillsPage() {
  return (
    <section className='h-full bg-white bg-dot-black/[0.2] dark:bg-black dark:bg-dot-white/[0.2]'>
      <div className='mx-8 flex-1 space-y-4 pt-6'>
        <div className=''>
          <h2 className='text-3xl font-bold tracking-tight'>Skills</h2>
          <p className='text-xs uppercase text-muted-foreground'>Dashboard Summary</p>
        </div>
        <div className='flex flex-wrap gap-2 xl:flex-nowrap xl:space-x-2'>
          <Suspense fallback={<SkeletonCard />}>
            <TotalTimeSpentCard />
          </Suspense>
          <Suspense fallback={<SkeletonCard />}>
            <BestdayCard />
          </Suspense>
          <Suspense fallback={<SkeletonCard />}>
            <DailyAverageCard />
          </Suspense>
          <Suspense fallback={<SkeletonCard />}>
            <TodayTimeSpentCard />
          </Suspense>
        </div>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
          <div className='col-span-4 rounded-xl border border-stone-800 bg-card text-card-foreground shadow'>
            <div className='flex flex-col space-y-1.5 p-6'>
              <h3 className='font-semibold leading-none tracking-tight'>Weekdays Overview</h3>
            </div>
            <div className='h-[500px] p-6 pl-2 pt-0'>
              <Suspense fallback={<SkeletonChart />}>
                <WeedayBar />
              </Suspense>
            </div>
          </div>
          <div className='col-span-4 rounded-xl border border-stone-800 bg-card text-card-foreground shadow md:col-span-3'>
            <div className='flex flex-col space-y-1.5 p-6'>
              <h3 className='font-semibold leading-none tracking-tight'>Recent Languages</h3>
              <p className='text-sm text-muted-foreground'>Top 10 languages by time spent</p>
            </div>
            <div className='h-[500px] p-6 pl-2 pt-0'>
              <Suspense fallback={<SkeletonChart />}>
                <LanguagesBar />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const SkeletonCard = () => {
  return (
    <Card className='flex flex-1 flex-col space-y-3 border-stone-800 p-4'>
      <Skeleton className='w-full rounded-xl' />
      <div className='space-y-2'>
        <div className='flex justify-between'>
          <Skeleton className='h-4 w-2/3' />
          <Skeleton className='h-4 w-4' />
        </div>
        <Skeleton className='mt-2 h-4 w-1/3' />
        <Skeleton className='h-4 w-2/3' />
      </div>
    </Card>
  )
}

const SkeletonChart = () => {
  return <Skeleton className='h-full w-full rounded-xl' />
}
