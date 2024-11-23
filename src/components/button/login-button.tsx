'use client'

import { Link } from '@/components/link'
import { Button } from '@/components/ui/button'
import { paths } from '@/lib/paths'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { useState } from 'react'
import { VscLoading } from 'react-icons/vsc'

export const LoginButton = () => {
  const [loading, setLoading] = useState(false)

  return (
    <Link href={paths.login.github} onClick={() => setLoading(true)}>
      <Button className='flex items-center gap-2' variant='outline'>
        {!loading && <GitHubLogoIcon className='h-4 w-4' />}
        {loading && <VscLoading className='h-4 w-4 animate-spin' />}
        Sign in with GitHub
      </Button>
    </Link>
  )
}
