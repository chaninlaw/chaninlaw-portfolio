import { env } from '@/env'
import { type ClassValue, clsx } from 'clsx'
import { cache } from 'react'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const dateFormatter = (dateStr: string) => {
  try {
    const date = new Date(dateStr)
    return new Intl.DateTimeFormat('en-us', {
      // weekday: "long",
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date)
  } catch (error) {
    console.log('Invalid date:', error)
    return 'Invalid date'
  }
}

export function absoluteUrl(path: string) {
  return new URL(path, env.NEXT_PUBLIC_APP_URL).href
}

export function timeAgo(date: Date) {
  const now = new Date()
  const seconds = Math.round((now.getTime() - date.getTime()) / 1000)
  const minutes = Math.round(seconds / 60)
  const hours = Math.round(minutes / 60)
  const days = Math.round(hours / 24)
  const months = Math.round(days / 30)
  const years = Math.round(days / 365)

  const formatter = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })

  if (seconds < 60) {
    return formatter.format(-seconds, 'second')
  } else if (minutes < 60) {
    return formatter.format(-minutes, 'minute')
  } else if (hours < 24) {
    return formatter.format(-hours, 'hour')
  } else if (days < 30) {
    return formatter.format(-days, 'day')
  } else if (months < 12) {
    return formatter.format(-months, 'month')
  } else {
    return formatter.format(-years, 'year')
  }
}

export const fetcher = cache((...args: Parameters<typeof fetch>) => fetch(...args).then((res) => res.json()))
