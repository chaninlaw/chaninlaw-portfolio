import { env } from '@/env'
import { Liveblocks } from '@liveblocks/node'
import { NextRequest } from 'next/server'

/**
 * Authenticating your Liveblocks application
 * https://liveblocks.io/docs/authentication
 */

const liveblocks = new Liveblocks({
  secret: env.LIVEBLOCKS_SECRET_KEY
})

export async function POST(req: NextRequest) {
  // We're generating random users and avatars here.
  // In a real-world scenario, this is where you'd assign the
  // user based on their real identity from your auth provider.
  const userIndex = Math.floor(Math.random() * NAMES.length)

  // Create a session for the current user (access token auth)
  const session = liveblocks.prepareSession(`user-${userIndex}`, {
    userInfo: {
      name: NAMES[userIndex],
      avatar: `https://liveblocks.io/avatars/avatar-${Math.floor(Math.random() * 30)}.png`
    }
  })

  // Use a naming pattern to allow access to rooms with a wildcard
  session.allow(`my-room`, session.FULL_ACCESS)

  const { status, body } = await session.authorize()
  return new Response(body, { status })
}

const NAMES = ['Charlie Layne', 'Mislav Abha', 'Tatum Paolo', 'Anjali Wanda', 'Jody Hekla', 'Emil Joyce', 'Jory Quispe', 'Quinn Elton']
