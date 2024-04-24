import { VscLoading } from 'react-icons/vsc'

export default function Loading() {
  return (
    <div className='h-full flex justify-center items-center'>
      <div className='flex items-center'>
        <VscLoading className='animate-spin mr-4' />
        Loading...
      </div>
    </div>
  )
}
