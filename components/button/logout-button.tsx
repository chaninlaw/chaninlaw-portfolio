'use client'

import { useFormState } from 'react-dom'
import { SubmitButton } from './submit-button'
import { logout } from '@/auth/actions'
import { toast } from 'sonner'

export const LogoutButton = () => {
  const [formState, formAction] = useFormState(logout, {
    success: null
  })

  if (!formState.success) {
    toast.error(formState.message)
  }

  return (
    <form action={formAction}>
      <SubmitButton variant={'outline'}>Logout</SubmitButton>
    </form>
  )
}
