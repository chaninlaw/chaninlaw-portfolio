import { pgTableCreator, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core'
import { DATABASE_PREFIX as prefix } from '@/lib/constants'
export * from './email'

export const pgTable = pgTableCreator((name) => `${prefix}_${name}`)

export const emails = pgTable('email', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: varchar('email', { length: 255 }).notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  message: text('message').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { mode: 'date' }).$onUpdate(() => new Date())
})

export type Emails = typeof emails.$inferSelect
export type NewEmail = typeof emails.$inferInsert
