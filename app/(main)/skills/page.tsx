'use client'
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from '@/components/ui/card'

export default function SkillsPage() {
	// const data: WakatimeResponse = await fetch(
	// 	`${process.env.NEXT_PUBLIC_BASE_URL}api/wakatime`
	// ).then((res) => res.json())

	return (
		<div className='h-full w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center'>
			{/* Radial gradient for the container to give a faded look */}
			<div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
			<p className='text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8'>
				Coming soon
			</p>
		</div>
	)

	return (
		<section className='dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2]'>
			<div className='flex-1 space-y-4 p-8 pt-6'>
				<div className='flex items-center justify-between space-y-2'>
					<h2 className='text-3xl font-bold tracking-tight'>Skills</h2>
				</div>
				<div className=''>
					<Card>
						<CardHeader>
							<CardTitle>My Skills</CardTitle>
							<CardDescription>My skills and experience</CardDescription>
						</CardHeader>
						<CardContent>
							<p>My skills and experience</p>
						</CardContent>
						<CardFooter>
							<p>My skills and experience</p>
						</CardFooter>
					</Card>
				</div>
			</div>
		</section>
	)
}
