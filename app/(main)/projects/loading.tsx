import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'

export default function Loading() {
  return (
    <div className='container h-full py-4 max-w-6xl mx-auto grid md:auto-rows-auto grid-cols-1 md:grid-cols-3 gap-4'>
      {[...Array(10)].map((_, index) => (
        <Skeleton
          key={index}
          className={cn('w-full h-96 row-span-1 rounded-xl', {
            'md:col-span-2': index === 3 || index === 6
          })}
        />
      ))}
    </div>
  )
}
