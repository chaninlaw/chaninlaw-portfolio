'use client'

import { logout } from '@/auth/actions'
import * as React from 'react'
import { toast } from 'sonner'

import { SubmitButton } from './submit-button'

export const LogoutButton = () => {
  const formRef = React.useRef<HTMLFormElement>(null)
  const [formState, formAction] = React.useActionState(logout, {
    success: null
  })

  React.useEffect(() => {
    if (!formRef.current) return
    if (formState.success === false) {
      toast.error(formState.message)
    }
  }, [formState])

  return (
    <form ref={formRef} action={formAction}>
      <SubmitButton variant={'outline'}>Logout</SubmitButton>
    </form>
  )
}
