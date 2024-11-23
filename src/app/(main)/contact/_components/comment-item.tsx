'use client'

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { MotionDiv } from '@/components/ui/motion-div'
import { Textarea } from '@/components/ui/textarea'
import { CommentsWithUser } from '@/lib/queries/comments'
import { cn, timeAgo } from '@/lib/utils'

import { useComment } from '../_context'

export function CommentItem({ comment, avatarClassName, ...props }: CommentItemProps) {
  // const { state, dispatch } = useComment()

  // const handleReply = (id: string) => {
  //   if (state.activeCommentId === id) {
  //     dispatch({ type: 'CLOSE_COMMENT_BOX' })
  //   } else {
  //     dispatch({ type: 'OPEN_COMMENT_BOX', commentId: id })
  //   }
  // }

  return (
    <div {...props} className='flex items-start gap-4 p-3 border-l-2 border-gray-200 pl-4 dark:border-white/50'>
      <Avatar className={cn('h-8 w-8', avatarClassName)}>
        <AvatarImage alt={comment.author?.username || undefined} src={comment.author?.avatar || undefined} />
        <AvatarFallback>{comment.author?.username?.slice(0, 2) ?? 'AN'}</AvatarFallback>
      </Avatar>
      <div className='space-y-1 w-full'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <div className='font-medium'>{comment.author?.username}</div>
            {/* <div className='text-xs text-gray-500 dark:text-gray-400'>{timeAgo(comment.createdAt)}</div> */}
            <div className='text-xs text-gray-500 dark:text-gray-400'>{comment.createdAt}</div>
          </div>
          <div className='flex items-center gap-2'>
            {/* <Button size='sm' variant='ghost' onClick={() => handleReply(comment.id)}>
              Reply
            </Button> */}
          </div>
        </div>
        <p>{comment.text}</p>
        {/* {state.activeCommentId === comment.id && (
          <MotionDiv className='mt-4' initial={{ y: -10 }} animate={{ y: 0 }}>
            <Textarea className='min-h-[100px]' placeholder='Write your reply...' />
            <div className='mt-2 flex justify-end'>
              <Button size='sm'>Submit</Button>
            </div>
          </MotionDiv>
        )} */}
      </div>
    </div>
  )
}

type CommentItemProps = {
  comment: CommentsWithUser[number]
  avatarClassName?: string
} & React.HTMLAttributes<HTMLDivElement>
