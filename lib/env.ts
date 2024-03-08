import { z } from 'zod'
// NEXT_PUBLIC_BASE_URL=http://localhost:3000/

// WAKATIME_API_KEY=waka_8379aadd-66e7-4d60-aa4a-871bdd9eb65e
// WAKATIME_CLIENT_ID=KkOz6rrccV6xwc3siBpkwRbO
// WAKATIME_CLIENT_SECRET=waka_sec_25KqIs3AmtjeIi6ROcxQPvvEaI6JNBdR9pMdzc6Qoov85HfClSnSocsr4cEU5rSKAR2dljQN8f4O0rfa

// REDIS_HOST=redis-18338.c1.ap-southeast-1-1.ec2.cloud.redislabs.com
// REDIS_PASSWORD=4KgxnnJPYFv2rolV08MKC9TtUrdQQ7ed
// REDIS_PORT=18338
const envSchema = z.object({
	baseUrl: z.string().url(),
	wakatime: z.object({
		apiKey: z.string(),
		clientId: z.string(),
		clientSecret: z.string(),
	}),
	redis: z.object({
		host: z.string(),
		password: z.string(),
		port: z.string(),
	}),
})

const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
	console.log('parsedEnv.error', parsedEnv.error)
	throw new Error('Invalid environment variables')
}

export const env = parsedEnv.data
