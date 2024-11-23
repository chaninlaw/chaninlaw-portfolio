import { validateRequest } from '@/auth'
import { getPostsWithUser } from '@/lib/queries/posts'

import { CommentProvider } from '../_context'
import { PostItem } from './post-item'

export async function PostList() {
  const { user } = await validateRequest()
  const posts = await getPostsWithUser()

  if (!posts.length) {
    return <div className='text-center'>No posts found.</div>
  }

  return (
    <CommentProvider>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} currentUser={user} />
      ))}
    </CommentProvider>
  )
}
