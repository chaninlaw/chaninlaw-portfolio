import { relations } from 'drizzle-orm'
import {
	pgTableCreator,
	serial,
	boolean,
	index,
	text,
	timestamp,
	varchar,
} from 'drizzle-orm/pg-core'
import { DATABASE_PREFIX as prefix } from '@/lib/constants'

export const pgTable = pgTableCreator((name) => `${prefix}_${name}`)

export const users = pgTable(
	'users',
	{
		id: varchar('id', { length: 21 }).primaryKey(),
		github_id: varchar('discord_id', { length: 255 }).unique(),
		username: varchar('username', { length: 255 }),
		email: varchar('email', { length: 255 }),
		// emailVerified: boolean('email_verified').default(false).notNull(),
		// hashedPassword: varchar('hashed_password', { length: 255 }),
		avatar: varchar('avatar', { length: 255 }),
		createdAt: timestamp('created_at').defaultNow().notNull(),
		updatedAt: timestamp('updated_at', { mode: 'date' }).$onUpdate(
			() => new Date()
		),
	},
	(t) => ({
		// emailIdx: index('user_email_idx').on(t.email),
		github_id: index('user_github_idx').on(t.github_id),
	})
)

export type User = typeof users.$inferSelect
export type NewUser = typeof users.$inferInsert

export const sessions = pgTable(
	'sessions',
	{
		id: varchar('id', { length: 255 }).primaryKey(),
		userId: varchar('user_id', { length: 21 }).notNull(),
		expiresAt: timestamp('expires_at', {
			withTimezone: true,
			mode: 'date',
		}).notNull(),
	},
	(t) => ({
		userIdx: index('session_user_idx').on(t.userId),
	})
)

// export const emailVerificationCodes = pgTable(
// 	'email_verification_codes',
// 	{
// 		id: serial('id').primaryKey(),
// 		userId: varchar('user_id', { length: 21 }).unique().notNull(),
// 		email: varchar('email', { length: 255 }).notNull(),
// 		code: varchar('code', { length: 8 }).notNull(),
// 		expiresAt: timestamp('expires_at', {
// 			withTimezone: true,
// 			mode: 'date',
// 		}).notNull(),
// 	},
// 	(t) => ({
// 		userIdx: index('verification_code_user_idx').on(t.userId),
// 		emailIdx: index('verification_code_email_idx').on(t.email),
// 	})
// )

// export const passwordResetTokens = pgTable(
// 	'password_reset_tokens',
// 	{
// 		id: varchar('id', { length: 40 }).primaryKey(),
// 		userId: varchar('user_id', { length: 21 }).notNull(),
// 		expiresAt: timestamp('expires_at', {
// 			withTimezone: true,
// 			mode: 'date',
// 		}).notNull(),
// 	},
// 	(t) => ({
// 		userIdx: index('password_token_user_idx').on(t.userId),
// 	})
// )

export const comment = pgTable(
	'comment',
	{
		id: varchar('id', { length: 15 }).primaryKey(),
		userId: varchar('user_id', { length: 255 }).notNull(),
		text: text('text').notNull(),
		createdAt: timestamp('created_at').defaultNow().notNull(),
		updatedAt: timestamp('updated_at', { mode: 'date' }).$onUpdate(
			() => new Date()
		),
	},
	(t) => ({
		userIdx: index('comment_user_idx').on(t.userId),
		createdAtIdx: index('comment_created_at_idx').on(t.createdAt),
	})
)

export const postRelations = relations(comment, ({ one }) => ({
	user: one(users, {
		fields: [comment.userId],
		references: [users.id],
	}),
}))

export type Comment = typeof comment.$inferSelect
export type NewComment = typeof comment.$inferInsert
