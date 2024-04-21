'use server'

import { lucia, validateRequest } from '@/auth'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { ActionResult } from '@/types/serverAction'

export async function logout(prevState: ActionResult): Promise<ActionResult> {
  const { session } = await validateRequest()

  if (!session) {
    return {
      success: false,
      message: 'Unauthorized'
    }
  }

  await lucia.invalidateSession(session.id)

  const sessionCookie = lucia.createBlankSessionCookie()
  cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
  return redirect('/contact')
}
