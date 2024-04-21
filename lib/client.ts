import { env } from '@/env'

export const client = (endpoint: string, init?: RequestInit) => {
  let baseUrl: string | undefined = ''

  if (env.NEXT_PUBLIC_VERCEL_ENV === 'development') {
    baseUrl = env.NEXT_PUBLIC_VERCEL_URL
  }

  return fetch(`${baseUrl}${endpoint}`, init)
}
