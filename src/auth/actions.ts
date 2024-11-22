'use server'

import { lucia, validateRequest } from '@/auth'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { ActionResult } from '@/types/serverAction'
import { cache } from 'react'
import { paths } from '@/lib/paths'

export const logout = cache(async (prevState: ActionResult): Promise<ActionResult> => {
  const cookieStore = await cookies()
  const { session } = await validateRequest()

  if (!session) {
    return {
      success: false,
      message: 'Unauthorized'
    }
  }

  await lucia.invalidateSession(session.id)

  const sessionCookie = lucia.createBlankSessionCookie()
  cookieStore.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
  return redirect(paths.contact)
})

export const getUser = cache(async () => {
  const cookieStore = await cookies()
  const sessionId = cookieStore.get(lucia.sessionCookieName)?.value ?? null
  if (!sessionId) return null
  const { user, session } = await lucia.validateSession(sessionId)
  try {
    if (session && session.fresh) {
      const sessionCookie = lucia.createSessionCookie(session.id)
      cookieStore.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
    }
    if (!session) {
      const sessionCookie = lucia.createBlankSessionCookie()
      cookieStore.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
    }
  } catch {
    // Next.js throws error when attempting to set cookies when rendering page
  }
  return user
})
