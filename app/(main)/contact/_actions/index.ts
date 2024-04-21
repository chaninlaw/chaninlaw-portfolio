'use server'

import { z } from 'zod'
import { db } from '@/server/db'
import { revalidatePath } from 'next/cache'

import { comments, posts } from '@/server/db/schema'
import { createPostSchema, replyPostSchema } from './validation'
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

export const replyPost = async (data: z.infer<typeof replyPostSchema>): Promise<ActionResult> => {
  const parsed = replyPostSchema.safeParse(data)

  if (!parsed.success) {
    return {
      success: false,
      message: parsed.error.message
    }
  }

  const { authorId, text, postId } = parsed.data

  try {
    await db.insert(comments).values({ authorId, postId, text }).returning()
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
