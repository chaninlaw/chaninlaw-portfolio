'use client'

import { User } from 'lucia'

import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { PostsWithUser } from '@/lib/queries/posts'
import { CommentItem } from './comment-item'
import { Textarea } from '@/components/ui/textarea'
import { useComment } from '../_context'
import { MotionDiv } from '@/components/ui/motion-div'

import { Form, FormField, FormLabel, FormItem, FormMessage, FormControl } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { replyPost } from '../_actions'
import { replyPostSchema } from '../_actions/validation'

import { cn, timeAgo } from '@/lib/utils'
import { z } from 'zod'
import { ClientSubmitButton } from '@/components/button/client-submit-button'

export function PostItem({ post, avatarClassName, currentUser, ...props }: PostItemProps) {
  const { state, dispatch } = useComment()
  const form = useForm<z.infer<typeof replyPostSchema>>({
    resolver: zodResolver(replyPostSchema),
    defaultValues: {
      text: '',
      authorId: currentUser?.id,
      postId: post.id
    }
  })

  const handleReplyPost = async (data: z.infer<typeof replyPostSchema>) => {
    const { success } = await replyPost(data)
    if (!success) {
      return
    } else {
      form.reset()
    }
  }

  const handleClickReply = (id: string) => {
    if (state.activeCommentId === id) {
      dispatch({ type: 'CLOSE_COMMENT_BOX' })
    } else {
      dispatch({ type: 'OPEN_COMMENT_BOX', commentId: id })
    }
  }

  return (
    <div {...props} className='flex items-start gap-4'>
      <Avatar className={cn('h-10 w-10', avatarClassName)}>
        <AvatarImage alt={post.author?.username || undefined} src={post.author?.avatar || undefined} />
        <AvatarFallback>{post.author?.username?.slice(0, 1) ?? 'AN'}</AvatarFallback>
      </Avatar>
      <div className='space-y-1 w-full'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <div className='font-medium'>{post.author?.username}</div>
            {/* <div className='text-xs text-gray-500 dark:text-gray-400'>{timeAgo(post.createdAt)}</div> */}
            <div className='text-xs text-gray-500 dark:text-gray-400'>{post.createdAt}</div>
          </div>
          <div className='flex items-center gap-2'>
            {currentUser && (
              <Button size='sm' variant='ghost' onClick={() => handleClickReply(post.id)}>
                Reply
              </Button>
            )}
          </div>
        </div>
        <p>{post.content}</p>
        {post.comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
        {state.activeCommentId === post.id && (
          <MotionDiv className='mt-4' initial={{ y: -10 }} animate={{ y: 0 }}>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleReplyPost)}>
                <FormField
                  control={form.control}
                  name='text'
                  render={({ field }) => (
                    <FormControl>
                      <Textarea {...field} className='min-h-[100px]' placeholder='Write your reply...' />
                    </FormControl>
                  )}
                />
                <div className='mt-2 flex justify-end'>
                  <ClientSubmitButton loading={form.formState.isSubmitting}>Submit</ClientSubmitButton>
                </div>
              </form>
            </Form>
          </MotionDiv>
        )}
      </div>
    </div>
  )
}

type PostItemProps = {
  post: PostsWithUser[number]
  avatarClassName?: string
  currentUser: User | null
} & React.HTMLAttributes<HTMLDivElement>
