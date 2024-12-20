import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <section className='mx-2'>
      <div className='relative mx-auto my-6 h-full max-w-4xl space-y-4 antialiased'>
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
