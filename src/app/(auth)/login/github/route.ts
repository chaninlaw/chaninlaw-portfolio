import { generateState } from 'arctic'
import { github } from '@/auth'
import { cookies } from 'next/headers'
import { env } from '@/env'

export async function GET(): Promise<Response> {
  const state = generateState()
  const url = github.createAuthorizationURL(state, [])

  const cookieStore = await cookies()

  cookieStore.set('github_oauth_state', state, {
    path: '/',
    secure: env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 60 * 10,
    sameSite: 'lax'
  })

  return Response.redirect(url)
}
