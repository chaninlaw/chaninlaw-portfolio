'use client'

import { useFormState } from 'react-dom'
import { SubmitButton } from './submit-button'
import { logout } from '@/auth/actions'
import { toast } from 'sonner'

export const LogoutButton = () => {
  const [formState, formAction] = useFormState(logout, {
    error: null
  })

  if (formState.error) {
    toast.error(formState.error)
  }

  return (
    <form action={formAction}>
      <SubmitButton variant={'outline'}>Logout</SubmitButton>
    </form>
  )
}
