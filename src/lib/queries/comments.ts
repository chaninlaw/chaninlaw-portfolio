import { db } from '@/lib/db'

export type CommentsWithUser = Awaited<ReturnType<typeof getCommentsWithUser>>
export const getCommentsWithUser = async () => {
  const comments = await db.query.comments.findMany({
    with: {
      author: true
    }
  })
  return comments
}
