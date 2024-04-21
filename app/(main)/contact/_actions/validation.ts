import { z } from 'zod'

export const createPostSchema = z.object({
  content: z.string().min(1),
  authorId: z.string().min(1)
})

export const replyPostSchema = z.object({
  text: z.string().min(1),
  postId: z.string().min(1),
  authorId: z.string().min(1)
})
