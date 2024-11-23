import { VscLoading } from 'react-icons/vsc'

export default function Loading() {
  return (
    <div className='flex h-full items-center justify-center'>
      <div className='flex items-center'>
        <VscLoading className='mr-4 animate-spin' />
        Loading...
      </div>
    </div>
  )
}
