'use client'

import { useFormStatus } from 'react-dom'
import { Button, ButtonProps } from '@/components/ui/button'
import { MotionDiv } from '../ui/motion-div'
import { VscLoading } from 'react-icons/vsc'

export function SubmitButton({ children, ...props }: { children: React.ReactNode } & ButtonProps) {
  const { pending } = useFormStatus()

  return (
    <Button {...props} type='submit' disabled={pending}>
      {pending && (
        <MotionDiv initial={{ x: 10 }} animate={{ x: 0 }}>
          <VscLoading className='animate-spin ml-1' />
        </MotionDiv>
      )}
      {children}
    </Button>
  )
}
