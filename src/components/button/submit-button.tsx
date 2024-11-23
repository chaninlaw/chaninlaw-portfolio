'use client'

import { Button, ButtonProps } from '@/components/ui/button'
import { useFormStatus } from 'react-dom'
import { VscLoading } from 'react-icons/vsc'

import { MotionDiv } from '../ui/motion-div'

export function SubmitButton({ children, ...props }: { children: React.ReactNode } & ButtonProps) {
  const { pending } = useFormStatus()

  return (
    <Button {...props} type='submit' disabled={pending}>
      {pending && (
        <MotionDiv initial={{ x: 10 }} animate={{ x: 0 }}>
          <VscLoading className='mr-1 animate-spin' />
        </MotionDiv>
      )}
      {children}
    </Button>
  )
}
