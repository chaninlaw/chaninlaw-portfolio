CREATE TABLE IF NOT EXISTS "portfolio_email" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" varchar(255) NOT NULL,
	"name" varchar(255) NOT NULL,
	"message" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "portfolio_comments" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"text" text,
	"author_id" varchar(21) NOT NULL,
	"post_id" uuid NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "portfolio_posts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"content" text,
	"author_id" varchar(21) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "portfolio_sessions" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"user_id" varchar(21) NOT NULL,
	"expires_at" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "portfolio_users" (
	"id" varchar(21) PRIMARY KEY NOT NULL,
	"github_id" varchar(255),
	"username" varchar(255),
	"email" varchar(255),
	"avatar" varchar(255),
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp,
	CONSTRAINT "portfolio_users_github_id_unique" UNIQUE("github_id")
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "session_user_idx" ON "portfolio_sessions" ("user_id");--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "portfolio_comments" ADD CONSTRAINT "portfolio_comments_post_id_portfolio_posts_id_fk" FOREIGN KEY ("post_id") REFERENCES "portfolio_posts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
