import { env } from '@/env'
import { createClient } from 'redis'

export const redis = createClient({
  password: env.REDIS_PASSWORD,
  socket: {
    host: env.REDIS_HOST,
    port: Number(env.REDIS_PORT)
  }
})
