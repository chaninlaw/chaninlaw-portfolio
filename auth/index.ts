import { Lucia, TimeSpan } from 'lucia'
import { GitHub } from 'arctic'
import { DrizzlePostgreSQLAdapter } from '@lucia-auth/adapter-drizzle'
import { env } from '@/env'
import { db } from '@/server/db'
import { sessions, users, type User as DbUser } from '@/server/db/schema'
import { absoluteUrl } from '@/lib/utils'

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
      emailVerified: attributes.emailVerified,
      avatar: attributes.avatar,
      createdAt: attributes.createdAt,
      updatedAt: attributes.updatedAt,
      // github
      githubId: attributes.github_id,
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
  redirectURI: absoluteUrl('/login/github/callback')
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
