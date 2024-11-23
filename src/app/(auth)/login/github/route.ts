import { github } from '@/auth'
import { env } from '@/env'
import { generateState } from 'arctic'
import { cookies } from 'next/headers'

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
