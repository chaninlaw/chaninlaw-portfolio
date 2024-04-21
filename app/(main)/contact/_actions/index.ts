'use server'

import { z } from 'zod'
import { db } from '@/server/db'
import { revalidatePath } from 'next/cache'

import { posts } from '@/server/db/schema'
import { createPostSchema } from './validation'
import type { ActionResult } from '@/types/serverAction'

export const createPost = async (data: z.infer<typeof createPostSchema>): Promise<ActionResult> => {
  const parsed = createPostSchema.safeParse(data)

  if (!parsed.success) {
    return {
      success: false,
      message: parsed.error.message
    }
  }

  const { authorId, content } = parsed.data

  try {
    await db.insert(posts).values({ authorId, content }).returning()
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  revalidatePath('/contact')
  return {
    success: true
  }
}
