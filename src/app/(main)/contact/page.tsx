import { Separator } from '@/components/ui/separator'
import { Metadata } from 'next'

import { GetInTouch } from './_components/get-in-touch'
import { PostList } from './_components/post-list'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'You can get my contact and contact me here.'
}

export default async function ContactPage() {
  return (
    <div className='h-full w-full bg-background relative flex items-center justify-center'>
      <div className='w-full h-full md:grid grid-cols-2'>
        <div className='col-span-1 flex'>
          <PostList />
        </div>

        <div className='col-span-1 flex'>
          <Separator className='hidden sm:block' orientation='vertical' />
          <GetInTouch />
        </div>
      </div>
    </div>
  )
}
