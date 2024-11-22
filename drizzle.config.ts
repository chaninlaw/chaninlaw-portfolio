import type { Config } from 'drizzle-kit'
import { DATABASE_PREFIX } from '@/lib/constants'
import { env } from '@/env'

const config: Config = {
  dialect: 'postgresql',
  schema: './src/lib/db/{schema.ts,relations.ts}',
  out: './drizzle',
  dbCredentials: {
    url: env.DATABASE_URL
  },
  tablesFilter: [`${DATABASE_PREFIX}_*`]
}

export default config
