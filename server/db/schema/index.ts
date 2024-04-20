import { relations } from 'drizzle-orm'
import { pgTableCreator, index, text, timestamp, varchar } from 'drizzle-orm/pg-core'
import { DATABASE_PREFIX as prefix } from '@/lib/constants'

export const pgTable = pgTableCreator((name) => `${prefix}_${name}`)

export const users = pgTable('users', {
  id: varchar('id', { length: 255 }).primaryKey(),
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
    userId: varchar('user_id', { length: 255 })
      .notNull()
      .references(() => users.id),
    expiresAt: timestamp('expires_at', {
      withTimezone: true,
      mode: 'date'
    }).notNull()
  },
  (t) => ({
    userIdx: index('session_user_idx').on(t.userId)
  })
)

export const comment = pgTable(
  'comment',
  {
    id: varchar('id', { length: 255 }).primaryKey(),
    userId: varchar('user_id', { length: 255 })
      .notNull()
      .references(() => users.id),
    content: text('content').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { mode: 'date' }).$onUpdate(() => new Date()),
    parentId: varchar('parent_id', { length: 15 })
  },
  (t) => ({
    userIdx: index('comment_user_idx').on(t.userId)
  })
)

export const commentRelations = relations(comment, ({ one, many }) => ({
  user: one(users, {
    fields: [comment.userId],
    references: [users.id]
  }),
  parent: one(comment, {
    fields: [comment.parentId],
    references: [comment.id]
  }),
  children: many(comment, {
    relationName: 'children'
  })
}))

export type Comment = typeof comment.$inferSelect
export type NewComment = typeof comment.$inferInsert
