import { relations } from 'drizzle-orm/relations'

import { posts, comments, users } from './schema'

export const commentsRelations = relations(comments, ({ one }) => ({
  post: one(posts, {
    fields: [comments.postId],
    references: [posts.id]
  }),
  author: one(users, {
    fields: [comments.authorId],
    references: [users.id]
  })
}))

export const postsRelations = relations(posts, ({ one, many }) => ({
  comments: many(comments),
  author: one(users, {
    fields: [posts.authorId],
    references: [users.id]
  })
}))
