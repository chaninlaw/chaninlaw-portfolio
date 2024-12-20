import { validateRequest } from '@/auth'
import { AuthButton } from '@/components/button/auth-button'
import { Separator } from '@/components/ui/separator'
import { Metadata } from 'next'
import { Suspense } from 'react'

import { CreatePost } from './_components/create-post'
import { GetInTouch } from './_components/get-in-touch'
import { PostList } from './_components/post-list'
import { SkeletonPostList } from './_components/skeleton-post-list'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'You can get my contact and contact me here.'
}

export default async function ContactPage() {
  const { user } = await validateRequest()

  return (
    <div className='relative flex h-full w-full items-center justify-center bg-background'>
      <div className='h-full w-full grid-cols-2 md:grid'>
        <div className='col-span-1 flex'>
          <div className='w-full px-4 py-6 md:px-6 md:py-12'>
            <div className='space-y-6'>
              <div className='block grid-cols-2 items-center space-y-2 sm:grid'>
                <div>
                  <h2 className='text-2xl font-bold'>Posts to me</h2>
                  {user && <p className='text-gray-500 dark:text-gray-400'>Welcome, {user.username}</p>}
                </div>
                <div className='block flex-wrap-reverse justify-end gap-3 sm:flex'>
                  {user && <CreatePost authorId={user.id} />}
                  <AuthButton />
                </div>
              </div>
              <Separator />
              <div className='space-y-4'>
                <Suspense fallback={<SkeletonPostList />}>
                  <PostList />
                </Suspense>
              </div>
            </div>
          </div>
        </div>

        <div className='col-span-1 flex'>
          <Separator className='hidden sm:block' orientation='vertical' />
          <GetInTouch />
        </div>
      </div>
    </div>
  )
}
