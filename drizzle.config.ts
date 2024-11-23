import type { Config } from 'drizzle-kit'

import { env } from '@/env'
import { DATABASE_PREFIX } from '@/lib/constants'

const config: Config = {
  dialect: 'postgresql',
  schema: ['./src/lib/db/relations.ts', './src/lib/db/schema.ts'],
  out: './drizzle',
  dbCredentials: {
    url: env.DATABASE_URL
  },
  tablesFilter: [`${DATABASE_PREFIX}_*`]
}

export default config
