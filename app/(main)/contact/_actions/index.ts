'use server'

import { cache } from 'react'
import { z } from 'zod'
import { db } from '@/server/db'
import { revalidatePath } from 'next/cache'
import { env } from '@/env'

import { Resend } from 'resend'
import WelcomeEmail from '@/emails/welcome'

import { comments, emails, posts } from '@/server/db/schema'
import { createPostSchema, replyPostSchema, sendEmailSchema } from './validation'
import type { ActionResult } from '@/types/serverAction'

export const createPost = cache(async (data: z.infer<typeof createPostSchema>): Promise<ActionResult> => {
  const parsed = createPostSchema.safeParse(data)

  if (!parsed.success) {
    return {
      success: false,
      message: parsed.error.message
    }
  }

  const { authorId, content } = parsed.data

  try {
    await db.insert(posts).values({ authorId, content })
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
    success: true,
    message: 'Your post has been sent.'
  }
})

export const replyPost = cache(async (data: z.infer<typeof replyPostSchema>): Promise<ActionResult> => {
  const parsed = replyPostSchema.safeParse(data)

  if (!parsed.success) {
    return {
      success: false,
      message: parsed.error.message
    }
  }

  const { authorId, text, postId } = parsed.data

  try {
    await db.insert(comments).values({ authorId, postId, text })
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
    success: true,
    message: 'Your comment has been sent.'
  }
})

export const sendEmail = cache(async (prevState: ActionResult, formData: FormData): Promise<ActionResult> => {
  const parsed = sendEmailSchema.safeParse(Object.fromEntries(formData))

  if (!parsed.success) {
    return {
      success: false,
      message: parsed.error.message
    }
  }
  const { name, email, message } = parsed.data

  try {
    await db.insert(emails).values({ email, message, name })

    const resend = new Resend(env.RESEND_API_KEY)

    const data = await resend.emails.send({
      from: 'Chanin L. <onboarding@resend.dev>',
      to: [email],
      subject: "Let's Connect!",
      react: WelcomeEmail({ name })
    })

    if (data.error) {
      return {
        success: false,
        message: data.error.message
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  return {
    success: true,
    message: 'Your email has been sent.'
  }
})
