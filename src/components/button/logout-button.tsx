'use client'

import * as React from 'react'
import { SubmitButton } from './submit-button'
import { logout } from '@/auth/actions'
import { toast } from 'sonner'

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
