import { BestdayCard } from '@/components/skills/bestday-card'
import { DailyAverageCard } from '@/components/skills/daily-average-card'
import { LanguagesBar } from '@/components/skills/languages-bar'
import { TodayTimeSpentCard } from '@/components/skills/today-timespent-card'
import { TotalTimeSpentCard } from '@/components/skills/total-timespent-card'
import { WeedayBar } from '@/components/skills/weekday-bar'
import { Skeleton } from '@/components/ui/skeleton'
import { Suspense } from 'react'

export default function SkillsPage() {
	return (
		<section className='dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2]'>
			<div className='flex-1 space-y-4 p-8 pt-6'>
				<div className=''>
					<h2 className='text-3xl font-bold tracking-tight'>Skills</h2>
					<p className='text-xs uppercase text-muted-foreground'>
						Dashboard Summary
					</p>
				</div>
				<div className='flex space-x-2'>
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
					<div className='rounded-xl border bg-card border-stone-800 text-card-foreground shadow col-span-4'>
						<div className='flex flex-col space-y-1.5 p-6'>
							<h3 className='font-semibold leading-none tracking-tight'>
								Weekdays Overview
							</h3>
						</div>
						<div className='h-[600px] p-6 pt-0 pl-2'>
							<WeedayBar />
						</div>
					</div>
					<div className='rounded-xl border bg-card border-stone-800 text-card-foreground shadow col-span-3'>
						<div className='flex flex-col space-y-1.5 p-6'>
							<h3 className='font-semibold leading-none tracking-tight'>
								Recent Languages
							</h3>
							<p className='text-sm text-muted-foreground'>
								Top 10 languages by time spent
							</p>
						</div>
						<div className='h-[600px] p-6 pt-0 pl-2'>
							<LanguagesBar />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

const SkeletonCard = () => {
	return (
		<div className='flex flex-col space-y-3'>
			<Skeleton className='h-[125px] w-[250px] rounded-xl' />
			<div className='space-y-2'>
				<Skeleton className='h-4 w-[250px]' />
				<Skeleton className='h-4 w-[200px]' />
			</div>
		</div>
	)
}
