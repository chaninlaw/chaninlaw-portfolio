import { validateRequest } from '@/auth/validate-request'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default async function ContactPage() {
  const { user } = await validateRequest()

  return (
    <div className='h-full w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center'>
      <div className='w-full h-full grid grid-cols-2'>
        <div className='col-span-1 flex justify-center items-center'>
          {!user && <Link href='/login/github'>Login</Link>}
          {user && user.username}
        </div>
        <div className='col-span-1 flex justify-center items-center'>Test2</div>
      </div>
    </div>
  )
}
