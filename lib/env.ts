import { z } from 'zod'

const envSchema = z.object({
	NEXT_PUBLIC_BASE_URL: z.string().optional(),
	NEXT_PUBLIC_VERCEL_URL: z.string().optional(),
	VERCEL_URL: z.string().optional(),
	WAKATIME_API_KEY: z.string(),
	WAKATIME_CLIENT_ID: z.string(),
	WAKATIME_CLIENT_SECRET: z.string(),
	REDIS_HOST: z.string(),
	REDIS_PASSWORD: z.string(),
	REDIS_PORT: z.string(),
})

export const env = envSchema.parse(process.env)

type EnvVarSchemaType = z.infer<typeof envSchema>

declare global {
	namespace NodeJS {
		interface ProcessEnv extends EnvVarSchemaType {}
	}
}
