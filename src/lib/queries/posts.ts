import { desc, eq, sql } from 'drizzle-orm'
import { db } from '@/lib/db'
import { comments, posts, users } from '@/lib/db/schema'

export type PostsWithUser = Awaited<ReturnType<typeof getPostsWithUser>>

export const getPostsWithUser = async () => {
  return await db.query.posts.findMany({
    with: {
      comments: true,
      author: true
    },
    orderBy: [desc(posts.createdAt)]
  })
}
