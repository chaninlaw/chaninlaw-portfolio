import { pgTable, uuid, varchar, text, timestamp, index, unique, foreignKey } from 'drizzle-orm/pg-core'
import { sql } from 'drizzle-orm'

export const email = pgTable('portfolio_email', {
  id: uuid().defaultRandom().primaryKey().notNull(),
  email: varchar({ length: 255 }).notNull(),
  name: varchar({ length: 255 }).notNull(),
  message: text().notNull(),
  createdAt: timestamp('created_at', { mode: 'string' }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { mode: 'string' })
})

export const sessions = pgTable(
  'portfolio_sessions',
  {
    id: varchar({ length: 255 }).primaryKey().notNull(),
    userId: varchar('user_id', { length: 21 }).notNull(),
    expiresAt: timestamp('expires_at', { withTimezone: true, mode: 'date' }).notNull()
  },
  (table) => {
    return {
      sessionUserIdx: index('session_user_idx').using('btree', table.userId.asc().nullsLast().op('text_ops'))
    }
  }
)

export const users = pgTable(
  'portfolio_users',
  {
    id: varchar({ length: 21 }).primaryKey().notNull(),
    githubId: varchar('github_id', { length: 255 }),
    username: varchar({ length: 255 }),
    email: varchar({ length: 255 }),
    avatar: varchar({ length: 255 }),
    createdAt: timestamp('created_at', { mode: 'string' }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { mode: 'string' })
  },
  (table) => {
    return {
      portfolioUsersGithubIdUnique: unique('portfolio_users_github_id_unique').on(table.githubId)
    }
  }
)

export const posts = pgTable('portfolio_posts', {
  id: uuid().defaultRandom().primaryKey().notNull(),
  content: text(),
  authorId: varchar('author_id', { length: 21 }).notNull(),
  createdAt: timestamp('created_at', { mode: 'string' }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { mode: 'string' })
})

export const comments = pgTable(
  'portfolio_comments',
  {
    id: uuid().defaultRandom().primaryKey().notNull(),
    text: text(),
    authorId: varchar('author_id', { length: 21 }).notNull(),
    postId: uuid('post_id').notNull(),
    createdAt: timestamp('created_at', { mode: 'string' }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { mode: 'string' })
  },
  (table) => {
    return {
      portfolioCommentsPostIdPortfolioPostsIdFk: foreignKey({
        columns: [table.postId],
        foreignColumns: [posts.id],
        name: 'portfolio_comments_post_id_portfolio_posts_id_fk'
      }).onDelete('cascade')
    }
  }
)
