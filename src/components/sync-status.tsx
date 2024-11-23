'use client'
import { cn } from '@/lib/utils'
import * as React from 'react'
import { VscSync } from 'react-icons/vsc'

export function SyncStatus() {
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return <VscSync className={cn({ 'animate-spin': loading })} />
}
