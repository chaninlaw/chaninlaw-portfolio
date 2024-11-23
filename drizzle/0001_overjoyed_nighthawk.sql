DROP INDEX IF EXISTS "session_user_idx";--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "session_user_idx" ON "portfolio_sessions" USING btree ("user_id" text_ops);