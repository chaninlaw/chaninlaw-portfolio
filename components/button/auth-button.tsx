import { LogoutButton } from './logout-button'
import { validateRequest } from '@/auth'
import { LoginButton } from './login-button'

export async function AuthButton() {
  const { user } = await validateRequest()

  return (
    <>
      {!user && <LoginButton />}
      {user && <LogoutButton />}
    </>
  )
}
