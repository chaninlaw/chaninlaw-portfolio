import { desc } from 'drizzle-orm'
import { db } from '@/lib/db'
import { posts } from '@/lib/db/schema'

export type PostsWithUser = Awaited<ReturnType<typeof getPostsWithUser>>

export const getPostsWithUser = async () => {
  return await db.query.posts.findMany({
    columns: {
      authorId: false
    },
    with: {
      author: true,
      comments: {
        with: {
          author: true
        }
      }
    },
    orderBy: [desc(posts.createdAt)]
  })
}
