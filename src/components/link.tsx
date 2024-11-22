'use client'
import { startTransition } from 'react'
import NextLink from 'next/link'
import { Link as ProgressLink } from 'react-transition-progress/next'
import { useRouter } from 'next/navigation'
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
