import { AuthButton } from '@/components/button/auth-button'
import { getPostsWithUser } from '@/server/queries/posts'
import { PostItem } from './post-item'
import { CommentProvider } from '../_context'
import { validateRequest } from '@/auth'
import { CreatePost } from './create-post'

export async function PostList() {
  const { user } = await validateRequest()
  const posts = await getPostsWithUser()

  return (
    <CommentProvider>
      <div className='w-full px-4 py-6 md:px-6 md:py-12'>
        <div className='space-y-6'>
          <div className='grid grid-cols-2 items-center'>
            <div>
              <h2 className='text-2xl font-bold'>Posts to me</h2>
              {user && <p className='text-gray-500 dark:text-gray-400'>Welcome, {user.username}</p>}
            </div>
            <div className='flex justify-end gap-3 flex-wrap-reverse'>
              {user && <CreatePost authorId={user.id} />}
              <AuthButton />
            </div>
          </div>
          <div className='space-y-4'>
            {posts.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </CommentProvider>
  )
}
