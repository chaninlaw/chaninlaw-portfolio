'use client'
import { Link } from '@/components/link'
import { Kbd } from '@/components/ui/kbd'
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'
import React, { useEffect } from 'react'
import { SiVisualstudiocode } from 'react-icons/si'

export default function NotFound() {
  const { toast } = useToast()

  useEffect(() => {
    toast({
      title: 'Oops, not found.',
      description: 'This is not the page you are looking for.',
      duration: 10 * 1_000,
      action: (
        <Link href='..'>
          <ToastAction altText='Go to home'>Back</ToastAction>
        </Link>
      )
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main className='w-full h-full bg-white dark:bg-stone-900'>
      <div className='container max-w-sm space-y-10 py-24'>
        <SiVisualstudiocode className='h-80 w-80 fill-secondary dark:fill-background' />
        <div className='grid grid-cols-3'>
          <div className='col-span-2 text-end text-stone-500 space-y-4'>
            <p>Show all commands</p>
            <p>Go to File</p>
            <p>Find in file</p>
            <p>Toggle Fullscreen</p>
            <p>Show setting</p>
          </div>

          <div className='col-span-1 space-y-4'>
            <pre className='text-sm flex justify-end gap-2'>
              <Kbd>⇧</Kbd>
              <Kbd>⌘</Kbd>
              <Kbd>P</Kbd>
            </pre>
            <pre className='text-sm flex justify-end gap-2'>
              <Kbd>⌘</Kbd>
              <Kbd>P</Kbd>
            </pre>
            <pre className='text-sm flex justify-end gap-2'>
              <Kbd>⇧</Kbd>
              <Kbd>⌘</Kbd>
              <Kbd>F</Kbd>
            </pre>
            <pre className='text-sm flex justify-end gap-2'>
              <Kbd>^</Kbd>
              <Kbd>⌘</Kbd>
              <Kbd>F</Kbd>
            </pre>
            <pre className='text-sm flex justify-end gap-2'>
              <Kbd>⌘</Kbd>
              <Kbd>,</Kbd>
            </pre>
          </div>
        </div>
      </div>
    </main>
  )
}
