import type { Config } from 'drizzle-kit'
import { env } from './env'
import { DATABASE_PREFIX } from './lib/constants'

export default {
  schema: './server/db/schema/*',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString: env.DATABASE_URL
  },
  tablesFilter: [`${DATABASE_PREFIX}_*`]
} satisfies Config
