import { cache } from 'react'
import { env } from '@/env'
import { db } from '@/server/db'
import { cookies } from 'next/headers'

import { Lucia, TimeSpan, type Session, type User } from 'lucia'
import { DrizzlePostgreSQLAdapter } from '@lucia-auth/adapter-drizzle'
import { GitHub } from 'arctic'
import { sessions, users, type User as DbUser } from '@/server/db/schema'
import { absoluteUrl } from '@/lib/utils'
import { paths } from '@/lib/paths'

const adapter = new DrizzlePostgreSQLAdapter(db, sessions, users)

export const lucia = new Lucia(adapter, {
  getSessionAttributes: (/* attributes */) => {
    return {}
  },
  getUserAttributes: (attributes) => {
    return {
      // attributes has the type of DatabaseUserAttributes
      id: attributes.id,
      email: attributes.email,
      avatar: attributes.avatar,
      createdAt: attributes.createdAt,
      updatedAt: attributes.updatedAt,
      // github
      githubId: attributes.githubId,
      username: attributes.username
    }
  },
  sessionExpiresIn: new TimeSpan(30, 'd'),
  sessionCookie: {
    name: 'session',
    expires: false, // session cookies have very long lifespan (2 years)
    attributes: {
      secure: env.NODE_ENV === 'production'
    }
  }
})

export const github = new GitHub(env.GITHUB_CLIENT_ID, env.GITHUB_CLIENT_SECRET, {
  redirectURI: absoluteUrl(paths.login.githubCallback)
})

declare module 'lucia' {
  interface Register {
    Lucia: typeof lucia
    DatabaseSessionAttributes: DatabaseSessionAttributes
    DatabaseUserAttributes: DatabaseUserAttributes
  }
}

interface DatabaseSessionAttributes {}
interface DatabaseUserAttributes extends Omit<DbUser, 'hashedPassword'> {}

export const uncachedValidateRequest = async (): Promise<{ user: User; session: Session } | { user: null; session: null }> => {
  'use server'
  const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null
  if (!sessionId) {
    return { user: null, session: null }
  }
  const result = await lucia.validateSession(sessionId)
  // next.js throws when you attempt to set cookie when rendering page
  try {
    if (result.session && result.session.fresh) {
      const sessionCookie = lucia.createSessionCookie(result.session.id)
      cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
    }
    if (!result.session) {
      const sessionCookie = lucia.createBlankSessionCookie()
      cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
    }
  } catch {
    console.error('Failed to set session cookie')
  }
  return result
}

export const validateRequest = cache(uncachedValidateRequest)
