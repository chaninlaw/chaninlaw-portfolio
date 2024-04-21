'use client'

import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { PostsWithUser } from '@/server/queries/posts'
import { cn, timeAgo } from '@/lib/utils'
import { CommentItem } from './comment-item'
import { Textarea } from '@/components/ui/textarea'
import { useComment } from '../_context'
import { MotionDiv } from '@/components/ui/motion-div'

export function PostItem({ post, avatarClassName, ...props }: PostItemProps) {
  const { state, dispatch } = useComment()

  const handleReply = (id: string) => {
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
            <div className='text-xs text-gray-500 dark:text-gray-400'>{timeAgo(post.createdAt)}</div>
          </div>
          <div className='flex items-center gap-2'>
            <Button size='sm' variant='ghost' onClick={() => handleReply(post.id)}>
              Reply
            </Button>
          </div>
        </div>
        <p>{post.content}</p>
        {post.comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
        {state.activeCommentId === post.id && (
          <MotionDiv className='mt-4' initial={{ y: -10 }} animate={{ y: 0 }}>
            <Textarea className='min-h-[100px]' placeholder='Write your reply...' />
            <div className='mt-2 flex justify-end'>
              <Button size='sm'>Submit</Button>
            </div>
          </MotionDiv>
        )}
      </div>
    </div>
  )
}

type PostItemProps = {
  post: PostsWithUser[number]
  avatarClassName?: string
} & React.HTMLAttributes<HTMLDivElement>
