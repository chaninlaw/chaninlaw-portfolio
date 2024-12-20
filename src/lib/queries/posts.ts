import { db } from '@/lib/db'
import { comments, posts, users } from '@/lib/db/schema'
import { desc, eq, sql } from 'drizzle-orm'

export type PostsWithUser = Awaited<ReturnType<typeof getPostsWithUser>>

export const getPostsWithUser = async () => {
  return await db.query.posts.findMany({
    columns: { authorId: false },
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
