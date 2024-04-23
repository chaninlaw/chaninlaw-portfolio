import { Separator } from '@/components/ui/separator'
import { GetInTouch } from './_components/get-in-touch'
import { PostList } from './_components/post-list'

export default async function ContactPage() {
  return (
    <div className='h-full w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center'>
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
