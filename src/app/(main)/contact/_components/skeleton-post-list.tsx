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
    <div className={cn('flex items-start gap-4', { 'border-l-2 border-gray-200 pl-4 dark:border-white/50': isReply })}>
      <Skeleton className='h-10 w-10 rounded-full' />
      <div className='w-full space-y-1'>
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
        <Skeleton className='mt-2 h-4 w-1/3' />
        <Skeleton className='h-4 w-2/3' />
      </div>
    </div>
  )
}
