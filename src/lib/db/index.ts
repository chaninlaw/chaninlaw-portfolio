import { env } from '@/env'
import * as relations from '@/lib/db/relations'
import * as schema from '@/lib/db/schema'
import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'

const sql = neon(env.DATABASE_URL)
export const db = drizzle({
  client: sql,
  schema: {
    ...schema,
    ...relations
  }
})
