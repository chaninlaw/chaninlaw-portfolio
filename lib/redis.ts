import { createClient } from 'redis'
import { env } from './env'

export const redis = createClient({
	password: env.redis.password,
	socket: {
		host: env.redis.host,
		port: Number(env.redis.port),
	},
})
