import { asc } from 'drizzle-orm'
import { db } from '@/server/db'
import { posts } from '@/server/db/schema'

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
    orderBy: [asc(posts.createdAt)]
  })
}
