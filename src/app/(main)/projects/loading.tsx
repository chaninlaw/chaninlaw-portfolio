import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'

export default function Loading() {
  return (
    <div className='container mx-auto grid h-full max-w-6xl grid-cols-1 gap-4 py-4 md:auto-rows-auto md:grid-cols-3'>
      {[...Array(10)].map((_, index) => (
        <Skeleton
          key={index}
          className={cn('row-span-1 h-96 w-full rounded-xl', {
            'md:col-span-2': index === 3 || index === 6
          })}
        />
      ))}
    </div>
  )
}
