import { relations } from 'drizzle-orm'
import { pgTableCreator, index, text, timestamp, varchar, serial, integer, uuid } from 'drizzle-orm/pg-core'
import { DATABASE_PREFIX as prefix } from '@/lib/constants'
export * from './email'

export const pgTable = pgTableCreator((name) => `${prefix}_${name}`)

export const users = pgTable('users', {
  id: varchar('id', { length: 21 }).primaryKey(),
  githubId: varchar('github_id', { length: 255 }).unique(),
  username: varchar('username', { length: 255 }),
  email: varchar('email', { length: 255 }),
  avatar: varchar('avatar', { length: 255 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { mode: 'date' }).$onUpdate(() => new Date())
})

export type User = typeof users.$inferSelect
export type NewUser = typeof users.$inferInsert

export const sessions = pgTable(
  'sessions',
  {
    id: varchar('id', { length: 255 }).primaryKey(),
    userId: varchar('user_id', { length: 21 }).notNull(),
    expiresAt: timestamp('expires_at', {
      withTimezone: true,
      mode: 'date'
    }).notNull()
  },
  (t) => ({
    userIdx: index('session_user_idx').on(t.userId)
  })
)

export const posts = pgTable('posts', {
  id: uuid('id').primaryKey().defaultRandom(),
  content: text('content'),
  authorId: varchar('author_id', { length: 21 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { mode: 'date' }).$onUpdate(() => new Date())
})

export type Posts = typeof posts.$inferSelect
export type NewPosts = typeof posts.$inferInsert

export const postsRelations = relations(posts, ({ one, many }) => ({
  author: one(users, {
    fields: [posts.authorId],
    references: [users.id]
  }),
  comments: many(comments)
}))

export const comments = pgTable('comments', {
  id: uuid('id').primaryKey().defaultRandom(),
  text: text('text'),
  authorId: varchar('author_id', { length: 21 }).notNull(),
  postId: uuid('post_id')
    .references(() => posts.id, { onDelete: 'cascade' })
    .notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { mode: 'date' }).$onUpdate(() => new Date())
})

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

export type Comments = typeof comments.$inferSelect
export type NewComments = typeof comments.$inferInsert
