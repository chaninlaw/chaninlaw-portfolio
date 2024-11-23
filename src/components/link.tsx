'use client'
import NextLink from 'next/link'
import { useRouter } from 'next/navigation'
import { startTransition } from 'react'
import { Link as ProgressLink } from 'react-transition-progress/next'

import { useIsBlocked } from './navigation-block'

export function Link({ children, href, replace, ...props }: Parameters<typeof NextLink>[0]) {
  const router = useRouter()
  const isBlocked = useIsBlocked()

  return (
    <ProgressLink
      href={href}
      {...props}
      onClick={(e) => {
        if (props.target) {
          return
        }
        e.preventDefault()

        // Cancel navigation
        if (isBlocked && !window.confirm('Do you really want to leave?')) {
          return
        }

        startTransition(() => {
          const url = href.toString()
          if (replace) {
            router.replace(url)
          } else {
            router.push(url)
          }
        })
      }}
    >
      {children}
    </ProgressLink>
  )
}
