import { env } from '@/env'

export const client = (endpoint: string, init?: RequestInit) => {
  let baseUrl: string | undefined = ''

  if (env.NEXT_PUBLIC_NODE_ENV === 'development') {
    baseUrl = env.NEXT_PUBLIC_APP_URL
  }

  return fetch(`${baseUrl}${endpoint}`, init)
}
