import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'

export function SkeletonPostList() {
  return (
    <>
      <SkeletonPostItem />
      <SkeletonPostItem />
    </>
  )
}

function SkeletonPostItem({ isReply }: { isReply?: boolean }) {
  return (
    <div className={cn('flex gap-4 items-start', { 'border-l-2 border-gray-200 pl-4 dark:border-white/50': isReply })}>
      <Skeleton className='h-10 w-10 rounded-full' />
      <div className='space-y-1 w-full'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Skeleton className='h-4 w-4 rounded-full' />
            <Skeleton className='h-4 w-4' />
          </div>
          <div className='flex items-center gap-2'>
            <Skeleton className='h-4 w-2/3' />
          </div>
        </div>
        <Skeleton className='h-4 w-full' />
        <Skeleton className='h-4 w-1/3 mt-2' />
        <Skeleton className='h-4 w-2/3' />
      </div>
    </div>
  )
}
