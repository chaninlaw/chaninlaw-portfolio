import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
	return (
		<section className=''>
			<div className='h-full max-w-4xl mx-auto antialiased space-y-4 relative my-6'>
				<Skeleton className='h-[20px] w-[38px]' />
				<Skeleton className='h-[28px] w-full' />
				<Skeleton className='h-[600px] w-[900px]' />
				<div className='space-y-2'>
					<Skeleton className='h-4 w-[900px]' />
					<Skeleton className='h-4 w-[900px]' />
					<Skeleton className='h-4 w-[900px]' />
					<Skeleton className='h-4 w-[700px]' />
				</div>
				<Skeleton className='h-[20px] w-[38px]' />
				<Skeleton className='h-[28px] w-full' />
				<Skeleton className='h-[600px] w-[900px]' />
				<div className='space-y-2'>
					<Skeleton className='h-4 w-[900px]' />
					<Skeleton className='h-4 w-[900px]' />
					<Skeleton className='h-4 w-[900px]' />
					<Skeleton className='h-4 w-[700px]' />
				</div>
			</div>
		</section>
	)
}
