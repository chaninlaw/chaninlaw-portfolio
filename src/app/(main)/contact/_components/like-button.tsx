import { Button } from '@/components/ui/button'
import { PiHeartStraightBold, PiHeartStraightFill } from 'react-icons/pi'

export const LikeButton = () => {
  return (
    <>
      <Button size='sm' variant='ghost'>
        <PiHeartStraightBold className='h-4 w-4' />
        {/* <PiHeartStraightFill className='h-4 w-4' /> */}
      </Button>
      <div className='text-sm text-gray-500 dark:text-gray-400'>10</div>
    </>
  )
}
